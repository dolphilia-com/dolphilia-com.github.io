import{_ as e,c as o,o as i,a3 as t}from"./chunks/framework.DflgEAq4.js";const f=JSON.parse('{"title":"FEATURE OVERVIEW:","description":"","frontmatter":{},"headers":[],"relativePath":"translation/sokol/imgui.md","filePath":"translation/sokol/imgui.md","lastUpdated":null}'),n={name:"translation/sokol/imgui.md"},a=t(`<p>sokol_imgui.h -- drop-in Dear ImGui renderer/event-handler for sokol_gfx.h</p><p>Project URL: <a href="https://github.com/floooh/sokol" target="_blank" rel="noreferrer">https://github.com/floooh/sokol</a></p><p>Do this: #define SOKOL_IMPL or #define SOKOL_IMGUI_IMPL</p><p>before you include this file in <em>one</em> C or C++ file to create the implementation.</p><p>NOTE that the implementation can be compiled either as C++ or as C. When compiled as C++, sokol_imgui.h will directly call into the Dear ImGui C++ API. When compiled as C, sokol_imgui.h will call cimgui.h functions instead.</p><p>NOTE that the formerly separate header sokol_cimgui.h has been merged into sokol_imgui.h</p><p>The following defines are used by the implementation to select the platform-specific embedded shader code (these are the same defines as used by sokol_gfx.h and sokol_app.h):</p><p>SOKOL_GLCORE33 SOKOL_GLES2 SOKOL_GLES3 SOKOL_D3D11 SOKOL_METAL SOKOL_WGPU</p><p>Optionally provide the following configuration defines before including the implementation:</p><p>SOKOL_IMGUI_NO_SOKOL_APP - don&#39;t depend on sokol_app.h (see below for details)</p><p>Optionally provide the following macros before including the implementation to override defaults:</p><p>SOKOL_ASSERT(c) - your own assert macro (default: assert(c)) SOKOL_IMGUI_API_DECL- public function declaration prefix (default: extern) SOKOL_API_DECL - same as SOKOL_IMGUI_API_DECL SOKOL_API_IMPL - public function implementation prefix (default: -)</p><p>If sokol_imgui.h is compiled as a DLL, define the following before including the declaration or implementation:</p><p>SOKOL_DLL</p><p>On Windows, SOKOL_DLL will define SOKOL_IMGUI_API_DECL as __declspec(dllexport) or __declspec(dllimport) as needed.</p><p>Include the following headers before sokol_imgui.h (both before including the declaration and implementation):</p><pre><code>sokol_gfx.h
sokol_app.h     (except SOKOL_IMGUI_NO_SOKOL_APP)
</code></pre><p>Additionally, include the following headers before including the implementation:</p><p>If the implementation is compiled as C++: imgui.h</p><p>If the implementation is compiled as C: cimgui.h</p><h1 id="feature-overview" tabindex="-1">FEATURE OVERVIEW: <a class="header-anchor" href="#feature-overview" aria-label="Permalink to &quot;FEATURE OVERVIEW:&quot;">​</a></h1><p>sokol_imgui.h implements the initialization, rendering and event-handling code for Dear ImGui (<a href="https://github.com/ocornut/imgui" target="_blank" rel="noreferrer">https://github.com/ocornut/imgui</a>) on top of sokol_gfx.h and (optionally) sokol_app.h.</p><p>The sokol_app.h dependency is optional and used for input event handling. If you only use sokol_gfx.h but not sokol_app.h in your application, define SOKOL_IMGUI_NO_SOKOL_APP before including the implementation of sokol_imgui.h, this will remove any dependency to sokol_app.h, but you must feed input events into Dear ImGui yourself.</p><p>sokol_imgui.h is not thread-safe, all calls must be made from the same thread where sokol_gfx.h is running.</p><h1 id="howto" tabindex="-1">HOWTO: <a class="header-anchor" href="#howto" aria-label="Permalink to &quot;HOWTO:&quot;">​</a></h1><p>--- To initialize sokol-imgui, call:</p><pre><code>simgui_setup(const simgui_desc_t* desc)

This will initialize Dear ImGui and create sokol-gfx resources
(two buffers for vertices and indices, a font texture and a pipeline-
state-object).

Use the following simgui_desc_t members to configure behaviour:

    int max_vertices
        The maximum number of vertices used for UI rendering, default is 65536.
        sokol-imgui will use this to compute the size of the vertex-
        and index-buffers allocated via sokol_gfx.h

    sg_pixel_format color_format
        The color pixel format of the render pass where the UI
        will be rendered. The default (0) matches sokoL_gfx.h&#39;s
        default pass.

    sg_pixel_format depth_format
        The depth-buffer pixel format of the render pass where
        the UI will be rendered. The default (0) matches
        sokol_gfx.h&#39;s default pass depth format.

    int sample_count
        The MSAA sample-count of the render pass where the UI
        will be rendered. The default (0) matches sokol_gfx.h&#39;s
        default pass sample count.

    const char* ini_filename
        Sets this path as ImGui::GetIO().IniFilename where ImGui will store
        and load UI persistency data. By default this is 0, so that Dear ImGui
        will not preserve state between sessions (and also won&#39;t do
        any filesystem calls). Also see the ImGui functions:
            - LoadIniSettingsFromMemory()
            - SaveIniSettingsFromMemory()
        These functions give you explicit control over loading and saving
        UI state while using your own filesystem wrapper functions (in this
        case keep simgui_desc.ini_filename zero)

    bool no_default_font
        Set this to true if you don&#39;t want to use ImGui&#39;s default
        font. In this case you need to initialize the font
        yourself after simgui_setup() is called.

    bool disable_paste_override
        If set to true, sokol_imgui.h will not &#39;emulate&#39; a Dear Imgui
        clipboard paste action on SAPP_EVENTTYPE_CLIPBOARD_PASTED event.
        This is mainly a hack/workaround to allow external workarounds
        for making copy/paste work on the web platform. In general,
        copy/paste support isn&#39;t properly fleshed out in sokol_imgui.h yet.

    bool disable_set_mouse_cursor
        If true, sokol_imgui.h will not control the mouse cursor type
        by calling sapp_set_mouse_cursor().

    bool disable_windows_resize_from_edges
        If true, windows can only be resized from the bottom right corner.
        The default is false, meaning windows can be resized from edges.

    bool write_alpha_channel
        Set this to true if you want alpha values written to the
        framebuffer. By default this behavior is disabled to prevent
        undesired behavior on platforms like the web where the canvas is
        always alpha-blended with the background.

    simgui_allocator_t allocator
        Used to override memory allocation functions. See further below
        for details.
</code></pre><p>--- At the start of a frame, call:</p><pre><code>simgui_new_frame(&amp;(simgui_frame_desc_t){.width = ..., .height = ..., .delta_time = ..., .dpi_scale = ...});

&#39;width&#39; and &#39;height&#39; are the dimensions of the rendering surface,
passed to ImGui::GetIO().DisplaySize.

&#39;delta_time&#39; is the frame duration passed to ImGui::GetIO().DeltaTime.

&#39;dpi_scale&#39; is the current DPI scale factor, if this is left zero-initialized,
1.0f will be used instead. Typical values for dpi_scale are &gt;= 1.0f.

For example, if you&#39;re using sokol_app.h and render to the default framebuffer:

simgui_new_frame(&amp;(simgui_frame_desc_t){
    .width = sapp_width(),
    .height = sapp_height(),
    .delta_time = sapp_frame_duration(),
    .dpi_scale = sapp_dpi_scale()
});
</code></pre><p>--- at the end of the frame, before the sg_end_pass() where you want to render the UI, call:</p><pre><code>simgui_render()

This will first call ImGui::Render(), and then render ImGui&#39;s draw list
through sokol_gfx.h
</code></pre><p>--- if you&#39;re using sokol_app.h, from inside the sokol_app.h event callback, call:</p><pre><code>bool simgui_handle_event(const sapp_event* ev);

The return value is the value of ImGui::GetIO().WantCaptureKeyboard,
if this is true, you might want to skip keyboard input handling
in your own event handler.

If you want to use the ImGui functions for checking if a key is pressed
(e.g. ImGui::IsKeyPressed()) the following helper function to map
an sapp_keycode to an ImGuiKey value may be useful:

int simgui_map_keycode(sapp_keycode c);

Note that simgui_map_keycode() can be called outside simgui_setup()/simgui_shutdown().
</code></pre><p>--- finally, on application shutdown, call</p><pre><code>simgui_shutdown()
</code></pre><h1 id="memory-allocation-override" tabindex="-1">MEMORY ALLOCATION OVERRIDE <a class="header-anchor" href="#memory-allocation-override" aria-label="Permalink to &quot;MEMORY ALLOCATION OVERRIDE&quot;">​</a></h1><p>You can override the memory allocation functions at initialization time like this:</p><pre><code>void* my_alloc(size_t size, void* user_data) {
    return malloc(size);
}

void my_free(void* ptr, void* user_data) {
    free(ptr);
}

...
    simgui_setup(&amp;(simgui_desc_t){
        // ...
        .allocator = {
            .alloc = my_alloc,
            .free = my_free,
            .user_data = ...;
        }
    });
...
</code></pre><p>If no overrides are provided, malloc and free will be used.</p><p>This only affects memory allocation calls done by sokol_imgui.h itself though, not any allocations in Dear ImGui.</p><h1 id="license" tabindex="-1">LICENSE <a class="header-anchor" href="#license" aria-label="Permalink to &quot;LICENSE&quot;">​</a></h1><p>zlib/libpng license</p><p>Copyright (c) 2018 Andre Weissflog</p><p>This software is provided &#39;as-is&#39;, without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.</p><p>Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:</p><pre><code>1. The origin of this software must not be misrepresented; you must not
claim that you wrote the original software. If you use this software in a
product, an acknowledgment in the product documentation would be
appreciated but is not required.

2. Altered source versions must be plainly marked as such, and must not
be misrepresented as being the original software.

3. This notice may not be removed or altered from any source
distribution.
</code></pre>`,46),s=[a];function r(l,d,p,h,u,m){return i(),o("div",null,s)}const _=e(n,[["render",r]]);export{f as __pageData,_ as default};
