<template>
    <div class="edit_container">
        <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
        >
        </quill-editor>

        <!-- 从数据库读取展示 -->
        <div v-html="content" class="ql-editor">
            {{ content }}
        </div>
    </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor' //调用编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
            editorOption: {
                placeholder: '请在这里输入备注',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'], //加粗，斜体，下划线
                        [{ list: 'ordered' }, { list: 'bullet' }] //列表
                    ]
                }
            }
        }
    },
    methods: {
        onEditorReady(editor) {
            // 准备编辑器
        },
        onEditorBlur() {}, // 失去焦点事件
        onEditorFocus() {}, // 获得焦点事件
        onEditorChange() {}, // 内容改变事件
        // 转码
        escapeStringHTML(str) {
            str = str.replace(/&lt;/g, '<')
            str = str.replace(/&gt;/g, '>')
            return str
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        }
    }
}
</script>

<style lang="scss">
.edit_container {
    width: 300px;
    height: 800px;
    margin: 0 auto;

    .quill-editor {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

        .ql-toolbar.ql-snow {
            border: 1px solid #999;
        }

        .ql-container.ql-snow {
            border-color: #999;
        }
    }
}
</style>
