import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, FileText, Send } from "lucide-react";

const sampleRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  bestTimeToReach: z.string().optional(),
  samplesOf: z.string().min(10, "Please specify what samples you need (minimum 10 characters)")
});

type SampleRequestForm = z.infer<typeof sampleRequestSchema>;

export default function RequestSamplePage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const form = useForm<SampleRequestForm>({
    resolver: zodResolver(sampleRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      bestTimeToReach: '',
      samplesOf: ''
    }
  });

  const onSubmit = async (data: SampleRequestForm) => {
    setSubmitStatus('submitting');
    
    try {
      const response = await fetch('/api/sample-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Request Data Samples
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get customized data samples from our premium technology databases. 
              Fill out the form below and we'll prepare samples tailored to your specific needs.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your sample request. Our team will prepare your customized data samples 
                  and contact you within 24 hours with the requested information.
                </p>
                <Button 
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="max-w-2xl mx-auto shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">Sample Request Form</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name - Required */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-semibold">
                            Full Name <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email - Required */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-semibold">
                            Email Address <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Enter your email address" 
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone - Optional */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-semibold">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="Enter your phone number (optional)" 
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Company - Optional */}
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-semibold">Company Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your company name (optional)" 
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Best Time to Reach - Optional */}
                    <FormField
                      control={form.control}
                      name="bestTimeToReach"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-semibold">Best Time to Reach You</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g., Morning EST, Afternoon PST (optional)" 
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Samples Of - Required */}
                    <FormField
                      control={form.control}
                      name="samplesOf"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900 font-semibold">
                            Samples Of <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please specify what data samples you need (e.g., SAP users in healthcare industry, Salesforce CRM contacts in manufacturing, Oracle database administrators in financial services, etc.)"
                              rows={4}
                              {...field}
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                          <p className="text-sm text-gray-500 mt-1">
                            Be specific about the technology, industry, or role you're interested in for better sample preparation.
                          </p>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg font-semibold"
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Request Data Samples
                        </>
                      )}
                    </Button>

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                        <p className="text-red-600 font-medium">
                          There was an error submitting your request. Please try again or contact us directly.
                        </p>
                      </div>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-lg text-gray-600">Our process for preparing your custom data samples</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Review</h3>
              <p className="text-gray-600">
                Our team reviews your sample request and identifies the best data sources from our 500+ technology databases.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sample Preparation</h3>
              <p className="text-gray-600">
                We prepare customized data samples with verified contacts matching your specific technology and industry requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sample Delivery</h3>
              <p className="text-gray-600">
                Receive your custom data samples within 24 hours via email, complete with data insights and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}