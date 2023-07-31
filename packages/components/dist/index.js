import React from "react";

var PokemonCard = function (_a) {
  var name = _a.name,
    id = _a.id,
    stats = _a.stats,
    weight = _a.weight,
    height = _a.height,
    types = _a.types,
    onBackClick = _a.onBackClick;
  var CardStyles = {
    card: {
      border: "1px solid lightgray",
      borderRadius: "5px",
      width: 300,
      height: 400,
      padding: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      position: "relative",
    },
    statsHolder: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    bodyType: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    goBack: {
      position: "absolute",
      cursor: "pointer",
      top: 20,
      left: 20,
    },
    progresBarHolder: {
      width: 200,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
  return React.createElement(
    "div",
    { style: CardStyles.card },
    React.createElement(
      "div",
      { style: CardStyles.goBack, onClick: onBackClick },
      "Go back",
    ),
    React.createElement("img", {
      src: "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/".concat(
        id,
        ".svg",
      ),
      alt: name,
      width: 100,
      height: 100,
    }),
    React.createElement("h4", null, name),
    React.createElement(
      "div",
      { style: CardStyles.bodyType },
      React.createElement(
        "div",
        null,
        React.createElement("div", null, "Weight"),
        React.createElement("div", null, weight),
      ),
      React.createElement(
        "div",
        null,
        React.createElement("div", null, "Height"),
        React.createElement("div", null, height),
      ),
      React.createElement(
        "div",
        null,
        React.createElement("div", null, "Type"),
        React.createElement("div", null, types && types[0].type.name),
      ),
    ),
    stats === null || stats === void 0
      ? void 0
      : stats.map(function (stat, i) {
          return React.createElement(
            "div",
            { key: stat.stat.name, style: CardStyles.statsHolder },
            stat.stat.name,
            React.createElement(
              "div",
              { style: CardStyles.progresBarHolder },
              React.createElement("progress", {
                value: stat.base_stat,
                max: "100",
              }),
              "\u00A0",
              stat.base_stat,
            ),
          );
        }),
  );
};

export { PokemonCard };
//# sourceMappingURL=index.js.map
