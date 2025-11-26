"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Flame, Heart, TrendingUp, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="fluid"
      cardStyle="solid-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Brew Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168860499-nbp2greg.jpg"
          logoAlt="Brew Haven Coffee Logo"
          navItems={[
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Order Online",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="Premium Coffee Experience"
          title="Craft Coffee, Crafted with Passion"
          description="Discover the finest specialty coffee blends from around the world. Every cup tells a story of quality, tradition, and expert craftsmanship."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168862667-uwdylu8a.jpg"
          imageAlt="Premium espresso coffee cup"
          buttons={[
            { text: "Explore Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We believe that coffee is more than just a beverage. It is a celebration of craftsmanship, sustainability, and community. Our mission is to bring the world's finest coffee to your cup while supporting ethical farming practices and empowering coffee growers globally."
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Coffee Selection"
          description="Hand-selected single-origin and specialty blends for the discerning coffee lover"
          tag="Premium Blends"
          tagIcon={Coffee}
          products={[
            {
              id: "1",
              name: "Ethiopian Yirgacheffe",
              price: "$16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168864922-ks5xlkvq.jpg",
              imageAlt: "Ethiopian Yirgacheffe coffee beans"
            },
            {
              id: "2",
              name: "Italian Cappuccino Blend",
              price: "$14",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168869715-pl54tqxj.jpg",
              imageAlt: "Italian cappuccino blend"
            },
            {
              id: "3",
              name: "Colombian Reserve",
              price: "$18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168871678-z21ai2r7.jpg",
              imageAlt: "Colombian reserve coffee"
            },
            {
              id: "4",
              name: "Vietnamese Dark Roast",
              price: "$15",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168867084-y4wta3uk.jpg",
              imageAlt: "Vietnamese dark roast coffee"
            }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="The Coffee Making Process"
          description="Experience each step of how we craft your perfect cup"
          tag="Our Craft"
          tagIcon={Flame}
          features={[
            {
              id: 1,
              title: "Sourcing",
              description: "We directly partner with ethical coffee farmers across Africa, South America, and Asia to source only the highest quality beans.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168884769-e60zx6cq.jpg"
            },
            {
              id: 2,
              title: "Roasting",
              description: "Our master roasters carefully roast each batch to bring out unique flavor profiles and aromatic characteristics.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168874202-c4r38g1o.jpg"
            },
            {
              id: 3,
              title: "Brewing",
              description: "Using precision equipment and expert technique, we brew each cup to the perfect temperature and extraction.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168876499-fhbt7o9c.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Customers Say"
          description="Hear from coffee lovers who make Brew Haven part of their daily routine"
          tag="Customer Stories"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Coffee Enthusiast",
              company: "Tech Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168878203-77hr47tl.jpg"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Regular Customer",
              company: "Architect",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168879837-kulex823.jpg"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Morning Regular",
              company: "Student",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168881741-fz4fuaxt.jpg"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Weekend Visitor",
              company: "Entrepreneur",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168883240-wy8jywbk.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="By The Numbers"
          description="Our impact and growth in the coffee community"
          tag="Our Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "15K+",
              description: "Happy Customers"
            },
            {
              id: "2",
              value: "50+",
              description: "Coffee Varieties"
            },
            {
              id: "3",
              value: "8",
              description: "Years of Excellence"
            },
            {
              id: "4",
              value: "100%",
              description: "Ethical Sourcing"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee and services"
          tag="Questions?"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes your coffee different?",
              content: "We source only the finest beans directly from ethical farmers, roast them fresh to order, and brew each cup with precision and care. Every bean is carefully selected and handled to ensure maximum flavor and quality."
            },
            {
              id: "2",
              title: "Do you offer subscription services?",
              content: "Yes! We offer flexible monthly subscriptions where you can choose your favorite blends. Subscribers get 15% off and free shipping on all orders."
            },
            {
              id: "3",
              title: "Are your beans organic?",
              content: "Many of our blends are organic and all are ethically sourced. We work directly with farmers who practice sustainable and organic farming methods whenever possible."
            },
            {
              id: "4",
              title: "How should I store my coffee?",
              content: "Keep your beans in an airtight container away from direct sunlight and heat. Whole beans stay fresh for 2-3 weeks after opening. For best results, grind just before brewing."
            },
            {
              id: "5",
              title: "Do you offer gift options?",
              content: "Absolutely! We offer beautifully packaged coffee gift sets, gift cards, and custom brewing equipment. Perfect for any coffee lover's occasion."
            },
            {
              id: "6",
              title: "What is your return policy?",
              content: "We stand behind our quality. If you're not completely satisfied with any purchase, we offer a full refund within 30 days, no questions asked."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions or want to place an order? We'd love to hear from you. Reach out anytime and our team will get back to you within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help. Ask about our blends, delivery, or anything else!",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34Qgyh3s7JYDSgc82AIVt5yiftd/uploaded-1764168886326-vonct0km.jpg"
          imageAlt="Brew Haven coffee shop counter"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew Haven"
          columns={[
            {
              items: [
                { label: "Menu", href: "products" },
                { label: "Our Story", href: "about" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Subscriptions", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Shipping Info", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}