"use client";

import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PointerEvent, useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import styles from "./Timeline.module.css";

export type TimelineEvento = {
  ano: string;
  titulo: string;
  texto?: string;
  imagem?: string | StaticImageData;
};

type Props = {
  title?: string;
  eventos: TimelineEvento[];
};

const TRACK_PADDING = 96;
const TRACK_TAIL_PADDING = 160;
const LABEL_ROW_HEIGHT = 40;
const YEARS_PER_SCREEN_DESKTOP = 16;
const YEARS_PER_SCREEN_MOBILE = 8;
const DESKTOP_BREAKPOINT = 1024;
const DRAG_THRESHOLD_PX = 6;
const TIMELINE_IMAGE_CLASS = "h-auto w-full rounded-sm object-cover shadow-md";

function useIsHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function getYearsPerScreen(viewportWidth: number): number {
  return viewportWidth >= DESKTOP_BREAKPOINT ? YEARS_PER_SCREEN_DESKTOP : YEARS_PER_SCREEN_MOBILE;
}

function yearToLeft(year: number, firstYear: number, yearStepPx: number): number {
  return TRACK_PADDING + (year - firstYear) * yearStepPx;
}

type TimelineLayout = {
  firstYear: number;
  lastYear: number;
  yearStepPx: number;
  yearColumns: YearColumn[];
  axisYears: AxisTick[];
  trackWidthPx: number;
};

function buildTimelineLayout(eventos: TimelineEvento[], viewportWidth: number): TimelineLayout {
  const groups = groupEventsByYear(eventos).sort((a, b) => a.year - b.year);

  if (groups.length === 0) {
    return {
      firstYear: 0,
      lastYear: 0,
      yearStepPx: 0,
      yearColumns: [],
      axisYears: [],
      trackWidthPx: viewportWidth,
    };
  }

  const firstYear = groups[0].year;
  const lastYear = groups[groups.length - 1].year;
  const yearStepPx = viewportWidth / getYearsPerScreen(viewportWidth);

  const yearColumns: YearColumn[] = groups.map((group) => ({
    ...group,
    left: yearToLeft(group.year, firstYear, yearStepPx),
  }));

  const axisYears: AxisTick[] = [];
  for (let year = firstYear; year <= lastYear; year += 1) {
    axisYears.push({ year, left: yearToLeft(year, firstYear, yearStepPx) });
  }

  const trackWidthPx = yearToLeft(lastYear, firstYear, yearStepPx) + TRACK_PADDING + TRACK_TAIL_PADDING;

  return {
    firstYear,
    lastYear,
    yearStepPx,
    yearColumns,
    axisYears,
    trackWidthPx,
  };
}

function hasSrc(src: string | StaticImageData | undefined): src is string | StaticImageData {
  if (!src) {
    return false;
  }

  return typeof src !== "string" || src.trim() !== "";
}

function parseYearStart(ano: string): number {
  const match = ano.match(/\d{4}/);
  return match ? Number.parseInt(match[0], 10) : 0;
}

type YearColumn = {
  year: number;
  left: number;
  items: { index: number; evento: TimelineEvento }[];
};

type AxisTick = {
  year: number;
  left: number;
};

function groupEventsByYear(eventos: TimelineEvento[]): { year: number; items: YearColumn["items"] }[] {
  const order: number[] = [];
  const byYear = new Map<number, YearColumn["items"]>();

  eventos.forEach((evento, index) => {
    const year = parseYearStart(evento.ano);

    if (!byYear.has(year)) {
      order.push(year);
      byYear.set(year, []);
    }

    byYear.get(year)?.push({ index, evento });
  });

  return order.map((year) => ({ year, items: byYear.get(year) ?? [] }));
}

function eventDescription(evento: TimelineEvento): string {
  if (evento.texto?.trim()) {
    return evento.texto.trim();
  }

  return evento.titulo;
}

function getDirection(current: number, next: number, total: number): 1 | -1 {
  if (current === next) {
    return 1;
  }

  if (current === total - 1 && next === 0) {
    return 1;
  }

  if (current === 0 && next === total - 1) {
    return -1;
  }

  return next > current ? 1 : -1;
}

export default function Timeline({ title = "A História do Grupo Real", eventos }: Props) {
  const isHydrated = useIsHydrated();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [viewportWidth, setViewportWidth] = useState(1280);
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const dragPointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const didDragRef = useRef(false);

  const safeIndex = Math.min(activeIndex, Math.max(eventos.length - 1, 0));
  const activeEvent = eventos[safeIndex];

  const layout = useMemo(() => buildTimelineLayout(eventos, viewportWidth), [eventos, viewportWidth]);
  const { yearColumns, axisYears, trackWidthPx, yearStepPx, firstYear, lastYear } = layout;

  const activeColumn = yearColumns.find((column) => column.items.some((item) => item.index === safeIndex));
  const activeLeft = activeColumn?.left ?? TRACK_PADDING;

  const axisLineLeft = TRACK_PADDING;
  const axisLineWidth = Math.max(0, (lastYear - firstYear) * yearStepPx);

  const maxStack = Math.max(1, ...yearColumns.map((column) => column.items.length));
  const labelsHeight = maxStack * LABEL_ROW_HEIGHT;
  const axisHeight = 52;

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const container = scrollRef.current;
      if (!container) {
        return;
      }

      const column = yearColumns.find((col) => col.items.some((item) => item.index === index));
      if (!column) {
        return;
      }

      const targetLeft = column.left - container.clientWidth / 2;
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);

      container.scrollTo({
        left: Math.max(0, Math.min(targetLeft, maxScroll)),
        behavior,
      });
    },
    [yearColumns],
  );

  useEffect(() => {
    scrollToIndex(safeIndex);
  }, [safeIndex, scrollToIndex, trackWidthPx]);

  const goTo = useCallback(
    (index: number) => {
      if (eventos.length === 0) {
        return;
      }

      const next = ((index % eventos.length) + eventos.length) % eventos.length;

      if (next === safeIndex) {
        return;
      }

      setSlideDirection(getDirection(safeIndex, next, eventos.length));
      setActiveIndex(next);
    },
    [eventos.length, safeIndex],
  );

  const goPrev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);
  const goNext = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);

  const stopDragging = useCallback(() => {
    dragPointerIdRef.current = null;
    setIsDragging(false);
  }, []);

  const handlePointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const container = scrollRef.current;
    if (!container) {
      return;
    }

    dragPointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = container.scrollLeft;
    didDragRef.current = false;
    container.setPointerCapture(event.pointerId);
  }, []);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (dragPointerIdRef.current !== event.pointerId) {
      return;
    }

    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const delta = event.clientX - dragStartXRef.current;

    if (!didDragRef.current && Math.abs(delta) < DRAG_THRESHOLD_PX) {
      return;
    }

    didDragRef.current = true;
    setIsDragging(true);
    event.preventDefault();
    container.scrollLeft = dragStartScrollRef.current - delta;
  }, []);

  const handlePointerUp = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (dragPointerIdRef.current !== event.pointerId) {
        return;
      }

      const container = scrollRef.current;
      if (container?.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }

      stopDragging();
    },
    [stopDragging],
  );

  const handleYearSelect = useCallback(
    (index: number) => {
      if (didDragRef.current) {
        return;
      }

      goTo(index);
    },
    [goTo],
  );

  if (eventos.length === 0 || !activeEvent) {
    return null;
  }

  const slideClass = slideDirection === 1 ? styles["timeline-slide-in-right"] : styles["timeline-slide-in-left"];
  const showImageColumn = hasSrc(activeEvent.imagem);

  return (
    <section className="flex flex-col overflow-hidden">
      <div className="fb_container py-8">
        <h2 className="text-3xl font-semibold text-[var(--blue-main)]">{title}</h2>
      </div>

      <div className="relative bg-white">
        <div className="fb_container relative flex min-h-[320px] items-center py-10 sm:min-h-[380px] sm:py-14">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 p-2 text-[var(--blue-main)] transition-opacity hover:opacity-70 sm:left-4"
            aria-label="Fato anterior"
          >
            <ChevronLeft className="h-10 w-10 stroke-[1.5] sm:h-12 sm:w-12" />
          </button>

          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 px-12 sm:grid-cols-2 sm:gap-12 sm:px-16">
            {showImageColumn ? (
              <div className="flex justify-center sm:justify-end">
                <div className={isHydrated ? "relative w-full max-w-[280px]" : "w-full max-w-[280px]"}>
                  {isHydrated
                    ? eventos.map((evento, index) => {
                        if (!hasSrc(evento.imagem)) {
                          return null;
                        }

                        const isActive = index === safeIndex;

                        return (
                          <div
                            key={`slide-image-${index}`}
                            className={isActive ? styles["slide-image-visible"] : styles["slide-image-hidden"]}
                            {...(!isActive ? { "aria-hidden": true } : {})}
                          >
                            <Image
                              src={evento.imagem}
                              alt={isActive ? evento.titulo : ""}
                              width={280}
                              height={280}
                              placeholder="empty"
                              loading="eager"
                              priority={index === 0}
                              className={TIMELINE_IMAGE_CLASS}
                            />
                          </div>
                        );
                      })
                    : (
                      <Image
                        src={activeEvent.imagem}
                        alt={activeEvent.titulo}
                        width={280}
                        height={280}
                        placeholder="empty"
                        priority
                        className={TIMELINE_IMAGE_CLASS}
                      />
                    )}
                  <p className="mt-2 text-xs text-[#9A9A9A]">Grupo Real H</p>
                </div>
              </div>
            ) : (
              <div className="hidden sm:block" aria-hidden />
            )}

            <div
              key={safeIndex}
              className={`text-center ${showImageColumn ? "sm:text-left" : "sm:col-span-2 sm:text-center"} ${slideClass}`}
            >
              <p className="text-2xl font-semibold tracking-tight text-[var(--blue-main)] sm:text-3xl">{activeEvent.ano}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#333333] sm:text-base">{eventDescription(activeEvent)}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-2 text-[var(--blue-main)] transition-opacity hover:opacity-70 sm:right-4"
            aria-label="Próximo fato"
          >
            <ChevronRight className="h-10 w-10 stroke-[1.5] sm:h-12 sm:w-12" />
          </button>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#ececec] py-8 sm:py-10">
        <div
          ref={scrollRef}
          className={`${styles["timeline-scroll"]} ${isDragging ? styles["timeline-scroll-dragging"] : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="relative" style={{ width: trackWidthPx, minHeight: labelsHeight + axisHeight + 16 }}>
            <div className="relative" style={{ height: labelsHeight }}>
              {yearColumns.map((column) => (
                <div
                  key={`year-${column.year}`}
                  className="absolute bottom-0 flex -translate-x-1/2 flex-col items-center justify-end gap-1"
                  style={{ left: column.left }}
                >
                  {column.items.map(({ index, evento }) => {
                    const isActive = index === safeIndex;

                    return (
                      <button
                        key={`label-${evento.ano}-${index}`}
                        type="button"
                        onClick={() => handleYearSelect(index)}
                        className={`${styles["year-button"]} ${isActive ? styles["year-button-active"] : ""}`}
                        aria-label={`Ver fato de ${evento.ano}: ${evento.titulo}`}
                        aria-current={isActive ? "true" : undefined}
                      >
                        {evento.ano}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className={styles["axis-band"]} style={{ height: axisHeight }}>
              <div
                className={styles["axis-active-marker"]}
                style={{ left: activeLeft }}
                aria-hidden
              />

              <div
                className={styles["axis-line"]}
                style={{ left: axisLineLeft, width: axisLineWidth }}
                aria-hidden
              />

              {yearColumns.map((column) => (
                <div
                  key={`event-dot-${column.year}`}
                  className="absolute top-[7px] flex -translate-x-1/2 flex-col items-center gap-1"
                  style={{ left: column.left }}
                >
                  {column.items.map(({ index, evento }) => {
                    const isActive = index === safeIndex;

                    return (
                      <button
                        key={`dot-${evento.ano}-${index}`}
                        type="button"
                        onClick={() => handleYearSelect(index)}
                        className="rounded-full p-0.5 outline-none"
                        aria-label={`Ver fato de ${evento.ano}: ${evento.titulo}`}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span
                          className={`${styles["year-dot"]} ${
                            isActive ? styles["year-dot-active"] : styles["year-dot-inactive"]
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              ))}

              {axisYears.map((tick) => (
                <div
                  key={`axis-year-${tick.year}`}
                  className={styles["axis-year"]}
                  style={{ left: tick.left }}
                  aria-hidden
                >
                  <span className={styles["axis-tick-mark"]} />
                  <span className={styles["axis-year-label"]}>{tick.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
