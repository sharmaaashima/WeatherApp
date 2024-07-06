import * as React from "react";

import { Avatar, Card, IconButton } from "react-native-paper";
import { Image, Text, TouchableOpacity } from "react-native";

import { COLORS } from "../constants/Colors";

const CustomCard = ({ image, subtitle, title, percentage }) => (
  <TouchableOpacity>
    <Card.Title
      style={{
        backgroundColor: COLORS.CARD_COLOR,
        marginHorizontal: 20,
        borderRadius: 17,
        marginVertical: 5,
      }}
      titleStyle={{
        fontWeight: 600,
        marginTop: 12,
      }}
      title={title}
      subtitle={subtitle}
      left={(props) => (
        <Image style={{ width: 40, height: 40 }} source={image} />
      )}
      right={(props) => (
        <Text style={{ fontSize: 15, fontWeight: 600, marginRight: 40 }}>
          {percentage}
          {title !== "Wind" ? "%" : ""}
        </Text>
      )}
    />
  </TouchableOpacity>
);

export default CustomCard;
