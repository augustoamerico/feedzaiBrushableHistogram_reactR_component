library(shiny)
library(feedzaiBrushableHistogram)

ui <- fluidPage(
  titlePanel("reactR Input Example"),
  feedzaiBrushableHistogramInput("textInput"),
  textOutput("textOutput")
)

server <- function(input, output, session) {
  output$textOutput <- renderText({
    sprintf("You entered: %s", input$textInput)
  })
}

shinyApp(ui, server)