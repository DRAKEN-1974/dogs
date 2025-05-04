import styles from './Values.module.css';

const Values = () => {
  const values = [
    {
      icon: '🏠',
      title: 'Compassionate Care',
      description: 'Our commitment is to offer every pet the highest level of empathy and understanding. We ensure that each animal receives the attentive care and respect they deserve.'
    },
    {
      icon: '🤝',
      title: 'Responsible Pet Ownership',
      description: 'We advocate for responsible pet ownership, encouraging practices that promote the well-being and happiness of pets while fostering a strong bond between them and their families.'
    },
    {
      icon: '🐾',
      title: 'Community Involvement',
      description: 'We actively participate in community initiatives to support and enhance local animal welfare efforts, contributing to a better environment for pets and their owners.'
    }
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Values</h2>
        <div className={styles.cardsContainer}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{value.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;