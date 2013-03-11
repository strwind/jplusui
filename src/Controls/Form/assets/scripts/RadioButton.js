/**
 * @author  xuld
 */
imports("Controls.Form.RadioButton");
using("Controls.Core.IInput");


var RadioButton = Control.extend(IInput).implement({

    xtype: 'radiobutton',

    tpl: '<input type="radio" class="x-control">'

});