test_that("table_overview() returns a reactable htmlwidget", {
  dash_data <- load_dash_data() %>%
    tidyr::unnest(everything())

  series_ids <- c(
    "A84423349V",
    "A84423356T",
    "A84423355R",
    "A84423354L",
    "A84423350C"
  )

  data <- dash_data %>%
    dplyr::filter(.data$series_id %in% series_ids) %>%
    tidyr::unnest(cols = everything())

  x <- table_overview(data = data)

  expect_s3_class(x, "reactable")
  expect_s3_class(x, "htmlwidget")
})
