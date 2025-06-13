import React, { useEffect, useRef } from "react";
import "../styles/Services.css";

const ServiceItem = ({ title, description }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-service");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);
  }, []);

  return (
    <div ref={ref} className="service-item hidden-service">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
