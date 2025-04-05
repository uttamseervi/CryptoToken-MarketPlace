"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Github, Lock, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="">
      <div className="flex min-h-screen flex-col bg-background">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-auto">
            <div className="flex gap-6 md:gap-10">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
                <span className="inline-block font-bold">TokenMarket</span>
              </Link>
              <nav className="hidden gap-6 md:flex">
                <Link
                  href="#"
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Buy
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sell
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  List Token
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  My Listings
                </Link>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4 py-2">
              <nav className="flex items-center space-x-1">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={"/dashboard"}>
                    <Button variant="default" size="default">
                      Launch app
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 mx-auto">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <motion.div
                  className="flex flex-col justify-center space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                      Decentralized Token Marketplace
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Buy, sell, and list ERC-20 tokens with ease. Our platform provides a secure and gas-efficient way to
                      trade crypto tokens.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="px-8">
                        Start Trading <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline">Learn More</Button>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-r from-primary/20 to-blue-400/20 ">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <div className="h-[250px] w-[250px] rounded-full bg-background p-4">
                        <div className="flex h-full w-full items-center justify-center rounded-full border border-muted">
                          <div className="text-center">
                            <p className="text-xl font-bold">Token Market</p>
                            <p className="text-sm text-muted-foreground">Decentralized. Secure. Efficient.</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 ">
            <div className="container px-4 md:px-6 mx-auto">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Our Platform</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our marketplace is built with the latest blockchain technology to provide a seamless trading
                    experience.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={item}>
                  <Card className="backdrop-blur-sm bg-background/30 border-primary/20 overflow-hidden">
                    <CardHeader>
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Lock className="h-5 w-5 text-primary" />
                      </motion.div>
                      <CardTitle className="mt-4">Decentralized</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Fully decentralized platform with no central authority. Your tokens, your control.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={item}>
                  <Card className="backdrop-blur-sm bg-background/30 border-primary/20 overflow-hidden">
                    <CardHeader>
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Zap className="h-5 w-5 text-primary" />
                      </motion.div>
                      <CardTitle className="mt-4">Gas-Efficient</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Optimized smart contracts that minimize gas fees for all transactions on the platform.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={item}>
                  <Card className="backdrop-blur-sm bg-background/30 border-primary/20 overflow-hidden">
                    <CardHeader>
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Shield className="h-5 w-5 text-primary" />
                      </motion.div>
                      <CardTitle className="mt-4">Secure Trading</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Audited smart contracts and secure infrastructure to protect your assets.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Traders Worldwide</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    See what our users have to say about their experience with our platform.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[1, 2, 3].map((i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="backdrop-blur-sm bg-background/30 border-primary/20 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-muted"></div>
                          <div>
                            <CardTitle className="text-base">Trader {i}</CardTitle>
                            <CardDescription>Crypto Enthusiast</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          "The platform is incredibly easy to use and the gas fees are much lower than other marketplaces
                          I've used. Highly recommended!"
                        </p>
                        <div className="mt-4 flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <CheckCircle key={star} className="h-4 w-4 text-primary" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <div className="container px-4 md:px-6 mx-auto">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Trading?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join thousands of traders on our platform and experience the future of token trading.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="px-8">
                      Launch App <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline">Learn More</Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t bg-background py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0 mx-auto">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} TokenMarket. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

