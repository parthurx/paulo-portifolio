import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Sobre Mim
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Um pouco sobre mim
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500 max-w-100 break-normal"
                  : "mt-4 text-xl text-justify text-white break-normal"
              }
            >
              Olá! Meu nome é Paulo Arthur, tenho 28 anos e moro em Belém. Sou
              formado em Ciência da Computação, tendo concluído meu curso em
              2022. Desde que comecei a estudar programação, fiquei fascinado
              com a capacidade de criar soluções inovadoras que podem melhorar a
              vida das pessoas. Durante a minha graduação, tive a oportunidade
              de aprender várias linguagens de programação, como Java, Python,
              JavaScript e PhP, e trabalhar em diversos projetos desafiadores
              que me ajudaram a desenvolver minhas habilidades técnicas.
              Atualmente, estou focado em desenvolver habilidades em front-end,
              criando interfaces de usuário intuitivas e atraentes, utilizando
              uma das mais recentes tecnologias, o React. Também reservo um
              tempo para estudar sobre Back-End para me tornar um Desenvolvedor
              Full-Stack, estou aprendendo Node.js e Java crom Spring Boot.
              Estou sempre procurando novos desafios e oportunidades de
              aprendizado, e estou animado para ver o que o futuro me reserva no
              mundo da tecnologia.
            </p>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3x1 font-semibold text-blue-500">
              Tecnologias e Ferramentas
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Usando uma combinação de tecnologias de ponta e software de código
              aberto confiável, desenvolvo sistemas e sites com foco no usuário
              e desempenho para smartphones, tablets e desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 justify-center ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
