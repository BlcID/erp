Ext.define("Ext.grid.plugin.BufferedRendererTreeView",{override:"Ext.tree.View",onRemove:function(b,a,d){var c=this;if(c.rendered&&c.bufferedRenderer){c.refreshView()}else{c.callParent([b,a,d])}}});