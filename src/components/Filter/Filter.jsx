import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';
import pop from '../../transition/pop.module.css';
import styles from "./Filter.module.css";

const Filter = ({ htmlFor, onChange, value }) => (
  <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
    <section className={styles.filter}>
  <form className={styles.filter}>
    <label htmlFor={htmlFor} className={styles.title}>
      <h3>Find contacts by name: </h3>
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        name="filter"
        type="text"
        placeholder="Input contact to find"
      />
    </label>
  </form>
  </section>
  </CSSTransition>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
};
export default Filter;