import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./page.module.css";
import { Modal } from "@mui/material";
import MediaCard from "./mediaCard";

export default forwardRef(function BasicModal(props, ref) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [bio, setBio] = useState(null);
  const [img, setImg] = useState(null);

  useImperativeHandle(ref, () => ({
    handleOpen(teamMember) {
      setOpen(true);
      setName(teamMember.name);
      setTitle(teamMember.title);
      setBio(teamMember.bio);
      setImg(teamMember.img);
    },
  }));
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={() => handleClose()}>
        <div className={styles.modal}>
          <MediaCard name={name} title={title} bio={bio} img={img} />
        </div>
      </Modal>
    </div>
  );
});
