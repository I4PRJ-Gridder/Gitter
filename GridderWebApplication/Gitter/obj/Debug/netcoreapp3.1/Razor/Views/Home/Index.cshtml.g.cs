#pragma checksum "D:\AarhusUniversitetData\PRJ4\Gitter\GridderWebApplication\Gitter\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "43543cdc5d2f5d0ac4d5385402060d9ba77220b8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\AarhusUniversitetData\PRJ4\Gitter\GridderWebApplication\Gitter\Views\_ViewImports.cshtml"
using Gitter;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\AarhusUniversitetData\PRJ4\Gitter\GridderWebApplication\Gitter\Views\_ViewImports.cshtml"
using Gitter.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"43543cdc5d2f5d0ac4d5385402060d9ba77220b8", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f34f3e8381274117291f4963382ad63ff4c516bd", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\AarhusUniversitetData\PRJ4\Gitter\GridderWebApplication\Gitter\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class=""text-center"" oncontextmenu=""return false;"">
    <!--<h1 class=""display-4"">Welcome</h1>
    <p>Learn about <a href=""https://docs.microsoft.com/aspnet/core"">building Web apps with ASP.NET Core</a>.</p> -->
    <link rel=""stylesheet"" href=""./css/style.css"" />
    <link rel=""stylesheet"" href=""./css/colorpicker.css"" />
    <link rel=""stylesheet"" href=""./css/editor.css"" />

    <div id=""editor-wrap"">

        <div class=""color-picker-module"">
            <div id=""currentColor""></div>
            <div class=""color-wrap"">
                <div style=""background-color: black""></div>
                <div style=""background-color: white""></div>
                <div style=""background-color: red""></div>
                <div style=""background-color: green""></div>
                <div style=""background-color: blue""></div>
                <div style=""background-color: orange""></div>
                <div style=""background-color: yellow""></div>
                <div style=""background-color: purple");
            WriteLiteral(@"""></div>
                <div style=""background-color: brown""></div>
                <div style=""background-color: deeppink""></div>
                <div style=""background-color: gray""></div>
                <div style=""background-color: chocolate""></div>
                <div style=""background-color: gold""></div>
                <div style=""background-color: teal""></div>
                <div style=""background-color: navy""></div>
                <div style=""background-color: darkorange""></div>
                <div style=""background-color: royalblue""></div>
                <div style=""background-color: aqua""></div>
                <div style=""background-color: palegreen""></div>
                <div style=""background-color: darkolivegreen""></div>
                <div style=""background-color: yellowgreen""></div>
                <div style=""background-color: aquamarine""></div>
            </div>
        </div>

        <div id=""wrap"">
            <canvas id=""canvas""></canvas>
        </div>

 ");
            WriteLiteral("   </div>\r\n\r\n\r\n    <script src=\"./js/colorpicker.js\"></script>\r\n    <script src=\"./js/apicaller.js\"></script>\r\n    <script src=\"./js/canvas.js\"></script>\r\n\r\n\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
