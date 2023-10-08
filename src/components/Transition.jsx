import React from 'react';
import { motion } from 'framer-motion';

const Transition = () => {
    return (
        <>
        {/* <motion.div
                className='slide-in'               
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
                >
                    </motion.div> */}
                    
        <motion.div
                className='slide-out'
                initial={{ scaleY: 1,  }}
                animate={{ scaleY: 0}}
                exit={{ scaleY: 1 }}
                transition={{ duration: 3, ease: [0.22,1,0.36,1] }}
                >
        </motion.div>
        <motion.div
                className='slide-in'
                initial={{ scaleY: 1,  }}
                animate={{ scaleY: 0}}
                delay={2.5}
                exit={{ scaleY: 1 }}
                transition={{ duration: 3, ease: [0.22,1,0.36,1] }}
                >
        </motion.div>
    </>
    );
};

export default Transition;
