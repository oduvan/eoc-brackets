requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var io = new extIO({
            functions: {
                js: 'brackets',
                python: 'checkio'
            }
        });
        io.start();
    }
);