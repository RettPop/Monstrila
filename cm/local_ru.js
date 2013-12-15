function localStr(strID, locID)
{
	var locStr;
	switch (strID)
	{
		case MSG_IMCODEMONSTER:
			locStr = "Привет! Я Монстрила! Клацни на этих словах, чтобы продолжить";
			break;
		case SECT_GETTINGSTARTED:
			locStr = "Введение";
			break;

	}

	return locStr;
}


{message: "I'm Code Monster! (click on my words to see what's next)",
lessonSection: "Getting Started",

{message: "You're going to learn some programming! (click again)"}, "Ты научишься немного программировать! (клацая сюда)"
{message: "Below me, on the left, is Javascript code, on the right, what it does."}, "В окошке слева снизу — код JavaScript-программы. В окошке справа снизу — то, что она делает."
{message: "You can use fillRect() to draw a box. See the number 50?  Can you change that to 150?", "Можно использовать fillRect(), чтобы нарисовать рамку. Видишь число 50? Можешь поменять его. Например, на 150."

{message: "That made the box wider. What do you think the other numbers do? Try changing them.", "Это сделает рамку шире. Как думаешь, что другие числа делают? Поковыряй их."

lessonSection: "Parameters and Drawing", "Параметры и Рисование" 
{message: "Did you figure it out?  The numbers are how far from the left side to draw the box, how far from the top, how wide to draw the box, and how tall.", "Разобрался? Это числа, которые изменяют расстояния слева и сверху, насколько рамка широка и высока."
{message: "Try changing all the numbers!  Play with it!", "Не стесняйся, поиграйся со всеми числами!"
{message: "Two boxes. Can you change the numbers to make them bigger?", "Теперь две рамки. Можешь поменять числа так, чтобы рамки стали больше?"
{message: "Can you change the numbers to move them around?", "А можешь поменять числа, чтобы подвигать их по окошку?"
{message: "Can you change the numbers so that one covers the other?", "А так, чтобы одна рамка перекрыла другие?"
{message: "Monster like boxes square.", "Монстры любят квадратные рамки :)"
{message: "A square has the same width and height.  This box has the same width and height, both are 80.", "Квадрат имеет одинаковую высоту и ширину. Эта рамка тоже имеет одинаковые размеры - по 80 пикселей"
{message: "Hey, look, this does the same thing!", "Гляди, тут происходит то же самое!"
lessonSection: "Variables", "Переменные (variables)"
{message: "Why does that do the same thing?  Any ideas?", "Почему этот код делает все то же самое? Есть идеи?" 
{message: "var means variable. What we did is create a variable, called it <span class=tutor-code>size</span>, set it equal to 80, and now we can use <span class=tutor-code>size</span> where we would have used 80. Do you know why we might want that?", "var означает изменяемость. Что мы сделали, так это создали переменную, назвали ее <span class=tutor-code>size</span> (размер), присвоили ей значение 80. Теперь можно использовать переменную с именем  <span class=tutor-code>size</span> там, где мы использовали число 80. Знаешь, почему мы скорее всего будем делать именно так?"
{message: "What happens if you change 80 to 220?"}, "Что произойдет, если ты поменяешь 80 на 220?"
{message: "And look!  Wider and taller box, both at the same time!"}, "Гляди! Рамка стала выше и шире одновременно!"
{message: "Can you change the other numbers to move the box around?"}, "Поменяй другие параметры, чтобы подвигать рамку."
{message: "Can you make the box very small?"}, "Можешь сделать рамку очень маленькой?"
{message: "What happens if you make <span class=tutor-code>size</span> equal to 0? Or to something really big like 5000?"}, "А попробуй изменить значение переменной  <span class=tutor-code>size</span> на 0. Ну, или на что-то очень большое типа 5000."
{message: "Monster want two boxes.", "Монстрила хочет 2 рамки :)"
{message: "Both boxes have the same size.  That's a neat trick."}, "Обе рамки имеют одинаковый размер. Простой фокус."
{message: "You can change what <span class=tutor-code>size</span> is equal to.  That will grow or shrink both boxes at once! Try changing 80 to 180!"},  "Можешь поменять значение  <span class=tutor-code>size</span>. Это изменить размеры обеих рамок одновременно! "
{message: "Can you move each of the boxes around by changing some of the numbers?"}, 
{message: "Monster want more boxes.  Three boxes!",
{message: "Now what happens when you change what <span class=tutor-code>size</span> is equal to?",}, 
{message: "More boxes!  Try changing size now!",
{message: "Ooo!  Color!  Pretty!",
lessonSection: "Color",}, 
{message: 'Many colors work.  Try "green" or "purple" or "gold".'}, 
{message: "How about two pink boxes?",
{message: "One pink and one silver.",
{message: "Can you make the silver box gold instead?  And the pink one blue instead?",
{message: "Here are two boxes that are the same color again.  Now can you make the two boxes be different colors?",
{message: "Here is one version.  I like red and blue.",
{message: "Red, green, and blue.  That's nice.",
{message: "Wha... This does the same thing!  What could rgb() be?",
{message: "Try changing any of the zeroes to 200 or so.  And try changing any of the 255 to 0. What do the numbers seem to do?",
{message: "Did you figure it out?  rgb() refers to red, green, and blue.  The numbers go from 0 to 255. So, <span class=tutor-code>rgb(0, 255, 0)</span> means no red or blue, but all the green you got!"}, 
{message: "You can make lots of colors this way if you change some of the numbers.  Try it!"}, 
{message: "Here is a fun game.  Can you make these two boxes the same color?",
lessonSection: "Quiz: Color",}, 
{message: "Can you make these both blue?",
{message: "Can you figure out what the rgb() numbers should be to make these both yellow?",
{message: "Can you figure out what the rgb() numbers should be to make these both teal?",
{message: "Okay, this one is really hard.  Can you make these two exactly match?  Can you figure out what the rgb() numbers should be to make these both crimson? Don't worry if you don't get it exactly, just see how close you can get!",
{message: "Here it is.  Whew, that's a hard one!  How close did you get?",
{message: 'If you want to try others, put "olive", "purple", "aqua", or any other color you can think of as the color for the first box, then try to find the rgb numbers that match it!',}, 
{message: "rgba() is a crazy version of rgb(). See what this does?  It's got one more number at the end that's 0.5.  What is that last number doing? Try changing the 0.5 to 0.1.  Or to 0.8.  What does it do?",
lessonSection: "Color and Transparency",}, 
{message: "The a in rgba means alpha (how transparent the box is) from 0.0 (invisible) to 1.0 (solid)"}, 
{message: "You can do pretty cool things with rgba().  Look at this!  Try changing some of the 0.5 alphas to 0.2 or 0.8!",
{message: "Try changing the size from 80 to 180!  You can get some fun effects when the colors overlap. Play with it!",}, 
{message: "Let's go back to variables. Monster no like to repeat numbers. Can you replace both the 20 numbers with <span class=tutor-code>offset</span>?",
lessonSection: "Operators and Assignment",}, 
{message: "Now try changing what <span class=tutor-code>offset</span> is equal to from 30 to 50.  See how you can move the first box?",
{message: "Variables can be set to new values.  See how offset is set to 100 before being used by the second box?",
{message: "Try moving the second box.  Change the 100 to 50 or 150.",}, 
{message: "Try moving the first box too.",}, 
{message: "Can you put the boxes on top of each other so it looks like just one box?"}, 
{message: "You can also add numbers to a variable. See what this is doing? It changes offset with <span class=tutor-code>offset = offset + 50</span>",
{message: "<span class=tutor-code>offset = offset + 50</span> means take offset, add 50 to it, then make offset equal that now.  In other words, make offset 50 more than it used to be."}, 
{message: "How about you try it?  Can you replace both the 90 numbers used for the (left, top) of the second box with a variable? Hint: Either create a new variable or change offset and then use offset.",
lessonSection: "Quiz: Variables and Operators",}, 
{message: "Monsters like adding.  Me add good.  Okay, now try changing <span class=tutor-code>offset</span> from 30 to 80.  See what happens?",
{message: "Ooo, you can move both boxes together!  Change the offset and move 'em around!",}, 
{message: "This looks the same, but it's a little different.  What's that <span class=tutor-code>*</span> doing?  What happens if you change <span class=tutor-code>* 3</span> to <span class=tutor-code>* 2</span>?  Try changing it to <span class=tutor-code>* 1</span>.  Try changing the offset too.  Did you figure out what <span class=tutor-code>*</span> means?",
lessonSection: "More Operators",}, 
{message: "<span class=tutor-code>*</span> means multiply.  <span class=tutor-code>2 * 2</span> would be 4.  So, <span class=tutor-code>offset = offset * 3</span> means make offset three times bigger."}, 
{message: "<span class=tutor-code>*</span> means multiply and <span class=tutor-code>/</span> means divide.  So, what we set size equal to below is just a complicated way of saying make size equal to 100.  See?",
{message: "We can also compare numbers.  See this code?  We will only draw a second box when <span class=tutor-code>size</span> is less than 80.",
lessonSection: "If and Comparisons",}, 
{message: "Try changing size to 150.  See what happens? Try changing size to 79.  Then change it to 80.",}, 
{message: "Okay, let's see what you know!  Here are two boxes.  Can you add a third box (offset by another 60 from the second box)?",
lessonSection: "Quiz: Variables and Color",}, 
{message: "Here is one way to do it. Try changing the size or offset!",
{message: "Remember rgba()?  Monster like.  Can you make me three boxes with different colors?",
{message: "Here is one way.  Ooo!  Pretty!  Try changing size, offset, or the red, blue, and green numbers!",
{message: "Monster no like writing code more than once.  Lots of writing the same code more than once here, me not like.",
lessonSection: "For Loops",}, 
{message: "This is called a <span class=tutor-code>for</span> loop.  It repeats code without writing it more than once.  Me like.  Try changing the 3 to 5!",
{message: "For loops have three parts, where to start (<span class=tutor-code>i = 0</span>), when to keep going (<span class=tutor-code>i < 5</span>), and how much to change each time (<span class=tutor-code>i = i + 1</span>). Can you make ten boxes?",
{message: "Argh!  They don't fit?  How can you make ten boxes fit?",
{message: "Here is one way!",
{message: "Smaller boxes also fit.  Try playing with size, offset, and changing 10!",
{message: "Remember rgba()? What's this doing?  Play with it!",
lessonSection: "Fun with For Loops",}, 
{message: "Complicated!  That means use 0 blue light for the first box, 25 for the second, then 50, 75, 100..."}, 
{message: "Here is another one, this one changing alpha!  Neat-o!",
{message: "Can you show me what you learned?  Draw me a square! Hint: Remember <span class=tutor-code>c.fillRect(<i>left, top, width, height</i>);</span> to draw a box.",
lessonSection: "Quiz: Write Code Yourself",}, 
{message: "Can you add another square?"}, 
{message: 'Now can you make the second square red? (Hint: <span class=tutor-code>c.fillStyle = "blue";</span> before fillRect() will make the rect blue)'}, 
{message: "Great! Did you get something like this? If not, try playing with the numbers a bit to see how it works!",
{message: "Monster draw line. What do you think moveTo() does? lineTo()? Try changing 20 to 50.",
lessonSection: "Lines",}, 
{message: "Try changing the other numbers too.  Can you figure out what moveTo() and lineTo() do?"}, 
{message: "moveTo(left, top) moves the pen to a spot without drawing.  lineTo(left, top) draws a line from wherever the pen is to a spot.",}, 
{message: "Here is what happens if we do a second lineTo().  The second line starts from where the first ended.",
{message: "So, we're drawing a path, a trail of lines all connected together.  We start the path with beginPath() and draw everything with stroke()."}, 
{message: "If we put a moveTo() before the second lineTo(), we'll move the pen without drawing.  See?",
{message: "You try it!  Add another line, put a second c.lineTo() after the first going to (50, 115).",
{message: "Did that do what you expected?  Try adding a third line!",
{message: "Can you make a triangle?",}, 
{message: "Here is one way, a triangle!",
{message: "Okay, an orange triangle.  Like blue better.  Can you make it blue?",
{message: "I was trying to make two triangles, but forgot a moveTo().  See what happened?",
{message: "That's not good.  Can you add <span class=tutor-code>c.moveTo(200, 130);</span> to make it two separate triangles?",}, 
{message: "I want a lot of triangles. We need to use <span class=tutor-code>for</span>!  This for loop draws two triangles.",
lessonSection: "Lines and Loops",}, 
{message: "This for loop starts at 30 and increases by 30 every time.  So, until it is told to stop, it counts 30, 60, 90, 120...  Right now, the for loop is told to stop at 60."}, 
{message: "So, can you make this for loop draw three triangles? Five?",}, 
{message: "Can you make more triangles by changing how the for loop goes up?  What if it counted by 10 each time, so it would count 30, 40, 50, 60... Can you do try that?",}, 
{message: "Aieee!  Look at this!  Forty green triangles!",
{message: "Play with it more!  Can you change the color?  Can you make even more triangles?",}, 
{message: "Two boxes, one using strokeRect(), the other using four lines.",
lessonSection: "Coding It Easy",}, 
{message: "Sure takes a lot more code to draw it with lines. Can you add a third box?",
{message: "strokeRect() is easier, isn't it?  Here are three boxes all using strokeRect(). Can you add a fourth?",
{message: "What if we want even more boxes?  Lots of copying.  Yuck-o.",
lessonSection: "Avoid Repeating Code",}, 
{message: "I know!  Use for loop!  Can you make more boxes for Code Monster?",
{message: "Can you make more than ten boxes?  And still fit all of them on the screen?",}, 
{message: "Is it easier now to make more boxes? Why is that?",
lessonSection: "Variables Make It Easy Too",}, 
{message: "This works by having <span class=tutor-code>i</span> count up 1, 2, 3... then putting each box's (left, top) at <span class=tutor-code>i * offset</span>, so, since offset is 30, the top left of the first box is (30, 30), the second is at (60, 60), then (90, 90) ...",}, 
{message: "Try changing size, num, and offset.  See what happens?  Play with it!",}, 
{message: "It's often good to have variables that control things (like size, num, and offset) together so they are easy to change.  Like it?"}, 
{message: "Can you show me some of what you know? Draw a box. <br>Hint: <span class=tutor-code>c.strokeRect(<i>left, top, width, height</i>);</span> draws a box.",
lessonSection: "Quiz: For Loops",}, 
{message: "Now draw four boxes. Hint: Making four boxes is easy using for. Remember, for loop look like this: <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
{message: "Can you make it so you can change the size of all your boxes all at once? Hint: To make a variable named size set to 50, you use <span class=tutor-code>var size = 50;</span>"}, 
{message: "Wow, you're learning to program!  Lots of ways you could do this, but did you get something like this? If not, try changing some stuff, figure out how it works!",
{message: "Code Monster no like repeating self.  No like.  No like.  For loops avoid repeating.  Me now show you functions too. Functions also avoid repeating.",
lessonSection: "Your Own Functions",}, 
{message: "This is a new function, strokeSquare().  It is just like strokeRect(), but draws squares.",
{message: "strokeSquare() uses strokeRect() to draw a rectangle with the same width and height. See how it works?"}, 
{message: "So, the first square starts at (30, 100) and then has a height and width of 50. See?",}, 
{message: "Can you add a fourth square below the others using strokeSquare()?",}, 
{message: "Ooo! A star! Pretty! Change some of the numbers!  Mess it up!",
lessonSection: "More Lines",}, 
{message: "Wait, stars aren't green.  Can you make it yellow or gold?",
{message: "Ooo! A solid gold star! Did you know you can do that? Change some of the numbers!  Mess it up!",
{message: "Variables make it easy to change and add more stars. Try changing x, y, and size (or anything else)!",
{message: "Here are two stars, but all that repeating myself hurts. No like. What we do?",
{message: "Functions! It's fillStar()! Can you add a third star?",
lessonSection: "More Functions",}, 
{message: "Four stars in a row!  Can you make it eight?",
{message: "Two loops!  Try changing size or the number of stars!",
lessonSection: "Nested Loops",}, 
{message: "Did you know you could do two loops like that, one inside the other?",}, 
{message: "Do you know how it works?",}, 
{message: "<span class=tutor-code>j</span> will count 0, 1, 2.  The first time <span class=tutor-code>j</span> counts 0, 1, 2, <span class=tutor-code>i</span> will be 0.  The next time j counts 0, 1, 2, i will be 1.",
{message: "So, for the first star, i = 0 and j = 0.  On the second star, i = 0 and j = 1.  Third, i = 0 and j = 2. Then, i = 1 and j = 0, i = 1 and j = 1, i = 1 and j = 2, and so on.",}, 
{message: "Can you figure out what order it draws the stars?  Which star is drawn first?  Which star is the second star drawn?",}, 
{message: "The first star will be the one at the top left.  The second drawn is the one below it.  Do you see why?",}, 
{message: "Wow!  Full of stars! Try changing size!",
lessonSection: "Fun with Stars",}, 
{message: "Wow!  Five stars, randomly placed, changing every time. Can you have it draw fifty stars? A hundred?  How about bigger stars or smaller stars?",
{message: "Ugh, me tired of seeing stars.  Lines where it's at.  Here two separate lines. See how much is repeated? No like. What can we do?",
lessonSection: "Even More Functions",}, 
{message: "Need drawLine() function.  Here it is.  Now draw one line from (20, 20) to (200, 20) and another from (20, 50) to (200, 50).",
{message: "Did you get it? Here is one version.  Can you add a third line below the other two?",
{message: "Three vertical lines using for loop.  Can you make it ten lines?",
lessonSection: "Fun with Lines",}, 
{message: "Ten lines coming to a point.  Try moving the point!",

{message: "Ready for something harder?  Now the lines fan to the right.  Can you also add in the ones we saw last, going to the left?",

{message: "Did you get it?  This is one way to do it.  Try moving the point now!",

{message: "Ooo!  Me like!  Try changing num, px, or py!",

{message: "Can you make lines from all sides?  You will need four drawLine() and your two new ones will use 0 instead of w and h.  Can you do it?",

{message: "I like mine blue.  Play with it!",
{message: "When me little monster, me draw these.  You like too?  Change number of lines!",

lessonSection: "More Fun with Lines",}, 
{message: "Can you add another curve at top right? You will need another drawLine() but use x, 0, w, y.",

{message: "Pretty!  Try other colors and changing the number of lines!",

{message: "Can you make it so the two curves are two different colors?",}, 
{message: "Here is one version.  Try changing the colors!",

{message: "Here is a crazy fun random colors changing version.  It's complicated, but take a look.  Can you guess how it works? And try changing num!",

{message: "You know programming?  Show me!  Can make a function called fillSquare() and then use that to draw a second bigger square? Hint: You'll need something like <span class=tutor-code>function fillSquare(left, top, size) {</span>",

lessonSection: "Quiz: Functions",}, 
{message: "Did you get it?  Something like this? Now can you make the first square also use fillSquare() instead of calling fillRect()?",

{message: "Look, one line. Huh. Want more. It would be easier to add more lines if we had that drawLine() function again.  Can you write that and then make this line use it? Hint: Create a function with <span class=tutor-code>function doStuff(a, b, c, d) {</span>",

{message: "Ahh, isn't that better?  Add another line below this one.  Wasn't that easy now?",

{message: "So easy to add more lines, I want lots more.  Give me ten lines total, one on top of the other, separated by 10! Hint: Easier with for loop. For loop looks like <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",}, 
{message: "You get something like this?  You getting good!  Try playing with the numbers! I like n of 40 and dy of 5!",

{message: "Me miss boxes.  Hey, look, boxes, can erase!  Try moving the white box from (50, 50) to (20, 20)!",

lessonSection: "Erasing",}, 
{message: "Order matters.  Last one to draw gets to stay!  Try moving the white box now!",

{message: "Another way to erase is with clearRect().  Can you make a little blue smiley face using these?  It is almost done.  You just need to move them.",

{message: "Me like this guy.  Ooo, friend.",

{message: "A big clearRect() erases everything.  Uncomment the big clearRect() (remove the <span class=tutor-code>//</span>) and see what happens.",

{message: "<span class=tutor-code>//</span> at the beginning of a line makes the line get ignored.  That's called commenting out.  Try adding <span class=tutor-code>//</span> before some of the other lines and see what happens!",

lessonSection: "Comments",}, 
{message: "A box.  But how did it get that far away from the edge?  Try changing x and y.",

lessonSection: "Rotation and Translation",}, 
{message: "The fillRect() says to make the (left, top) at (0, 0), so wouldn't you think the box would be at the upper left corner? But, wait, what is translate()?"}, 
{message: "translate() changes where (0, 0) is. After translate(50, 50), for example, anything that tries to draw at (0, 0) will draw at (50, 50).  Drawing at (20, 20) would draw at (70, 70), since 50 + 20 = 70.  See?"}, 
{message: "Why does this do what it does?  What will happen if you uncomment save() and restore()? Try it. Was it what you expected?",

{message: "The second box becomes black and gets drawn right on top of the first box!  Why?",

{message: "restore() eliminates all the changes since the last save().  So, if you save, then change the fillStyle color or do translate(), then restore, everything goes back to what it was right before the save."}, 
{message: "We can rotate stuff too.  Try changing angle!",

{message: "You might be used to degrees?  Angles in Javascript are in radians.  45 degrees is about 0.8 in radians.  Try changing angle from 0.1 to 0.8!",

{message: "Spinning all the way around is 360 degrees, right?  In radians, it is about 6.28.",}, 
{message: "Did you notice that this box is pivoting through its top left corner when you rotate it?  That's the same spot we said to go with translate(), right?"}, 
{message: "Try changing angle now.  How is this different?",

{message: "Kind of weird that the strokeRect() uses -50 for the left and top, isn't it?  But the top left of the box is still at (50, 50), because we translated to (100, 100), and 100 - 50 = 50."}, 
{message: "When we rotate, we rotate around (100, 100) because of the translate().  Oh, and (100, 100) is the center of the box!  So, this box is rotating around its center!",}, 
{message: "translate() and rotate() add to any earlier translate() and rotate(), unless you restore() the old state.  Try changing angle or uncommenting save() and restore()!",

{message: "Did that do what you expected?  You see why it did what it did?  With the save() and restore(), the second box is black and gets drawn right on top of the first purple box."}, 
{message: "Can you move the black box off the purple box?  So you can see both?",

{message: "Here is one way. See how the translate() is to a different spot?  Try changing angle now!  Did you try a negative number of angle like -0.2?",

{message: "Boxes rotated relative to their center are usually what you want.  Look, a function that makes boxes rotated to different angles!  Can you add a few more boxes?",

{message: "You coder now? Show me! Draw a box rotated by -0.5.  Hint: Use c.rotate(); and c.strokeRect();",

lessonSection: "Quiz: Rotation and Translation",}, 
{message: "Oh, that too easy? You want harder problems? Draw five boxes on top of each other, each rotated by 0.3 more than the last.<br>Hint: c.translate() might be useful<br>Hint: For loops look like <span class=tutor-code>for (var i = 0; i < 5; i += 1) {</span>",}, 
{message: "Did you get something like this? See how this works?  It first moves a spot with translate(), then repeatedly draws squares around that spot and rotates around that spot.",

{message: "Play with it a bit!  Try changing num and angle!",}, 
{message: "Let's say we want to try to draw a tree.  How might you do that?",

lessonSection: "A Hard Problem",}, 
{message: "Trees have branches.  Here is a start. Can you add more branches?",

{message: "Oog, that a lot of work.",}, 
{message: "Me try using variables.  Does that make it easier?  Not sure it does. What do you think?",

{message: "Bleah, that still too much work. For loop maybe?  How might that work? I don't know.  How would we draw two branches from every branch? I'm not sure.  What do you think?",}, 
{message: "No, I can't see a way to draw trees easily using a for loop.  What else we got?  Can we use functions?",}, 
{message: "Maybe a function could draw a branch.  But how could every branch draw two more branches?",}, 
{message: "Let's start with a function that draws a branch.  Here's one.  It takes four numbers, where to start (x,y), the length <span class=tutor-code>l</span>, and the <span class=tutor-code>direction</span> which says whether to draw left, right, or straight.",

{message: "<span class=tutor-code>direction</span> works by slanting the branch left (for negative numbers) or right (for positive).  See?  Try changing it!",

{message: "How can we make this draw two more branches now?"}, 
{message: "Ah, me know, make function use itself! Can you see what this is doing?",

lessonSection: "Recursion",}, 
{message: "That crazy! Here's a version that's easier to twiddle.  Try playing with it!  Change <span class=tutor-code>xScale</span>, <span class=tutor-code>yScale</span>, or <span class=tutor-code>minLength</span>!  Cool, huh?",

{message: "There are a couple new things here.  Monster stop to explain."}, 
{message: "drawBranch() is a <i>recursive</i> function.  That means it calls itself."}, 
{message: "drawBranch() only calls itself if <span class=tutor-code>l > minLength</span>.  <span class=tutor-code>l</span> gets smaller and smaller every time drawBranch() calls itself, so drawBranch() stops calling itself eventually when the length of a branch gets small enough."}, 
{message: "Recursive functions are neat, but tricky! Let's do a bit more. Change this to call <span class=tutor-code>nSquareRecursive(4);</span> instead of <span class=tutor-code>nSquare(4);</span>",

{message: "Other than not being blue, it's the same, right?  Do you see how they both work?",}, 
{message: "nSquare() uses a for loop, starts at 4, and counts down: 4, 3, 2, 1.",}, 
{message: "nSquareRecursive() calls itself with one less each time.  So, when called with 4, it calls itself with 3, and that call calls itself with 2, and that call calls itself with 1.  At one, it says, stop calling yourself, so it stops.  And, on each call, it draws a box located at (n * 30, n * 30).  See?",}, 
{message: "This little piece of code draws a shrinking pile of boxes. See how it works?",

{message: "The way it works is it does a translate() to the bottom right corner of the box, then draws the box back up behind it, so a box size big starting at (-size, -size).  Then, as long as the boxes haven't gotten too small, it does that again by calling itself, but shrinking the size of the box the next time.",}, 
{message: "Here is the same thing using a for loop instead. Compare the two. See how they both work?",

{message: "The for loop starts by drawing a box of size 100, then one of 65, and so on.  So does the recursive version, but the recursive version does it by calling itself.",}, 
{message: "You can change them if you want!  Go experiment!",}, 
{message: "Back to trees.  Ooo!  An even better tree!",

lessonSection: "Rotation, Translation, and Recursion",}, 
{message: "See how this works? It uses translate() to move to the end of a branch, then rotate() to tilt the branches off to one side or the other.",}, 
{message: "Try changing <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, and <span class=tutor-code>minL</span>!  If you experiment a bit, you can get some really cool drawings.  Play with it!",}, 
{message: "I think it would look even more like a tree if <span class=tutor-code>angle</span> was a little more random.  Can you make angle bigger and then make rotate() use a number between 0 and angle? (Hint: <span class=tutor-code>Math.random()</span> makes a number from 0.0 to 1.0)"}, 
{message: "Here is one version.  Can you make the <span class=tutor-code>branchScale</span> more random too?",

{message: "Ooo!  That's very tree-like!",

{message: "Try changing <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, and <span class=tutor-code>minL</span>!  If you experiment a bit, you can get some pretty wild stuff!",}, 
{message: "I bet you can draw your own trees now!  Want to try?  I'll help you!",

lessonSection: "Drawing Your Own Tree",}, 
{message: "Let's draw different trees than we did before.  Let's make this plant alternate between splitting off branches right and left.  Some plants do that.  Ready to start?  I'll guide you through it!",}, 
{message: "So, first we need a branch.  Let's make a function drawBranch() that takes two values, a length called <span class=tutor-code>l</span> and a <span class=tutor-code>direction</span>.",

{message: "Do you remember how to write a function like that?  You don't need to make it do anything yet, just declare a function called drawBranch().",}, 
{message: "Were you thinking something like this?",

{message: "I've added some comments about what do to next.  We need to start drawing our tree.  Can you write the code beneath each of the comments?",

{message: "Okay, so you translate() so you start at the right spot and then you try to draw a branch.  Now we need to make drawBranch() do something!  Can you do what the comments say to do?  You should get a single branch (which will look like the trunk of the tree) when you are done.",

{message: "You should have something like this now.  Let's keep going!  Look for the comments to tell you what to do next!",

{message: "Great!  Now you have drawn your first branch, moved to the end of that branch, and you're ready to draw more branches!",

{message: "Let's stop for a second and think about what we're going to want to do next.",}, 
{message: "This plant is going to split off two branches, one going up, one going off to the side.  We want the ones going off to the side to alternative, first right, then left, then right, then left.",}, 
{message: "We'll keep splitting and drawing and splitting and drawing until the branches get very short.",}, 
{message: "Let's add that next.  We should only draw more branches if the length <span class=tutor-code>l</span> is more than 5.  Can you add that?",

{message: "You should have this now.",

{message: "Let's add just the branch going straight up.  Let's make it a little shorter that the last branch we drew.  Follow the instructions in the comments.",

{message: "Do you have this now?  See what it does?  It repeatedly draws a branch straight up, making the branch a little shorter each time.  It looks like a line, but it's really a bunch of branches piled on top of each other.",

{message: "Pretty boring so far?",}, 
{message: "It's about to get a lot more exciting!",}, 
{message: "Let's add the second branch!  For that branch, we are going to rotate to the side indicated by direction, then draw a shorter branch.  Follow the instructions in the comments.",

{message: "Aieeee!  What did you do?",}, 
{message: "Just kidding!  It's all fine!",}, 
{message: "This is just part of what is called debugging, getting the bugs (the problems) out.",}, 
{message: "So, that didn't do what you expected it to do, did it?",}, 
{message: "Any idea what's wrong?",}, 
{message: "What's happening is that all those translate() and rotate() calls are pilled on top of each other.  We didn't really want that.  When it's time to draw the second branch, we really want everything to be the way it was when we did the first branch, but it's not, we've translated and rotated all over the place.",}, 
{message: "Save and restore to the rescue!  Can you add <span class=tutor-code>c.save();</span> and <span class=tutor-code>c.restore();</span> where the comments say to add them?",

{message: "That's mostly better.  But it's only drawing one side of the tree!  Why is that?",

{message: "Figure it out?",}, 
{message: "It's because we didn't switch direction.  Direction is always the same as what it was at the start, it is always 1.  It should alternate, 1, -1, 1, -1 ..."}, 
{message: "Can you make it so both of the drawBranch() calls inside of drawBranch() use -direction instead of direction?",}, 
{message: "Do you know have this?  Wow, nice work!",

{message: "Try playing with it more! Try changing the 0.8, 0.7, and 0.5 to see what happens!",
lessonSection: "Play with Your Tree",}, 
{message: "Look! Green leaves on the ends of the branches!",

{message: "See how that works? The little size 4 green squares are the leaves! They are only added when we get to the end of the branch.",}, 
{message: "Can you make the branches brown?",}, 
{message: "Let me show you something really cool that is only a minor change from what you just did!",

lessonSection: "Fun with Ferns",}, 
{message: "This fern is drawn just by doing three branches from each branch, each rotated at -80, 10, and 100 degrees.  See how it works?",}, 
{message: "Every time it draws a branch, it draws three more branches from the end of that branch.  It keeps doing that and doing that, smaller and smaller, and you get what looks like a fern!",}, 
{message: "All this stuff with trees and ferns are a type of pattern called a <i>fractal</i>. Fractals are crazy cool fun with math.",
lessonSection: "Fractals",}, 
{message: "This fractal is called the Terdragon.",

{message: "If you make l bigger, you can zoom in and see it's made of little triangles!",}, 
{message: "Can you figure out how it works? Take a look at the code.",}, 
{message: "Try making <span class=tutor-code>l=10</span> and then <span class=tutor-code>n=1</span> and then <span class=tutor-code>n=2</span> then <span class=tutor-code>n=3</span>, and you'll see how it grows.",}, 
{message: "Okay, it's time for the last quiz.  This one is hard, so don't worry if you can't finish it.  There is a lot of good stuff coming after this.  Whatever you do, don't quit here, make sure to keep going so you can see all the fun stuff!",

lessonSection: "Quiz: Challenge Problem",}, 
{message: "For the quiz, I want you to write something entirely yourself.  Make a checkerboard pattern, a black square, then a white, then a black, and so on, at least four rows of them (like a 6 x 4 grid).  Can you do it?",

{message: "If you did it, good job, this is really hard, I'm impressed!  If you didn't get it, no worries, here's a hint, you might need two for loops, one inside the other, you'll use at least one c.fillRect(), and don't forget a for loop looks like <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",}, 
{message: "Ready to see different ways to solve it?",}, 
{message: "Here is one way.  See how this works?",

lessonSection: "Many Ways to Code",}, 
{message: "If not, try commenting out one of the fillSquare() lines (using <span class=tutor-code>//</span>) so you can see what the other is drawing.",}, 
{message: "It draws the first and third rows, starting at (0, 0), then doing (0, 100), then doing (100, 0), then (100, 100), and so on.  Then it draws the second and fourth rows, starting at (50, 50), then (50, 150), and so on.  Make sense?",}, 
{message: "Let's look at a few more ways of doing a checkboard.  Here is another version. See how this works?",

{message: "Every time through the loop, it draws two squares, below and to the right of the other.",}, 
{message: "Then, it does that three times across and twice down, skipping over the white squares.  Cool, huh?",}, 
{message: "Here is yet another way of doing a checkboard.  Any idea how this works?  What's that <span class=tutor-code>i % 2</span> doing?",

lessonSection: "Modulo",}, 
{message: "<span class=tutor-code>%</span> mean modulo, it gives the remainder after dividing.",}, 
{message: "So, <span class=tutor-code>1 % 2</span> is 1, <span class=tutor-code>2 % 2</span> is 0 (because 2 divides 2 evenly with no remainder), <span class=tutor-code>3 % 2</span> is 1 again, <span class=tutor-code>4 % 2</span> is 0.",}, 
{message: "So, how does that complicated expression -- <span class=tutor-code>(i % 2 + j % 2) % 2</span> -- work? When i is even, <span class=tutor-code>i % 2</span> will be 0.  Same for j.  If both are odd, then you get (1 + 1) % 2, which is 0. So, that expression will be 0 if both i and j are even or both i and j are odd.",}, 
{message: "For if statements, 0 means false and anything else is true.  So, we'll do what's inside the if statement only when only one of i or j is odd.",}, 
{message: "So, what this does is visit all the squares in the 6 x 4 grid, but only draw a black square in the ones where either the column number or row number is odd but not both.  Make sense now?",}, 
{message: "See how many ways there are to solve a problem like this?  There is usually not just one solution to something you want to do, lots of strategies might work.  Isn't that neat?",}, 
{message: "Okay, time for some fun! Let's do animation!",

lessonSection: "Animation",}, 
{message: "Moving stuff is fun but a little weird.  You need to make something happen every 1/20th of a second or so. What is this doing?",

{message: "The way this works is that, every time we are told to do drawStep(), we erase the screen, move the box, draw the box, and, unless we hit the edge, we say to do drawStep() again a little while later.",}, 
{message: "Try changing <span class=tutor-code>vx</span>, <span class=tutor-code>vy</span>, and <span class=tutor-code>step</span>. You can change the speed of the box and make it move different directions!"}, 
{message: "Try commenting out the clearRect().  That's kind of cool, isn't it?"}, 
{message: "Spinning a box is fun.  Can you make it go faster?",

lessonSection: "Rotating Movement",}, 
{message: "This works the same way as the moving box.  Every time it is told to do drawStep(), it clears the screen, rotates, draws the box, and then says to do drawStep() again in a little while later.",}, 
{message: "What happens if you comment out the clearRect()?",}, 
{message: "Try adding more boxes. Did it do what you expected?",

{message: "I like this version.  It's like a solar system!  Try changing the speed now!",

{message: "Stop for a sec.  Sit back and think about how you might create three moving boxes.",

lessonSection: "Objects",}, 
{message: "Well, you'd need the x and y position of each, right?  And the size of each.  And maybe the dx and dy velocity of each?  And the angle?",}, 
{message: "You could create variables x1, x2, x3, y1, y2, y3, dx1 ... ugh.  That's getting painful, isn't it?",}, 
{message: "There's another way to do this, we can make objects!  Objects are little bundles of variables and code. Here's a box object.  Take a look at it.  See how it works?",

{message: "What is going on is <span class=tutor-code>new Box(10, 10, 100)</span> creates an object, then immediately calls the Box() function to set it up.  Box() then uses <span class=tutor-code>this.x</span> to set a variable named x in the object to the x that was passed into the function."}, 
{message: "It does the same thing to set up all the other variables in our new Box object.  Once the object is created and set up, we set our variable <span class=tutor-code>b</span> to that.  Later, we can get at the x and y and other variables of our box using <span class=tutor-code>b.x</span>, <span class=tutor-code>b.y</span>, and so forth."}, 
{message: "Our box object is just a little bundle of variables that describe our box.  It says where the box is, its velocity (dx and dy), how big it is, everything that it means to be a box.",}, 
{message: "We can even have box objects know how to draw themselves.",

{message: "See how <span class=tutor-code>this.stroke</span> is set equal to a function?  And that function calls strokeRect() to draw this box?  Then, later, we create a box called b1 and tell it to draw itself with <span class=tutor-code>b1.stroke()</span>. That's pretty cool, isn't it?",}, 
{message: "You know, monster has a secret.  Monster been hiding something from you.",
lessonSection: "Canvas Object",}, 
{message: "Have you been wondering why we use c.strokeRect() to draw a box?  What's the deal with that <span class=tutor-code>c.</span>?  Why is that there?",}, 
{message: "Turns out all this time you have been using an object to draw, an object called the canvas object.",}, 
{message: "Monster added some code for you to get that object from the web page and put it in a variable named <span class=tutor-code>c</span>, so you could use it.  Let me show you what that hidden code looks like.",

{message: "That code asks the document object (which is the web page) to give us the element in the web page called 'pane' (which is the id in the web page of the canvas where we draw), and then gets the 2d drawing canvas from that element.  We name that canvas object <span class=tutor-code>c</span> and use all its drawing functions, which is why we use <span class=tutor-code>c.</span> in front of every use of strokeRect()."}, 
{message: "That's useful to know if you write your own Javascript for your own drawing in web pages later!  But, for now, let me hide it again, so we can focus on Box objects.",

lessonSection: "Using Objects",}, 
{message: "Can you create a couple more boxes and have them draw themselves? For each one, you'll have to use new and stroke(), like we did for the box we called b1.",}, 
{message: "That's pretty nice, but calling each box b1, b2, b3, or whatever is painful. What if I want ten boxes?  Or a hundred?",}, 
{message: "What I need is a list of boxes, like this!",

lessonSection: "Lists (Arrays)",}, 
{message: "A big new thing here.  Monster explain.",}, 
{message: "<span class=tutor-code>[]</span> creates what is called an <i>array</i>, which basically is a list that holds stuff.  These lists can hold objects, numbers, whatever we want.",}, 
{message: "So, <span class=tutor-code>var boxes = []</span> means create an empty list and call it boxes.",}, 
{message: "<span class=tutor-code>boxes.push()</span> adds something to the end of the list.  Here, we use it to add a new box.  Because it is in a for loop that counts 0, 1, 2 and then stops, we will add three boxes to the end of the list.",}, 
{message: "Take a look at the second for loop.  <span class=tutor-code>boxes.length</span> is the length of the list.  <span class=tutor-code>boxes[0]</span> is the first box in the list, <span class=tutor-code>boxes[1]</span> the second, and so forth.  So, that second for loop goes through every box in the list and tells it to draw itself by calling <span class=tutor-code>boxes[i].stroke();</span>",}, 
{message: "Can you add some more boxes?",}, 
{message: "So far, we haven't really done that much that requires Box objects.  But let's go a step further.  Let's make boxes that are animated and move!",
lessonSection: "Methods on Objects",}, 
{message: "Let's start by making all our boxes draw to whatever angle they are supposed to be at.  See how this new version of stroke() works?",

{message: "Whenever a box is told to draw itself, we do that by moving to the center of the box, rotating around that center to match the angle of the box, and then draw the box around its center.  Kind of like what we did before for rotated boxes, right?",}, 
{message: "Now let's make the boxes spin!  Look at the new function updateAll().  See what it is doing?",

{message: "updateAll() starts by clearing the screen, then rotates each box a little more before drawing it.  Finally, it says, call me again in 1/20th of a second.  So, 20 times a second, we rotate each box a little and redraw it.  Cool, huh?",}, 
{message: "Can you make the boxes spin faster?",}, 
{message: "Can you make them spin the other direction (counter-clockwise instead of clockwise)?",}, 
{message: "Can you add more boxes?  You'll have to change three things to fit them all on the canvas, but I bet you can figure it out.  I liked it with 60 of them, looks really weird!",}, 
{message: "All those fast spinning boxes make Monster dizzy.  Let's slow it down again and let me show you something else.  We can move the update into each Box object.  That will be handy when we make the update do more.  See what this does now?",

{message: "updateAll() just calls the update() of the box.  update() on the box changes the angle and then draws the box.  Each box knows how to update and draw itself now.",}, 
{message: "Let's make the boxes move too!  All we have to do is have update use <span class=tutor-code>dx</span> and <span class=tutor-code>dy</span>.  Take a look at <span class=tutor-code>Box</span> and how it is updated now!",

lessonSection: "Velocity and Collisions",}, 
{message: "It's a little more complicated, but only a little.  Every time a box is told to update(), it moves by its velocity (<span class=tutor-code>dx</span> and <span class=tutor-code>dy</span>) and rotates by its angular velocity (<span class=tutor-code>da</span>).",}, 
{message: "If a box gets off the edge of the screen, we reverse its velocities, making it appear to bounce!  Cool!",}, 
{message: "One thing that is new here.  When the box checks if it is off the screen, there's something you haven't seen before, <span class=tutor-code>||</span>",
lessonSection: "Bitwise Operators (And and Or)",}, 
{message: "<span class=tutor-code>||</span> means <i>or</i>, as in either-or, so the first if statement checks if the box has either gone off the left or right edge, and the second checks if it has gone off the top or bottom.  Make sense?",}, 
{message: "There is also a way to say <i>and</i>, as in both have to be true, which is <span class=tutor-code>&&</span>.  So, <span class=tutor-code>||</span> means <i>or</i> and <span class=tutor-code>&&</span> means <i>and</i>.",}, 
{message: "Back to the fun.  Have you tried putting in a lot of boxes yet?  Try it!  Make it so there are 10 boxes!  Or 50!",
lessonSection: "Easy with Objects",}, 
{message: "See how easy it is to keep track of all these boxes, their position, angle, velocity, and everything else, using objects?  Once you say what a Box object is, it's easy to create lots and lots of them!",}, 
{message: "You're nearing the end of the lessons now.  But I still have a couple fun things to show you.",

lessonSection: "Circles, Arcs, and Balls",}, 
{message: "Now that you know about objects with velocity, we actually are really close to being able to do cool things like make a ball bounce.  All we need is a little physics, some acceleration to go with our velocities!",}, 
{message: "Here's a <span class=tutor-code>Ball</span> object.  It's a lot like the Box object you saw before, but has differences.  Take a look at the code.",

{message: "One big difference is that a ball is round, so angle doesn't matter.  Look at the code.  There is no angle any more, right?",}, 
{message: "Another big difference is that we use arc() to draw circles.  Arcs are cool, but they're a little complicated for just drawing a circle. Let me explain how they work.",}, 
{message: "To draw a circle in Javascript, you call <span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span>, where (x, y) is the center of the circle, r is the radius, and then 0 and <span class=tutor-code>Math.PI * 2</span> says to draw an arc from 0 degrees to 360 degrees (since 2 * pi in radians is 360 degrees).",}, 
{message: "Because we draw circles from the center, a bunch of other things change, such as exactly how we check of whether we need to bounce off the sides.",}, 
{message: "Take a look at the code again.  Does it make more sense now?",}, 
{message: "Okay, now we want to make a bouncing ball.  To do physics, we need velocity and acceleration.  So far, we have had velocity, but no acceleration.  Let's add acceleration!  Here it is!",

lessonSection: "Acceleration, Velocity, and Physics",}, 
{message: "Do you see it?  Now, every time we update() on a Ball (and the ball isn't bouncing, to simplify things), we change the downward velocity (<span class=tutor-code>dy</span>) by whatever gravity is.",}, 
{message: "Pretty cool!  Try adding 10-15 balls and watch it for a while.  It's a full physics simulation with gravity and bouncing!  Very fun!",}, 
{message: "Let me show you one more thing before we move on from bouncing balls.  What is called a partially elastic collision.",

lessonSection: "Collisions and Physics",}, 
{message: "In the real world, when things collide, they usually bounce off each other slower than before.  That's why, when you drop a ball, it doesn't keep bouncing forever.",}, 
{message: "If you look at the code in update, there is now a friction force applied when the balls bounce off the walls.  It makes them bounce off slower than they came in.  Eventually, the balls all stop bouncing and slowly roll along the bottom.",}, 
{message: "Cool simulation, and adds some realism.  Play with it a bit!  Change the friction, add more balls, increase gravity, change timeStep.  Try messing around with it!",}, 
{message: "For our last lessons, let's work a bit with tracking the mouse.  This is a lot of fun!",

lessonSection: "Mouse Events",}, 
{message: "Here is a ball that sticks to the mouse.  Every time the mouse moves, the ball redraws on top of the mouse.",

{message: "How does it work?  It starts by setting the variable pane to the element of the web page called 'pane', which happens to be the one our drawing canvas is in.",}, 
{message: "<span class=tutor-code>pane.onmousemove = function(evt) {};</span> is really important.  That code binds a function to the <i>onmousemove</i> event on the 'pane' element, which means this function is called any time the mouse moves inside the drawing canvas.",}, 
{message: "Our function then asks the event where the mouse is (the <span class=tutor-code>clientX</span> and <span class=tutor-code>clientY</span>) and draws a big circle around it.  Make sense?",}, 
{message: "What's really cool about this is that we can combine it with animation.  Look at this!",

lessonSection: "Springs and Physics",}, 
{message: "What this does is, every time the mouse moves in the canvas area, it sets <span class=tutor-code>mouseX</span> and <span class=tutor-code>mouseY</span> to the location of the mouse.",}, 
{message: "Then, when each ball is updated, it figures out how far away from the mouse it is, and accelerates toward it.",}, 
{message: "The acceleration is the square root of the distance, so it pulls harder when it is really far away.  Imagine all the balls being connected to the mouse by little rubber bands or springs.  It's a little like that.",}, 
{message: "Try making the balls smaller!  And add more of them!  I like it with about 40 small balls chasing the mouse.",}, 
{message: "Great job! Like what you learned? Was it fun?",

lessonSection: "The End",}, 
{message: "Wow, you did everything!  Congratulations, nice work!  A lot of these are really hard. I'm impressed you finished!  I hope you enjoyed it!",
