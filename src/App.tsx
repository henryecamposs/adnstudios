import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Camera,
  Clapperboard,
  Film,
  Image as ImageIcon,
  Music,
  VideoIcon,
  Wand2,
  Star,
} from 'lucide-react';
import emailjs from 'emailjs-com';

function App() {
  const services = [
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: 'Producción de Video',
      description: 'Creación de contenido audiovisual de alta calidad para cine, TV y digital',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Fotografía Profesional',
      description: 'Sesiones fotográficas para publicidad, eventos y contenido corporativo',
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: 'Filmación',
      description: 'Servicios completos de filmación con equipo profesional',
    },
    {
      icon: <VideoIcon className="w-8 h-8" />,
      title: 'Edición de Video',
      description: 'Postproducción y edición profesional de contenido audiovisual',
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: 'Efectos Visuales',
      description: 'VFX y efectos especiales para producciones audiovisuales',
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Diseño de Audio',
      description: 'Producción y postproducción de audio profesional',
    },
  ];

  const portfolio = [
    {
      image: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67',
      title: 'Producción Cinematográfica',
      description: 'Largometraje "Amanecer"',
    },
    {
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d',
      title: 'Campaña Publicitaria',
      description: 'Marca "Naturaleza Pura"',
    },
    {
      image: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881',
      title: 'Serie Documental',
      description: 'Explorando Nuestra Tierra',
    },
  ];

  const testimonials = [
    {
      quote: "La calidad y profesionalismo del equipo superó todas nuestras expectativas.",
      author: "María González",
      company: "DirectoraCine Productions",
    },
    {
      quote: "Un equipo creativo que entiende perfectamente las necesidades del cliente.",
      author: "Carlos Ruiz",
      company: "Agencia Creativa Visual",
    },
    {
      quote: "Resultados excepcionales y un proceso de trabajo muy profesional.",
      author: "Ana Martínez",
      company: "Marketing Digital Pro",
    },
  ];

  const products = [
    {
      image: 'https://images.unsplash.com/photo-1519183071298-a2962e7dbd4f',
      title: 'Cámara Profesional',
      description: 'Cámara de alta resolución para producciones profesionales',
      price: '$1,200',
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Material POP',
      description: 'Material promocional para puntos de venta',
      price: '$300',
    },
    {
      image: 'https://images.unsplash.com/photo-1581091870622-1c6b8f9b9d8c',
      title: 'Sangre Artificial',
      description: 'Sangre artificial para efectos especiales',
      price: '$50',
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Iluminación Profesional',
      description: 'Equipo de iluminación para producciones audiovisuales',
      price: '$500',
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Micrófono de Alta Calidad',
      description: 'Micrófono para grabaciones de audio profesional',
      price: '$150',
    },
  ];

  const team = [
    {
      name: 'Adrian Reyes Mendez',
      position: 'CEO',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jean Dinion',
      position: 'Presidente',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Alex Smith',
      position: 'Gerente Administrativo',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jhoe Doe',
      position: 'Gerente de Marketing',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary">ADN STUDIOS</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicios" className="text-foreground/80 hover:text-primary transition">Servicios</a>
            <a href="#portfolio" className="text-foreground/80 hover:text-primary transition">Portfolio</a>
            <a href="#testimonios" className="text-foreground/80 hover:text-primary transition">Testimonios</a>
            <a href="#contacto" className="text-foreground/80 hover:text-primary transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540655037529-dec987208707)',
            filter: 'brightness(0.2)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            ADN Studios 
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Creamos experiencias visuales únicas que cautivan y conectan con tu audiencia
          </p>
          <Button size="lg" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90">
            Ver Nuestro Portfolio
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-primary/20">
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Portfolio Destacado</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {portfolio.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-6 rounded-b-lg">
                      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                      <p className="text-foreground/80">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary border-primary" />
            <CarouselNext className="text-primary border-primary" />
          </Carousel>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="productos" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Productos Destacados</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-6 rounded-b-lg">
                      <h3 className="text-xl font-semibold text-primary">{product.title}</h3>
                      <p className="text-foreground/80">{product.description}</p>
                      <p className="text-lg font-bold text-primary">{product.price}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary border-primary" />
            <CarouselNext className="text-primary border-primary" />
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Lo que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-primary/20">
                <blockquote className="text-lg mb-4 text-foreground/80">{testimonial.quote}</blockquote>
                <footer>
                  <cite className="font-semibold block text-primary">{testimonial.author}</cite>
                  <span className="text-muted-foreground">{testimonial.company}</span>
                </footer>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 bg-card border-primary/20 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Contacta con Nosotros</h2>
          <Card className="p-6 bg-card border-primary/20">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Nombre</Label>
                <Input id="name" name="name" placeholder="Tu nombre" className="bg-background border-primary/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" className="bg-background border-primary/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto"
                  className="min-h-[150px] bg-background border-primary/20"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section id="empleo" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Bolsa de Empleo</h2>
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 text-center">
              ¿Te gustaría unirte a nuestro equipo? Envíanos tu CV y carta de presentación a <a href="mailto:empleo@adnstudios.com.ve" className="text-primary hover:underline">empleo@adnstudios.com.ve</a>
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section id="suscripcion" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Suscríbete a Nuestro Boletín</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Mantente al día con nuestras últimas noticias y ofertas exclusivas.
          </p>
          <Card className="p-6 bg-card border-primary/20">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="space-y-2">
                <Label htmlFor="newsletter-email" className="text-foreground">Email</Label>
                <Input id="newsletter-email" name="email" type="email" placeholder="tu@email.com" className="bg-background border-primary/20" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Suscribirse
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-primary">ADN STUDIOS</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 dPana Soft. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;