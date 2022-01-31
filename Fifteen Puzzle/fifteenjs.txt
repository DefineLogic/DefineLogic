    $(document).ready(function() {
        var emptyPuzzlePiece_left = 300;
        var emptyPuzzlePiece_top = 300;
        var divs = $("#puzzlearea").children();
        var correct = [
            [0, 100, 200, 300, 0, 100, 200, 3000, 100, 200, 300, 0, 100, 200],
            [0, 0, 0, 0, 100, 100, 100, 100, 200, 200, 200, 200, 300, 300, 300, 300]
        ];

        (function() {
            // var puzzleArea = document.getElementById('puzzlearea');
            // var divs = puzzleArea.getElementsByTagName("div");

            // initialize each piece
            for (var i = 0; i < divs.length; i++) {
                var div = divs[i];

                // calculate x and y for this piece
                var x = ((i % 4) * 100);
                var y = (Math.floor(i / 4) * 100);

                // set basic style and background
                div.className = "puzzlepiece";
                div.style.left = x + 'px';
                div.style.top = y + 'px';
                div.style.backgroundImage = 'url("background.jpeg")';
                div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

                // store x and y for later
                div.x = x;
                div.y = y;
            }
            divs.click(movePuzzlePiece);
            $.each(divs, applyBorders);
            $("#shufflebutton").click(shuffle);

        })();

        function movePuzzlePiece() {
            var left = parseInt(this.style.left);
            var top = parseInt(this.style.top);
            if (left == emptyPuzzlePiece_left && Math.abs(top - emptyPuzzlePiece_top) == 100) {
                let temp = emptyPuzzlePiece_top;
                emptyPuzzlePiece_top = top;
                this.style.top = temp + 'px';
            } else if (top == emptyPuzzlePiece_top && Math.abs(left - emptyPuzzlePiece_left) == 100) {
                let temp = emptyPuzzlePiece_left;
                emptyPuzzlePiece_left = left;
                this.style.left = temp + 'px';
            }
            $.each(divs, removeMovablePieceStyle);
            $.each(divs, applyBorders);
        }

        function movePuzzlePieceByShuffle(a) {
            var left = parseInt(a.style.left);
            var top = parseInt(a.style.top);
            if (left == emptyPuzzlePiece_left && Math.abs(top - emptyPuzzlePiece_top) == 100) {
                let temp = emptyPuzzlePiece_top;
                emptyPuzzlePiece_top = top;
                a.style.top = temp + 'px';
            } else if (top == emptyPuzzlePiece_top && Math.abs(left - emptyPuzzlePiece_left) == 100) {
                let temp = emptyPuzzlePiece_left;
                emptyPuzzlePiece_left = left;
                a.style.left = temp + 'px';
            }
            $.each(divs, removeMovablePieceStyle);
            $.each(divs, applyBorders);
        }

        function applyBorders(index, value) {
            var movablepieces = [];
            var left = parseInt(this.style.left);
            var top = parseInt(this.style.top);
            if (left == emptyPuzzlePiece_left && Math.abs(top - emptyPuzzlePiece_top) == 100) {
                $(this).addClass("movablepiece");
                movablepieces.push($(this));
            } else if (top == emptyPuzzlePiece_top && Math.abs(left - emptyPuzzlePiece_left) == 100) {
                $(this).addClass("movablepiece");
                movablepieces.push($(this));
            }
            return movablepieces;
        }

        function removeMovablePieceStyle() {
            $(this).removeClass("movablepiece");
        }

        function shuffle() {
            for (let i = 0; i < 100; i++) {
                shuffleOnce();
            }
        }

        function shuffleOnce() {
            movablepieces = $.each(divs, applyBorders);
            movablepieces = movablepieces.filter(function() {
                return $(this).hasClass("movablepiece");
            })
            var randomPiece = Math.floor(Math.random() * movablepieces.length);
            var piecetoMove = movablepieces[randomPiece];
            movePuzzlePieceByShuffle(piecetoMove);
        }

    });