page_inclusion <- function(...) {
  djpr_tab_panel(
    title = "Inclusion",
    h1("Key groups"),
    tagList(
      "This page contains information about the labour force status of key groups of ",
      "Victorians, such as women, and young people. ",
      htmltools::tags$b("More information will be included with future releases. "),
      "For more information about overall labour force indicators ",
      "see the ",
      actionLink("link_indicators", "indicators page"),
      ". For information about how employment and unemployment varies across Victoria, see the ",
      actionLink("link_regions", "regions page"), "."
    ),
    br(),
    h2("Women and men"),
    djpr_plot_ui("gr_gen_emp_bar"),
    djpr_plot_ui("gr_emppopratio_line"),
    djpr_plot_ui("gr_gen_unemp_line"),
    djpr_plot_ui("gr_gen_partrate_line"),
    h2("Young people"),
    djpr_plot_ui("gr_yth_emp_sincecovid_line"),
    # focus_box(
    #   column(
    #     6,
    #     djpr_plot_ui("gr_youth_states_dot")
    #   ),
    #   column(
    #     6,
    #     djpr_plot_ui("gr_ages_line"),
    #     djpr_plot_ui("gr_yth_melbvrest_line")
    #   )
    # ),
    h2("Long-term unemployed"),
    htmlOutput("inclusion_footnote"),
    br()
  )
}