'use client';

import Image from "next/image";
import Link from "next/link";

export interface Gallery4Props {
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
  }[];
}

export function Gallery4({ title, description, items }: Gallery4Props) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl tracking-tighter mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4 max-w-[300px] mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 