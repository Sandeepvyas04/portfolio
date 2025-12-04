import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "builtwith.sandeep@gmail.com",
    href: "mailto:builtwith.sandeep@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99885-06075",
    href: "tel:+919988506075",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ludhiana, Punjab, India",
    href: null,
  },
];

const socialLinks = [
  { icon: "fa-github", label: "GitHub", href: "https://github.com" },
  { icon: "fa-linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "fa-twitter", label: "Twitter", href: "https://twitter.com" },
];

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-muted/30"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-primary font-semibold tracking-wide uppercase text-sm"
            data-testid="text-contact-label"
          >
            Get In Touch
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold mt-3 tracking-tight font-serif"
            data-testid="text-contact-heading"
          >
            Let's Work Together
          </h2>
          <p
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
            data-testid="text-contact-description"
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4"
                  data-testid={`contact-info-${item.label.toLowerCase()}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-contact-label-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                        data-testid={`link-contact-${item.label.toLowerCase()}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="font-medium"
                        data-testid={`text-contact-value-${item.label.toLowerCase()}`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p
                className="text-sm text-muted-foreground mb-4"
                data-testid="text-social-label"
              >
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="icon"
                    asChild
                    data-testid={`button-social-${link.label.toLowerCase()}`}
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <i className={`fab ${link.icon}`} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <Card data-testid="card-availability">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full bg-green-500 animate-pulse"
                    data-testid="status-available"
                  />
                  <div>
                    <p
                      className="font-medium"
                      data-testid="text-availability-title"
                    >
                      Available for opportunities
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid="text-availability-description"
                    >
                      Open to entry-level web development roles
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card data-testid="card-contact-form">
            <CardContent className="p-6 lg:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Name <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              data-testid="input-contact-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage data-testid="error-contact-name" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Email <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              data-testid="input-contact-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage data-testid="error-contact-email" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What's this about?"
                            data-testid="input-contact-subject"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage data-testid="error-contact-subject" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Message <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or opportunity..."
                            rows={5}
                            data-testid="input-contact-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage data-testid="error-contact-message" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={mutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
