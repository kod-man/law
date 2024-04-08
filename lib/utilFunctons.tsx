import React from "react";

export function splitHeadline(headline: string) {
  const words = headline.split(" ");
  return words.map((word, index) => (
    <React.Fragment key={index}>
      {index == 0 ? (
        <span className="inline-block text-primary-main">{word}</span>
      ) : (
        " " + word
      )}
    </React.Fragment>
  ));
}
