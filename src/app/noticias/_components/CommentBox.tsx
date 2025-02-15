"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, ChevronUp, Pencil, UserCircleIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Schema de validação com Zod
const commentSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Digite um e-mail válido."),
  comment: z.string().min(10, "O comentário deve ter pelo menos 10 caracteres."),
});

type CommentFormData = z.infer<typeof commentSchema>;

function CommentForm({ postId }: { postId: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(data: CommentFormData) {
    console.log("Enviando comentário...", data);
    try {
      const response = await fetch(
        `https://www.realh.com.br/wp-json/wp/v2/comments?post=${postId}&content=${data.comment}&author_name=${data.name}&author_email=${data.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response) {
        setSuccessMessage("Comentário enviado com sucesso!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 1000);
        reset();
      } else {
        throw new Error("Erro ao enviar o comentário.");
      }
    } catch (err) {
      setErrorMessage(err.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      console.error("Erro ao enviar comentário:", err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" action={`${process.env.WP_URL_API}comments`}>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mt-2">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            id="name"
            required
            className="mt-1 p-2 w-full border border-fb_blue rounded-md"
            {...register("name")}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Digite seu email"
            id="email"
            required
            className="mt-1 p-2 w-full border border-fb_blue rounded-md"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <label className="block text-sm font-medium text-gray-700 mt-2" htmlFor="comment_content">
          Conteúdo do comentário <span className="text-red-500">*</span>
        </label>
        <textarea
          name="comment"
          rows={5}
          id="comment_content"
          placeholder="Digite seu comentário"
          required
          className="mt-1 p-2 w-full border border-fb_blue rounded-md"
          {...register("comment")}
        />
        {errors.comment && <p className="text-red-500 text-sm">{errors.comment.message}</p>}
      </div>
      <Button
        className="px-3 py-6 bg-fb_blue hover:bg-fb_blue text-white font-bold text-base"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar comentário"}
      </Button>
      {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </form>
  );
}

function CommentBox({ comments, idPost }) {
  const [showReplies, setShowReplies] = useState<{ [key: string]: boolean }>({});
  const [showReplyInput, setShowReplyInput] = useState<{ [key: string]: boolean }>({});

  const toggleReplies = (commentId: string) => {
    setShowReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const onToggleReplyComment = (commentId: string) => {
    setShowReplyInput((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const [isSubmittingReply, setIsSubmittingReply] = useState<boolean>(false);

  return (
    <div className="space-y-8 p-4">
      <h4 className="text-center font-bold text-xl">Comentários</h4>
      {comments.map((comment) => (
        <div key={comment.id} className="space-y-4">
          <div className="flex items-start gap-3">
            <UserCircleIcon className="w-10 h-10 text-fb_blue_main" />
            <div className="flex-1">
              <h3 className="font-medium text-sm">{comment.author.name}</h3>
              <div
                className="text-sm text-gray-600 dark:text-gray-300 mt-1"
                dangerouslySetInnerHTML={{ __html: comment.content }}
              />
              {comment.replies && comment.replies.nodes.length > 0 && (
                <div className={`mt-2 text-xs flex`}>
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex gap-3">
                      <div className="flex cursor-pointer" onClick={() => toggleReplies(comment.id)}>
                        {comment.replies.nodes.length} Respostas{" "}
                        {showReplies[comment.id] ? (
                          <ChevronUp className="ml-1 h-3 w-3" />
                        ) : (
                          <ChevronDown className="ml-1 h-3 w-3" />
                        )}
                      </div>
                      <div className="flex gap-1">
                        <p className="relative">
                          <div className="flex gap-1 cursor-pointer" onClick={() => onToggleReplyComment(comment.id)}>
                            Responder <Pencil size={16} />
                          </div>
                        </p>
                      </div>
                    </div>
                    <div>
                      {showReplyInput[comment.id] && (
                        <form action="" method="post" className="flex flex-col">
                          <textarea
                            className={`block border border-fb_blue rounded-md p-2 mt-2 w-full ${showReplyInput[comment.id] ? "block opacity-100 visible" : "opacity-0 h-0 invisible overflow-hidden"}`}
                            name="replyComment"
                            rows={3}
                            id={`replyComment-${comment.id}`}
                            placeholder="Escreva sua resposta..."
                          ></textarea>
                          <Button
                            className="w-fit px-3 py-6 mt-4 bg-fb_blue hover:bg-fb_blue text-white font-bold text-base"
                            type="submit"
                            disabled={isSubmittingReply}
                          >
                            {isSubmittingReply ? "Enviando..." : "Enviar comentário"}
                          </Button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {comment.replies.nodes.length > 0 && showReplies[comment.id] && (
            <div className="ml-12 space-y-4">
              {comment.replies.nodes.map((reply) => (
                <div key={reply.databaseId} className="space-y-4">
                  <div className="flex items-start gap-3">
                    <UserCircleIcon className="w-10 h-10" />
                    <div>
                      <h3 className="font-medium text-sm">{reply.author.name}</h3>
                      <p
                        className="text-sm text-gray-600 dark:text-gray-300 mt-1"
                        dangerouslySetInnerHTML={{ __html: reply.content }}
                      />
                      {reply.replies && reply.replies.nodes.length > 0 && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 text-xs"
                          onClick={() => toggleReplies(reply.databaseId)}
                        >
                          Ver mais respostas{" "}
                          {showReplies[reply.databaseId] ? (
                            <ChevronUp className="ml-1 h-3 w-3" />
                          ) : (
                            <ChevronDown className="ml-1 h-3 w-3" />
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                  {reply.replies && showReplies[reply.databaseId] && (
                    <div className="ml-12 space-y-4">
                      {reply.replies.nodes.map((subReply) => (
                        <div key={subReply.databaseId} className="flex items-start gap-3">
                          <UserCircleIcon className="w-10 h-10" />
                          <div>
                            <h3 className="font-medium text-sm">{subReply.author.name}</h3>
                            <p
                              className="text-sm text-gray-600 dark:text-gray-300 mt-1"
                              dangerouslySetInnerHTML={{ __html: subReply.content }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <CommentForm postId={idPost} />
    </div>
  );
}

export default CommentBox;
