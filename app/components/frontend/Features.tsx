import { CloudRain } from "lucide-react";

const features = [
  {
    name: "Sign up for free",
    description:
      "Create your blog and start publishing content.Our platform is free and open-source.",
    icon: CloudRain,
  },
  {
    name: "Manage your posts",
    description:
      "Create, edit, and delete your blog posts. We make it easy to get started.",
    icon: CloudRain,
  },
  {
    name: "Publish your content",
    description:
      "Publish your blog posts to your website.We make it easy to get started.",
    icon: CloudRain,
  },
  {
    name: "Customize your blog",
    description:
      "Customize your blog theme and branding.This is a free and open-source blogging platform.",
    icon: CloudRain,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32 ">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">
          Blog Nest is a free and open-source blogging platform .
        </p>
        <h1 className="mt-2 font-bold tracking-tight sm:text-4xl text-3xl ">
          Get your blog up and running in minutes
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          Right here you can create your blog, manage your posts, and publish
          your content. We make it easy to get started.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
