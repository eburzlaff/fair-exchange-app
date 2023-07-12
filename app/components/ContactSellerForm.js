import { Keyboard } from "react-native";
import React from "react";
import messagesApi from "../api/messages";
import * as Yup from "yup";

import * as Notifications from "expo-notifications";
import { Form, FormField, SubmitButton } from "./forms";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const ContactSellerForm = ({ listing }) => {

  // const sendLocalNotification = (delay) => Notifications.scheduleNotificationAsync({
  //   content: {
  //     title: 'Look at that notification',
  //     body: "I'm so proud of myself!",
  //   },
  //   trigger:  delay == '' ? null : {seconds: delay}
  // });

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "You message was sent",
      },
      trigger: null,
    });

    // sendLocalNotification(3)

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) return alert("Error contacting the seller");

    resetForm();

    
  };
  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
};

export default ContactSellerForm;