library(readr)
library(stringr)

.prepare_column_names <- function(raw_names) {
  raw_names %>%
    str_replace("__", "\\") %>%
    str_replace("_", " ") %>%
    str_to_title()
}

load_and_prepare_data <- function(path_to_csv) {
  dat <- read_csv(path_to_csv, show_col_types = FALSE)
  names(dat) <- .prepare_column_names(names(dat))
  return(dat)
}
