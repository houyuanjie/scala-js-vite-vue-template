package components

import scala.scalajs.js
import scala.scalajs.js.annotation.*

import lib.*

trait Data extends js.Object:
  val msg: String

@JSExportTopLevel("HelloWorld", "components")
val HelloWorld = new Component:
  override def data() =
    new Data:
      override val msg: String = "Hello!!!!!"
  override val template: String = """<h2>{{msg}}</h2>"""
