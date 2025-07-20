"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full py-6 px-4">
      <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg w-full max-w-3xl relative z-10">
        <div className="flex items-center">
          <img src="/images/logo.gif" alt="Logo" className="w-8 h-8 mr-6" />
        </div>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div
              key="Inicio"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Inicio
              </Link>
            </motion.div>
            <motion.div
              key="Seminario"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/seminario" className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Seminario
              </Link>
            </motion.div>
            <motion.div
              key="Cronograma"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/cronograma" className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Cronograma
              </Link>
            </motion.div>
            <motion.div
              key="Preguntas"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/preguntas" className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Preguntas
              </Link>
            </motion.div>
              <motion.div
              key="Condiciones"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
              <Link href="/condiciones" className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Condiciones
              </Link>
              </motion.div>
          
          </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <button
            onClick={() => setShowPopup(true)}
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            Inscripciones
          </button>
        </motion.div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
              <p className="text-xl font-semibold mb-4">Las inscripciónes a los talleres de la bienal serán habilitadas el día 26 de Julio. Muchas gracias!</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              <motion.div
                key="Inicio"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link href="/" className="text-base text-gray-900 font-medium" onClick={toggleMenu}>
                  Inicio
                </Link>
              </motion.div>
              <motion.div
                key="Seminario"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link href="/seminario" className="text-base text-gray-900 font-medium" onClick={toggleMenu}>
                  Seminario
                </Link>
              </motion.div>
              <motion.div
                key="Cronograma"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link href="#" className="text-base text-gray-900 font-medium" onClick={toggleMenu}>
                  Cronograma
                </Link>
              </motion.div>
              <motion.div
                key="Preguntas"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link href="/preguntas" className="text-base text-gray-900 font-medium" onClick={toggleMenu}>
                  Preguntas
                </Link>
              </motion.div>
              <motion.div
                key="Condiciones"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link href="/condiciones" className="text-base text-gray-900 font-medium" onClick={toggleMenu}>
                  Condiciones
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="https://bienalvg.web.app/index.html"
                  className="inline-flex items-center justify-center w-fit px-4 py-2 text-base text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
                  onClick={toggleMenu}
                >
                  Inscripciones
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export { Navbar1 }