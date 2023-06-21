import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Slideshow = () => {
    const slides = [
        {
            id: 1,
            image: "https://img.cdn.zostel.com/cache/_59a0044cad4d16d4f4075657c2adb902/5_1_1400x600.jpg"
        },
        {
            id: 2,
            image: "https://img.cdn.zostel.com/cache/_0c130a41e670628551785b66a116ca0f/048_Exterior_04_1400x600.jpg"
        },
        {
            id: 3,
            image: "https://img.cdn.zostel.com/cache/_606bf1e904105f3f61aa7abae817ba89/2_1400x600.jpg"
        },
        {
            id: 4,
            image: "https://img.cdn.zostel.com/cache/_bf6718c9924a17253c3e7a8bcc4640d8/Landing_Page_Photo_1400x600.jpg"
        },
        {
            id: 5,
            image: "https://img.cdn.zostel.com/cache/_1702bd3ab45e20acabe0c783694e8c73/4_1400x600.jpg"
        }
    ];

    let [animation, setAnimation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimation((prevAnimation) => {
                if (prevAnimation === 400) {
                    return 0;
                }
                return prevAnimation + 100;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow">
            {slides.map((slide, index) => (
                <motion.div
                    key={slide.id}
                    className="slide"
                    initial={{ x: index === 0 ? 0 : "100%" }}
                    animate={{ x: `${-animation}%` }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>heading</h2>
                    <img src={slide.image} alt={slide.title} />
                </motion.div>
            ))}
        </div>
    );
};

export default Slideshow;