var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "egm-maths2-3-3",
  "level": "1",
  "url": "egm-maths2-3-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  These lecture notes accompany the course Mathematics 2 and are intended as a structured introduction to central mathematical methods used in engineering sciences. The course builds on prior mathematical knowledge and aims to deepen both technical understanding and mathematical maturity.  A central goal of the course is to strengthen the ability to identify questions arising in engineering applications that can be formulated and solved mathematically. For this reason, the presentation emphasizes not only computational techniques, but also clear reasoning, precise language, and the development of coherent mathematical arguments. Students should learn to distinguish assumptions, rules, and conclusions, and to communicate their ideas and solution strategies in a mathematically sound way.  The course covers selected topics from linear algebra, differentiation in , differential equations, and integration in several variables. In particular, we study matrices, systems of linear equations, inverse matrices, determinants, linear maps, eigenvalues, and diagonalization; the foundations and applications of differentiation in higher dimensions; basic methods for differential equations; and the notions of curve integrals, line integrals, and surface and volume integrals over normal domains.  Throughout these notes, the focus is on recognizing typical problem structures, applying standard methods reliably, and developing confidence in the use of mathematical tools that are fundamental in engineering practice and in the scientific literature.  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "section-vectors-matrices-linear-systems",
  "level": "1",
  "url": "section-vectors-matrices-linear-systems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors, Matrices and Linear Systems of Equations",
  "body": " Vectors, Matrices and Linear Systems of Equations   In this section, we learn the basic notions underlying linear algebra: vectors, matrices and linear systems of equations. Many of the later concepts of linear algebra build on these elementary objects and the operations defined on them.    Brief reminder: vectors   In physics, many real-world quantities—such as force, velocity, or displacement—cannot be fully described by a single number. For example, if you apply a force to push a box, the outcome depends not only on how hard you push (the magnitude) but also on the direction in which you are pushing.  To capture both magnitude and direction simultaneously, we use mathematical objects called vectors. This concept extends naturally beyond physical space into abstract mathematics, allowing us to handle multi-dimensional spaces and systems.    Vector   A vector of size is an ordered tuple of real numbers. The set of all vectors of size is denoted by . A vector is commonly written as or in column form as     Let us look at a concrete numerical representation of a vector in three-dimensional space.   A Vector in  An example of a vector in is    In and , vectors can be visualized as arrows in Euclidean space. In this geometric interpretation, a vector has a direction and a length, but it is not tied to a fixed starting point. A particularly useful representative is the position vector that starts at the origin.  At the same time, the algebraic point of view is more general: a vector is determined by its components. The geometric picture is very helpful in two and three dimensions, but the coordinate description remains meaningful in arbitrary dimension.  To make vectors useful, we need mathematical rules for how to combine them. The two most fundamental operations are adding two vectors and multiplying a vector by a real number.   Vector Operations   Let and let . The sum of two vectors of the same size and the scalar multiple of a vector are defined component-wise.    Addition  The sum of and is     Scalar Multiplication  The scalar multiple of by is        Calculating Sums and Scalar Multiples  Let and be vectors in .  Their sum is   If we scale by , we obtain     Resultant Force on a Mechanical Component  Suppose two forces act on a component in the plane:   The total force is obtained by vector addition:   Thus, the component experiences a resultant force with horizontal component and vertical component .    Scaling a Force Vector  Suppose a force acting on a component is represented by   If the same force is applied with twice the intensity, the new force vector is   This illustrates scalar multiplication: all components are multiplied by the same scalar, so the direction remains the same while the magnitude changes.    Interactive: Vector Addition     Interactive: Scalar Multiplication    Having established these basic arithmetic operations, a special vector arises naturally when we scale any vector by zero or subtract a vector from itself.   Zero Vector   The zero vector in is the vector whose components are all equal to zero. It is denoted by and has the form     Just like ordinary numbers, vector operations satisfy several basic algebraic laws.   Laws of Vector Arithmetic   For all vectors and all scalars , the following rules hold.   Associativity of Addition:   Commutativity of Addition:   Neutral Element:   Inverse Element:   Left Distributivity:   Right Distributivity:   Associativity of Scalar Multiplication:   Multiplication by One:      When working with several vectors, we often want to build new vectors from those already given. The most natural way to do this is to scale the vectors and then add them. In this way, we can describe how a vector can be assembled from a collection of basic directions.  This idea is fundamental in linear algebra. It helps us answer questions such as: Can a given vector be generated from other vectors? Do several vectors together describe all directions in a space? And does one of the vectors contribute genuinely new information, or can it already be obtained from the others?   Linear Combination   Let and let . A vector of the form is called a linear combination of the vectors .     A Linear Combination in  Consider the vectors   Then   Hence, is a linear combination of and .   Linear combinations tell us how new vectors can be generated from a given collection of vectors. This naturally leads to the question of whether all vectors in the collection are really needed.  Indeed, it may happen that one of the vectors can already be written as a linear combination of the others. In that case, it does not contribute a genuinely new direction. To distinguish between such redundant situations and genuinely different directions, we introduce the concept of linear independence.   Linear Independence and Basis   Vectors are called linearly independent if the equation has only the trivial solution .  A basis of is a tuple of linearly independent vectors in . In that case, every vector in can be written uniquely as a linear combination of the basis vectors.     Linear dependence and linear independence  This graphic visualizes the concept of linear dependence and linear independence.       A Counterexample in  Consider the vectors   Since , one vector is a scalar multiple of the other. Therefore, the vectors are not linearly independent. Indeed: so we have found a non-trivial solution to the equation    The most intuitive example of a basis is given by the standard coordinate axes.   Standard Basis in  The vectors are linearly independent.  Indeed, the equation becomes so necessarily and .  Hence, is a basis of . This means that every vector in can be written uniquely as a linear combination of and .    Three Linearly Independent Vectors in  Consider the vectors   To test linear independence, we consider   This gives so .  Therefore, the three vectors are linearly independent.    A Counterexample with Three Vectors in  Consider the vectors   Since the vector is a linear combination of the other two.  Hence, the three vectors are not linearly independent.   Besides combining vectors algebraically, we also want to measure geometric quantities such as length, distance, and angle. These are based on the scalar product.   Scalar Product, Norm, Distance, and Angle     Scalar Product  For vectors , the scalar product is defined by     Norm  The norm of is its length:     Distance  The distance between and is     Angle  For two non-zero vectors and , the angle between them is defined by     Orthogonality  Two vectors and are called orthogonal if       The formula for the norm is a direct generalization of the Pythagorean theorem. In two dimensions, a vector forms the hypotenuse of a right triangle whose legs have lengths and . Hence, . The same idea extends to higher dimensions.   Visualizing the Norm via the Pythagorean Theorem   A right-angled triangle formed by a vector and its components, with squares drawn on each side to geometrically illustrate that the square of the norm equals the sum of the squares of the components.      Lengths and Orthogonality  Consider the vectors and .  The norm of is   Their scalar product is   Since the scalar product is zero, the vectors are orthogonal.    A State Vector for Monitoring a Technical System  In engineering applications, vectors are often used to represent system states rather than geometric arrows. For example, the operating condition of a motor might be described by the vector where the components represent, for instance, a temperature deviation, a vibration level, and a current deviation.  Another operating condition may be represented by   The distance between the two states is   This shows that vectors in are not only geometric objects; they can also encode measurements and describe the state of a technical system.    Check Your Understanding   Identifying Orthogonal Vectors   Which of the following vectors is orthogonal to ?      Incorrect. The scalar product is , not zero.     Correct! The scalar product is .     Incorrect. The scalar product is , not zero.     Incorrect. The scalar product is , not zero.      Requirements for a Basis   True or False: Any two non-zero vectors in automatically form a basis of that space.     True  Incorrect. If the two vectors are scalar multiples of one another, then they are not linearly independent and therefore do not form a basis.    False  Correct! Two vectors in form a basis only if they are linearly independent.        Matrices   Matrices provide a convenient way to organize numerical data in rows and columns. They are used to describe systems of linear equations, to encode linear transformations, and to model input-output relations in engineering, economics, and the natural sciences.  In these notes, vectors are regarded as column vectors. Therefore, a vector in can also be viewed as an -matrix.    Matrix, Rows, and Columns   A matrix is a rectangular array of real numbers arranged in rows and columns. A matrix with rows and columns is called an -matrix . The set of all real -matrices is denoted by .  A matrix is written in the form   The entry in the -th row and -th column is denoted by . We also write .  The -th row of is and the -th column of is      An Example of a Matrix  The matrix has rows and columns, so .  Its entry in the first row and third column is . The second row is , and the first column is .    Equality of Matrices   Two matrices and are equal if they have the same size and if all corresponding entries are equal.  Thus, for and , we have exactly if for all and .     Arithmetic Operations on Matrices  We now introduce the basic arithmetic operations for matrices.   Addition and Scalar Multiplication   Let and be matrices of the same size in , and let .  The sum of and is defined component-wise by   The scalar multiple of by is defined by      Addition and Scalar Multiplication  Let   Then   Moreover,     Transpose   Let . The transpose of is the matrix obtained by interchanging rows and columns.  In other words, the entry in row and column of is . Thus,      Computing a Transpose  For the transpose is    Matrix multiplication is the most important operation involving matrices. At first sight, its definition may seem somewhat unintuitive. We therefore begin by defining the matrix product and illustrating it with an example. Later, in a range of applications, we will see that this definition is both natural and extremely useful.   Matrix Multiplication   Let and . Then the product is defined, because the number of columns of equals the number of rows of .  The product is an -matrix whose entries are given by   Equivalently, the entry is obtained as the scalar product of the -th row of and the -th column of .    Hence, the product is defined only if the inner dimensions agree: the number of columns of must equal the number of rows of .   Computing a Matrix Product  Let   Then    Since vectors are regarded as column vectors, matrix multiplication also allows us to multiply a matrix by a vector.   Matrix-Vector Product   Let and let . Interpreting as an -matrix, the product is defined and belongs to .     A Matrix-Vector Product  Let   Then    The matrix-vector product can also be interpreted in terms of the columns of the matrix. If (for example, if , then and ) and then Thus, is a linear combination of the columns of .   Modelling Population Movements  Consider a population distributed between suburban areas ( ) and urban areas ( ). Suppose that in one year, of the suburban population remains in the suburban area and moves to the urban area. Likewise, of the urban population remains in the urban area and moves to the suburban area.  If denotes the population vector at the beginning of the year, then the population vector at the end of the year is   This is an example of a matrix-vector product describing the state update of a system.    Sensor Calibration  Suppose a sensor system records two raw values collected in the vector   A calibration matrix transforms the raw measurements into corrected values:   Thus, matrices can be used to model calibration and coordinate transformations in engineering applications.     Special Matrices and Laws of Arithmetic   Special Matrices   Several classes of matrices occur frequently.    Zero Matrix  A matrix all of whose entries are equal to zero.    Square Matrix  A matrix with the same number of rows and columns.    Identity Matrix  A square matrix whose diagonal entries are equal to and whose off-diagonal entries are equal to . It is denoted by or, if the size matters, by .    Diagonal Matrix  A square matrix whose off-diagonal entries are all zero.    Triangular Matrix  A square matrix is called upper triangular if all entries below the main diagonal are zero, and lower triangular if all entries above the main diagonal are zero.    Symmetric Matrix  A square matrix satisfying .    Skew-Symmetric Matrix  A square matrix satisfying .       Examples of Special Matrices  The matrices are a zero matrix, an identity matrix, and a diagonal matrix, respectively.  Moreover, is upper triangular, and is symmetric.    Laws of Matrix Arithmetic   Let be matrices of suitable sizes, and let . Then the following rules hold.   Addition:  and , provided the matrices have the same size.  Neutral and Inverse Elements:  and .  Associativity of Multiplication:  , whenever all products are defined.  Identity Matrix:  and , where is the identity matrix of suitable size.  Distributivity:  and , whenever the products are defined.  Compatibility with Scalars:  .      Matrix Multiplication Is Not Commutative  In general, matrix multiplication is not commutative. This means that even if both products and are defined, they need not be equal.    A Counterexample to Commutativity  Let   Then   Hence, .       Linear Systems and the Gauss--Jordan Method   Systems of linear equations occur throughout mathematics, science, and engineering. They arise whenever several unknown quantities are linked by linear relations, for example in balance equations, circuit equations, calibration problems, or interpolation tasks.  Our goal is to solve such systems systematically. The key idea is to replace a given system by simpler equivalent systems whose solution sets remain unchanged. This leads to the Gauss algorithm and, as a further refinement, to the Gauss-Jordan method.  Throughout this section, it is important to distinguish carefully between four different objects. The linear system is the mathematical problem we want to solve. Its augmented coefficient matrix is a compact way of writing this problem. The solution set is the set of all vectors that satisfy the system. Finally, the Gauss and Gauss-Jordan methods are procedures that transform the matrix without changing the solution set of the underlying system.    Linear System and Augmented Coefficient Matrix   A system of linear equations with equations and unknowns is a system of the form   Its augmented coefficient matrix is      A Linear and a Non-Linear System  Consider the system This is a linear system. Its augmented coefficient matrix is   In contrast, the system is not linear, because the term is a product of unknowns.    A Solution and a Solution Set  Consider the linear system   The vector is a solution , because its components satisfy both equations:   In this example, there is only one solution. Therefore the solution set is the set   More generally, the solution set of a linear system may contain no vector, exactly one vector, or infinitely many vectors.    Solution Set of a Linear System   The solution set of a system of linear equations is the set of all vectors whose components satisfy all equations of the system simultaneously.  If no such vector exists, the solution set is empty.     Elementary Row Operations and Row Equivalence   The following operations on the augmented coefficient matrix are called elementary row operations .   Interchanging two rows.  Multiplying a row by a non-zero scalar.  Adding a multiple of one row to another row.   Two matrices are called row equivalent if one can be transformed into the other by a finite sequence of elementary row operations.     Examples of the Elementary Row Operations  Consider the system Its augmented coefficient matrix is   Interchanging the two rows gives This simply changes the order of the equations.  Multiplying the first row by gives This replaces the first equation by an equivalent one.  Adding times the first row to the second row gives This replaces the second equation by the difference of the old second equation and twice the first equation.    Why Row Operations Preserve the Solution Set  For the original system we compute from the first equation . Substituting into the second equation yields and hence . So the solution set is   After interchanging the rows, the system becomes This is exactly the same pair of equations, only written in a different order. Therefore the solution set does not change.  After multiplying the first row by , we obtain The first equation is equivalent to the original first equation, because dividing by recovers it. Hence the set of solutions is again the same.  After replacing the second row by , we obtain From the second equation we get , and then the first equation gives . Thus the solution set is still     Row Equivalent Systems Have the Same Solution Set   Elementary row operations do not change the solution set of a linear system. In particular, if the augmented coefficient matrices of two linear systems are row equivalent, then the two systems have the same solution set.    This result is the foundation of the elimination methods that follow. We simplify a linear system step by step until its structure becomes transparent.   Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if it satisfies the following conditions.   All rows consisting entirely of zeros are at the bottom of the matrix.  In each lower non-zero row, the first non-zero entry lies strictly to the right of the first non-zero entry of the row above it. This first non-zero entry of a row is called a pivot element .   A matrix is in reduced row echelon form if, in addition, every pivot element is equal to and is the only non-zero entry in its column.  The notions pivot element and pivot position are used only for matrices that are in row echelon form. The pivot position is the position in the matrix at which a pivot element occurs, that is, the row-column position of the first non-zero entry of a non-zero row.     A Matrix in Row Echelon Form  The matrix is in row echelon form. The first non-zero entries of the non-zero rows move strictly to the right as we go downward.    A Matrix in Reduced Row Echelon Form  The matrix is in reduced row echelon form. Each pivot is equal to , and in each pivot column all other entries are zero.    A Matrix That Is Not in Row Echelon Form  The matrix is not in row echelon form, because in the third row the first non-zero entry lies to the left of the first non-zero entry in the second row.    Solving a System in Row Echelon Form  Consider the augmented coefficient matrix   The corresponding system is   The matrix is in row echelon form. We will now see that in this case the system can be solved easily. From the last equation we obtain Substituting this into the second equation gives Finally, the first equation yields   Hence the solution set is    In general, a given system is not initially in row echelon form. The Gauss algorithm transforms it into such a form.   Gauss Algorithm   The Gauss algorithm transforms an augmented coefficient matrix into row echelon form by repeating the following steps.   Identify the leftmost column that contains a non-zero entry.  Choose a non-zero entry in this column and move it to the top of the remaining submatrix by interchanging rows if necessary.  Use row operations to create zeros below this entry.  Repeat the procedure with the submatrix obtained by deleting the pivot row and the pivot column.      Applying the Gauss Algorithm  Consider the augmented coefficient matrix   We choose the entry in the first row and first column as the first pivot and eliminate the entries below it: This gives   In the remaining submatrix, the leftmost non-zero column is the third column. We choose the entry in the second row as the next pivot and eliminate the entry below it: We obtain   This matrix is in row echelon form. Its pivot columns are the first, third, and fourth columns. We will later use exactly this information to analyze the solution set of the corresponding linear system.   Row echelon form is already sufficient to analyze the system and to solve it by back substitution. We can also continue the reduction process further.  The difference between the two methods is simple: in the Gauss algorithm we create zeros below the pivots, while in the Gauss--Jordan method we continue until there are also zeros above the pivots.   Gauss-Jordan Method   The Gauss-Jordan method continues the row reduction after the Gauss algorithm until the augmented coefficient matrix is in reduced row echelon form.  Starting from a row echelon form, one begins with the pivot furthest to the bottom right. First, the corresponding row is scaled so that this pivot becomes equal to . Then all entries above this pivot are eliminated, so that the whole pivot column is cleaned above the pivot. One then moves to the next pivot, again looking from the bottom right toward the upper left, and repeats the same procedure.     Continuing the Example with Gauss--Jordan  We continue with the row echelon form   The pivot furthest to the bottom right is the entry in the third row and fourth column. We first scale this row: Then the matrix becomes   We now eliminate the entry above this pivot: Hence   We now move to the next pivot, namely the entry in the second row and third column. First, we scale: This yields Now we clean the third column above this pivot: Then   Finally, we consider the remaining pivot in the first row and first column. It is already equal to , and there are no rows above it. Thus we have reached reduced row echelon form:    The position of the pivots tells us a great deal about the solvability of a system. We now derive the basic possibilities systematically from row echelon form.   A Pivot in the Augmented Column Means No Solution  Consider the row echelon form   The second row corresponds to the equation which is impossible. Here the pivot lies in the augmented column, that is, in the rightmost column. Therefore the system is inconsistent and has no solution.    If Every Variable Column Has a Pivot, the Solution Is Unique  Consider the row echelon form   The rightmost column is not a pivot column, so the system is consistent. Moreover, every variable column contains a pivot. Thus each variable is determined by the equations, and no choice remains open.  From the last equation we obtain The second equation then gives and the first equation yields   Hence the solution set consists of exactly one vector:     Basic Variables and Free Variables   Assume that a linear system is solvable and that its augmented coefficient matrix is in row echelon form.  Variables whose columns are pivot columns are called basic variables . Their values are determined by the equations once the remaining variables have been chosen.  Variables whose columns are not pivot columns are called free variables . The system imposes no pivot equation that determines them directly. Therefore they are not restricted by the row echelon structure and may be chosen freely. For this reason, we can introduce parameters for them.     If Some Variable Columns Have No Pivot, Free Variables Appear  Consider the row echelon form   The first and third columns are pivot columns, so and are basic variables. The second column is not a pivot column, so is a free variable.  From the second equation we obtain The first equation becomes hence   Since is free, the system does not prescribe a fixed value for it. We therefore introduce a parameter and write Then   Therefore, the solution set is   Thus one free variable leads to infinitely many solutions.    Number of Solutions from the Row Echelon Form   Consider a linear system and let its augmented coefficient matrix be transformed into row echelon form.   If the rightmost column is a pivot column, then the system has no solution.  If the rightmost column is not a pivot column and every variable column is a pivot column, then the system has exactly one solution.  If the rightmost column is not a pivot column and at least one variable column is not a pivot column, then the system has infinitely many solutions.     These three cases can be remembered by three simple questions.   Is there a pivot in the rightmost column? Then the system is inconsistent.  Does every variable column contain a pivot? Then the solution is unique.  Is there a variable column without a pivot? Then there is a free variable, and therefore infinitely many solutions, provided the system is consistent.    A Zero Row Does Not Automatically Mean Free Variables  Consider the matrix   Although the last row is zero, each variable column contains a pivot. Hence the system has a unique solution.   Once the solvability question has been answered, there are two standard ways to determine the solution set.   Determining the Solution Set from Row Echelon Form by Back Substitution  Consider the row echelon form   The pivot columns are the first, second, and fourth columns. Hence , , and are basic variables, while is a free variable.  We begin with the last non-zero row. From we obtain   The second row gives Since is free, we write Substituting yields   The first row gives Substituting and , we obtain   Therefore, is the solution set.  This procedure is called back substitution : starting with the last pivot equation, we determine the basic variables step by step from bottom to top.    Determining the Solution Set from Reduced Row Echelon Form by Direct Reading  Consider the reduced row echelon form   The pivot columns are the first, second, and fourth columns. Hence , , and are basic variables, while is free.  Because the matrix is already in reduced row echelon form, each basic variable is isolated in its own row:   We may therefore read off the solution almost immediately. Let Then   Hence the solution set is   Compared with general row echelon form, reduced row echelon form has the advantage that the basic variables can be read off directly, without an additional back-substitution step.   We can now summarize the practical procedure for solving a linear system.   Summary: Solving a Linear System   To solve a linear system, we proceed as follows.   Write down the augmented coefficient matrix.  Use the Gauss algorithm to transform it into row echelon form.  Check whether the system is solvable.  If the system is solvable, determine the basic and free variables.  Find the solution set either by back substitution or by continuing with the Gauss--Jordan method until reduced row echelon form is reached.      Solving a Linear System from Start to Finish  Consider the system   Its augmented coefficient matrix is   We eliminate the entries below the first pivot: This gives   Next, we eliminate the entry below the second pivot: Hence   The matrix is now in row echelon form, and every variable column contains a pivot. Therefore the system has a unique solution. From the last equation we obtain The second equation gives Finally, the first equation yields   Thus the solution set is    Linear systems can also be interpreted in terms of matrices and vectors. This point of view connects the theory of linear systems with vector arithmetic, linear combinations, and later with linear transformations.  In particular, a system of equations can be understood as the question whether a given vector can be written as a linear combination of the column vectors of a matrix.   Matrix-Vector Form and Vector Form of a Linear System   Let be the augmented coefficient matrix of a linear system.  Writing the system can be written in matrix-vector form as   If denote the columns of , then the same system can also be written in vector form as      A Linear System in Matrix-Vector Form  Consider the system   Its matrix-vector form is   If we denote the columns of the coefficient matrix by then the same system can be written in vector form as    The vector form is conceptually very important: solving the system means deciding whether can be represented as a linear combination of the column vectors of , and if so, in which way.   Testing Linear Independence by a Homogeneous System  Consider the vectors   To test whether these vectors are linearly independent, we consider the vector equation This leads to the homogeneous linear system   Applying row operations, we obtain a row echelon form with a free variable. Hence the homogeneous system has infinitely many solutions besides the trivial one.  Therefore, the vectors , , and are linearly dependent.   When working with matrices, it is often useful to measure how much independent information they contain. The elimination process already provides exactly the right notion for this purpose.  The number of pivots that remain after row reduction tells us how many independent rows or columns are present. This leads to the concept of rank, which later plays a central role in solvability questions and in the structure of solution sets.   Rank of a Matrix   Let be a matrix. The number of pivot elements in a row echelon form of is called the rank of .     Determining the Rank  Consider the matrices    The matrix already has two pivot elements, so   For , row reduction leads to a row echelon form with two pivot elements, hence   Since the two rows are linearly independent, and therefore   The second row of is equal to times the first row, so there is only one pivot. Thus     Check Your Understanding   Recognizing a Row Operation   Which of the following is an elementary row operation?     Replacing a row by the square of that row.  Incorrect. Squaring a row is not an elementary row operation.    Adding a multiple of one row to another row.  Correct. This is one of the three elementary row operations.    Deleting a row that contains a zero.  Incorrect. Deleting a row is not an elementary row operation.    Replacing every entry in a column by its negative.  Incorrect. Row operations act on rows, not on entire columns.      Is This Row Echelon Form?   Consider the matrix Is this matrix in row echelon form?     Yes.  Incorrect. In the third row, the first non-zero entry lies to the left of the first non-zero entry in the second row.    No.  Correct. The pivot positions do not move strictly to the right as we go downward.      Pivot Columns and Free Variables   Consider the matrix Which variables are free?     and  Incorrect. The first and second columns are pivot columns.    and  Correct. The third and fourth columns are not pivot columns, so the corresponding variables are free.    Only  Incorrect. The third column is also not a pivot column.    There are no free variables.  Incorrect. Not every variable column contains a pivot.      Unique Solution or Infinitely Many?   True or False: If an augmented coefficient matrix in row echelon form has a zero row at the bottom, then the corresponding system always has infinitely many solutions.     True  Incorrect. A zero row alone does not imply free variables. It may still happen that every variable column contains a pivot.    False  Correct. What matters is whether some variable columns fail to contain pivots.      Reading a Reduced Row Echelon Form   Consider What is the solution vector?      Incorrect. The entries on the right-hand side are read off directly.     Correct. In reduced row echelon form, the solution can be read off directly.     Incorrect. The order of the coordinates matters.    The system has no solution.  Incorrect. There is no contradictory row.       "
},
{
  "id": "def-vector",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-vector",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Vector.",
  "body": " Vector   A vector of size is an ordered tuple of real numbers. The set of all vectors of size is denoted by . A vector is commonly written as or in column form as    "
},
{
  "id": "ex-vector",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-vector",
  "type": "Example",
  "number": "1.1.2",
  "title": "A Vector in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " A Vector in  An example of a vector in is   "
},
{
  "id": "def-vector-operations",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-vector-operations",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Vector Operations.",
  "body": " Vector Operations   Let and let . The sum of two vectors of the same size and the scalar multiple of a vector are defined component-wise.    Addition  The sum of and is     Scalar Multiplication  The scalar multiple of by is      "
},
{
  "id": "ex-vector-operations",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-vector-operations",
  "type": "Example",
  "number": "1.1.4",
  "title": "Calculating Sums and Scalar Multiples.",
  "body": " Calculating Sums and Scalar Multiples  Let and be vectors in .  Their sum is   If we scale by , we obtain   "
},
{
  "id": "ex-engineering-resultant-force",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-engineering-resultant-force",
  "type": "Example",
  "number": "1.1.5",
  "title": "Resultant Force on a Mechanical Component.",
  "body": " Resultant Force on a Mechanical Component  Suppose two forces act on a component in the plane:   The total force is obtained by vector addition:   Thus, the component experiences a resultant force with horizontal component and vertical component .  "
},
{
  "id": "ex-engineering-force-scaling",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-engineering-force-scaling",
  "type": "Example",
  "number": "1.1.6",
  "title": "Scaling a Force Vector.",
  "body": " Scaling a Force Vector  Suppose a force acting on a component is represented by   If the same force is applied with twice the intensity, the new force vector is   This illustrates scalar multiplication: all components are multiplied by the same scalar, so the direction remains the same while the magnitude changes.  "
},
{
  "id": "fig-geogebra-vector-addition",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#fig-geogebra-vector-addition",
  "type": "Figure",
  "number": "1.1.7",
  "title": "Interactive: Vector Addition",
  "body": " Interactive: Vector Addition   "
},
{
  "id": "fig-geogebra-scalar-multiplication",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#fig-geogebra-scalar-multiplication",
  "type": "Figure",
  "number": "1.1.8",
  "title": "Interactive: Scalar Multiplication",
  "body": " Interactive: Scalar Multiplication   "
},
{
  "id": "def-zero-vector",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-zero-vector",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Zero Vector.",
  "body": " Zero Vector   The zero vector in is the vector whose components are all equal to zero. It is denoted by and has the form    "
},
{
  "id": "thm-vector-arithmetic",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#thm-vector-arithmetic",
  "type": "Theorem",
  "number": "1.1.10",
  "title": "Laws of Vector Arithmetic.",
  "body": " Laws of Vector Arithmetic   For all vectors and all scalars , the following rules hold.   Associativity of Addition:   Commutativity of Addition:   Neutral Element:   Inverse Element:   Left Distributivity:   Right Distributivity:   Associativity of Scalar Multiplication:   Multiplication by One:     "
},
{
  "id": "def-linear-combination",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-linear-combination",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Linear Combination.",
  "body": " Linear Combination   Let and let . A vector of the form is called a linear combination of the vectors .   "
},
{
  "id": "ex-linear-combination",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-linear-combination",
  "type": "Example",
  "number": "1.1.12",
  "title": "A Linear Combination in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " A Linear Combination in  Consider the vectors   Then   Hence, is a linear combination of and .  "
},
{
  "id": "def-linear-independence-basis",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-linear-independence-basis",
  "type": "Definition",
  "number": "1.1.13",
  "title": "Linear Independence and Basis.",
  "body": " Linear Independence and Basis   Vectors are called linearly independent if the equation has only the trivial solution .  A basis of is a tuple of linearly independent vectors in . In that case, every vector in can be written uniquely as a linear combination of the basis vectors.   "
},
{
  "id": "fig-linear_dependence",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#fig-linear_dependence",
  "type": "Figure",
  "number": "1.1.14",
  "title": "Linear dependence and linear independence",
  "body": " Linear dependence and linear independence  This graphic visualizes the concept of linear dependence and linear independence.     "
},
{
  "id": "ex-linearly-dependent-r2",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-linearly-dependent-r2",
  "type": "Example",
  "number": "1.1.15",
  "title": "A Counterexample in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " A Counterexample in  Consider the vectors   Since , one vector is a scalar multiple of the other. Therefore, the vectors are not linearly independent. Indeed: so we have found a non-trivial solution to the equation   "
},
{
  "id": "ex-basis",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-basis",
  "type": "Example",
  "number": "1.1.16",
  "title": "Standard Basis in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>.",
  "body": " Standard Basis in  The vectors are linearly independent.  Indeed, the equation becomes so necessarily and .  Hence, is a basis of . This means that every vector in can be written uniquely as a linear combination of and .  "
},
{
  "id": "ex-linear-independence-r3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-linear-independence-r3",
  "type": "Example",
  "number": "1.1.17",
  "title": "Three Linearly Independent Vectors in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " Three Linearly Independent Vectors in  Consider the vectors   To test linear independence, we consider   This gives so .  Therefore, the three vectors are linearly independent.  "
},
{
  "id": "ex-linear-dependence-r3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-linear-dependence-r3",
  "type": "Example",
  "number": "1.1.18",
  "title": "A Counterexample with Three Vectors in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span>.",
  "body": " A Counterexample with Three Vectors in  Consider the vectors   Since the vector is a linear combination of the other two.  Hence, the three vectors are not linearly independent.  "
},
{
  "id": "def-scalar-product-metrics",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-scalar-product-metrics",
  "type": "Definition",
  "number": "1.1.19",
  "title": "Scalar Product, Norm, Distance, and Angle.",
  "body": " Scalar Product, Norm, Distance, and Angle     Scalar Product  For vectors , the scalar product is defined by     Norm  The norm of is its length:     Distance  The distance between and is     Angle  For two non-zero vectors and , the angle between them is defined by     Orthogonality  Two vectors and are called orthogonal if      "
},
{
  "id": "fig-norm-pythagoras",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#fig-norm-pythagoras",
  "type": "Figure",
  "number": "1.1.20",
  "title": "Visualizing the Norm via the Pythagorean Theorem",
  "body": " Visualizing the Norm via the Pythagorean Theorem   A right-angled triangle formed by a vector and its components, with squares drawn on each side to geometrically illustrate that the square of the norm equals the sum of the squares of the components.    "
},
{
  "id": "ex-scalar-product-norm",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-scalar-product-norm",
  "type": "Example",
  "number": "1.1.21",
  "title": "Lengths and Orthogonality.",
  "body": " Lengths and Orthogonality  Consider the vectors and .  The norm of is   Their scalar product is   Since the scalar product is zero, the vectors are orthogonal.  "
},
{
  "id": "ex-engineering-state-vector",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-engineering-state-vector",
  "type": "Example",
  "number": "1.1.22",
  "title": "A State Vector for Monitoring a Technical System.",
  "body": " A State Vector for Monitoring a Technical System  In engineering applications, vectors are often used to represent system states rather than geometric arrows. For example, the operating condition of a motor might be described by the vector where the components represent, for instance, a temperature deviation, a vibration level, and a current deviation.  Another operating condition may be represented by   The distance between the two states is   This shows that vectors in are not only geometric objects; they can also encode measurements and describe the state of a technical system.  "
},
{
  "id": "exer-mc-orthogonal",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#exer-mc-orthogonal",
  "type": "Exercise",
  "number": "1.1.1.1",
  "title": "Identifying Orthogonal Vectors.",
  "body": " Identifying Orthogonal Vectors   Which of the following vectors is orthogonal to ?      Incorrect. The scalar product is , not zero.     Correct! The scalar product is .     Incorrect. The scalar product is , not zero.     Incorrect. The scalar product is , not zero.    "
},
{
  "id": "exer-tf-basis",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#exer-tf-basis",
  "type": "Exercise",
  "number": "1.1.1.2",
  "title": "Requirements for a Basis.",
  "body": " Requirements for a Basis   True or False: Any two non-zero vectors in automatically form a basis of that space.     True  Incorrect. If the two vectors are scalar multiples of one another, then they are not linearly independent and therefore do not form a basis.    False  Correct! Two vectors in form a basis only if they are linearly independent.    "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix",
  "type": "Definition",
  "number": "1.1.23",
  "title": "Matrix, Rows, and Columns.",
  "body": " Matrix, Rows, and Columns   A matrix is a rectangular array of real numbers arranged in rows and columns. A matrix with rows and columns is called an -matrix . The set of all real -matrices is denoted by .  A matrix is written in the form   The entry in the -th row and -th column is denoted by . We also write .  The -th row of is and the -th column of is    "
},
{
  "id": "ex-matrix-example",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-matrix-example",
  "type": "Example",
  "number": "1.1.24",
  "title": "An Example of a Matrix.",
  "body": " An Example of a Matrix  The matrix has rows and columns, so .  Its entry in the first row and third column is . The second row is , and the first column is .  "
},
{
  "id": "def-matrix-equality",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix-equality",
  "type": "Definition",
  "number": "1.1.25",
  "title": "Equality of Matrices.",
  "body": " Equality of Matrices   Two matrices and are equal if they have the same size and if all corresponding entries are equal.  Thus, for and , we have exactly if for all and .   "
},
{
  "id": "def-matrix-addition",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix-addition",
  "type": "Definition",
  "number": "1.1.26",
  "title": "Addition and Scalar Multiplication.",
  "body": " Addition and Scalar Multiplication   Let and be matrices of the same size in , and let .  The sum of and is defined component-wise by   The scalar multiple of by is defined by    "
},
{
  "id": "ex-matrix-addition-scalar",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-matrix-addition-scalar",
  "type": "Example",
  "number": "1.1.27",
  "title": "Addition and Scalar Multiplication.",
  "body": " Addition and Scalar Multiplication  Let   Then   Moreover,   "
},
{
  "id": "def-transposed-matrix",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-transposed-matrix",
  "type": "Definition",
  "number": "1.1.28",
  "title": "Transpose.",
  "body": " Transpose   Let . The transpose of is the matrix obtained by interchanging rows and columns.  In other words, the entry in row and column of is . Thus,    "
},
{
  "id": "ex-transpose",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-transpose",
  "type": "Example",
  "number": "1.1.29",
  "title": "Computing a Transpose.",
  "body": " Computing a Transpose  For the transpose is   "
},
{
  "id": "def-matrix-multiplication",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix-multiplication",
  "type": "Definition",
  "number": "1.1.30",
  "title": "Matrix Multiplication.",
  "body": " Matrix Multiplication   Let and . Then the product is defined, because the number of columns of equals the number of rows of .  The product is an -matrix whose entries are given by   Equivalently, the entry is obtained as the scalar product of the -th row of and the -th column of .   "
},
{
  "id": "ex-matrix-multiplication",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-matrix-multiplication",
  "type": "Example",
  "number": "1.1.31",
  "title": "Computing a Matrix Product.",
  "body": " Computing a Matrix Product  Let   Then   "
},
{
  "id": "def-matrix-vector-product",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-matrix-vector-product",
  "type": "Definition",
  "number": "1.1.32",
  "title": "Matrix-Vector Product.",
  "body": " Matrix-Vector Product   Let and let . Interpreting as an -matrix, the product is defined and belongs to .   "
},
{
  "id": "ex-matrix-vector-product",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-matrix-vector-product",
  "type": "Example",
  "number": "1.1.33",
  "title": "A Matrix-Vector Product.",
  "body": " A Matrix-Vector Product  Let   Then   "
},
{
  "id": "ex-population-movements",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-population-movements",
  "type": "Example",
  "number": "1.1.34",
  "title": "Modelling Population Movements.",
  "body": " Modelling Population Movements  Consider a population distributed between suburban areas ( ) and urban areas ( ). Suppose that in one year, of the suburban population remains in the suburban area and moves to the urban area. Likewise, of the urban population remains in the urban area and moves to the suburban area.  If denotes the population vector at the beginning of the year, then the population vector at the end of the year is   This is an example of a matrix-vector product describing the state update of a system.  "
},
{
  "id": "ex-sensor-calibration",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-sensor-calibration",
  "type": "Example",
  "number": "1.1.35",
  "title": "Sensor Calibration.",
  "body": " Sensor Calibration  Suppose a sensor system records two raw values collected in the vector   A calibration matrix transforms the raw measurements into corrected values:   Thus, matrices can be used to model calibration and coordinate transformations in engineering applications.  "
},
{
  "id": "def-special-matrices",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#def-special-matrices",
  "type": "Definition",
  "number": "1.1.36",
  "title": "Special Matrices.",
  "body": " Special Matrices   Several classes of matrices occur frequently.    Zero Matrix  A matrix all of whose entries are equal to zero.    Square Matrix  A matrix with the same number of rows and columns.    Identity Matrix  A square matrix whose diagonal entries are equal to and whose off-diagonal entries are equal to . It is denoted by or, if the size matters, by .    Diagonal Matrix  A square matrix whose off-diagonal entries are all zero.    Triangular Matrix  A square matrix is called upper triangular if all entries below the main diagonal are zero, and lower triangular if all entries above the main diagonal are zero.    Symmetric Matrix  A square matrix satisfying .    Skew-Symmetric Matrix  A square matrix satisfying .     "
},
{
  "id": "ex-special-matrices",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-special-matrices",
  "type": "Example",
  "number": "1.1.37",
  "title": "Examples of Special Matrices.",
  "body": " Examples of Special Matrices  The matrices are a zero matrix, an identity matrix, and a diagonal matrix, respectively.  Moreover, is upper triangular, and is symmetric.  "
},
{
  "id": "thm-matrix-arithmetic",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#thm-matrix-arithmetic",
  "type": "Theorem",
  "number": "1.1.38",
  "title": "Laws of Matrix Arithmetic.",
  "body": " Laws of Matrix Arithmetic   Let be matrices of suitable sizes, and let . Then the following rules hold.   Addition:  and , provided the matrices have the same size.  Neutral and Inverse Elements:  and .  Associativity of Multiplication:  , whenever all products are defined.  Identity Matrix:  and , where is the identity matrix of suitable size.  Distributivity:  and , whenever the products are defined.  Compatibility with Scalars:  .    "
},
{
  "id": "rem-commutativity",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#rem-commutativity",
  "type": "Remark",
  "number": "1.1.39",
  "title": "Matrix Multiplication Is Not Commutative.",
  "body": " Matrix Multiplication Is Not Commutative  In general, matrix multiplication is not commutative. This means that even if both products and are defined, they need not be equal.  "
},
{
  "id": "ex-noncommutative-multiplication",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#ex-noncommutative-multiplication",
  "type": "Example",
  "number": "1.1.40",
  "title": "A Counterexample to Commutativity.",
  "body": " A Counterexample to Commutativity  Let   Then   Hence, .  "
},
{
  "id": "subsec-linear-systems-2-3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear system augmented coefficient matrix solution set Gauss Gauss-Jordan methods "
},
{
  "id": "subsec-linear-systems-3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-3",
  "type": "Definition",
  "number": "1.1.41",
  "title": "Linear System and Augmented Coefficient Matrix.",
  "body": " Linear System and Augmented Coefficient Matrix   A system of linear equations with equations and unknowns is a system of the form   Its augmented coefficient matrix is    "
},
{
  "id": "subsec-linear-systems-4",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-4",
  "type": "Example",
  "number": "1.1.42",
  "title": "A Linear and a Non-Linear System.",
  "body": " A Linear and a Non-Linear System  Consider the system This is a linear system. Its augmented coefficient matrix is   In contrast, the system is not linear, because the term is a product of unknowns.  "
},
{
  "id": "subsec-linear-systems-5",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-5",
  "type": "Example",
  "number": "1.1.43",
  "title": "A Solution and a Solution Set.",
  "body": " A Solution and a Solution Set  Consider the linear system   The vector is a solution , because its components satisfy both equations:   In this example, there is only one solution. Therefore the solution set is the set   More generally, the solution set of a linear system may contain no vector, exactly one vector, or infinitely many vectors.  "
},
{
  "id": "subsec-linear-systems-6",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-6",
  "type": "Definition",
  "number": "1.1.44",
  "title": "Solution Set of a Linear System.",
  "body": " Solution Set of a Linear System   The solution set of a system of linear equations is the set of all vectors whose components satisfy all equations of the system simultaneously.  If no such vector exists, the solution set is empty.   "
},
{
  "id": "subsec-linear-systems-7",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-7",
  "type": "Definition",
  "number": "1.1.45",
  "title": "Elementary Row Operations and Row Equivalence.",
  "body": " Elementary Row Operations and Row Equivalence   The following operations on the augmented coefficient matrix are called elementary row operations .   Interchanging two rows.  Multiplying a row by a non-zero scalar.  Adding a multiple of one row to another row.   Two matrices are called row equivalent if one can be transformed into the other by a finite sequence of elementary row operations.   "
},
{
  "id": "subsec-linear-systems-8",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-8",
  "type": "Example",
  "number": "1.1.46",
  "title": "Examples of the Elementary Row Operations.",
  "body": " Examples of the Elementary Row Operations  Consider the system Its augmented coefficient matrix is   Interchanging the two rows gives This simply changes the order of the equations.  Multiplying the first row by gives This replaces the first equation by an equivalent one.  Adding times the first row to the second row gives This replaces the second equation by the difference of the old second equation and twice the first equation.  "
},
{
  "id": "subsec-linear-systems-9",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-9",
  "type": "Example",
  "number": "1.1.47",
  "title": "Why Row Operations Preserve the Solution Set.",
  "body": " Why Row Operations Preserve the Solution Set  For the original system we compute from the first equation . Substituting into the second equation yields and hence . So the solution set is   After interchanging the rows, the system becomes This is exactly the same pair of equations, only written in a different order. Therefore the solution set does not change.  After multiplying the first row by , we obtain The first equation is equivalent to the original first equation, because dividing by recovers it. Hence the set of solutions is again the same.  After replacing the second row by , we obtain From the second equation we get , and then the first equation gives . Thus the solution set is still   "
},
{
  "id": "subsec-linear-systems-10",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-10",
  "type": "Theorem",
  "number": "1.1.48",
  "title": "Row Equivalent Systems Have the Same Solution Set.",
  "body": " Row Equivalent Systems Have the Same Solution Set   Elementary row operations do not change the solution set of a linear system. In particular, if the augmented coefficient matrices of two linear systems are row equivalent, then the two systems have the same solution set.   "
},
{
  "id": "subsec-linear-systems-12",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-12",
  "type": "Definition",
  "number": "1.1.49",
  "title": "Row Echelon Form and Reduced Row Echelon Form.",
  "body": " Row Echelon Form and Reduced Row Echelon Form   A matrix is in row echelon form if it satisfies the following conditions.   All rows consisting entirely of zeros are at the bottom of the matrix.  In each lower non-zero row, the first non-zero entry lies strictly to the right of the first non-zero entry of the row above it. This first non-zero entry of a row is called a pivot element .   A matrix is in reduced row echelon form if, in addition, every pivot element is equal to and is the only non-zero entry in its column.  The notions pivot element and pivot position are used only for matrices that are in row echelon form. The pivot position is the position in the matrix at which a pivot element occurs, that is, the row-column position of the first non-zero entry of a non-zero row.   "
},
{
  "id": "subsec-linear-systems-13",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-13",
  "type": "Example",
  "number": "1.1.50",
  "title": "A Matrix in Row Echelon Form.",
  "body": " A Matrix in Row Echelon Form  The matrix is in row echelon form. The first non-zero entries of the non-zero rows move strictly to the right as we go downward.  "
},
{
  "id": "subsec-linear-systems-14",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-14",
  "type": "Example",
  "number": "1.1.51",
  "title": "A Matrix in Reduced Row Echelon Form.",
  "body": " A Matrix in Reduced Row Echelon Form  The matrix is in reduced row echelon form. Each pivot is equal to , and in each pivot column all other entries are zero.  "
},
{
  "id": "subsec-linear-systems-15",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-15",
  "type": "Example",
  "number": "1.1.52",
  "title": "A Matrix That Is Not in Row Echelon Form.",
  "body": " A Matrix That Is Not in Row Echelon Form  The matrix is not in row echelon form, because in the third row the first non-zero entry lies to the left of the first non-zero entry in the second row.  "
},
{
  "id": "subsec-linear-systems-16",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-16",
  "type": "Example",
  "number": "1.1.53",
  "title": "Solving a System in Row Echelon Form.",
  "body": " Solving a System in Row Echelon Form  Consider the augmented coefficient matrix   The corresponding system is   The matrix is in row echelon form. We will now see that in this case the system can be solved easily. From the last equation we obtain Substituting this into the second equation gives Finally, the first equation yields   Hence the solution set is   "
},
{
  "id": "subsec-linear-systems-18",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-18",
  "type": "Definition",
  "number": "1.1.54",
  "title": "Gauss Algorithm.",
  "body": " Gauss Algorithm   The Gauss algorithm transforms an augmented coefficient matrix into row echelon form by repeating the following steps.   Identify the leftmost column that contains a non-zero entry.  Choose a non-zero entry in this column and move it to the top of the remaining submatrix by interchanging rows if necessary.  Use row operations to create zeros below this entry.  Repeat the procedure with the submatrix obtained by deleting the pivot row and the pivot column.    "
},
{
  "id": "subsec-linear-systems-19",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-19",
  "type": "Example",
  "number": "1.1.55",
  "title": "Applying the Gauss Algorithm.",
  "body": " Applying the Gauss Algorithm  Consider the augmented coefficient matrix   We choose the entry in the first row and first column as the first pivot and eliminate the entries below it: This gives   In the remaining submatrix, the leftmost non-zero column is the third column. We choose the entry in the second row as the next pivot and eliminate the entry below it: We obtain   This matrix is in row echelon form. Its pivot columns are the first, third, and fourth columns. We will later use exactly this information to analyze the solution set of the corresponding linear system.  "
},
{
  "id": "subsec-linear-systems-22",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-22",
  "type": "Definition",
  "number": "1.1.56",
  "title": "Gauss-Jordan Method.",
  "body": " Gauss-Jordan Method   The Gauss-Jordan method continues the row reduction after the Gauss algorithm until the augmented coefficient matrix is in reduced row echelon form.  Starting from a row echelon form, one begins with the pivot furthest to the bottom right. First, the corresponding row is scaled so that this pivot becomes equal to . Then all entries above this pivot are eliminated, so that the whole pivot column is cleaned above the pivot. One then moves to the next pivot, again looking from the bottom right toward the upper left, and repeats the same procedure.   "
},
{
  "id": "subsec-linear-systems-23",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-23",
  "type": "Example",
  "number": "1.1.57",
  "title": "Continuing the Example with Gauss--Jordan.",
  "body": " Continuing the Example with Gauss--Jordan  We continue with the row echelon form   The pivot furthest to the bottom right is the entry in the third row and fourth column. We first scale this row: Then the matrix becomes   We now eliminate the entry above this pivot: Hence   We now move to the next pivot, namely the entry in the second row and third column. First, we scale: This yields Now we clean the third column above this pivot: Then   Finally, we consider the remaining pivot in the first row and first column. It is already equal to , and there are no rows above it. Thus we have reached reduced row echelon form:   "
},
{
  "id": "subsec-linear-systems-25",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-25",
  "type": "Example",
  "number": "1.1.58",
  "title": "A Pivot in the Augmented Column Means No Solution.",
  "body": " A Pivot in the Augmented Column Means No Solution  Consider the row echelon form   The second row corresponds to the equation which is impossible. Here the pivot lies in the augmented column, that is, in the rightmost column. Therefore the system is inconsistent and has no solution.  "
},
{
  "id": "subsec-linear-systems-26",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-26",
  "type": "Example",
  "number": "1.1.59",
  "title": "If Every Variable Column Has a Pivot, the Solution Is Unique.",
  "body": " If Every Variable Column Has a Pivot, the Solution Is Unique  Consider the row echelon form   The rightmost column is not a pivot column, so the system is consistent. Moreover, every variable column contains a pivot. Thus each variable is determined by the equations, and no choice remains open.  From the last equation we obtain The second equation then gives and the first equation yields   Hence the solution set consists of exactly one vector:   "
},
{
  "id": "subsec-linear-systems-27",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-27",
  "type": "Definition",
  "number": "1.1.60",
  "title": "Basic Variables and Free Variables.",
  "body": " Basic Variables and Free Variables   Assume that a linear system is solvable and that its augmented coefficient matrix is in row echelon form.  Variables whose columns are pivot columns are called basic variables . Their values are determined by the equations once the remaining variables have been chosen.  Variables whose columns are not pivot columns are called free variables . The system imposes no pivot equation that determines them directly. Therefore they are not restricted by the row echelon structure and may be chosen freely. For this reason, we can introduce parameters for them.   "
},
{
  "id": "subsec-linear-systems-28",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-28",
  "type": "Example",
  "number": "1.1.61",
  "title": "If Some Variable Columns Have No Pivot, Free Variables Appear.",
  "body": " If Some Variable Columns Have No Pivot, Free Variables Appear  Consider the row echelon form   The first and third columns are pivot columns, so and are basic variables. The second column is not a pivot column, so is a free variable.  From the second equation we obtain The first equation becomes hence   Since is free, the system does not prescribe a fixed value for it. We therefore introduce a parameter and write Then   Therefore, the solution set is   Thus one free variable leads to infinitely many solutions.  "
},
{
  "id": "subsec-linear-systems-29",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-29",
  "type": "Theorem",
  "number": "1.1.62",
  "title": "Number of Solutions from the Row Echelon Form.",
  "body": " Number of Solutions from the Row Echelon Form   Consider a linear system and let its augmented coefficient matrix be transformed into row echelon form.   If the rightmost column is a pivot column, then the system has no solution.  If the rightmost column is not a pivot column and every variable column is a pivot column, then the system has exactly one solution.  If the rightmost column is not a pivot column and at least one variable column is not a pivot column, then the system has infinitely many solutions.    "
},
{
  "id": "subsec-linear-systems-32",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-32",
  "type": "Example",
  "number": "1.1.63",
  "title": "A Zero Row Does Not Automatically Mean Free Variables.",
  "body": " A Zero Row Does Not Automatically Mean Free Variables  Consider the matrix   Although the last row is zero, each variable column contains a pivot. Hence the system has a unique solution.  "
},
{
  "id": "subsec-linear-systems-34",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-34",
  "type": "Example",
  "number": "1.1.64",
  "title": "Determining the Solution Set from Row Echelon Form by Back Substitution.",
  "body": " Determining the Solution Set from Row Echelon Form by Back Substitution  Consider the row echelon form   The pivot columns are the first, second, and fourth columns. Hence , , and are basic variables, while is a free variable.  We begin with the last non-zero row. From we obtain   The second row gives Since is free, we write Substituting yields   The first row gives Substituting and , we obtain   Therefore, is the solution set.  This procedure is called back substitution : starting with the last pivot equation, we determine the basic variables step by step from bottom to top.  "
},
{
  "id": "subsec-linear-systems-35",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-35",
  "type": "Example",
  "number": "1.1.65",
  "title": "Determining the Solution Set from Reduced Row Echelon Form by Direct Reading.",
  "body": " Determining the Solution Set from Reduced Row Echelon Form by Direct Reading  Consider the reduced row echelon form   The pivot columns are the first, second, and fourth columns. Hence , , and are basic variables, while is free.  Because the matrix is already in reduced row echelon form, each basic variable is isolated in its own row:   We may therefore read off the solution almost immediately. Let Then   Hence the solution set is   Compared with general row echelon form, reduced row echelon form has the advantage that the basic variables can be read off directly, without an additional back-substitution step.  "
},
{
  "id": "subsec-linear-systems-37",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-37",
  "type": "Definition",
  "number": "1.1.66",
  "title": "Summary: Solving a Linear System.",
  "body": " Summary: Solving a Linear System   To solve a linear system, we proceed as follows.   Write down the augmented coefficient matrix.  Use the Gauss algorithm to transform it into row echelon form.  Check whether the system is solvable.  If the system is solvable, determine the basic and free variables.  Find the solution set either by back substitution or by continuing with the Gauss--Jordan method until reduced row echelon form is reached.    "
},
{
  "id": "subsec-linear-systems-38",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-38",
  "type": "Example",
  "number": "1.1.67",
  "title": "Solving a Linear System from Start to Finish.",
  "body": " Solving a Linear System from Start to Finish  Consider the system   Its augmented coefficient matrix is   We eliminate the entries below the first pivot: This gives   Next, we eliminate the entry below the second pivot: Hence   The matrix is now in row echelon form, and every variable column contains a pivot. Therefore the system has a unique solution. From the last equation we obtain The second equation gives Finally, the first equation yields   Thus the solution set is   "
},
{
  "id": "subsec-linear-systems-41",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-41",
  "type": "Definition",
  "number": "1.1.68",
  "title": "Matrix-Vector Form and Vector Form of a Linear System.",
  "body": " Matrix-Vector Form and Vector Form of a Linear System   Let be the augmented coefficient matrix of a linear system.  Writing the system can be written in matrix-vector form as   If denote the columns of , then the same system can also be written in vector form as    "
},
{
  "id": "subsec-linear-systems-42",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-42",
  "type": "Example",
  "number": "1.1.69",
  "title": "A Linear System in Matrix-Vector Form.",
  "body": " A Linear System in Matrix-Vector Form  Consider the system   Its matrix-vector form is   If we denote the columns of the coefficient matrix by then the same system can be written in vector form as   "
},
{
  "id": "subsec-linear-systems-44",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-44",
  "type": "Example",
  "number": "1.1.70",
  "title": "Testing Linear Independence by a Homogeneous System.",
  "body": " Testing Linear Independence by a Homogeneous System  Consider the vectors   To test whether these vectors are linearly independent, we consider the vector equation This leads to the homogeneous linear system   Applying row operations, we obtain a row echelon form with a free variable. Hence the homogeneous system has infinitely many solutions besides the trivial one.  Therefore, the vectors , , and are linearly dependent.  "
},
{
  "id": "subsec-linear-systems-47",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-47",
  "type": "Definition",
  "number": "1.1.71",
  "title": "Rank of a Matrix.",
  "body": " Rank of a Matrix   Let be a matrix. The number of pivot elements in a row echelon form of is called the rank of .   "
},
{
  "id": "subsec-linear-systems-48",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-48",
  "type": "Example",
  "number": "1.1.72",
  "title": "Determining the Rank.",
  "body": " Determining the Rank  Consider the matrices    The matrix already has two pivot elements, so   For , row reduction leads to a row echelon form with two pivot elements, hence   Since the two rows are linearly independent, and therefore   The second row of is equal to times the first row, so there is only one pivot. Thus   "
},
{
  "id": "subsec-linear-systems-49-2",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-2",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "Recognizing a Row Operation.",
  "body": " Recognizing a Row Operation   Which of the following is an elementary row operation?     Replacing a row by the square of that row.  Incorrect. Squaring a row is not an elementary row operation.    Adding a multiple of one row to another row.  Correct. This is one of the three elementary row operations.    Deleting a row that contains a zero.  Incorrect. Deleting a row is not an elementary row operation.    Replacing every entry in a column by its negative.  Incorrect. Row operations act on rows, not on entire columns.    "
},
{
  "id": "subsec-linear-systems-49-3",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-3",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "Is This Row Echelon Form?",
  "body": " Is This Row Echelon Form?   Consider the matrix Is this matrix in row echelon form?     Yes.  Incorrect. In the third row, the first non-zero entry lies to the left of the first non-zero entry in the second row.    No.  Correct. The pivot positions do not move strictly to the right as we go downward.    "
},
{
  "id": "subsec-linear-systems-49-4",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-4",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "Pivot Columns and Free Variables.",
  "body": " Pivot Columns and Free Variables   Consider the matrix Which variables are free?     and  Incorrect. The first and second columns are pivot columns.    and  Correct. The third and fourth columns are not pivot columns, so the corresponding variables are free.    Only  Incorrect. The third column is also not a pivot column.    There are no free variables.  Incorrect. Not every variable column contains a pivot.    "
},
{
  "id": "subsec-linear-systems-49-5",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-5",
  "type": "Exercise",
  "number": "1.1.3.4",
  "title": "Unique Solution or Infinitely Many?",
  "body": " Unique Solution or Infinitely Many?   True or False: If an augmented coefficient matrix in row echelon form has a zero row at the bottom, then the corresponding system always has infinitely many solutions.     True  Incorrect. A zero row alone does not imply free variables. It may still happen that every variable column contains a pivot.    False  Correct. What matters is whether some variable columns fail to contain pivots.    "
},
{
  "id": "subsec-linear-systems-49-6",
  "level": "2",
  "url": "section-vectors-matrices-linear-systems.html#subsec-linear-systems-49-6",
  "type": "Exercise",
  "number": "1.1.3.5",
  "title": "Reading a Reduced Row Echelon Form.",
  "body": " Reading a Reduced Row Echelon Form   Consider What is the solution vector?      Incorrect. The entries on the right-hand side are read off directly.     Correct. In reduced row echelon form, the solution can be read off directly.     Incorrect. The order of the coordinates matters.    The system has no solution.  Incorrect. There is no contradictory row.    "
},
{
  "id": "section-determinants-inverse-matrices",
  "level": "1",
  "url": "section-determinants-inverse-matrices.html",
  "type": "Section",
  "number": "1.2",
  "title": "Determinants and Inverse Matrices",
  "body": " Determinants and Inverse Matrices   In this section, we will see that some matrices can be inverted leading to the matrix algebra. Also, we will learn about the determinant which helps us understand which matrices are invertible.    Inverse Matrices   In elementary algebra, an equation such as is solved by multiplying both sides by . In linear algebra, we seek an analogous idea for matrix equations of the form . This leads to the concept of an inverse matrix.  Not every matrix can be inverted. In this section, we introduce invertible matrices, compute inverses in simple cases, explain how inverses can be used to solve linear systems, and show how the Gauss--Jordan method can be extended to determine the inverse of a matrix.    Invertible Matrix and Inverse Matrix   Let be a square matrix of size . We say that is invertible or regular if there exists a matrix of the same size such that where denotes the identity matrix   The matrix is then called the inverse matrix of and is denoted by .     Checking an Inverse by Multiplication  Consider We claim that   To verify this, we compute   One also checks that . Therefore the given matrix is indeed the inverse of .   Remember that the identity matrix plays the same role in matrix multiplication that the number plays in ordinary multiplication. For every matrix we have and for every vector we have Thus, multiplying by leaves both matrices and vectors unchanged.  If is invertible and we want to solve then multiplying from the left by gives and therefore Thus, the inverse matrix plays the same role for matrix equations as division by a non-zero number does for scalar equations.   Solving a Linear System with an Inverse Matrix  We illustrate the idea with a simple linear system with The inverse of is   We postpone the explanation how to compute inverse matrices and simply check that the given matrix is indeed the inverse of . We compute Similarly,   Therefore, we may solve the system by multiplying from the left by : Hence the solution of the linear system is     Uniqueness of the Inverse   If a square matrix is invertible, then its inverse is unique.  Moreover, to verify that a matrix is the inverse of , it is enough to check one of the equations For square matrices, each of these identities already implies that the other one holds as well.    We first show uniqueness. Assume that and both satisfy Then Hence the inverse matrix is uniquely determined.  Now suppose that . Then is a right inverse of . For square matrices, this already implies that is invertible, and therefore the inverse is unique. Since is an inverse candidate and the inverse is unique, it follows that Consequently, The argument for the case is analogous.    At this point, it is natural to ask whether every square matrix is invertible. The answer is no.   A Matrix That Is Not Invertible  Consider Then   Suppose, for contradiction, that were invertible. Multiplying the equation from the left by would yield But this is false, since . Hence is not invertible.   For matrices there is a particularly simple formula for the inverse.   Inverse of a Matrix   Let Then is invertible if and only if In this case,     Consider the matrix Then   If , dividing by this number gives Hence   If , then . In particular, cannot have an inverse, because otherwise multiplying by from the left would imply , which is impossible unless all entries vanish simultaneously.     Solving a Linear System with the Inverse Matrix (continuation)  In we solved the linear system with using the inverse matrix . With the formula above we can compute which conincides with the inverse given above.    An Engineering Interpretation  In many engineering applications, a square matrix describes how input quantities produce measured outputs. For instance, in a calibration problem one may have where is the unknown input vector and is the measured output vector.  A concrete example arises in electrical engineering. Suppose that two unknown source signals contribute to the voltages measured by two sensors. Each sensor records a weighted combination of the two source signals, because its position and construction determine how strongly it reacts to each source. If contains the unknown source intensities and the measured sensor voltages, then the relation between sources and measurements can be written in the form The entries of the matrix describe how strongly each source influences each sensor.  If is invertible, then the source intensities can be reconstructed uniquely from the measurements by If is not invertible, then this reconstruction is impossible in general: different source intensities may lead to the same sensor data, or some measurement vectors may not be attainable at all.   For larger matrices, explicit formulas for computing the inverse become impractical. Instead, we compute inverses systematically by an extension of the Gauss--Jordan method.   Computing the Inverse by the Gauss-Jordan Method   Let be an matrix. Form the augmented matrix Apply elementary row operations until reduced row echelon form is reached.  There are two possible outcomes.    If the result has the form then is invertible and     If the left block cannot be transformed into , then is not invertible.       Computing an Inverse with the Gauß-Jordan Method  Consider the matrix We determine its inverse by augmenting with the identity matrix and applying row operations:   We first eliminate the entry above the pivot in the third column by replacing the second row with . This gives   Next, we eliminate the entry above the pivot in the second column by replacing the first row with . We obtain   The left block is now the identity matrix. Hence is invertible, and the right block is the inverse:    Invertible matrices are important because they are precisely the matrices for which a system of linear equations can be solved uniquely for every right-hand side. They describe situations in which no information is lost and every output is produced by exactly one input. The following theorem collects several equivalent ways of recognizing this fundamental property and, in particular, makes the connection between invertibility and the solvability of linear systems completely explicit.   Equivalent Characterizations of Invertibility   Let be an matrix, and let be the linear map defined by Then the following statements are equivalent.   is invertible.  There exists a matrix such that .  There exists a matrix such that .  is invertible.  The columns of are linearly independent.  .  The homogeneous system has only the trivial solution .  For every , the system has a solution.  For every , the system has a unique solution.     Orthogonal matrices form a particularly important class of invertible matrices. They occur naturally whenever coordinates are rotated or reflected, and they are especially convenient because their inverse can be obtained simply by taking the transpose.   Orthogonal Matrix   A square matrix is called orthogonal if     Orthogonal matrices are a particularly important class of invertible matrices. Indeed, if , then is an inverse of , so    A Rotation Matrix  Consider the matrix Its transpose is   Multiplying the two matrices gives   Hence is orthogonal. This matrix describes a rotation in the plane. The name rotation matrix comes from the fact that multiplying a vector in the plane by this matrix turns its direction by the angle while preserving its length. Such matrices play an important role in mechanics, robotics, and computer graphics.    Check Your Understanding   Identifying an Invertible Matrix   Which of the following matrices is invertible?           Incorrect. The second row is twice the first row, so the rows are linearly dependent and the matrix is not invertible.           Correct! Its determinant is , which is not zero, so the matrix is invertible.           Incorrect. This matrix has a zero row, so its determinant is zero and it is not invertible.           Incorrect. The second row is times the first row, so the matrix is not invertible.       Checking an Inverse   True or False: For square matrices, if , then is the inverse of .     True  Correct! For square matrices, one of the equations or already implies the other, so .    False  Incorrect. For square matrices, checking just one of the equations is enough.      Solving a System with an Inverse Matrix   Suppose and What is the solution of ?           Incorrect. The solution is obtained by computing , not by copying the right-hand side.           Correct! We have            Incorrect. Check the matrix-vector multiplication carefully.           Incorrect. This is not the result of multiplying by .       Orthogonal Matrices   True or False: If a square matrix satisfies , then .     True  Correct! This is exactly the defining property of an orthogonal matrix.    False  Incorrect. If , then is the inverse of .      The Gauß-Jordan Method   When using the Gauß-Jordan method to compute the inverse of a square matrix , which augmented matrix do we start with?      Incorrect. The second block must be the identity matrix.     Correct! We row reduce until the left block becomes ; then the right block is .     Incorrect. The matrix must be placed in the left block.     Incorrect. The Gauß-Jordan method starts with , not with its transpose.        Determinants   We have seen that some square matrices are invertible, others are not. In this section we introduce the determinant of a matrix. This number helps us decide whether a matrix is invertible, and it also has a geometric meaning. In dimension two, the determinant measures an oriented area, and in dimension three, it measures an oriented volume.  We begin with determinants of - and -matrices, where explicit formulas are available. After that, we state the basic properties that characterize determinants for arbitrary square matrices and collect some important calculation rules.    Area of a Parallelogram  Consider the matrix Its columns are the vectors These two vectors span a parallelogram in the plane.  In the picture below, we translate this parallelogram into a surrounding rectangle. Translation does not change area. The rectangle has width and height . Hence its area is   The four corner regions are right triangles. Their total area is Therefore the area of the parallelogram is   Now expand the product: So    The two halves of cancel the full term , and the two halves of cancel the full term . Thus only remains. Hence   For this matrix, the determinant is Thus the determinant gives the area of the parallelogram spanned by the two column vectors.   A translated copy of the parallelogram spanned by the columns of , embedded in a rectangle.      Determinant of a -Matrix   Let be a -matrix. We define the determinant of by   Thus, the determinant of a -matrix is the difference of the product of the entries on the main diagonal and the product of the entries on the anti-diagonal.  Geometrically, computes the oriented area of the parallelogram spanned by the columns of .     Determinant, Area, and Sign  Consider We compute   The absolute values of the determinants are equal, so the corresponding parallelograms have the same area. The sign distinguishes the orientation. A positive determinant and a negative determinant correspond to opposite orientations of the column vectors.    Determinant of a -Matrix   Let be a -matrix. Then its determinant is defined by   This formula can be remembered using Sarrus' rule .   A diagram illustrating Sarrus' rule by repeating the first two columns of a 3 by 3 matrix and tracing the three positive (blue) and three negative (red) diagonals.         Using Sarrus' Rule  Let Then   Hence    Determinants of -matrices also have a geometric interpretation. If the columns of a matrix are the vectors , then is the oriented volume of the parallelepiped spanned by .   Visualization of a parallelepiped generated by three vectors       Volume Change Under a Linear Map  In engineering applications, matrices often represent linear transformations of space. If a matrix maps the unit cube to a parallelepiped, then the factor by which volumes are scaled is .  For example, if , then every small volume element is doubled. If , then the volume is still doubled, but the orientation is reversed.   In dimensions and , the determinant can still be written down by explicit formulas. Beginning with dimension , however, these formulas become so complicated that they are of little conceptual value. Rather than studying such formulas in general, we take a different point of view: we use the following theorem as the definition of the determinant in arbitrary dimension. It asserts that for every , there exists a unique map on -matrices satisfying the fundamental properties that a determinant should have.   Axiomatic Definition of the Determinant   For every , there exists a unique map with the following properties.    The determinant is multilinear , that is, it is compatible with sums and scalar multiplication in each column.    The determinant is alternating , that is, interchanging two columns changes the sign.    The determinant is normalized by       Beyond theoretically guaranteeing the existence of determinants for matrices of dimension 4 or higher, this theorem also gives us more information on the behaviour of the determinant in small dimensions:   Scaling a Matrix  Let be a -matrix with . We determine .  If the columns of are , then the columns of are . By multilinearity, Therefore    While determinants are cumbersome to compute in general, certain calculation rules make the computation easier in some situations:   Calculation Rules for Determinants   Let and be -matrices.    The determinant is multiplicative:     The determinant does not change under transposition:     If is triangular, then its determinant is the product of the diagonal entries:       These rules are very useful in practice. In particular, the formula for triangular matrices allows us to compute many determinants immediately.   Determinants of Triangular Matrices  For we have   For we obtain    One has to be careful with sums of matrices. In general, The determinant behaves well with respect to matrix multiplication, but not with respect to matrix addition.   Criteria for a Matrix to be Invertible   Let be an -matrix. Then the following statements are equivalent.   is invertible.  There exists an -matrix with .  There exists an -matrix with .  is invertible.  The columns of are linearly independent.  .  The homogeneous linear system has only the trivial solution.  For every , the linear system has a solution.  For every , the linear system has a unique solution.  .     In particular, a square matrix is invertible exactly if its determinant is non-zero. This gives a simple numerical criterion for invertibility.   Solvability for Arbitrary Right-Hand Sides  Consider We want to determine for which values of the system has a solution for every .  By the theorem above, this is equivalent to being invertible, and hence equivalent to   We compute   Therefore Hence the system has a solution for every right-hand side exactly for     Cramer's Rule for -Matrices   Let be a -matrix with , and let Then the unique solution of is given by with     Cramer's rule gives an explicit solution formula for small systems. For larger systems, Gaussian elimination is usually more efficient.   Check Your Understanding    Let What is ?      Incorrect. The determinant is not the sum of all entries.     Correct. We have .     Incorrect. Use the rule main diagonal minus anti-diagonal.     Incorrect. Recompute the two products carefully.       Let Which statement is true?     and the orientation is positive.  Incorrect. The determinant is negative.    and the area of the parallelogram is .  Correct. The absolute value gives the area, while the sign gives the orientation.    and the area of the parallelogram is .  Incorrect. An area is non-negative; the sign refers to orientation.    and the area of the parallelogram is .  Incorrect. Compute the determinant directly.       Let be a -matrix with . What is ?      Incorrect. For a -matrix, the determinant scales with the third power.     Correct. We have .     Incorrect. The factor is , not .    It cannot be determined.  Incorrect. The determinant rules give enough information.       For which value of is the matrix not invertible?      Incorrect. Set the determinant equal to zero.     Correct. We have , so the determinant is zero exactly for .     Incorrect. Then the determinant is .    The matrix is invertible for every .  Incorrect. A square matrix is not invertible when its determinant is zero.       Let What is ?      Incorrect. The matrix is triangular, so multiply all diagonal entries including the sign.     Incorrect. One diagonal factor is missing.     Correct. Since is upper triangular, .     Incorrect. A triangular matrix has determinant zero only if one diagonal entry is zero.       "
},
{
  "id": "section-determinants-inverse-matrices-3-3",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Invertible Matrix and Inverse Matrix.",
  "body": " Invertible Matrix and Inverse Matrix   Let be a square matrix of size . We say that is invertible or regular if there exists a matrix of the same size such that where denotes the identity matrix   The matrix is then called the inverse matrix of and is denoted by .   "
},
{
  "id": "section-determinants-inverse-matrices-3-4",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "Checking an Inverse by Multiplication.",
  "body": " Checking an Inverse by Multiplication  Consider We claim that   To verify this, we compute   One also checks that . Therefore the given matrix is indeed the inverse of .  "
},
{
  "id": "example-inverse-lgs",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#example-inverse-lgs",
  "type": "Example",
  "number": "1.2.3",
  "title": "Solving a Linear System with an Inverse Matrix.",
  "body": " Solving a Linear System with an Inverse Matrix  We illustrate the idea with a simple linear system with The inverse of is   We postpone the explanation how to compute inverse matrices and simply check that the given matrix is indeed the inverse of . We compute Similarly,   Therefore, we may solve the system by multiplying from the left by : Hence the solution of the linear system is   "
},
{
  "id": "section-determinants-inverse-matrices-3-8",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-8",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "Uniqueness of the Inverse.",
  "body": " Uniqueness of the Inverse   If a square matrix is invertible, then its inverse is unique.  Moreover, to verify that a matrix is the inverse of , it is enough to check one of the equations For square matrices, each of these identities already implies that the other one holds as well.    We first show uniqueness. Assume that and both satisfy Then Hence the inverse matrix is uniquely determined.  Now suppose that . Then is a right inverse of . For square matrices, this already implies that is invertible, and therefore the inverse is unique. Since is an inverse candidate and the inverse is unique, it follows that Consequently, The argument for the case is analogous.   "
},
{
  "id": "section-determinants-inverse-matrices-3-10",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-10",
  "type": "Example",
  "number": "1.2.5",
  "title": "A Matrix That Is Not Invertible.",
  "body": " A Matrix That Is Not Invertible  Consider Then   Suppose, for contradiction, that were invertible. Multiplying the equation from the left by would yield But this is false, since . Hence is not invertible.  "
},
{
  "id": "section-determinants-inverse-matrices-3-12",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-12",
  "type": "Theorem",
  "number": "1.2.6",
  "title": "Inverse of a <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrix.",
  "body": " Inverse of a Matrix   Let Then is invertible if and only if In this case,     Consider the matrix Then   If , dividing by this number gives Hence   If , then . In particular, cannot have an inverse, because otherwise multiplying by from the left would imply , which is impossible unless all entries vanish simultaneously.   "
},
{
  "id": "section-determinants-inverse-matrices-3-13",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-13",
  "type": "Example",
  "number": "1.2.7",
  "title": "Solving a Linear System with the Inverse Matrix (continuation).",
  "body": " Solving a Linear System with the Inverse Matrix (continuation)  In we solved the linear system with using the inverse matrix . With the formula above we can compute which conincides with the inverse given above.  "
},
{
  "id": "section-determinants-inverse-matrices-3-14",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-14",
  "type": "Example",
  "number": "1.2.8",
  "title": "An Engineering Interpretation.",
  "body": " An Engineering Interpretation  In many engineering applications, a square matrix describes how input quantities produce measured outputs. For instance, in a calibration problem one may have where is the unknown input vector and is the measured output vector.  A concrete example arises in electrical engineering. Suppose that two unknown source signals contribute to the voltages measured by two sensors. Each sensor records a weighted combination of the two source signals, because its position and construction determine how strongly it reacts to each source. If contains the unknown source intensities and the measured sensor voltages, then the relation between sources and measurements can be written in the form The entries of the matrix describe how strongly each source influences each sensor.  If is invertible, then the source intensities can be reconstructed uniquely from the measurements by If is not invertible, then this reconstruction is impossible in general: different source intensities may lead to the same sensor data, or some measurement vectors may not be attainable at all.  "
},
{
  "id": "section-determinants-inverse-matrices-3-16",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-16",
  "type": "Theorem",
  "number": "1.2.9",
  "title": "Computing the Inverse by the Gauss-Jordan Method.",
  "body": " Computing the Inverse by the Gauss-Jordan Method   Let be an matrix. Form the augmented matrix Apply elementary row operations until reduced row echelon form is reached.  There are two possible outcomes.    If the result has the form then is invertible and     If the left block cannot be transformed into , then is not invertible.     "
},
{
  "id": "example-gauss-jordan-inverse-3x3",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#example-gauss-jordan-inverse-3x3",
  "type": "Example",
  "number": "1.2.10",
  "title": "Computing an Inverse with the Gauß-Jordan Method.",
  "body": " Computing an Inverse with the Gauß-Jordan Method  Consider the matrix We determine its inverse by augmenting with the identity matrix and applying row operations:   We first eliminate the entry above the pivot in the third column by replacing the second row with . This gives   Next, we eliminate the entry above the pivot in the second column by replacing the first row with . We obtain   The left block is now the identity matrix. Hence is invertible, and the right block is the inverse:   "
},
{
  "id": "section-determinants-inverse-matrices-3-19",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-19",
  "type": "Theorem",
  "number": "1.2.11",
  "title": "Equivalent Characterizations of Invertibility.",
  "body": " Equivalent Characterizations of Invertibility   Let be an matrix, and let be the linear map defined by Then the following statements are equivalent.   is invertible.  There exists a matrix such that .  There exists a matrix such that .  is invertible.  The columns of are linearly independent.  .  The homogeneous system has only the trivial solution .  For every , the system has a solution.  For every , the system has a unique solution.    "
},
{
  "id": "section-determinants-inverse-matrices-3-21",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-21",
  "type": "Definition",
  "number": "1.2.12",
  "title": "Orthogonal Matrix.",
  "body": " Orthogonal Matrix   A square matrix is called orthogonal if    "
},
{
  "id": "section-determinants-inverse-matrices-3-23",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-3-23",
  "type": "Example",
  "number": "1.2.13",
  "title": "A Rotation Matrix.",
  "body": " A Rotation Matrix  Consider the matrix Its transpose is   Multiplying the two matrices gives   Hence is orthogonal. This matrix describes a rotation in the plane. The name rotation matrix comes from the fact that multiplying a vector in the plane by this matrix turns its direction by the angle while preserving its length. Such matrices play an important role in mechanics, robotics, and computer graphics.  "
},
{
  "id": "exer-mc-invertible-matrix",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-mc-invertible-matrix",
  "type": "Exercise",
  "number": "1.2.1.1",
  "title": "Identifying an Invertible Matrix.",
  "body": " Identifying an Invertible Matrix   Which of the following matrices is invertible?           Incorrect. The second row is twice the first row, so the rows are linearly dependent and the matrix is not invertible.           Correct! Its determinant is , which is not zero, so the matrix is invertible.           Incorrect. This matrix has a zero row, so its determinant is zero and it is not invertible.           Incorrect. The second row is times the first row, so the matrix is not invertible.     "
},
{
  "id": "exer-tf-one-sided-inverse",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-tf-one-sided-inverse",
  "type": "Exercise",
  "number": "1.2.1.2",
  "title": "Checking an Inverse.",
  "body": " Checking an Inverse   True or False: For square matrices, if , then is the inverse of .     True  Correct! For square matrices, one of the equations or already implies the other, so .    False  Incorrect. For square matrices, checking just one of the equations is enough.    "
},
{
  "id": "exer-mc-solve-with-inverse",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-mc-solve-with-inverse",
  "type": "Exercise",
  "number": "1.2.1.3",
  "title": "Solving a System with an Inverse Matrix.",
  "body": " Solving a System with an Inverse Matrix   Suppose and What is the solution of ?           Incorrect. The solution is obtained by computing , not by copying the right-hand side.           Correct! We have            Incorrect. Check the matrix-vector multiplication carefully.           Incorrect. This is not the result of multiplying by .     "
},
{
  "id": "exer-tf-orthogonal-inverse",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-tf-orthogonal-inverse",
  "type": "Exercise",
  "number": "1.2.1.4",
  "title": "Orthogonal Matrices.",
  "body": " Orthogonal Matrices   True or False: If a square matrix satisfies , then .     True  Correct! This is exactly the defining property of an orthogonal matrix.    False  Incorrect. If , then is the inverse of .    "
},
{
  "id": "exer-mc-gauss-jordan-inverse",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#exer-mc-gauss-jordan-inverse",
  "type": "Exercise",
  "number": "1.2.1.5",
  "title": "The Gauß-Jordan Method.",
  "body": " The Gauß-Jordan Method   When using the Gauß-Jordan method to compute the inverse of a square matrix , which augmented matrix do we start with?      Incorrect. The second block must be the identity matrix.     Correct! We row reduce until the left block becomes ; then the right block is .     Incorrect. The matrix must be placed in the left block.     Incorrect. The Gauß-Jordan method starts with , not with its transpose.    "
},
{
  "id": "section-determinants-inverse-matrices-4-3",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-3",
  "type": "Example",
  "number": "1.2.14",
  "title": "Area of a Parallelogram.",
  "body": " Area of a Parallelogram  Consider the matrix Its columns are the vectors These two vectors span a parallelogram in the plane.  In the picture below, we translate this parallelogram into a surrounding rectangle. Translation does not change area. The rectangle has width and height . Hence its area is   The four corner regions are right triangles. Their total area is Therefore the area of the parallelogram is   Now expand the product: So    The two halves of cancel the full term , and the two halves of cancel the full term . Thus only remains. Hence   For this matrix, the determinant is Thus the determinant gives the area of the parallelogram spanned by the two column vectors.   A translated copy of the parallelogram spanned by the columns of , embedded in a rectangle.    "
},
{
  "id": "section-determinants-inverse-matrices-4-4",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-4",
  "type": "Definition",
  "number": "1.2.15",
  "title": "Determinant of a <span class=\"process-math\">\\(2\\times 2\\)<\/span>-Matrix.",
  "body": " Determinant of a -Matrix   Let be a -matrix. We define the determinant of by   Thus, the determinant of a -matrix is the difference of the product of the entries on the main diagonal and the product of the entries on the anti-diagonal.  Geometrically, computes the oriented area of the parallelogram spanned by the columns of .   "
},
{
  "id": "section-determinants-inverse-matrices-4-5",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-5",
  "type": "Example",
  "number": "1.2.16",
  "title": "Determinant, Area, and Sign.",
  "body": " Determinant, Area, and Sign  Consider We compute   The absolute values of the determinants are equal, so the corresponding parallelograms have the same area. The sign distinguishes the orientation. A positive determinant and a negative determinant correspond to opposite orientations of the column vectors.  "
},
{
  "id": "section-determinants-inverse-matrices-4-6",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-6",
  "type": "Definition",
  "number": "1.2.17",
  "title": "Determinant of a <span class=\"process-math\">\\(3\\times 3\\)<\/span>-Matrix.",
  "body": " Determinant of a -Matrix   Let be a -matrix. Then its determinant is defined by   This formula can be remembered using Sarrus' rule .   A diagram illustrating Sarrus' rule by repeating the first two columns of a 3 by 3 matrix and tracing the three positive (blue) and three negative (red) diagonals.       "
},
{
  "id": "section-determinants-inverse-matrices-4-7",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-7",
  "type": "Example",
  "number": "1.2.19",
  "title": "Using Sarrus’ Rule.",
  "body": " Using Sarrus' Rule  Let Then   Hence   "
},
{
  "id": "parallelepipped",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#parallelepipped",
  "type": "Figure",
  "number": "1.2.20",
  "title": "",
  "body": " Visualization of a parallelepiped generated by three vectors     "
},
{
  "id": "section-determinants-inverse-matrices-4-10",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-10",
  "type": "Example",
  "number": "1.2.21",
  "title": "Volume Change Under a Linear Map.",
  "body": " Volume Change Under a Linear Map  In engineering applications, matrices often represent linear transformations of space. If a matrix maps the unit cube to a parallelepiped, then the factor by which volumes are scaled is .  For example, if , then every small volume element is doubled. If , then the volume is still doubled, but the orientation is reversed.  "
},
{
  "id": "section-determinants-inverse-matrices-4-12",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-12",
  "type": "Theorem",
  "number": "1.2.22",
  "title": "Axiomatic Definition of the Determinant.",
  "body": " Axiomatic Definition of the Determinant   For every , there exists a unique map with the following properties.    The determinant is multilinear , that is, it is compatible with sums and scalar multiplication in each column.    The determinant is alternating , that is, interchanging two columns changes the sign.    The determinant is normalized by      "
},
{
  "id": "section-determinants-inverse-matrices-4-14",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-14",
  "type": "Example",
  "number": "1.2.23",
  "title": "Scaling a Matrix.",
  "body": " Scaling a Matrix  Let be a -matrix with . We determine .  If the columns of are , then the columns of are . By multilinearity, Therefore   "
},
{
  "id": "section-determinants-inverse-matrices-4-16",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-16",
  "type": "Theorem",
  "number": "1.2.24",
  "title": "Calculation Rules for Determinants.",
  "body": " Calculation Rules for Determinants   Let and be -matrices.    The determinant is multiplicative:     The determinant does not change under transposition:     If is triangular, then its determinant is the product of the diagonal entries:      "
},
{
  "id": "section-determinants-inverse-matrices-4-18",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-18",
  "type": "Example",
  "number": "1.2.25",
  "title": "Determinants of Triangular Matrices.",
  "body": " Determinants of Triangular Matrices  For we have   For we obtain   "
},
{
  "id": "section-determinants-inverse-matrices-4-20",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-20",
  "type": "Theorem",
  "number": "1.2.26",
  "title": "Criteria for a Matrix to be Invertible.",
  "body": " Criteria for a Matrix to be Invertible   Let be an -matrix. Then the following statements are equivalent.   is invertible.  There exists an -matrix with .  There exists an -matrix with .  is invertible.  The columns of are linearly independent.  .  The homogeneous linear system has only the trivial solution.  For every , the linear system has a solution.  For every , the linear system has a unique solution.  .    "
},
{
  "id": "section-determinants-inverse-matrices-4-22",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-22",
  "type": "Example",
  "number": "1.2.27",
  "title": "Solvability for Arbitrary Right-Hand Sides.",
  "body": " Solvability for Arbitrary Right-Hand Sides  Consider We want to determine for which values of the system has a solution for every .  By the theorem above, this is equivalent to being invertible, and hence equivalent to   We compute   Therefore Hence the system has a solution for every right-hand side exactly for   "
},
{
  "id": "section-determinants-inverse-matrices-4-23",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-23",
  "type": "Theorem",
  "number": "1.2.28",
  "title": "Cramer’s Rule for <span class=\"process-math\">\\(2\\times 2\\)<\/span>-Matrices.",
  "body": " Cramer's Rule for -Matrices   Let be a -matrix with , and let Then the unique solution of is given by with    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-2",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-2",
  "type": "Exercise",
  "number": "1.2.2.1",
  "title": "",
  "body": "  Let What is ?      Incorrect. The determinant is not the sum of all entries.     Correct. We have .     Incorrect. Use the rule main diagonal minus anti-diagonal.     Incorrect. Recompute the two products carefully.    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-3",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-3",
  "type": "Exercise",
  "number": "1.2.2.2",
  "title": "",
  "body": "  Let Which statement is true?     and the orientation is positive.  Incorrect. The determinant is negative.    and the area of the parallelogram is .  Correct. The absolute value gives the area, while the sign gives the orientation.    and the area of the parallelogram is .  Incorrect. An area is non-negative; the sign refers to orientation.    and the area of the parallelogram is .  Incorrect. Compute the determinant directly.    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-4",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-4",
  "type": "Exercise",
  "number": "1.2.2.3",
  "title": "",
  "body": "  Let be a -matrix with . What is ?      Incorrect. For a -matrix, the determinant scales with the third power.     Correct. We have .     Incorrect. The factor is , not .    It cannot be determined.  Incorrect. The determinant rules give enough information.    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-5",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-5",
  "type": "Exercise",
  "number": "1.2.2.4",
  "title": "",
  "body": "  For which value of is the matrix not invertible?      Incorrect. Set the determinant equal to zero.     Correct. We have , so the determinant is zero exactly for .     Incorrect. Then the determinant is .    The matrix is invertible for every .  Incorrect. A square matrix is not invertible when its determinant is zero.    "
},
{
  "id": "section-determinants-inverse-matrices-4-25-6",
  "level": "2",
  "url": "section-determinants-inverse-matrices.html#section-determinants-inverse-matrices-4-25-6",
  "type": "Exercise",
  "number": "1.2.2.5",
  "title": "",
  "body": "  Let What is ?      Incorrect. The matrix is triangular, so multiply all diagonal entries including the sign.     Incorrect. One diagonal factor is missing.     Correct. Since is upper triangular, .     Incorrect. A triangular matrix has determinant zero only if one diagonal entry is zero.    "
},
{
  "id": "section-eigenvalues-eigenvectors",
  "level": "1",
  "url": "section-eigenvalues-eigenvectors.html",
  "type": "Section",
  "number": "1.3",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors  Placeholder section for eigenvalues and eigenvectors.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
