import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, MessageSquare, Workflow, Settings, Rocket, Target, CheckCircle2, ArrowRight, Clock, TrendingUp, DollarSign, Star, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-[#000a00]/0">
              Sidnex AI
            </h1>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-smooth">
                Services
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-muted-foreground hover:text-foreground transition-smooth">
                How It Works
              </button>
              <button onClick={() => scrollToSection('results')} className="text-muted-foreground hover:text-foreground transition-smooth">
                Results
              </button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-30" style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <div className="absolute inset-0 z-0 gradient-hero opacity-90" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Automate Faster.<br />
              Scale Smarter.<br />
              <span className="gradient-primary bg-clip-text animate-glow text-white/0">
                Welcome to Sidnex AI.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We build intelligent AI workflows, automations, and digital agents that transform the way businesses operate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8 py-6">
                Book a Free Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6" onClick={() => scrollToSection('services')}>
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI automation solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Zap,
            title: "AI Automation",
            description: "Streamline operations with intelligent workflows that work 24/7"
          }, {
            icon: MessageSquare,
            title: "WhatsApp + Voice Agents",
            description: "Deploy conversational AI that engages customers instantly"
          }, {
            icon: Workflow,
            title: "n8n / API Integrations",
            description: "Connect your entire tech stack seamlessly"
          }, {
            icon: Settings,
            title: "Custom Workflows",
            description: "Build tailored automation solutions for unique challenges"
          }].map((service, index) => <Card key={index} className="bg-card border-border hover:border-primary transition-smooth shadow-card hover:shadow-glow group animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Sidnex AI Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Sidnex AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The competitive edge your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: Rocket,
            title: "Lightning-Fast Delivery",
            description: "Launch automations in days, not months"
          }, {
            icon: TrendingUp,
            title: "Scalable Solutions",
            description: "Grow without limits, from startup to enterprise"
          }, {
            icon: Target,
            title: "Proven Results",
            description: "Backed by real ROI and measurable impact"
          }, {
            icon: CheckCircle2,
            title: "Expert Support",
            description: "Dedicated team ensuring your success"
          }].map((item, index) => <div key={index} className="text-center space-y-4 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center shadow-glow">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{
            number: "01",
            title: "Understand Your System",
            description: "We analyze your current workflows and identify automation opportunities"
          }, {
            number: "02",
            title: "Build Smart Automations",
            description: "Our team designs and implements custom AI solutions tailored to your needs"
          }, {
            number: "03",
            title: "Launch & Scale",
            description: "Deploy, monitor, and optimize as your business grows"
          }].map((step, index) => <div key={index} className="relative animate-fade-in" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold gradient-primary bg-clip-text text-transparent opacity-50 rounded-2xl bg-[#000a0e]">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 2 && <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* Tools & Integrations */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered By Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamless integrations with the tools you already use
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
            {['n8n', 'Vapi', 'Twilio', 'WhatsApp', 'OpenAI', 'Zapier'].map((tool, index) => <div key={index} className="text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-smooth cursor-default animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {tool}
              </div>)}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what automation can do for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{
            icon: Clock,
            metric: "80%",
            description: "Time Saved on Manual Tasks"
          }, {
            icon: DollarSign,
            metric: "3x",
            description: "ROI in First 6 Months"
          }, {
            icon: Users,
            metric: "95%",
            description: "Customer Satisfaction Rate"
          }].map((result, index) => <Card key={index} className="bg-card border-border text-center hover:border-primary transition-smooth shadow-card animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center shadow-glow mb-4">
                    <result.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-5xl gradient-primary bg-clip-text text-[#000a00]/0">
                    {result.metric}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{
            quote: "Sidnex AI transformed our customer service with WhatsApp automation. Response times dropped from hours to seconds.",
            author: "Sarah Chen",
            role: "CEO, TechStart Inc"
          }, {
            quote: "The n8n workflows they built saved us 40+ hours per week. Best investment we've made in our operations.",
            author: "Michael Rodriguez",
            role: "Operations Director, GrowthCo"
          }, {
            quote: "Professional, fast, and results-driven. They understood our needs perfectly and delivered beyond expectations.",
            author: "Emma Thompson",
            role: "Founder, Digital Ventures"
          }].map((testimonial, index) => <Card key={index} className="bg-card border-border hover:border-primary transition-smooth shadow-card animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                  </div>
                  <CardDescription className="text-base text-foreground/90 italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of businesses already saving time and scaling with AI automation.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-xl px-12 py-8">
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-primary bg-clip-text mb-4 text-[#000a00]/0">
                Sidnex AI
              </h3>
              <p className="text-muted-foreground">
                Intelligent automation for modern businesses
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-smooth">AI Automation</li>
                <li className="hover:text-foreground cursor-pointer transition-smooth">Voice Agents</li>
                <li className="hover:text-foreground cursor-pointer transition-smooth">Integrations</li>
                <li className="hover:text-foreground cursor-pointer transition-smooth">Custom Workflows</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-smooth">About</li>
                <li className="hover:text-foreground cursor-pointer transition-smooth">Case Studies</li>
                <li className="hover:text-foreground cursor-pointer transition-smooth">Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-smooth">LinkedIn</li>
                <li className="hover:text-foreground cursor-pointer transition-smooth">Twitter</li>
                <li className="hover:text-foreground cursor-pointer transition-smooth">Instagram</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© Sidnex AI 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;