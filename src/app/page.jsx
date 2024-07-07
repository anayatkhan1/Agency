import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { core, oneheadlight, swiggy, vardaan, juniper, myshell } from '@/images/work'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const clients = [
  ['Vardaan', vardaan],
  ['Core Soccer Tech', core],
  ['My Shell', myshell],
  ['Swiggy', swiggy],
  ['Juniper', juniper],
  ['One Head light', oneheadlight],
]

function Clients() {
  return (
    <div className="py-20 mt-24 rounded-4xl bg-neutral-950 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-sm font-semibold tracking-wider text-center text-white font-display sm:text-left">
            We’ve worked with numerous amazing people
          </h2>
          <div className="flex-auto h-px bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="grid grid-cols-2 mt-10 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn >
                <Image className="" src={logo} alt={client} title={client} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We embrace technology as both the solution and the dilemma to today's greatest challenges, navigating a nuanced landscape where innovation sparks both progress and complexity.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex flex-col w-full p-6 transition rounded-3xl ring-1 ring-neutral-950/5 hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="flex mt-6 text-sm gap-x-2 text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 text-2xl font-semibold font-display text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        As long as those opportunities allow us to generate revenue by repurposing old projects - we can endlessly supply innovative solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-start lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
            We specialize in crafting beautiful, high-quality marketing pages that captivate your audience and enhance your online presence. The rest of the website will be a shell that uses lorem ipsum everywhere.
            </ListItem>
            <ListItem title="Application development">
            Our team of skilled developers excels in the latest app frameworks, including Next.js, React, React Native, and Flutter. We build robust and scalable applications tailored to your business needs.
            </ListItem>
            <ListItem title="E-commerce Solutions">
            At the forefront of modern e-commerce development, we create engaging and efficient online stores. Our solutions are customized to enhance user experience and drive business growth.
            </ListItem>
            <ListItem title="Cloud Solutions">
            We provide cloud integration, migration, and management services to ensure your business leverages the full potential of cloud technology. Our solutions are designed to be scalable, secure, and efficient.
            </ListItem>
            <ListItem title="Machine Learning">
            We incorporate machine learning capabilities into our solutions to provide predictive analytics, pattern recognition, and automated decision-making processes.
            </ListItem>
            <ListItem title="FEA Tools Development">
            We specialize in developing advanced Finite Element Analysis (FEA) tools tailored to optimize structural design processes. Our tools ensure accurate simulations and efficient engineering solutions.
            </ListItem>
            <ListItem title="API Development and Integration">
            Our expertise in building and integrating APIs ensures seamless data exchange between your systems, enhancing interoperability and functionality.
            </ListItem>
            <ListItem title="Software Consulting">
            Our expert consultants offer strategic advice and planning to help you optimize technology usage, improve processes, and achieve your business goals.
            </ListItem>
            <ListItem title="Maintenance and Support">
            We offer ongoing support and maintenance services to keep your software running smoothly and efficiently. Our dedicated team ensures timely updates and quick resolution of any issues.
            </ListItem>
            <ListItem title="DevOps Services">
            Our DevOps services automate software development and deployment processes, improving efficiency and reducing time to market. We ensure seamless integration and continuous delivery.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Hub where design meets technology, shaping the digital future.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          We&apos;re a development studio thriving at the crossroads of design and technology. 
          It&apos;s a bustling intersection — our team often finds themselves in the midst of exciting challenges and creative collisions.
          </p>
        </FadeIn>
      </Container>
      <Clients />

      <CaseStudies caseStudies={caseStudies} />


      <Services />

      <ContactSection />
    </>
  )
}
