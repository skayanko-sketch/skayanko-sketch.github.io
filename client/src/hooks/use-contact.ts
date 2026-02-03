import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import type { ContactMessage } from "@/lib/schema";

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactMessage) => {
      // Create mailto link with the form data
      const subject = encodeURIComponent(`Message de ${data.name}`);
      const body = encodeURIComponent(`Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
      const mailtoLink = `mailto:contact@example.com?subject=${subject}&body=${body}`;
      
      // Open the user's default email client
      window.location.href = mailtoLink;
      
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Client email ouvert !",
        description: "Votre client email s'est ouvert avec le message prérempli. Vous pouvez maintenant l'envoyer.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'ouverture du client email.",
        variant: "destructive",
      });
    },
  });
}
