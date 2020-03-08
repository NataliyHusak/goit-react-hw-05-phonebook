import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slide from "../../transition/slide.module.css";
import styles from "./ContactList.module.css";

const ContactList = ({ filterContacts, onClickDelete }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {filterContacts.map(contact => (
      <CSSTransition
        key={contact.id}
        timeout={200}
        unmountOnExit
        classNames={slide}
      >
        <li key={contact.id} className={styles.item}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <button
            className={styles.button}
            type="button"
            onClick={onClickDelete}
            id={contact.id}
          >
            Delete
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDelete: PropTypes.func.isRequired
};
export default ContactList;
