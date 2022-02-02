import './loadingAnimation.css'
import { motion } from 'framer-motion'

function LoadingAnimation(){
    return (
        <div className="loading-animation-outer">
            <motion.span className="loading-animation-text">k</motion.span>
        </div>
    )
}
export default LoadingAnimation