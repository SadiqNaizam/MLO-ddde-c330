import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedCallToActionButton from '@/components/AnimatedCallToActionButton';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner'; // For notifications

// Define the form schema using Zod
const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters." }).max(50, { message: "Full name must be 50 characters or less." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  teamName: z.string().max(50, { message: "Team name must be 50 characters or less." }).optional().or(z.literal('')), // Optional, can be empty string
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions to register.",
  }),
});

type RegistrationFormValues = z.infer<typeof formSchema>;

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      teamName: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: RegistrationFormValues) => {
    console.log('Registration form submitted:', data);
    // Simulate API call
    toast.success('Registration Submitted!', {
      description: `Thank you, ${data.fullName}! We've received your registration. Check your email (${data.email}) for confirmation.`,
      duration: 6000, // Increased duration for readability
      position: "top-center",
    });
    form.reset(); // Reset form after successful submission
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 selection:bg-purple-600 selection:text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-lg bg-gray-800/[.65] border-gray-700 shadow-2xl backdrop-blur-sm">
          <CardHeader className="text-center pt-8">
            <CardTitle className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Register for Hackathon X</CardTitle>
            <CardDescription className="text-gray-400 pt-2 text-base">
              Join us for an unforgettable experience. Spots are limited!
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 pb-8 px-6 sm:px-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Ada Lovelace" 
                          {...field} 
                          className="bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-500 focus:border-primary focus:ring-primary" 
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
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="e.g., ada@example.com" 
                          {...field} 
                          className="bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-500 focus:border-primary focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Team Name (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., The Innovators" 
                          {...field} 
                          className="bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-500 focus:border-primary focus:ring-primary" 
                        />
                      </FormControl>
                      <FormDescription className="text-xs text-gray-500 pt-1">
                        If you have a team, enter its name. You can also join or form teams later.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-700 p-4 bg-gray-700/40 hover:border-gray-600 transition-colors">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          id="agreeToTerms"
                          className="border-gray-500 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:ring-primary"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel htmlFor="agreeToTerms" className="text-sm font-medium text-gray-300 cursor-pointer">
                          I agree to the Hackathon&nbsp;
                          <a href="/code-of-conduct-placeholder.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                            Code of Conduct
                          </a> and&nbsp;
                          <a href="/terms-placeholder.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                            Terms & Conditions
                          </a>.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-600 hover:from-green-600 hover:via-teal-600 hover:to-blue-700 text-white font-semibold py-3 text-base shadow-lg hover:shadow-primary/40 transition-all duration-300 ease-in-out transform hover:scale-105" 
                  size="lg" 
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Submitting...' : 'Secure My Spot!'}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center pt-6 pb-8 border-t border-gray-700/50 mt-2">
            <p className="text-xs text-gray-500 mb-4 text-center px-4">
              Clicking the button below will reload this registration page.
            </p>
            <AnimatedCallToActionButton text="Reload Registration Form" />
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;