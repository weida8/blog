import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

export default function BasicCard(props) {
  const {location, title, summary, author} = props.blog
  console.log('image:', props.image)
  return (
    <Card>
        <CardHeader>{location}</CardHeader>
      <CardImg />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <p>{summary}</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>{author}</CardFooter>
    </Card>
  );
}