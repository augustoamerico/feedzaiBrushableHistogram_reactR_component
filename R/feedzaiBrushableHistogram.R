#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom shiny restoreInput
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
feedzaiBrushableHistogramInput <- function(inputId, default = "") {
  reactR::createReactShinyInput(
    inputId,
    "feedzaiBrushableHistogram",
    htmltools::htmlDependency(
      name = "feedzaiBrushableHistogram-input",
      version = "1.0.0",
      src = "www/feedzaiBrushableHistogram/feedzaiBrushableHistogram",
      package = "feedzaiBrushableHistogram",
      script = "feedzaiBrushableHistogram.js"
    ),
    default,
    list(),
    htmltools::tags$div
  )
}

#' <Add Title>
#'
#' <Add Description>
#'
#' @export
updateFeedzaiBrushableHistogramInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
