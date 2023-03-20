import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "Express API Project",
      version: "1.0.0",
      description:
        "This video game API allows you to see games and which platforms they were released",
    },
    paths: {
      "/games": {
        get: {
          tags: ["Games"],
          summary: "Get all video games in system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Games",
              },
            },
          },
        },
        post: {
          tags: ["Games"],
          summary: "Insert new video game",
          parameters: [
            {
              name: "game",
              in: "body",
              description: "Game that we want to create",
              schema: {
                $ref: "#/definitions/Games",
              },
            },
          ],
          produces: ["application/json"],
        },
      },
      "/games/{id}": {
        get: {
          tags: ["Games"],
          summary: "Get single video game in system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Games",
              },
            },
          },
        },
        put: {
          tags: ["Games"],
          summary: "Insert new video game",
          parameters: [
            {
              name: "game",
              in: "body",
              description: "Game that we want to update",
              schema: {
                $ref: "#/definitions/Games",
              },
            },
          ],
        },
        delete: {
          tags: ["Games"],
          summary: "Insert new video game",
          parameters: [
            {
              name: "game",
              in: "body",
              description: "Game that we want to delete",
              schema: {
                $ref: "#/definitions/Games",
              },
            },
          ],
        },
      },
    },
    definitions: {
      Games: {
        required: ["name", "_id"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          isPublic: {
            type: "boolean",
          },
          name: {
            type: "string",
          },
          released: {
            type: "date",
          },
          background_image: {
            type: "string",
          },
          ratings: {
            type: "array",
            id: {
              type: "integer",
            },
            title: {
              type: "string",
            },
            count: {
              type: "integer",
            },
            percent: {
              type: "integer",
            },
            _id: {
              type: "string",
              uniqueItems: true,
            },
          },
          playtime: {
            type: "integer",
          },
          platforms: {
            type: "array",
            platform: {
              type: "object",
              name: "string",
              image_background: "string",
            },
            released_at: "date",
            _id: "string",
          },
          genres: {
            type: "array",
            id: "integer",
            name: "string",
          },
          short_screenshots: {
            id: "integer",
            image: "string",
          },
        },
      },
    },
  },
  apis: ["../index.js"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
