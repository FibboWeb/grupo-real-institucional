export default function Page({ title, address, iframeSrc }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap border-none rounded-md py-2">
        <div className="w-full md:w-1/2 py-4 font-medium  tracking-wide md:pr">
          <div className="max-w-[520px] flex flex-col gap-2">
            <h3 className="-xl font-bold text-navy-900">{title}</h3>
            <h4 className="text-xl font-bold text-muted-foreground">Endereço</h4>
            <p className="text-muted-foreground">{address}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 pb-4 flex justify-end">
          <iframe
            src={iframeSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl min-h-[300px]"
          />
        </div>
      </div>
      <hr />
    </div>
  );
}
