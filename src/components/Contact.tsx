
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    // Here you would typically send this data to your backend or email service
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    form.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        <div className="h-1 w-20 bg-ai-blue mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Interested in discussing how AI can transform your business? I'm here to help.
              Whether you have a specific project in mind or just want to explore possibilities,
              feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-ai-blue mr-4" />
                <a href="mailto:tarachandvishnoi@gmail.com" className="text-gray-300 hover:text-ai-blue transition-colors">
                  tarachandvishnoi@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 text-ai-blue mr-4" />
                <a href="https://linkedin.com/in/tarachand" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ai-blue transition-colors">
                  linkedin.com/in/tarachand
                </a>
              </div>
              
              <div className="flex items-center">
                <Github className="w-5 h-5 text-ai-blue mr-4" />
                <a href="https://github.com/tarachand" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ai-blue transition-colors">
                  github.com/tarachand
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="bg-ai-dark/50 border-gray-700 text-white focus-visible:ring-ai-blue" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          className="bg-ai-dark/50 border-gray-700 text-white focus-visible:ring-ai-blue" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can I help you?" 
                          className="bg-ai-dark/50 border-gray-700 text-white focus-visible:ring-ai-blue min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="bg-ai-blue hover:bg-ai-blue/90 text-white w-full">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
