import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 min-h-screen'>
      {/* Text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto min-h-screen'>
          {/*title*/}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className='h1'>
            Transforming Ideas <br /> Into {' '}
            <span className='text-accent'>Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className='max-w-sm xl:max-w-sl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </motion.p>
          {/*btn*/}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate="show" exit="hidden" className="hidden xl:flex"
          ><ProjectsBtn /></motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[500px] max-h-[800px] absolute lg:bottom-0 lg:right-[8%] ">
          <Avatar />
        </motion.div>
      </div>

    </div>
  );
};

export default Home;
