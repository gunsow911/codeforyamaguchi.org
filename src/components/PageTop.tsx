'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { Header } from './Header'

export const PageTop = () => {
  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Header />
      <AnimatePresence>
        <motion.section key="main" {...config}>
          <div className="mt-[5vh] ml-[5vw]">
            <motion.div
              key="title"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
                duration: 0.3,
              }}
            >
              <h1 className="font-black text-[3rem] lg:text-[4.2rem] tracking-tighter overflow-hidden">
                山口県にゆかりのある
                <br />
                挑戦者を応援する
              </h1>
            </motion.div>
            <div className="relative mt-[100px] left-[300px]">
              <motion.div
                key="p"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  damping: 7,
                  stiffness: 30,
                  restDelta: 0.001,
                  duration: 0.6,
                  delay: 0.2,
                  delayChildren: 0.2,
                }}
              >
                <p className="w-[500px] leading-7 [&:not(:first-child)]:mt-6 mb-[48px]">
                  &quot;山口県にゆかりのある挑戦者を応援する&quot;をミッションに掲げ、ITを使って地域課題を解決することをはじめとしたさまざまな活動を行っていくためのテックコミュニティです。
                </p>
                <Button asChild>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://join.slack.com/t/codeforyamaguchi/shared_invite/zt-dpiqhr12-LgiU8gAKZ_02Alkc5BoV8w"
                  >
                    オンラインコミュニティ(Slack)への参加はこちら
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  )
}
