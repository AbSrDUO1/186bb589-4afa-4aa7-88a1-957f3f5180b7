"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { "id": "hero-pizza", "url": "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { "id": "about-pizza", "url": "https://images.pexels.com/photos/34322095/pexels-photo-34322095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "traditional pizzeria - Photo by Novkov Visuals" },
  { "id": "menu-pizza", "url": "https://images.pexels.com/photos/12046657/pexels-photo-12046657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two pizzas with various toppings on wooden boards over a rustic green table, captured in a top-down view." },
  { "id": "team-pizza", "url": "https://images.pexels.com/photos/5056628/pexels-photo-5056628.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Chefs preparing pizza in a bustling restaurant kitchen through a circular window view." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Experience the taste of authentic Italian pizzas."
            imageSrc={assetMap.find(a => a.id === 'hero-pizza')?.url}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="Our Story"
            description={[
              "We started with a passion for authentic Italian pizzas.",
              "Our commitment is to serve the best ingredients."
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            features={[
              { id: "01", title: "Quality Ingredients", description: "We source the best ingredients for our pizzas.", imageSrc: assetMap.find(a => a.id === 'menu-pizza')?.url },
              { id: "02", title: "Crafted with Love", description: "Every pizza is crafted with love and care.", imageSrc: assetMap.find(a => a.id === 'about-pizza')?.url }
            ]}
            title="Our Features"
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              { id: "1", name: "Chef Mario", role: "Head Chef", imageSrc: assetMap.find(a => a.id === 'team-pizza')?.url },
              { id: "2", name: "Chef Luigi", role: "Pizza Specialist", imageSrc: assetMap.find(a => a.id === 'team-pizza')?.url } 
            ]}
            title="Meet Our Team"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            testimonials={[
              { id: "1", name: "Anna", role: "Food Blogger", company: "Tasty Travels", rating: 5, imageSrc: assetMap.find(a => a.id === 'team-pizza')?.url } 
            ]}
            title="What Our Customers Say"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Stay in Touch"
            description="Sign up for updates on special offers."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [ { label: "Menu", href: "menu" }, { label: "Contact", href: "contact" } ] },
              { items: [ { label: "About", href: "about" }, { label: "Testimonials", href: "testimonials" } ] }
            ]}
            logoText="Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}