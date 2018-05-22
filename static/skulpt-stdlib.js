Sk.builtinFiles = {
    "files": {
        "src/lib/py_compile.py": "raise NotImplementedError(\"py_compile is not yet implemented in Skulpt\")\n",
        "src/lib/symbol.py": "raise NotImplementedError(\"symbol is not yet implemented in Skulpt\")\n",
        "src/lib/traceback.py": "raise NotImplementedError(\"traceback is not yet implemented in Skulpt\")\n",
        "src/lib/runpy.py": "raise NotImplementedError(\"runpy is not yet implemented in Skulpt\")\n",
        "src/lib/_LWPCookieJar.py": "raise NotImplementedError(\"_LWPCookieJar is not yet implemented in Skulpt\")\n",
        "src/lib/Bastion.py": "raise NotImplementedError(\"Bastion is not yet implemented in Skulpt\")\n",
        "src/lib/this.py": "raise NotImplementedError(\"this is not yet implemented in Skulpt\")\n",
        "src/lib/platform.py": "raise NotImplementedError(\"platform is not yet implemented in Skulpt\")\n",
        "src/lib/logging/__init__.py": "raise NotImplementedError(\"logging is not yet implemented in Skulpt\")\n",
        "src/lib/socket.py": "raise NotImplementedError(\"socket is not yet implemented in Skulpt\")\n",
        "src/lib/fileinput.py": "raise NotImplementedError(\"fileinput is not yet implemented in Skulpt\")\n",
        "src/lib/shutil.py": "raise NotImplementedError(\"shutil is not yet implemented in Skulpt\")\n",
        "src/lib/uuid.py": "raise NotImplementedError(\"uuid is not yet implemented in Skulpt\")\n",
        "src/lib/threading.py": "raise NotImplementedError(\"threading is not yet implemented in Skulpt\")\n",
        "src/lib/functools.py": "raise NotImplementedError(\"functools is not yet implemented in Skulpt\")\n",
        "src/lib/xml/etree/__init__.py": "raise NotImplementedError(\"etree is not yet implemented in Skulpt\")\n",
        "src/lib/nturl2path.py": "raise NotImplementedError(\"nturl2path is not yet implemented in Skulpt\")\n",
        "src/lib/pdb.py": "raise NotImplementedError(\"pdb is not yet implemented in Skulpt\")\n",
        "src/lib/cookielib.py": "raise NotImplementedError(\"cookielib is not yet implemented in Skulpt\")\n",
        "src/lib/pyclbr.py": "raise NotImplementedError(\"pyclbr is not yet implemented in Skulpt\")\n",
        "src/lib/test/__init__.py": "__author__ = 'bmiller'\n\ndef testEqual(actual, expected):\n    if type(expected" +
                ") == type(1):\n        if actual == expected:\n            print('Pass')\n      " +
                "      return True\n    elif type(expected) == type(1.11):\n        if abs(actual" +
                "-expected) < 0.00001:\n            print('Pass')\n            return True\n    e" +
                "lse:\n        if actual == expected:\n            print('Pass')\n            ret" +
                "urn True\n    print('Test Failed: expected ' + str(expected) + ' but got ' + str" +
                "(actual))\n    return False\n\ndef testNotEqual(actual, expected):\n    pass\n\n",
        "src/lib/doctest.py": "raise NotImplementedError(\"doctest is not yet implemented in Skulpt\")\n",
        "src/lib/pty.py": "raise NotImplementedError(\"pty is not yet implemented in Skulpt\")\n",
        "src/lib/test/decimaltestdata/__init__.py": "raise NotImplementedError(\"decimaltestdata is not yet implemented in Skulpt\")" +
                "\n",
        "src/lib/sha.py": "raise NotImplementedError(\"sha is not yet implemented in Skulpt\")\n",
        "src/lib/uu.py": "raise NotImplementedError(\"uu is not yet implemented in Skulpt\")\n",
        "src/lib/lib-dynload/__init__.py": "raise NotImplementedError(\"lib-dynload is not yet implemented in Skulpt\")\n",
        "src/lib/asynchat.py": "raise NotImplementedError(\"asynchat is not yet implemented in Skulpt\")\n",
        "src/lib/decimal.py": "raise NotImplementedError(\"decimal is not yet implemented in Skulpt\")\n",
        "src/lib/xml/dom/__init__.py": "raise NotImplementedError(\"dom is not yet implemented in Skulpt\")\n",
        "src/lib/gettext.py": "raise NotImplementedError(\"gettext is not yet implemented in Skulpt\")\n",
        "src/lib/UserString.py": "raise NotImplementedError(\"UserString is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/basic/queue.py": "# Bradley N. Miller, David L. Ranum\n# Introduction to Data Structures and Algor" +
                "ithms in Python\n# Copyright 2005\n# \n#queue.py\r\n\r\nclass Queue:\r\n    def " +
                "__init__(self):\r\n        self.items = []\r\n\r\n    def isEmpty(self):\r\n    " +
                "    return self.items == []\r\n\r\n    def enqueue(self, item):\r\n        self." +
                "items.insert(0,item)\r\n\r\n    def dequeue(self):\r\n        return self.items." +
                "pop()\r\n\r\n    def size(self):\r\n        return len(self.items)\r\n",
        "src/lib/pkgutil.py": "raise NotImplementedError(\"pkgutil is not yet implemented in Skulpt\")\n",
        "src/lib/gzip.py": "raise NotImplementedError(\"gzip is not yet implemented in Skulpt\")\n",
        "src/lib/numbers.py": "raise NotImplementedError(\"numbers is not yet implemented in Skulpt\")\n",
        "src/lib/asyncore.py": "raise NotImplementedError(\"asyncore is not yet implemented in Skulpt\")\n",
        "src/lib/macpath.py": "raise NotImplementedError(\"macpath is not yet implemented in Skulpt\")\n",
        "src/lib/textwrap.py": "raise NotImplementedError(\"textwrap is not yet implemented in Skulpt\")\n",
        "src/lib/imputil.py": "raise NotImplementedError(\"imputil is not yet implemented in Skulpt\")\n",
        "src/lib/bdb.py": "raise NotImplementedError(\"bdb is not yet implemented in Skulpt\")\n",
        "src/lib/multiprocessing/__init__.py": "raise NotImplementedError(\"multiprocessing is not yet implemented in Skulpt\")" +
                "\n",
        "src/lib/imghdr.py": "raise NotImplementedError(\"imghdr is not yet implemented in Skulpt\")\n",
        "src/lib/colorsys.py": "raise NotImplementedError(\"colorsys is not yet implemented in Skulpt\")\n",
        "src/lib/SimpleXMLRPCServer.py": "raise NotImplementedError(\"SimpleXMLRPCServer is not yet implemented in Skulpt" +
                "\")\n",
        "src/lib/robotparser.py": "raise NotImplementedError(\"robotparser is not yet implemented in Skulpt\")\n",
        "src/lib/ast.py": "raise NotImplementedError(\"ast is not yet implemented in Skulpt\")\n",
        "src/lib/fractions.py": "raise NotImplementedError(\"fractions is not yet implemented in Skulpt\")\n",
        "src/lib/posixpath.py": "raise NotImplementedError(\"posixpath is not yet implemented in Skulpt\")\n",
        "src/lib/optparse.py": "raise NotImplementedError(\"optparse is not yet implemented in Skulpt\")\n",
        "src/lib/email/mime/__init__.py": "raise NotImplementedError(\"mime is not yet implemented in Skulpt\")\n",
        "src/lib/shlex.py": "raise NotImplementedError(\"shlex is not yet implemented in Skulpt\")\n",
        "src/lib/sre_compile.py": "raise NotImplementedError(\"sre_compile is not yet implemented in Skulpt\")\n",
        "src/lib/os2emxpath.py": "raise NotImplementedError(\"os2emxpath is not yet implemented in Skulpt\")\n",
        "src/lib/popen2.py": "raise NotImplementedError(\"popen2 is not yet implemented in Skulpt\")\n",
        "src/lib/contextlib.py": "raise NotImplementedError(\"contextlib is not yet implemented in Skulpt\")\n",
        "src/lib/hmac.py": "raise NotImplementedError(\"hmac is not yet implemented in Skulpt\")\n",
        "src/lib/poplib.py": "raise NotImplementedError(\"poplib is not yet implemented in Skulpt\")\n",
        "src/lib/unittest/gui.py": "import document\nfrom unittest import TestCase\n\nclass TestCaseGui(TestCase):\n" +
                "\tdef __init__(self):\n\t\tTestCase.__init__(self)\n\n\t\tself.divid = document." +
                "currentDiv()\n\t\tself.mydiv = document.getElementById(self.divid)\n\t\tres = do" +
                "cument.getElementById(self.divid+'_unit_results')\n\t\tif res:\n\t\t\tself.resdi" +
                "v = res\n\t\t\tres.innerHTML = ''\n\t\telse:\n\t\t\tself.resdiv = document.creat" +
                "eElement('div')\n\t\t\tself.resdiv.setAttribute('id',self.divid+'_unit_results')" +
                "\n\t\t\tself.resdiv.setAttribute('class','unittest-results')\n\t\tself.mydiv.app" +
                "endChild(self.resdiv)\n\n\n\tdef main(self):\n\t\tl = document.createElement('ul" +
                "')\n\t\tself.resdiv.appendChild(l)\n\t\tself.resList = l\n\n\t\tfor func in self" +
                ".tlist:\n\t\t\ttry:\n\t\t\t\tself.setup()\n\t\t\t\tfunc()\n\t\t\t\tself.tearDown" +
                "()\n\t\t\texcept Exception as e:\n\t\t\t\tself.appendResult('Error', None, None," +
                " e)\n\t\t\t\tself.numFailed += 1\n\t\tself.showSummary()\n\n\tdef appendResult(s" +
                "elf,res,actual,expected,feedback):\n\t\tif res == 'Error':\n\t\t\tmsg = 'Error: " +
                "%s' % feedback\n\t\telif res:\n\t\t\tmsg = 'Pass'\n\t\t\tself.numPassed += 1\n\t" +
                "\telse:\n\t\t\tmsg = 'Fail: expected %s  %s ' % (str(actual),str(expected)) + fe" +
                "edback\n\t\t\tself.numFailed += 1\n\n\t\tpTag = document.createElement('li')\n\t" +
                "\tpTag.innerHTML = msg\n\t\tself.resList.appendChild(pTag)\n\n\n\n\tdef showSumm" +
                "ary(self):\n\t\tpct = self.numPassed / (self.numPassed+self.numFailed) * 100\n\t" +
                "\tpTag = document.createElement('p')\n\t\tpTag.innerHTML = \"You passed: \" + st" +
                "r(pct) + \"% of the tests\"\n\t\tself.resdiv.appendChild(pTag)\n\t\tif pct < 90:" +
                "\n\t\t\tself.resdiv.setCSS('background-color','#de8e96')\n\t\telse:\n\t\t\tself." +
                "resdiv.setCSS('background-color','#83d382')\n",
        "src/lib/os.py": "raise NotImplementedError(\"os is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/basic/__init__.py": "\n#__all__ = [\"stack\"]\n\n\n#from .stack import Stack\n#from .queue import Que" +
                "ue\n\n\n\n",
        "src/lib/audiodev.py": "raise NotImplementedError(\"audiodev is not yet implemented in Skulpt\")\n",
        "src/lib/locale.py": "raise NotImplementedError(\"locale is not yet implemented in Skulpt\")\n",
        "src/lib/getopt.py": "raise NotImplementedError(\"getopt is not yet implemented in Skulpt\")\n",
        "src/lib/htmllib.py": "raise NotImplementedError(\"htmllib is not yet implemented in Skulpt\")\n",
        "src/lib/stringprep.py": "raise NotImplementedError(\"stringprep is not yet implemented in Skulpt\")\n",
        "src/lib/sre_parse.py": "raise NotImplementedError(\"sre_parse is not yet implemented in Skulpt\")\n",
        "src/lib/dumbdbm.py": "raise NotImplementedError(\"dumbdbm is not yet implemented in Skulpt\")\n",
        "src/lib/idlelib/Icons/__init__.py": "raise NotImplementedError(\"Icons is not yet implemented in Skulpt\")\n",
        "src/lib/copy_reg.py": "raise NotImplementedError(\"copy_reg is not yet implemented in Skulpt\")\n",
        "src/lib/sre.py": "raise NotImplementedError(\"sre is not yet implemented in Skulpt\")\n",
        "src/lib/htmlentitydefs.py": "raise NotImplementedError(\"htmlentitydefs is not yet implemented in Skulpt\")\n",
        "src/lib/rlcompleter.py": "raise NotImplementedError(\"rlcompleter is not yet implemented in Skulpt\")\n",
        "src/lib/cgitb.py": "raise NotImplementedError(\"cgitb is not yet implemented in Skulpt\")\n",
        "src/lib/statvfs.py": "raise NotImplementedError(\"statvfs is not yet implemented in Skulpt\")\n",
        "src/lib/chunk.py": "raise NotImplementedError(\"chunk is not yet implemented in Skulpt\")\n",
        "src/lib/ctypes/macholib/__init__.py": "raise NotImplementedError(\"macholib is not yet implemented in Skulpt\")\n",
        "src/lib/linecache.py": "raise NotImplementedError(\"linecache is not yet implemented in Skulpt\")\n",
        "src/lib/token.py": "raise NotImplementedError(\"token is not yet implemented in Skulpt\")\n",
        "src/lib/math.js": "var $builtinmodule = function (name) {\n    var mod = {};\n    mod.pi = new Sk.b" +
                "uiltin.float_(Math.PI);\n    mod.e = new Sk.builtin.float_(Math.E);\n\n    mod.f" +
                "abs = new Sk.builtin.func(function (x) {\n        Sk.builtin.pyCheckArgs(\"fabs" +
                "\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"number\", Sk.buil" +
                "tin.checkNumber(x));\n\n        return new Sk.builtin.float_(Math.abs(Sk.builtin" +
                ".asnum$(x)));\n    });\n\n    mod.asin = new Sk.builtin.func(function (rad) {\n " +
                "       Sk.builtin.pyCheckArgs(\"asin\", arguments, 1, 1);\n        Sk.builtin.py" +
                "CheckType(\"rad\", \"number\", Sk.builtin.checkNumber(rad));\n\n        return n" +
                "ew Sk.builtin.float_(Math.asin(Sk.builtin.asnum$(rad)));\n    });\n\n    mod.aco" +
                "s = new Sk.builtin.func(function (rad) {\n        Sk.builtin.pyCheckArgs(\"acos" +
                "\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"rad\", \"number\", Sk.bu" +
                "iltin.checkNumber(rad));\n\n        return new Sk.builtin.float_(Math.acos(Sk.bu" +
                "iltin.asnum$(rad)));\n    });\n\n    mod.atan = new Sk.builtin.func(function (ra" +
                "d) {\n        Sk.builtin.pyCheckArgs(\"atan\", arguments, 1, 1);\n        Sk.bui" +
                "ltin.pyCheckType(\"rad\", \"number\", Sk.builtin.checkNumber(rad));\n\n        r" +
                "eturn new Sk.builtin.float_(Math.atan(Sk.builtin.asnum$(rad)));\n    });\n\n    " +
                "mod.atan2 = new Sk.builtin.func(function (y, x) {\n        Sk.builtin.pyCheckArg" +
                "s(\"atan2\", arguments, 2, 2);\n        Sk.builtin.pyCheckType(\"y\", \"number\"" +
                ", Sk.builtin.checkNumber(y));\n        Sk.builtin.pyCheckType(\"x\", \"number\"," +
                " Sk.builtin.checkNumber(x));\n\n        return new Sk.builtin.float_(Math.atan2(" +
                "Sk.builtin.asnum$(y), Sk.builtin.asnum$(x)));\n    });\n\n    mod.sin = new Sk.b" +
                "uiltin.func(function (rad) {\n        Sk.builtin.pyCheckArgs(\"sin\", arguments," +
                " 1, 1);\n        Sk.builtin.pyCheckType(\"rad\", \"number\", Sk.builtin.checkNum" +
                "ber(rad));\n\n        return new Sk.builtin.float_(Math.sin(Sk.builtin.asnum$(ra" +
                "d)));\n    });\n\n    mod.cos = new Sk.builtin.func(function (rad) {\n        Sk" +
                ".builtin.pyCheckArgs(\"cos\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(" +
                "\"rad\", \"number\", Sk.builtin.checkNumber(rad));\n\n        return new Sk.buil" +
                "tin.float_(Math.cos(Sk.builtin.asnum$(rad)));\n    });\n\n    mod.tan = new Sk.b" +
                "uiltin.func(function (rad) {\n        Sk.builtin.pyCheckArgs(\"tan\", arguments," +
                " 1, 1);\n        Sk.builtin.pyCheckType(\"rad\", \"number\", Sk.builtin.checkNum" +
                "ber(rad));\n\n        return new Sk.builtin.float_(Math.tan(Sk.builtin.asnum$(ra" +
                "d)));\n    });\n\n    mod.asinh = new Sk.builtin.func(function (x) {\n        Sk" +
                ".builtin.pyCheckArgs(\"asinh\", arguments, 1, 1);\n        Sk.builtin.pyCheckTyp" +
                "e(\"x\", \"number\", Sk.builtin.checkNumber(x));\n\n        x = Sk.builtin.asnum" +
                "$(x);\n\n        var L = x + Math.sqrt(x * x + 1);\n\n        return new Sk.buil" +
                "tin.float_(Math.log(L));\n    });\n\n    mod.acosh = new Sk.builtin.func(functio" +
                "n (x) {\n        Sk.builtin.pyCheckArgs(\"acosh\", arguments, 1, 1);\n        Sk" +
                ".builtin.pyCheckType(\"x\", \"number\", Sk.builtin.checkNumber(x));\n\n        x" +
                " = Sk.builtin.asnum$(x);\n\n        var L = x + Math.sqrt(x * x - 1);\n\n       " +
                " return new Sk.builtin.float_(Math.log(L));\n    });\n\n    mod.atanh = new Sk.b" +
                "uiltin.func(function (x) {\n        Sk.builtin.pyCheckArgs(\"atanh\", arguments," +
                " 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"number\", Sk.builtin.checkNumbe" +
                "r(x));\n\n        x = Sk.builtin.asnum$(x);\n\n        var L = (1 + x) / (1 - x)" +
                ";\n\n        return new Sk.builtin.float_(Math.log(L) / 2);\n    });\n\n    mod." +
                "sinh = new Sk.builtin.func(function (x) {\n        Sk.builtin.pyCheckArgs(\"sinh" +
                "\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"number\", Sk.buil" +
                "tin.checkNumber(x));\n\n        x = Sk.builtin.asnum$(x);\n\n        var e = Mat" +
                "h.E;\n        var p = Math.pow(e, x);\n        var n = 1 / p;\n        var resul" +
                "t = (p - n) / 2;\n\n        return new Sk.builtin.float_(result);\n    });\n\n  " +
                "  mod.cosh = new Sk.builtin.func(function (x) {\n        Sk.builtin.pyCheckArgs(" +
                "\"cosh\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"number\", S" +
                "k.builtin.checkNumber(x));\n\n        x = Sk.builtin.asnum$(x);\n\n        var e" +
                " = Math.E;\n        var p = Math.pow(e, x);\n        var n = 1 / p;\n        var" +
                " result = (p + n) / 2;\n\n        return new Sk.builtin.float_(result);\n    });" +
                "\n\n    mod.tanh = new Sk.builtin.func(function (x) {\n        Sk.builtin.pyChec" +
                "kArgs(\"tanh\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"numbe" +
                "r\", Sk.builtin.checkNumber(x));\n\n        x = Sk.builtin.asnum$(x);\n\n       " +
                " var e = Math.E;\n        var p = Math.pow(e, x);\n        var n = 1 / p;\n     " +
                "   var result = ((p - n) / 2) / ((p + n) / 2);\n\n        return new Sk.builtin." +
                "float_(result);\n    });\n\n    mod.ceil = new Sk.builtin.func(function (x) {\n " +
                "       Sk.builtin.pyCheckArgs(\"ceil\", arguments, 1, 1);\n        Sk.builtin.py" +
                "CheckType(\"x\", \"number\", Sk.builtin.checkNumber(x));\n\n        return new S" +
                "k.builtin.float_(Math.ceil(Sk.builtin.asnum$(x)));\n    });\n\n    // returns y " +
                "with the sign of x\n    mod.copysign = new Sk.builtin.func(function (x, y) {\n  " +
                "      Sk.builtin.pyCheckArgs(\"ceil\", arguments, 2, 2);\n        Sk.builtin.pyC" +
                "heckType(\"x\", \"number\", Sk.builtin.checkNumber(x));\n        Sk.builtin.pyCh" +
                "eckType(\"y\", \"number\", Sk.builtin.checkNumber(y));\n\n        var _x = Sk.ff" +
                "i.remapToJs(x);\n        var _y = Sk.ffi.remapToJs(y);\n        var res;\n\n    " +
                "    var isNeg_x = _x < 0;\n        var isNeg_y = _x < 0;\n\n        // special c" +
                "ase for floats with negative zero\n        if(Sk.builtin.checkFloat(x)) {\n     " +
                "       if(_x === 0) {\n                isNeg_x = 1/_x === -Infinity ? true : fal" +
                "se;\n            }\n        }\n\n        if(Sk.builtin.checkFloat(y)) {\n       " +
                "     if(_y === 0) {\n                isNeg_y = 1/_y === -Infinity ? true : false" +
                ";\n            }\n        }\n\n        // if both signs are equal, just return _" +
                "y\n        if((isNeg_x && isNeg_y) || (!isNeg_x && !isNeg_y)) {\n            res" +
                " = _y;\n        } else if((isNeg_x && !isNeg_y) || (!isNeg_x && isNeg_y)) {\n   " +
                "         // if different, invert sign\n            if(y === 0) {\n              " +
                "  // special case for zero\n                res = isNeg_x ? -0.0 : 0.0;\n       " +
                "     } else {\n                res = _y * -1;\n            }\n        }\n\n     " +
                "   return new Sk.builtin.float_(res);\n    });\n\n    mod.floor = new Sk.builtin" +
                ".func(function (x) {\n        Sk.builtin.pyCheckArgs(\"floor\", arguments, 1, 1)" +
                ";\n        Sk.builtin.pyCheckType(\"x\", \"number\", Sk.builtin.checkNumber(x));" +
                "\n\n        return new Sk.builtin.float_(Math.floor(Sk.builtin.asnum$(x)));\n   " +
                " });\n\n    mod.sqrt = new Sk.builtin.func(function (x) {\n        Sk.builtin.py" +
                "CheckArgs(\"sqrt\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"n" +
                "umber\", Sk.builtin.checkNumber(x));\n\n        return new Sk.builtin.float_(Mat" +
                "h.sqrt(Sk.builtin.asnum$(x)));\n    });\n\n    mod.trunc = new Sk.builtin.func(f" +
                "unction (x) {\n        Sk.builtin.pyCheckArgs(\"trunc\", arguments, 1, 1);\n    " +
                "    Sk.builtin.pyCheckType(\"x\", \"number\", Sk.builtin.checkNumber(x));\n\n   " +
                "     return new Sk.builtin.int_(Sk.builtin.asnum$(x) | 0);\n    });\n\n    mod.l" +
                "og = new Sk.builtin.func(function (x, base) {\n        Sk.builtin.pyCheckArgs(\"" +
                "log\", arguments, 1, 2);\n        Sk.builtin.pyCheckType(\"x\", \"number\", Sk.b" +
                "uiltin.checkNumber(x));\n\n        if (base === undefined) {\n            return" +
                " new Sk.builtin.float_(Math.log(Sk.builtin.asnum$(x)));\n        } else {\n     " +
                "       Sk.builtin.pyCheckType(\"base\", \"number\", Sk.builtin.checkNumber(base)" +
                ");\n            var ret = Math.log(Sk.builtin.asnum$(x)) / Math.log(Sk.builtin.a" +
                "snum$(base));\n            return new Sk.builtin.float_(ret);\n        }\n    })" +
                ";\n\n    mod.log10 = new Sk.builtin.func(function (x) {\n        Sk.builtin.pyCh" +
                "eckArgs(\"log10\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"nu" +
                "mber\", Sk.builtin.checkNumber(x));\n\n        var ret = Math.log(Sk.builtin.asn" +
                "um$(x)) / Math.log(10);\n        return new Sk.builtin.float_(ret);\n    });\n\n" +
                "    /* Return True if x is a NaN (not a number), and False otherwise. */\n    mo" +
                "d.isnan = new Sk.builtin.func(function(x) {\n        Sk.builtin.pyCheckArgs(\"is" +
                "nan\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"float\", Sk.bu" +
                "iltin.checkFloat(x));\n\n        var _x = Sk.builtin.asnum$(x);\n        if(isNa" +
                "N(_x)) {\n            return Sk.builtin.bool.true$;\n        } else {\n         " +
                "   return Sk.builtin.bool.false$;\n        }\n    });\n\n    mod.exp = new Sk.bu" +
                "iltin.func(function (x) {\n        Sk.builtin.pyCheckArgs(\"exp\", arguments, 1," +
                " 1);\n        Sk.builtin.pyCheckType(\"x\", \"number\", Sk.builtin.checkNumber(x" +
                "));\n\n        return new Sk.builtin.float_(Math.exp(Sk.builtin.asnum$(x)));\n  " +
                "  });\n\n    mod.pow = new Sk.builtin.func(function (x, y) {\n        Sk.builtin" +
                ".pyCheckArgs(\"pow\", arguments, 2, 2);\n        Sk.builtin.pyCheckType(\"x\", " +
                "\"number\", Sk.builtin.checkNumber(x));\n        Sk.builtin.pyCheckType(\"y\", " +
                "\"number\", Sk.builtin.checkNumber(y));\n\n        return new Sk.builtin.float_(" +
                "Math.pow(Sk.builtin.asnum$(x), Sk.builtin.asnum$(y)));\n    });\n\n    mod.radia" +
                "ns = new Sk.builtin.func(function (deg) {\n        Sk.builtin.pyCheckArgs(\"radi" +
                "ans\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"deg\", \"number\", Sk" +
                ".builtin.checkNumber(deg));\n\n        var ret = Math.PI / 180.0 * Sk.builtin.as" +
                "num$(deg);\n        return new Sk.builtin.float_(ret);\n    });\n\n    mod.degre" +
                "es = new Sk.builtin.func(function (rad) {\n        Sk.builtin.pyCheckArgs(\"degr" +
                "ees\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"rad\", \"number\", Sk" +
                ".builtin.checkNumber(rad));\n\n        var ret = 180.0 / Math.PI * Sk.builtin.as" +
                "num$(rad);\n        return new Sk.builtin.float_(ret);\n    });\n\n    mod.hypot" +
                " = new Sk.builtin.func(function (x, y) {\n        Sk.builtin.pyCheckArgs(\"hypot" +
                "\", arguments, 2, 2);\n        Sk.builtin.pyCheckType(\"x\", \"number\", Sk.buil" +
                "tin.checkNumber(x));\n        Sk.builtin.pyCheckType(\"y\", \"number\", Sk.built" +
                "in.checkNumber(y));\n\n        x = Sk.builtin.asnum$(x);\n        y = Sk.builtin" +
                ".asnum$(y);\n        return new Sk.builtin.float_(Math.sqrt((x * x) + (y * y)));" +
                "\n    });\n\n    mod.factorial = new Sk.builtin.func(function (x) {\n        Sk." +
                "builtin.pyCheckArgs(\"factorial\", arguments, 1, 1);\n        Sk.builtin.pyCheck" +
                "Type(\"x\", \"number\", Sk.builtin.checkNumber(x));\n\n        x = Math.floor(Sk" +
                ".builtin.asnum$(x));\n        var r = 1;\n        for (var i = 2; i <= x; i++) {" +
                "\n            r *= i;\n        }\n        return new Sk.builtin.int_(r);\n    })" +
                ";\n\n    return mod;\n}",
        "src/lib/BaseHTTPServer.py": "raise NotImplementedError(\"BaseHTTPServer is not yet implemented in Skulpt\")\n",
        "src/lib/cmd.py": "raise NotImplementedError(\"cmd is not yet implemented in Skulpt\")\n",
        "src/lib/filecmp.py": "raise NotImplementedError(\"filecmp is not yet implemented in Skulpt\")\n",
        "src/lib/lib2to3/fixes/__init__.py": "raise NotImplementedError(\"fixes is not yet implemented in Skulpt\")\n",
        "src/builtin/sys.js": "var $builtinmodule = function (name) {\n    var i;\n    var sys = {};\n\n    var" +
                " args = [];\n    var argv = Sk.getSysArgv();\n    for (i = 0; i < argv.length; +" +
                "+i) {\n        args.push(new Sk.builtin.str(argv[i]));\n    }\n    sys.argv = ne" +
                "w Sk.builtins[\"list\"](args);\n\n    sys.copyright = Sk.builtin[\"str\"](\"Copy" +
                "right 2009-2010 Scott Graham.\\nAll Rights Reserved.\\n\");\n\n    sys.maxint = " +
                "new Sk.builtin.int_(Math.pow(2,53)-1);\n\n    /*  The largest positive integer s" +
                "upported by the platform\u2019s Py_ssize_t type,\n     *  and thus the maximum s" +
                "ize lists, strings, dicts, and many other containers can have.\n     *\n     *  " +
                "In skulpt this is the same as maxint, due to the underlying implementation in ja" +
                "vascript\n     */\n    sys.maxsize = new Sk.builtin.int_(Math.pow(2,53)-1);\n\n " +
                "   sys.modules = Sk.sysmodules;\n\n    sys.path = Sk.realsyspath;\n\n    sys.get" +
                "ExecutionLimit = new Sk.builtin.func(function () {\n        if (Sk.execLimit ===" +
                " null) {\n            return Sk.builtin.none.none$;\n        }\n        return n" +
                "ew Sk.builtin.int_(Sk.execLimit);\n    });\n\n    sys.setExecutionLimit = new Sk" +
                ".builtin.func(function (t) {\n        if (Sk.execLimit === null) {\n            " +
                "throw new Sk.builtin.NotImplementedError(\"Execution limiting is not enabled\");" +
                "\n        }\n        if (t !== undefined) {\n            Sk.execLimit = Sk.built" +
                "in.asnum$(t);\n        }\n    });\n\n    sys.resetTimeout = new Sk.builtin.func(" +
                "function () {\n        Sk.execStart = new Date();\n    });\n\n    sys.getYieldLi" +
                "mit = new Sk.builtin.func(function () {\n        if (Sk.yieldLimit === null) {\n" +
                "            return Sk.builtin.none.none$;\n        }\n        return new Sk.buil" +
                "tin.int_(Sk.yieldLimit);\n    });\n\n    sys.setYieldLimit = new Sk.builtin.func" +
                "(function (t) {\n        if (Sk.yieldLimit === null) {\n            throw new Sk" +
                ".builtin.NotImplementedError(\"Yielding is not enabled\");\n        }\n        i" +
                "f (t !== undefined) {\n            Sk.yieldLimit = Sk.builtin.asnum$(t);\n      " +
                "  }\n    });\n\n    sys.debug = new Sk.builtin.func(function () {\n        retur" +
                "n Sk.builtin.none.none$;\n    });\n\n    sys.__stdout__ = new Sk.builtin.file(ne" +
                "w Sk.builtin.str(\"/dev/stdout\"), \"w\");\n    sys.__stdin__ = new Sk.builtin.f" +
                "ile(new Sk.builtin.str(\"/dev/stdin\"), \"r\");\n\n    sys.stdout = sys.__stdout" +
                "__;\n    sys.stdin = sys.__stdin__;\n\n    return sys;\n};\n",
        "src/lib/dummy_threading.py": "raise NotImplementedError(\"dummy_threading is not yet implemented in Skulpt\")" +
                "\n",
        "src/lib/markupbase.py": "raise NotImplementedError(\"markupbase is not yet implemented in Skulpt\")\n",
        "src/lib/shelve.py": "raise NotImplementedError(\"shelve is not yet implemented in Skulpt\")\n",
        "src/lib/xmllib.py": "raise NotImplementedError(\"xmllib is not yet implemented in Skulpt\")\n",
        "src/lib/string.js": "/*\n *  __author__: Isaac Dontje Lindell (i@isaacdontjelindell.com)\n *\n *  Imp" +
                "lementation of the Python string module.\n */\n\n\nvar $builtinmodule = function" +
                " (name) {\n    var mod = {};\n\n    mod.ascii_lowercase = Sk.builtin.str('abcdef" +
                "ghijklmnopqrstuvwxyz');\n    mod.ascii_uppercase = Sk.builtin.str('ABCDEFGHIJKLM" +
                "NOPQRSTUVWXYZ');\n    mod.ascii_letters = Sk.builtin.str(mod.ascii_lowercase.v +" +
                " mod.ascii_uppercase.v);\n\n    mod.lowercase = Sk.builtin.str('abcdefghijklmnop" +
                "qrstuvwxyz');\n    mod.uppercase = Sk.builtin.str('ABCDEFGHIJKLMNOPQRSTUVWXYZ');" +
                "\n    mod.letters = Sk.builtin.str(mod.lowercase.v + mod.uppercase.v);\n\n    mo" +
                "d.digits = Sk.builtin.str('0123456789', Sk.builtin.str);\n    mod.hexdigits = Sk" +
                ".builtin.str('0123456789abcdefABCDEF');\n    mod.octdigits = Sk.builtin.str('012" +
                "34567');\n\n    mod.punctuation = Sk.builtin.str('!\"#$%&\\'()*+,-./:;<=>?@[\\\" +
                "\]^_`{|}~');\n    mod.whitespace = Sk.builtin.str('\\t\\n\\x0b\\x0c\\r ');\n\n  " +
                "  /* Note: The docs for string.printable say that it's the concatenation of stri" +
                "ng.digits,\n     * string.letters, string.punctuation, and string.whitespace. Th" +
                "e CPython interpreter\n     * outputs the whitespace characters in one order whe" +
                "n string.whitespace is used, and a\n     * slightly different order when string." +
                "printable is used. I've elected to follow the\n     * behavior of CPython here r" +
                "ather than the spec. */\n    mod.printable = Sk.builtin.str(mod.digits.v + mod.l" +
                "etters.v + mod.punctuation.v + \" \\t\\n\\r\\x0b\\x0c\");\n\n\n    mod.split = n" +
                "ew Sk.builtin.func(function (s, sep, maxsplit) {\n        return Sk.misceval.cal" +
                "lsim(Sk.builtin.str.prototype['split'], s, sep, maxsplit);\n    });\n\n    /* Re" +
                "turn a copy of word with only its first character capitalized. */\n    mod.capit" +
                "alize = new Sk.builtin.func(function (word) {\n        return Sk.misceval.callsi" +
                "m(Sk.builtin.str.prototype['capitalize'], word);\n    });\n\n    /* Concatenate " +
                "a list or tuple of words with intervening occurrences\n     * of sep. The defaul" +
                "t value for sep is a single space character. */\n    mod.join = new Sk.builtin.f" +
                "unc(function (words, sep) {\n        if (sep === undefined) {\n            sep =" +
                " Sk.builtin.str(' ');\n        }\n        return Sk.misceval.callsim(Sk.builtin." +
                "str.prototype['join'], sep, words);\n    });\n\n\n    /* Split the argument into" +
                " words using split(), capitalize each word\n     * using capitalize(), and join " +
                "the capitalized words using join().\n     * Note that this replaces runs of whit" +
                "espace characters by a single\n     * space, and removes leading and trailing wh" +
                "itespace. */\n    mod.capwords = new Sk.builtin.func(function (s, sep) {\n      " +
                "  Sk.builtin.pyCheckArgs('capwords', arguments, 1, 2);\n        if (!Sk.builtin." +
                "checkString(s)) {\n            throw new Sk.builtin.TypeError(\"s must be a stri" +
                "ng\");\n        }\n        if (sep === undefined) {\n            sep = Sk.builti" +
                "n.str(' ');\n        }\n        if (!Sk.builtin.checkString(sep)) {\n           " +
                " throw new Sk.builtin.TypeError(\"sep must be a string\");\n        }\n\n       " +
                " var words = Sk.misceval.callsim(mod.split, s, sep);\n        var capWords = [];" +
                "\n        for (var i = 0; i < words.v.length; i++) {\n            var word = Sk." +
                "builtin.list.prototype['list_subscript_'].call(words, i);\n            var cap =" +
                " Sk.misceval.callsim(mod.capitalize, word);\n            capWords.push(cap);\n  " +
                "      }\n\n        return Sk.misceval.callsim(mod.join, new Sk.builtin.list(capW" +
                "ords), sep);\n    });\n\n\n    return mod;\n};\n",
        "src/lib/ConfigParser.py": "raise NotImplementedError(\"ConfigParser is not yet implemented in Skulpt\")\n",
        "src/lib/pickle.py": "raise NotImplementedError(\"pickle is not yet implemented in Skulpt\")\n",
        "src/lib/processing.js": "/*\n  Skulpt Processing\n\n  Testing/debugging:\n\n  ProcessingJS from Skulpt:\n" +
                "  Sk.misceval.callsim(Sk.globals.processing.$d.PShapeSVG, \n      new Sk.builtin" +
                ".str(\"string\"), \n      new Sk.builtin.str(\"bot1.svg\"))\n\n  ProcessingJS di" +
                "rect:\n  p = Processing.instances[0]\n  p.PShapeSVG(\"string\", \"bot1.svg\")\n*" +
                "/\n\nvar $builtinmodule = function (name) {\n    var imageClass;\n    var colorC" +
                "lass;\n    var screenClass;\n    var environmentClass;\n    var keyboardClass;\n" +
                "    var mouseClass;\n    var vectorClass\n\n    var mod = {};\n    var imList = " +
                "[];\n    var looping = true;\n    var instance = null;\n\n    // We need this to" +
                " store a reference to the actual processing object which is not created\n    // " +
                "until the run function is called.  Even then the processing object is passed by " +
                "the\n    // processing-js sytem as a parameter to the sketchProc function.  Why " +
                "not set it to None here\n    //\n\n    // See:  http://processingjs.org/referenc" +
                "e/\n\n    mod.processing = null;\n    mod.p = null;\n\n    mod.X = new Sk.builti" +
                "n.int_(0);\n    mod.Y = new Sk.builtin.int_(1);\n    mod.Z = new Sk.builtin.int_" +
                "(2);\n\n    mod.R = new Sk.builtin.int_( 3);\n    mod.G = new Sk.builtin.int_( 4" +
                ");\n    mod.B = new Sk.builtin.int_( 5);\n    mod.A = new Sk.builtin.int_( 6);\n" +
                "    \n    mod.U = new Sk.builtin.int_( 7);\n    mod.V = new Sk.builtin.int_( 8);" +
                "\n    \n    mod.NX = new Sk.builtin.int_( 9);\n    mod.NY = new Sk.builtin.int_(" +
                " 10);\n    mod.NZ = new Sk.builtin.int_( 11);\n    \n    mod.EDGE = new Sk.built" +
                "in.int_( 12);\n    \n    // Stroke\n    mod.SR = new Sk.builtin.int_( 13);\n    " +
                "mod.SG = new Sk.builtin.int_( 14);\n    mod.SB = new Sk.builtin.int_( 15);\n    " +
                "mod.SA = new Sk.builtin.int_( 16);\n    \n    mod.SW = new Sk.builtin.int_( 17);" +
                "\n    \n    // Transformations (2D and 3D)\n    mod.TX = new Sk.builtin.int_( 18" +
                ");\n    mod.TY = new Sk.builtin.int_( 19);\n    mod.TZ = new Sk.builtin.int_( 20" +
                ");\n    \n    mod.VX = new Sk.builtin.int_( 21);\n    mod.VY = new Sk.builtin.in" +
                "t_( 22);\n    mod.VZ = new Sk.builtin.int_( 23);\n    mod.VW = new Sk.builtin.in" +
                "t_( 24);\n    \n    // Material properties\n    mod.AR = new Sk.builtin.int_( 25" +
                ");\n    mod.AG = new Sk.builtin.int_( 26);\n    mod.AB = new Sk.builtin.int_( 27" +
                ");\n    \n    mod.DR = new Sk.builtin.int_( 3);\n    mod.DG = new Sk.builtin.int" +
                "_( 4);\n    mod.DB = new Sk.builtin.int_( 5);\n    mod.DA = new Sk.builtin.int_(" +
                " 6);\n    \n    mod.SPR = new Sk.builtin.int_( 28);\n    mod.SPG = new Sk.builti" +
                "n.int_( 29);\n    mod.SPB = new Sk.builtin.int_( 30);\n    \n    mod.SHINE = new" +
                " Sk.builtin.int_( 31);\n    \n    mod.ER = new Sk.builtin.int_( 32);\n    mod.EG" +
                " = new Sk.builtin.int_( 33);\n    mod.EB = new Sk.builtin.int_( 34);\n    \n    " +
                "mod.BEEN_LIT = new Sk.builtin.int_( 35);\n    \n    mod.VERTEX_FIELD_COUNT = new" +
                " Sk.builtin.int_( 36);\n    \n    // Shape drawing modes\n    mod.CENTER = new S" +
                "k.builtin.int_(3);\n    mod.RADIUS = new Sk.builtin.int_(2);\n    mod.CORNERS = " +
                "new Sk.builtin.int_(1);\n    mod.CORNER = new Sk.builtin.int_(0);\n    mod.DIAME" +
                "TER = new Sk.builtin.int_(3);\n    \n    // Text vertical alignment modes\n    /" +
                "/ Default vertical alignment for text placement\n    mod.BASELINE = new Sk.built" +
                "in.int_( 0);\n    // Align text to the top\n    mod.TOP = new Sk.builtin.int_(  " +
                "    101);\n    // Align text from the bottom, using the baseline\n    mod.BOTTOM" +
                " = new Sk.builtin.int_(   102);\n    \n    // UV Texture coordinate modes\n    m" +
                "od.NORMAL = new Sk.builtin.int_(     1);\n    mod.NORMALIZED = new Sk.builtin.in" +
                "t_( 1);\n    mod.IMAGE = new Sk.builtin.int_(      2);\n    \n    // Text placem" +
                "ent modes\n    mod.MODEL = new Sk.builtin.int_( 4);\n    mod.SHAPE = new Sk.buil" +
                "tin.int_( 5);\n    \n    // Lighting modes\n    mod.AMBIENT = new Sk.builtin.int" +
                "_(     0);\n    mod.DIRECTIONAL = new Sk.builtin.int_( 1);\n    //POINT:     2, " +
                "Shared with Shape constant\n    mod.SPOT = new Sk.builtin.int_(        3);\n\n  " +
                "  // Color modes\n    mod.RGB = new Sk.builtin.int_(1);\n    mod.ARGB = new Sk.b" +
                "uiltin.int_(2);\n    mod.HSB = new Sk.builtin.int_(3);\n    mod.ALPHA = new Sk.b" +
                "uiltin.int_(4);\n    mod.CMYK = new Sk.builtin.int_(5);\n    \n    // Image file" +
                " types\n    mod.TIFF = new Sk.builtin.int_(0);\n    mod.TARGA = new Sk.builtin.i" +
                "nt_(1);\n    mod.JPEG = new Sk.builtin.int_(2);\n    mod.GIF = new Sk.builtin.in" +
                "t_(3);\n\n    // Stroke modes\n    mod.MITER = new Sk.builtin.str(\"miter\");\n " +
                "   mod.BEVEL = new Sk.builtin.str(\"bevel\");\n    mod.ROUND = new Sk.builtin.st" +
                "r(\"round\");\n    mod.SQUARE = new Sk.builtin.str(\"butt\");\n    mod.PROJECT =" +
                " new Sk.builtin.str(\"square\");\n\n    // Renderer modes\n    mod.P2D = new Sk." +
                "builtin.int_(1);\n    mod.JAVA2D = new Sk.builtin.int_(1);\n    mod.WEBGL = new " +
                "Sk.builtin.int_(2);\n    mod.P3D = new Sk.builtin.int_(2);\n    mod.OPENGL = new" +
                " Sk.builtin.int_(2);\n    mod.PDF = new Sk.builtin.int_(0);\n    mod.DXF  = new " +
                "Sk.builtin.int_(0);\n\n    // Platform IDs\n    mod.OTHER = new Sk.builtin.int_(" +
                "   0);\n    mod.WINDOWS = new Sk.builtin.int_( 1);\n    mod.MAXOSX = new Sk.buil" +
                "tin.int_(  2);\n    mod.LINUX = new Sk.builtin.int_(   3);\n    \n    mod.EPSILO" +
                "N = new Sk.builtin.float_( 0.0001);\n\n    mod.MAX_FLOAT = new Sk.builtin.float_" +
                "(  3.4028235e+38);\n    mod.MIN_FLOAT = new Sk.builtin.float_( -3.4028235e+38);" +
                "\n    mod.MAX_INT = new Sk.builtin.int_(    2147483647);\n    mod.MIN_INT = new " +
                "Sk.builtin.int_(   -2147483648);\n    \n    // Constants\n    mod.HALF_PI = new " +
                "Sk.builtin.float_(Math.PI / 2.0);\n    mod.THIRD_PI = new Sk.builtin.float_(Math" +
                ".PI / 3.0);\n    mod.PI = new Sk.builtin.float_(Math.PI);\n    mod.TWO_PI = new " +
                "Sk.builtin.float_(Math.PI * 2.0);\n    mod.TAU = new Sk.builtin.float_(Math.PI *" +
                " 2.0);\n    mod.QUARTER_PI = new Sk.builtin.float_(Math.PI / 4.0);\n\n    mod.DE" +
                "G_TO_RAD = new Sk.builtin.float_( Math.PI / 180);\n    mod.RAD_TO_DEG = new Sk.b" +
                "uiltin.float_( 180 / Math.PI);\n\n    mod.WHITESPACE = Sk.builtin.str(\" \\t\\n" +
                "\\r\\f\\u00A0\");\n    // Shape modes\n    mod.POINT = new Sk.builtin.int_(2);\n" +
                "    mod.POINTS = new Sk.builtin.int_(2);\n    mod.LINE = new Sk.builtin.int_(4);" +
                "\n    mod.LINES = new Sk.builtin.int_(4);\n    mod.TRIANGLE = new Sk.builtin.int" +
                "_(8);\n    mod.TRIANGLES = new Sk.builtin.int_(9);\n    mod.TRIANGLE_FAN = new S" +
                "k.builtin.int_(11);\n    mod.TRIANGLE_STRIP = new Sk.builtin.int_(10);\n    mod." +
                "QUAD = new Sk.builtin.int_(16);\n    mod.QUADS = new Sk.builtin.int_(16);\n    m" +
                "od.QUAD_STRIP = new Sk.builtin.int_(17);\n    mod.POLYGON = new Sk.builtin.int_(" +
                "20);\n\n    mod.PATH = new Sk.builtin.int_(21);\n    mod.RECT = new Sk.builtin.i" +
                "nt_(30);\n    mod.ELLIPSE = new Sk.builtin.int_(31);\n    mod.ARC = new Sk.built" +
                "in.int_(32);\n    mod.SPHERE = new Sk.builtin.int_(40);\n    mod.BOX = new Sk.bu" +
                "iltin.int_(41);\n\n    mod.GROUP = new Sk.builtin.int_(          0);\n    mod.PR" +
                "IMITIVE = new Sk.builtin.int_(      1);\n    //PATH:         21, // shared with " +
                "Shape PATH\n    mod.GEOMETRY = new Sk.builtin.int_(       3);\n    \n    // Shap" +
                "e Vertex\n    mod.VERTEX = new Sk.builtin.int_(        0);\n    mod.BEZIER_VERTE" +
                "X = new Sk.builtin.int_( 1);\n    mod.CURVE_VERTEX = new Sk.builtin.int_(  2);\n" +
                "    mod.BREAK = new Sk.builtin.int_(         3);\n    mod.CLOSESHAPE = new Sk.bu" +
                "iltin.int_(    4);\n    \n    // Blend modes\n    mod.REPLACE    = new Sk.builti" +
                "n.int_(0);\n    mod.BLEND      = new Sk.builtin.int_(1 << 0);\n    mod.ADD      " +
                "  = new Sk.builtin.int_(1 << 1);\n    mod.SUBTRACT   = new Sk.builtin.int_(1 << " +
                "2);\n    mod.LIGHTEST   = new Sk.builtin.int_(1 << 3);\n    mod.DARKEST    = new" +
                " Sk.builtin.int_(1 << 4);\n    mod.DIFFERENCE = new Sk.builtin.int_(1 << 5);\n  " +
                "  mod.EXCLUSION  = new Sk.builtin.int_(1 << 6);\n    mod.MULTIPLY   = new Sk.bui" +
                "ltin.int_(1 << 7);\n    mod.SCREEN     = new Sk.builtin.int_(1 << 8);\n    mod.O" +
                "VERLAY    = new Sk.builtin.int_(1 << 9);\n    mod.HARD_LIGHT = new Sk.builtin.in" +
                "t_(1 << 10);\n    mod.SOFT_LIGHT = new Sk.builtin.int_(1 << 11);\n    mod.DODGE " +
                "     = new Sk.builtin.int_(1 << 12);\n    mod.BURN       = new Sk.builtin.int_(1" +
                " << 13);\n\n    // Color component bit masks\n    mod.ALPHA_MASK = new Sk.builti" +
                "n.int_( 0xff000000);\n    mod.RED_MASK = new Sk.builtin.int_(   0x00ff0000);\n  " +
                "  mod.GREEN_MASK = new Sk.builtin.int_( 0x0000ff00);\n    mod.BLUE_MASK = new Sk" +
                ".builtin.int_(  0x000000ff);\n    \n    // Projection matrices\n    mod.CUSTOM =" +
                " new Sk.builtin.int_(       0);\n    mod.ORTHOGRAPHIC = new Sk.builtin.int_( 2);" +
                "\n    mod.PERSPECTIVE = new Sk.builtin.int_(  3);\n    \n    // Cursors\n    mod" +
                ".ARROW = new Sk.builtin.str(\"default\");\n    mod.CROSS = new Sk.builtin.str(\"" +
                "crosshair\");\n    mod.HAND = new Sk.builtin.str(\"pointer\");\n    mod.MOVE = n" +
                "ew Sk.builtin.str(\"move\");\n    mod.TEXT = new Sk.builtin.str(\"text\");\n    " +
                "mod.WAIT = new Sk.builtin.str(\"wait\");\n    mod.NOCURSOR = Sk.builtin.assk$(\"" +
                "url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICR" +
                "AEAOw=='), auto\", Sk.builtin.nmber.str);\n\n    // Hints\n    mod.DISABLE_OPENG" +
                "L_2X_SMOOTH = new Sk.builtin.int_(1);\n    mod.ENABLE_OPENGL_2X_SMOOTH = new Sk." +
                "builtin.int_(-1);\n    mod.ENABLE_OPENGL_4X_SMOOTH = new Sk.builtin.int_(2);\n  " +
                "  mod.ENABLE_NATIVE_FONTS = new Sk.builtin.int_(3);\n    mod.DISABLE_DEPTH_TEST " +
                "= new Sk.builtin.int_(4);\n    mod.ENABLE_DEPTH_TEST = new Sk.builtin.int_(-4);" +
                "\n    mod.ENABLE_DEPTH_SORT = new Sk.builtin.int_(5);\n    mod.DISABLE_DEPTH_SOR" +
                "T = new Sk.builtin.int_(-5);\n    mod.DISABLE_OPENGL_ERROR_REPORT = new Sk.built" +
                "in.int_(6);\n    mod.ENABLE_OPENGL_ERROR_REPORT = new Sk.builtin.int_(-6);\n    " +
                "mod.ENABLE_ACCURATE_TEXTURES = new Sk.builtin.int_(7);\n    mod.DISABLE_ACCURATE" +
                "_TEXTURES = new Sk.builtin.int_(-7);\n    mod.HINT_COUNT = new Sk.builtin.int_(1" +
                "0);\n\n    // Shape closing modes\n    mod.OPEN =  new Sk.builtin.int_(1);\n    " +
                "mod.CLOSE = new Sk.builtin.int_(2);\n\n    // Filter/convert types\n    mod.BLUR" +
                " = new Sk.builtin.int_(11);\n    mod.GRAY = new Sk.builtin.int_(12);\n    mod.IN" +
                "VERT = new Sk.builtin.int_(13);\n    mod.OPAQUE = new Sk.builtin.int_(14);\n    " +
                "mod.POSTERIZE = new Sk.builtin.int_(15);\n    mod.THRESHOLD = new Sk.builtin.int" +
                "_(16);\n    mod.ERODE = new Sk.builtin.int_(17);\n    mod.DILATE = new Sk.builti" +
                "n.int_(18);\n\n    // Both key and keyCode will be equal to these values\n    mo" +
                "d.BACKSPACE = new Sk.builtin.int_( 8);\n    mod.TAB = new Sk.builtin.int_(9);\n " +
                "   mod.ENTER = new Sk.builtin.int_(10);\n    mod.RETURN = new Sk.builtin.int_(13" +
                ");\n    mod.ESC = new Sk.builtin.int_(27);\n    mod.DELETE = new Sk.builtin.int_" +
                "(127);\n    mod.CODED = new Sk.builtin.int_(0xffff);\n\n    // p.key will be COD" +
                "ED and p.keyCode will be this value\n    mod.SHIFT = new Sk.builtin.int_(16);\n " +
                "   mod.CONTROL = new Sk.builtin.int_(17);\n    mod.ALT = new Sk.builtin.int_(18)" +
                ";\n    mod.CAPSLK = new Sk.builtin.int_(20);\n    mod.PGUP = new Sk.builtin.int_" +
                "(33);\n    mod.PGDN = new Sk.builtin.int_(34);\n    mod.END = new Sk.builtin.int" +
                "_(35);\n    mod.HOME = new Sk.builtin.int_(36);\n    mod.LEFT = new Sk.builtin.i" +
                "nt_(37);\n    mod.UP = new Sk.builtin.int_(38);\n    mod.RIGHT = new Sk.builtin." +
                "int_(39);\n    mod.DOWN = new Sk.builtin.int_(40);\n    mod.F1 = new Sk.builtin." +
                "int_(112);\n    mod.F2 = new Sk.builtin.int_(113);\n    mod.F3 = new Sk.builtin." +
                "int_(114);\n    mod.F4 = new Sk.builtin.int_(115);\n    mod.F5 = new Sk.builtin." +
                "int_(116);\n    mod.F6 = new Sk.builtin.int_(117);\n    mod.F7 = new Sk.builtin." +
                "int_(118);\n    mod.F8 = new Sk.builtin.int_(119);\n    mod.F9 = new Sk.builtin." +
                "int_(120);\n    mod.F10 = new Sk.builtin.int_(121);\n    mod.F11 = new Sk.builti" +
                "n.int_(122);\n    mod.F12 = new Sk.builtin.int_(123);\n    mod.NUMLK = new Sk.bu" +
                "iltin.int_(144);\n    mod.META = new Sk.builtin.int_(157);\n    mod.INSERT = new" +
                " Sk.builtin.int_(155);\n\n    // PJS defined constants\n    mod.SINCOS_LENGTH = " +
                "new Sk.builtin.int_(720);\n    mod.PRECISIONB = new Sk.builtin.int_(15);\n    mo" +
                "d.PRECISIONF = new Sk.builtin.int_(1 << 15);\n    mod.PREC_MAXVAL = new Sk.built" +
                "in.int_((1 << 15) - 1);\n    mod.PREC_ALPHA_SHIFT = new Sk.builtin.int_(24 - 15)" +
                ";\n    mod.PREC_RED_SHIFT = new Sk.builtin.int_(16 - 15);\n    mod.NORMAL_MODE_A" +
                "UTO = new Sk.builtin.int_(0);\n    mod.NORMAL_MODE_SHAPE = new Sk.builtin.int_(1" +
                ");\n    mod.NORMAL_MODE_VERTEX = new Sk.builtin.int_(2);\n    mod.MAX_LIGHTS = n" +
                "ew Sk.builtin.int_(8);\n\n    // 2D - Primitives\n    mod.line = new Sk.builtin." +
                "func(function (x1, y1, x2, y2) {\n        mod.processing.line(x1.v, y1.v, x2.v, " +
                "y2.v);\n    });\n\n    mod.ellipse = new Sk.builtin.func(function (x, y, r1, r2)" +
                " {\n        mod.processing.ellipse(x.v, y.v, r1.v, r2.v);\n\n    });\n\n    mod." +
                "text = new Sk.builtin.func(function (theText, x, y) {\n        mod.processing.te" +
                "xt(theText.v, x.v, y.v);\n    });\n\n    mod.point = new Sk.builtin.func(functio" +
                "n (x1, y1) {\n        mod.processing.point(x1.v, y1.v);\n    });\n\n    mod.arc " +
                "= new Sk.builtin.func(function (x, y, width, height, start, stop) {\n        mod" +
                ".processing.arc(x.v, y.v, width.v, height.v, start.v, stop.v);\n    });\n\n    m" +
                "od.quad = new Sk.builtin.func(function (x1, y1, x2, y2, x3, y3, x4, y4) {\n     " +
                "   mod.processing.quad(x1.v, y1.v, x2.v, y2.v, x3.v, y3.v, x4.v, y4.v);\n    });" +
                "\n\n    mod.rect = new Sk.builtin.func(function (x, y, width, height, radius) {" +
                "\n        var rad;\n        if (typeof(radius) === \"undefined\") {\n           " +
                " mod.processing.rect(x.v, y.v, width.v, height.v);\n        } else {\n          " +
                "  mod.processing.rect(x.v, y.v, width.v, height.v, radius.v);\n        }\n    })" +
                ";\n\n    mod.triangle = new Sk.builtin.func(function (x1, y1, x2, y2, x3, y3) {" +
                "\n        mod.processing.triangle(x1.v, y1.v, x2.v, y2.v, x3.v, y3.v);\n    });" +
                "\n\n    mod.bezier = new Sk.builtin.func(function (x1, y1, a1, a2, a3, a4, a5, a" +
                "6, a7, a8, a9, a10) {\n        if (typeof(a7) === \"undefined\") {\n\t    // bez" +
                "ier(x1, y1, cx1, cy1, cx2, cy2,  x2,  y2);\n            mod.processing.bezier(x1" +
                ".v, y1.v, a1.v, a2.v, a3.v, a4.v, a5.v, a6.v);\n\t} else {\n\t    // bezier(x1, " +
                "y1,  z1, cx1, cy1, cz1, cx2, cy2, cz2, x2, y2, z2);\n            mod.processing." +
                "bezier(x1.v, y1.v, a1.v, a2.v, a3.v, a4.v, a5.v, a6.v, a7.v, a8.v, a9.v, a10.v);" +
                "\n\t}\n    });\n\n    mod.alpha = new Sk.builtin.func(function (r, g, b) {\n    " +
                "    // r will be either:\n        //      a number in which case the fill will b" +
                "e grayscale\n        //      a color object\n        // g, and b may be undefine" +
                "d.  If they hold values it will\n        // be assumed that we have an r,g,b col" +
                "or tuple\n        if (typeof(g) === \"undefined\") {\n            return new Sk." +
                "builtin.float_(mod.processing.alpha(r.v));\n        } else if (typeof(b) === \"u" +
                "ndefined\") {\n            return new Sk.builtin.float_(mod.processing.alpha(r.v" +
                ", g.v));\n        } else {\n            return new Sk.builtin.float_(mod.process" +
                "ing.alpha(r.v, g.v, b.v));\n\t}\n    });\n\n    mod.ambient = new Sk.builtin.fun" +
                "c(function (r, g, b) {\n\t// ambient(gray)\n\t// ambient(red, green blue)\n     " +
                "   // r will be either:\n        //      a number in which case the fill will be" +
                " grayscale\n        //      a color object\n        // g, and b may be undefined" +
                ".  If they hold values it will\n        // be assumed that we have an r,g,b colo" +
                "r tuple\n        if (typeof(g) === \"undefined\") {\n            mod.processing." +
                "ambient(r.v);\n        } else if (typeof(b) === \"undefined\") {\n            mo" +
                "d.processing.ambient(r.v, g.v);\n        } else {\n            mod.processing.am" +
                "bient(r.v, g.v, b.v);\n\t}\n    });\n\n    mod.ambientLight = new Sk.builtin.fun" +
                "c(function (v1, v2, v3, x, y, z) {\n\t// ambientLight(v1,v2,v3)\n\t// ambientLig" +
                "ht(v1,v2,v3,x,y,z)\n        if (typeof(x) === \"undefined\") {\n            mod." +
                "processing.ambientLight(v1.v, v2.v, v3.v);\n        } else if (typeof(y) === \"u" +
                "ndefined\") {\n            mod.processing.ambientLight(v1.v, v2.v, v3.v, x.v);\n" +
                "        } else if (typeof(z) === \"undefined\") {\n            mod.processing.am" +
                "bientLight(v1.v, v2.v, v3.v, x.v, y.v);\n        } else {\n            mod.proce" +
                "ssing.ambientLight(v1.v, v2.v, v3.v, x.v, y.v, z.v);\n\t}\n    });\n\n    mod.be" +
                "ginCamera = new Sk.builtin.func(function () {\n\tmod.processing.beginCamera();\n" +
                "    });\n\n    mod.beginShape = new Sk.builtin.func(function (mode) {\n        i" +
                "f (typeof(mode) === \"undefined\") {\n            mode = mod.POLYGON;\n        }" +
                "\n        mod.processing.beginShape(mode.v);\n    });\n\n    mod.bezierDetail = " +
                "new Sk.builtin.func(function (resolution) {\n\t// Sets the resolution at which B" +
                "eziers display. The default\n\t// value is 20. This function is only useful when" +
                " using the\n\t// P3D or OPENGL renderer as the default (JAVA2D) renderer\n\t// d" +
                "oes not use this information.\n        if (typeof(resolution) !== \"undefined\")" +
                " {\n            resolution = resolution.v;\n        } else {\n            resolu" +
                "tion = 20;\n\t}\n        mod.processing.bezierDetail(resolution);\n    });\n\n  " +
                "  mod.bezierPoint = new Sk.builtin.func(function (a,b,c,d,t) {\n        mod.proc" +
                "essing.bezierPoint(a.v,b.v,c.v,d.v,t.v);\n    });\n\n    mod.bezierTangent = new" +
                " Sk.builtin.func(function (a,b,c,d,t) {\n\tmod.processing.bezierTangent(a.v,b.v," +
                "c.v,d.v,t.v);\n    });\n\n    mod.bezierVertex = new Sk.builtin.func(function (v" +
                "1, v2, v3, v4, v5, v6,\n\t\t\t\t\t\t    v7, v8, v9) {\n\t// bezierVertex(cx1, cy" +
                "1, cx2, cy2,   x,   y)\n\t// bezierVertex(cx1, cy1, cz1, cx2, cy2, cz2, x, y, z)" +
                "\n        if (typeof(v7) === \"undefined\") {\n\t    mod.processing.bezierVertex" +
                "(v1.v, v2.v, v3.v, v4.v, v5.v, v6.v);\n\t} else if (typeof(v8) === \"undefined\"" +
                ") {\n\t    mod.processing.bezierVertex(v1.v, v2.v, v3.v, v4.v, v5.v, v6.v,\n\t\t" +
                "\t\t\tv7.v);\n\t} else if (typeof(v9) === \"undefined\") {\n\t    mod.processing" +
                ".bezierVertex(v1.v, v2.v, v3.v, v4.v, v5.v, v6.v,\n\t\t\t\t\tv7.v, v8.v);\n\t} e" +
                "lse {\n\t    mod.processing.bezierVertex(v1.v, v2.v, v3.v, v4.v, v5.v, v6.v,\n\t" +
                "\t\t\t\tv7.v, v8.v, v9.v);\n\t}\n    });\n\n    mod.blend = new Sk.builtin.func(" +
                "function (v1, v2, v3, v4, v5,\n\t\t\t\t\t      v6, v7, v8, v9, v10) {\n\tif (oth" +
                "er instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_) {\n\t    //" +
                " blend(x,     y,width,height,dx,    dy,dwidth,dheight,MODE)\n\t    mod.processin" +
                "g.blend(v1.v, v2.v, v3.v, v4.v, v5.v,\n\t\t\t\t v6.v, v7.v, v8.v, v9.v);\n\t} el" +
                "se {\n\t    // blend(srcImg,x,y,    width, height,dx,dy,    dwidth, dheight,MODE" +
                ")\n\t    mod.processing.blend(v1.v, v2.v, v3.v, v4.v, v5.v,\n\t\t\t\t v6.v, v7.v" +
                ", v8.v, v9.v, v10.v);\n\t}\n    });\n\n    mod.blendColor = new Sk.builtin.func(" +
                "function (c1, c2, mode) {\n\t// blendColor(c1,c2,MODE)\n        var c = Sk.misce" +
                "val.callsim(mod.color,\n\t\t\t\t    new Sk.builtin.int_(0),\n\t\t\t\t    new Sk." +
                "builtin.int_(0),\n\t\t\t\t    new Sk.builtin.int_(0));\n\tc.v = mod.processing.b" +
                "lendColor(c1.v, c2.v, mode.v);\n\treturn c;\n    });\n\n    mod.brightness = new" +
                " Sk.builtin.func(function (r, g, b) {\n        if (typeof(g) === \"undefined\") " +
                "{\n\t    return new Sk.builtin.float_(mod.processing.brightness(r.v));\n        " +
                "} else if (typeof(b) === \"undefined\") {\n\t    return new Sk.builtin.float_(mo" +
                "d.processing.brightness(r.v, g.v));\n        } else {\n\t    return new Sk.built" +
                "in.float_(mod.processing.brightness(r.v, g.v, b.v));\n\t}\n    });\n\n    mod.ca" +
                "mera = new Sk.builtin.func(function (eyeX, eyeY, eyeZ,\n\t\t\t\t\t       centerX" +
                ", centerY, centerZ,\n\t\t\t\t\t       upX, upY, upZ) {\n\t// camera()\n\t// came" +
                "ra(eyeX, eyeY, eyeZ,centerX, centerY, centerZ,upX, upY, upZ)\n        if (typeof" +
                "(eyeX) === \"undefined\") {\n\t    mod.processing.camera();\n\t} else {\n\t    m" +
                "od.processing.camera(eyeX.v, eyeY.v, eyeZ.v,\n\t\t\t\t  centerX.v, centerY.v, ce" +
                "nterZ.v,\n\t\t\t\t  upX.v, upY.v, upZ.v);\n\t}\n    });\n\n    mod.constrain = n" +
                "ew Sk.builtin.func(function (value, min, max) {\n\treturn new Sk.builtin.float_(" +
                "mod.processing.constrain(value.v, min.v, max.v));\n    });\n\n    mod.copy = new" +
                " Sk.builtin.func(function (v1, v2, v3, v4, v5,\n\t\t\t\t\t      v6, v7, v8, v9) " +
                "{\n\tif (other instanceof Sk.builtin.int_ || other instanceof Sk.builtin.float_)" +
                " {\n\t    // copy(x,     y,width,height,dx,    dy,dwidth,dheight)\n\t    mod.pro" +
                "cessing.copy(v1.v, v2.v, v3.v, v4.v, v5.v,\n\t\t\t\tv6.v, v7.v, v8.v);\n\t} else" +
                " {\n\t    // copy(srcImg,x,y,    width, height,dx,dy,    dwidth, dheight)\n\t   " +
                " mod.processing.copy(v1.v, v2.v, v3.v, v4.v, v5.v,\n\t\t\t\tv6.v, v7.v, v8.v, v9" +
                ".v);\n\t}\n    });\n\n    mod.createFont = new Sk.builtin.func(function (name, s" +
                "ize, smooth, charset) {\n\t// createFont(name, size)\n\t// createFont(name, size" +
                ", smooth)\n\t// createFont(name, size, smooth, charset)\n\tvar font = Sk.misceva" +
                "l.callsim(mod.PFont);\n        if (typeof(smooth) === \"undefined\") {\n\t    fo" +
                "nt.v = mod.processing.createFont(name.v, size.v);\n\t} else if (typeof(charset) " +
                "=== \"undefined\") {\n\t    font.v = mod.processing.createFont(name.v, size.v, s" +
                "mooth.v);\n\t} else {\n\t    font.v = mod.processing.createFont(name.v, size.v, " +
                "smooth.v, charset.v);\n\t}\n\treturn font;\n    });\n\n    mod.createGraphics = " +
                "new Sk.builtin.func(function (width, height, renderer, filename) {\n\t// createG" +
                "raphics(width, height, renderer)\n\t// createGraphics(width, height, renderer, f" +
                "ilename)\n\tvar graphics = Sk.misceval.callsim(mod.PGraphics);\n        if (type" +
                "of(filename) === \"undefined\") {\n\t    graphics.v = mod.processing.createGraph" +
                "ics(width.v, height.v, renderer.v);\n\t} else {\n\t    graphics.v = mod.processi" +
                "ng.createGraphics(width.v, height.v, renderer.v, filename.v);\n\t}\n\treturn gra" +
                "phics;\n    });\n\n    mod.createImage = new Sk.builtin.func(function (width, he" +
                "ight, format) {\n\tvar image = Sk.misceval.callsim(mod.PImage);\n\timage.v = mod" +
                ".processing.createImage(width.v, height.v, format.v);\n\treturn image;\n    });" +
                "\n\n    mod.cursor = new Sk.builtin.func(function (v, x, y) {\n\t// cursor()\n\t" +
                "// cursor(MODE)\n\t// cursor(image,x,y)\n        if (typeof(v) === \"undefined\"" +
                ") {\n\t    mod.processing.cursor();\n\t} else if (typeof(x) === \"undefined\") {" +
                "\n\t    mod.processing.cursor(v.v);\n\t} else if (typeof(y) === \"undefined\") {" +
                "\n\t    mod.processing.cursor(v.v, x.v);\n\t} else {\n\t    mod.processing.curso" +
                "r(v.v, x.v, y.v);\n\t}\n    });\n\n    mod.curve = new Sk.builtin.func(function " +
                "(v1, v2, v3, v4,\n\t\t\t\t\t      v5, v6, v7, v8,\n\t\t\t\t\t      v9, v10, v11," +
                " v12) {\n\t// curve(x1, y1, x2, y2, x3, y3, x4, y4);\n\t// curve(x1, y1, z1, x2," +
                " y2, z2, x3, y3, z3, x4, y4, z4);\n        if (typeof(v9) === \"undefined\") {\n" +
                "\t    mod.processing.curve(v1.v, v2.v, v3.v, v4.v,\n\t\t\t\t v5.v, v6.v, v7.v, v" +
                "8.v);\n\t} else if (typeof(v10) === \"undefined\") {\n\t    mod.processing.curve" +
                "(v1.v, v2.v, v3.v, v4.v,\n\t\t\t\t v5.v, v6.v, v7.v, v8.v,\n\t\t\t\t v9.v);\n\t}" +
                " else if (typeof(v11) === \"undefined\") {\n\t    mod.processing.curve(v1.v, v2." +
                "v, v3.v, v4.v,\n\t\t\t\t v5.v, v6.v, v7.v, v8.v,\n\t\t\t\t v9.v, v10.v);\n\t} el" +
                "se if (typeof(v12) === \"undefined\") {\n\t    mod.processing.curve(v1.v, v2.v, " +
                "v3.v, v4.v,\n\t\t\t\t v5.v, v6.v, v7.v, v8.v,\n\t\t\t\t v9.v, v10.v, v11.v);\n\t" +
                "} else {\n\t    mod.processing.curve(v1.v, v2.v, v3.v, v4.v,\n\t\t\t\t v5.v, v6." +
                "v, v7.v, v8.v,\n\t\t\t\t v9.v, v10.v, v11.v, v12.v);\n\t}\n    });\n\n    mod.cu" +
                "rveDetail = new Sk.builtin.func(function (detail) {\n\t// curveDetail(detail)\n" +
                "\tmod.processing.curveDetail(detail.v);\n    });\n\n    mod.curvePoint = new Sk." +
                "builtin.func(function (a,b,c,d,t) {\n\t// curvePoint(a,b,c,d,t)\n\tmod.processin" +
                "g.curvePoint(a.v,b.v,c.v,d.v,t.v);\n    });\n\n    mod.curveTangent = new Sk.bui" +
                "ltin.func(function (a,b,c,d,t) {\n\t// curveTangent(a,b,c,d,t)\n\tmod.processing" +
                ".curveTangent(a.v,b.v,c.v,d.v,t.v);\n    });\n\n    mod.curveTightness = new Sk." +
                "builtin.func(function (squishy) {\n\t// curveTightness(squishy)\n\tmod.processin" +
                "g.curveTightness(squishy.v);\n    });\n\n    mod.curveVertex = new Sk.builtin.fu" +
                "nc(function (x, y, z) {\n\t// curveVertex(x, y) \n\t// curveVertex(x, y, z)\n   " +
                "     if (typeof(z) === \"undefined\") {\n\t    mod.processing.curveVertex(x.v, y" +
                ".v);\n\t} else {\n\t    mod.processing.curveVertex(x.v, y.v, z.v);\n\t}\n    });" +
                "\n\n    mod.day = new Sk.builtin.func(function () {\n\treturn new Sk.builtin.int" +
                "_(mod.processing.day());\n    });\n\n    mod.degrees = new Sk.builtin.func(funct" +
                "ion (angle) {\n\t// degrees(angle)\n\treturn new Sk.builtin.float_(mod.processin" +
                "g.degrees(angle.v));\n    });\n\n    mod.directionalLight = new Sk.builtin.func(" +
                "function (v1,v2,v3,nx,ny,nz) {\n\t// directionalLight(v1,v2,v3,nx,ny,nz)\n\tmod." +
                "processing.directionalLight(v1.v,v2.v,v3.v,nx.v,ny.v,nz.v);\n    });\n\n    mod." +
                "dist = new Sk.builtin.func(function (x1, y1, z1, x2, y2, z2) {\n\t// dist(x1, y1" +
                ", x2, y2)\n\t// dist(x1, y1, z1, x2, y2, z2)\n        if (typeof(y2) === \"undef" +
                "ined\") {\n\t    return new Sk.builtin.float_(mod.processing.dist(x1.v, y1.v, z1" +
                ".v, x2.v));\n\t} else if (typeof(z2) === \"undefined\") {\n\t    return new Sk.b" +
                "uiltin.float_(mod.processing.dist(x1.v, y1.v, z1.v, x2.v, y2.v));\n\t} else {\n" +
                "\t    return new Sk.builtin.float_(mod.processing.dist(x1.v, y1.v, z1.v, x2.v, y" +
                "2.v, z2.v));\n\t}\n    });\n\n    mod.emissive = new Sk.builtin.func(function (v" +
                "1, v2, v3) {\n\t// emissive(gray)\n\t// emissive(color)\n\t// emissive(v1,v2,v3)" +
                "\n        if (typeof(v2) === \"undefined\") {\n\t    mod.processing.emissive(v1." +
                "v);\n\t} else if (typeof(v3) === \"undefined\") {\n\t    mod.processing.emissive" +
                "(v1.v, v2.v);\n\t} else {\n\t    mod.processing.emissive(v1.v, v2.v, v3.v);\n\t}" +
                "\n    });\n\n    mod.endCamera = new Sk.builtin.func(function () {\n\t// endCame" +
                "ra()\n\tmod.processing.endCamera();\n    });\n\n    mod.endShape = new Sk.builti" +
                "n.func(function (mode) {\n\t// endShape()\n\t// endShape(MODE)\n        if (type" +
                "of(mode) === \"undefined\") {\n\t    mod.processing.endShape();\n\t} else {\n\t " +
                "   mod.processing.endShape(mode.v);\n\t}\n    });\n\n    mod.filter = new Sk.bui" +
                "ltin.func(function (mode, srcImg) {\n\t// filter(MODE)\n\t// filter(MODE, srcImg" +
                ")\n        if (typeof(srcImg) === \"undefined\") {\n\t    mod.processing.filter(" +
                "mode.v);\n\t} else {\n\t    mod.processing.filter(mode.v, srcImg.v);\n\t}\n    }" +
                ");\n\n    mod.frustum = new Sk.builtin.func(function (left, right, bottom, top, " +
                "near, far) {\n\t// frustum(left, right, bottom,top, near, far)\n\tmod.processing" +
                ".frustum(left, right, bottom, top, near, far);\n    });\n\n    mod.hint = new Sk" +
                ".builtin.func(function (item) {\n\t// hint(item)\n\tmod.processing.hint(item);\n" +
                "    });\n\n    mod.hour = new Sk.builtin.func(function () {\n\treturn new Sk.bui" +
                "ltin.int_(mod.processing.hour());\n    });\n\n    mod.hue = new Sk.builtin.func(" +
                "function (color) {\n\t// hue(color)\n\treturn new Sk.builtin.float_(mod.processi" +
                "ng.hue(color.v));\n    });\n\n    mod.imageMode = new Sk.builtin.func(function (" +
                "mode) {\n\tmod.processing.imageMode(mode.v);\n    });\n\n    mod.lerp = new Sk.b" +
                "uiltin.func(function (value1, value2, amt) {\n\t// lerp(value1, value2, amt)\n\t" +
                "// returns float\n\treturn new Sk.builtin.float_(mod.processing.lerp(value1.v, v" +
                "alue2.v, amt.v));\n    });\n\n    mod.lerpColor = new Sk.builtin.func(function (" +
                "c1, c2, amt) {\n\t// lerpColor(c1, c2, amt)\n\t// returns color\n        var c =" +
                " Sk.misceval.callsim(mod.color,\n\t\t\t\t    new Sk.builtin.int_(0),\n\t\t\t\t  " +
                "  new Sk.builtin.int_(0),\n\t\t\t\t    new Sk.builtin.int_(0));\n\tc.v = mod.pro" +
                "cessing.lerpColor(c1.v, c2.v, amt.v);\n\treturn c;\n    });\n\n    mod.lightFall" +
                "off = new Sk.builtin.func(function (constant, linear, quadratic) {\n\t// lightFa" +
                "lloff(constant,linear,quadratic)\n\tmod.processing.lightFalloff(constant.v, line" +
                "ar.v, quadratic.v);\n    });\n\n    mod.lights = new Sk.builtin.func(function ()" +
                " {\n\tmod.processing.lights();\n    });\n\n    mod.lightSpecular = new Sk.builti" +
                "n.func(function (v1, v2, v3) {\n\t// lightSpecular(v1,v2,v3)\n\tmod.processing.l" +
                "ightSpecular(v1.v, v2.v, v3.v);\n    });\n\n    mod.loadBytes = new Sk.builtin.f" +
                "unc(function (filename) {\n\t// loadBytes(filename)\n\t// returns byte[]\n\tretu" +
                "rn new Sk.builtin.list(mod.processing.loadBytes(filename.v));\n    });\n\n    mo" +
                "d.loadFont = new Sk.builtin.func(function (fontname) {\n\t// loadFont(fontname)" +
                "\n\t// returns font\n\tvar font = Sk.misceval.callsim(mod.PFont);\n\tfont.v = mo" +
                "d.processing.loadFont(fontname.v);\n\treturn font;\n    });\n\n    mod.loadShape" +
                " = new Sk.builtin.func(function (filename) {\n\t// loadShape(filename)\n\t// ret" +
                "urns shape\n\tvar shape = Sk.misceval.callsim(mod.PShapeSVG, \n\t\t\t\t\tnew Sk." +
                "builtin.str(\"string\"),\n\t\t\t\t\tfilename);\n\treturn shape;\n    });\n\n    " +
                "mod.loadStrings = new Sk.builtin.func(function (filename) {\n\t// loadStrings(fi" +
                "lename)\n\t// returns string []\n\treturn new Sk.builtin.list(mod.processing.loa" +
                "dStrings(filename.v));\n    });\n\n    mod.mag = new Sk.builtin.func(function (a" +
                ", b, c) {\n\t// mag(a,b)\n\t// mag(a,b,c)\n\t// returns magnitude as float\n    " +
                "    if (typeof(c) === \"undefined\") {\n\t    return new Sk.builtin.float_(mod.p" +
                "rocessing.mag(a.v, b.v));\n        } else {\n\t    return new Sk.builtin.float_(" +
                "mod.processing.mag(a.v, b.v, c.v));\n\t}\n    });\n\n    mod.map = new Sk.builti" +
                "n.func(function (value,low1,high1,low2,high2) {\n\t// map(value,low1,high1,low2," +
                "high2)\n\t// returns float\n\treturn new Sk.builtin.float_(mod.processing.map(va" +
                "lue.v,low1.v,high1.v,\n\t\t\t\t\t\t   low2.v,high2.v));\n    });\n\n    mod.mill" +
                "is = new Sk.builtin.func(function () {\n\treturn new Sk.builtin.int_(mod.process" +
                "ing.millis());\n    });\n\n    mod.minute = new Sk.builtin.func(function () {\n" +
                "\treturn new Sk.builtin.int_(mod.processing.minute());\n    });\n\n    mod.model" +
                "X = new Sk.builtin.func(function (x, y, z) {\n\t// modelX(x,y,z)\n\t// returns f" +
                "loat\n\treturn new Sk.builtin.float_(mod.processing.modelX(x.v, y.v, z.v));\n   " +
                " });\n\n    mod.modelY = new Sk.builtin.func(function (x, y, z) {\n\t// modelY(x" +
                ",y,z)\n\t// returns float\n\treturn new Sk.builtin.float_(mod.processing.modelY(" +
                "x.v, y.v, z.v));\n    });\n\n    mod.modelZ = new Sk.builtin.func(function (x, y" +
                ", z) {\n\t// modelZ(x,y,z)\n\t// returns float\n\treturn new Sk.builtin.float_(m" +
                "od.processing.modelZ(x.v, y.v, z.v));\n    });\n\n    mod.month = new Sk.builtin" +
                ".func(function () {\n\treturn new Sk.builtin.int_(mod.processing.month());\n    " +
                "});\n\n    mod.noCursor = new Sk.builtin.func(function () {\n\tmod.processing.no" +
                "Cursor();\n    });\n\n    mod.noise = new Sk.builtin.func(function (x, y, z) {\n" +
                "\t// noise(x)\n\t// noise(x, y)\n\t// noise(x, y, z)\n\t// returns float\n      " +
                "  if (typeof(y) === \"undefined\") {\n\t    return new Sk.builtin.float_(mod.pro" +
                "cessing.noise(x.v));\n        } else if (typeof(z) === \"undefined\") {\n\t    r" +
                "eturn new Sk.builtin.float_(mod.processing.noise(x.v, y.v));\n        } else {\n" +
                "\t    return new Sk.builtin.float_(mod.processing.noise(x.v, y.v, z.v));\n\t}\n " +
                "   });\n\n    mod.noiseDetail = new Sk.builtin.func(function (octaves, falloff) " +
                "{\n\t// noiseDetail(octaves);\n\t// noiseDetail(octaves,falloff);\n\tmod.process" +
                "ing.noiseDetail(octaves.v, falloff.v);\n    });\n\n    mod.noiseSeed = new Sk.bu" +
                "iltin.func(function (value) {\n\t// noiseSeed(value); int\n\t// returns float\n" +
                "\treturn new Sk.builtin.float_(mod.processing.noiseSeed(value.v));\n    });\n\n " +
                "   mod.noLights = new Sk.builtin.func(function () {\n\tmod.processing.noLights()" +
                ";\n    });\n\n    mod.norm = new Sk.builtin.func(function (value, low, high) {\n" +
                "\t// norm(value, low, high)\n\t// returns float\n\treturn new Sk.builtin.float_(" +
                "mod.processing.norm(value.v, low.v, high.v));\n    });\n\n    mod.normal = new S" +
                "k.builtin.func(function (nx, ny, nz) {\n\t// normal(nx,ny,nz)\n\t// returns None" +
                "\n\tmod.processing.normal(nx.v, ny.v, nz.v);\n    });\n\n    mod.noTint = new Sk" +
                ".builtin.func(function () {\n\tmod.processing.noTint();\n    });\n\n    mod.orth" +
                "o = new Sk.builtin.func(function (left, right, bottom, top, near, far) {\n\t// o" +
                "rtho(left, right, bottom,top, near,far)\n\t// returns None\n\tmod.processing.ort" +
                "ho(left.v, right.v, bottom.v, top.v, near.v, far.v);\n    });\n\n    mod.perspec" +
                "tive = new Sk.builtin.func(function (fov, aspect, zNear, zFar) {\n\t// perspecti" +
                "ve()\n\t// perspective(fov, aspect, zNear, zFar)\n\t// returns None\n        if " +
                "(typeof(fov) === \"undefined\") {\n\t    mod.processing.perspective();\n        " +
                "} else if (typeof(aspect) === \"undefined\") {\n\t    mod.processing.perspective" +
                "(fov.v);\n        } else if (typeof(zNear) === \"undefined\") {\n\t    mod.proce" +
                "ssing.perspective(fov.v, aspect.v);\n        } else if (typeof(zFar) === \"undef" +
                "ined\") {\n\t    mod.processing.perspective(fov.v, aspect.v, zNear.v);\n        " +
                "} else {\n\t    mod.processing.perspective(fov.v, aspect.v, zNear.v, zFar.v);\n" +
                "\t}\n    });\n\n    mod.pointLight = new Sk.builtin.func(function (v1,v2,v3,nx,n" +
                "y,nz) {\n\t// pointLight(v1,v2,v3,nx,ny,nz)\n\t// returns None\n\tmod.processing" +
                ".pointLight(v1.v,v2.v,v3.v,nx.v,ny.v,nz.v);\n    });\n\n    mod.printCamera = ne" +
                "w Sk.builtin.func(function () {\n\t// printCamera()\n\t// returns None\n\tmod.pr" +
                "ocessing.printCamera();\n    });\n\n    mod.println = new Sk.builtin.func(functi" +
                "on (data) {\n\t// println(data)\n\tmod.processing.println(data.v);\n    });\n\n " +
                "   mod.printProjection = new Sk.builtin.func(function () {\n\t// printProjection" +
                "()\n\t// returns None\n\tmod.processing.printProjection();\n    });\n\n    mod.r" +
                "adians = new Sk.builtin.func(function (angle) {\n\t// radians(angle)\n\t// retur" +
                "ns int or float\n\treturn new Sk.builtin.float_(mod.processing.radians(angle.v))" +
                ";\n    });\n\n    mod.randomSeed = new Sk.builtin.func(function (value) {\n\t// " +
                "noiseSeed(value);\n\t// returns float\n\treturn new Sk.builtin.float_(mod.proces" +
                "sing.randomSeed(value.v));\n    });\n\n    mod.random = new Sk.builtin.func(func" +
                "tion (v1, v2) {\n\t// random();\n\t// random(high);\n\t// random(low, high);\n\t" +
                "// returns float\n        if (typeof(v1) === \"undefined\") {\n\t    return new " +
                "Sk.builtin.float_(mod.processing.random());\n        } else if (typeof(v2) === " +
                "\"undefined\") {\n\t    return new Sk.builtin.float_(mod.processing.random(v1.v)" +
                ");\n        } else {\n\t    return new Sk.builtin.float_(mod.processing.random(v" +
                "1.v, v2.v));\n\t}\n    });\n\n    mod.requestImage = new Sk.builtin.func(functio" +
                "n (filename, extension) {\n\t// requestImage(filename)\n\t// requestImage(filena" +
                "me, extension)\n\tvar image = Sk.misceval.callsim(mod.PImage);\n        if (type" +
                "of(extension) === \"undefined\") {\n\t    image.v = mod.processing.requestImage(" +
                "filename.v);\n        } else {\n\t    image.v = mod.processing.requestImage(file" +
                "name.v, extension.v);\n\t}\n\treturn image;\n    });\n\n    mod.saturation = new" +
                " Sk.builtin.func(function (color) {\n\t// saturation(color)\n\t// returns float" +
                "\n\treturn new Sk.builtin.float_(mod.processing.saturation(color.v));\n    });\n" +
                "\n    mod.save = new Sk.builtin.func(function (filename) {\n\t// save(filename)" +
                "\n\t// returns None\n\tmod.processing.save(filename.v);\n    });\n\n    mod.save" +
                "Frame = new Sk.builtin.func(function (filename) {\n\t// saveFrame()\n\t// saveFr" +
                "ame(filename-####.ext)\n\t// returns None\n        if (typeof(filename) === \"un" +
                "defined\") {\n\t    mod.processing.saveFrame();\n        } else {\n\t    mod.pro" +
                "cessing.saveFrame(filename.v);\n\t}\n    });\n\n    mod.saveStrings = new Sk.bui" +
                "ltin.func(function (filename, strings) {\n\t// saveStrings(filename,strings)\n\t" +
                "mod.processing.saveStrings(filename.v, strings.v);\n    });\n\n    mod.screenX =" +
                " new Sk.builtin.func(function (x, y, z) {\n\t// screenX(x,y,z)\n\t// returns flo" +
                "at\n\treturn new Sk.builtin.float_(mod.processing.screenX(x.v, y.v, z.v));\n    " +
                "});\n\n    mod.screenY = new Sk.builtin.func(function (x, y, z) {\n\t// screenY(" +
                "x,y,z)\n\t// returns float\n\treturn new Sk.builtin.float_(mod.processing.screen" +
                "Y(x.v, y.v, z.v));\n    });\n\n    mod.screenZ = new Sk.builtin.func(function (x" +
                ", y, z) {\n\t// screenZ(x,y,z)\n\t// returns float\n\treturn new Sk.builtin.floa" +
                "t_(mod.processing.screenZ(x.v, y.v, z.v));\n    });\n\n    mod.second = new Sk.b" +
                "uiltin.func(function () {\n\treturn new Sk.builtin.int_(mod.processing.second())" +
                ";\n    });\n\n    mod.shape = new Sk.builtin.func(function (sh, x, y, width, hei" +
                "ght) {\n\t// shape(sh)\n\t// shape(sh,x,y)\n\t// shape(sh,x,y,width,height)\n\t/" +
                "/ returns?\n        if (typeof(x) === \"undefined\") {\n\t    mod.processing.sha" +
                "pe(sh.v);\n        } else if (typeof(y) === \"undefined\") {\n\t    mod.processi" +
                "ng.shape(sh.v,x.v);\n        } else if (typeof(width) === \"undefined\") {\n\t  " +
                "  mod.processing.shape(sh.v,x.v,y.v);\n        } else if (typeof(height) === \"u" +
                "ndefined\") {\n\t    mod.processing.shape(sh.v,x.v,y.v,width.v);\n        } else" +
                " {\n\t    mod.processing.shape(sh.v,x.v,y.v,width.v,height.v);\n\t}\n    });\n\n" +
                "    mod.shapeMode = new Sk.builtin.func(function (mode) {\n\t// shapeMode(MODE)" +
                "\n\tmod.processing.shapeMode(mode.v);\n    });\n\n    mod.shininess = new Sk.bui" +
                "ltin.func(function (shine) {\n\t// shininess(shine)\n\t// returns None\n\tmod.pr" +
                "ocessing.shininess(shine.v);\n    });\n\n    mod.specular = new Sk.builtin.func(" +
                "function (v1,v2,v3) {\n\t// specular(gray)\n\t// specular(color)\n\t// specular(" +
                "v1,v2,v3)\n        if (typeof(v2) === \"undefined\") {\n\t    mod.processing.spe" +
                "cular(v1.v);\n        } else if (typeof(v3) === \"undefined\") {\n\t    mod.proc" +
                "essing.specular(v1.v,v2.v);\n        } else {\n\t    mod.processing.specular(v1." +
                "v,v2.v,v3.v);\n\t}\n    });\n\n    mod.spotLight = new Sk.builtin.func(function " +
                "(v1,v2,v3,nx,ny,nz,angle,concentration) {\n\t// spotLight(v1,v2,v3,nx,ny,nz,angl" +
                "e,concentration)\n\t// returns None\n\tmod.processing.spotLight(v1.v,v2.v,v3.v,n" +
                "x.v,ny.v,nz.v,angle.v,concentration.v);\n    });\n\n    mod.sq = new Sk.builtin." +
                "func(function (value) {\n\t// sq(value)\n\t// returns squared number\n\treturn n" +
                "ew Sk.builtin.float_(mod.processing.sq(value));\n    });\n\n    mod.status = new" +
                " Sk.builtin.func(function (text) {\n\t// status(text)\n\tmod.processing.status(t" +
                "ext.v);\n    });\n\n    mod.textAlign = new Sk.builtin.func(function (align, yal" +
                "ign) {\n\t// textAlign(ALIGN)\n\t// textAlign(ALIGN, YALIGN)\n\t// returns None" +
                "\n        if (typeof(yalign) === \"undefined\") {\n\t    mod.processing.textAlig" +
                "n(align.v);\n        } else {\n\t    mod.processing.textAlign(align.v, yalign.v)" +
                ";\n\t}\n    });\n\n    mod.textAscent = new Sk.builtin.func(function () {\n\t// " +
                "returns float\n\treturn new Sk.builtin.float_(mod.processing.textAscent());\n   " +
                " });\n\n    mod.textDescent = new Sk.builtin.func(function () {\n\t// returns fl" +
                "oat\n\treturn new Sk.builtin.float_(mod.processing.textDescent());\n    });\n\n " +
                "   mod.textFont = new Sk.builtin.func(function (font, size) {\n\t// textFont(fon" +
                "t)\n\t// textFont(font, size)\n        if (typeof(size) === \"undefined\") {\n\t" +
                "    mod.processing.textFont(font.v);\n        } else {\n\t    mod.processing.tex" +
                "tFont(font.v, size.v);\n\t}\n    });\n\n    mod.textLeading = new Sk.builtin.fun" +
                "c(function (dist) {\n\t// textLeading(dist)\n\t// returns None\n\tmod.processing" +
                ".textLeading(dist.v);\n    });\n\n    mod.textMode = new Sk.builtin.func(functio" +
                "n (mode) {\n\t// textMode(MODE)\n\t// returns None\n\tmod.processing.textMode(mo" +
                "de.v);\n    });\n\n    mod.textSize = new Sk.builtin.func(function (size) {\n\t/" +
                "/ textSize(size)\n\t// returns None\n\tmod.processing.textSize(size.v);\n    });" +
                "\n\n    mod.texture = new Sk.builtin.func(function (img) {\n\t// texture(img)\n" +
                "\t// returns None\n\tmod.processing.texture(img.v);\n    });\n\n    mod.textureM" +
                "ode = new Sk.builtin.func(function (mode) {\n\t// textureMode(MODE)\n\t// return" +
                "s None\n\tmod.processing.textureMode(mode.v);\n    });\n\n    mod.textWidth = ne" +
                "w Sk.builtin.func(function (data) {\n\t// textWidth(data)\n\t// returns float\n" +
                "\treturn new Sk.builtin.float_(mod.processing.textWidth(data.v));\n    });\n\n  " +
                "  mod.tint = new Sk.builtin.func(function (v1, v2, v3, v4) {\n\t// tint(gray)\n" +
                "\t// tint(gray, alpha)\n\t// tint(value1, value2, value3)\n\t// tint(value1, val" +
                "ue2, value3, alpha)\n\t// tint(color)\n\t// tint(color, alpha)\n\t// tint(hex)\n" +
                "\t// tint(hex, alpha)\n        if (typeof(v2) === \"undefined\") {\n\t    mod.pr" +
                "ocessing.tint(v1.v);\n        } else if (typeof(v3) === \"undefined\") {\n\t    " +
                "mod.processing.tint(v1.v, v2.v);\n        } else if (typeof(v4) === \"undefined" +
                "\") {\n\t    mod.processing.tint(v1.v, v2.v, v3.v);\n        } else {\n\t    mod" +
                ".processing.tint(v1.v, v2.v, v3.v, v4.v);\n\t}\n    });\n\n    mod.updatePixels " +
                "= new Sk.builtin.func(function () {\n\t// updatePixels()\n\tmod.processing.updat" +
                "ePixels();\n    });\n\n    mod.vertex = new Sk.builtin.func(function (x, y, z, u" +
                ", v) {\n\t// vertex(x, y); \n\t// vertex(x, y, z); \n\t// vertex(x, y, u, v); \n" +
                "\t// vertex(x, y, z, u, v);\n        if (typeof(z) === \"undefined\") {\n\t    m" +
                "od.processing.vertex(x.v, y.v);\n        } else if (typeof(u) === \"undefined\")" +
                " {\n\t    mod.processing.vertex(x.v, y.v, z.v);\n        } else if (typeof(v) ==" +
                "= \"undefined\") {\n\t    mod.processing.vertex(x.v, y.v, z.v, u.v);\n        } " +
                "else {\n\t    mod.processing.vertex(x.v, y.v, z.v, u.v, v.v);\n\t}\n    });\n\n " +
                "   mod.year = new Sk.builtin.func(function () {\n\treturn new Sk.builtin.int_(mo" +
                "d.processing.year());\n    });\n\n    // 3D Primitives\n\n    mod.box = new Sk.b" +
                "uiltin.func(function(size) {\n        mod.processing.box(size.v);\n    });\n\n  " +
                "  mod.sphere = new Sk.builtin.func(function(radius) {\n        mod.processing.sp" +
                "here(radius.v);\n    });\n\n    mod.sphereDetail = new Sk.builtin.func(function(" +
                "res,vres) {\n        if (typeof(vres) === \"undefined\") {\n            mod.proc" +
                "essing.sphereDetail(res.v);\n        }\n        else {\n            mod.processi" +
                "ng.sphereDetail(res.v, vres.v);\n        }\n    });\n\n    // Color\n    mod.bac" +
                "kground = new Sk.builtin.func(function (r, g, b) {\n\n        if (typeof(g) !== " +
                "\"undefined\") {\n            g = g.v;\n        }\n        if (typeof(b) !== \"u" +
                "ndefined\") {\n            b = b.v;\n        }\n\n        mod.processing.backgro" +
                "und(r.v, g, b);\n\n    });\n\n    mod.fill = new Sk.builtin.func(function (r, g," +
                " b, alpha) {\n        // r will be either:\n        //      a number in which ca" +
                "se the fill will be grayscale\n        //      a color object\n        // g, and" +
                " b may be undefined.  If they hold values it will\n        // be assumed that we" +
                " have an r,g,b color tuple\n        // alpha may also be undefined - if defined," +
                " it is the opacity of the fill\n        if (typeof(g) !== \"undefined\") {\n    " +
                "        g = g.v;\n        }\n        if (typeof(b) !== \"undefined\") {\n       " +
                "     b = b.v;\n        }\n        if (typeof(alpha) !== \"undefined\") {\n      " +
                "      alpha = alpha.v;\n        }\n\n        mod.processing.fill(r.v, g, b, alph" +
                "a);\n\n    });\n\n\n    mod.stroke = new Sk.builtin.func(function (r, g, b) {\n" +
                "\n        if (typeof(g) !== \"undefined\") {\n            g = g.v;\n        }\n " +
                "       if (typeof(b) !== \"undefined\") {\n            b = b.v;\n        }\n\n  " +
                "      mod.processing.stroke(r.v, g, b);\n\n    });\n\n    mod.noStroke = new Sk." +
                "builtin.func(function () {\n        mod.processing.noStroke();\n    });\n\n\n   " +
                " mod.colorMode = new Sk.builtin.func(function (mode, maxV, maxG, maxB, maxAlpha)" +
                " {\n        // mode is one of RGB or HSB\n        // maxV is either the max valu" +
                "e for all color elements\n        // or the range for Red/Hue (depending on mode" +
                ") if maxG and maxB are defined\n        if (typeof(maxV) === \"undefined\") {\n " +
                "           maxV = 255;\n        }\n        else {\n            maxV = maxV.v;\n " +
                "       }\n        if (typeof(maxG) !== \"undefined\") {\n            maxG = maxG" +
                ".v;\n        }\n        if (typeof(maxB) !== \"undefined\") {\n            maxB " +
                "= maxB.v;\n        }\n        if (typeof(maxAlpha) !== \"undefined\") {\n       " +
                "     maxAlpha = maxAlpha.v;\n        }\n\n        mod.processing.colorMode(mode." +
                "v, maxV, maxG, maxB, maxAlpha);\n    });\n\n    mod.noFill = new Sk.builtin.func" +
                "(function () {\n        mod.processing.noFill();\n    });\n\n\n    // Environmen" +
                "t\n\n    mod.loop = new Sk.builtin.func(function () {\n        if (mod.processin" +
                "g === null) {\n            throw new Sk.builtin.Exception(\"loop() should be cal" +
                "led after run()\");\n        }\n        looping = true;\n        mod.processing." +
                "loop();\n    });\n\n    mod.noLoop = new Sk.builtin.func(function () {\n        " +
                "if (mod.processing === null) {\n            throw new Sk.builtin.Exception(\"noL" +
                "oop() should be called after run()\");\n        }\n        looping = false;\n   " +
                "     mod.processing.noLoop();\n    });\n\n    // NOTE: difference with Processin" +
                "gJS\n    // frameRate is only a function, not a variable: \n    // use environme" +
                "nt.frameRate for value\n    mod.frameRate = new Sk.builtin.func(function (fr) {" +
                "\n        mod.processing.frameRate(fr.v);\n    });\n\n    // NOTE: difference wi" +
                "th ProcessingJS\n    // Use mouse.pressed rather than mousePressed\n\n    // NOT" +
                "E: difference with ProcessingJS\n    // Use environment.keyPressed rather than k" +
                "eyPressed\n\n    // NOTE: difference with ProcessingJS\n    // Use environment.f" +
                "rameCount \n\n    // NOTE: difference with ProcessingJS\n    // Use environment." +
                "frameCount\n    \n    // NOTE: difference with ProcessingJS\n    // Use environm" +
                "ent.online\n\n    // NOTE: difference with ProcessingJS\n    // Use environment." +
                "focused\n\n    mod.width = new Sk.builtin.int_(100);\n    mod.height = new Sk.bu" +
                "iltin.int_(100);\n\n    mod.size = new Sk.builtin.func(function (w, h, mode) {\n" +
                "        if (typeof(mode) === \"undefined\") {\n            mode = mod.P2D;\n    " +
                "    }\n        mod.processing.size(w.v, h.v, mode.v);\n\tmod.width = new Sk.buil" +
                "tin.int_(mod.processing.width);\n\tmod.height = new Sk.builtin.int_(mod.processi" +
                "ng.height);\n    });\n\n    mod.exitp = new Sk.builtin.func(function (h, w) {\n " +
                "       mod.processing.exit();\n    });\n\n    // NOTE: difference with Processin" +
                "gJS\n    // Use mouseX() or mouse.x rather than mouseX\n    mod.mouseX = new Sk." +
                "builtin.func(function () {\n        return new Sk.builtin.int_(mod.processing.mo" +
                "useX);\n    });\n\n    // NOTE: difference with ProcessingJS\n    // Use mouseY(" +
                ") or mouse.y rather than mouseY\n    mod.mouseY = new Sk.builtin.func(function (" +
                ") {\n        return new Sk.builtin.int_(mod.processing.mouseY);\n    });\n\n    " +
                "// NOTE: difference with ProcessingJS\n    // Use pmouseX() or mouse.px rather t" +
                "han pmouseX\n    mod.pmouseX = new Sk.builtin.func(function () {\n        return" +
                " new Sk.builtin.int_(mod.processing.pmouseX);\n    });\n\n    // NOTE: differenc" +
                "e with ProcessingJS\n    // Use pmouseY() or mouse.py rather than pmouseY\n    m" +
                "od.pmouseY = new Sk.builtin.func(function () {\n        return new Sk.builtin.in" +
                "t_(mod.processing.pmouseY);\n    });\n\n    // Attributes\n    mod.rectMode = ne" +
                "w Sk.builtin.func(function (mode) {\n        mod.processing.rectMode(mode.v);\n " +
                "   });\n\n    mod.strokeWeight = new Sk.builtin.func(function (wt) {\n        mo" +
                "d.processing.strokeWeight(wt.v);\n\n    });\n\n    mod.smooth = new Sk.builtin.f" +
                "unc(function () {\n        mod.processing.smooth();\n    });\n\n    mod.noSmooth" +
                " = new Sk.builtin.func(function () {\n        mod.processing.noSmooth();\n    })" +
                ";\n\n    mod.ellipseMode = new Sk.builtin.func(function (mode) {\n        mod.pr" +
                "ocessing.ellipseMode(mode.v);\n    });\n\n    mod.strokeCap = new Sk.builtin.fun" +
                "c(function (mode) {\n        mod.processing.strokeCap(mode.v);\n    });\n\n    m" +
                "od.strokeJoin = new Sk.builtin.func(function (mode) {\n        mod.processing.st" +
                "rokeJoin(mode.v);\n    });\n\n\n    // Transforms\n    mod.rotate = new Sk.built" +
                "in.func(function (rads) {\n        // rotation in radians\n        mod.processin" +
                "g.rotate(rads.v);\n    });\n\n    mod.rotateX = new Sk.builtin.func(function(rad" +
                "s) {\n        mod.processing.rotateX(rads.v);\n    });\n\n    mod.rotateY = new " +
                "Sk.builtin.func(function(rads) {\n        mod.processing.rotateY(rads.v);\n    }" +
                ");\n\n    mod.rotateZ = new Sk.builtin.func(function(rads) {\n        mod.proces" +
                "sing.rotateZ(rads.v);\n    });\n\n    mod.scale = new Sk.builtin.func(function (" +
                "sx, sy, sz) {\n        if (typeof(sy) === \"undefined\") {\n            sy = 1.0" +
                ";\n        } else {\n            sy = sy.v;\n        }\n        if (typeof(sz) =" +
                "== \"undefined\") {\n            sz = 1.0;\n        } else {\n            sz = s" +
                "z.v;\n        }\n        mod.processing.scale(sx.v, sy, sz);\n    });\n\n    mod" +
                ".translate = new Sk.builtin.func(function (sx, sy, sz) {\n        if (typeof(sy)" +
                " === \"undefined\") {\n            sy = 1.0;\n        } else {\n            sy =" +
                " sy.v;\n        }\n        if (typeof(sz) === \"undefined\") {\n            sz =" +
                " 1.0;\n        } else {\n            sz = sz.v;\n        }\n        mod.processi" +
                "ng.translate(sx.v, sy, sz);\n    });\n\n    mod.popMatrix = new Sk.builtin.func(" +
                "function() {\n        mod.processing.popMatrix();\n    });\n\n    mod.pushMatrix" +
                " = new Sk.builtin.func(function() {\n        mod.processing.pushMatrix();\n    }" +
                ");\n\n    mod.applyMatrix = new Sk.builtin.func(function() {\n        var args =" +
                " Array.prototype.slice.call(arguments, 0, 16),\n            i;\n\n        for (i" +
                " = 0; i < args.length; i++) {\n            args[i] = typeof(args[i]) === \"undef" +
                "ined\" ? 0.0 : args[i].v;\n        }\n\n        mod.processing.applyMatrix.apply" +
                "(mod.processing, args);\n    });\n\n    mod.resetMatrix = new Sk.builtin.func(fu" +
                "nction() {\n        mod.processing.resetMatrix();\n    });\n\n    mod.printMatri" +
                "x = new Sk.builtin.func(function() {\n        return Sk.ffi.remapToPy(mod.proces" +
                "sing.printMatrix());\n    });\n\n    //  ///////////////////////////////////////" +
                "///////////////////////////////\n    //  Run\n    // \n    //  Create the proces" +
                "sing context and setup of calls to setup, draw etc.\n    //\n    //\n    //  ///" +
                "///////////////////////////////////////////////////////////////////    \n    mod" +
                ".run = new Sk.builtin.func(function () {\n        function sketchProc (processin" +
                "g) {\n            mod.processing = processing;\n\n            // processing.setu" +
                "p = function() {\n            //     if Sk.globals[\"setup\"]\n            //   " +
                "      Sk.misceval.callsim(Sk.globals[\"setup\"])\n            // }\n\n\n        " +
                "    // FIXME if no Sk.globals[\"draw\"], then no need for this\n            proc" +
                "essing.draw = function () {\n                // if there are pending image loads" +
                " then just use the natural looping calls to \n                // retry until all" +
                " the images are loaded.  If noLoop was called in setup then make\n              " +
                "  // sure to revert to that after all the images in hand.\n                var w" +
                "ait = false;\n                for (var i in imList) {\n                    if (i" +
                "mList[i].width === 0) {\n                        wait = true;\n                 " +
                "   }\n                }\n                if (wait === true) {\n                 " +
                "   if (looping === true) {\n                        return;\n                   " +
                " }\n                    else {\n                        processing.loop();\n    " +
                "                    return;\n                    }\n\n                } else {\n" +
                "                    if (looping === false) {\n                        processing" +
                ".noLoop();\n                    }\n                }\n\n                mod.fram" +
                "eCount = processing.frameCount;\n                if (Sk.globals[\"draw\"]) {\n  " +
                "              \ttry {\n                   \t    Sk.misceval.callsim(Sk.globals[" +
                "\"draw\"]);\n                    }\n                    catch(e) {\n            " +
                "            Sk.uncaughtException(e);\n                    }\n\t\t\t\t}\n        " +
                "    };\n\n            var callBacks = [\"setup\", \"mouseMoved\", \"mouseClicked" +
                "\", \"mouseDragged\", \"mouseMoved\", \"mouseOut\",\n                \"mouseOver" +
                "\", \"mousePressed\", \"mouseReleased\", \"keyPressed\", \"keyReleased\", \"keyT" +
                "yped\"\n            ];\n            for (var cb in callBacks) {\n               " +
                " if (Sk.globals[callBacks[cb]]) {\n                    processing[callBacks[cb]]" +
                " = new Function(\"try {Sk.misceval.callsim(Sk.globals['\" + callBacks[cb] + \"']" +
                ");} catch(e) {Sk.uncaughtException(e);}\");\n                }\n            }\n " +
                "       }\n\n        var canvas = document.getElementById(Sk.canvas);\n        if" +
                " (canvas.tagName !== \"CANVAS\") {\n            var mydiv = canvas;\n           " +
                " canvas = document.createElement('canvas');\n            while (mydiv.firstChild" +
                ") {\n                mydiv.removeChild(mydiv.firstChild);\n            }\n      " +
                "      mydiv.appendChild(canvas);\n        }\n        window.$(canvas).show();\n " +
                "       window.Processing.logger = { log : function(message) {\n            Sk.mi" +
                "sceval.print_(message);\n        }};\n        // if a Processing instance alread" +
                "y exists it's likely still running, stop it by exiting\n        instance = windo" +
                "w.Processing.getInstanceById(Sk.canvas);\n        if (instance) {\n            i" +
                "nstance.exit();\n        }\n        mod.p = new window.Processing(canvas, sketch" +
                "Proc);\n\n\n    });\n\n    mouseClass = function ($gbl, $loc) {\n\n        $loc." +
                "__getattr__ = new Sk.builtin.func(function (self, key) {\n\t    key = Sk.ffi.rem" +
                "apToJs(key);\n            if (key === \"x\") {\n                return Sk.builti" +
                "n.assk$(mod.processing.mouseX);\n            }\n            else if (key === \"y" +
                "\") {\n                return Sk.builtin.assk$(mod.processing.mouseY);\n        " +
                "    }\n            else if (key === \"px\") {\n                return Sk.builtin" +
                ".assk$(mod.processing.pmouseX);\n            }\n            else if (key === \"p" +
                "y\") {\n                return Sk.builtin.assk$(mod.processing.pmouseY);\n      " +
                "      }\n            else if (key === \"pressed\") {\n                    return" +
                " new Sk.builtin.bool(mod.processing.__mousePressed);\n            }\n           " +
                " else if (key === \"button\") {\n                return Sk.builtin.assk$(mod.pro" +
                "cessing.mouseButton);\n            }\n        });\n\n    };\n\n\n    mod.Mouse =" +
                " Sk.misceval.buildClass(mod, mouseClass, \"Mouse\", []);\n\n    mod.mouse = Sk.m" +
                "isceval.callsim(mod.Mouse);\n\n    keyboardClass = function ($gbl, $loc) {\n\n  " +
                "      $loc.__getattr__ = new Sk.builtin.func(function (self, key) {\n\t    key =" +
                " Sk.ffi.remapToJs(key);\n            if (key === \"key\") {\n                ret" +
                "urn new Sk.builtin.str(mod.processing.key.toString());\n            }\n         " +
                "   else if (key === \"keyCode\") {\n                return Sk.builtin.assk$(mod." +
                "processing.keyCode);\n            }\n            else if (key === \"keyPressed\"" +
                ") {\n                return new Sk.builtin.str(mod.processing.keyPressed);\n    " +
                "        } // todo bool\n        });\n\n    };\n\n    mod.Keyboard = Sk.misceval." +
                "buildClass(mod, keyboardClass, \"Keyboard\", []);\n\n    mod.keyboard = Sk.misce" +
                "val.callsim(mod.Keyboard);\n\n\n    environmentClass = function ($gbl, $loc) {\n" +
                "\n        $loc.__getattr__ = new Sk.builtin.func(function (self, key) {\n\t    k" +
                "ey = Sk.ffi.remapToJs(key);\n            if (key === \"frameCount\") {\n        " +
                "        return Sk.builtin.assk$(mod.processing.frameCount);\n            }\n    " +
                "        else if (key === \"frameRate\") {\n                return Sk.builtin.ass" +
                "k$(mod.processing.frameRate);\n            }\n            else if (key === \"hei" +
                "ght\") {\n                return Sk.builtin.assk$(mod.processing.height);\n     " +
                "       }\n            else if (key === \"width\") {\n                return Sk.b" +
                "uiltin.assk$(mod.processing.width);\n            }\n            else if (key ===" +
                " \"online\") {\n                return new Sk.builtin.bool(mod.processing.online" +
                ");\n            }\n            else if (key === \"focused\") {\n                " +
                "return new Sk.builtin.bool(mod.processing.focused);\n            }\n        });" +
                "\n\n    };\n\n    mod.Environment = Sk.misceval.buildClass(mod, environmentClass" +
                ", \"Environment\", []);\n\n    mod.environment = Sk.misceval.callsim(mod.Environ" +
                "ment);\n\n    screenClass = function ($gbl, $loc) {\n\n        $loc.__init__ = n" +
                "ew Sk.builtin.func(function (self) {\n            self.pixels = null;\n        }" +
                ");\n\n        $loc.__getattr__ = new Sk.builtin.func(function (self, key) {\n\t " +
                "   key = Sk.ffi.remapToJs(key);\n            if (key === \"height\") {\n        " +
                "        return Sk.builtin.assk$(mod.processing.height);\n            }\n        " +
                "    else if (key === \"width\") {\n                return Sk.builtin.assk$(mod.p" +
                "rocessing.width);\n            }\n            else if (key === \"pixels\") {\n  " +
                "              if (self.pixels == null) {\n                    self.pixels = new " +
                "Sk.builtin.list(mod.processing.pixels.toArray());\n                }\n          " +
                "  }\n            return self.pixels;\n        });\n\n    };\n\n    mod.Screen = " +
                "Sk.misceval.buildClass(mod, screenClass, \"Screen\", []);\n\n    mod.screen = Sk" +
                ".misceval.callsim(mod.Screen);\n\n    mod.loadPixels = new Sk.builtin.func(funct" +
                "ion () {\n        mod.processing.loadPixels();\n    });\n\n\n    colorClass = fu" +
                "nction ($gbl, $loc) {\n        /* images are loaded async.. so its best to prelo" +
                "ad them */\n        $loc.__init__ = new Sk.builtin.func(function (self, val1, va" +
                "l2, val3, alpha) {\n            if (typeof(val2) !== \"undefined\") {\n         " +
                "       val2 = val2.v;\n            }\n            if (typeof(val3) !== \"undefin" +
                "ed\") {\n                val3 = val3.v;\n            }\n            if (typeof(a" +
                "lpha) !== \"undefined\") {\n                alpha = alpha.v;\n            }\n   " +
                "         self.v = mod.processing.color(val1.v, val2, val3, alpha);\n        });" +
                "\n\n    };\n\n    mod.color = Sk.misceval.buildClass(mod, colorClass, \"color\"," +
                " []);\n\n    mod.red = new Sk.builtin.func(function (clr) {\n        return new " +
                "Sk.builtin.int_(mod.processing.red(clr.v));\n    });\n\n    mod.green = new Sk.b" +
                "uiltin.func(function (clr) {\n        return new Sk.builtin.int_(mod.processing." +
                "green(clr.v));\n    });\n\n    mod.blue = new Sk.builtin.func(function (clr) {\n" +
                "        return new Sk.builtin.int_(mod.processing.blue(clr.v));\n    });\n\n    " +
                "// Image class and functions\n    //\n    imageClass = function ($gbl, $loc) {\n" +
                "        /* images are loaded async.. so its best to preload them */\n        $lo" +
                "c.__init__ = new Sk.builtin.func(function (self, arg1, arg2, arg3) {\n\t    // P" +
                "Image()\n\t    // PImage(img)\n\t    // PImage(width,height)\n\t    // PImage(wi" +
                "dth,height,format)\n\t    if (typeof(arg1) === \"undefined\") {\n\t\tself.v = ne" +
                "w mod.processing.PImage();\n\t    } else if (typeof(arg2) === \"undefined\") {\n" +
                "\t\tself.v = new mod.processing.PImage(arg1.v);\n\t    } else if (typeof(arg3) =" +
                "== \"undefined\") {\n\t\tself.v = new mod.processing.PImage(arg1.v, arg2.v);\n\t" +
                "    } else {\n\t\tself.v = new mod.processing.PImage(arg1.v, arg2.v, arg3.v);\n" +
                "\t    }\n        });\n\n        $loc.__getattr__ = new Sk.builtin.func(function " +
                "(self, key) {\n\t    key = Sk.ffi.remapToJs(key);\n            if (key === \"wid" +
                "th\") {\n                return Sk.builtin.assk$(self.v.width);\n            }\n" +
                "            if (key === \"height\") {\n                return Sk.builtin.assk$(s" +
                "elf.v.height);\n            }\n        });\n\n    };\n\n    mod.loadImage = new " +
                "Sk.builtin.func(function (imfile) {\n        var i = mod.processing.loadImage(im" +
                "file.v);\n        imList.push(i);\n\tvar image = Sk.misceval.callsim(mod.PImage)" +
                ";\n\timage.v = i;\n        return image;\n    });\n\n    mod.image = new Sk.buil" +
                "tin.func(function (im, x, y, w, h) {\n\t// image(img, x, y)\n\t// image(img, x, " +
                "y, width, height)\n\tif (typeof(w) === \"undefined\") {\n            mod.process" +
                "ing.image(im.v, x.v, y.v);\n\t} else {\n            mod.processing.image(im.v, x" +
                ".v, y.v, w.v, h.v);\n        }\n    });\n\n    mod.get = new Sk.builtin.func(fun" +
                "ction (x, y) {\n        var clr = mod.processing.get(x.v, y.v);\n        return " +
                "Sk.misceval.callsim(mod.color,\n            new Sk.builtin.int_(mod.processing.r" +
                "ed(clr)),\n            new Sk.builtin.int_(mod.processing.green(clr)),\n        " +
                "    new Sk.builtin.int_(mod.processing.blue(clr)));\n    });\n\n    mod.set = ne" +
                "w Sk.builtin.func(function (x, y, color) {\n        mod.processing.set(x.v, y.v," +
                " color.v);\n    });\n\n    // --- classes\n\n    vectorClass = function ($gbl, $" +
                "loc) {\n        $loc.__init__ = new Sk.builtin.func(function (self, x, y, z) {\n" +
                "\t    // PVector()\n\t    // PVector(x,y)\n\t    // PVector(x,y,z)\n            " +
                "if (typeof(x) === \"undefined\") {\n\t\tself.v = new mod.processing.PVector();\n" +
                "            } else if (typeof(z) === \"undefined\") {\n\t\tself.v = new mod.proc" +
                "essing.PVector(x.v, y.v);\n            } else {\n\t\tself.v = new mod.processing" +
                ".PVector(x.v, y.v, z.v);\n\t    }\n        });\n\n        $loc.__getattr__ = new" +
                " Sk.builtin.func(function (self, key) {\n\t    key = Sk.ffi.remapToJs(key);\n   " +
                "         if (key === \"x\") {\n                return Sk.builtin.assk$(self.v.x)" +
                ";\n            } else if (key === \"y\") {\n                return Sk.builtin.as" +
                "sk$(self.v.y);\n            } else if (key === \"z\") {\n                return " +
                "Sk.builtin.assk$(self.v.z);\n\t    }\n\t});\n\t    \n        $loc.get = new Sk.b" +
                "uiltin.func(function (self) {\n\t    // get() Gets a copy of the vector\n       " +
                "     var new_vec = Sk.misceval.callsim(mod.PVector);\n\t    new_vec.v = self.v.g" +
                "et();\n\t    return new_vec;\n\t});\n\t\n\t$loc.set = new Sk.builtin.func(functi" +
                "on (self, x, y, x) {\n\t    // set() Sets the x, y, z component of the vector\n" +
                "\t    if (typeof(z) === \"undefined\") {\n\t\tself.v.set(x.v, y.v);\n\t    } els" +
                "e {\n\t\tself.v.set(x.v, y.v, z.v);\n\t    }\n\t});\n\n\t$loc.mag = new Sk.built" +
                "in.func(function (self) {\n\t    // mag() Calculates the magnitude (length) of t" +
                "he vector\n\t    // and returns the result as a float\n\t    return Sk.builtin.a" +
                "ssk$(self.v.mag());\n\t});\n\n\t$loc.add = new Sk.builtin.func(function (self, v" +
                "ec) {\n\t    // add()\tAdds one vector to another\n            var new_vec = Sk." +
                "misceval.callsim(mod.PVector);\n\t    new_vec.v = self.v.add(vec.v);\n\t    retu" +
                "rn new_vec;\n\t});\n\n\t$loc.sub = new Sk.builtin.func(function (self, vec) {\n" +
                "\t    // sub()\tSubtracts one vector from another\n            var new_vec = Sk." +
                "misceval.callsim(mod.PVector);\n\t    new_vec.v = self.v.sub(vec.v);\n\t    retu" +
                "rn new_vec;\n\t});\n\n\t$loc.mult = new Sk.builtin.func(function (self, vec) {\n" +
                "\t    // mult()\tMultiplies the vector by a scalar\n            var new_vec = Sk" +
                ".misceval.callsim(mod.PVector);\n\t    new_vec.v = self.v.mult(vec.v);\n\t    re" +
                "turn new_vec;\n\t});\n\n\t$loc.div = new Sk.builtin.func(function (self, vec) {" +
                "\n\t    // div()\tDivides the vector by a scalar\n            var new_vec = Sk.m" +
                "isceval.callsim(mod.PVector);\n\t    new_vec.v = self.v.dic(vec.v);\n\t    retur" +
                "n new_vec;\n\t});\n\n\t$loc.dist = new Sk.builtin.func(function (self, vec) {\n" +
                "\t    // dist()\tCalculate the Euclidean distance between two points\n\t    retu" +
                "rn Sk.builtin.assk$(self.v.dist(vec.v));\n\t});\n\n\t$loc.dot = new Sk.builtin.f" +
                "unc(function (self, v1, v2, v3) {\n\t    // dot()\tCalculates the dot product\n" +
                "\t    // returns float\n\t    // vec.dot(x,y,z)\n\t    // vec.dot(v)\t    \n\t  " +
                "  if (typeof(v2) === 'undefined') {\n\t\treturn Sk.builtin.assk$(self.v.dot(v1.v" +
                "));\n\t    } else {\n\t\treturn Sk.builtin.assk$(self.v.dot(v1.v, v2.v, v3.v));" +
                "\n\t    }\n\t});\n\n\t$loc.cross = new Sk.builtin.func(function (self, vec) {\n" +
                "\t    // cross()\tCalculates the cross product\n            var new_vec = Sk.mis" +
                "ceval.callsim(mod.PVector);\n\t    new_vec.v = self.v.cross(vec.v);\n\t    retur" +
                "n new_vec;\n\t});\n\n\t$loc.normalize = new Sk.builtin.func(function (self) {\n" +
                "\t    // normalize()\tNormalizes the vector\n\t    self.v.normalize();\n\t});\n" +
                "\n\t$loc.limit = new Sk.builtin.func(function (self, value) {\n\t    // limit()" +
                "\tLimits the magnitude of the vector\n\t    self.v.limit(value.v);\n\t});\n\n\t$" +
                "loc.angleBetween = new Sk.builtin.func(function (self, vec) {\n\t    // angleBet" +
                "ween()\tCalculates the angle between two vectors\n\t    return Sk.builtin.assk$(" +
                "self.v.angleBetween(vec.v));\n\t});\n\n\t$loc.array = new Sk.builtin.func(functi" +
                "on (self) {\n\t    // array()\t\n\t    return new Sk.builtin.list(self.v.array()" +
                ");\n\t});\n    };\n\n    fontClass = function ($gbl, $loc) {\n        $loc.__ini" +
                "t__ = new Sk.builtin.func(function (self, input) {\n\t    // PFont()\n\t    // P" +
                "Font(input)\n            if (typeof(input) === \"undefined\") {\n\t\tself.v = ne" +
                "w mod.processing.PFont();\n            } else {\n\t\tself.v = new mod.processing" +
                ".PVector(input.v);\n\t    }\n        });\n\n        $loc.list = new Sk.builtin.f" +
                "unc(function (self) {\n\t    // font.list()\n\t    return new Sk.builtin.list(se" +
                "lf.v.list());\n\t});\n    };\n\n    graphicsClass = function ($gbl, $loc) {\n   " +
                "     $loc.__init__ = new Sk.builtin.func(function (self, x, y, z) {\n\t    // PG" +
                "raphics()\n\t    // PGraphics(width,height)\n\t    // PGraphics(width,height,app" +
                "let)\n            if (typeof(x) === \"undefined\") {\n\t\tself.v = new mod.proce" +
                "ssing.PVector();\n            } else if (typeof(z) === \"undefined\") {\n\t\tsel" +
                "f.v = new mod.processing.PVector(x.v, y.v);\n            } else {\n\t\tself.v = " +
                "new mod.processing.PVector(x.v, y.v, z.v);\n\t    }\n        });\n\n        $loc" +
                ".beginDraw = new Sk.builtin.func(function (self) {\n\t    self.v.beginDraw();\n" +
                "\t});\n\n        $loc.endDraw = new Sk.builtin.func(function (self) {\n\t    sel" +
                "f.v.endDraw();\n\t});\n    };\n    \n    shapeClass = function ($gbl, $loc) {\n " +
                "       $loc.__init__ = new Sk.builtin.func(function (self, arg1, arg2, arg3) {\n" +
                "\t    if (typeof(arg1) === \"undefined\") {\n\t\t// special version for Skulpt\n" +
                "\t\tself.v = null;\n\t\t// Will fill in manually in getChild()\n\t    } else if " +
                "(typeof(arg2) === \"undefined\") {\n\t\tself.v = new mod.processing.PShapeSVG(ar" +
                "g1.v);\n\t    } else if (typeof(arg3) === \"undefined\") {\n\t\tself.v = new mod" +
                ".processing.PShapeSVG(arg1.v, arg2.v);\n\t    } else {\n\t\tself.v = new mod.pro" +
                "cessing.PShapeSVG(arg1.v, arg2.v, arg3.v);\n\t    }\n        });\n\n        $loc" +
                ".__getattr__ = new Sk.builtin.func(function (self, key) {\n\t    key = Sk.ffi.re" +
                "mapToJs(key);\n            if (key === \"width\") {\n                return Sk.b" +
                "uiltin.assk$(self.v.width);\n            } else if (key === \"height\") {\n     " +
                "           return Sk.builtin.assk$(self.v.height);\n\t    }\n\t});\n\n        $l" +
                "oc.isVisible = new Sk.builtin.func(function (self) {\n\t    // isVisible() Retur" +
                "ns a boolean value \"true\" if the image is set to be visible, \"false\" if not" +
                "\n\t    return new Sk.builtin.bool(self.v.isVisible());\n\t});\n\n        $loc.s" +
                "etVisible = new Sk.builtin.func(function (self, value) {\n\t    // setVisible() " +
                "Sets the shape to be visible or invisible\n\t    self.v.setVisible(value.v);\n\t" +
                "});\n\n        $loc.disableStyle = new Sk.builtin.func(function (self) {\n\t    " +
                "// disableStyle() Disables the shape's style data and uses Processing styles\n\t" +
                "    self.v.disableStyle();\n\t});\n\n        $loc.enableStyle = new Sk.builtin.f" +
                "unc(function (self) {\n\t    // enableStyle() Enables the shape's style data and" +
                " ignores the Processing styles\n\t    self.v.enableStyle();\n\t});\n\n        $l" +
                "oc.getChild = new Sk.builtin.func(function (self, shape) {\n\t    // getChild() " +
                "Returns a child element of a shape as a PShapeSVG object\n\t    var child = self" +
                ".v.getChild(shape.v);\n\t    if (child != null) {\n\t\t// special method for Sku" +
                "lpt:\n\t\tvar new_shape = Sk.misceval.callsim(mod.PShapeSVG);\n\t\t// Now fill i" +
                "n value:\n\t\tnew_shape.v = child;\n\t\treturn new_shape;\n\t    } else {\n\t\tr" +
                "eturn null;\n\t    }\n\t});\n\n        $loc.translate = new Sk.builtin.func(func" +
                "tion (self, x, y, z) {\n\t    // translate() Displaces the shape\n\t    // sh.tr" +
                "anslate(x,y)\n\t    // sh.translate(x,y,z)\n            if (typeof(z) === \"unde" +
                "fined\") {\n\t\tself.v.translate(x.v, y.v);\n\t    } else {\n\t\tself.v.translat" +
                "e(x.v, y.v, z.v);\n\t    }\n\t});\n\n        $loc.rotate = new Sk.builtin.func(f" +
                "unction (self, angle) {\n\t    // rotate() Rotates the shape\n\t    self.v.rotat" +
                "e(angle.v);\n\t});\n\n        $loc.rotateX = new Sk.builtin.func(function (self," +
                " angle) {\n\t    // rotateX() Rotates the shape around the x-axis\n\t    self.v." +
                "rotateX(angle.v);\n\t});\n\n        $loc.rotateY = new Sk.builtin.func(function " +
                "(self) {\n\t    // rotateY() Rotates the shape around the y-axis\n\t    self.v.r" +
                "otateY(angle.v);\n\t});\n\n        $loc.rotateZ = new Sk.builtin.func(function (" +
                "self) {\n\t    // rotateZ() Rotates the shape around the z-axis\n\t    self.v.ro" +
                "tateZ(angle.v);\n\t});\n\n        $loc.scale = new Sk.builtin.func(function (sel" +
                "f, x, y, z) {\n\t    // scale() Increases and decreases the size of a shape\n\t " +
                "   // sh.scale(size)\n\t    // sh.scale(x,y)\n\t    // sh.scale(x,y,z)\n        " +
                "    if (typeof(y) === \"undefined\") {\n\t\tself.v.scale(x.v);\n\t    } else if " +
                "(typeof(z) === \"undefined\") {\n\t\tself.v.scale(x.v, y.v);\n\t    } else {\n\t" +
                "\tself.v.scale(x.v, y.v, z.v);\n\t    }\n\t});\n    };\n\n    mod.PFont = Sk.mis" +
                "ceval.buildClass(mod, fontClass, \"PFont\", []);\n    mod.PGraphics = Sk.misceva" +
                "l.buildClass(mod, graphicsClass, \"PGraphics\", []);\n    mod.PShapeSVG = Sk.mis" +
                "ceval.buildClass(mod, shapeClass, \"PShapeSVG\", []);\n    mod.PVector = Sk.misc" +
                "eval.buildClass(mod, vectorClass, \"PVector\", []);\n    mod.PImage = Sk.misceva" +
                "l.buildClass(mod, imageClass, \"PImage\", []);\n\n    return mod;\n};\n",
        "src/lib/code.py": "raise NotImplementedError(\"code is not yet implemented in Skulpt\")\n",
        "src/lib/UserDict.py": "raise NotImplementedError(\"UserDict is not yet implemented in Skulpt\")\n",
        "src/lib/codecs.py": "raise NotImplementedError(\"codecs is not yet implemented in Skulpt\")\n",
        "src/lib/tty.py": "raise NotImplementedError(\"tty is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/graphs/adjGraph.py": "#\n#  adjGraph\n#\n#  Created by Brad Miller on 2005-02-24.\n#  Copyright (c) 20" +
                "05 Brad Miller, David Ranum, Luther College. All rights reserved.\n#\n\nimport s" +
                "ys\nimport os\nimport unittest\n\nclass Graph:\n    def __init__(self):\n       " +
                " self.vertices = {}\n        self.numVertices = 0\n        \n    def addVertex(s" +
                "elf,key):\n        self.numVertices = self.numVertices + 1\n        newVertex = " +
                "Vertex(key)\n        self.vertices[key] = newVertex\n        return newVertex\n " +
                "   \n    def getVertex(self,n):\n        if n in self.vertices:\n            ret" +
                "urn self.vertices[n]\n        else:\n            return None\n\n    def __contai" +
                "ns__(self,n):\n        return n in self.vertices\n    \n    def addEdge(self,f,t" +
                ",cost=0):\n            if f not in self.vertices:\n                nv = self.add" +
                "Vertex(f)\n            if t not in self.vertices:\n                nv = self.add" +
                "Vertex(t)\n            self.vertices[f].addNeighbor(self.vertices[t],cost)\n    " +
                "\n    def getVertices(self):\n        return list(self.vertices.keys())\n       " +
                " \n    def __iter__(self):\n        return iter(self.vertices.values())\n       " +
                "         \nclass Vertex:\n    def __init__(self,num):\n        self.id = num\n  " +
                "      self.connectedTo = {}\n        self.color = 'white'\n        self.dist = s" +
                "ys.maxsize\n        self.pred = None\n        self.disc = 0\n        self.fin = " +
                "0\n\n    # def __lt__(self,o):\n    #     return self.id < o.id\n    \n    def a" +
                "ddNeighbor(self,nbr,weight=0):\n        self.connectedTo[nbr] = weight\n        " +
                "\n    def setColor(self,color):\n        self.color = color\n        \n    def s" +
                "etDistance(self,d):\n        self.dist = d\n\n    def setPred(self,p):\n        " +
                "self.pred = p\n\n    def setDiscovery(self,dtime):\n        self.disc = dtime\n " +
                "       \n    def setFinish(self,ftime):\n        self.fin = ftime\n        \n   " +
                " def getFinish(self):\n        return self.fin\n        \n    def getDiscovery(s" +
                "elf):\n        return self.disc\n        \n    def getPred(self):\n        retur" +
                "n self.pred\n        \n    def getDistance(self):\n        return self.dist\n   " +
                "     \n    def getColor(self):\n        return self.color\n    \n    def getConn" +
                "ections(self):\n        return self.connectedTo.keys()\n        \n    def getWei" +
                "ght(self,nbr):\n        return self.connectedTo[nbr]\n                \n    def " +
                "__str__(self):\n        return str(self.id) + \":color \" + self.color + \":disc" +
                " \" + str(self.disc) + \":fin \" + str(self.fin) + \":dist \" + str(self.dist) +" +
                " \":pred \\n\\t[\" + str(self.pred)+ \"]\\n\"\n    \n    def getId(self):\n     " +
                "   return self.id\n\nclass adjGraphTests(unittest.TestCase):\n    def setUp(self" +
                "):\n        self.tGraph = Graph()\n        \n    def testMakeGraph(self):\n     " +
                "   gFile = open(\"test.dat\")\n        for line in gFile:\n            fVertex, " +
                "tVertex = line.split('|')\n            fVertex = int(fVertex)\n            tVert" +
                "ex = int(tVertex)\n            self.tGraph.addEdge(fVertex,tVertex)\n        for" +
                " i in self.tGraph:\n            adj = i.getAdj()\n            for k in adj:\n   " +
                "             print(i, k)\n\n        \nif __name__ == '__main__':\n    unittest.m" +
                "ain()\n              \n",
        "src/lib/macurl2path.py": "raise NotImplementedError(\"macurl2path is not yet implemented in Skulpt\")\n",
        "src/lib/new.py": "raise NotImplementedError(\"new is not yet implemented in Skulpt\")\n",
        "src/lib/whichdb.py": "raise NotImplementedError(\"whichdb is not yet implemented in Skulpt\")\n",
        "src/lib/_abcoll.py": "raise NotImplementedError(\"_abcoll is not yet implemented in Skulpt\")\n",
        "src/lib/hotshot/__init__.py": "raise NotImplementedError(\"hotshot is not yet implemented in Skulpt\")\n",
        "src/lib/MimeWriter.py": "raise NotImplementedError(\"MimeWriter is not yet implemented in Skulpt\")\n",
        "src/lib/sre_constants.py": "raise NotImplementedError(\"sre_constants is not yet implemented in Skulpt\")\n",
        "src/lib/atexit.py": "raise NotImplementedError(\"atexit is not yet implemented in Skulpt\")\n",
        "src/lib/compileall.py": "raise NotImplementedError(\"compileall is not yet implemented in Skulpt\")\n",
        "src/lib/symtable.py": "raise NotImplementedError(\"symtable is not yet implemented in Skulpt\")\n",
        "src/lib/warnings.py": "raise NotImplementedError(\"warnings is not yet implemented in Skulpt\")\n",
        "src/lib/operator.js": "/*\n *  __author__: Isaac Dontje Lindell (i@isaacdontjelindell.com)\n *\n *  Imp" +
                "lementation of the Python operator module.\n */\n\nvar $builtinmodule = function" +
                " (name) {\n    var mod = {};\n\n    mod.lt = new Sk.builtin.func(function (a, b)" +
                " {\n        return Sk.builtin.bool(Sk.misceval.richCompareBool(a, b, 'Lt'));\n  " +
                "  });\n    mod.__lt__ = mod.lt;\n\n    mod.le = new Sk.builtin.func(function (a," +
                " b) {\n        return Sk.builtin.bool(Sk.misceval.richCompareBool(a, b, 'LtE'));" +
                "\n    });\n    mod.__le__ = mod.le;\n\n    mod.eq = new Sk.builtin.func(function" +
                " (a, b) {\n        return Sk.builtin.bool(Sk.misceval.richCompareBool(a, b, 'Eq'" +
                "));\n    });\n    mod.__eq__ = mod.eq;\n\n    mod.ne = new Sk.builtin.func(funct" +
                "ion (a, b) {\n        return Sk.builtin.bool(Sk.misceval.richCompareBool(a, b, '" +
                "NotEq'));\n    });\n    mod.__ne__ = mod.ne;\n\n    mod.ge = new Sk.builtin.func" +
                "(function (a, b) {\n        return Sk.builtin.bool(Sk.misceval.richCompareBool(a" +
                ", b, 'GtE'));\n    });\n    mod.__ge__ = mod.ge;\n\n    mod.gt = new Sk.builtin." +
                "func(function (a, b) {\n        return Sk.builtin.bool(Sk.misceval.richCompareBo" +
                "ol(a, b, 'Gt'));\n    });\n    mod.__gt__ = mod.gt;\n\n    mod.not_ = new Sk.bui" +
                "ltin.func(function (obj) {\n        throw new Sk.builtin.NotImplementedError(\"o" +
                "perator.not_() is not yet implemented in Skulpt\");\n    });\n\n    mod.truth = " +
                "new Sk.builtin.func(function (obj) {\n        return Sk.builtin.bool(obj);\n    " +
                "});\n\n    mod.is_ = new Sk.builtin.func(function (a, b) {\n        return Sk.bu" +
                "iltin.bool(Sk.misceval.richCompareBool(a, b, 'Is'));\n    });\n\n    mod.is_not " +
                "= new Sk.builtin.func(function (a, b) {\n        return Sk.builtin.bool(Sk.misce" +
                "val.richCompareBool(a, b, 'IsNot'));\n    });\n\n    mod.abs = new Sk.builtin.fu" +
                "nc(function (obj) {\n        return Sk.misceval.callsim(Sk.builtin.abs, obj);\n " +
                "   });\n    mod.__abs__ = mod.abs;\n\n    // The documentation says that operato" +
                "r.add() is defined for a and b numbers, but\n    // CPython (2.6) allows a and b" +
                " to be other types (e.g. str)\n    mod.add = new Sk.builtin.func(function (a, b)" +
                " {\n        return Sk.abstr.objectAdd(a, b);\n    });\n    mod.__add__ = mod.add" +
                ";\n\n    mod.and_ = new Sk.builtin.func(function (a, b) {\n        return Sk.abs" +
                "tr.binary_op_(a, b, \"BitAnd\");\n    });\n    mod.__and__ = mod.and_;\n\n    mo" +
                "d.div = new Sk.builtin.func(function (a, b) {\n        return Sk.abstr.binary_op" +
                "_(a, b, \"Div\");\n    });\n    mod.__div__ = mod.div;\n\n    mod.floordiv = new" +
                " Sk.builtin.func(function (a, b) {\n        return Sk.abstr.binary_op_(a, b, \"F" +
                "loorDiv\");\n    });\n    mod.__floordiv__ = mod.floordiv;\n\n    mod.index = ne" +
                "w Sk.builtin.func(function (a) {\n        return new Sk.builtin.int_(Sk.misceval" +
                ".asIndex(a));\n    });\n    mod.__index__ = mod.index;\n\n    // Note: Sk.abstr." +
                "numberUnaryOp(obj, 'Invert') looks for the function nb$invert() on obj.\n    // " +
                "However, it doesn't look like that function has been implemented for any existin" +
                "g object types.\n    // I've gone ahead and created this function for completene" +
                "ss' sake, but expect any use of it to\n    // result in an error.\n    mod.inv =" +
                " new Sk.builtin.func(function (obj) {\n        return Sk.abstr.numberUnaryOp(obj" +
                ", 'Invert');\n    });\n    mod.__inv__ = mod.inv;\n    mod.invert = mod.inv;\n  " +
                "  mod.__invert__ = mod.inv;\n\n    mod.lshift = new Sk.builtin.func(function (a," +
                " b) {\n        return Sk.abstr.binary_op_(a, b, \"LShift\");\n    });\n    mod._" +
                "_lshift__ = mod.lshift;\n\n    mod.mod = new Sk.builtin.func(function (a, b) {\n" +
                "        return Sk.abstr.binary_op_(a, b, \"Mod\");\n    });\n    mod.__mod__ = m" +
                "od.mod;\n\n    mod.divmod = new Sk.builtin.func(function (a, b) {\n        retur" +
                "n Sk.abstr.binary_op_(a, b, \"DivMod\");\n    });\n    mod.__divmod__ = mod.divm" +
                "od;\n\n    mod.mul = new Sk.builtin.func(function (a, b) {\n        return Sk.ab" +
                "str.binary_op_(a, b, \"Mult\");\n    });\n    mod.__mul__ = mod.mul;\n\n    mod." +
                "neg = new Sk.builtin.func(function (obj) {\n        return Sk.abstr.objectNegati" +
                "ve(obj);\n    });\n    mod.__neg__ = mod.neg;\n\n    mod.or_ = new Sk.builtin.fu" +
                "nc(function (a, b) {\n        return Sk.abstr.binary_op_(a, b, \"BitOr\");\n    " +
                "});\n    mod.__or__ = mod.or_;\n\n    mod.pos = new Sk.builtin.func(function (ob" +
                "j) {\n        return Sk.abstr.objectPositive(obj);\n    });\n    mod.__pos__ = m" +
                "od.pos;\n\n    mod.pow = new Sk.builtin.func(function (a, b) {\n        return S" +
                "k.abstr.binary_op_(a, b, \"Pow\");\n    });\n    mod.__pow__ = mod.pow;\n\n    m" +
                "od.rshift = new Sk.builtin.func(function (a, b) {\n        return Sk.abstr.binar" +
                "y_op_(a, b, \"RShift\");\n    });\n    mod.__rshift__ = mod.rshift;\n\n    mod.s" +
                "ub = new Sk.builtin.func(function (a, b) {\n        return Sk.abstr.binary_op_(a" +
                ", b, \"Sub\");\n    });\n    mod.__sub__ = mod.sub;\n\n    mod.truediv = mod.div" +
                ";\n    mod.__truediv__ = mod.div;\n\n    mod.xor = new Sk.builtin.func(function " +
                "(a, b) {\n        return Sk.abstr.binary_op_(a, b, \"BitXor\");\n    });\n    mo" +
                "d.__xor__ = mod.xor;\n\n    mod.concat = new Sk.builtin.func(function (a, b) {\n" +
                "        return Sk.abstr.sequenceConcat(a, b);\n    });\n    mod.__concat__ = mod" +
                ".concat;\n\n    mod.contains = new Sk.builtin.func(function (a, b) {\n        re" +
                "turn Sk.builtin.bool(Sk.abstr.sequenceContains(a, b));\n    });\n    mod.__conta" +
                "ins__ = mod.contains;\n\n    mod.countOf = new Sk.builtin.func(function (a, b) {" +
                "\n        return Sk.abstr.sequenceGetCountOf(a, b);\n    });\n\n    mod.delitem " +
                "= new Sk.builtin.func(function (a, b) {\n        return Sk.abstr.sequenceDelItem" +
                "(a, b);\n    });\n    mod.__delitem__ = mod.delitem;\n\n    mod.getitem = new Sk" +
                ".builtin.func(function (a, b) {\n        return Sk.abstr.sequenceGetItem(a, b);" +
                "\n    });\n    mod.__getitem__ = mod.getitem;\n\n    mod.indexOf = new Sk.builti" +
                "n.func(function (a, b) {\n        return Sk.abstr.sequenceGetIndexOf(a, b);\n   " +
                " });\n\n    mod.setitem = new Sk.builtin.func(function (a, b, c) {\n        retu" +
                "rn Sk.abstr.sequenceSetItem(a, b, c);\n    });\n    mod.__setitem__ = mod.setite" +
                "m;\n\n    return mod;\n};\n",
        "src/lib/timeit.py": "raise NotImplementedError(\"timeit is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/basic/deque.py": "# Bradley N. Miller, David L. Ranum\n# Introduction to Data Structures and Algor" +
                "ithms in Python\n# Copyright 2005\n# \n#deque.py\r\n\r\n\r\nclass Deque:\r\n    " +
                "def __init__(self):\r\n        self.items = []\r\n\r\n    def isEmpty(self):\r\n" +
                "        return self.items == []\r\n\r\n    def addFront(self, item):\r\n        " +
                "self.items.append(item)\r\n\r\n    def addRear(self, item):\r\n        self.item" +
                "s.insert(0,item)\r\n\r\n    def removeFront(self):\r\n        return self.items." +
                "pop()\r\n\r\n    def removeRear(self):\r\n        return self.items.pop(0)\r\n\r" +
                "\n    def size(self):\r\n        return len(self.items)\r\n",
        "src/lib/sgmllib.py": "raise NotImplementedError(\"sgmllib is not yet implemented in Skulpt\")\n",
        "src/lib/pprint.py": "raise NotImplementedError(\"pprint is not yet implemented in Skulpt\")\n",
        "src/lib/mutex.py": "raise NotImplementedError(\"mutex is not yet implemented in Skulpt\")\n",
        "src/lib/xml/sax/__init__.py": "raise NotImplementedError(\"sax is not yet implemented in Skulpt\")\n",
        "src/lib/mimetypes.py": "raise NotImplementedError(\"mimetypes is not yet implemented in Skulpt\")\n",
        "src/lib/aifc.py": "raise NotImplementedError(\"aifc is not yet implemented in Skulpt\")\n",
        "src/lib/webgl/matrix4.js": "// more from 'tdl'\nvar $builtinmodule = function(name)\n{\n    var mod = {};\n" +
                "\n    var temp0v3_ = new Float32Array(3);\n    var temp1v3_ = new Float32Array(3" +
                ");\n    var temp2v3_ = new Float32Array(3);\n\n    var temp0v4_ = new Float32Arr" +
                "ay(4);\n    var temp1v4_ = new Float32Array(4);\n    var temp2v4_ = new Float32A" +
                "rray(4);\n\n    var temp0m4_ = new Float32Array(16);\n    var temp1m4_ = new Flo" +
                "at32Array(16);\n    var temp2m4_ = new Float32Array(16);\n\n    var normalize = " +
                "function(dst, a) {\n        var n = 0.0;\n        var aLength = a.length;\n     " +
                "   for (var i = 0; i < aLength; ++i)\n            n += a[i] * a[i];\n        n =" +
                " Math.sqrt(n);\n        if (n > 0.00001) {\n            for (var i = 0; i < aLen" +
                "gth; ++i)\n                dst[i] = a[i] / n;\n        } else {\n            for" +
                " (var i = 0; i < aLength; ++i)\n                dst[i] = 0;\n        }\n        " +
                "return dst;\n    };\n\n    var cross = function(dst, a, b) {\n        dst[0] = a" +
                "[1] * b[2] - a[2] * b[1];\n        dst[1] = a[2] * b[0] - a[0] * b[2];\n        " +
                "dst[2] = a[0] * b[1] - a[1] * b[0];\n        return dst;\n    };\n\n    var subV" +
                "ector = function(dst, a, b) {\n        var aLength = a.length;\n        for (var" +
                " i = 0; i < aLength; ++i)\n            dst[i] = a[i] - b[i];\n        return dst" +
                ";\n    };\n\n    var dot = function(a, b) {\n        return (a[0] * b[0]) + (a[1" +
                "] * b[1]) + (a[2] * b[2]);\n    };\n\n    mod.lookAt = new Sk.builtin.func(funct" +
                "ion(view, eye, target, up)\n            {\n                var t0 = temp0v3_;\n " +
                "               var t1 = temp1v3_;\n                var t2 = temp2v3_;\n\n       " +
                "         var vz = normalize(t0, subVector(t0, eye.v, target.v));\n              " +
                "  var vx = normalize(t1, cross(t1, up.v, vz));\n                var vy = cross(t" +
                "2, vz, vx);\n\n                var dst = view.v;\n                dst[ 0] = vx[0" +
                "];\n                dst[ 1] = vy[0];\n                dst[ 2] = vz[0];\n        " +
                "        dst[ 3] = 0;\n                dst[ 4] = vx[1];\n                dst[ 5] " +
                "= vy[1];\n                dst[ 6] = vz[1];\n                dst[ 7] = 0;\n      " +
                "          dst[ 8] = vx[2];\n                dst[ 9] = vy[2];\n                ds" +
                "t[10] = vz[2];\n                dst[11] = 0;\n                dst[12] = -dot(vx," +
                " eye.v);\n                dst[13] = -dot(vy, eye.v);\n                dst[14] = " +
                "-dot(vz, eye.v);\n                dst[15] = 1;\n\n                return view;\n" +
                "            });\n\n    mod.perspective = new Sk.builtin.func(function(proj, angl" +
                "e, aspect, near, far)\n            {\n                var f = Math.tan(Math.PI *" +
                " 0.5 - 0.5 * (angle * Math.PI / 180));\n                var rangeInv = 1.0 / (ne" +
                "ar - far);\n\n                var dst = proj.v;\n\n                dst[0]  = f /" +
                " aspect;\n                dst[1]  = 0;\n                dst[2]  = 0;\n          " +
                "      dst[3]  = 0;\n\n                dst[4]  = 0;\n                dst[5]  = f;" +
                "\n                dst[6]  = 0;\n                dst[7]  = 0;\n\n                " +
                "dst[8]  = 0;\n                dst[9]  = 0;\n                dst[10] = (near + fa" +
                "r) * rangeInv;\n                dst[11] = -1;\n\n                dst[12] = 0;\n " +
                "               dst[13] = 0;\n                dst[14] = near * far * rangeInv * 2" +
                ";\n                dst[15] = 0;\n\n                return proj;\n            });" +
                "\n\n    // builds, not appending\n    mod.rotationY = new Sk.builtin.func(functi" +
                "on(target, angle)\n            {\n                var dst = target.v;\n         " +
                "       var c = Math.cos(angle * Math.PI / 180);\n                var s = Math.si" +
                "n(angle * Math.PI / 180);\n\n                dst[ 0] = c;\n                dst[ " +
                "1] = 0;\n                dst[ 2] = -s;\n                dst[ 3] = 0;\n          " +
                "      dst[ 4] = 0;\n                dst[ 5] = 1;\n                dst[ 6] = 0;\n" +
                "                dst[ 7] = 0;\n                dst[ 8] = s;\n                dst[" +
                " 9] = 0;\n                dst[10] = c;\n                dst[11] = 0;\n          " +
                "      dst[12] = 0;\n                dst[13] = 0;\n                dst[14] = 0;\n" +
                "                dst[15] = 1;\n\n                return target;\n            });" +
                "\n\n    mod.identity = new Sk.builtin.func(function(target)\n            {\n    " +
                "            var dst = target.v;\n                dst[ 0] = 1;\n                d" +
                "st[ 1] = 0;\n                dst[ 2] = 0;\n                dst[ 3] = 0;\n       " +
                "         dst[ 4] = 0;\n                dst[ 5] = 1;\n                dst[ 6] = 0" +
                ";\n                dst[ 7] = 0;\n                dst[ 8] = 0;\n                d" +
                "st[ 9] = 0;\n                dst[10] = 1;\n                dst[11] = 0;\n       " +
                "         dst[12] = 0;\n                dst[13] = 0;\n                dst[14] = 0" +
                ";\n                dst[15] = 1;\n                return target;\n            });" +
                "\n\n    // row major\n    mod.mul = new Sk.builtin.func(function(target, x, y)\n" +
                "            {\n                var dst = target.v;\n                var a = x.v;" +
                "\n                var b = y.v;\n                var a00 = a[0];\n               " +
                " var a01 = a[1];\n                var a02 = a[2];\n                var a03 = a[3" +
                "];\n                var a10 = a[ 4 + 0];\n                var a11 = a[ 4 + 1];\n" +
                "                var a12 = a[ 4 + 2];\n                var a13 = a[ 4 + 3];\n    " +
                "            var a20 = a[ 8 + 0];\n                var a21 = a[ 8 + 1];\n        " +
                "        var a22 = a[ 8 + 2];\n                var a23 = a[ 8 + 3];\n            " +
                "    var a30 = a[12 + 0];\n                var a31 = a[12 + 1];\n                " +
                "var a32 = a[12 + 2];\n                var a33 = a[12 + 3];\n                var " +
                "b00 = b[0];\n                var b01 = b[1];\n                var b02 = b[2];\n " +
                "               var b03 = b[3];\n                var b10 = b[ 4 + 0];\n          " +
                "      var b11 = b[ 4 + 1];\n                var b12 = b[ 4 + 2];\n              " +
                "  var b13 = b[ 4 + 3];\n                var b20 = b[ 8 + 0];\n                va" +
                "r b21 = b[ 8 + 1];\n                var b22 = b[ 8 + 2];\n                var b2" +
                "3 = b[ 8 + 3];\n                var b30 = b[12 + 0];\n                var b31 = " +
                "b[12 + 1];\n                var b32 = b[12 + 2];\n                var b33 = b[12" +
                " + 3];\n                dst[ 0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;" +
                "\n                dst[ 1] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;\n    " +
                "            dst[ 2] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;\n          " +
                "      dst[ 3] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;\n                " +
                "dst[ 4] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;\n                dst[ 5" +
                "] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;\n                dst[ 6] = a1" +
                "0 * b02 + a11 * b12 + a12 * b22 + a13 * b32;\n                dst[ 7] = a10 * b0" +
                "3 + a11 * b13 + a12 * b23 + a13 * b33;\n                dst[ 8] = a20 * b00 + a2" +
                "1 * b10 + a22 * b20 + a23 * b30;\n                dst[ 9] = a20 * b01 + a21 * b1" +
                "1 + a22 * b21 + a23 * b31;\n                dst[10] = a20 * b02 + a21 * b12 + a2" +
                "2 * b22 + a23 * b32;\n                dst[11] = a20 * b03 + a21 * b13 + a22 * b2" +
                "3 + a23 * b33;\n                dst[12] = a30 * b00 + a31 * b10 + a32 * b20 + a3" +
                "3 * b30;\n                dst[13] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b3" +
                "1;\n                dst[14] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;\n  " +
                "              dst[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;\n        " +
                "        return target;\n            });\n\n    mod.invert = new Sk.builtin.func(" +
                "function(target, mat)\n            {\n                var dst = target.v;\n     " +
                "           var m = mat.v;\n                var m00 = m[0 * 4 + 0];\n            " +
                "    var m01 = m[0 * 4 + 1];\n                var m02 = m[0 * 4 + 2];\n          " +
                "      var m03 = m[0 * 4 + 3];\n                var m10 = m[1 * 4 + 0];\n        " +
                "        var m11 = m[1 * 4 + 1];\n                var m12 = m[1 * 4 + 2];\n      " +
                "          var m13 = m[1 * 4 + 3];\n                var m20 = m[2 * 4 + 0];\n    " +
                "            var m21 = m[2 * 4 + 1];\n                var m22 = m[2 * 4 + 2];\n  " +
                "              var m23 = m[2 * 4 + 3];\n                var m30 = m[3 * 4 + 0];\n" +
                "                var m31 = m[3 * 4 + 1];\n                var m32 = m[3 * 4 + 2];" +
                "\n                var m33 = m[3 * 4 + 3];\n                var tmp_0  = m22 * m3" +
                "3;\n                var tmp_1  = m32 * m23;\n                var tmp_2  = m12 * " +
                "m33;\n                var tmp_3  = m32 * m13;\n                var tmp_4  = m12 " +
                "* m23;\n                var tmp_5  = m22 * m13;\n                var tmp_6  = m0" +
                "2 * m33;\n                var tmp_7  = m32 * m03;\n                var tmp_8  = " +
                "m02 * m23;\n                var tmp_9  = m22 * m03;\n                var tmp_10 " +
                "= m02 * m13;\n                var tmp_11 = m12 * m03;\n                var tmp_1" +
                "2 = m20 * m31;\n                var tmp_13 = m30 * m21;\n                var tmp" +
                "_14 = m10 * m31;\n                var tmp_15 = m30 * m11;\n                var t" +
                "mp_16 = m10 * m21;\n                var tmp_17 = m20 * m11;\n                var" +
                " tmp_18 = m00 * m31;\n                var tmp_19 = m30 * m01;\n                v" +
                "ar tmp_20 = m00 * m21;\n                var tmp_21 = m20 * m01;\n               " +
                " var tmp_22 = m00 * m11;\n                var tmp_23 = m10 * m01;\n\n           " +
                "     var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -\n                    (" +
                "tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);\n                var t1 = (tmp_1 * m01" +
                " + tmp_6 * m21 + tmp_9 * m31) -\n                    (tmp_0 * m01 + tmp_7 * m21 " +
                "+ tmp_8 * m31);\n                var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * " +
                "m31) -\n                    (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);\n       " +
                "         var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -\n                " +
                "    (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);\n\n                var d = 1.0 /" +
                " (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);\n\n                dst[ 0] = d * t" +
                "0;\n                dst[ 1] = d * t1;\n                dst[ 2] = d * t2;\n      " +
                "          dst[ 3] = d * t3;\n                dst[ 4] = d * ((tmp_1 * m10 + tmp_2" +
                " * m20 + tmp_5 * m30) -\n                        (tmp_0 * m10 + tmp_3 * m20 + tm" +
                "p_4 * m30));\n                dst[ 5] = d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 " +
                "* m30) -\n                        (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));\n " +
                "               dst[ 6] = d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -\n    " +
                "                    (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));\n              " +
                "  dst[ 7] = d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -\n                 " +
                "       (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));\n                dst[ 8] = d" +
                " * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -\n                        (tmp" +
                "_13 * m13 + tmp_14 * m23 + tmp_17 * m33));\n                dst[ 9] = d * ((tmp_" +
                "13 * m03 + tmp_18 * m23 + tmp_21 * m33) -\n                        (tmp_12 * m03" +
                " + tmp_19 * m23 + tmp_20 * m33));\n                dst[10] = d * ((tmp_14 * m03 " +
                "+ tmp_19 * m13 + tmp_22 * m33) -\n                        (tmp_15 * m03 + tmp_18" +
                " * m13 + tmp_23 * m33));\n                dst[11] = d * ((tmp_17 * m03 + tmp_20 " +
                "* m13 + tmp_23 * m23) -\n                        (tmp_16 * m03 + tmp_21 * m13 + " +
                "tmp_22 * m23));\n                dst[12] = d * ((tmp_14 * m22 + tmp_17 * m32 + t" +
                "mp_13 * m12) -\n                        (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * " +
                "m22));\n                dst[13] = d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m" +
                "22) -\n                        (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));\n " +
                "               dst[14] = d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -\n  " +
                "                      (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));\n          " +
                "      dst[15] = d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -\n           " +
                "             (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));\n                ret" +
                "urn target;\n            });\n\n    mod.transpose = new Sk.builtin.func(function" +
                "(target, mat)\n            {\n                var dst = target.v;\n             " +
                "   var m = mat.v;\n                for (var j = 0; j < 4; ++j) {\n              " +
                "      for (var i = 0; i < 4; ++i)\n                    dst[j * 4 + i] = m[i * 4 " +
                "+ j];\n                }\n                return dst;\n            });\n\n    re" +
                "turn mod;\n};\n",
        "src/lib/idlelib/__init__.py": "raise NotImplementedError(\"idlelib is not yet implemented in Skulpt\")\n",
        "src/lib/formatter.py": "raise NotImplementedError(\"formatter is not yet implemented in Skulpt\")\n",
        "src/lib/tabnanny.py": "raise NotImplementedError(\"tabnanny is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/graphs/priorityQueue.py": "# Bradley N. Miller, David L. Ranum\n# Introduction to Data Structures and Algor" +
                "ithms in Python\n# Copyright 2005\n# \nimport unittest\n\n# this implementation " +
                "of binary heap takes key value pairs,\n# we will assume that the keys are all co" +
                "mparable\n\nclass PriorityQueue:\n    def __init__(self):\n        self.heapArra" +
                "y = [(0,0)]\n        self.currentSize = 0\n\n    def buildHeap(self,alist):\n   " +
                "     self.currentSize = len(alist)\n        self.heapArray = [(0,0)]\n        fo" +
                "r i in alist:\n            self.heapArray.append(i)\n        i = len(alist) // 2" +
                "            \n        while (i > 0):\n            self.percDown(i)\n            " +
                "i = i - 1\n                        \n    def percDown(self,i):\n        while (i" +
                " * 2) <= self.currentSize:\n            mc = self.minChild(i)\n            if se" +
                "lf.heapArray[i][0] > self.heapArray[mc][0]:\n                tmp = self.heapArra" +
                "y[i]\n                self.heapArray[i] = self.heapArray[mc]\n                se" +
                "lf.heapArray[mc] = tmp\n            i = mc\n                \n    def minChild(s" +
                "elf,i):\n        if i*2 > self.currentSize:\n            return -1\n        else" +
                ":\n            if i*2 + 1 > self.currentSize:\n                return i*2\n     " +
                "       else:\n                if self.heapArray[i*2][0] < self.heapArray[i*2+1][" +
                "0]:\n                    return i*2\n                else:\n                    " +
                "return i*2+1\n\n    def percUp(self,i):\n        while i // 2 > 0:\n            " +
                "if self.heapArray[i][0] < self.heapArray[i//2][0]:\n               tmp = self.he" +
                "apArray[i//2]\n               self.heapArray[i//2] = self.heapArray[i]\n        " +
                "       self.heapArray[i] = tmp\n            i = i//2\n \n    def add(self,k):\n " +
                "       self.heapArray.append(k)\n        self.currentSize = self.currentSize + 1" +
                "\n        self.percUp(self.currentSize)\n\n    def delMin(self):\n        retval" +
                " = self.heapArray[1][1]\n        self.heapArray[1] = self.heapArray[self.current" +
                "Size]\n        self.currentSize = self.currentSize - 1\n        self.heapArray.p" +
                "op()\n        self.percDown(1)\n        return retval\n        \n    def isEmpty" +
                "(self):\n        if self.currentSize == 0:\n            return True\n        els" +
                "e:\n            return False\n\n    def decreaseKey(self,val,amt):\n        # th" +
                "is is a little wierd, but we need to find the heap thing to decrease by\n       " +
                " # looking at its value\n        done = False\n        i = 1\n        myKey = 0" +
                "\n        while not done and i <= self.currentSize:\n            if self.heapArr" +
                "ay[i][1] == val:\n                done = True\n                myKey = i\n      " +
                "      else:\n                i = i + 1\n        if myKey > 0:\n            self." +
                "heapArray[myKey] = (amt,self.heapArray[myKey][1])\n            self.percUp(myKey" +
                ")\n            \n    def __contains__(self,vtx):\n        for pair in self.heapA" +
                "rray:\n            if pair[1] == vtx:\n                return True\n        retu" +
                "rn False\n        \nclass TestBinHeap(unittest.TestCase):\n    def setUp(self):" +
                "\n        self.theHeap = PriorityQueue()\n        self.theHeap.add((2,'x'))\n   " +
                "     self.theHeap.add((3,'y'))\n        self.theHeap.add((5,'z'))\n        self." +
                "theHeap.add((6,'a'))\n        self.theHeap.add((4,'d'))\n\n\n    def testInsert(" +
                "self):\n        assert self.theHeap.currentSize == 5\n\n    def testDelmin(self)" +
                ":\n        assert self.theHeap.delMin() == 'x'\n        assert self.theHeap.delM" +
                "in() == 'y'\n    \n    def testDecKey(self):\n        self.theHeap.decreaseKey('" +
                "d',1)\n        assert self.theHeap.delMin() == 'd'\n        \nif __name__ == '__" +
                "main__':\n    unittest.main()\n",
        "src/lib/base64.py": "raise NotImplementedError(\"base64 is not yet implemented in Skulpt\")\n",
        "src/lib/site.py": "raise NotImplementedError(\"site is not yet implemented in Skulpt\")\n",
        "src/lib/abc.py": "raise NotImplementedError(\"abc is not yet implemented in Skulpt\")\n",
        "src/lib/string.py": "raise NotImplementedError(\"string is not yet implemented in Skulpt\")\n",
        "src/builtin/this.py": "s = \"\"\"Gur Mra bs Clguba, ol Gvz Crgref\n\nOrnhgvshy vf orggre guna htyl.\nRk" +
                "cyvpvg vf orggre guna vzcyvpvg.\nFvzcyr vf orggre guna pbzcyrk.\nPbzcyrk vf orgg" +
                "re guna pbzcyvpngrq.\nSyng vf orggre guna arfgrq.\nFcnefr vf orggre guna qrafr." +
                "\nErnqnovyvgl pbhagf.\nFcrpvny pnfrf nera'g fcrpvny rabhtu gb oernx gur ehyrf.\n" +
                "Nygubhtu cenpgvpnyvgl orngf chevgl.\nReebef fubhyq arire cnff fvyragyl.\nHayrff " +
                "rkcyvpvgyl fvyraprq.\nVa gur snpr bs nzovthvgl, ershfr gur grzcgngvba gb thrff." +
                "\nGurer fubhyq or bar-- naq cersrenoyl bayl bar --boivbhf jnl gb qb vg.\nNygubht" +
                "u gung jnl znl abg or boivbhf ng svefg hayrff lbh'er Qhgpu.\nAbj vf orggre guna " +
                "arire.\nNygubhtu arire vf bsgra orggre guna *evtug* abj.\nVs gur vzcyrzragngvba " +
                "vf uneq gb rkcynva, vg'f n onq vqrn.\nVs gur vzcyrzragngvba vf rnfl gb rkcynva, " +
                "vg znl or n tbbq vqrn.\nAnzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber b" +
                "s gubfr!\"\"\"\n\nd = {}\nfor c in (65, 97):\n    for i in range(26):\n        d" +
                "[chr(i+c)] = chr((i+13) % 26 + c)\n\nprint \"\".join([d.get(c, c) for c in s])\n",
        "src/lib/inspect.py": "raise NotImplementedError(\"inspect is not yet implemented in Skulpt\")\n",
        "src/lib/multiprocessing/dummy/__init__.py": "raise NotImplementedError(\"dummy is not yet implemented in Skulpt\")\n",
        "src/lib/xml/__init__.py": "raise NotImplementedError(\"xml is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/trees/binheap.py": "# Bradley N. Miller, David L. Ranum\n# Introduction to Data Structures and Algor" +
                "ithms in Python\n# Copyright 2005\n# \n\n# this heap takes key value pairs, we w" +
                "ill assume that the keys are integers\nclass BinHeap:\n    def __init__(self):\n" +
                "        self.heapList = [0]\n        self.currentSize = 0\n\n\n    def buildHeap" +
                "(self,alist):\n        i = len(alist) // 2\n        self.currentSize = len(alist" +
                ")\n        self.heapList = [0] + alist[:]\n        print(len(self.heapList), i)" +
                "\n        while (i > 0):\n            print(self.heapList, i)\n            self." +
                "percDown(i)\n            i = i - 1\n        print(self.heapList,i)\n            " +
                "            \n    def percDown(self,i):\n        while (i * 2) <= self.currentSi" +
                "ze:\n            mc = self.minChild(i)\n            if self.heapList[i] > self.h" +
                "eapList[mc]:\n                tmp = self.heapList[i]\n                self.heapL" +
                "ist[i] = self.heapList[mc]\n                self.heapList[mc] = tmp\n           " +
                " i = mc\n                \n    def minChild(self,i):\n        if i * 2 + 1 > sel" +
                "f.currentSize:\n            return i * 2\n        else:\n            if self.hea" +
                "pList[i * 2] < self.heapList[i * 2 + 1]:\n                return i * 2\n        " +
                "    else:\n                return i * 2 + 1\n\n    def percUp(self,i):\n        " +
                "while i // 2 > 0:\n            if self.heapList[i] < self.heapList[i//2]:\n     " +
                "          tmp = self.heapList[i // 2]\n               self.heapList[i // 2] = se" +
                "lf.heapList[i]\n               self.heapList[i] = tmp\n            i = i // 2\n " +
                "\n    def insert(self,k):\n        self.heapList.append(k)\n        self.current" +
                "Size = self.currentSize + 1\n        self.percUp(self.currentSize)\n\n    def de" +
                "lMin(self):\n        retval = self.heapList[1]\n        self.heapList[1] = self." +
                "heapList[self.currentSize]\n        self.currentSize = self.currentSize - 1\n   " +
                "     self.heapList.pop()\n        self.percDown(1)\n        return retval\n     " +
                "   \n    def isEmpty(self):\n        if currentSize == 0:\n            return Tr" +
                "ue\n        else:\n            return False\n",
        "src/lib/distutils/__init__.py": "raise NotImplementedError(\"distutils is not yet implemented in Skulpt\")\n",
        "src/lib/urllib/__init__.js": "var $builtinmodule = function (name) {\n    var urllib = {};\n\n    return urlli" +
                "b;\n};\n",
        "src/lib/_strptime.py": "raise NotImplementedError(\"_strptime is not yet implemented in Skulpt\")\n",
        "src/lib/urllib2.py": "raise NotImplementedError(\"urllib2 is not yet implemented in Skulpt\")\n",
        "src/lib/Queue.py": "raise NotImplementedError(\"Queue is not yet implemented in Skulpt\")\n",
        "src/lib/time.js": "/*\n implementation of the Python time package.\n\n For higher res time we could" +
                " use following apart from new Date:\n window.performance.now()\n\n notes:\n - st" +
                "ruct_time is a structseq but structseq does not implement methods: 'n_fields', '" +
                "n_sequence_fields', 'n_unnamed_fields' yet\n\n ['__doc__', '__file__', '__name__" +
                "', '__package__', 'accept2dyear', 'altzone', 'asctime', 'clock', 'ctime', 'dayli" +
                "ght', 'gmtime', 'localtime', 'mktime', 'sleep', 'strftime', 'strptime', 'struct_" +
                "time', 'time', 'timezone', 'tzname', 'tzset']\n */\n\nvar $builtinmodule = funct" +
                "ion (name) {\n    var mod = {};\n\n    mod.__file__ = \"/src/lib/time/__init__.j" +
                "s\";\n\n    mod.__package__ = Sk.builtin.none.none$;\n\n    var struct_time_fiel" +
                "ds = {\n        \"tm_year\": \"year, for example, 1993\", \n        \"tm_mon\": " +
                "\"month of year, range [1, 12]\", \n        \"tm_mday\": \"day of month, range [" +
                "1, 31]\", \n        \"tm_hour\": \"hours, range [0, 23]\", \n        \"tm_min\":" +
                " \"minutes, range [0, 59]\", \n        \"tm_sec\": \"seconds, range [0, 61]\", " +
                "\n        \"tm_wday\": \"day of week, range [0, 6], Monday is 0\", \n        \"t" +
                "m_yday\": \"day of year, range [1, 366]\", \n        \"tm_isdst\": \"1 if summer" +
                " time is in effect, 0 if not, and -1 if unknown\"\n    };\n\n    var struct_time" +
                "_f = Sk.builtin.make_structseq('time', 'struct_time', struct_time_fields);\n\n  " +
                "  mod.struct_time = struct_time_f;\n\n    function check_struct_time(t) {\n     " +
                "   if (!(t instanceof struct_time_f)) {\n            throw new Sk.builtin.TypeEr" +
                "ror(\"Required argument 'struct_time' must be of type: 'struct_time'\");\n      " +
                "  }\n        var i;\n        var len = t.v.length;\n        var obj = t.v;\n    " +
                "    for (i = 0; i < len; ++i) {\n            if (!Sk.builtin.checkInt(obj[i])) {" +
                "\n                throw new Sk.builtin.TypeError(\"struct_time may only contain " +
                "integers\");\n            }\n        }\n        return true;\n    }\n\n    mod.t" +
                "ime = new Sk.builtin.func(function () {\n        Sk.builtin.pyCheckArgs(\"time\"" +
                ", arguments, 0, 0);\n        var res = Date.now();\n        if (performance && p" +
                "erformance.now)\n        {\n            res = res + performance.now() % 1;\n    " +
                "    }\n        return Sk.builtin.assk$(res / 1000, undefined);\n    });\n\n    /" +
                "/ This is an experimental implementation of time.sleep(), using suspensions\n   " +
                " mod.sleep = new Sk.builtin.func(function(delay) {\n        Sk.builtin.pyCheckAr" +
                "gs(\"sleep\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"delay\", \"flo" +
                "at\", Sk.builtin.checkNumber(delay));\n        var susp = new Sk.misceval.Suspen" +
                "sion();\n        susp.resume = function() { return Sk.builtin.none.none$; }\n   " +
                "     susp.data = {type: \"Sk.promise\", promise: new Promise(function(resolve) {" +
                "\n            Sk.setTimeout(resolve, Sk.ffi.remapToJs(delay)*1000);\n        })}" +
                ";\n        return susp;\n    });\n\n    function padLeft(str, l, c) {\n        v" +
                "ar _str = str.toString();\n        return Array(l - _str.length + 1).join(c || " +
                "\" \") + _str;\n    }\n\n    function isLeapYear(year) {\n        if((year & 3) " +
                "!= 0) return false;\n        return ((year % 100) != 0 || (year % 400) == 0);\n " +
                "   }\n\n    function getDayOfYear(date,utc) {\n        utc = utc || false;\n    " +
                "    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];\n   " +
                "     var mn = utc ? date.getUTCMonth() : date.getMonth();\n        var dn = utc " +
                "? date.getUTCDate() : date.getDate();\n        var dayOfYear = dayCount[mn] + dn" +
                ";\n        if(mn > 1 && isLeapYear(utc ? date.getUTCFullYear() : date.getFullYea" +
                "r())) dayOfYear++;\n        return dayOfYear;\n    }\n\n    function stdTimezone" +
                "Offset() {\n        var jan = new Date(2002, 0, 1);\n        var jul = new Date(" +
                "2002, 6, 1);\n        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOf" +
                "fset());\n    }\n\n    function altTimezoneOffset() {\n        var jan = new Dat" +
                "e(2002, 0, 1);\n        var jul = new Date(2002, 6, 1);\n        return Math.min" +
                "(jan.getTimezoneOffset(), jul.getTimezoneOffset());\n    }    \n\n    function d" +
                "st(date) {\n        return date.getTimezoneOffset() < stdTimezoneOffset();\n    " +
                "}\n\n    function timeZoneName(date) {\n        return /\\((.*)\\)/.exec(date.to" +
                "String())[1];\n    }\n\n    function timeZoneNames() {\n        var jan = new Da" +
                "te(2002, 0, 1);\n        var jul = new Date(2002, 6, 1);     \n        if (dst(j" +
                "an)) {\n            return [Sk.builtin.str(timeZoneName(jul)), Sk.builtin.str(ti" +
                "meZoneName(jan))];\n        } else {\n            return [Sk.builtin.str(timeZon" +
                "eName(jan)), Sk.builtin.str(timeZoneName(jul))];\n        }\n    }\n\n    functi" +
                "on date_to_struct_time(date, utc) {\n        utc = utc || false;\n        // y, " +
                "m, d, hh, mm, ss, weekday, jday, dst\n        return new struct_time_f(\n       " +
                "     [\n                Sk.builtin.assk$(utc ? date.getUTCFullYear() : date.getF" +
                "ullYear()), \n                Sk.builtin.assk$((utc ? date.getUTCMonth() : date." +
                "getMonth()) + 1), // want January == 1\n                Sk.builtin.assk$(utc ? d" +
                "ate.getUTCDate() : date.getDate()), \n                Sk.builtin.assk$(utc ? dat" +
                "e.getUTCHours() : date.getHours()), \n                Sk.builtin.assk$(utc ? dat" +
                "e.getUTCMinutes() : date.getMinutes()), \n                Sk.builtin.assk$(utc ?" +
                " date.getUTCSeconds() : date.getSeconds()), \n                Sk.builtin.assk$((" +
                "(utc ? date.getUTCDay() : date.getDay()) + 6) % 7), // Want Monday == 0\n       " +
                "         Sk.builtin.assk$(getDayOfYear(date, utc)), // Want January, 1 == 1\n   " +
                "             Sk.builtin.assk$(utc ? 0 : (dst(date) ? 1 : 0)) // 1 for DST /0 for" +
                " non-DST /-1 for unknown\n            ]\n        );\n    }\n\n    function local" +
                "time_f(secs) {\n        Sk.builtin.pyCheckArgs(\"localtime\", arguments, 0, 1);" +
                "\n        var d = new Date();\n        if (secs) {\n            Sk.builtin.pyChe" +
                "ckType(\"secs\", \"number\", Sk.builtin.checkNumber(secs));\n            var sec" +
                "onds = Sk.builtin.asnum$(secs);\n            d.setTime(seconds * 1000);\n       " +
                " }\n        return date_to_struct_time(d);\n    }\n\n    mod.localtime = new Sk." +
                "builtin.func(localtime_f);\n\n    mod.gmtime = new Sk.builtin.func(function(secs" +
                ") {\n        Sk.builtin.pyCheckArgs(\"localtime\", arguments, 0, 1);\n        va" +
                "r d = new Date();\n        if (secs) {\n            Sk.builtin.pyCheckType(\"sec" +
                "s\", \"number\", Sk.builtin.checkNumber(secs));\n            var seconds = Sk.bu" +
                "iltin.asnum$(secs);\n            d.setTime(seconds * 1000);\n        }\n        " +
                "return date_to_struct_time(d, true);\n    });\n\n    var monthnames = [\"Jan\", " +
                "\"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\"," +
                " \"Nov\", \"Dec\"];\n    var daynames = [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"F" +
                "ri\", \"Sat\", \"Sun\"];\n\n    function asctime_f(time) {\n        if (!time ||" +
                " Sk.builtin.checkNone(time))\n        {\n            time = localtime_f();\n    " +
                "    } else if (!(time instanceof struct_time_f)) {\n            time = new struc" +
                "t_time_f(time);\n        }\n        if (time instanceof Sk.builtin.tuple && time" +
                ".v.length == 9)\n        {\n            // todo: test validity??\n            va" +
                "r parts = [];\n            parts.push(daynames[Sk.builtin.asnum$(time.v[6])]);\n" +
                "            parts.push(monthnames[Sk.builtin.asnum$(time.v[1])-1]);  \n         " +
                "   parts.push(padLeft(Sk.builtin.asnum$(time.v[2]).toString(), 2, '0'));\n      " +
                "      parts.push(\n                padLeft(Sk.builtin.asnum$(time.v[3]).toString" +
                "(), 2, '0') + \":\" +\n                padLeft(Sk.builtin.asnum$(time.v[4]).toSt" +
                "ring(), 2, '0') + \":\" +\n                padLeft(Sk.builtin.asnum$(time.v[5])." +
                "toString(), 2, '0')\n            );\n            parts.push(padLeft(Sk.builtin.a" +
                "snum$(time.v[0]).toString(), 4, '0'));\n\n            return Sk.builtin.str(part" +
                "s.join(\" \"));\n        }\n    }\n\n    mod.asctime = new Sk.builtin.func(ascti" +
                "me_f);\n\n    mod.ctime = new Sk.builtin.func(function(secs) {\n        return a" +
                "sctime_f(localtime_f(secs));\n    });\n\n    function mktime_f(time) {\n        " +
                "if (time instanceof Sk.builtin.tuple && time.v.length == 9)\n        {\n        " +
                "    var d = new Date();\n            d.setFullYear(Sk.builtin.asnum$(time.v[0]))" +
                ";\n            d.setMonth(Sk.builtin.asnum$(time.v[1])-1);\n            d.setDat" +
                "e(Sk.builtin.asnum$(time.v[2]));\n            d.setHours(Sk.builtin.asnum$(time." +
                "v[3]));\n            d.setMinutes(Sk.builtin.asnum$(time.v[4]));\n            d." +
                "setSeconds(Sk.builtin.asnum$(time.v[5]));\n            return Sk.builtin.assk$(d" +
                ".getTime() / 1000, undefined);\n        } else {\n            throw new Sk.built" +
                "in.TypeError(\"mktime() requires a struct_time or 9-tuple\");\n        }\n    }" +
                "\n\n    mod.mktime = new Sk.builtin.func(mktime_f);\n\n    /*\n    The offset of" +
                " the local (non-DST) timezone, in seconds west of UTC (negative in most of Weste" +
                "rn Europe, \n    positive in the US, zero in the UK).\n    */\n    mod.timezone " +
                "= new Sk.builtin.int_(stdTimezoneOffset() * 60);\n\n    /*\n    The offset of th" +
                "e local DST timezone, in seconds west of UTC, if one is defined. This is negativ" +
                "e if the\n    local DST timezone is east of UTC (as in Western Europe, including" +
                " the UK). Only use this if daylight is nonzero.\n    */\n    mod.altzone = new S" +
                "k.builtin.int_(altTimezoneOffset() * 60);\n\n    /*\n    Nonzero if a DST timezo" +
                "ne is defined.\n    */\n    mod.daylight = new Sk.builtin.int_(dst(new Date()) ?" +
                " 1 : 0);\n\n    /*\n    A tuple of two strings: the first is the name of the loc" +
                "al non-DST timezone, the second is the name of the local \n    DST timezone. If " +
                "no DST timezone is defined, the second string should not be used.\n    */\n    m" +
                "od.tzname = Sk.builtin.tuple(timeZoneNames());\n\n    mod.accept2dyear = Sk.buil" +
                "tin.assk$(1, Sk.builtin.nmber.int$);\n\n    mod.clock = new Sk.builtin.func(func" +
                "tion() {\n        var res = 0.0;\n        if (performance && performance.now)\n " +
                "       {\n            res = performance.now() / 1000;\n        } else {\n       " +
                "     res = new Date().getTime() / 1000;\n        }\n        return new Sk.builti" +
                "n.float_(res);\n    });\n\n    function strftime_f(format, t) {\n        var jsF" +
                "ormat;\n\n        Sk.builtin.pyCheckArgs(\"strftime\", arguments, 1, 2);\n      " +
                "  if (!Sk.builtin.checkString(format)) {\n            throw new Sk.builtin.TypeE" +
                "rror(\"format must be a string\");\n        }\n        if (!t)\n        {\n     " +
                "       t = localtime_f();\n        } else if (!(t instanceof struct_time_f)) {\n" +
                "            t = new struct_time_f(t);\n        }\n\n        check_struct_time(t)" +
                ";\n        \n        jsFormat = Sk.ffi.remapToJs(format);\n\n        return Sk.f" +
                "fi.remapToPy(strftime(jsFormat, new Date(mktime_f(t).v*1000)));\n    }\n\n    mo" +
                "d.strftime = new Sk.builtin.func(strftime_f);\n\n    function tzset_f()\n    {\n" +
                "        throw new Sk.builtin.NotImplementedError(\"time.tzset() is not yet imple" +
                "mented\");\n        Sk.builtin.pyCheckArgs(\"tzset\", arguments, 0, 0);\n    }\n" +
                "\n    mod.tzset = new Sk.builtin.func(tzset_f);\n\n    function strptime_f(s, fo" +
                "rmat)\n    {\n        Sk.builtin.pyCheckArgs(\"strptime\", arguments, 1, 2);\n  " +
                "      Sk.builtin.pyCheckType(\"string\", \"string\", Sk.builtin.checkString(s));" +
                "\n        if (format !== undefined) {\n            Sk.builtin.pyCheckType(\"form" +
                "at\", \"string\", Sk.builtin.checkString(format));\n        } else {\n          " +
                "  format = new Sk.builtin.str(\"%a %b %d %H:%M:%S %Y\");\n        }\n\n        r" +
                "eturn date_to_struct_time(strptime(Sk.ffi.remapToJs(s), Sk.ffi.remapToJs(format)" +
                ", true));\n    }\n\n    mod.strptime = new Sk.builtin.func(strptime_f);\n\n    r" +
                "eturn mod;\n};\n",
        "src/lib/pythonds/basic/stack.py": "# Bradley N. Miller, David L. Ranum\n# Introduction to Data Structures and Algor" +
                "ithms in Python\n# Copyright 2005\n# \n#stack.py\r\n\r\nclass Stack:\r\n    def " +
                "__init__(self):\r\n        self.items = []\r\n\r\n    def isEmpty(self):\r\n    " +
                "    return self.items == []\r\n\r\n    def push(self, item):\r\n        self.ite" +
                "ms.append(item)\r\n\r\n    def pop(self):\r\n        return self.items.pop()\r\n" +
                "\r\n    def peek(self):\r\n        return self.items[len(self.items)-1]\r\n\r\n " +
                "   def size(self):\r\n        return len(self.items)\r\n\r\n",
        "src/lib/sndhdr.py": "raise NotImplementedError(\"sndhdr is not yet implemented in Skulpt\")\n",
        "src/lib/codeop.py": "raise NotImplementedError(\"codeop is not yet implemented in Skulpt\")\n",
        "src/lib/getpass.py": "raise NotImplementedError(\"getpass is not yet implemented in Skulpt\")\n",
        "src/lib/anydbm.py": "raise NotImplementedError(\"anydbm is not yet implemented in Skulpt\")\n",
        "src/lib/urlparse.py": "raise NotImplementedError(\"urlparse is not yet implemented in Skulpt\")\n",
        "src/lib/CGIHTTPServer.py": "raise NotImplementedError(\"CGIHTTPServer is not yet implemented in Skulpt\")\n",
        "src/lib/fnmatch.py": "raise NotImplementedError(\"fnmatch is not yet implemented in Skulpt\")\n",
        "src/lib/HTMLParser.py": "raise NotImplementedError(\"HTMLParser is not yet implemented in Skulpt\")\n",
        "src/lib/calendar.py": "raise NotImplementedError(\"calendar is not yet implemented in Skulpt\")\n",
        "src/lib/compiler/__init__.py": "raise NotImplementedError(\"compiler is not yet implemented in Skulpt\")\n",
        "src/lib/pydoc.py": "raise NotImplementedError(\"pydoc is not yet implemented in Skulpt\")\n",
        "src/lib/multifile.py": "raise NotImplementedError(\"multifile is not yet implemented in Skulpt\")\n",
        "src/lib/lib2to3/pgen2/__init__.py": "raise NotImplementedError(\"pgen2 is not yet implemented in Skulpt\")\n",
        "src/lib/dbhash.py": "raise NotImplementedError(\"dbhash is not yet implemented in Skulpt\")\n",
        "src/lib/ihooks.py": "raise NotImplementedError(\"ihooks is not yet implemented in Skulpt\")\n",
        "src/lib/lib2to3/tests/__init__.py": "raise NotImplementedError(\"tests is not yet implemented in Skulpt\")\n",
        "src/lib/genericpath.py": "raise NotImplementedError(\"genericpath is not yet implemented in Skulpt\")\n",
        "src/lib/unittest/__init__.py": "__author__ = 'bmiller'\n'''\nThis is the start of something that behaves like\nt" +
                "he unittest module from cpython.\n\n'''\n\nclass TestCase:\n    def __init__(sel" +
                "f):\n        self.numPassed = 0\n        self.numFailed = 0\n        self.assert" +
                "Passed = 0\n        self.assertFailed = 0\n        self.verbosity = 1\n        s" +
                "elf.tlist = []\n        testNames = {}\n        for name in dir(self):\n        " +
                "    if name[:4] == 'test' and name not in testNames:\n                self.tlist" +
                ".append(getattr(self,name))\n                testNames[name]=True\n\n    def set" +
                "Up(self):\n        pass\n\n    def tearDown(self):\n        pass\n    def cleanN" +
                "ame(self,funcName):\n    # work around skulpts lack of an __name__ \n        fun" +
                "cName = str(funcName)\n        funcName = funcName[13:]\n        funcName = func" +
                "Name[:funcName.find('<')-3]\n        return funcName\n        \n    def main(sel" +
                "f):\n\n        for func in self.tlist:\n            if self.verbosity > 1:\n    " +
                "            print('Running %s' % self.cleanName(func))\n            try:\n      " +
                "          self.setUp()\n                self.assertPassed = 0\n                s" +
                "elf.assertFailed = 0\n                func()\n                self.tearDown()\n " +
                "               if self.assertFailed == 0:\n                    self.numPassed +=" +
                " 1\n                else:\n                    self.numFailed += 1\n            " +
                "        print('Tests failed in %s ' % self.cleanName(func))\n            except " +
                "Exception as e:\n                self.assertFailed += 1\n                self.nu" +
                "mFailed += 1\n                print('Test threw exception in %s (%s)' % (self.cl" +
                "eanName(func), e))\n        self.showSummary()\n\n    def assertEqual(self, actu" +
                "al, expected, feedback=\"\"):\n        res = actual==expected\n        self.appe" +
                "ndResult(res,str(actual)+' to be equal to ',expected, feedback)\n\n    def asser" +
                "tNotEqual(self, actual, expected, feedback=\"\"):\n        res = actual != expec" +
                "ted\n        self.appendResult(res,str(actual)+' to not equal ',expected,feedbac" +
                "k)\n\n    def assertTrue(self,x, feedback=\"\"):\n        res = bool(x) is True" +
                "\n        self.appendResult(res,str(x)+' to be ',True,feedback)\n\n    def asser" +
                "tFalse(self,x, feedback=\"\"):\n        res = not bool(x)\n        self.appendRe" +
                "sult(res,str(x)+' to be ',False,feedback)\n\n    def assertIs(self,a,b, feedback" +
                "=\"\"):\n        res = a is b\n        self.appendResult(res,str(a)+' to be the " +
                "same object as ',b,feedback)\n\n    def assertIsNot(self,a,b, feedback=\"\"):\n " +
                "       res = a is not b\n        self.appendResult(res,str(a)+' to not be the sa" +
                "me object as ',b,feedback)\n\n    def assertIsNone(self,x, feedback=\"\"):\n    " +
                "    res = x is None\n        self.appendResult(res,x,None,feedback)\n\n    def a" +
                "ssertIsNotNone(self,x, feedback=\"\"):\n        res = x is not None\n        sel" +
                "f.appendResult(res,str(x)+' to not be ',None,feedback)\n\n    def assertIn(self," +
                "a,b, feedback=\"\"):\n        res = a in b\n        self.appendResult(res,str(a)" +
                "+' to be in ',b,feedback)\n\n    def assertNotIn(self,a,b, feedback=\"\"):\n    " +
                "    res = a not in b\n        self.appendResult(res,str(a)+' to not be in ',b,fe" +
                "edback)\n\n    def assertIsInstance(self,a,b, feedback=\"\"):\n        res = isi" +
                "nstance(a,b)\n        self.appendResult(res,str(a)+' to be an instance of ',b,fe" +
                "edback)\n\n    def assertNotIsInstance(self,a,b, feedback=\"\"):\n        res = " +
                "not isinstance(a,b)\n        self.appendResult(res,str(a)+' to not be an instanc" +
                "e of ',b,feedback)\n\n    def assertAlmostEqual(self, a, b, places=7, feedback=" +
                "\"\"):\n        res = round(a-b, places) == 0\n        self.appendResult(res,str" +
                "(a)+' to equal ',b,feedback)\n\n    def assertNotAlmostEqual(self, a, b, places=" +
                "7, feedback=\"\"):\n        res = round(a-b, places) != 0\n        self.appendRe" +
                "sult(res,str(a)+' to not equal ',b,feedback)\n\n    def assertGreater(self,a,b, " +
                "feedback=\"\"):\n        res = a > b\n        self.appendResult(res,str(a)+' to " +
                "be greater than ',b,feedback)\n\n    def assertGreaterEqual(self,a,b, feedback=" +
                "\"\"):\n        res = a >= b\n        self.appendResult(res,str(a)+' to be great" +
                "er than or equal to ',b,feedback)\n\n    def assertLess(self,a,b, feedback=\"\")" +
                ":\n        res = a < b\n        self.appendResult(res,str(a)+' to be less than '" +
                ",b,feedback)\n\n    def assertLessEqual(self,a,b, feedback=\"\"):\n        res =" +
                " a <= b\n        self.appendResult(res,str(a)+' to be less than or equal to ',b," +
                "feedback)\n\n    def appendResult(self,res,actual,expected,feedback):\n        i" +
                "f res:\n            msg = 'Pass'\n            self.assertPassed += 1\n        el" +
                "se:\n            msg = 'Fail: expected %s got %s ' % (str(actual),str(expected))" +
                " + feedback\n            print(msg)\n            self.assertFailed += 1\n\n    d" +
                "ef assertRaises(self, exception, callable=None, *args, **kwds):\n        # with " +
                "is currently not supported hence we just try and catch\n        if callable is N" +
                "one:\n            raise NotImplementedError(\"assertRaises does currently not su" +
                "pport assert contexts\")\n        if kwds:\n            raise NotImplementedErro" +
                "r(\"assertRaises does currently not support **kwds\")\n\n        res = False\n  " +
                "      actualerror = str(exception())\n        try:\n            callable(*args)" +
                "\n        except exception as ex:\n            res = True\n        except Except" +
                "ion as inst:\n            actualerror = str(inst)\n            print(\"ACT = \"," +
                " actualerror, str(exception()))\n        else:\n            actualerror = \"No E" +
                "rror\"\n\n        self.appendResult(res, str(exception()), actualerror, \"\")\n " +
                "       \n    def fail(self, msg=None):\n        if msg is None:\n            msg" +
                " = 'Fail'\n        else:\n            msg = 'Fail: ' + msg\n        print(msg)\n" +
                "        self.assertFailed += 1\n\n    def showSummary(self):\n        pct = self" +
                ".numPassed / (self.numPassed+self.numFailed) * 100\n        print(\"Ran %d tests" +
                ", passed: %d failed: %d\\n\" % (self.numPassed+self.numFailed,\n                " +
                "                               self.numPassed, self.numFailed))\n\n\n\ndef main(" +
                "verbosity=1, names=None):\n    glob = globals() # globals() still needs work\n  " +
                "  if names == None:\n        names = glob\n    for name in names:\n        if is" +
                "subclass(glob[name],TestCase):\n            try:\n                tc = glob[name" +
                "]()\n                tc.verbosity = verbosity\n                tc.main()\n      " +
                "      except:\n                print(\"Uncaught Error in: \", name)\n\n",
        "src/lib/webgl/__init__.js": "var $builtinmodule = function(name)\n{\n  var mod = {};\n\n  var makeFailHTML = " +
                "function(msg) {\n    return '' +\n      '<table style=\"background-color: #8CE; " +
                "width: 100%; height: 100%;\"><tr>' +\n      '<td align=\"center\">' +\n      '<d" +
                "iv style=\"display: table-cell; vertical-align: middle;\">' +\n      '<div style" +
                "=\"\">' + msg + '</div>' +\n      '</div>' +\n      '</td></tr></table>';\n  };" +
                "\n\n  var GET_A_WEBGL_BROWSER = '' +\n    'This page requires a browser that sup" +
                "ports WebGL.<br/>' +\n    '<a href=\"http://get.webgl.org\">Click here to upgrad" +
                "e your browser.</a>';\n\n  var NEED_HARDWARE = '' +\n    \"It doesn't appear you" +
                "r computer can support WebGL.<br/>\" +\n    '<a href=\"http://get.webgl.org\">Cl" +
                "ick here for more information.</a>';\n  \n  var create3DContext = function(canva" +
                "s) {\n    var names = [\"webgl\", \"experimental-webgl\", \"webkit-3d\", \"moz-w" +
                "ebgl\"];\n    var gl = null;\n    for (var ii = 0; ii < names.length; ++ii) {\n " +
                "     try {\n        gl = canvas.getContext(names[ii]);\n      }\n      catch(e) " +
                "{\n      }\n      if (gl) {\n          break;\n      }\n    }\n    if (gl) {\n  " +
                "    // Disallow selection by default. This keeps the cursor from changing to an" +
                "\n      // I-beam when the user clicks and drags. It's easier on the eyes.\n    " +
                "  function returnFalse() {\n        return false;\n      }\n\n      canvas.onsel" +
                "ectstart = returnFalse;\n      canvas.onmousedown = returnFalse;\n    }\n    ret" +
                "urn gl;\n  };\n\n  var setupWebGL = function(canvasContainerId, opt_canvas) {\n " +
                "   var container = document.getElementById(canvasContainerId);\n    var context;" +
                "\n    if (!opt_canvas) {\n      opt_canvas = container.getElementsByTagName(\"ca" +
                "nvas\")[0];\n    }\n    if (!opt_canvas) {\n        // this browser doesn't supp" +
                "ort the canvas tag at all. Not even 2d.\n      container.innerHTML = makeFailHTM" +
                "L(GET_A_WEBGL_BROWSER);\n      return;\n    }\n\n    var gl = create3DContext(op" +
                "t_canvas);\n    if (!gl) {\n      // TODO(gman): fix to official way to detect t" +
                "hat it's the user's machine, not the browser.\n      var browserStrings = naviga" +
                "tor.userAgent.match(/(\\w+\\/.*? )/g);\n      var browsers = {};\n      try {\n " +
                "       for (var b = 0; b < browserStrings.length; ++b) {\n          var parts = " +
                "browserStrings[b].match(/(\\w+)/g);\n          var bb = [];\n          for (var " +
                "ii = 1; ii < parts.length; ++ii) {\n            bb.push(parseInt(parts[ii]));\n " +
                "         }\n          browsers[parts[0]] = bb;\n        }\n      }\n      catch " +
                "(e) {\n      }\n      if (browsers.Chrome &&\n           (browsers.Chrome[0] > 7" +
                " ||\n                 (browsers.Chrome[0] == 7 && browsers.Chrome[1] > 0) ||\n  " +
                "               (browsers.Chrome[0] == 7 && browsers.Chrome[1] == 0 && browsers.C" +
                "hrome[2] >= 521))) {\n        container.innerHTML = makeFailHTML(NEED_HARDWARE);" +
                "\n      }\n      else {\n        container.innerHTML = makeFailHTML(GET_A_WEBGL_" +
                "BROWSER);\n      }\n    }\n    return gl;\n  };\n\n  /**\n   * The Context encap" +
                "sulates the underlying WebGL native JavaScript API.\n   */\n  mod.Context = Sk.m" +
                "isceval.buildClass(mod, function($gbl, $loc) {\n    $loc.__init__ = new Sk.built" +
                "in.func(\n      function(self, canvasid) {\n        var canvas = document.getEle" +
                "mentById(canvasid.v);\n        var gl = setupWebGL(canvasid.v, canvas)\n        " +
                "if (!gl) {\n          throw new Error(\"Your browser does not appear to support " +
                "WebGL.\");\n        }\n\n        self.gl = gl;\n\n        // Copy symbolic const" +
                "ants and functions from native WebGL, encapsulating where necessary.       \n   " +
                "     for (var k in gl.__proto__) {\n          if (typeof gl.__proto__[k] === 'nu" +
                "mber') {\n            Sk.abstr.objectSetItem(self['$d'], new Sk.builtin.str(k), " +
                "gl.__proto__[k]);\n          }\n          else if (typeof gl.__proto__[k] === \"" +
                "function\") {\n            switch(k) {\n              case 'bufferData': {\n    " +
                "          }\n              break;\n              case 'clearColor': {\n         " +
                "     }\n              break;\n              case 'drawArrays': {\n              " +
                "}\n              break;\n              case 'getAttribLocation': {\n            " +
                "  }\n              break;\n              case 'getUniformLocation': {\n         " +
                "     }\n              break;\n              case 'shaderSource': {\n            " +
                "  }\n              break;\n              case 'uniformMatrix4fv': {\n           " +
                "   }\n              break;\n              case 'vertexAttribPointer': {\n       " +
                "       }\n              break;\n              case 'viewport': {\n              " +
                "}\n              break;\n              default: {\n                (function(key" +
                ") {\n                  Sk.abstr.objectSetItem(self['$d'], new Sk.builtin.str(k)," +
                " new Sk.builtin.func(function() {\n                    var f = gl.__proto__[key]" +
                ";\n                    return f.apply(gl, arguments);\n                  }));\n " +
                "                }(k));\n              }\n            }\n          }\n        }\n" +
                "\n        gl.clearColor(100.0/255.0, 149.0/255.0, 237.0/255.0, 1.0);\n        gl" +
                ".clear(gl.COLOR_BUFFER_BIT);\n      }\n    );\n\n    $loc.tp$getattr = Sk.builti" +
                "n.object.prototype.GenericGetAttr;\n\n    $loc.bufferData = new Sk.builtin.func(" +
                "\n      function(self, target, data, usage) {\n        self.gl.bufferData(target" +
                ", data.v, usage);\n      }\n    );\n\n    $loc.clearColor = new Sk.builtin.func(" +
                "\n      function(self, red, green, blue, alpha) {\n        self.gl.clearColor(Sk" +
                ".builtin.asnum$(red), Sk.builtin.asnum$(green), Sk.builtin.asnum$(blue), Sk.buil" +
                "tin.asnum$(alpha));\n      }\n    );\n\n    $loc.getAttribLocation = new Sk.buil" +
                "tin.func(\n      function(self, program, name) {\n        return self.gl.getAttr" +
                "ibLocation(program, name.v);\n      }\n    );\n\n    $loc.getUniformLocation = n" +
                "ew Sk.builtin.func(\n      function(self, program, name) {\n        return self." +
                "gl.getUniformLocation(program, name.v);\n      }\n    );\n\n    $loc.shaderSourc" +
                "e = new Sk.builtin.func(\n      function(self, shader, src) {\n        self.gl.s" +
                "haderSource(shader, src.v);\n      }\n    );\n\n    $loc.drawArrays = new Sk.bui" +
                "ltin.func(\n      function(self, mode, first, count) {\n        self.gl.drawArra" +
                "ys(Sk.builtin.asnum$(mode), Sk.builtin.asnum$(first), Sk.builtin.asnum$(count));" +
                "\n      }\n    );\n\n    $loc.vertexAttribPointer = new Sk.builtin.func(\n      " +
                "function(self, index, size, type, normalized, stride, dunno) {\n        self.gl." +
                "vertexAttribPointer(index, Sk.builtin.asnum$(size), Sk.builtin.asnum$(type), nor" +
                "malized, Sk.builtin.asnum$(stride), Sk.builtin.asnum$(dunno));\n      }\n    );" +
                "\n\n    $loc.viewport = new Sk.builtin.func(\n      function(self, x, y, width, " +
                "height) {\n        self.gl.viewport(Sk.builtin.asnum$(x), Sk.builtin.asnum$(y), " +
                "Sk.builtin.asnum$(width), Sk.builtin.asnum$(height));\n      }\n    );\n\n    $l" +
                "oc.uniformMatrix4fv = new Sk.builtin.func(\n      function(self, location, trans" +
                "pose, values) {\n//        console.log(\"location  \" + (typeof location));\n// " +
                "       console.log(\"transpose \" + (typeof transpose));\n//        console.log(" +
                "\"values.v  \" + (typeof values.v));\n        self.gl.uniformMatrix4fv(Sk.builti" +
                "n.asnum$(location), transpose, values.v);\n      }\n    );\n\n    $loc.setDrawFu" +
                "nc = new Sk.builtin.func(function(self, func) {\n      var startTime = (new Date" +
                "()).getTime();\n      var intervalId = setInterval(\n        function() {\n     " +
                "     Sk.misceval.callsim(func, self, (new Date()).getTime() - startTime);\n     " +
                "   }, 1000.0 / 60.0); // 60 fps\n    });\n\n  }, 'Context', []);\n\n  mod.Float3" +
                "2Array = Sk.misceval.buildClass(mod, function($gbl, $loc) {\n    $loc.__init__ =" +
                " new Sk.builtin.func(function(self, data) {\n      if (typeof data === \"number" +
                "\") {\n        self.v = new Float32Array(data);\n      }\n      else {\n        " +
                "self.v = new Float32Array(Sk.ffi.remapToJs(data));\n      }\n    });\n\n    $loc" +
                ".__repr__ = new Sk.builtin.func(function(self) {\n      var copy = [];\n      fo" +
                "r (var i = 0; i < self.v.length; ++i) {\n        copy.push(self.v[i]);\n      }" +
                "\n      return new Sk.builtin.str(\"[\" + copy.join(', ') + \"]\");\n     });\n " +
                " }, 'Float32Array', []);\n\n  /**\n   * A 4x4 (mutable) matrix suitable for Open" +
                "GL.\n   *\n   * Mutability is chosen for performance.\n   * The inderlying imple" +
                "mentation is Float32Array.\n   * The indexing of the elements is\n   * 0 4  8 12" +
                "\n   * 1 5  9 13\n   * 2 6 10 14\n   * 3 7 11 15\n   */\n  mod.Matrix4x4 = Sk.mi" +
                "sceval.buildClass(mod, function($gbl, $loc) {\n    $loc.__init__ = new Sk.builti" +
                "n.func(function(self, data) {\n      self.v = new Float32Array(Sk.ffi.remapToJs(" +
                "data));\n    });\n\n    $loc.identity = new Sk.builtin.func(\n      function(sel" +
                "f) {\n\n        var m = self.v;\n\n        m[0]  = 1;\n        m[1]  = 0;\n     " +
                "   m[2]  = 0;\n        m[3]  = 0;\n\n        m[4]  = 0;\n        m[5]  = 1;\n   " +
                "     m[6]  = 0;\n        m[7]  = 0;\n\n        m[8]  = 0;\n        m[9]  = 0;\n " +
                "       m[10] = 1;\n        m[11] = 0;\n\n        m[12] = 0;\n        m[13] = 0;" +
                "\n        m[14] = 0;\n        m[15] = 1;\n      }\n    );\n\n    $loc.perspectiv" +
                "e = new Sk.builtin.func(\n      function(self, fov, aspect, near, far) {\n      " +
                "  \n        var t = Math.tan(Math.PI * 0.5 - 0.5 * (Sk.builtin.asnum$(fov) * Mat" +
                "h.PI / 180));\n        var a = Sk.builtin.asnum$(aspect)\n        var n = Sk.bui" +
                "ltin.asnum$(near)\n        var f = Sk.builtin.asnum$(far)\n        var k = 1.0 /" +
                " (n - f);\n\n        var m = self.v;\n\n        m[0]  = t / a;\n        m[1]  = " +
                "0;\n        m[2]  = 0;\n        m[3]  = 0;\n\n        m[4]  = 0;\n        m[5]  " +
                "= t;\n        m[6]  = 0;\n        m[7]  = 0;\n\n        m[8]  = 0;\n        m[9]" +
                "  = 0;\n        m[10] = (n + f) * k;\n        m[11] = -1;\n\n        m[12] = 0;" +
                "\n        m[13] = 0;\n        m[14] = n * f * k * 2;\n        m[15] = 0;\n      " +
                "}\n    );\n\n    $loc.translate = new Sk.builtin.func(\n      function(self, tra" +
                "nslation) {\n\n        var m = self.v;\n        var t = Sk.ffi.remapToJs(transla" +
                "tion);\n\n        m[0]  = 1;\n        m[1]  = 0;\n        m[2]  = 0;\n        m[" +
                "3]  = 0;\n\n        m[4]  = 0;\n        m[5]  = 1;\n        m[6]  = 0;\n        " +
                "m[7]  = 0;\n\n        m[8]  = 0;\n        m[9]  = 0;\n        m[10] = 1;\n      " +
                "  m[11] = 0;\n\n        m[12] = t[0];\n        m[13] = t[1];\n        m[14] = t[" +
                "2];\n        m[15] = 1;\n      }\n    );\n\n    $loc.__repr__ = new Sk.builtin.f" +
                "unc(function(self) {\n      var copy = [];\n      for (var i = 0; i < self.v.len" +
                "gth; ++i) {\n        copy.push(self.v[i]);\n      }\n      return new Sk.builtin" +
                ".str(\"[\" + copy.join(', ') + \"]\");\n     });\n  }, 'Matrix4x4', []);\n\n  re" +
                "turn mod;\n};",
        "src/lib/fpformat.py": "raise NotImplementedError(\"fpformat is not yet implemented in Skulpt\")\n",
        "src/lib/xml/parsers/__init__.py": "raise NotImplementedError(\"parsers is not yet implemented in Skulpt\")\n",
        "src/lib/modulefinder.py": "raise NotImplementedError(\"modulefinder is not yet implemented in Skulpt\")\n",
        "src/lib/config/__init__.py": "raise NotImplementedError(\"config is not yet implemented in Skulpt\")\n",
        "src/lib/trace.py": "raise NotImplementedError(\"trace is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/trees/balance.py": "#!/bin/env python3.1\n# Bradley N. Miller, David L. Ranum\n# Introduction to Dat" +
                "a Structures and Algorithms in Python\n# Copyright 2005, 2010\n# \n\nfrom .bst i" +
                "mport BinarySearchTree, TreeNode\n\nclass AVLTree(BinarySearchTree):\n    '''\n " +
                "   Author:  Brad Miller\n    Date:  1/15/2005\n    Description:  Imlement a bina" +
                "ry search tree with the following interface\n                  functions:  \n   " +
                "               __contains__(y) <==> y in x\n                  __getitem__(y) <==" +
                "> x[y]\n                  __init__()\n                  __len__() <==> len(x)\n " +
                "                 __setitem__(k,v) <==> x[k] = v\n                  clear()\n    " +
                "              get(k)\n                  has_key(k)\n                  items() \n" +
                "                  keys() \n                  values()\n                  put(k,v" +
                ")\n    '''\n\n\n    def _put(self,key,val,currentNode):\n        if key < curren" +
                "tNode.key:\n            if currentNode.hasLeftChild():\n                self._pu" +
                "t(key,val,currentNode.leftChild)\n            else:\n                currentNode" +
                ".leftChild = TreeNode(key,val,parent=currentNode)\n                self.updateBa" +
                "lance(currentNode.leftChild)\n        else:\n            if currentNode.hasRight" +
                "Child():\n                self._put(key,val,currentNode.rightChild)\n           " +
                " else:\n                currentNode.rightChild = TreeNode(key,val,parent=current" +
                "Node)\n                self.updateBalance(currentNode.rightChild)               " +
                " \n\n    def updateBalance(self,node):\n        if node.balanceFactor > 1 or nod" +
                "e.balanceFactor < -1:\n            self.rebalance(node)\n            return\n   " +
                "     if node.parent != None:\n            if node.isLeftChild():\n              " +
                "  node.parent.balanceFactor += 1\n            elif node.isRightChild():\n       " +
                "         node.parent.balanceFactor -= 1\n\n            if node.parent.balanceFac" +
                "tor != 0:\n                self.updateBalance(node.parent)\n\n    def rebalance(" +
                "self,node):\n        if node.balanceFactor < 0:\n            if node.rightChild." +
                "balanceFactor > 0:\n                # Do an LR Rotation\n                self.ro" +
                "tateRight(node.rightChild)\n                self.rotateLeft(node)\n            e" +
                "lse:\n                # single left\n                self.rotateLeft(node)\n    " +
                "    elif node.balanceFactor > 0:\n            if node.leftChild.balanceFactor < " +
                "0:\n                # Do an RL Rotation\n                self.rotateLeft(node.le" +
                "ftChild)\n                self.rotateRight(node)\n            else:\n           " +
                "     # single right\n                self.rotateRight(node)\n\n    def rotateLef" +
                "t(self,rotRoot):\n        newRoot = rotRoot.rightChild\n        rotRoot.rightChi" +
                "ld = newRoot.leftChild\n        if newRoot.leftChild != None:\n            newRo" +
                "ot.leftChild.parent = rotRoot\n        newRoot.parent = rotRoot.parent\n        " +
                "if rotRoot.isRoot():\n            self.root = newRoot\n        else:\n          " +
                "  if rotRoot.isLeftChild():\n                rotRoot.parent.leftChild = newRoot" +
                "\n            else:\n                rotRoot.parent.rightChild = newRoot\n      " +
                "  newRoot.leftChild = rotRoot\n        rotRoot.parent = newRoot\n        rotRoot" +
                ".balanceFactor = rotRoot.balanceFactor + 1 - min(newRoot.balanceFactor, 0)\n    " +
                "    newRoot.balanceFactor = newRoot.balanceFactor + 1 + max(rotRoot.balanceFacto" +
                "r, 0)\n\n\n    def rotateRight(self,rotRoot):\n        newRoot = rotRoot.leftChi" +
                "ld\n        rotRoot.leftChild = newRoot.rightChild\n        if newRoot.rightChil" +
                "d != None:\n            newRoot.rightChild.parent = rotRoot\n        newRoot.par" +
                "ent = rotRoot.parent\n        if rotRoot.isRoot():\n            self.root = newR" +
                "oot\n        else:\n            if rotRoot.isRightChild():\n                rotR" +
                "oot.parent.rightChild = newRoot\n            else:\n                rotRoot.pare" +
                "nt.leftChild = newRoot\n        newRoot.rightChild = rotRoot\n        rotRoot.pa" +
                "rent = newRoot\n        rotRoot.balanceFactor = rotRoot.balanceFactor - 1 - max(" +
                "newRoot.balanceFactor, 0)\n        newRoot.balanceFactor = newRoot.balanceFactor" +
                " - 1 + min(rotRoot.balanceFactor, 0)\n        \n",
        "src/lib/urllib/request/__init__.js": "var $builtinmodule = function (name) {\n    var request = {};\n\n\n    //~ Class" +
                "es .................................................................\n\n    // R" +
                "esponse class\n    //\n    // Response objects are returned by the request, get," +
                " post, etc.\n    // methods, allowing the user to access the response text, stat" +
                "us\n    // code, and other information.\n\n    // ------------------------------" +
                "------------------------------\n    var response = function ($gbl, $loc) {\n\n  " +
                "      // ------------------------------------------------------------\n        $" +
                "loc.__init__ = new Sk.builtin.func(function (self, xhr) {\n            self.data" +
                "$ = xhr.responseText;\n            self.lineList = self.data$.split(\"\\n\");\n " +
                "           self.lineList = self.lineList.slice(0, -1);\n            for (var i =" +
                " 0; i < self.lineList.length; i++) {\n                self.lineList[i] = self.li" +
                "neList[i] + '\\n';\n            }\n            self.currentLine = 0;\n          " +
                "  self.pos$ = 0;\n        });\n\n\n        // ----------------------------------" +
                "--------------------------\n        $loc.__str__ = new Sk.builtin.func(function " +
                "(self) {\n            return Sk.ffi.remapToPy('<Response>');\n        });\n\n\n " +
                "       // ------------------------------------------------------------\n        " +
                "$loc.__iter__ = new Sk.builtin.func(function (self) {\n            var allLines " +
                "= self.lineList;\n\n            return Sk.builtin.makeGenerator(function () {\n " +
                "               if (this.$index >= this.$lines.length) {\n                    ret" +
                "urn undefined;\n                }\n                return new Sk.builtin.str(thi" +
                "s.$lines[this.$index++]);\n            }, {\n                $obj  : self,\n    " +
                "            $index: 0,\n                $lines: allLines\n            });\n     " +
                "   });\n\n\n        // ---------------------------------------------------------" +
                "---\n        $loc.read = new Sk.builtin.func(function (self, size) {\n          " +
                "  if (self.closed) {\n                throw new Sk.builtin.ValueError(\"I/O oper" +
                "ation on closed file\");\n            }\n            var len = self.data$.length" +
                ";\n            if (size === undefined) {\n                size = len;\n         " +
                "   }\n            var ret = new Sk.builtin.str(self.data$.substr(self.pos$, size" +
                "));\n            self.pos$ += size;\n            if (self.pos$ >= len) {\n      " +
                "          self.pos$ = len;\n            }\n            return ret;\n        });" +
                "\n\n\n        // ------------------------------------------------------------\n " +
                "       $loc.readline = new Sk.builtin.func(function (self, size) {\n            " +
                "var line = \"\";\n            if (self.currentLine < self.lineList.length) {\n  " +
                "              line = self.lineList[self.currentLine];\n                self.curr" +
                "entLine++;\n            }\n            return new Sk.builtin.str(line);\n       " +
                " });\n\n\n        // -----------------------------------------------------------" +
                "-\n        $loc.readlines = new Sk.builtin.func(function (self, sizehint) {\n   " +
                "         var arr = [];\n            for (var i = self.currentLine; i < self.line" +
                "List.length; i++) {\n                arr.push(new Sk.builtin.str(self.lineList[i" +
                "]));\n            }\n            return new Sk.builtin.list(arr);\n        });\n" +
                "\n    };\n\n    request.Response =\n        Sk.misceval.buildClass(request, resp" +
                "onse, 'Response', []);\n\n\n    //~ Module functions ..........................." +
                ".............................\n\n    // ----------------------------------------" +
                "--------------------\n    /**\n     * Constructs and sends a Request. Returns Re" +
                "sponse object.\n     *\n     * http://docs.python-requests.org/en/latest/api/#re" +
                "quests.request\n     *\n     * For now, this implementation doesn't actually con" +
                "struct a Request\n     * object; it just makes the request through jQuery.ajax a" +
                "nd then\n     * constructs a Response.\n     */\n    request.urlopen = new Sk.bu" +
                "iltin.func(function (url, data, timeout) {\n        var xmlhttp = new XMLHttpReq" +
                "uest();\n\n        if (!data) {\n          xmlhttp.open(\"GET\", url.v, false);" +
                "\n          xmlhttp.send(null);\n        } else {\n          xmlhttp.open(\"POST" +
                "\", url.v, false);\n          xmlhttp.setRequestHeader(\"Content-type\", \"appli" +
                "cation/x-www-form-urlencoded\");\n          xmlhttp.setRequestHeader(\"Content-l" +
                "ength\", data.v.length);\n          xmlhttp.send(data.v);\n        }\n\n        " +
                "return Sk.misceval.callsim(request.Response, xmlhttp)\n    });\n\n\n    return r" +
                "equest;\n};\n",
        "src/lib/wave.py": "raise NotImplementedError(\"wave is not yet implemented in Skulpt\")\n",
        "src/lib/mailcap.py": "raise NotImplementedError(\"mailcap is not yet implemented in Skulpt\")\n",
        "src/lib/nntplib.py": "raise NotImplementedError(\"nntplib is not yet implemented in Skulpt\")\n",
        "src/lib/ssl.py": "raise NotImplementedError(\"ssl is not yet implemented in Skulpt\")\n",
        "src/lib/opcode.py": "raise NotImplementedError(\"opcode is not yet implemented in Skulpt\")\n",
        "src/lib/mailbox.py": "raise NotImplementedError(\"mailbox is not yet implemented in Skulpt\")\n",
        "src/lib/xmlrpclib.py": "raise NotImplementedError(\"xmlrpclib is not yet implemented in Skulpt\")\n",
        "src/lib/UserList.py": "raise NotImplementedError(\"UserList is not yet implemented in Skulpt\")\n",
        "src/lib/webgl/math.js": "var $builtinmodule = function(name)\n{\n    var mod = {};\n\n    // todo; should" +
                " probably put this in a math package\n    mod.Mat44 = Sk.misceval.buildClass(mod" +
                ", function($gbl, $loc)\n            {\n                $loc.__init__ = new Sk.bu" +
                "iltin.func(function(self)\n                    {\n                        Sk.mis" +
                "ceval.callsim($loc.loadIdentity, self);\n                        self.stack = []" +
                ";\n                    });\n\n                $loc.push = new Sk.builtin.func(fu" +
                "nction(self)\n                    {\n                        self.stack.push(sel" +
                "f.elements.slice(0));\n                    });\n\n                $loc.pop = new" +
                " Sk.builtin.func(function(self)\n                    {\n                        " +
                "self.elements = self.stack.pop();\n                    });\n\n                $l" +
                "oc.loadIdentity = new Sk.builtin.func(function(self)\n                    {\n   " +
                "                     self.elements = [1.0, 0.0, 0.0, 0.0,\n                     " +
                "                    0.0, 1.0, 0.0, 0.0,\n                                       " +
                "  0.0, 0.0, 1.0, 0.0,\n                                         0.0, 0.0, 0.0, 1" +
                ".0];\n                    });\n\n                $loc.transform3 = new Sk.builti" +
                "n.func(function(self, v)\n                    {\n                        var e =" +
                " self.elements;\n                        return Sk.misceval.callsim(mod.Vec3,\n " +
                "                           e[0] * v.x + e[4] * v.y + e[8] * v.z,\n              " +
                "              e[1] * v.x + e[5] * v.y + e[9] * v.z,\n                           " +
                " e[2] * v.x + e[6] * v.y + e[10] * v.z);\n                    });\n\n           " +
                "     $loc.scale = new Sk.builtin.func(function(self, sx, sy, sz)\n              " +
                "          {\n                            self.elements[0*4+0] *= sx;\n          " +
                "                  self.elements[0*4+1] *= sx;\n                            self." +
                "elements[0*4+2] *= sx;\n                            self.elements[0*4+3] *= sx;" +
                "\n\n                            self.elements[1*4+0] *= sy;\n                   " +
                "         self.elements[1*4+1] *= sy;\n                            self.elements[" +
                "1*4+2] *= sy;\n                            self.elements[1*4+3] *= sy;\n\n      " +
                "                      self.elements[2*4+0] *= sz;\n                            s" +
                "elf.elements[2*4+1] *= sz;\n                            self.elements[2*4+2] *= " +
                "sz;\n                            self.elements[2*4+3] *= sz;\n\n                " +
                "            return self;\n                        });\n\n                $loc.tr" +
                "anslate = new Sk.builtin.func(function(self, tx, ty, tz)\n                      " +
                "  {\n                            self.elements[3*4+0] += self.elements[0*4+0] * " +
                "tx + self.elements[1*4+0] * ty + self.elements[2*4+0] * tz;\n                   " +
                "         self.elements[3*4+1] += self.elements[0*4+1] * tx + self.elements[1*4+1" +
                "] * ty + self.elements[2*4+1] * tz;\n                            self.elements[3" +
                "*4+2] += self.elements[0*4+2] * tx + self.elements[1*4+2] * ty + self.elements[2" +
                "*4+2] * tz;\n                            self.elements[3*4+3] += self.elements[0" +
                "*4+3] * tx + self.elements[1*4+3] * ty + self.elements[2*4+3] * tz;\n           " +
                "                 return self;\n                        });\n\n                $l" +
                "oc.rotate = new Sk.builtin.func(function(self, angle, x, y, z)\n                " +
                "        {\n                            var mag = Math.sqrt(x*x + y*y + z*z);\n  " +
                "                          var sinAngle = Math.sin(angle * Math.PI / 180.0);\n   " +
                "                         var cosAngle = Math.cos(angle * Math.PI / 180.0);\n\n  " +
                "                          if (mag > 0)\n                            {\n         " +
                "                       var xx, yy, zz, xy, yz, zx, xs, ys, zs;\n                " +
                "                var oneMinusCos;\n                                var rotMat;\n" +
                "\n                                x /= mag;\n                                y /" +
                "= mag;\n                                z /= mag;\n\n                           " +
                "     xx = x * x;\n                                yy = y * y;\n                 " +
                "               zz = z * z;\n                                xy = x * y;\n       " +
                "                         yz = y * z;\n                                zx = z * x" +
                ";\n                                xs = x * sinAngle;\n                         " +
                "       ys = y * sinAngle;\n                                zs = z * sinAngle;\n " +
                "                               oneMinusCos = 1.0 - cosAngle;\n\n                " +
                "                rotMat = Sk.misceval.callsim(mod.Mat44);\n\n                    " +
                "            rotMat.elements[0*4+0] = (oneMinusCos * xx) + cosAngle;\n           " +
                "                     rotMat.elements[0*4+1] = (oneMinusCos * xy) - zs;\n        " +
                "                        rotMat.elements[0*4+2] = (oneMinusCos * zx) + ys;\n     " +
                "                           rotMat.elements[0*4+3] = 0.0;\n\n                    " +
                "            rotMat.elements[1*4+0] = (oneMinusCos * xy) + zs;\n                 " +
                "               rotMat.elements[1*4+1] = (oneMinusCos * yy) + cosAngle;\n        " +
                "                        rotMat.elements[1*4+2] = (oneMinusCos * yz) - xs;\n     " +
                "                           rotMat.elements[1*4+3] = 0.0;\n\n                    " +
                "            rotMat.elements[2*4+0] = (oneMinusCos * zx) - ys;\n                 " +
                "               rotMat.elements[2*4+1] = (oneMinusCos * yz) + xs;\n              " +
                "                  rotMat.elements[2*4+2] = (oneMinusCos * zz) + cosAngle;\n     " +
                "                           rotMat.elements[2*4+3] = 0.0;\n\n                    " +
                "            rotMat.elements[3*4+0] = 0.0;\n                                rotMa" +
                "t.elements[3*4+1] = 0.0;\n                                rotMat.elements[3*4+2]" +
                " = 0.0;\n                                rotMat.elements[3*4+3] = 1.0;\n\n      " +
                "                          rotMat = rotMat.multiply(self);\n                     " +
                "           self.elements = rotMat.elements;\n                            }\n    " +
                "                        return self;\n                        });\n\n           " +
                "     $loc.multiply = new Sk.builtin.func(function(self, right)\n                " +
                "        {\n                            var tmp = Sk.misceval.callsim(mod.Mat44);" +
                "\n\n                            for (var i = 0; i < 4; i++)\n                   " +
                "         {\n                                tmp.elements[i*4+0] =\n             " +
                "                   (self.elements[i*4+0] * right.elements[0*4+0]) +\n           " +
                "                     (self.elements[i*4+1] * right.elements[1*4+0]) +\n         " +
                "                       (self.elements[i*4+2] * right.elements[2*4+0]) +\n       " +
                "                         (self.elements[i*4+3] * right.elements[3*4+0]) ;\n\n   " +
                "                             tmp.elements[i*4+1] =\n                            " +
                "    (self.elements[i*4+0] * right.elements[0*4+1]) +\n                          " +
                "      (self.elements[i*4+1] * right.elements[1*4+1]) +\n                        " +
                "        (self.elements[i*4+2] * right.elements[2*4+1]) +\n                      " +
                "          (self.elements[i*4+3] * right.elements[3*4+1]) ;\n\n                  " +
                "              tmp.elements[i*4+2] =\n                                (self.eleme" +
                "nts[i*4+0] * right.elements[0*4+2]) +\n                                (self.ele" +
                "ments[i*4+1] * right.elements[1*4+2]) +\n                                (self.e" +
                "lements[i*4+2] * right.elements[2*4+2]) +\n                                (self" +
                ".elements[i*4+3] * right.elements[3*4+2]) ;\n\n                                t" +
                "mp.elements[i*4+3] =\n                                (self.elements[i*4+0] * ri" +
                "ght.elements[0*4+3]) +\n                                (self.elements[i*4+1] * " +
                "right.elements[1*4+3]) +\n                                (self.elements[i*4+2] " +
                "* right.elements[2*4+3]) +\n                                (self.elements[i*4+3" +
                "] * right.elements[3*4+3]) ;\n                            }\n\n                 " +
                "           self.elements = tmp.elements;\n                            return sel" +
                "f;\n                        });\n\n                /* Following gluLookAt implem" +
                "entation is adapted from\n                 * the Mesa 3D Graphics library. http:" +
                "//www.mesa3d.org\n                 */\n                // todo; rewrite this wit" +
                "h proper vec/mat ops\n                $loc.lookAt = new Sk.builtin.func(function" +
                "(self, eyeX, eyeY, eyeZ,\n                                                      " +
                "           centerX, centerY, centerZ,\n                                         " +
                "                        upX, upY, upZ)\n                        {\n             " +
                "               /* Z vector */\n                            var z = [\n          " +
                "                      eyeX - centerX,\n                                eyeY - ce" +
                "nterY,\n                                eyeZ - centerZ\n                        " +
                "    ];\n                            var mag = Math.sqrt(z[0] * z[0] + z[1] * z[1" +
                "] + z[2] * z[2]);\n                            if (mag)\n                       " +
                "     {\n                                z[0] /= mag;\n                          " +
                "      z[1] /= mag;\n                                z[2] /= mag;\n              " +
                "              }\n\n                            /* Y vector */\n                 " +
                "           var y = [ upX, upY, upZ ];\n\n                            /* X vector" +
                " = Y cross Z */\n                            var x = [];\n                      " +
                "      x[0] = y[1] * z[2] - y[2] * z[1];\n                            x[1] = -y[0" +
                "] * z[2] + y[2] * z[0];\n                            x[2] = y[0] * z[1] - y[1] *" +
                " z[0];\n\n                            /* Recompute Y = Z cross X */\n           " +
                "                 y[0] = z[1] * x[2] - z[2] * x[1];\n                            " +
                "y[1] = -z[0] * x[2] + z[2] * x[0];\n                            y[2] = z[0] * x[" +
                "1] - z[1] * x[0];\n\n                            /* mpichler, 19950515 */\n     " +
                "                       /* cross product gives area of parallelogram, which is < " +
                "1.0 for\n                            * non-perpendicular unit-length vectors; so" +
                " normalize x, y here\n                            */\n\n                        " +
                "    mag = Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);\n                 " +
                "           if (mag) {\n                                x[0] /= mag;\n           " +
                "                     x[1] /= mag;\n                                x[2] /= mag;" +
                "\n                            }\n\n                            mag = Math.sqrt(y" +
                "[0] * y[0] + y[1] * y[1] + y[2] * y[2]);\n                            if (mag) {" +
                "\n                                y[0] /= mag;\n                                " +
                "y[1] /= mag;\n                                y[2] /= mag;\n                    " +
                "        }\n\n                            var lookAt = Sk.misceval.callsim(mod.Ma" +
                "t44);\n                            lookAt.elements[0 * 4 + 0] = x[0];\n         " +
                "                   lookAt.elements[1 * 4 + 0] = x[1];\n                         " +
                "   lookAt.elements[2 * 4 + 0] = x[2];\n                            lookAt.elemen" +
                "ts[3 * 4 + 0] = 0.;\n                            lookAt.elements[0 * 4 + 1] = y[" +
                "0];\n                            lookAt.elements[1 * 4 + 1] = y[1];\n           " +
                "                 lookAt.elements[2 * 4 + 1] = y[2];\n                           " +
                " lookAt.elements[3 * 4 + 1] = 0.;\n                            lookAt.elements[0" +
                " * 4 + 2] = z[0];\n                            lookAt.elements[1 * 4 + 2] = z[1]" +
                ";\n                            lookAt.elements[2 * 4 + 2] = z[2];\n             " +
                "               lookAt.elements[3 * 4 + 2] = 0.;\n                            loo" +
                "kAt.elements[0 * 4 + 3] = 0.;\n                            lookAt.elements[1 * 4" +
                " + 3] = 0.;\n                            lookAt.elements[2 * 4 + 3] = 0.;\n     " +
                "                       lookAt.elements[3 * 4 + 3] = 1.;\n\n                     " +
                "       // log(lookAt.elements);\n\n                            lookAt = lookAt.m" +
                "ultiply(self);\n                            self.elements = lookAt.elements;\n  " +
                "                          self.translate(-eyeX, -eyeY, -eyeZ);\n\n              " +
                "              // log(this.elements);\n\n                            return self;" +
                "\n                        });\n            },\n            'Mat44', []);\n\n    " +
                "// todo; should probably put this in a math package\n    mod.Mat33 = Sk.misceval" +
                ".buildClass(mod, function($gbl, $loc)\n            {\n                $loc.__ini" +
                "t__ = new Sk.builtin.func(function(self)\n                    {\n               " +
                "         Sk.misceval.callsim($loc.loadIdentity, self);\n                    });" +
                "\n\n                $loc.loadIdentity = new Sk.builtin.func(function(self)\n    " +
                "                {\n                        self.elements = [1.0, 0.0, 0.0,\n    " +
                "                                     0.0, 1.0, 0.0,\n                           " +
                "              0.0, 0.0, 1.0];\n                    });\n            },\n        " +
                "    'Mat33', []);\n\n    mod.Vec3 = Sk.misceval.buildClass(mod, function($gbl, $" +
                "loc)\n            {\n                $loc.__init__ = new Sk.builtin.func(functio" +
                "n(self, x, y, z)\n                    {\n                        self.x = x;\n  " +
                "                      self.y = y;\n                        self.z = z;\n        " +
                "            });\n                $loc.__sub__ = new Sk.builtin.func(function(sel" +
                "f, other)\n                    {\n                        return Sk.misceval.cal" +
                "lsim(mod.Vec3, self.x - other.x, self.y - other.y, self.z - other.z);\n         " +
                "           });\n            },\n            'Vec3', []);\n    \n    mod.cross = " +
                "new Sk.builtin.func(function(v1, v2)\n            {\n                goog.assert" +
                "s.assert(v1 instanceof mod.Vec3 && v2 instanceof mod.Vec3);\n                ret" +
                "urn Sk.misceval.callsim(mod.Vec3,\n                    v1.y * v2.z - v1.z * v2.y" +
                ",\n                    v1.z * v2.x - v1.x * v2.z,\n                    v1.x * v2" +
                ".y - v1.y * v2.x);\n            });\n\n    return mod;\n};\n",
        "src/lib/toaiff.py": "raise NotImplementedError(\"toaiff is not yet implemented in Skulpt\")\n",
        "src/lib/__future__.py": "raise NotImplementedError(\"__future__ is not yet implemented in Skulpt\")\n",
        "src/lib/zipfile.py": "raise NotImplementedError(\"zipfile is not yet implemented in Skulpt\")\n",
        "src/lib/email/__init__.py": "raise NotImplementedError(\"email is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/__init__.py": "",
        "src/lib/dummy_thread.py": "raise NotImplementedError(\"dummy_thread is not yet implemented in Skulpt\")\n",
        "src/lib/Cookie.py": "raise NotImplementedError(\"Cookie is not yet implemented in Skulpt\")\n",
        "src/lib/ntpath.py": "raise NotImplementedError(\"ntpath is not yet implemented in Skulpt\")\n",
        "src/lib/pstats.py": "raise NotImplementedError(\"pstats is not yet implemented in Skulpt\")\n",
        "src/lib/io.py": "raise NotImplementedError(\"io is not yet implemented in Skulpt\")\n",
        "src/lib/webgl/models.js": "// most of this file is from/based on 'tdl'\n\nvar $builtinmodule = function(nam" +
                "e)\n{\n    var mod = {};\n\n    var Buffer = function(array, opt_target) {\n    " +
                "    var target = opt_target || gl.ARRAY_BUFFER;\n        var buf = gl.createBuff" +
                "er();\n        this.target = target;\n        this.buf = buf;\n        this.set(" +
                "array);\n        this.numComponents_ = array.numComponents;\n        this.numEle" +
                "ments_ = array.numElements;\n        this.totalComponents_ = this.numComponents_" +
                " * this.numElements_;\n        if (array.buffer instanceof Float32Array) {\n    " +
                "        this.type_ = gl.FLOAT;\n        } else if (array.buffer instanceof Uint8" +
                "Array) {\n            this.type_ = gl.UNSIGNED_BYTE;\n        } else if (array.b" +
                "uffer instanceof Int8Array) {\n            this.type_ = gl._BYTE;\n        } els" +
                "e if (array.buffer instanceof Uint16Array) {\n            this.type_ = gl.UNSIGN" +
                "ED_SHORT;\n        } else if (array.buffer instanceof Int16Array) {\n           " +
                " this.type_ = gl.SHORT;\n        } else {\n            throw(\"unhandled type:\"" +
                " + (typeof array.buffer));\n        }\n    };\n\n    Buffer.prototype.set = func" +
                "tion(array) {\n        gl.bindBuffer(this.target, this.buf);\n        gl.bufferD" +
                "ata(this.target, array.buffer, gl.STATIC_DRAW);\n    }\n\n    Buffer.prototype.t" +
                "ype = function() {\n        return this.type_;\n    };\n\n    Buffer.prototype.n" +
                "umComponents = function() {\n        return this.numComponents_;\n    };\n\n    " +
                "Buffer.prototype.numElements = function() {\n        return this.numElements_;\n" +
                "    };\n\n    Buffer.prototype.totalComponents = function() {\n        return th" +
                "is.totalComponents_;\n    };\n\n    Buffer.prototype.buffer = function() {\n    " +
                "    return this.buf;\n    };\n\n    Buffer.prototype.stride = function() {\n    " +
                "    return 0;\n    };\n\n    Buffer.prototype.offset = function() {\n        ret" +
                "urn 0;\n    };\n\n\n\n    mod.Model = Sk.misceval.buildClass(mod, function($gbl," +
                " $loc)\n            {\n                $loc.__init__ = new Sk.builtin.func(funct" +
                "ion(self, shader, arrays, textures)\n                    {\n                    " +
                "    self.buffers = {};\n                        var setBuffer = function(name, a" +
                "rray)\n                        {\n                            var target = (name" +
                " == 'indices') ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;\n                   " +
                "         b = self.buffers[name];\n                            if (!b)\n         " +
                "                       b = new Buffer(array, target);\n                         " +
                "   else\n                                b.set(array);\n                        " +
                "    self.buffers[name] = b;\n                        };\n                       " +
                " for (name in arrays)\n                            setBuffer(name, arrays[name])" +
                ";\n\n                        var textureUnits = {};\n                        var" +
                " unit = 0;\n                        for (var texture in textures)\n             " +
                "           {\n                            textureUnits[texture] = unit++;\n     " +
                "                   }\n\n                        self.mode = gl.TRIANGLES;\n     " +
                "                   self.textures = textures.v;\n                        self.tex" +
                "tureUnits = textureUnits;\n                        self.shader = shader;\n      " +
                "              });\n\n                /**\n                * Sets up the shared p" +
                "arts of drawing this model. Uses the\n                * program, binds the buffe" +
                "rs, sets the textures.\n                *\n                * @param {!Object.<st" +
                "ring, *>} uniforms An object of names to\n                *     values to set on" +
                " this models uniforms.\n                */\n                $loc.drawPrep = new " +
                "Sk.builtin.func(function(self, uniforms)\n                    {\n               " +
                "         var shader = self.shader;\n                        var buffers = self.b" +
                "uffers;\n                        var textures = self.textures;\n\n              " +
                "          uniforms = Sk.ffi.remapToJs(uniforms);\n\n                        Sk.m" +
                "isceval.callsim(shader.use, shader);\n\n                        for (var buffer " +
                "in buffers) {\n                            var b = buffers[buffer];\n           " +
                "                 if (buffer == 'indices') {\n                                gl." +
                "bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b.buffer());\n                            } " +
                "else {\n                                var attrib = shader.attrib[buffer];\n   " +
                "                             if (attrib) {\n                                    " +
                "attrib(b);\n                                }\n                            }\n  " +
                "                      }\n\n                        for (var texture in textures)" +
                " {\n                            var unit = self.textureUnits[texture];\n        " +
                "                    shader.setUniform$impl(shader, textuer, unit);\n            " +
                "                textures[texture].bindToUnit(unit);\n                        }\n" +
                "\n                        for (var uniform in uniforms) {\n                     " +
                "       shader.setUniform$impl(shader, uniform, uniforms[uniform]);\n            " +
                "            }\n                    });\n\n                /**\n                *" +
                " Draws this model.\n                *\n                * After calling tdl.model" +
                "s.Model.drawPrep you can call this\n                * function multiple times to" +
                " draw this model.\n                *\n                * @param {!Object.<string," +
                " *>} uniforms An object of names to\n                *     values to set on this" +
                " models uniforms.\n                */\n                $loc.draw = new Sk.builti" +
                "n.func(function(self, uniforms, opt_textures)\n                    {\n          " +
                "              var shader = self.shader;\n                        uniforms = Sk.f" +
                "fi.remapToJs(uniforms);\n                        for (uniform in uniforms) {\n  " +
                "                          shader.setUniform$impl(shader, uniform, uniforms[unifo" +
                "rm]);\n                        }\n\n                        if (opt_textures) {" +
                "\n                            for (var texture in opt_textures) {\n             " +
                "                   var unit = self.textureUnits[texture];\n                     " +
                "           shader.setUniform$impl(shader, texture, unit);\n                     " +
                "           opt_textures[texture].bindToUnit(unit);\n                            " +
                "}\n                        }\n\n                        var buffers = self.buffe" +
                "rs;\n                        gl.drawElements(self.mode, buffers.indices.totalCom" +
                "ponents(), gl.UNSIGNED_SHORT, 0);\n                    });\n            },\n    " +
                "        'Model', []);\n\n    return mod;\n};\n",
        "src/lib/dircache.py": "raise NotImplementedError(\"dircache is not yet implemented in Skulpt\")\n",
        "src/lib/email/test/data/__init__.py": "raise NotImplementedError(\"data is not yet implemented in Skulpt\")\n",
        "src/lib/sets.py": "raise NotImplementedError(\"sets is not yet implemented in Skulpt\")\n",
        "src/lib/SimpleHTTPServer.py": "raise NotImplementedError(\"SimpleHTTPServer is not yet implemented in Skulpt\")" +
                "\n",
        "src/lib/image.js": "var ImageMod; // the single identifier needed in the global scope\nvar $builtinm" +
                "odule;\n\nif (!ImageMod) {\n    ImageMod = {};\n    ImageMod.canvasLib = [];\n}" +
                "\n\n$builtinmodule = function (name) {\n    var screen;\n    var pixel;\n    var" +
                " eImage;\n    var mod = {};\n    var updateCanvasAndSuspend;\n    var initialize" +
                "Image;\n    var checkPixelRange;\n    var remapImageIdToURL;\n\n    var image = " +
                "function ($gbl, $loc) {\n        initializeImage = function (self) {\n          " +
                "  self.width = self.image.width;\n            self.height = self.image.height;\n" +
                "            self.delay = 0;\n            self.updateCount = 0;\n            self" +
                ".updateInterval = 1;\n            self.lastx = 0;\n            self.lasty = 0;\n" +
                "            self.canvas = document.createElement(\"canvas\");\n            self." +
                "canvas.height = self.height;\n            self.canvas.width = self.width;\n     " +
                "       self.ctx = self.canvas.getContext(\"2d\");\n            self.ctx.drawImag" +
                "e(self.image, 0, 0);\n            self.imagedata = self.ctx.getImageData(0, 0, s" +
                "elf.width, self.height);\n        };\n\n\n        $loc.__init__ = new Sk.builtin" +
                ".func(function (self, imageId) {\n            var susp;\n            Sk.builtin." +
                "pyCheckArgs(\"__init__\", arguments, 2, 2);\n            try {\n                " +
                "self.image = document.getElementById(Sk.ffi.remapToJs(imageId));\n              " +
                "  initializeImage(self);\n            } catch (e) {\n                self.image " +
                "= null;\n            }\n            if (self.image == null) {\n                s" +
                "usp = new Sk.misceval.Suspension();\n                susp.resume = function () {" +
                "\n                    // Should the post image get stuff go here??\n            " +
                "        if (susp.data[\"error\"]) {\n                        throw new Sk.builti" +
                "n.IOError(susp.data[\"error\"].message);\n                    }\n               " +
                " };\n                susp.data = {\n                    type: \"Sk.promise\",\n " +
                "                   promise: new Promise(function (resolve, reject) {\n          " +
                "                  var newImg = new Image();\n                            newImg." +
                "crossOrigin = \"\";\n                            newImg.onerror = function () {" +
                "\n                                reject(Error(\"Failed to load URL: \" + newImg" +
                ".src));\n                            };\n                            newImg.onlo" +
                "ad = function () {\n                                self.image = this;\n        " +
                "                        initializeImage(self);\n                                " +
                "resolve();\n                            };\n                            // look " +
                "for mapping from imagename to url and possible an image proxy server\n          " +
                "                  newImg.src = remapImageIdToURL(imageId);\n                    " +
                "    }\n                    )\n                };\n                return susp;\n" +
                "            }\n\n        });\n\n        remapImageIdToURL = function (imageId) {" +
                "\n            // if imageId starts with http -- OK\n            // if imageId is" +
                " in Sk.imageMap -- look it up\n            // if imageId is the name of an image" +
                " file prepend http://host/app/book/_static/\n            // if image proxy serve" +
                "r is configured construct url for proxy\n            // return the final URL\n  " +
                "          var url;\n            var ret;\n            ret = Sk.ffi.remapToJs(ima" +
                "geId);\n            url = document.createElement(\"a\");\n            url.href =" +
                " ret;\n            if (window.location.host !== url.host) {\n                ret" +
                " = Sk.imageProxy + \"/\" + ret;\n            }\n            return ret;\n       " +
                " };\n\n        checkPixelRange = function (self, x, y) {\n            if (x < 0 " +
                "|| y < 0 || x >= self.width || y >= self.height) {\n                throw new Sk" +
                ".builtin.ValueError(\"Pixel index out of range.\");\n            }\n        };\n" +
                "\n        $loc.setDelay = new Sk.builtin.func(function (self, delay, interval) {" +
                "\n            var i;\n            Sk.builtin.pyCheckArgs(\"setDelay\", arguments" +
                ", 2, 3);\n            self.delay = Sk.ffi.remapToJs(delay);\n            i = Sk." +
                "builtin.asnum$(interval);\n            if (!i) {\n                self.updateInt" +
                "erval = 1;\n            } else {\n                self.updateInterval = i;\n    " +
                "        }\n        });\n\n\n        //get a one-dimensional array of pixel objec" +
                "ts - Zhu\n        $loc.getPixels = new Sk.builtin.func(function (self) {\n      " +
                "      var arr = [];//initial array\n            var i;\n            Sk.builtin.p" +
                "yCheckArgs(\"getPixels\", arguments, 1, 1);\n\n            for (i = 0; i < self." +
                "image.height * self.image.width; i++) {\n\n                arr[i] = Sk.misceval." +
                "callsim(self.getPixel, self,\n                    i % self.image.width, Math.flo" +
                "or(i / self.image.width));\n            }\n            return new Sk.builtin.tup" +
                "le(arr);\n        });\n\n        $loc.getPixel = new Sk.builtin.func(function (s" +
                "elf, x, y) {\n            var red;\n            var blue;\n            var green" +
                ";\n            var index;\n            Sk.builtin.pyCheckArgs(\"getPixel\", argu" +
                "ments, 3, 3);\n            x = Sk.builtin.asnum$(x);\n            y = Sk.builtin" +
                ".asnum$(y);\n            checkPixelRange(self, x, y);\n            index = (y * " +
                "4) * self.width + (x * 4);\n            red = self.imagedata.data[index];\n     " +
                "       green = self.imagedata.data[index + 1];\n            blue = self.imagedat" +
                "a.data[index + 2];\n            return Sk.misceval.callsim(mod.Pixel, red, green" +
                ", blue, x, y);\n        });\n\n        updateCanvasAndSuspend = function (self, " +
                "x, y) {\n            var susp = new Sk.misceval.Suspension();\n            susp." +
                "resume = function () {\n                return Sk.builtin.none.none$;\n         " +
                "   };\n            susp.data = {\n                type: \"Sk.promise\",\n       " +
                "         promise: new Promise(function (resolve, reject) {\n                    " +
                "self.updateCount++;\n                    if ((self.updateCount % self.updateInte" +
                "rval) === 0) {\n                        if (self.lastx + self.updateInterval >= " +
                "self.width) {\n                            self.lastCtx.putImageData(self.imaged" +
                "ata, self.lastUlx, self.lastUly,\n                                0, self.lasty," +
                " self.width, 2);\n                        } else if (self.lasty + self.updateInt" +
                "erval >= self.height) {\n                            self.lastCtx.putImageData(s" +
                "elf.imagedata, self.lastUlx, self.lastUly,\n                                self" +
                ".lastx, 0, 2, self.height);\n                        } else {\n                 " +
                "           self.lastCtx.putImageData(self.imagedata, self.lastUlx, self.lastUly," +
                "\n                                Math.min(x, self.lastx),\n                    " +
                "            Math.min(y, self.lasty),\n                                Math.max(M" +
                "ath.abs(x - self.lastx), 1),\n                                Math.max(Math.abs(" +
                "y - self.lasty), 1));\n                        }\n                        self.l" +
                "astx = x;\n                        self.lasty = y;\n                        if (" +
                "self.delay > 0) {\n                            window.setTimeout(resolve, self.d" +
                "elay);\n                        } else {\n                            resolve();" +
                "\n                        }\n                    } else {\n                     " +
                "   resolve();\n                    }\n                })\n            };\n      " +
                "      return susp;\n        };\n\n        $loc.setPixel = new Sk.builtin.func(fu" +
                "nction (self, x, y, pix) {\n            var index;\n            Sk.builtin.pyChe" +
                "ckArgs(\"setPixel\", arguments, 4, 4);\n            x = Sk.builtin.asnum$(x);\n " +
                "           y = Sk.builtin.asnum$(y);\n            checkPixelRange(self, x, y);\n" +
                "            index = (y * 4) * self.width + (x * 4);\n            self.imagedata." +
                "data[index] = Sk.builtin.asnum$(Sk.misceval.callsim(pix.getRed, pix));\n        " +
                "    self.imagedata.data[index + 1] = Sk.builtin.asnum$(Sk.misceval.callsim(pix.g" +
                "etGreen, pix));\n            self.imagedata.data[index + 2] = Sk.builtin.asnum$(" +
                "Sk.misceval.callsim(pix.getBlue, pix));\n            self.imagedata.data[index +" +
                " 3] = 255;\n            return updateCanvasAndSuspend(self, x, y);\n        });" +
                "\n\n        // update the image with the pixel at the given count - Zhu\n       " +
                " $loc.setPixelAt = new Sk.builtin.func(function (self, count, pixel) {\n        " +
                "    var x;\n            var y;\n            var index;\n            Sk.builtin.p" +
                "yCheckArgs(\"setPixelAt\", arguments, 3, 3);\n            count = Sk.builtin.asn" +
                "um$(count);\n            x = count % self.image.width;\n            y = Math.flo" +
                "or(count / self.image.width);\n            checkPixelRange(self, x, y);\n       " +
                "     index = (y * 4) * self.width + (x * 4);\n            self.imagedata.data[in" +
                "dex] = Sk.builtin.asnum$(Sk.misceval.callsim(pixel.getRed, pixel));\n           " +
                " self.imagedata.data[index + 1] = Sk.builtin.asnum$(Sk.misceval.callsim(pixel.ge" +
                "tGreen, pixel));\n            self.imagedata.data[index + 2] = Sk.builtin.asnum$" +
                "(Sk.misceval.callsim(pixel.getBlue, pixel));\n            self.imagedata.data[in" +
                "dex + 3] = 255;\n            return updateCanvasAndSuspend(self, x, y);\n       " +
                " });\n\n        // new updatePixel that uses the saved x and y location in the p" +
                "ixel - Barb Ericson\n        $loc.updatePixel = new Sk.builtin.func(function (se" +
                "lf, pixel) {\n            var x;\n            var y;\n            var index;\n  " +
                "          Sk.builtin.pyCheckArgs(\"updatePixel\", arguments, 2, 2);\n           " +
                " x = Sk.builtin.asnum$(Sk.misceval.callsim(pixel.getX, pixel));\n            y =" +
                " Sk.builtin.asnum$(Sk.misceval.callsim(pixel.getY, pixel));\n            checkPi" +
                "xelRange(self, x, y);\n            index = (y * 4) * self.width + (x * 4);\n    " +
                "        self.imagedata.data[index] = Sk.builtin.asnum$(Sk.misceval.callsim(pixel" +
                ".getRed, pixel));\n            self.imagedata.data[index + 1] = Sk.builtin.asnum" +
                "$(Sk.misceval.callsim(pixel.getGreen, pixel));\n            self.imagedata.data[" +
                "index + 2] = Sk.builtin.asnum$(Sk.misceval.callsim(pixel.getBlue, pixel));\n    " +
                "        self.imagedata.data[index + 3] = 255;\n            return updateCanvasAn" +
                "dSuspend(self, x, y);\n        });\n\n        $loc.getHeight = new Sk.builtin.fu" +
                "nc(function (self) {\n            Sk.builtin.pyCheckArgs(\"getHeight\", argument" +
                "s, 1, 1);\n            return new Sk.builtin.int_(self.image.height);\n        }" +
                ");\n\n        $loc.getWidth = new Sk.builtin.func(function (self, titlestring) {" +
                "\n            Sk.builtin.pyCheckArgs(\"getWidth\", arguments, 1, 1);\n          " +
                "  return new Sk.builtin.int_(self.image.width);\n        });\n\n        $loc.dra" +
                "w = new Sk.builtin.func(function (self, win, ulx, uly) {\n            var susp;" +
                "\n            Sk.builtin.pyCheckArgs(\"draw\", arguments, 2, 4);\n            su" +
                "sp = new Sk.misceval.Suspension();\n            susp.resume = function () {\n   " +
                "             return Sk.builtin.none.none$;\n            };\n            susp.dat" +
                "a = {\n                type: \"Sk.promise\",\n                promise: new Promi" +
                "se(function (resolve, reject) {\n                    var can;\n                 " +
                "   var ctx;\n                    win = Sk.builtin.asnum$(win);\n                " +
                "    ulx = Sk.builtin.asnum$(ulx);\n                    uly = Sk.builtin.asnum$(u" +
                "ly);\n                    can = Sk.misceval.callsim(win.getWin, win);\n         " +
                "           ctx = can.getContext(\"2d\");\n                    if (!ulx) {\n     " +
                "                   ulx = 0;\n                        uly = 0;\n                 " +
                "   }\n                    self.lastUlx = ulx;\n                    self.lastUly " +
                "= uly;\n                    self.lastCtx = ctx;  // save a reference to the cont" +
                "ext of the window the image was last drawn in\n                    //ctx.putImag" +
                "eData(self.imagedata,0,0,0,0,self.imagedata.width,self.imagedata.height);\n     " +
                "               ctx.putImageData(self.imagedata, ulx, uly);\n\n                  " +
                "  if (self.delay > 0) {\n                        window.setTimeout(resolve, self" +
                ".delay);\n                    } else {\n                        window.setTimeou" +
                "t(resolve, 200);\n                    }\n                })\n            };\n   " +
                "         return susp;\n\n        });\n\n        // toList\n\n    };\n\n    mod.I" +
                "mage = Sk.misceval.buildClass(mod, image, \"Image\", []);\n\n    eImage = functi" +
                "on ($gbl, $loc) {\n        $loc.__init__ = new Sk.builtin.func(function (self, w" +
                "idth, height) {\n            Sk.builtin.pyCheckArgs(\"__init__\", arguments, 3, " +
                "3);\n            self.width = Sk.builtin.asnum$(width);\n            self.height" +
                " = Sk.builtin.asnum$(height);\n            self.canvas = document.createElement(" +
                "\"canvas\");\n            self.ctx = self.canvas.getContext(\"2d\");\n          " +
                "  self.canvas.height = self.height;\n            self.canvas.width = self.width;" +
                "\n            self.imagedata = self.ctx.getImageData(0, 0, self.width, self.heig" +
                "ht);\n        });\n\n    };\n\n    mod.EmptyImage = Sk.misceval.buildClass(mod, " +
                "eImage, \"EmptyImage\", [mod.Image]);\n\n    // create a ListImage object\n\n\n " +
                "   pixel = function ($gbl, $loc) {\n        $loc.__init__ = new Sk.builtin.func(" +
                "function (self, r, g, b, x, y) {\n            Sk.builtin.pyCheckArgs(\"__init__" +
                "\", arguments, 4, 6);\n            self.red = Sk.builtin.asnum$(r);\n           " +
                " self.green = Sk.builtin.asnum$(g);\n            self.blue = Sk.builtin.asnum$(b" +
                ");\n            self.x = Sk.builtin.asnum$(x);\n            self.y = Sk.builtin." +
                "asnum$(y);\n        });\n\n        $loc.getRed = new Sk.builtin.func(function (s" +
                "elf) {\n            Sk.builtin.pyCheckArgs(\"getRed\", arguments, 1, 1);\n      " +
                "      return Sk.builtin.assk$(self.red);\n        });\n\n        $loc.getGreen =" +
                " new Sk.builtin.func(function (self) {\n            Sk.builtin.pyCheckArgs(\"get" +
                "Green\", arguments, 1, 1);\n            return Sk.builtin.assk$(self.green);\n  " +
                "      });\n\n        $loc.getBlue = new Sk.builtin.func(function (self) {\n     " +
                "       Sk.builtin.pyCheckArgs(\"getBlue\", arguments, 1, 1);\n            return" +
                " Sk.builtin.assk$(self.blue);\n        });\n\n        $loc.getX = new Sk.builtin" +
                ".func(function (self) {\n            Sk.builtin.pyCheckArgs(\"getX\", arguments," +
                " 1, 1);\n            return Sk.builtin.assk$(self.x);\n        });\n\n        $l" +
                "oc.getY = new Sk.builtin.func(function (self) {\n            Sk.builtin.pyCheckA" +
                "rgs(\"getY\", arguments, 1, 1);\n            return Sk.builtin.assk$(self.y);\n " +
                "       });\n\n        $loc.setRed = new Sk.builtin.func(function (self, r) {\n  " +
                "          Sk.builtin.pyCheckArgs(\"setRed\", arguments, 2, 2);\n            self" +
                ".red = Sk.builtin.asnum$(r);\n        });\n\n        $loc.setGreen = new Sk.buil" +
                "tin.func(function (self, g) {\n            Sk.builtin.pyCheckArgs(\"setGreen\", " +
                "arguments, 2, 2);\n            self.green = Sk.builtin.asnum$(g);\n        });\n" +
                "\n        $loc.setBlue = new Sk.builtin.func(function (self, b) {\n            S" +
                "k.builtin.pyCheckArgs(\"setBlue\", arguments, 2, 2);\n            self.blue = Sk" +
                ".builtin.asnum$(b);\n        });\n\n        $loc.setX = new Sk.builtin.func(func" +
                "tion (self, x) {\n            Sk.builtin.pyCheckArgs(\"setX\", arguments, 2, 2);" +
                "\n            self.x = Sk.builtin.asnum$(x);\n        });\n\n        $loc.setY =" +
                " new Sk.builtin.func(function (self, y) {\n            Sk.builtin.pyCheckArgs(\"" +
                "setY\", arguments, 2, 2);\n            self.y = Sk.builtin.asnum$(y);\n        }" +
                ");\n\n        $loc.__getitem__ = new Sk.builtin.func(function (self, k) {\n     " +
                "       k = Sk.builtin.asnum$(k);\n            if (k === 0) {\n                re" +
                "turn self.red;\n            } else if (k == 1) {\n                return self.gr" +
                "een;\n            } else if (k == 2) {\n                return self.blue;\n     " +
                "       }\n        });\n\n        $loc.__str__ = new Sk.builtin.func(function (se" +
                "lf) {\n            return \"[\" + self.red + \",\" + self.green + \",\" + self.b" +
                "lue + \"]\";\n        });\n\n        //getColorTuple\n        $loc.getColorTuple" +
                " = new Sk.builtin.func(function (self, x, y) {\n\n        });\n\n        //setRa" +
                "nge -- change from 0..255 to 0.0 .. 1.0\n        $loc.setRange = new Sk.builtin." +
                "func(function (self, mx) {\n            self.max = Sk.builtin.asnum$(mx);\n     " +
                "   });\n\n    };\n    mod.Pixel = Sk.misceval.buildClass(mod, pixel, \"Pixel\", " +
                "[]);\n\n\n    screen = function ($gbl, $loc) {\n        $loc.__init__ = new Sk.b" +
                "uiltin.func(function (self, width, height) {\n            var currentCanvas;\n  " +
                "          var tmpCan, tmpDiv;\n            Sk.builtin.pyCheckArgs(\"__init__\", " +
                "arguments, 1, 3);\n            currentCanvas = ImageMod.canvasLib[Sk.canvas];\n " +
                "           if (currentCanvas === undefined) {\n                tmpCan = document" +
                ".createElement(\"canvas\");\n                tmpDiv = document.getElementById(Sk" +
                ".canvas);\n                self.theScreen = tmpCan;\n                tmpDiv.appe" +
                "ndChild(tmpCan);\n                ImageMod.canvasLib[Sk.canvas] = tmpCan;\n     " +
                "           ImageMod.canvasLib[Sk.canvas] = self.theScreen;\n            } else {" +
                "\n                self.theScreen = currentCanvas;\n                self.theScree" +
                "n.height = self.theScreen.height;\n            }\n            if (width !== unde" +
                "fined) {\n                self.theScreen.height = height.v;\n                sel" +
                "f.theScreen.width = width.v;\n            } else {\n                if (Sk.avail" +
                "ableHeight) {\n                    self.theScreen.height = Sk.availableHeight;\n" +
                "                }\n                if (Sk.availableWidth) {\n                   " +
                " self.theScreen.width = Sk.availableWidth;\n                }\n            }\n\n" +
                "            self.theScreen.style.display = \"block\";\n        });\n\n        $l" +
                "oc.getWin = new Sk.builtin.func(function (self) {\n            return self.theSc" +
                "reen;\n        });\n\n        // exitonclick\n        $loc.exitonclick = new Sk." +
                "builtin.func(function (self) {\n            var canvas_id = self.theScreen.id;\n" +
                "            self.theScreen.onclick = function () {\n                document.get" +
                "ElementById(canvas_id).style.display = \"none\";\n                document.getEl" +
                "ementById(canvas_id).onclick = null;\n                delete ImageMod.canvasLib[" +
                "canvas_id];\n            };\n\n        });\n        //getMouse\n    };\n\n    mo" +
                "d.ImageWin = Sk.misceval.buildClass(mod, screen, \"ImageWin\", []);\n\n    retur" +
                "n mod;\n};\n",
        "src/lib/wsgiref/__init__.py": "raise NotImplementedError(\"wsgiref is not yet implemented in Skulpt\")\n",
        "src/lib/httplib.py": "raise NotImplementedError(\"httplib is not yet implemented in Skulpt\")\n",
        "src/lib/lib2to3/__init__.py": "raise NotImplementedError(\"lib2to3 is not yet implemented in Skulpt\")\n",
        "src/lib/json/tests/__init__.py": "raise NotImplementedError(\"tests is not yet implemented in Skulpt\")\n",
        "src/lib/quopri.py": "raise NotImplementedError(\"quopri is not yet implemented in Skulpt\")\n",
        "src/lib/ftplib.py": "raise NotImplementedError(\"ftplib is not yet implemented in Skulpt\")\n",
        "src/lib/ctypes/__init__.py": "raise NotImplementedError(\"ctypes is not yet implemented in Skulpt\")\n",
        "src/lib/subprocess.py": "raise NotImplementedError(\"subprocess is not yet implemented in Skulpt\")\n",
        "src/lib/bsddb/__init__.py": "raise NotImplementedError(\"bsddb is not yet implemented in Skulpt\")\n",
        "src/lib/tempfile.py": "raise NotImplementedError(\"tempfile is not yet implemented in Skulpt\")\n",
        "src/lib/cProfile.py": "raise NotImplementedError(\"cProfile is not yet implemented in Skulpt\")\n",
        "src/lib/stringold.py": "raise NotImplementedError(\"stringold is not yet implemented in Skulpt\")\n",
        "src/lib/random.js": "/*\n I've wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace\n " +
                "so it's better encapsulated. Now you can have multiple random number generators" +
                "\n and they won't stomp all over eachother's state.\n\n If you want to use this " +
                "as a substitute for Math.random(), use the random()\n method like so:\n\n var m " +
                "= new MersenneTwister();\n var randomNumber = m.random();\n\n You can also call " +
                "the other genrand_{foo}() methods on the instance.\n\n If you want to use a spec" +
                "ific seed in order to get a repeatable random\n sequence, pass an integer into t" +
                "he constructor:\n\n var m = new MersenneTwister(123);\n\n and that will always p" +
                "roduce the same random sequence.\n\n Sean McCullough (banksean@gmail.com)\n */\n" +
                "\n/* \n A C-program for MT19937, with initialization improved 2002/1/26.\n Coded" +
                " by Takuji Nishimura and Makoto Matsumoto.\n\n Before using, initialize the stat" +
                "e by using init_genrand(seed)\n or init_by_array(init_key, key_length).\n\n Copy" +
                "right (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,\n All rights reser" +
                "ved.\n\n Redistribution and use in source and binary forms, with or without\n mo" +
                "dification, are permitted provided that the following conditions\n are met:\n\n " +
                "1. Redistributions of source code must retain the above copyright\n notice, this" +
                " list of conditions and the following disclaimer.\n\n 2. Redistributions in bina" +
                "ry form must reproduce the above copyright\n notice, this list of conditions and" +
                " the following disclaimer in the\n documentation and/or other materials provided" +
                " with the distribution.\n\n 3. The names of its contributors may not be used to " +
                "endorse or promote\n products derived from this software without specific prior " +
                "written\n permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND" +
                " CONTRIBUTORS\n \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT " +
                "NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A " +
                "PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR\n C" +
                "ONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n EXEMPLARY" +
                ", OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n PROCUREMENT OF SUBS" +
                "TITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n PROFITS; OR BUSINESS INTERRUPT" +
                "ION) HOWEVER CAUSED AND ON ANY THEORY OF\n LIABILITY, WHETHER IN CONTRACT, STRIC" +
                "T LIABILITY, OR TORT (INCLUDING\n NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OU" +
                "T OF THE USE OF THIS\n SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMA" +
                "GE.\n\n\n Any feedback is very welcome.\n http://www.math.sci.hiroshima-u.ac.jp/" +
                "~m-mat/MT/emt.html\n email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)\n " +
                "*/\n\nvar MersenneTwister = function (seed) {\n    if (seed == undefined) {\n   " +
                "     seed = new Date().getTime();\n    }\n    /* Period parameters */\n    this." +
                "N = 624;\n    this.M = 397;\n    this.MATRIX_A = 0x9908b0df;\n    /* constant ve" +
                "ctor a */\n    this.UPPER_MASK = 0x80000000;\n    /* most significant w-r bits *" +
                "/\n    this.LOWER_MASK = 0x7fffffff;\n    /* least significant r bits */\n\n    " +
                "this.mt = new Array(this.N);\n    /* the array for the state vector */\n    this" +
                ".mti = this.N + 1;\n    /* mti==N+1 means mt[N] is not initialized */\n\n    thi" +
                "s.init_genrand(seed);\n}\n\n/* initializes mt[N] with a seed */\nMersenneTwister" +
                ".prototype.init_genrand = function (s) {\n    this.mt[0] = s >>> 0;\n    for (th" +
                "is.mti = 1; this.mti < this.N; this.mti++) {\n        var s = this.mt[this.mti -" +
                " 1] ^ (this.mt[this.mti - 1] >>> 30);\n        this.mt[this.mti] = (((((s & 0xff" +
                "ff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)\n         " +
                "   + this.mti;\n        /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. *" +
                "/\n        /* In the previous versions, MSBs of the seed affect   */\n        /*" +
                " only MSBs of the array mt[].                        */\n        /* 2002/01/09 m" +
                "odified by Makoto Matsumoto             */\n        this.mt[this.mti] >>>= 0;\n " +
                "       /* for >32 bit machines */\n    }\n}\n\n/* initialize by an array with ar" +
                "ray-length */\n/* init_key is the array for initializing keys */\n/* key_length " +
                "is its length */\n/* slight change for C++, 2004/2/26 */\nMersenneTwister.protot" +
                "ype.init_by_array = function (init_key, key_length) {\n    var i, j, k;\n    thi" +
                "s.init_genrand(19650218);\n    i = 1;\n    j = 0;\n    k = (this.N > key_length " +
                "? this.N : key_length);\n    for (; k; k--) {\n        var s = this.mt[i - 1] ^ " +
                "(this.mt[i - 1] >>> 30)\n        this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000)" +
                " >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))\n            + init_" +
                "key[j] + j;\n        /* non linear */\n        this.mt[i] >>>= 0;\n        /* fo" +
                "r WORDSIZE > 32 machines */\n        i++;\n        j++;\n        if (i >= this.N" +
                ") {\n            this.mt[0] = this.mt[this.N - 1];\n            i = 1;\n        " +
                "}\n        if (j >= key_length) {\n            j = 0;\n        }\n    }\n    for" +
                " (k = this.N - 1; k; k--) {\n        var s = this.mt[i - 1] ^ (this.mt[i - 1] >>" +
                "> 30);\n        this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 156608" +
                "3941) << 16) + (s & 0x0000ffff) * 1566083941))\n            - i;\n        /* non" +
                " linear */\n        this.mt[i] >>>= 0;\n        /* for WORDSIZE > 32 machines */" +
                "\n        i++;\n        if (i >= this.N) {\n            this.mt[0] = this.mt[thi" +
                "s.N - 1];\n            i = 1;\n        }\n    }\n\n    this.mt[0] = 0x80000000;" +
                "\n    /* MSB is 1; assuring non-zero initial array */\n}\n\n/* generates a rando" +
                "m number on [0,0xffffffff]-interval */\nMersenneTwister.prototype.genrand_int32 " +
                "= function () {\n    var y;\n    var mag01 = new Array(0x0, this.MATRIX_A);\n   " +
                " /* mag01[x] = x * MATRIX_A  for x=0,1 */\n\n    if (this.mti >= this.N) { /* ge" +
                "nerate N words at one time */\n        var kk;\n\n        if (this.mti == this.N" +
                " + 1)   /* if init_genrand() has not been called, */\n        {\n            thi" +
                "s.init_genrand(5489);\n        }\n        /* a default initial seed is used */\n" +
                "\n        for (kk = 0; kk < this.N - this.M; kk++) {\n            y = (this.mt[k" +
                "k] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK);\n            this.m" +
                "t[kk] = this.mt[kk + this.M] ^ (y >>> 1) ^ mag01[y & 0x1];\n        }\n        f" +
                "or (; kk < this.N - 1; kk++) {\n            y = (this.mt[kk] & this.UPPER_MASK) " +
                "| (this.mt[kk + 1] & this.LOWER_MASK);\n            this.mt[kk] = this.mt[kk + (" +
                "this.M - this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];\n        }\n        y = (this.mt" +
                "[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK);\n        this." +
                "mt[this.N - 1] = this.mt[this.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1];\n\n        th" +
                "is.mti = 0;\n    }\n\n    y = this.mt[this.mti++];\n\n    /* Tempering */\n    y" +
                " ^= (y >>> 11);\n    y ^= (y << 7) & 0x9d2c5680;\n    y ^= (y << 15) & 0xefc6000" +
                "0;\n    y ^= (y >>> 18);\n\n    return y >>> 0;\n}\n\n/* generates a random numb" +
                "er on [0,0x7fffffff]-interval */\nMersenneTwister.prototype.genrand_int31 = func" +
                "tion () {\n    return (this.genrand_int32() >>> 1);\n}\n\n/* generates a random " +
                "number on [0,1]-real-interval */\nMersenneTwister.prototype.genrand_real1 = func" +
                "tion () {\n    return this.genrand_int32() * (1.0 / 4294967295.0);\n    /* divid" +
                "ed by 2^32-1 */\n}\n\n/* generates a random number on [0,1)-real-interval */\nMe" +
                "rsenneTwister.prototype.random = function () {\n    return this.genrand_int32() " +
                "* (1.0 / 4294967296.0);\n    /* divided by 2^32 */\n}\n\n/* generates a random n" +
                "umber on (0,1)-real-interval */\nMersenneTwister.prototype.genrand_real3 = funct" +
                "ion () {\n    return (this.genrand_int32() + 0.5) * (1.0 / 4294967296.0);\n    /" +
                "* divided by 2^32 */\n}\n\n/* generates a random number on [0,1) with 53-bit res" +
                "olution*/\nMersenneTwister.prototype.genrand_res53 = function () {\n    var a = " +
                "this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;\n    return(a * 6710" +
                "8864.0 + b) * (1.0 / 9007199254740992.0);\n}\n\n/* These real versions are due t" +
                "o Isaku Wada, 2002/01/09 added */\n\n\nvar $builtinmodule = function (name) {\n" +
                "\n    var mod = {};\n\n    var myGenerator = new MersenneTwister();\n    var nex" +
                "tNormalSample = undefined;\n\n    mod.seed = new Sk.builtin.func(function (x) {" +
                "\n        Sk.builtin.pyCheckArgs(\"seed\", arguments, 0, 1);\n        x = Sk.bui" +
                "ltin.asnum$(x);\n\n        if (arguments.length > 0) {\n            myGenerator " +
                "= new MersenneTwister(x);\n        }\n        else {\n            myGenerator = " +
                "new MersenneTwister();\n        }\n\n        return Sk.builtin.none.none$;\n    " +
                "});\n\n    mod.random = new Sk.builtin.func(function () {\n        Sk.builtin.py" +
                "CheckArgs(\"random\", arguments, 0, 0);\n\n        return new Sk.builtin.float_(" +
                "myGenerator.genrand_res53());\n    });\n\n    var toInt = function (num) {\n    " +
                "    return num | 0;\n    };\n\n    var randrange = function (start, stop, step) " +
                "{\n        // Ported from CPython 2.7\n        var width, n, ret;\n\n        if " +
                "(!Sk.builtin.checkInt(start)) {\n            throw new Sk.builtin.ValueError(\"n" +
                "on-integer first argument for randrange()\");\n        }\n        ;\n\n        i" +
                "f (stop === undefined) {\n            // Random in [0, start)\n            ret =" +
                " toInt(myGenerator.genrand_res53() * start);\n            return new Sk.builtin." +
                "int_(ret);\n        }\n        ;\n\n        if (!Sk.builtin.checkInt(stop)) {\n " +
                "           throw new Sk.builtin.ValueError(\"non-integer stop for randrange()\")" +
                ";\n        }\n        ;\n\n        if (step === undefined) {\n            step =" +
                " 1;\n        }\n        ;\n\n        width = stop - start;\n\n        if ((step " +
                "== 1) && (width > 0)) {\n            // Random in [start, stop), must use toInt " +
                "on product for correct results with negative ranges\n            ret = start + t" +
                "oInt(myGenerator.genrand_res53() * width);\n            return new Sk.builtin.in" +
                "t_(ret);\n        }\n        ;\n\n        if (step == 1) {\n            throw ne" +
                "w Sk.builtin.ValueError(\"empty range for randrange() (\" + start + \", \" + sto" +
                "p + \", \" + width + \")\");\n        }\n        ;\n\n        if (!Sk.builtin.ch" +
                "eckInt(step)) {\n            throw new Sk.builtin.ValueError(\"non-integer step " +
                "for randrange()\");\n        }\n        ;\n\n        if (step > 0) {\n          " +
                "  n = toInt((width + step - 1) / step);\n        } else if (step < 0) {\n       " +
                "     n = toInt((width + step + 1) / step);\n        } else {\n            throw " +
                "new Sk.builtin.ValueError(\"zero step for randrange()\");\n        }\n        ;" +
                "\n\n        if (n <= 0) {\n            throw new Sk.builtin.ValueError(\"empty r" +
                "ange for randrange()\");\n        }\n        ;\n\n        // Random in range(sta" +
                "rt, stop, step)\n        ret = start + (step * toInt(myGenerator.genrand_res53()" +
                " * n));\n        return new Sk.builtin.int_(ret);\n    };\n\n    mod.randint = n" +
                "ew Sk.builtin.func(function (a, b) {\n        Sk.builtin.pyCheckArgs(\"randint\"" +
                ", arguments, 2, 2);\n\n        a = Sk.builtin.asnum$(a);\n        b = Sk.builtin" +
                ".asnum$(b);\n        return randrange(a, b + 1);\n    });\n\n    mod.randrange =" +
                " new Sk.builtin.func(function (start, stop, step) {\n        Sk.builtin.pyCheckA" +
                "rgs(\"randrange\", arguments, 1, 3);\n\n        start = Sk.builtin.asnum$(start)" +
                ";\n        stop = Sk.builtin.asnum$(stop);\n        step = Sk.builtin.asnum$(ste" +
                "p);\n        return randrange(start, stop, step);\n    });\n  \n    mod.uniform " +
                "= new Sk.builtin.func(function (a, b) {\n        Sk.builtin.pyCheckArgs(\"unifor" +
                "m\", arguments, 2, 2);\n\n        a = Sk.builtin.asnum$(a);\n        b = Sk.buil" +
                "tin.asnum$(b);\n        var rnd = myGenerator.genrand_res53();\n        c = a + " +
                "rnd * (b - a)\n        return new Sk.builtin.float_(c);\n    });\n\n    mod.tria" +
                "ngular = new Sk.builtin.func(function (low, high, mode) {\n        Sk.builtin.py" +
                "CheckArgs(\"triangular\", arguments, 2, 3);\n        Sk.builtin.pyCheckType(\"lo" +
                "w\", \"number\", Sk.builtin.checkNumber(low));\n        Sk.builtin.pyCheckType(" +
                "\"high\", \"number\", Sk.builtin.checkNumber(high));\n\n        var rnd, sample," +
                " swap;\n\n        low = Sk.builtin.asnum$(low);\n        high = Sk.builtin.asnum" +
                "$(high);\n        if (low > high) {\n            swap = low;\n            low = " +
                "high;\n            high = swap;\n        }\n        if ((mode === undefined) || " +
                "(mode instanceof Sk.builtin.none)) {\n            mode = (high - low)/2.0;\n    " +
                "    } else {\n            Sk.builtin.pyCheckType(\"mode\", \"number\", Sk.builti" +
                "n.checkNumber(mode));\n            mode = Sk.builtin.asnum$(mode);\n        }\n" +
                "\n        // https://en.wikipedia.org/wiki/Triangular_distribution\n        rnd " +
                "= myGenerator.genrand_res53();\n        if (rnd < (mode - low)/(high - low)) {\n" +
                "            sample = low + Math.sqrt(rnd * (high - low) * (mode - low));\n      " +
                "  } else {\n            sample = high - Math.sqrt((1 - rnd) * (high - low) * (hi" +
                "gh - mode));\n        }\n\n        return new Sk.builtin.float_(sample);\n    })" +
                ";\n\n    var normalSample = function(mu, sigma) {\n        var r1, r2, u, v, s;" +
                "\n\n        // Box-Muller transform\n        // (https://en.wikipedia.org/wiki/B" +
                "ox%E2%80%93Muller_transform)\n        // generates two independent samples from " +
                "a Gaussian\n        // distribution. Return one of them and store the another on" +
                "e\n        // and return it next time.\n\n        if (nextNormalSample !== undef" +
                "ined) {\n            s = nextNormalSample;\n            nextNormalSample = undef" +
                "ined;\n        } else {\n            r1 = myGenerator.genrand_res53();\n        " +
                "    r2 = myGenerator.genrand_res53();\n            u = Math.sqrt(-2*Math.log(r1)" +
                ");\n            v = 2*Math.PI*r2;\n            s = u * Math.cos(v);\n           " +
                " nextNormalSample = u * Math.sin(v);\n        }\n\n        return mu + sigma*s;" +
                "\n    };\n    \n    mod.gauss = new Sk.builtin.func(function (mu, sigma) {\n    " +
                "    Sk.builtin.pyCheckArgs(\"gauss\", arguments, 2, 2);\n        Sk.builtin.pyCh" +
                "eckType(\"mu\", \"number\", Sk.builtin.checkNumber(mu));\n        Sk.builtin.pyC" +
                "heckType(\"sigma\", \"number\", Sk.builtin.checkNumber(sigma));\n\n        mu = " +
                "Sk.builtin.asnum$(mu);\n        sigma = Sk.builtin.asnum$(sigma);\n\n        ret" +
                "urn new Sk.builtin.float_(normalSample(mu, sigma));\n    });\n\n    // CPython u" +
                "ses a different (slower but thread-safe) algorithm for\n    // normalvariate. We" +
                " use the same algorithm for normalvariate and\n    // gauss.\n    mod.normalvari" +
                "ate = mod.gauss;\n\n    mod.lognormvariate = new Sk.builtin.func(function (mu, s" +
                "igma) {\n        Sk.builtin.pyCheckArgs(\"lognormvariate\", arguments, 2, 2);\n " +
                "       Sk.builtin.pyCheckType(\"mu\", \"number\", Sk.builtin.checkNumber(mu));\n" +
                "        Sk.builtin.pyCheckType(\"sigma\", \"number\", Sk.builtin.checkNumber(sig" +
                "ma));\n\n        mu = Sk.builtin.asnum$(mu);\n        sigma = Sk.builtin.asnum$(" +
                "sigma);\n\n        return new Sk.builtin.float_(Math.exp(normalSample(mu, sigma)" +
                "));\n    });\n\n    mod.expovariate = new Sk.builtin.func(function (lambd) {\n  " +
                "      Sk.builtin.pyCheckArgs(\"expovariate\", arguments, 1, 1);\n        Sk.buil" +
                "tin.pyCheckType(\"lambd\", \"number\", Sk.builtin.checkNumber(lambd));\n\n      " +
                "  lambd = Sk.builtin.asnum$(lambd);\n\n        var rnd = myGenerator.genrand_res" +
                "53();\n        return new Sk.builtin.float_(-Math.log(rnd)/lambd);\n    });\n\n " +
                "   mod.choice = new Sk.builtin.func(function (seq) {\n        Sk.builtin.pyCheck" +
                "Args(\"choice\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"seq\", \"se" +
                "quence\", Sk.builtin.checkSequence(seq));\n\n        if (seq.sq$length !== undef" +
                "ined) {\n            var r = toInt(myGenerator.genrand_res53() * seq.sq$length()" +
                ");\n            return seq.mp$subscript(r);\n        } else {\n            throw" +
                " new Sk.builtin.TypeError(\"object has no length\");\n        }\n    });\n\n    " +
                "mod.shuffle = new Sk.builtin.func(function (x) {\n        Sk.builtin.pyCheckArgs" +
                "(\"shuffle\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"x\", \"sequenc" +
                "e\", Sk.builtin.checkSequence(x));\n\n        if (x.sq$length !== undefined) {\n" +
                "            if (x.mp$ass_subscript !== undefined) {\n                for (var i " +
                "= x.sq$length() - 1; i > 0; i -= 1) {\n                    var r = toInt(myGener" +
                "ator.genrand_res53() * (i + 1));\n                    var tmp = x.mp$subscript(r" +
                ");\n                    x.mp$ass_subscript(r, x.mp$subscript(i));\n             " +
                "       x.mp$ass_subscript(i, tmp);\n                }\n                ;\n      " +
                "      } else {\n                throw new Sk.builtin.TypeError(\"object is immut" +
                "able\");\n            }\n            ;\n        } else {\n            throw new " +
                "Sk.builtin.TypeError(\"object has no length\");\n        }\n        ;\n\n       " +
                " return Sk.builtin.none.none$;\n    });\n\n    mod.sample = new Sk.builtin.func(" +
                "function (population, k) {\n        var i, j, iter, elem, reservoir;\n\n        " +
                "Sk.builtin.pyCheckArgs(\"sample\", arguments, 2, 2);\n        Sk.builtin.pyCheck" +
                "Type(\"population\", \"iterable\", Sk.builtin.checkIterable(population));\n     " +
                "   Sk.builtin.pyCheckType(\"k\", \"integer\", Sk.builtin.checkInt(k));\n        " +
                "k = Sk.builtin.asnum$(k);\n        \n        // \"Algorithm R\" in\n        // h" +
                "ttps://en.wikipedia.org/wiki/Reservoir_sampling\n        //\n        // This alg" +
                "orithm guarantees that each element has\n        // equal probability of being i" +
                "ncluded in the\n        // resulting list. See the Wikipedia page for a proof.\n" +
                "        //\n        // This requires no extra space but the runtime is\n        " +
                "// proportional to len(population). CPython implements a fast\n        // path f" +
                "or the case when k is much smaller than\n        // len(population). A similar o" +
                "ptimization could be\n        // implemented here.\n        reservoir = [];\n   " +
                "     iter = Sk.abstr.iter(population);\n        for (i = 0, elem = iter.tp$itern" +
                "ext();\n             elem !== undefined;\n             i++, elem = iter.tp$itern" +
                "ext()) {\n            j = Math.floor(myGenerator.genrand_res53() * (i + 1));\n  " +
                "          if (i < k) {\n                // Fill the reservoir\n                i" +
                "f (j < i) {\n                    // Shuffle the existing elements to ensure that" +
                "\n                    // subslices are valid random samples\n                   " +
                " reservoir[i] = reservoir[j];\n                }\n                reservoir[j] =" +
                " elem;\n            } else {\n                // Replace elements with a probabi" +
                "lity that decreases\n                // the further we get\n                if (" +
                "j < k) {\n                    reservoir[j] = elem;\n                }\n         " +
                "   }\n        }\n        \n        if (i < k) {\n            throw new Sk.builti" +
                "n.ValueError(\"sample larger than population\");\n        }\n\n        return Sk" +
                ".builtin.list(reservoir);\n    });\n\n    return mod;\n}\n",
        "src/lib/plistlib.py": "raise NotImplementedError(\"plistlib is not yet implemented in Skulpt\")\n",
        "src/lib/tarfile.py": "raise NotImplementedError(\"tarfile is not yet implemented in Skulpt\")\n",
        "src/lib/pydoc_topics.py": "raise NotImplementedError(\"pydoc_topics is not yet implemented in Skulpt\")\n",
        "src/lib/keyword.py": "\n__all__ = [\"iskeyword\", \"kwlist\"]\n\nkwlist = [\n#--start keywords--\n    " +
                "    'and',\n        'as',\n        'assert',\n        'break',\n        'class'," +
                "\n        'continue',\n        'def',\n        'del',\n        'elif',\n        " +
                "'else',\n        'except',\n        'exec',\n        'finally',\n        'for'," +
                "\n        'from',\n        'global',\n        'if',\n        'import',\n        " +
                "'in',\n        'is',\n        'lambda',\n        'not',\n        'or',\n        " +
                "'pass',\n        'print',\n        'raise',\n        'return',\n        'try',\n" +
                "        'while',\n        'with',\n        'yield',\n#--end keywords--\n        " +
                "]\n\ndef iskeyword(wd):\n    return wd in kwlist\n\n",
        "src/lib/webbrowser.py": "raise NotImplementedError(\"webbrowser is not yet implemented in Skulpt\")\n",
        "src/lib/mimetools.py": "raise NotImplementedError(\"mimetools is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/trees/bst.py": "#!/bin/env python3.1\n# Bradley N. Miller, David L. Ranum\n# Introduction to Dat" +
                "a Structures and Algorithms in Python\n# Copyright 2005, 2010\n# \n\nclass Binar" +
                "ySearchTree:\n    '''\n    Author:  Brad Miller\n    Date:  1/15/2005\n    Descr" +
                "iption:  Imlement a binary search tree with the following interface\n           " +
                "       functions:  \n                  __contains__(y) <==> y in x\n            " +
                "      __getitem__(y) <==> x[y]\n                  __init__()\n                  " +
                "__len__() <==> len(x)\n                  __setitem__(k,v) <==> x[k] = v\n       " +
                "           clear()\n                  get(k)\n                  items() \n      " +
                "            keys() \n                  values()\n                  put(k,v)\n   " +
                "               in\n                  del <==> \n    '''\n\n    def __init__(self" +
                "):\n        self.root = None\n        self.size = 0\n    \n    def put(self,key," +
                "val):\n        if self.root:\n            self._put(key,val,self.root)\n        " +
                "else:\n            self.root = TreeNode(key,val)\n        self.size = self.size " +
                "+ 1\n\n    def _put(self,key,val,currentNode):\n        if key < currentNode.key" +
                ":\n            if currentNode.hasLeftChild():\n                self._put(key,val" +
                ",currentNode.leftChild)\n            else:\n                currentNode.leftChil" +
                "d = TreeNode(key,val,parent=currentNode)\n        else:\n            if currentN" +
                "ode.hasRightChild():\n                self._put(key,val,currentNode.rightChild)" +
                "\n            else:\n                currentNode.rightChild = TreeNode(key,val,p" +
                "arent=currentNode)\n            \n    def __setitem__(self,k,v):\n        self.p" +
                "ut(k,v)\n\n    def get(self,key):\n        if self.root:\n            res = self" +
                "._get(key,self.root)\n            if res:\n                return res.payload\n " +
                "           else:\n                return None\n        else:\n            return" +
                " None\n        \n    def _get(self,key,currentNode):\n        if not currentNode" +
                ":\n            return None\n        elif currentNode.key == key:\n            re" +
                "turn currentNode\n        elif key < currentNode.key:\n            return self._" +
                "get(key,currentNode.leftChild)\n        else:\n            return self._get(key," +
                "currentNode.rightChild)\n            \n        \n    def __getitem__(self,key):" +
                "\n        res = self.get(key)\n        if res:\n            return res\n        " +
                "else:\n            raise KeyError('Error, key not in tree')\n            \n\n   " +
                " def __contains__(self,key):\n        if self._get(key,self.root):\n            " +
                "return True\n        else:\n            return False\n        \n    def length(s" +
                "elf):\n        return self.size\n\n    def __len__(self):\n        return self.s" +
                "ize\n\n    def __iter__(self):\n        return self.root.__iter__()\n    \n    d" +
                "ef delete(self,key):\n        if self.size > 1:\n            nodeToRemove = self" +
                "._get(key,self.root)\n            if nodeToRemove:\n                self.remove(" +
                "nodeToRemove)\n                self.size = self.size-1\n            else:\n     " +
                "           raise KeyError('Error, key not in tree')\n        elif self.size == 1" +
                " and self.root.key == key:\n            self.root = None\n            self.size " +
                "= self.size - 1\n        else:\n            raise KeyError('Error, key not in tr" +
                "ee')\n\n    def __delitem__(self,key):\n        self.delete(key)\n    \n    def " +
                "remove(self,currentNode):\n        if currentNode.isLeaf(): #leaf\n            i" +
                "f currentNode == currentNode.parent.leftChild:\n                currentNode.pare" +
                "nt.leftChild = None\n            else:\n                currentNode.parent.right" +
                "Child = None\n        elif currentNode.hasBothChildren(): #interior\n           " +
                " succ = currentNode.findSuccessor()\n            succ.spliceOut()\n            c" +
                "urrentNode.key = succ.key\n            currentNode.payload = succ.payload\n     " +
                "   else: # this node has one child\n            if currentNode.hasLeftChild():\n" +
                "                if currentNode.isLeftChild():\n                    currentNode.l" +
                "eftChild.parent = currentNode.parent\n                    currentNode.parent.lef" +
                "tChild = currentNode.leftChild\n                elif currentNode.isRightChild():" +
                "\n                    currentNode.leftChild.parent = currentNode.parent\n       " +
                "             currentNode.parent.rightChild = currentNode.leftChild\n            " +
                "    else:\n                    currentNode.replaceNodeData(currentNode.leftChild" +
                ".key,\n                                       currentNode.leftChild.payload,\n  " +
                "                                     currentNode.leftChild.leftChild,\n         " +
                "                              currentNode.leftChild.rightChild)\n            els" +
                "e:\n                if currentNode.isLeftChild():\n                    currentNo" +
                "de.rightChild.parent = currentNode.parent\n                    currentNode.paren" +
                "t.leftChild = currentNode.rightChild\n                elif currentNode.isRightCh" +
                "ild():\n                    currentNode.rightChild.parent = currentNode.parent\n" +
                "                    currentNode.parent.rightChild = currentNode.rightChild\n    " +
                "            else:\n                    currentNode.replaceNodeData(currentNode.r" +
                "ightChild.key,\n                                       currentNode.rightChild.pa" +
                "yload,\n                                       currentNode.rightChild.leftChild," +
                "\n                                       currentNode.rightChild.rightChild)\n\n " +
                "   def inorder(self):\n        self._inorder(self.root)\n\n    def _inorder(self" +
                ",tree):\n        if tree != None:\n            self._inorder(tree.leftChild)\n  " +
                "          print(tree.key)\n            self._inorder(tree.rightChild)\n\n    def" +
                " postorder(self):\n        self._postorder(self.root)\n\n    def _postorder(self" +
                ", tree):\n        if tree:\n            self._postorder(tree.rightChild)\n      " +
                "      self._postorder(tree.leftChild)\n            print(tree.key)            \n" +
                "\n    def preorder(self):\n        self._preorder(self,self.root)\n\n    def _pr" +
                "eorder(self,tree):\n        if tree:\n            print(tree.key)            \n " +
                "           self._preorder(tree.leftChild)\n            self._preorder(tree.right" +
                "Child)\n\n                \nclass TreeNode:\n    def __init__(self,key,val,left=" +
                "None,right=None,parent=None):\n        self.key = key\n        self.payload = va" +
                "l\n        self.leftChild = left\n        self.rightChild = right\n        self." +
                "parent = parent\n        self.balanceFactor = 0\n        \n    def hasLeftChild(" +
                "self):\n        return self.leftChild\n\n    def hasRightChild(self):\n        r" +
                "eturn self.rightChild\n    \n    def isLeftChild(self):\n        return self.par" +
                "ent and self.parent.leftChild == self\n\n    def isRightChild(self):\n        re" +
                "turn self.parent and self.parent.rightChild == self\n\n    def isRoot(self):\n  " +
                "      return not self.parent\n\n    def isLeaf(self):\n        return not (self." +
                "rightChild or self.leftChild)\n\n    def hasAnyChildren(self):\n        return s" +
                "elf.rightChild or self.leftChild\n\n    def hasBothChildren(self):\n        retu" +
                "rn self.rightChild and self.leftChild\n    \n    def replaceNodeData(self,key,va" +
                "lue,lc,rc):\n        self.key = key\n        self.payload = value\n        self." +
                "leftChild = lc\n        self.rightChild = rc\n        if self.hasLeftChild():\n " +
                "           self.leftChild.parent = self\n        if self.hasRightChild():\n     " +
                "       self.rightChild.parent = self\n        \n    def findSuccessor(self):\n  " +
                "      succ = None\n        if self.hasRightChild():\n            succ = self.rig" +
                "htChild.findMin()\n        else:\n            if self.parent:\n                i" +
                "f self.isLeftChild():\n                    succ = self.parent\n                e" +
                "lse:\n                    self.parent.rightChild = None\n                    suc" +
                "c = self.parent.findSuccessor()\n                    self.parent.rightChild = se" +
                "lf\n        return succ\n\n\n    def spliceOut(self):\n        if self.isLeaf():" +
                "\n            if self.isLeftChild():\n                self.parent.leftChild = No" +
                "ne\n            else:\n                self.parent.rightChild = None\n        el" +
                "if self.hasAnyChildren():\n            if self.hasLeftChild():\n                " +
                "if self.isLeftChild():\n                    self.parent.leftChild = self.leftChi" +
                "ld\n                else:\n                    self.parent.rightChild = self.lef" +
                "tChild\n                self.leftChild.parent = self.parent\n            else:\n" +
                "                if self.isLeftChild():\n                    self.parent.leftChil" +
                "d = self.rightChild\n                else:\n                    self.parent.righ" +
                "tChild = self.rightChild\n                self.rightChild.parent = self.parent\n" +
                "\n    def findMin(self):\n        current = self\n        while current.hasLeftC" +
                "hild():\n            current = current.leftChild\n        return current\n\n    " +
                "def __iter__(self):\n        \"\"\"The standard inorder traversal of a binary tr" +
                "ee.\"\"\"\n        if self:\n            if self.hasLeftChild():\n              " +
                "  for elem in self.leftChild:\n                    yield elem\n            yield" +
                " self.key\n            if self.hasRightChild():\n                for elem in sel" +
                "f.rightChild:\n                    yield elem\n\n            \n",
        "src/lib/document.js": "var $builtinmodule = function (name) {\n    var elementClass;\n    var mod = {};" +
                "\n\n    mod.getElementById = new Sk.builtin.func(function (id) {\n        var re" +
                "sult = document.getElementById(id.v);\n        if (result) {\n            return" +
                " Sk.misceval.callsim(mod.Element, result);\n        }\n        return Sk.builtin" +
                ".none.none$;\n    });\n\n    mod.createElement = new Sk.builtin.func(function (e" +
                "Name) {\n        var r = document.createElement(eName.v);\n        if (r) {\n   " +
                "         return Sk.misceval.callsim(mod.Element, r);\n        }\n    });\n\n\n  " +
                "  mod.getElementsByTagName = new Sk.builtin.func(function (tag) {\n        var r" +
                " = document.getElementsByTagName(tag.v)\n        var reslist = [];\n        for " +
                "(var i = r.length - 1; i >= 0; i--) {\n            reslist.push(Sk.misceval.call" +
                "sim(mod.Element, r[i]))\n        }\n        return new Sk.builtin.list(reslist)" +
                "\n    });\n\n    mod.getElementsByClassName = new Sk.builtin.func(function (cnam" +
                "e) {\n        var r = document.getElementsByClassName(cname.v);\n        var res" +
                "list = [];\n        for (var i = 0; i < r.length; i++) {\n            reslist.pu" +
                "sh(Sk.misceval.callsim(mod.Element, r[i]));\n        }\n        ;\n        retur" +
                "n new Sk.builtin.list(reslist);\n    });\n\n    mod.getElementsByName = new Sk.b" +
                "uiltin.func(function (cname) {\n        var r = document.getElementsByName(cname" +
                ".v);\n        var reslist = [];\n        for (var i = 0; i < r.length; i++) {\n " +
                "           reslist.push(Sk.misceval.callsim(mod.Element, r[i]));\n        }\n   " +
                "     ;\n        return new Sk.builtin.list(reslist);\n    });\n\n    mod.current" +
                "Div = new Sk.builtin.func(function () {\n        if (Sk.divid !== undefined) {\n" +
                "            return new Sk.builtin.str(Sk.divid)\n        }\n        else {\n    " +
                "        throw new Sk.builtin.AttributeError(\"There is no value set for divid\")" +
                ";\n        }\n    })\n\n    elementClass = function ($gbl, $loc) {\n        /*\n" +
                "         Notes:  self['$d'] is the dictionary used by the GenericGetAttr mechani" +
                "sm for an object.\n         for various reasons  if you create a class in Javasc" +
                "ript and have self.xxxx instance\n         variables, you cannot say instance.xx" +
                "x and get the value of the instance variable unless\n         it is stored in th" +
                "e self['$d'] object.  This seems like a duplication of storage to me\n         b" +
                "ut that is how it works right now  (5/2013)\n\n         Writing your own __getat" +
                "tr__ is also an option but this gets very tricky when an attr is\n         a met" +
                "hod...\n         */\n        $loc.__init__ = new Sk.builtin.func(function (self," +
                " elem) {\n            self.v = elem\n            self.innerHTML = elem.innerHTML" +
                "\n            self.innerText = elem.innerText\n            if (elem.value !== un" +
                "defined) {\n                self.value = elem.value\n                Sk.abstr.ob" +
                "jectSetItem(self['$d'], new Sk.builtin.str('value'), new Sk.builtin.str(self.val" +
                "ue))\n            }\n\n            if (elem.checked !== undefined) {\n          " +
                "      self.checked = elem.checked\n                Sk.abstr.objectSetItem(self['" +
                "$d'], new Sk.builtin.str('checked'), new Sk.builtin.str(self.checked))\n        " +
                "    }\n\n            Sk.abstr.objectSetItem(self['$d'], new Sk.builtin.str('inne" +
                "rHTML'), new Sk.builtin.str(self.innerHTML))\n            Sk.abstr.objectSetItem" +
                "(self['$d'], new Sk.builtin.str('innerText'), new Sk.builtin.str(self.innerText)" +
                ")\n\n        })\n\n        $loc.tp$getattr = Sk.builtin.object.prototype.Generic" +
                "GetAttr;\n\n        $loc.__setattr__ = new Sk.builtin.func(function (self, key, " +
                "value) {\n            key = Sk.ffi.remapToJs(key);\n            if (key === 'inn" +
                "erHTML') {\n                self.innerHTML = value\n                self.v.inner" +
                "HTML = value.v\n                Sk.abstr.objectSetItem(self['$d'], new Sk.builti" +
                "n.str('innerHTML'), value)\n            }\n            if (key === 'innerText') " +
                "{\n                self.innerText = value\n                self.v.innerText = va" +
                "lue.v\n                Sk.abstr.objectSetItem(self['$d'], new Sk.builtin.str('in" +
                "nerText'), value)\n            }\n        });\n\n\n        $loc.appendChild = ne" +
                "w Sk.builtin.func(function (self, ch) {\n            self.v.appendChild(ch.v);\n" +
                "        });\n\n        $loc.removeChild = new Sk.builtin.func(function (self, no" +
                "de) {\n            self.v.removeChild(node.v)\n        })\n\n        // getCSS\n" +
                "\n        $loc.getCSS = new Sk.builtin.func(function (self, key) {\n            " +
                "return new Sk.builtin.str(self.v.style[key.v]);\n        });\n\n\n        $loc.s" +
                "etCSS = new Sk.builtin.func(function (self, attr, value) {\n            self.v.s" +
                "tyle[attr.v] = value.v\n\n        })\n\n        $loc.getAttribute = new Sk.built" +
                "in.func(function (self, key) {\n            var res = self.v.getAttribute(key.v)" +
                "\n            if (res) {\n                return new Sk.builtin.str(res)\n      " +
                "      } else {\n                return Sk.builtin.none.none$;\n            }\n  " +
                "      });\n\n        $loc.setAttribute = new Sk.builtin.func(function (self, att" +
                "r, value) {\n            self.v.setAttribute(attr.v, value.v)\n        });\n\n  " +
                "      $loc.getProperty = new Sk.builtin.func(function (self, key) {\n           " +
                " var res = self.v[key.v]\n            if (res) {\n                return new Sk." +
                "builtin.str(res)\n            } else {\n                return Sk.builtin.none.n" +
                "one$;\n            }\n        });\n\n        $loc.__str__ = new Sk.builtin.func(" +
                "function (self) {\n            console.log(self.v.tagName);\n            return " +
                "new Sk.builtin.str(self.v.tagName)\n        })\n\n        $loc.__repr__ = new Sk" +
                ".builtin.func(function (self) {\n            return new Sk.builtin.str('[DOM Ele" +
                "ment]')\n        })\n\n\n    };\n\n    mod.Element = Sk.misceval.buildClass(mod," +
                " elementClass, 'Element', []);\n\n    return mod;\n\n}\n",
        "src/lib/hashlib.py": "raise NotImplementedError(\"hashlib is not yet implemented in Skulpt\")\n",
        "src/lib/_threading_local.py": "raise NotImplementedError(\"_threading_local is not yet implemented in Skulpt\")" +
                "\n",
        "src/lib/profile.py": "raise NotImplementedError(\"profile is not yet implemented in Skulpt\")\n",
        "src/lib/copy.py": "raise NotImplementedError(\"copy is not yet implemented in Skulpt\")\n",
        "src/lib/binhex.py": "raise NotImplementedError(\"binhex is not yet implemented in Skulpt\")\n",
        "src/lib/csv.py": "raise NotImplementedError(\"csv is not yet implemented in Skulpt\")\n",
        "src/lib/cgi.py": "raise NotImplementedError(\"cgi is not yet implemented in Skulpt\")\n",
        "src/lib/posixfile.py": "raise NotImplementedError(\"posixfile is not yet implemented in Skulpt\")\n",
        "src/lib/netrc.py": "raise NotImplementedError(\"netrc is not yet implemented in Skulpt\")\n",
        "src/lib/commands.py": "raise NotImplementedError(\"commands is not yet implemented in Skulpt\")\n",
        "src/lib/sunaudio.py": "raise NotImplementedError(\"sunaudio is not yet implemented in Skulpt\")\n",
        "src/lib/md5.py": "raise NotImplementedError(\"md5 is not yet implemented in Skulpt\")\n",
        "src/lib/struct.py": "raise NotImplementedError(\"struct is not yet implemented in Skulpt\")\n",
        "src/lib/sunau.py": "raise NotImplementedError(\"sunau is not yet implemented in Skulpt\")\n",
        "src/lib/turtle.js": "var $builtinmodule = function (name) {\n\"use strict\";\n\nfunction getConfigure" +
                "dTarget() {\n    var selector, target;\n\n    selector = (Sk.TurtleGraphics && S" +
                "k.TurtleGraphics.target) || \"turtle\",\n    target   = typeof selector === \"st" +
                "ring\" ?\n        document.getElementById(selector) :\n        selector;\n    //" +
                " ensure that the canvas container is empty\n    while (target.firstChild) {\n   " +
                "     target.removeChild(target.firstChild);\n    }\n    return target;\n}\n\nfun" +
                "ction generateTurtleModule(_target) {\n    var _module              = {},\n     " +
                "   _durationSinceRedraw = 0,\n        _focus               = true,\n        OPTI" +
                "MAL_FRAME_RATE   = 1000/30,\n        SHAPES               = {},\n        TURTLE_" +
                "COUNT         = 0,\n        Types                = {},\n        _frameRequest,\n" +
                "        _frameRequestTimeout,\n        _screenInstance,\n        _config,\n     " +
                "   _anonymousTurtle,\n        _mouseHandler;\n\n    // Ensure that the turtle DO" +
                "M target has a tabindex\n    // so that it can accept keyboard focus and events" +
                "\n    if (!_target.hasAttribute(\"tabindex\")) {\n        _target.setAttribute(" +
                "\"tabindex\", 0);\n    }\n\n    Types.FLOAT = function(value) {\n        return " +
                "Sk.builtin.float_(value);\n    };\n    Types.COLOR = function(value) {\n        " +
                "if (typeof value === \"string\") {\n            return new Sk.builtin.str(value)" +
                ";\n        }\n        else {\n            for(var i = 0; i < 3; i++) {\n        " +
                "        value[i] = Sk.builtin.assk$(value[i]);\n            }\n            if (v" +
                "alue.length === 4) {\n                value[3] = Sk.builtin.float_(value[3]);\n " +
                "           }\n            return new Sk.builtin.tuple(value);\n        }\n    };" +
                "\n    Types.TURTLE_LIST = function(value) {\n        var skValues = [];\n       " +
                " for (var i = 0; i < value.length; i++) {\n            skValues.push(value[i].sk" +
                "Instance);\n        }\n        return new Sk.builtin.tuple(skValues);\n    };\n" +
                "\n    SHAPES.arrow    = [[-10,0],[10,0],[0,10]];\n    SHAPES.square   = [[ 10,-1" +
                "0],[10,10],[-10,10],[-10, -10]];\n    SHAPES.triangle = [[10,-5.77],[0,11.55],[-" +
                "10,-5.77]];\n    SHAPES.classic  = [[0,0],[-5,-9],[0,-7],[5,-9]];\n    SHAPES.tu" +
                "rtle   = [\n        [0,16],[-2,14],[-1,10],[-4,7],[-7,9],[-9,8],[-6,5],[-7,1],[-" +
                "5,-3],[-8,-6],\n        [-6,-8],[-4,-5],[0,-7],[4,-5],[6,-8],[8,-6],[5,-3],[7,1]" +
                ",[6,5],[9,8],[7,9],\n        [4,7],[1,10],[2,14]\n    ];\n\n    SHAPES.circle = " +
                "[\n        [10,0],[9.51,3.09],[8.09,5.88],[5.88,8.09],[3.09,9.51],[0,10],[-3.09," +
                "9.51],\n        [-5.88,8.09],[-8.09,5.88],[-9.51,3.09],[-10,0],[-9.51,-3.09],[-8" +
                ".09,-5.88],\n        [-5.88,-8.09],[-3.09,-9.51],[-0,-10],[3.09,-9.51],[5.88,-8." +
                "09],[8.09,-5.88],\n        [9.51,-3.09]\n    ];\n\n    _config = (function() {\n" +
                "        var defaultSetup = {\n                target     : \"turtle\", // DOM el" +
                "ement or id of parent container\n                width      : 400, // if set to " +
                "0 it will use the target width\n                height     : 400, // if set to 0" +
                " it will use the target height\n                animate    : true, // enabled/di" +
                "sable all animated rendering\n                bufferSize : 0, // default turtle " +
                "buffer size\n                allowUndo  : true, // enable ability to use the und" +
                "o buffer\n            },\n            key;\n\n        if (!Sk.TurtleGraphics) {" +
                "\n            Sk.TurtleGraphics = {};\n        }\n\n        for(key in defaultSe" +
                "tup) {\n            if (!Sk.TurtleGraphics.hasOwnProperty(key)) {\n             " +
                "   Sk.TurtleGraphics[key] = defaultSetup[key];\n            }\n        }\n\n    " +
                "    return Sk.TurtleGraphics;\n    })();\n\n    // InstantPromise is a workaroun" +
                "d to allow usage of the clean promise-style\n    // then/catch syntax but to ins" +
                "tantly call resolve the then/catch chain so we\n    // can avoid creating Suspen" +
                "sions in unnecessary cases.  This is desirable\n    // because Suspensions have " +
                "a fairly large negative impact on overall\n    // performance.  These 'instant p" +
                "romises' come into play when a tracer()\n    // call is made with a value other " +
                "than 1.  When tracer is 0 or greater than 1\n    // , we can bypass the creation" +
                " of a Suspension and proceed to the next line of\n    // code immediately if the" +
                " current line is not going to incur involve a screen\n    // update. We determin" +
                "e if a real promise or InstantPromise is necessary by\n    // checking FrameMana" +
                "ger.willRenderNext()\n    function InstantPromise() {\n        this.lastResult =" +
                " undefined;\n        this.lastError  = undefined;\n    }\n\n    InstantPromise.p" +
                "rototype.then = function(cb) {\n        if (this.lastError) {\n            retur" +
                "n this;\n        }\n\n        try {\n         this.lastResult = cb(this.lastResu" +
                "lt);\n        } catch(e) {\n            this.lastResult = undefined;\n          " +
                "  this.lastError  = e;\n        }\n\n        return this.lastResult instanceof P" +
                "romise ? this.lastResult : this;\n    };\n\n    InstantPromise.prototype.catch =" +
                " function(cb) {\n        if (this.lastError) {\n            try {\n             " +
                "   this.lastResult = cb(this.lastError);\n                this.lastError  = unde" +
                "fined;\n            } catch(e) {\n                this.lastResult = undefined;\n" +
                "                this.lastError = e;\n            }\n        }\n\n        return " +
                "this.lastResult instanceof Promise ? this.lastResult : this;\n    };\n\n    func" +
                "tion FrameManager() {\n        this.reset();\n    }\n\n    var _frameManager;\n " +
                "   function getFrameManager() {\n        if (!_frameManager) {\n            _fra" +
                "meManager = new FrameManager();\n        }\n        return _frameManager;\n    }" +
                "\n\n    (function(proto) {\n        var browserFrame;\n        (function(frame) " +
                "{\n            if (frame) {\n                browserFrame = function(method) {\n" +
                "                    return (_frameRequest = frame(method));\n                };" +
                "\n            }\n        })(window.requestAnimationFrame || window.mozRequestAni" +
                "mationFrame);\n\n        function animationFrame(delay) {\n            if (!_con" +
                "fig.animate) {\n                return function(method) {\n                    m" +
                "ethod();\n                };\n            }\n\n            if (!delay && browser" +
                "Frame) {\n                return browserFrame;\n            }\n\n            ret" +
                "urn function(method) {\n                _frameRequestTimeout = window.setTimeout" +
                "(\n                    method,\n                    delay || OPTIMAL_FRAME_RATE" +
                "\n                );\n                 return _frameRequestTimeout;\n           " +
                " };\n        }\n\n        proto.willRenderNext = function() {\n            retur" +
                "n !!(this._buffer && this._frameCount+1 === this.frameBuffer());\n        };\n\n" +
                "        proto.turtles = function() {\n            return this._turtles;\n       " +
                " };\n\n        proto.addTurtle = function(turtle) {\n            this._turtles.p" +
                "ush(turtle);\n        };\n\n        proto.reset = function() {\n            if (" +
                "this._turtles) {\n                for(var i = this._turtles.length; --i >= 0;) {" +
                "\n                    this._turtles[i].reset();\n                }\n            " +
                "}\n            this._turtles        = [];\n            this._frames         = []" +
                ";\n            this._frameCount     = 0;\n            this._buffer         = 1;" +
                "\n            this._rate           = 0;\n            this._animationFrame = anim" +
                "ationFrame();\n        };\n\n        proto.addFrame = function(method, countAsFr" +
                "ame) {\n            var instant = false;\n\n            if (countAsFrame) {\n   " +
                "             this._frameCount += 1;\n            }\n\n            this.frames()." +
                "push(method);\n\n            instant = (\n                !_config.animate ||\n " +
                "               (this._buffer && this._frameCount === this.frameBuffer())\n      " +
                "      );\n\n            return instant ? this.update() : new InstantPromise();\n" +
                "        };\n\n        proto.frames = function() {\n            return this._fram" +
                "es;\n        };\n\n        proto.frameBuffer = function(buffer) {\n            i" +
                "f (typeof buffer === \"number\") {\n                this._buffer = buffer | 0;\n" +
                "                if (buffer && buffer <= this._frameCount) {\n                   " +
                " return this.update();\n                }\n            }\n            return thi" +
                "s._buffer;\n        };\n\n        proto.refreshInterval = function(rate) {\n    " +
                "        if (typeof rate === \"number\") {\n                this._rate = rate | 0" +
                ";\n                this._animationFrame = animationFrame(rate);\n            }\n" +
                "            return this._rate;\n        };\n\n        proto.update = function() " +
                "{\n            return (this._frames && this._frames.length) ?\n                t" +
                "his.requestAnimationFrame() :\n                new InstantPromise();\n        };" +
                "\n\n        proto.requestAnimationFrame = function() {\n            var frames  " +
                "       = this._frames,\n                animationFrame = this._animationFrame,\n" +
                "                turtles        = this._turtles,\n                sprites        " +
                "= getScreen().spriteLayer(),\n                turtle, i;\n\n            this._fr" +
                "ames     = [];\n            this._frameCount = 0;\n\n            return new Prom" +
                "ise(function(resolve) {\n                animationFrame(function paint() {\n    " +
                "                for (i = 0; i < frames.length; i++) {\n                        i" +
                "f (frames[i]) {\n                            frames[i]();\n                     " +
                "   }\n                    }\n                    clearLayer(sprites);\n         " +
                "           for (i = 0; i < turtles.length; i++) {\n                        turtl" +
                "e = turtles[i];\n                        if (turtle.getState().shown) {\n       " +
                "                     drawTurtle(turtle.getState(), sprites);\n                  " +
                "      }\n                    }\n                    resolve();\n                " +
                "});\n            });\n        };\n    })(FrameManager.prototype);\n\n    functio" +
                "n MouseHandler() {\n        var self = this;\n\n        this._target   = getTarg" +
                "et();\n        this._managers = {};\n        this._handlers = {\n            mou" +
                "sedown : function(e) {\n                self.onEvent(\"mousedown\", e);\n       " +
                "     },\n            mouseup : function(e) {\n                self.onEvent(\"mou" +
                "seup\", e);\n            },\n            mousemove : function(e) {\n            " +
                "    self.onEvent(\"mousemove\", e);\n            }\n        };\n        for (var" +
                " key in this._handlers) {\n            this._target.addEventListener(key, this._" +
                "handlers[key]);\n        }\n    }\n\n    (function(proto) {\n        proto.onEve" +
                "nt = function(type, e) {\n            var managers     = this._managers[type],\n" +
                "                moveManagers = this._managers[\"mousemove\"],\n                c" +
                "omputed     = false,\n                x, y, localX, localY, i;\n\n            fu" +
                "nction computeCoordinates() {\n                if (computed) return;\n          " +
                "      var world = getScreen();\n                var rect  = world.spriteLayer()." +
                "canvas.getBoundingClientRect();\n                x         = e.clientX - rect.le" +
                "ft | 0;\n                y         = e.clientY - rect.top  | 0;\n               " +
                " localX    = x * world.xScale + world.llx;\n                localY    = y * worl" +
                "d.yScale + world.ury;\n                computed = true;\n            }\n\n      " +
                "      if ((type === \"mousedown\" || type === \"mouseup\") && moveManagers && mo" +
                "veManagers.length) {\n                computeCoordinates();\n                for" +
                " (i = moveManagers.length; --i >= 0;) {\n                    if (moveManagers[i]" +
                ".test(x, y, localX, localY)) {\n                        moveManagers[i].canMove(" +
                "type === \"mousedown\");\n                    }\n                }\n            " +
                "}\n\n            if (managers && managers.length) {\n                computeCoor" +
                "dinates();\n                for (i = managers.length; --i >= 0;) {\n            " +
                "        if (type === \"mousemove\") {\n                        if (managers[i].c" +
                "anMove()) {\n                            managers[i].trigger([localX, localY]);" +
                "\n                        }\n                        continue;\n                " +
                "    }\n\n                    if (managers[i].test(x, y, localX, localY)) {\n    " +
                "                    managers[i].trigger([localX, localY]);\n                    " +
                "}\n                }\n            }\n        };\n\n        proto.reset = functio" +
                "n() {\n            this._managers = {};\n        };\n\n        proto.addManager " +
                "= function(type, manager) {\n            if (!this._managers[type]) {\n         " +
                "       this._managers[type] = [];\n            }\n\n            this._managers[t" +
                "ype].push(manager);\n        };\n\n    })(MouseHandler.prototype);\n\n    functi" +
                "on EventManager(type, target) {\n        this._type     = type;\n        this._t" +
                "arget   = target;\n        this._handlers = undefined;\n        getMouseHandler(" +
                ").addManager(type, this);\n    }\n\n    (function(proto) {\n        proto.reset " +
                "= function() {\n            this._handlers = undefined;\n        };\n\n        p" +
                "roto.canMove = function(value) {\n            if (!this._target || !this._target" +
                ".hitTest) return false;\n\n            if (value !== undefined) {\n             " +
                "   this._target.hitTest.hit = value;\n            }\n\n            return this._" +
                "target.hitTest.hit;\n        };\n\n        proto.test = function(x, y, localX, l" +
                "ocalY) {\n            return this._target && this._target.hitTest ?\n           " +
                "     this._target.hitTest(x, y, localX, localY) :\n                !!this._targe" +
                "t;\n        };\n\n        proto.trigger = function(args) {\n            var hand" +
                "lers = this._handlers,\n                i;\n\n            if (handlers && handle" +
                "rs.length) {\n                for (i = 0; i < handlers.length; i++) {\n         " +
                "           handlers[i].apply({}, args);\n                }\n            }\n     " +
                "   };\n\n        proto.addHandler = function(handler, add) {\n            var ha" +
                "ndlers = this._handlers;\n\n            if (!add && handlers && handlers.length)" +
                " {\n                // remove all existing handlers\n                while (hand" +
                "lers.shift()) {/* noop */}\n            }\n\n            if (typeof handler !== " +
                "\"function\") {\n                if (handlers && !handlers.length) {\n          " +
                "          this.reset();\n                }\n                return;\n           " +
                " }\n\n            if (!handlers) {\n                handlers = this._handlers = " +
                "[];\n            }\n\n            handlers.push(handler);\n        };\n    })(Ev" +
                "entManager.prototype);\n\n    function Turtle() {\n        getFrameManager().add" +
                "Turtle(this);\n        this._screen = getScreen();\n        this._managers = {};" +
                "\n        this.reset();\n    }\n\n    Turtle.RADIANS = 2 * Math.PI;\n\n    (func" +
                "tion(proto) {\n        proto.hitTest = function(mouseX, mouseY, localX, localY) " +
                "{\n            var context = getScreen().hitTestLayer();\n            clearLayer" +
                "(context);\n            drawTurtle(this.getState(), context);\n            var p" +
                "ixel = context.getImageData(mouseX,mouseY,1,1).data;\n            // check alpha" +
                " first since it is most likely to have a value\n            return pixel[3] ||pi" +
                "xel[0] || pixel[1] || pixel[2];\n        };\n\n        proto.addUpdate = functio" +
                "n(method, countAsFrame, stateChanges) {\n            var self  = this,\n        " +
                "        state = this.getState(),\n                args  = Array.prototype.slice." +
                "call(arguments, stateChanges ? 2 : 3);\n\n            return getFrameManager().a" +
                "ddFrame(function() {\n                if (method) {\n                    method." +
                "apply(state, args);\n                }\n                if (stateChanges) {\n   " +
                "                 for(var key in stateChanges) {\n                        state[k" +
                "ey] = stateChanges[key];\n                    }\n                }\n            " +
                "}, countAsFrame);\n        };\n\n        proto.getState = function() {\n        " +
                "    var self = this;\n\n            if (!this._state) {\n                this._s" +
                "tate = {\n                    x       : this._x,\n                    y       : " +
                "this._y,\n                    angle   : this._angle,\n                    radian" +
                "s : this._radians,\n                    shape   : this._shape,\n                " +
                "    color   : this._color,\n                    fill    : this._fill,\n         " +
                "           filling : this._filling,\n                    size    : this._size,\n" +
                "                    speed   : this._computed_speed,\n                    down   " +
                " : this._down,\n                    shown   : this._shown,\n                    " +
                "context : function() {\n                        return self.getPaper();\n       " +
                "             }\n                };\n            }\n            return this._stat" +
                "e;\n        };\n\n        proto.translate = function(startX, startY, dx, dy, beg" +
                "inPath, isCircle) {\n            var self = this;\n            return translate(" +
                "this, startX, startY, dx, dy, beginPath, isCircle)\n                .then(functi" +
                "on(coords) {\n                    self._x = coords[0];\n                    self" +
                "._y = coords[1];\n                });\n        };\n\n        proto.rotate = func" +
                "tion(startAngle, delta, isCircle) {\n            var self = this;\n            r" +
                "eturn rotate(this, startAngle, delta, isCircle)\n                .then(function(" +
                "heading) {\n                    self._angle   = heading.angle;\n                " +
                "    self._radians = heading.radians;\n                });\n        };\n\n       " +
                " proto.queueMoveBy = function(startX, startY, theta, distance) {\n            va" +
                "r dx = Math.cos(theta) * distance,\n                dy = Math.sin(theta) * dista" +
                "nce;\n\n            return this.translate(startX, startY, dx, dy, true);\n      " +
                "  };\n\n        proto.queueTurnTo = function(startAngle, endAngle) {\n          " +
                "  endAngle = endAngle % this._fullCircle;\n            if (endAngle < 0) {\n    " +
                "            endAngle += this._fullCircle;\n            }\n            return thi" +
                "s.rotate(startAngle, endAngle - startAngle);\n        };\n\n        proto.getMan" +
                "ager = function(type) {\n            if (!this._managers[type]) {\n             " +
                "   this._managers[type] = new EventManager(type, this);\n            }\n        " +
                "    return this._managers[type];\n        };\n\n        proto.getPaper = functio" +
                "n() {\n            return this._paper || (this._paper = createLayer(2));\n      " +
                "  };\n\n        proto.reset = function() {\n            this._x          = 0;\n " +
                "           this._y          = 0;\n            this._radians    = 0;\n           " +
                " this._angle      = 0;\n            this._shown      = true;\n            this._" +
                "down       = true;\n            this._color      = \"black\";\n            this." +
                "_fill       = \"black\";\n            this._shape      = \"classic\";\n         " +
                "   this._size       = 1;\n            this._filling    = false;\n            thi" +
                "s._undoBuffer = [];\n            this._speed      = 3;\n            this._comput" +
                "ed_speed = 5;\n            this._state      = undefined;\n\n            for(var " +
                "key in this._managers) {\n                this._managers[key].reset();\n        " +
                "    }\n\n            this._isRadians  = false;\n            this._fullCircle = 3" +
                "60;\n            this._bufferSize = typeof _config.bufferSize === \"number\" ?\n" +
                "                _config.bufferSize :\n                0;\n\n            removeLa" +
                "yer(this._paper);\n            this._paper = undefined;\n        };\n\n        p" +
                "roto.$degrees = function(fullCircle) {\n            fullCircle = (typeof fullCir" +
                "cle === \"number\") ?\n                Math.abs(fullCircle) :\n                3" +
                "60;\n\n            this._isRadians  = false;\n            if (!fullCircle || !th" +
                "is._fullCircle) {\n                this._angle = this._radians = 0;\n           " +
                " }\n            else {\n                this._angle = this._angle / this._fullCi" +
                "rcle * fullCircle;\n            }\n            this._fullCircle = fullCircle;\n " +
                "           return this.addUpdate(\n                undefined,\n                f" +
                "alse,\n                {angle:this._angle, radians: this._radians}\n            " +
                ");\n        };\n        proto.$degrees.minArgs     = 0;\n        proto.$degrees." +
                "keywordArgs = [\"fullcircle\"];\n        proto.$degrees.returnType  = Types.FLOA" +
                "T;\n\n        proto.$radians = function() {\n            if (!this._isRadians) {" +
                "\n                this._isRadians     = true;\n                this._angle = thi" +
                "s._radians;\n                this._fullCircle = Turtle.RADIANS;\n            }\n" +
                "\n            return this._angle;\n        };\n        proto.$radians.returnType" +
                " = Types.FLOAT;\n\n        proto.$position = proto.$pos = function() {\n        " +
                "    return [this.$xcor(), this.$ycor()];\n        };\n        proto.$position.re" +
                "turnType = function(value) {\n            return new Sk.builtin.tuple([\n       " +
                "             Sk.builtin.float_(value[0]),\n                    Sk.builtin.float_" +
                "(value[1])\n            ]);\n        };\n\n        proto.$towards = function(x,y" +
                ") {\n            var coords  = getCoordinates(x,y),\n                radians = M" +
                "ath.PI + Math.atan2(this._y - coords.y, this._x - coords.x),\n                an" +
                "gle   = radians * (this._fullCircle / Turtle.RADIANS);\n\n            return ang" +
                "le;\n        };\n        proto.$towards.minArgs    = 1;\n        proto.$towards." +
                "returnType = Types.FLOAT;\n\n        proto.$distance = function(x,y) {\n        " +
                "    var coords = getCoordinates(x,y),\n                dx     = coords.x - this." +
                "_x,\n                dy     = coords.y - this._y;\n\n            return Math.sqr" +
                "t(dx * dx + dy * dy);\n        };\n        proto.$distance.minArgs    = 1;\n    " +
                "    proto.$distance.returnType = Types.FLOAT;\n\n        proto.$heading = functi" +
                "on() {\n            return Math.abs(this._angle) < 1e-13 ? 0 : this._angle;\n   " +
                "     };\n        proto.$heading.returnType = Types.FLOAT;\n\n        proto.$xcor" +
                " = function() {\n            return Math.abs(this._x) < 1e-13 ? 0 : this._x;\n  " +
                "      };\n        proto.$xcor.returnType = Types.FLOAT;\n\n        proto.$ycor =" +
                " function() {\n            return Math.abs(this._y) < 1e-13 ? 0 : this._y;\n    " +
                "    };\n        proto.$ycor.returnType = Types.FLOAT;\n\n        proto.$forward " +
                "= proto.$fd = function(distance) {\n            pushUndo(this);\n            ret" +
                "urn this.queueMoveBy(this._x, this._y, this._radians, distance);\n        };\n\n" +
                "        proto.$undo = function() {\n            popUndo(this);\n        };\n\n  " +
                "      proto.$undobufferentries = function() {\n            return this._undoBuff" +
                "er.length;\n        };\n\n        proto.$setundobuffer = function(size) {\n     " +
                "       this._bufferSize = typeof size === \"number\" ?\n                Math.min" +
                "(Math.abs(size), 1000) :\n                0;\n        };\n\n        proto.$backw" +
                "ard = proto.$back = proto.$bk = function(distance) {\n            pushUndo(this)" +
                ";\n            return this.queueMoveBy(this._x, this._y, this._radians, -distanc" +
                "e);\n        };\n\n        proto.$goto_$rw$ = proto.$setpos = proto.$setposition" +
                " = function(x,y) {\n            var coords = getCoordinates(x,y);\n\n           " +
                " pushUndo(this);\n\n            return this.translate(\n                this._x," +
                " this._y,\n                coords.x - this._x, coords.y - this._y,\n            " +
                "    true\n            );\n        };\n        proto.$goto_$rw$.minArgs = 1;\n\n " +
                "       proto.$setx = function(x) {\n            return this.translate(this._x, t" +
                "his._y, x - this._x, 0, true);\n        };\n\n        proto.$sety = function(y) " +
                "{\n            return this.translate(this._x, this._y, 0, y - this._y, true);\n " +
                "       };\n\n        proto.$home = function() {\n            var self  = this,\n" +
                "                angle = this._angle;\n\n            pushUndo(this);\n           " +
                " return self.translate(this._x, this._y, -this._x, -this._y, true)\n            " +
                "    .then(function(position) {\n                    return self.queueTurnTo(angl" +
                "e, 0);\n                })\n                .then(function(heading) {\n         " +
                "           return undefined;\n                });\n        };\n\n        proto.$" +
                "right = proto.$rt = function(angle) {\n            pushUndo(this);\n            " +
                "return this.rotate(this._angle, -angle);\n        };\n\n        proto.$left = pr" +
                "oto.$lt = function(angle) {\n            pushUndo(this);\n            return thi" +
                "s.rotate(this._angle, angle);\n        };\n\n        proto.$setheading = proto.$" +
                "seth = function(angle) {\n            pushUndo(this);\n            return this.q" +
                "ueueTurnTo(this._angle, angle);\n        };\n\n        function circleRotate(tur" +
                "tle, angle, radians) {\n            return function() {\n                return " +
                "turtle.addUpdate(\n                    undefined,\n                    false,{an" +
                "gle:angle, radians:radians}\n                );\n            };\n        }\n\n  " +
                "      function circleSegment(turtle, x, y, dx, dy, beginPath) {\n            ret" +
                "urn function() {\n                return turtle.translate(x, y, dx, dy, beginPat" +
                "h, true);\n            };\n        }\n\n        proto.$circle = function(radius," +
                " extent, steps) {\n            var self      = this,\n                x         " +
                "= this._x,\n                y         = this._y,\n                angle     = th" +
                "is._angle,\n                heading   = {},\n                states    = [],\n  " +
                "              scale     = 1/getScreen().lineScale,\n                beginPath = " +
                "true,\n                endAngle, frac, w, w2, l, i, dx, dy, promise;\n\n        " +
                "    pushUndo(this);\n\n            if (extent === undefined) {\n                " +
                "extent = self._fullCircle;\n            }\n\n            if (steps === undefined" +
                ") {\n                frac  = Math.abs(extent)/self._fullCircle;\n               " +
                " steps = 1 + ((Math.min(11+Math.abs(radius*scale)/6, 59)*frac) | 0);\n          " +
                "  }\n            w  = extent / steps;\n            w2 = 0.5 * w;\n            l " +
                " = 2 * radius * Math.sin(w*Math.PI/self._fullCircle);\n\n            if (radius " +
                "< 0) {\n                l = -l;\n                w = -w;\n                w2 = -" +
                "w2;\n                endAngle = angle - extent;\n            }\n            else" +
                " {\n                endAngle = angle + extent;\n            }\n\n            pro" +
                "mise = getFrameManager().willRenderNext() ? Promise.resolve() : new InstantPromi" +
                "se();\n\n            angle += w2;\n\n            for(i = 0; i < steps; i++) {\n " +
                "               calculateHeading(self, angle + w * i, heading);\n                " +
                "dx = Math.cos(heading.radians) * l;\n                dy = Math.sin(heading.radia" +
                "ns) * l;\n                promise = promise\n                    .then(circleRot" +
                "ate(self, heading.angle, heading.radians))\n                    .then(circleSegm" +
                "ent(self, x, y, dx, dy, beginPath));\n                x += dx;\n                " +
                "y += dy;\n                beginPath = false;\n            }\n\n            promi" +
                "se = promise.then(function() {\n                calculateHeading(self, endAngle," +
                " heading);\n                self._angle   = heading.angle;\n                self" +
                "._radians = heading.radians;\n                return self.addUpdate(undefined, t" +
                "rue, heading);\n            });\n\n            return promise;\n        };\n    " +
                "    proto.$circle.keywordArgs = [\"extent\", \"steps\"];\n        proto.$circle." +
                "minArgs     = 1;\n\n        proto.$penup = proto.$up = proto.$pu = function() {" +
                "\n            this._down = false;\n            return this.addUpdate(undefined, " +
                "false, {down:false});\n        };\n\n        proto.$pendown = proto.$down = prot" +
                "o.$pd = function() {\n            this._down = true;\n            return this.ad" +
                "dUpdate(undefined, false, {down:true});\n        };\n\n        proto.$isdown = f" +
                "unction() {\n            return this._down;\n        };\n\n        proto.$speed " +
                "= function(speed) {\n            if (arguments.length) {\n                this._" +
                "speed          = Math.max(0, Math.min(1000, speed));\n                this._comp" +
                "uted_speed = Math.max(0, speed * 2 - 1);\n                return this.addUpdate(" +
                "undefined, false, {speed:this._computed_speed});\n            }\n\n            r" +
                "eturn this._speed;\n        };\n        proto.$speed.minArgs = 0;\n        proto" +
                ".$speed.keywordArgs = [\"speed\"];\n\n        proto.$pencolor = function(r,g,b,a" +
                ") {\n            var color;\n\n            if (arguments.length) {\n            " +
                "    this._color = createColor(r,g,b,a);\n                return this.addUpdate(u" +
                "ndefined, this._shown, {color : this._color});\n            }\n\n            ret" +
                "urn hexToRGB(this._color);\n        };\n        proto.$pencolor.minArgs = 0;\n  " +
                "      proto.$pencolor.returnType = Types.COLOR;\n\n        proto.$fillcolor = fu" +
                "nction(r,g,b,a) {\n            var color;\n\n            if (arguments.length) {" +
                "\n                this._fill = createColor(r,g,b,a);\n                return thi" +
                "s.addUpdate(undefined, this._shown, {fill : this._fill});\n            }\n\n    " +
                "        return hexToRGB(this._fill);\n        };\n        proto.$fillcolor.minAr" +
                "gs = 0;\n        proto.$fillcolor.returnType = Types.COLOR;\n\n        proto.$co" +
                "lor = function(color, fill, b, a) {\n            if (arguments.length) {\n      " +
                "          if (arguments.length === 1 || arguments.length >= 3) {\n              " +
                "      this._color = createColor(color, fill, b, a);\n                    this._f" +
                "ill  = this._color;\n                }\n                else {\n                " +
                "    this._color = createColor(color);\n                    this._fill  = createC" +
                "olor(fill);\n                }\n                return this.addUpdate(undefined," +
                " this._shown, {\n                    color : this._color,\n                    f" +
                "ill  : this._fill\n                });\n            }\n            return [this." +
                "$pencolor(), this.$fillcolor()];\n        };\n        proto.$color.minArgs = 0;" +
                "\n        proto.$color.returnType = function(value) {\n            return new Sk" +
                ".builtin.tuple([\n                Types.COLOR(value[0]),\n                Types." +
                "COLOR(value[1])\n            ]);\n        };\n\n        proto.$fill = function(f" +
                "lag) {\n            var self = this;\n\n            if (flag !== undefined) {\n " +
                "               flag = !!flag;\n                if (flag === this._filling) retur" +
                "n;\n                this._filling = flag;\n                if (flag) {\n        " +
                "            pushUndo(this);\n                    return this.addUpdate(undefined" +
                ", false, {\n                        filling      : true,\n                      " +
                "  fillBuffer : [{x : this._x, y : this._y}]\n                    });\n          " +
                "      }\n                else {\n                    pushUndo(this);\n          " +
                "          return this.addUpdate(\n                        function() {\n        " +
                "                    this.fillBuffer.push(this);\n                            dra" +
                "wFill.call(this);\n                        },\n                        true,\n  " +
                "                      {\n                            filling      : false,\n    " +
                "                        fillBuffer : undefined\n                        }\n     " +
                "               );\n                }\n            }\n\n            return this._" +
                "filling;\n        };\n        proto.$fill.minArgs = 0;\n\n        proto.$begin_f" +
                "ill = function() {\n            return this.$fill(true);\n        };\n\n        " +
                "proto.$end_fill = function() {\n            return this.$fill(false);\n        }" +
                ";\n\n        proto.$stamp = function() {\n            pushUndo(this);\n         " +
                "   return this.addUpdate(function() {\n                drawTurtle(this, this.con" +
                "text());\n            }, true);\n        };\n\n        proto.$dot = function(siz" +
                "e, color, g, b, a) {\n            pushUndo(this);\n            size = Sk.builtin" +
                ".asnum$(size);\n            size = (typeof size === \"number\") ?\n             " +
                "   Math.max(1, Math.abs(size) | 0) :\n                Math.max(this._size + 4, t" +
                "his._size * 2);\n\n            color = (color !== undefined) ?\n                " +
                "createColor(color, g, b, a) :\n                this._color;\n\n            retur" +
                "n this.addUpdate(drawDot, true, undefined, size, color);\n        };\n\n        " +
                "proto.$write = function(message,move,align,font) {\n            var self = this," +
                "\n                promise, face, size, type, width;\n\n            pushUndo(this" +
                ");\n\n            message = String(message);\n\n            if (font && font.con" +
                "structor === Array) {\n                face = typeof font[0] === \"string\" ? fo" +
                "nt[0] : \"Arial\";\n                size = String(font[1] || \"12pt\");\n       " +
                "         type = typeof font[2] === \"string\" ? font[2] : \"normal\";\n         " +
                "       if (/^\\d+$/.test(size)) {\n                    size += \"pt\";\n        " +
                "        }\n\n                font = [type, size, face].join(\" \");\n           " +
                " }\n\n            if (!align) {\n                align = \"left\";\n            " +
                "}\n\n            promise = this.addUpdate(\n                drawText, true, unde" +
                "fined, message, align, font\n            );\n\n            if (move && (align ==" +
                "= \"left\" || align === \"center\")) {\n                width = measureText(mess" +
                "age, font);\n                if (align === \"center\") {\n                    wi" +
                "dth = width/2;\n                }\n                promise = promise.then(functi" +
                "on() {\n                    var state = self.getState();\n                    re" +
                "turn self.translate(state.x, state.y, width, 0, true);\n                });\n   " +
                "         }\n\n            return promise;\n        };\n        proto.$write.keyw" +
                "ordArgs = [\"move\",\"align\",\"font\"];\n        proto.$write.minArgs     = 1;" +
                "\n\n        proto.$pensize = proto.$width = function(size) {\n            if (ar" +
                "guments.length) {\n                this._size = size;\n                return th" +
                "is.addUpdate(undefined, this._shown, {size : size});\n            }\n\n         " +
                "   return this._size;\n        };\n        proto.$pensize.minArgs = proto.$width" +
                ".minArgs = 0;\n        proto.$pensize.keywordArgs = proto.$width.keywordArgs = [" +
                "\"width\"];\n\n        proto.$showturtle = proto.$st = function() {\n           " +
                " this._shown = true;\n            return this.addUpdate(undefined, true, {shown " +
                ": true});\n        };\n\n        proto.$hideturtle = proto.$ht = function() {\n " +
                "           this._shown = false;\n            return this.addUpdate(undefined, tr" +
                "ue, {shown : false});\n        };\n\n        proto.$isvisible = function() {\n  " +
                "          return this._shown;\n        };\n\n        proto.$shape = function(sha" +
                "pe) {\n            if (shape && SHAPES[shape]) {\n                this._shape = " +
                "shape;\n                return this.addUpdate(undefined, this._shown, {shape : s" +
                "hape});\n            }\n\n            return this._shape;\n        };\n        p" +
                "roto.$shape.minArgs     = 0;\n        proto.$shape.keywordArgs = [\"name\"];\n\n" +
                "        proto.$window_width = function() {\n            return this._screen.$win" +
                "dow_width();\n        };\n        \n        proto.$window_height = function() {" +
                "\n            return this._screen.$window_height();\n        };\n        \n     " +
                "   proto.$tracer = function(n, delay) {\n            return this._screen.$tracer" +
                "(n, delay);\n        };\n        proto.$tracer.minArgs     = 0;\n        proto.$" +
                "tracer.keywordArgs = [\"n\", \"delay\"];\n        \n        proto.$update = func" +
                "tion() {\n            return this._screen.$update();\n        };\n        \n    " +
                "    proto.$delay = function(delay) {\n            return this._screen.$delay(del" +
                "ay);\n        };\n        proto.$delay.minArgs     = 0;\n        proto.$delay.ke" +
                "ywordArgs = [\"delay\"];\n\n        proto.$reset = function() {\n            thi" +
                "s.reset();\n            return this.$clear();\n        };\n\n        proto.$main" +
                "loop = proto.$done = function() {\n            return this._screen.$mainloop();" +
                "\n        };\n\n        proto.$clear = function() {\n            return this.add" +
                "Update(function() {\n                clearLayer(this.context());\n            }," +
                " true);\n        };\n        proto.$dot.minArgs = 0;\n\n        proto.$onclick =" +
                " function(method,btn,add) {\n            this.getManager(\"mousedown\").addHandl" +
                "er(method, add);\n        };\n        proto.$onclick.minArgs = 1;\n        proto" +
                ".$onclick.keywordArgs = [\"btn\",\"add\"];\n\n        proto.$onrelease = functio" +
                "n(method,btn,add) {\n            this.getManager(\"mouseup\").addHandler(method," +
                " add);\n        };\n        proto.$onrelease.minArgs = 1;\n        proto.$onrele" +
                "ase.keywordArgs = [\"btn\",\"add\"];\n\n        proto.$ondrag = function(method," +
                "btn,add) {\n            this.getManager(\"mousemove\").addHandler(method, add);" +
                "\n        };\n        proto.$ondrag.minArgs = 1;\n        proto.$ondrag.keywordA" +
                "rgs = [\"btn\",\"add\"];\n\n        proto.$getscreen = function() {\n           " +
                " return _module.Screen();\n        };\n        proto.$getscreen.isSk = true;\n\n" +
                "        proto.$clone = function() {\n\n            var newTurtleInstance = Sk.mi" +
                "sceval.callsimOrSuspend(_module.Turtle);\n\n            // All the properties th" +
                "at are in getState()\n            newTurtleInstance.instance._x = this._x;\n    " +
                "        newTurtleInstance.instance._y = this._y;\n            newTurtleInstance." +
                "instance._angle = this._angle;\n            newTurtleInstance.instance._radians " +
                "= this._radians;\n            newTurtleInstance.instance._shape = this._shape;\n" +
                "            newTurtleInstance.instance._color = this._color;\n            newTur" +
                "tleInstance.instance._fill = this._fill;\n            newTurtleInstance.instance" +
                "._filling = this._filling;\n            newTurtleInstance.instance._size = this." +
                "_size;\n            newTurtleInstance.instance._computed_speed = this._computed_" +
                "speed;\n            newTurtleInstance.instance._down = this._down;\n            " +
                "newTurtleInstance.instance._shown = this._shown;\n\n            // Other propert" +
                "ies to copy\n            newTurtleInstance.instance._isRadians = this._isRadians" +
                ";\n            newTurtleInstance.instance._fullCircle = this._fullCircle;\n     " +
                "       newTurtleInstance.instance._bufferSize = this._bufferSize;\n            c" +
                "onsole.log(this._undoBuffer);\n            newTurtleInstance.instance._undoBuffe" +
                "r = this._undoBuffer;\n            console.log(newTurtleInstance.instance._undoB" +
                "uffer);\n\n\n            newTurtleInstance._clonedFrom = this;\n\n            re" +
                "turn newTurtleInstance;\n        };\n        proto.$clone.returnType = function(" +
                "value) {\n            // When I return the instance here, I'm not sure if it end" +
                "s up with the right \"Turtle\" python type.\n            return value\n        }" +
                ";\n\n        proto.$getturtle = proto.$getpen = function() {\n            return" +
                " this.skInstance;\n        };\n        proto.$getturtle.isSk = true;\n    })(Tur" +
                "tle.prototype);\n\n    function Screen() {\n        var w,h;\n        this._fram" +
                "es    = 1;\n        this._delay     = undefined;\n        this._bgcolor   = \"no" +
                "ne\";\n        this._mode      = \"standard\";\n        this._managers  = {};\n " +
                "       this._keyLogger = {};\n        if (_config.height && _config.width) {\n  " +
                "          w = _config.width/2;\n            h = _config.height/2;\n        } els" +
                "e {\n            w = _config.defaultSetup.width/2;\n            h = _config.defa" +
                "ultSetup.height/2;\n        }\n        this.setUpWorld(-w,-h,w,h);\n    }\n\n   " +
                " (function(proto) {\n        proto.spriteLayer = function() {\n            retur" +
                "n this._sprites || (this._sprites = createLayer(3));\n        };\n\n        prot" +
                "o.bgLayer = function() {\n            return this._background || (this._backgrou" +
                "nd = createLayer(1));\n        };\n\n        proto.hitTestLayer = function() {\n" +
                "            return this._hitTest || (this._hitTest = createLayer(0,true));\n    " +
                "    };\n\n        proto.getManager = function(type) {\n            if (!this._ma" +
                "nagers[type]) {\n                this._managers[type] = new EventManager(type, t" +
                "his);\n            }\n            return this._managers[type];\n        };\n\n  " +
                "      proto.reset = function() {\n            var key;\n\n            this._keyL" +
                "isteners = undefined;\n\n            for (key in this._keyLogger) {\n           " +
                "     window.clearInterval(this._keyLogger[key]);\n                window.clearTi" +
                "meout(this._keyLogger[key]);\n                delete this._keyLogger[key];\n    " +
                "        }\n\n            if (this._keyDownListener) {\n                getTarget" +
                "().removeEventListener(\"keydown\", this._keyDownListener);\n                thi" +
                "s._keyDownListener = undefined;\n            }\n\n            if (this._keyUpLis" +
                "tener) {\n                getTarget().removeEventListener(\"keyup\", this._keyUp" +
                "Listener);\n                this._keyUpListener = undefined;\n            }\n\n " +
                "           if (this._timer) {\n                window.clearTimeout(this._timer);" +
                "\n                this._timer = undefined;\n            }\n\n            for(key" +
                " in this._managers) {\n                this._managers[key].reset();\n           " +
                " }\n\n            this._mode = \"standard\";\n            removeLayer(this._spri" +
                "tes);\n            this._sprites = undefined;\n            removeLayer(this._bac" +
                "kground);\n            this._background = undefined;\n        };\n\n        prot" +
                "o.setUpWorld = function(llx, lly, urx, ury) {\n            var world = this;\n\n" +
                "            world.llx       = llx;\n            world.lly       = lly;\n        " +
                "    world.urx       = urx;\n            world.ury       = ury;\n            worl" +
                "d.xScale    = (urx - llx) / getWidth();\n            world.yScale    = -1 * (ury" +
                " - lly) / getHeight();\n            world.lineScale = Math.min(Math.abs(world.xS" +
                "cale), Math.abs(world.yScale));\n        };\n\n        proto.$setup = function(w" +
                "idth, height, startX, startY) {\n            if (isNaN(parseFloat(width))) {\n  " +
                "              width = getWidth();\n            }\n            if (isNaN(parseFlo" +
                "at(height))) {\n                height = getHeight();\n            }\n\n        " +
                "    if (width <= 1) {\n                width = getWidth() * width;\n            " +
                "}\n            if (height <= 1) {\n                height = getHeight() * height" +
                ";\n            }\n\n            this._width  = width;\n            this._height " +
                "= height;\n\n            this._xOffset = (startX !== undefined && !isNaN(parseIn" +
                "t(startX))) ?\n                parseInt(startX) :\n                0;\n\n       " +
                "     this._yOffset = (startY !== undefined && !isNaN(parseInt(startY))) ?\n     " +
                "           parseInt(startY) :\n                0;\n\n            if (this._mode " +
                "=== \"world\") {\n                return this._setworldcoordinates(this.llx, thi" +
                "s.lly, this.urx, this.ury);\n            }\n\n            return this._setworldc" +
                "oordinates(-width/2, -height/2, width/2, height/2);\n        };\n        proto.$" +
                "setup.minArgs     = 0;\n        proto.$setup.keywordArgs = [\"width\", \"height" +
                "\", \"startx\", \"starty\"];\n\n        proto.$register_shape = proto.$addshape " +
                "= function(name, points) {\n            SHAPES[name] = points;\n        };\n\n  " +
                "      proto.$getshapes = function() {\n            return Object.keys(SHAPES);\n" +
                "        };\n\n        proto.$tracer = function(frames, delay) {\n            if " +
                "(frames !== undefined || delay !== undefined) {\n                if (typeof dela" +
                "y === \"number\") {\n                    this._delay = delay;\n                 " +
                "   getFrameManager().refreshInterval(delay);\n                }\n               " +
                " if (typeof frames === \"number\") {\n                    this._frames = frames;" +
                "\n                    return getFrameManager().frameBuffer(frames);\n           " +
                "     }\n\n                return;\n            }\n\n            return this._fra" +
                "mes;\n        };\n        proto.$tracer.minArgs = 0;\n\n        proto.$delay = f" +
                "unction(delay) {\n            if (delay !== undefined) {\n                return" +
                " this.$tracer(undefined, delay);\n            }\n\n            return this._dela" +
                "y === undefined ? OPTIMAL_FRAME_RATE : this._delay;\n        };\n\n        proto" +
                "._setworldcoordinates = function(llx, lly, urx, ury) {\n            var world   " +
                "  = this,\n                turtles = getFrameManager().turtles();\n\n           " +
                " this.setUpWorld(llx, lly, urx, ury);\n\n            if (this._sprites) {\n     " +
                "           applyWorld(this, this._sprites);\n            }\n\n            if (th" +
                "is._background) {\n                applyWorld(this, this._background);\n        " +
                "    }\n\n            return this.$clear();\n        };\n\n        proto.$setworl" +
                "dcoordinates = function(llx, lly, urx, ury) {\n            this._mode = \"world" +
                "\";\n            return this._setworldcoordinates(llx, lly, urx, ury);\n        " +
                "};\n\n        proto.$clear = proto.$clearscreen = function() {\n            this" +
                ".reset();\n            return this.$reset();\n        };\n\n        proto.$updat" +
                "e = function() {\n            return getFrameManager().update();\n        };\n\n" +
                "        proto.$reset = proto.$resetscreen = function() {\n            var self =" +
                " this,\n                turtles = getFrameManager().turtles();\n\n            re" +
                "turn getFrameManager().addFrame(function() {\n                applyWorld(self, s" +
                "elf._sprites);\n                applyWorld(self, self._background);\n           " +
                "     for(var i = 0; i < turtles.length; i++) {\n                    turtles[i].r" +
                "eset();\n                    applyWorld(self, turtles[i]._paper);\n             " +
                "   }\n            }, true);\n        };\n\n        proto.$window_width = functio" +
                "n() {\n            return getWidth();\n        };\n\n        proto.$window_heigh" +
                "t = function() {\n            return getHeight();\n        };\n        proto.$de" +
                "lay.minArgs = 0;\n\n        proto.$turtles = function() {\n            return ge" +
                "tFrameManager().turtles();\n        };\n        proto.$turtles.returnType = Type" +
                "s.TURTLE_LIST;\n\n        proto.$bgcolor = function(color, g, b, a) {\n         " +
                "   if (arguments.length) {\n                this._bgcolor = createColor(color, g" +
                ", b, a);\n                clearLayer(this.bgLayer(), this._bgcolor);\n          " +
                "      return;\n            }\n\n            return hexToRGB(this._bgcolor);\n   " +
                "     };\n        proto.$bgcolor.minArgs = 0;\n        proto.$bgcolor.returnType " +
                "= Types.COLOR;\n\n        // no-op - just defined for consistency with python ve" +
                "rsion\n        proto.$mainloop = proto.$done = function() {\n            return " +
                "undefined;\n        };\n\n        proto.$bye = function() {\n            return " +
                "Sk.TurtleGraphics.reset();\n        };\n\n        proto.$exitonclick = function(" +
                ") {\n            this._exitOnClick = true;\n            return this.getManager(" +
                "\"mousedown\").addHandler(function() {\n                resetTurtle();\n        " +
                "    }, false);\n        };\n\n        proto.$onclick = function(method,btn,add) " +
                "{\n            if (this._exitOnClick) return;\n            this.getManager(\"mou" +
                "sedown\").addHandler(method, add);\n        };\n        proto.$onclick.minArgs =" +
                " 1;\n        proto.$onclick.keywordArgs = [\"btn\",\"add\"];\n\n        var KEY_" +
                "MAP = {\n            \"8\"  : /^back(space)?$/i,\n            \"9\"  : /^tab$/i," +
                "\n            \"13\" : /^(enter|return)$/i,\n            \"16\" : /^shift$/i,\n " +
                "           \"17\" : /^(ctrl|control)$/i,\n            \"18\" : /^alt$/i,\n      " +
                "      \"27\" : /^esc(ape)?$/i,\n            \"32\" : /^space$/i,\n            \"" +
                "33\" : /^page[\\s\\-]?up$/i,\n            \"34\" : /^page[\\s\\-]?down$/i,\n    " +
                "        \"35\" : /^end$/i,\n            \"36\" : /^home$/i,\n            \"37\" " +
                ": /^left([\\s\\-]?arrow)?$/i,\n            \"38\" : /^up([\\s\\-]?arrow)?$/i,\n " +
                "           \"39\" : /^right([\\s\\-]?arrow)?$/i,\n            \"40\" : /^down([" +
                "\\s\\-]?arrow)?$/i,\n            \"45\" : /^insert$/i,\n            \"46\" : /^d" +
                "el(ete)?$/i\n        };\n\n        proto._createKeyRepeater = function(key, code" +
                ") {\n            var self = this;\n            // set a timeout for 333ms and if" +
                " key has not yet been\n            // released, fire another event and continue " +
                "firing\n            // at a rate of ~20 times per second until key is released\n" +
                "            self._keyLogger[code] = window.setTimeout(function() {\n            " +
                "    // trigger the first repeat after the longer delay\n                self._ke" +
                "yListeners[key]();\n                // set up the repeat interval with the quick" +
                " delay\n                self._keyLogger[code] = window.setInterval(function() {" +
                "\n                    self._keyListeners[key]();\n                }, 50);\n     " +
                "       }, 333);\n        };\n\n        proto._createKeyDownListener = function()" +
                " {\n            var self = this;\n\n            if (this._keyDownListener) retur" +
                "n;\n\n            this._keyDownListener = function(e) {\n                if (!fo" +
                "cusTurtle()) return;\n\n                var code    = e.charCode || e.keyCode,\n" +
                "                    pressed = String.fromCharCode(code).toLowerCase(),\n        " +
                "            key, inKeyMap;\n\n                if (self._keyLogger[code]) return;" +
                "\n\n                for (key in self._keyListeners) {\n                    inKey" +
                "Map = (key.length > 1 && KEY_MAP[code] && KEY_MAP[code].test(key));\n           " +
                "         if (key === pressed || inKeyMap) {\n                        // trigger " +
                "the intial keydown handler\n                        self._keyListeners[key]();\n" +
                "                        self._createKeyRepeater(key, code);\n                   " +
                "     e.preventDefault();\n                        break;\n                    }" +
                "\n                }\n            };\n\n            getTarget().addEventListener(" +
                "\"keydown\", this._keyDownListener);\n        };\n\n        proto._createKeyUpLi" +
                "stener = function() {\n            var self = this;\n\n            if (this._key" +
                "UpListener) return;\n\n            this._keyUpListener = function(e) {\n        " +
                "        var interval = self._keyLogger[e.charCode || e.keyCode];\n              " +
                "  if (interval !== undefined) {\n                    e.preventDefault();\n      " +
                "              window.clearInterval(interval);\n                    window.clearT" +
                "imeout(interval);\n                    delete(self._keyLogger[e.charCode || e.ke" +
                "yCode]);\n                }\n            };\n            \n            getTarget" +
                "().addEventListener(\"keyup\", this._keyUpListener);\n        };\n\n        prot" +
                "o.$listen = function() {\n            this._createKeyUpListener();\n            " +
                "this._createKeyDownListener();\n        };\n\n        proto.$onkey = function(me" +
                "thod, keyValue) {\n            if (typeof keyValue === \"function\") {\n        " +
                "        var temp = method;\n                method   = keyValue;\n              " +
                "  keyValue = temp;\n            }\n\n            keyValue = String(keyValue).toL" +
                "owerCase();\n\n            if (method && typeof method === \"function\") {\n    " +
                "            if (!this._keyListeners) this._keyListeners = {};\n                t" +
                "his._keyListeners[keyValue] = method;\n            }\n            else {\n      " +
                "          delete this._keyListeners[keyValue];\n            }\n        };\n\n   " +
                "     proto.$onscreenclick = function(method,btn,add) {\n            this.getMana" +
                "ger(\"mousedown\").addHandler(method, add);\n        };\n        proto.$onscreen" +
                "click.minArgs = 1;\n        proto.$onscreenclick.keywordArgs = [\"btn\",\"add\"]" +
                ";\n\n        proto.$ontimer = function(method, interval) {\n            if (this" +
                "._timer) {\n                window.clearTimeout(this._timer);\n                t" +
                "his._timer = undefined;\n            }\n\n            if (method && typeof inter" +
                "val === \"number\") {\n                this._timer = window.setTimeout(method, M" +
                "ath.max(0, interval|0));\n            }\n        };\n        proto.$ontimer.minA" +
                "rgs = 0;\n\n    })(Screen.prototype);\n\n    function ensureAnonymous() {\n     " +
                "   if (!_anonymousTurtle) {\n            _anonymousTurtle = _module.Turtle();\n " +
                "       }\n\n        return _anonymousTurtle;\n    }\n\n    function getTarget() " +
                "{\n        return _target;\n    }\n\n    function getScreen() {\n        if (!_s" +
                "creenInstance) {\n            _screenInstance = new Screen();\n        }\n      " +
                "  return _screenInstance;\n    }\n\n    function getMouseHandler() {\n        if" +
                " (!_mouseHandler) {\n            _mouseHandler = new MouseHandler();\n        }" +
                "\n        return _mouseHandler;\n    }\n\n    function getWidth() {\n        ret" +
                "urn (\n            (_screenInstance && _screenInstance._width) ||\n            _" +
                "config.width ||\n            getTarget().clientWidth\n        ) | 0;\n    }\n\n " +
                "   function getHeight() {\n        return (\n            (_screenInstance && _sc" +
                "reenInstance._height) ||\n            _config.height ||\n            getTarget()" +
                ".clientHeight\n        ) | 0;\n    }\n\n    function createLayer(zIndex, isHidde" +
                "n) {\n        var canvas = document.createElement(\"canvas\"),\n            widt" +
                "h  = getWidth(),\n            height = getHeight(),\n            offset = getTar" +
                "get().firstChild ? (-height) + \"px\" : \"0\",\n            context;\n\n        " +
                "canvas.width          = width;\n        canvas.height         = height;\n       " +
                " canvas.style.position = \"relative\";\n        canvas.style.display  = \"block" +
                "\";\n        canvas.style.setProperty(\"margin-top\",offset);\n        canvas.st" +
                "yle.setProperty(\"z-index\", zIndex);\n        if (isHidden) {\n            canv" +
                "as.style.display = \"none\";\n        }\n\n        getTarget().appendChild(canva" +
                "s);\n\n        context = canvas.getContext(\"2d\");\n        context.lineCap = " +
                "\"round\";\n        context.lineJoin = \"round\";\n\n        applyWorld(getScree" +
                "n(), context);\n\n        return context;\n    }\n\n    function cancelAnimation" +
                "Frame() {\n        if (_frameRequest) {\n            (window.cancelAnimationFram" +
                "e || window.mozCancelAnimationFrame)(_frameRequest);\n            _frameRequest " +
                "= undefined;\n        }\n        if (_frameRequestTimeout) {\n            window" +
                ".clearTimeout(_frameRequestTimeout);\n            _frameRequestTimeout = undefin" +
                "ed;\n        }\n    }\n\n    function applyWorld(world, context) {\n        var " +
                "llx    = world.llx,\n            lly    = world.lly,\n            urx    = world" +
                ".urx,\n            ury    = world.ury,\n            xScale = world.xScale,\n    " +
                "        yScale = world.yScale;\n\n        if (!context) return;\n\n        clear" +
                "Layer(context);\n\n        context.restore();\n        context.save();\n        " +
                "context.scale(1 / xScale, 1 / yScale);\n        if (lly === 0) {\n            co" +
                "ntext.translate(-llx, lly - (ury - lly));\n        } else if (lly > 0) {\n      " +
                "      context.translate(-llx, -lly * 2);\n        } else {\n            context." +
                "translate(-llx, -ury);\n        }\n    }\n\n    function pushUndo(turtle) {\n   " +
                "     var properties, undoState, i;\n\n        if (!_config.allowUndo || !turtle." +
                "_bufferSize) {\n            return;\n        }\n\n        if (!turtle._undoBuffe" +
                "r) {\n            turtle._undoBuffer = [];\n        }\n\n        while(turtle._u" +
                "ndoBuffer.length > turtle._bufferSize) {\n            turtle._undoBuffer.shift()" +
                ";\n        }\n\n        undoState  = {};\n        properties = \"x y angle radia" +
                "ns color fill down filling shown shape size\".split(\" \");\n        for(i = 0; " +
                "i < properties.length; i++) {\n            undoState[properties[i]] = turtle[\"_" +
                "\" + properties[i]];\n        }\n\n        turtle._undoBuffer.push(undoState);\n" +
                "\n        return turtle.addUpdate(function() {\n            undoState.fillBuffer" +
                " = this.fillBuffer ? this.fillBuffer.slice() : undefined;\n            if (turtl" +
                "e._paper && turtle._paper.canvas) {\n                undoState.image = turtle._p" +
                "aper.canvas.toDataURL();\n            }\n        }, false);\n    }\n\n    var un" +
                "doImage = new Image();\n    function popUndo(turtle) {\n        var undoState;\n" +
                "\n        if (!turtle._bufferSize || !turtle._undoBuffer) {\n            return;" +
                "\n        }\n\n        undoState = turtle._undoBuffer.pop();\n\n        if (!und" +
                "oState) {\n            return;\n        }\n\n        for(var key in undoState) {" +
                "\n            if (key === \"image\" || key === \"fillBuffer\") continue;\n      " +
                "      turtle[\"_\" + key] = undoState[key];\n        }\n\n        return turtle." +
                "addUpdate(function() {\n            var img;\n            if (undoState.image) {" +
                "\n                undoImage.src = undoState.image;\n                img = undoIm" +
                "age;\n            }\n\n            clearLayer(this.context(), false, undoImage);" +
                "\n            delete undoState.image;\n        }, true, undoState);\n    }\n\n  " +
                "  function removeLayer(layer) {\n        if (layer && layer.canvas && layer.canv" +
                "as.parentNode) {\n            layer.canvas.parentNode.removeChild(layer.canvas);" +
                "\n        }\n    }\n\n    function clearLayer(context, color, image) {\n        " +
                "if (!context) return;\n\n        context.save();\n        context.setTransform(1" +
                ",0,0,1,0,0);\n        if (color) {\n            context.fillStyle = color;\n    " +
                "        context.fillRect(0, 0, context.canvas.width, context.canvas.height);\n  " +
                "      }\n        else {\n            context.clearRect(0, 0, context.canvas.widt" +
                "h, context.canvas.height);\n        }\n\n        if (image) {\n            conte" +
                "xt.drawImage(image, 0, 0);\n        }\n\n        context.restore();\n    }\n\n  " +
                "  function drawTurtle(state, context) {\n        var shape  = SHAPES[state.shape" +
                "],\n            world  = getScreen(),\n            width  = getWidth(),\n       " +
                "     height = getHeight(),\n            xScale = world.xScale,\n            ySca" +
                "le = world.yScale,\n            x, y, bearing;\n\n        if (!context) return;" +
                "\n\n        x       = Math.cos(state.radians) / xScale;\n        y       = Math." +
                "sin(state.radians) / yScale;\n        bearing = Math.atan2(y, x) - Math.PI/2;\n" +
                "\n        context.save();\n        context.translate(state.x, state.y);\n       " +
                " context.scale(xScale,yScale);\n        context.rotate(bearing);\n        contex" +
                "t.beginPath();\n        context.lineWidth   = 1;\n        context.strokeStyle = " +
                "state.color;\n        context.fillStyle   = state.fill;\n        context.moveTo(" +
                "shape[0][0], shape[0][1]);\n        for(var i = 1; i < shape.length; i++) {\n   " +
                "         context.lineTo(shape[i][0], shape[i][1]);\n        }\n        context.c" +
                "losePath();\n        context.fill();\n        context.stroke();\n        context" +
                ".restore();\n    }\n\n    function drawDot(size, color) {\n        var context =" +
                " this.context(),\n            screen  = getScreen(),\n            xScale  = scre" +
                "en.xScale,\n            yScale  = screen.yScale;\n\n        if (!context) return" +
                ";\n        context.beginPath();\n        context.moveTo(this.x, this.y);\n      " +
                "  size = size * Math.min(Math.abs(xScale),Math.abs(yScale));\n        context.ar" +
                "c(this.x, this.y, size, 0, Turtle.RADIANS);\n        context.closePath();\n     " +
                "   context.fillStyle = color || this.color;\n        context.fill();\n    }\n\n " +
                "   var textMeasuringContext = document.createElement(\"canvas\").getContext(\"2d" +
                "\");\n    function measureText(message, font) {\n        if (font) {\n          " +
                "  textMeasuringContext.font = font;\n        }\n        return textMeasuringCont" +
                "ext.measureText(message).width;\n    }\n\n    function drawText(message, align, " +
                "font) {\n        var context = this.context();\n\n        if (!context) return;" +
                "\n\n        context.save();\n        if (font) {\n            context.font = fon" +
                "t;\n        }\n        if (align && align.match(/^(left|right|center)$/)) {\n   " +
                "         context.textAlign = align;\n        }\n\n        context.scale(1,-1);\n" +
                "        context.fillStyle = this.fill;\n        context.fillText(message, this.x" +
                ", -this.y);\n        context.restore();\n    }\n\n    function drawLine(loc, beg" +
                "inPath, endPath) {\n        // TODO: make steps in path use square ends of lines" +
                "\n        // and open and close path at the right times.\n        // See if we c" +
                "an minimize calls to stroke\n        var context = this.context();\n\n        if" +
                " (!context) return;\n\n        if (beginPath) {\n            context.beginPath()" +
                ";\n            context.moveTo(this.x, this.y);\n        }\n\n        context.lin" +
                "eWidth   = this.size * getScreen().lineScale;\n        context.strokeStyle = thi" +
                "s.color;\n        context.lineTo(loc.x, loc.y);\n        context.stroke();\n    " +
                "}\n\n    function drawFill() {\n        var context = this.context(),\n         " +
                "   path  = this.fillBuffer,\n            i;\n\n        if (!context || !path || " +
                "!path.length) return;\n\n        context.save();\n        context.beginPath();\n" +
                "        context.moveTo(path[0].x,path[0].y);\n        for(i = 1; i < path.length" +
                "; i++) {\n            context.lineTo(path[i].x, path[i].y);\n        }\n        " +
                "context.closePath();\n        context.fillStyle = this.fill;\n        context.fi" +
                "ll();\n        for(i = 1; i < path.length; i++) {\n            if (!path[i].stro" +
                "ke) {\n                continue;\n            }\n\n            context.beginPath" +
                "();\n            context.moveTo(path[i-1].x, path[i-1].y);\n            context." +
                "lineWidth   = path[i].size * getScreen().lineScale;\n            context.strokeS" +
                "tyle = path[i].color;\n            context.lineTo(path[i].x, path[i].y);\n      " +
                "      context.stroke();\n        }\n        context.restore();\n    }\n\n    fun" +
                "ction partialTranslate(turtle, x, y, beginPath, countAsFrame) {\n        return " +
                "function() {\n            return turtle.addUpdate(\n                function(loc" +
                ") {\n                    if (this.down) {\n                        drawLine.call" +
                "(this, loc, beginPath);\n                    }\n                },\n            " +
                "    countAsFrame,\n                {x : x, y : y},\n                beginPath\n " +
                "           );\n        };\n    }\n\n    function translate(turtle, startX, start" +
                "Y, dx, dy, beginPath, isCircle) {\n        // speed is in pixels per ms\n       " +
                " var speed   = turtle._computed_speed,\n            screen  = getScreen(),\n    " +
                "        xScale  = Math.abs(screen.xScale),\n            yScale  = Math.abs(scree" +
                "n.yScale),\n            x       = startX,\n            y       = startY,\n      " +
                "      pixels  = Math.sqrt(dx * dx * xScale + dy * dy * yScale),\n            // " +
                "TODO: allow fractional frame updates?\n            frames  = speed ? Math.round(" +
                "Math.max(1, pixels / speed)) : 1,\n            xStep   = dx / frames,\n         " +
                "   yStep   = dy / frames,\n            promise = getFrameManager().willRenderNex" +
                "t() ?\n                Promise.resolve() :\n                new InstantPromise()" +
                ",\n            countAsFrame = (!speed && isCircle) ? false : true,\n            " +
                "i;\n\n        turtle.addUpdate(function() {\n            if (this.filling) {\n  " +
                "              this.fillBuffer.push({\n                    x        : this.x,\n  " +
                "                  y      : this.y,\n                    stroke : this.down,\n   " +
                "                 color  : this.color,\n                    size   : this.size\n " +
                "               });\n            }\n        }, false);\n\n        for(i = 0; i < " +
                "frames; i++) {\n            x = startX + xStep * (i+1);\n            y = startY " +
                "+ yStep * (i+1);\n            promise = promise.then(\n                partialTr" +
                "anslate(turtle, x, y, beginPath, countAsFrame)\n            );\n            begi" +
                "nPath = false;\n        }\n\n        return promise.then(function() {\n         " +
                "   return [startX + dx, startY + dy];\n        });\n    }\n\n    function partia" +
                "lRotate(turtle, angle, radians, countAsFrame) {\n        return function() {\n  " +
                "          return turtle.addUpdate(undefined, countAsFrame, {angle:angle, radians" +
                ":radians});\n        };\n    }\n\n    function rotate(turtle, startAngle, delta," +
                " isCircle) {\n        var speed        = turtle._computed_speed,\n            de" +
                "grees    = delta / turtle._fullCircle * 360,\n            frames     = speed ? M" +
                "ath.round(Math.max(1, Math.abs(degrees) / speed)) : 1,\n            dAngle     =" +
                " delta / frames,\n            heading    = {},\n            countAsFrame = (!spe" +
                "ed && isCircle) ? false : true,\n            promise    = getFrameManager().will" +
                "RenderNext() ?\n                Promise.resolve() :\n                new Instant" +
                "Promise(),\n            i;\n\n        // TODO: request how many frames are remai" +
                "ning and only queue up\n        // a single rotation per screen update\n\n      " +
                "  for(i = 0; i < frames; i++) {\n            calculateHeading(turtle, startAngle" +
                " + dAngle * (i+1), heading);\n            promise = promise.then(\n             " +
                "   partialRotate(turtle, heading.angle, heading.radians, countAsFrame)\n        " +
                "    );\n        }\n\n        return promise.then(function() {\n            retur" +
                "n calculateHeading(turtle, startAngle + delta);\n        });\n    }\n\n    funct" +
                "ion getCoordinates(x, y) {\n        if (y === undefined) {\n            y = (x &" +
                "& (x.y || x._y || x[1])) || 0;\n            x = (x && (x.x || x._x || x[0])) || " +
                "0;\n        }\n        return {x:x, y:y};\n    }\n\n    // Modified solution of " +
                "Tim Down's version from stackoverflow\n    // http://stackoverflow.com/questions" +
                "/5623838/rgb-to-hex-and-hex-to-rgb\n    function hexToRGB(hex) {\n        var rg" +
                "bForm, hexForm, result;\n\n        if (rgbForm = /^rgba?\\((\\d+),(\\d+),(\\d+)(" +
                "?:,([.\\d]+))?\\)$/.exec(hex)) {\n            result = [\n                parseI" +
                "nt(rgbForm[1]),\n                parseInt(rgbForm[2]),\n                parseInt" +
                "(rgbForm[3])\n            ];\n            if (rgbForm[4]) {\n                res" +
                "ult.push(parseFloat(rgbForm[4]));\n            }\n        }\n        else if (/^" +
                "#?[a-f\\d]{3}|[a-f\\d]{6}$/i.exec(hex)) {\n            if (hex.length === 4) {\n" +
                "                // Expand shorthand form (e.g. \"03F\") to full form (e.g. \"003" +
                "3FF\")\n                hex = hex.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i," +
                " function(m, r, g, b) {\n                        return r + r + g + g + b + b;\n" +
                "                });\n            }\n\n            hexForm = /^#?([a-f\\d]{2})([a" +
                "-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n            result = [\n                p" +
                "arseInt(hexForm[1], 16),\n                parseInt(hexForm[2], 16),\n           " +
                "     parseInt(hexForm[3], 16)\n            ];\n        }\n        else {\n      " +
                "      result = hex;\n        }\n\n        return result;\n    }\n\n    function " +
                "createColor(color, g, b, a) {\n        var i;\n\n        if (g !== undefined) {" +
                "\n            color = [color, g, b, a];\n        }\n\n        if (color.construc" +
                "tor === Array && color.length) {\n            for(i = 0; i < 3; i++) {\n        " +
                "        color[i] = (typeof color[i] === \"number\") ?\n                    Math." +
                "max(0, Math.min(255, parseInt(color[i]))) :\n                    0;\n           " +
                " }\n            if (typeof color[i] === \"number\") {\n                color[3] " +
                "= Math.max(0, Math.min(1, color[i]));\n                color = \"rgba(\" + color" +
                ".join(\",\") + \")\";\n            }\n            else {\n                color " +
                "= \"rgb(\" + color.slice(0,3).join(\",\") + \")\";\n            }\n        }\n  " +
                "      else if (typeof color === \"string\" && !color.match(/\\s*url\\s*\\(/i)) {" +
                "\n            color = color.replace(/\\s+/g, \"\");\n        }\n        else {\n" +
                "            return \"black\";\n        }\n\n        return color;\n    }\n\n    " +
                "function calculateHeading(turtle, value, heading) {\n        var angle   = turtl" +
                "e._angle   || 0,\n            radians = turtle._radians || 0;\n\n        heading" +
                " || (heading = {});\n\n        if (typeof value === \"number\") {\n            i" +
                "f (turtle._isRadians) {\n                angle = radians = value % Turtle.RADIAN" +
                "S;\n            }\n            else if (turtle._fullCircle) {\n                a" +
                "ngle   = (value % turtle._fullCircle);\n                radians = angle / turtle" +
                "._fullCircle * Turtle.RADIANS;\n            }\n            else {\n             " +
                "   angle = radians = 0;\n            }\n\n            if (angle < 0) {\n        " +
                "        angle   += turtle._fullCircle;\n                radians += Turtle.RADIAN" +
                "S;\n            }\n        }\n\n        heading.angle   = angle;\n        headin" +
                "g.radians = radians;\n\n        return heading;\n    }\n\n    function pythonToJ" +
                "avascriptFunction(pyValue, scope) {\n        return function() {\n            va" +
                "r argsJs = Array.prototype.slice.call(arguments),\n                argsPy = args" +
                "Js.map(\n                    function(argJs) {return Sk.ffi.remapToPy(argJs);}\n" +
                "                );\n\n            if (typeof(scope) !== \"undefined\") {\n      " +
                "          argsPy.unshift(scope);\n            }\n            return Sk.misceval." +
                "applyAsync(\n                undefined, pyValue, undefined, undefined, undefined" +
                ", argsPy\n            ).catch(Sk.uncaughtException);\n        };\n    }\n\n    f" +
                "unction addModuleMethod(klass, module, method, scopeGenerator) {\n        var pu" +
                "blicMethodName = method.replace(/^\\$/, \"\"),\n            displayName      = p" +
                "ublicMethodName.replace(/_\\$[a-z]+\\$$/i, \"\"),\n            maxArgs          " +
                "= klass.prototype[method].length,\n            minArgs          = klass.prototyp" +
                "e[method].minArgs,\n            keywordArgs      = klass.prototype[method].keywo" +
                "rdArgs,\n            returnType       = klass.prototype[method].returnType,\n   " +
                "         isSk             = klass.prototype[method].isSk,\n            wrapperFn" +
                ";\n\n        if (minArgs === undefined) {\n            minArgs = maxArgs;\n     " +
                "   }\n\n        wrapperFn = function() {\n            var args     = Array.proto" +
                "type.slice.call(arguments, 0),\n                instance = scopeGenerator ? scop" +
                "eGenerator() : args.shift().instance,\n                i, result, susp, resoluti" +
                "on, lengthError;\n\n            if (args < minArgs || args.length > maxArgs) {\n" +
                "                lengthError = minArgs === maxArgs ?\n                    \"exact" +
                "ly \" + maxArgs :\n                    \"between \" + minArgs + \" and \" + maxA" +
                "rgs;\n\n                throw new Sk.builtin.TypeError(displayName + \"() takes " +
                "\" + lengthError + \" positional argument(s) (\" + args.length + \" given)\");\n" +
                "            }\n\n            for (i = args.length; --i >= 0;) {\n               " +
                " if (args[i] !== undefined) {\n                    if (args[i] instanceof Sk.bui" +
                "ltin.func) {\n                        args[i] = pythonToJavascriptFunction(args[" +
                "i]);\n                    }\n                    else if (args[i] instanceof Sk." +
                "builtin.method) {\n                        args[i] = pythonToJavascriptFunction(" +
                "args[i].im_func, args[i].im_self);\n                    }\n                    e" +
                "lse if (args[i] && args[i].$d instanceof Sk.builtin.dict && args[i].instance) {" +
                "\n                        args[i] = args[i].instance;\n                    }\n  " +
                "                  else {\n                        args[i] = Sk.ffi.remapToJs(arg" +
                "s[i]);\n                    }\n                }\n            }\n\n            t" +
                "ry {\n                result = instance[method].apply(instance, args);\n        " +
                "    } catch(e) {\n                if (window && window.console) {\n             " +
                "       window.console.log(\"wrapped method failed\");\n                    windo" +
                "w.console.log(e.stack);\n                }\n                throw e;\n          " +
                "  }\n\n            if (result instanceof InstantPromise) {\n                resu" +
                "lt = result.lastResult;\n            }\n\n            if (result instanceof Prom" +
                "ise) {\n                result = result.catch(function(e) {\n                   " +
                " if (window && window.console) {\n                        window.console.log(\"p" +
                "romise failed\");\n                        window.console.log(e.stack);\n       " +
                "             }\n                    throw e;\n                });\n\n           " +
                "     susp = new Sk.misceval.Suspension();\n\n                susp.resume = funct" +
                "ion() {\n                    return (resolution === undefined) ?\n              " +
                "          Sk.builtin.none.none$ :\n                        Sk.ffi.remapToPy(reso" +
                "lution);\n                };\n\n                susp.data = {\n                 " +
                "   type: \"Sk.promise\",\n                    promise: result.then(function(valu" +
                "e) {\n                        resolution = value;\n                        retur" +
                "n value;\n                    })\n                };\n\n                return s" +
                "usp;\n            }\n            else {\n                if (result === undefine" +
                "d) return Sk.builtin.none.none$;\n                if (isSk) return result;\n    " +
                "            if (typeof returnType === \"function\") {\n                    retur" +
                "n returnType(result);\n                }\n\n                return Sk.ffi.remapT" +
                "oPy(result);\n            }\n        };\n\n        if (keywordArgs) {\n         " +
                "   wrapperFn.co_varnames = keywordArgs.slice();\n            // make room for re" +
                "quired arguments\n            for(var i = 0; i < minArgs; i++) {\n              " +
                "  wrapperFn.co_varnames.unshift(\"\");\n            }\n            if (!scopeGen" +
                "erator) {\n                // make room for the \"self\" argument\n             " +
                "   wrapperFn.co_varnames.unshift(\"\");\n            }\n        }\n\n        mod" +
                "ule[publicMethodName] = new Sk.builtin.func(wrapperFn);\n    }\n\n    function T" +
                "urtleWrapper($gbl, $loc) {\n        $loc.__init__ = new Sk.builtin.func(function" +
                " (self) {\n            self.instance = new Turtle();\n            self.instance." +
                "skInstance = self;\n        });\n\n        for(var key in Turtle.prototype) {\n " +
                "           if (/^\\$[a-z_]+/.test(key)) {\n                addModuleMethod(Turtl" +
                "e, $loc, key);\n            }\n        }\n    }\n\n    function ScreenWrapper($g" +
                "bl, $loc) {\n        $loc.__init__ = new Sk.builtin.func(function (self) {\n    " +
                "        self.instance = getScreen();\n        });\n\n        for(var key in Scre" +
                "en.prototype) {\n            if (/^\\$[a-z_]+/.test(key)) {\n                add" +
                "ModuleMethod(Screen, $loc, key);\n            }\n        }\n    }\n\n    for(var" +
                " key in Turtle.prototype) {\n        if (/^\\$[a-z_]+/.test(key)) {\n           " +
                " addModuleMethod(Turtle, _module, key, ensureAnonymous);\n        }\n    }\n\n  " +
                "  // add Screen method aliases to the main turtle module\n    // to allow things" +
                " like:\n    //   import turtle\n    //   turtle.mainloop()\n    addModuleMethod(" +
                "Screen, _module, \"$mainloop\", getScreen);\n    addModuleMethod(Screen, _module" +
                ", \"$done\", getScreen);\n    addModuleMethod(Screen, _module, \"$bye\", getScre" +
                "en);\n    addModuleMethod(Screen, _module, \"$tracer\", getScreen);\n    addModu" +
                "leMethod(Screen, _module, \"$update\", getScreen);\n    addModuleMethod(Screen, " +
                "_module, \"$delay\", getScreen);\n    addModuleMethod(Screen, _module, \"$window" +
                "_width\", getScreen);\n    addModuleMethod(Screen, _module, \"$window_height\", " +
                "getScreen);\n\n    _module.Turtle = Sk.misceval.buildClass(_module, TurtleWrappe" +
                "r, \"Turtle\", []);\n    _module.Screen = Sk.misceval.buildClass(_module, Screen" +
                "Wrapper, \"Screen\", []);\n\n    // Calling focus(false) will block turtle key/m" +
                "ouse events\n    // until focus(true) is called again or until the turtle DOM ta" +
                "rget\n    // is clicked/tabbed into.\n    function focusTurtle(value) {\n       " +
                " if (value !== undefined) {\n            _focus = !!value;\n            if (_foc" +
                "us) {\n                getTarget().focus();\n            }\n            else {\n" +
                "                getTarget().blur();\n            }\n        }\n\n        return " +
                "_focus;\n    }\n\n    function resetTurtle() {\n        cancelAnimationFrame();" +
                "\n        getScreen().reset();\n        getFrameManager().reset();\n\n        wh" +
                "ile (_target.firstChild) {\n            _target.removeChild(_target.firstChild);" +
                "\n        }\n\n        if (_mouseHandler) {\n            _mouseHandler.reset();" +
                "\n        }\n\n        _durationSinceRedraw = 0;\n        _screenInstance      =" +
                " undefined;\n        _anonymousTurtle     = undefined;\n        _mouseHandler   " +
                "     = undefined;\n        TURTLE_COUNT         = 0;\n    }\n\n    function stop" +
                "Turtle() {\n        cancelAnimationFrame();\n\n        if (_mouseHandler) {\n   " +
                "         _mouseHandler.reset();\n        }\n\n        _durationSinceRedraw = 0;" +
                "\n        _screenInstance      = undefined;\n        _anonymousTurtle     = unde" +
                "fined;\n        _mouseHandler        = undefined;\n        TURTLE_COUNT         " +
                "= 0;\n    }\n\n    return {\n        skModule : _module,\n        reset    : res" +
                "etTurtle,\n        stop     : stopTurtle,\n        focus    : focusTurtle,\n    " +
                "    Turtle   : Turtle,\n        Screen   : Screen\n    };\n}\n\n// See if the Tu" +
                "rtleGraphics module has already been loaded\n// for the currently configured DOM" +
                " target element.\nvar currentTarget = getConfiguredTarget();\n\nif (!currentTarg" +
                "et.turtleInstance) {\n    currentTarget.turtleInstance = generateTurtleModule(cu" +
                "rrentTarget);\n}\nelse {\n    currentTarget.turtleInstance.reset();\n}\n\nSk.Tur" +
                "tleGraphics.module = currentTarget.turtleInstance.skModule;\nSk.TurtleGraphics.r" +
                "eset  = currentTarget.turtleInstance.reset;\nSk.TurtleGraphics.stop   = currentT" +
                "arget.turtleInstance.stop;\nSk.TurtleGraphics.focus  = currentTarget.turtleInsta" +
                "nce.focus;\nSk.TurtleGraphics.raw = {\n    Turtle : currentTarget.turtleInstance" +
                ".Turtle,\n    Screen : currentTarget.turtleInstance.Screen\n};\n\nreturn current" +
                "Target.turtleInstance.skModule;\n\n};\n",
        "src/lib/rexec.py": "raise NotImplementedError(\"rexec is not yet implemented in Skulpt\")\n",
        "src/lib/glob.py": "raise NotImplementedError(\"glob is not yet implemented in Skulpt\")\n",
        "src/lib/pipes.py": "raise NotImplementedError(\"pipes is not yet implemented in Skulpt\")\n",
        "src/lib/smtpd.py": "raise NotImplementedError(\"smtpd is not yet implemented in Skulpt\")\n",
        "src/lib/_MozillaCookieJar.py": "raise NotImplementedError(\"_MozillaCookieJar is not yet implemented in Skulpt\"" +
                ")\n",
        "src/lib/collections.js": "var $builtinmodule = function (name) {\n\n    var mod = {};\n\n    // defaultdic" +
                "t object\n\n    mod.defaultdict = function defaultdict(default_, args) {\n      " +
                "  if (!(this instanceof mod.defaultdict)) {\n            return new mod.defaultd" +
                "ict(default_, args);\n        }\n\n        Sk.abstr.superConstructor(mod.default" +
                "dict, this, args);\n\n        if (default_ === undefined) {\n            this.de" +
                "fault_factory = Sk.builtin.none.none$;\n        }\n        else {\n            i" +
                "f (!Sk.builtin.checkCallable(default_) && !(default_ instanceof Sk.builtin.none)" +
                ") {\n                throw new Sk.builtin.TypeError(\"first argument must be cal" +
                "lable\");\n            }\n            this.default_factory = default_;\n        " +
                "}\n\n        if (this['$d']) {\n            this['$d']['default_factory'] = this" +
                ".default_factory;\n        }\n        else {\n            this['$d'] = {'default" +
                "_factory': this.default_factory};\n        }\n\n        return this;\n    };\n\n" +
                "    Sk.abstr.setUpInheritance(\"defaultdict\", mod.defaultdict, Sk.builtin.dict)" +
                ";\n\n    mod.defaultdict.prototype['$r'] = function () {\n        var def_str = " +
                "Sk.misceval.objectRepr(this.default_factory).v;\n        var dict_str = Sk.built" +
                "in.dict.prototype['$r'].call(this).v;\n        return new Sk.builtin.str(\"defau" +
                "ltdict(\" + def_str + \", \" + dict_str + \")\");\n    };\n\n    mod.defaultdict" +
                ".prototype['__missing__'] = function (key) {\n        Sk.builtin.pyCheckArgs('__" +
                "missing__', arguments, 0, 1);\n        if (key) {\n            throw new Sk.buil" +
                "tin.KeyError(Sk.misceval.objectRepr(key));\n        }\n        else {\n         " +
                "   return Sk.misceval.callsim(this.default_factory);\n        }\n    };\n\n    m" +
                "od.defaultdict.prototype.mp$subscript = function (key) {\n        try {\n       " +
                "     return Sk.builtin.dict.prototype.mp$subscript.call(this, key);\n        }\n" +
                "        catch (e) {\n            if (this.default_factory instanceof Sk.builtin." +
                "none) {\n                return this.__missing__(key);\n            }\n         " +
                "   else {\n                ret = this.__missing__();\n                this.mp$as" +
                "s_subscript(key, ret);\n                return ret;\n            }\n        }\n " +
                "   };\n\n    // Counter object\n\n    mod.Counter = function Counter(iter_or_map" +
                ") {\n        if (!(this instanceof mod.Counter)) {\n            return new mod.C" +
                "ounter(iter_or_map);\n        }\n\n\n        if (iter_or_map instanceof Sk.built" +
                "in.dict || iter_or_map === undefined) {\n            Sk.abstr.superConstructor(m" +
                "od.Counter, this, iter_or_map);\n\n        }\n        else {\n            if (!(" +
                "Sk.builtin.checkIterable(iter_or_map))) {\n                throw new Sk.builtin." +
                "TypeError(\"'\" + Sk.abstr.typeName(iter_or_map) + \"' object is not iterable\")" +
                ";\n            }\n\n            Sk.abstr.superConstructor(mod.Counter, this);\n " +
                "           var one = new Sk.builtin.int_(1);\n\n            for (var iter = iter" +
                "_or_map.tp$iter(), k = iter.tp$iternext();\n                 k !== undefined;\n " +
                "                k = iter.tp$iternext()) {\n                var count = this.mp$s" +
                "ubscript(k);\n                count = count.nb$add(one);\n                this.m" +
                "p$ass_subscript(k, count);\n            }\n        }\n\n        return this;\n  " +
                "  };\n\n    Sk.abstr.setUpInheritance(\"Counter\", mod.Counter, Sk.builtin.dict)" +
                ";\n\n    mod.Counter.prototype['$r'] = function () {\n        var dict_str = thi" +
                "s.size > 0 ? Sk.builtin.dict.prototype['$r'].call(this).v : '';\n        return " +
                "new Sk.builtin.str('Counter(' + dict_str + ')');\n    };\n\n    mod.Counter.prot" +
                "otype.mp$subscript = function (key) {\n        try {\n            return Sk.buil" +
                "tin.dict.prototype.mp$subscript.call(this, key);\n        }\n        catch (e) {" +
                "\n            return new Sk.builtin.int_(0);\n        }\n    };\n\n    mod.Count" +
                "er.prototype['elements'] = new Sk.builtin.func(function (self) {\n        Sk.bui" +
                "ltin.pyCheckArgs('elements', arguments, 1, 1);\n        var all_elements = [];\n" +
                "        for (var iter = self.tp$iter(), k = iter.tp$iternext();\n             k " +
                "!== undefined;\n             k = iter.tp$iternext()) {\n            for (var i =" +
                " 0; i < self.mp$subscript(k).v; i++) {\n                all_elements.push(k);\n " +
                "           }\n        }\n\n        var ret =\n        {\n            tp$iter: fu" +
                "nction () {\n                return ret;\n            },\n            $obj: this" +
                ",\n            $index: 0,\n            $elem: all_elements,\n            tp$iter" +
                "next: function () {\n                if (ret.$index >= ret.$elem.length) {\n    " +
                "                return undefined;\n                }\n                return ret" +
                ".$elem[ret.$index++];\n            }\n        };\n\n        return ret;\n\n    }" +
                ");\n\n    mod.Counter.prototype['most_common'] = new Sk.builtin.func(function (s" +
                "elf, n) {\n        Sk.builtin.pyCheckArgs('most_common', arguments, 1, 2);\n    " +
                "    var length = self.mp$length();\n\n        if (n === undefined) {\n          " +
                "  n = length;\n        }\n        else {\n            if (!Sk.builtin.checkInt(n" +
                ")) {\n                if (n instanceof Sk.builtin.float_) {\n                   " +
                " throw new Sk.builtin.TypeError(\"integer argument expected, got float\");\n    " +
                "            }\n                else {\n                    throw new Sk.builtin." +
                "TypeError(\"an integer is required\");\n                }\n            }\n\n    " +
                "        n = Sk.builtin.asnum$(n);\n            n = n <= length ? n : length;\n  " +
                "          n = n >= 0 ? n : 0;\n        }\n\n        var most_common_elem = [];\n" +
                "        for (var iter = self.tp$iter(), k = iter.tp$iternext();\n             k " +
                "!== undefined;\n             k = iter.tp$iternext()) {\n            most_common_" +
                "elem.push([k, self.mp$subscript(k)]);\n        }\n\n        var sort_func = func" +
                "tion (a, b) {\n            if (a[1].v < b[1].v) {\n                return 1;\n  " +
                "          } else if (a[1].v > b[1].v) {\n                return -1;\n           " +
                " } else {\n                return 0;\n            }\n        };\n        most_co" +
                "mmon_elem = most_common_elem.sort(sort_func);\n\n        var ret = [];\n        " +
                "for (var i = 0; i < n; i++) {\n            ret.push(new Sk.builtin.tuple(most_co" +
                "mmon_elem.shift()));\n        }\n\n        return new Sk.builtin.list(ret);\n   " +
                " });\n\n    mod.Counter.prototype['update'] = new Sk.builtin.func(function (self" +
                ", other) {\n        Sk.builtin.pyCheckArgs('update', arguments, 1, 2);\n\n      " +
                "  if (other instanceof Sk.builtin.dict) {\n            for (var iter = other.tp$" +
                "iter(), k = iter.tp$iternext();\n                 k !== undefined;\n            " +
                "     k = iter.tp$iternext()) {\n                var count = self.mp$subscript(k)" +
                ";\n                self.mp$ass_subscript(k, count.nb$add(other.mp$subscript(k)))" +
                ";\n            }\n        }\n        else if (other !== undefined) {\n          " +
                "  if (!Sk.builtin.checkIterable(other)) {\n                throw new Sk.builtin." +
                "TypeError(\"'\" + Sk.abstr.typeName(other) + \"' object is not iterable\");\n   " +
                "         }\n\n            var one = new Sk.builtin.int_(1);\n            for (va" +
                "r iter = other.tp$iter(), k = iter.tp$iternext();\n                 k !== undefi" +
                "ned;\n                 k = iter.tp$iternext()) {\n                var count = se" +
                "lf.mp$subscript(k);\n                self.mp$ass_subscript(k, count.nb$add(one))" +
                ";\n            }\n        }\n    });\n\n    mod.Counter.prototype['subtract'] = " +
                "new Sk.builtin.func(function (self, other) {\n        Sk.builtin.pyCheckArgs('su" +
                "btract', arguments, 1, 2);\n\n        if (other instanceof Sk.builtin.dict) {\n " +
                "           for (var iter = other.tp$iter(), k = iter.tp$iternext();\n           " +
                "      k !== undefined;\n                 k = iter.tp$iternext()) {\n            " +
                "    var count = self.mp$subscript(k);\n                self.mp$ass_subscript(k, " +
                "count.nb$subtract(other.mp$subscript(k)));\n            }\n        }\n        el" +
                "se if (other !== undefined) {\n            if (!Sk.builtin.checkIterable(other))" +
                " {\n                throw new Sk.builtin.TypeError(\"'\" + Sk.abstr.typeName(oth" +
                "er) + \"' object is not iterable\");\n            }\n\n            var one = new" +
                " Sk.builtin.int_(1);\n            for (var iter = other.tp$iter(), k = iter.tp$i" +
                "ternext();\n                 k !== undefined;\n                 k = iter.tp$iter" +
                "next()) {\n                var count = self.mp$subscript(k);\n                se" +
                "lf.mp$ass_subscript(k, count.nb$subtract(one));\n            }\n        }\n    }" +
                ");\n\n\n    // OrderedDict\n    mod.OrderedDict = function OrderedDict(items)\n " +
                "   {\n        if (!(this instanceof mod.OrderedDict))\n        {\n            re" +
                "turn new mod.OrderedDict(items);\n        }\n\n        this.orderedkeys = [];\n" +
                "\n        Sk.abstr.superConstructor(mod.OrderedDict, this, items);\n\n        re" +
                "turn this;\n    }\n\n    Sk.abstr.setUpInheritance(\"OrderedDict\", mod.OrderedD" +
                "ict, Sk.builtin.dict);\n\n    mod.OrderedDict.prototype['$r'] = function()\n    " +
                "{\n        var v;\n        var iter, k;\n        var ret = [];\n        var pair" +
                "str;\n        for (iter = this.tp$iter(), k = iter.tp$iternext();\n             " +
                "k !== undefined;\n             k = iter.tp$iternext()) {\n            v = this.m" +
                "p$subscript(k);\n            if (v === undefined) {\n                //print(k, " +
                "\"had undefined v\");\n                v = null;\n            }\n            ret" +
                ".push(\"(\" + Sk.misceval.objectRepr(k).v + \", \" + Sk.misceval.objectRepr(v).v" +
                " + \")\");\n        }\n        pairstr = ret.join(\", \");\n        if (ret.leng" +
                "th > 0)\n        {\n            pairstr = \"[\" + pairstr + \"]\";\n        }\n " +
                "       return new Sk.builtin.str(\"OrderedDict(\" + pairstr + \")\");\n    }\n\n" +
                "    mod.OrderedDict.prototype.mp$ass_subscript = function(key, w)\n    {\n      " +
                "  var idx = this.orderedkeys.indexOf(key);\n        if (idx == -1)\n        {\n " +
                "           this.orderedkeys.push(key);\n        }\n\n        return Sk.builtin.d" +
                "ict.prototype.mp$ass_subscript.call(this, key, w);\n    }\n\n    mod.OrderedDict" +
                ".prototype.mp$del_subscript = function(key)\n    {\n        var idx = this.order" +
                "edkeys.indexOf(key);\n        if (idx != -1)\n        {\n            this.ordere" +
                "dkeys.splice(idx, 1);\n        }\n\n        return Sk.builtin.dict.prototype.mp$" +
                "del_subscript.call(this, key);\n    }\n\n    mod.OrderedDict.prototype.__iter__ " +
                "= new Sk.builtin.func(function (self) {\n        Sk.builtin.pyCheckArgs(\"__iter" +
                "__\", arguments, 0, 0, false, true);\n\n        return mod.OrderedDict.prototype" +
                ".tp$iter.call(self);\n    });\n\n    mod.OrderedDict.prototype.tp$iter = functio" +
                "n()\n    {\n        var ret;\n        ret =\n        {\n            tp$iter    :" +
                " function () {\n                return ret;\n            },\n            $obj   " +
                "    : this,\n            $index     : 0,\n            $keys      : this.orderedk" +
                "eys.slice(0),\n            tp$iternext: function () {\n                // todo; " +
                "StopIteration\n                if (ret.$index >= ret.$keys.length) {\n          " +
                "          return undefined;\n                }\n                return ret.$keys" +
                "[ret.$index++];\n            }\n        };\n        return ret;\n    }\n\n    mo" +
                "d.OrderedDict.prototype.ob$eq = function (other) {\n        var l;\n        var " +
                "otherl;\n        var iter;\n        var k;\n        var v;\n\n        if (!(othe" +
                "r instanceof mod.OrderedDict))\n        {\n            return Sk.builtin.dict.pr" +
                "ototype.ob$eq.call(this, other);\n        }\n\n        l = this.mp$length();\n  " +
                "      otherl = other.mp$length();\n\n        if (l !== otherl) {\n            re" +
                "turn Sk.builtin.bool.false$;\n        }\n\n        for (iter = this.tp$iter(), o" +
                "theriter = other.tp$iter(),\n             k = iter.tp$iternext(), otherk = other" +
                "iter.tp$iternext();\n             k !== undefined;\n             k = iter.tp$ite" +
                "rnext(), otherk = otheriter.tp$iternext()) \n        {\n            if (!Sk.misc" +
                "eval.isTrue(Sk.misceval.richCompareBool(k, otherk, \"Eq\")))\n            {\n   " +
                "             return Sk.builtin.bool.false$;\n            }\n            v = this" +
                ".mp$subscript(k);\n            otherv = other.mp$subscript(otherk);\n\n         " +
                "   if (!Sk.misceval.isTrue(Sk.misceval.richCompareBool(v, otherv, \"Eq\"))) {\n " +
                "               return Sk.builtin.bool.false$;\n            }\n        }\n\n     " +
                "   return Sk.builtin.bool.true$;\n    };\n\n    mod.OrderedDict.prototype.ob$ne " +
                "= function (other) {\n        var l;\n        var otherl;\n        var iter;\n  " +
                "      var k;\n        var v;\n\n        if (!(other instanceof mod.OrderedDict))" +
                "\n        {\n            return Sk.builtin.dict.prototype.ob$ne.call(this, other" +
                ");\n        }\n\n        l = this.size;\n        otherl = other.size;\n\n       " +
                " if (l !== otherl) {\n            return Sk.builtin.bool.true$;\n        }\n\n  " +
                "      for (iter = this.tp$iter(), otheriter = other.tp$iter(),\n             k =" +
                " iter.tp$iternext(), otherk = otheriter.tp$iternext();\n             k !== undef" +
                "ined;\n             k = iter.tp$iternext(), otherk = otheriter.tp$iternext()) \n" +
                "        {\n            if (!Sk.misceval.isTrue(Sk.misceval.richCompareBool(k, ot" +
                "herk, \"Eq\")))\n            {\n                return Sk.builtin.bool.true$;\n " +
                "           }\n            v = this.mp$subscript(k);\n            otherv = other." +
                "mp$subscript(otherk);\n\n            if (!Sk.misceval.isTrue(Sk.misceval.richCom" +
                "pareBool(v, otherv, \"Eq\"))) {\n                return Sk.builtin.bool.true$;\n" +
                "            }\n        }\n\n        return Sk.builtin.bool.false$;\n    };\n\n  " +
                "  mod.OrderedDict.prototype[\"pop\"] = new Sk.builtin.func(function (self, key, " +
                "d) {\n        var s;\n        var idx;\n\n        Sk.builtin.pyCheckArgs('pop', " +
                "arguments, 2, 3);\n\n        idx = self.orderedkeys.indexOf(key);\n        if (i" +
                "dx != -1)\n        {\n            self.orderedkeys.splice(idx, 1);\n        }\n" +
                "\n        return Sk.misceval.callsim(Sk.builtin.dict.prototype[\"pop\"], self, k" +
                "ey, d);\n    });\n\n    mod.OrderedDict.prototype[\"popitem\"] = new Sk.builtin." +
                "func(function (self, last) {\n        var key, val;\n        var s;\n\n        S" +
                "k.builtin.pyCheckArgs('popitem', arguments, 1, 2);\n\n        // Empty dictionar" +
                "y\n        if (self.orderedkeys.length == 0)\n        {\n            s = new Sk." +
                "builtin.str('dictionary is empty');\n            throw new Sk.builtin.KeyError(s" +
                ".v);\n        }\n\n        key = self.orderedkeys[0];\n        if (last === unde" +
                "fined || Sk.misceval.isTrue(last))\n        {\n            key = self.orderedkey" +
                "s[self.orderedkeys.length - 1];\n        }\n\n        val = Sk.misceval.callsim(" +
                "self[\"pop\"], self, key);\n        return Sk.builtin.tuple([key, val]);\n    })" +
                ";\n\n    // deque\n    mod.deque = function deque(iterable, maxlen) {\n        t" +
                "hrow new Sk.builtin.NotImplementedError(\"deque is not implemented\")\n    };\n" +
                "\n    // namedtuple\n    mod.namedtuples = {};\n    var keywds = Sk.importModule" +
                "(\"keyword\", false, false);\n    // should cover most things.  Does not:\n    /" +
                "/ * keyword args\n    // _make\n    // _replace\n    // _asdict\n    // _fields" +
                "\n\n\n    var hasDupes = function(a) {\n        var counts = [];\n        for(va" +
                "r i = 0; i <= a.length; i++) {\n            if(counts[a[i]] === undefined) {\n  " +
                "              counts[a[i]] = 1;\n            } else {\n                return tr" +
                "ue;\n            }\n        }\n        return false;\n    }\n\n    var Skinherit" +
                "s = function(childCtor, parentCtor) {\n      /** @constructor */\n      function" +
                " tempCtor() {};\n      tempCtor.prototype = parentCtor.prototype;\n      childCt" +
                "or.superClass_ = parentCtor.prototype;\n      childCtor.prototype = new tempCtor" +
                "();\n      /** @override */\n      childCtor.prototype.constructor = childCtor;" +
                "\n    };\n\n    mod.namedtuple = function (name, fields) {\n        if (Sk.ffi.r" +
                "emapToJs(Sk.misceval.callsim(keywds.$d['iskeyword'],name ))) {\n            thro" +
                "w new Sk.builtin.ValueError(\"Type names and field names cannot be a keyword: \"" +
                " + name.v);\n        }\n        var nm = Sk.ffi.remapToJs(name);\n        starts" +
                "w = new RegExp(/^[0-9].*/);\n        startsw2 = new RegExp(/^[0-9_].*/);\n      " +
                "  alnum = new RegExp(/^\\w*$/);\n        if (startsw.test(nm) || (! alnum.test(n" +
                "m))) {\n            throw new Sk.builtin.ValueError(\" Bad type name \" + nm);\n" +
                "        }\n        // fields could be a string or a tuple or list of strings\n  " +
                "      var flds = Sk.ffi.remapToJs(fields);\n\n        if (typeof(flds) === 'stri" +
                "ng') {\n            flds = flds.split(/\\s+/);\n        }\n        // import the" +
                " keyword module here and use iskeyword\n        for (i = 0; i < flds.length; i++" +
                ") {\n            if (Sk.ffi.remapToJs(Sk.misceval.callsim(keywds.$d['iskeyword']" +
                ",Sk.ffi.remapToPy(flds[i]))) ||\n                  startsw2.test(flds[i]) || (! " +
                "alnum.test(flds[i]))\n            ) {\n                throw new Sk.builtin.Valu" +
                "eError(\"Type names and field names cannot be a keyword: \" + flds[i]);\n       " +
                "     }\n        }\n        if (hasDupes(flds)) {\n            throw new Sk.built" +
                "in.ValueError(\"Field names must be unique.\");\n        }\n\n        var cons =" +
                " function nametuple_constructor() {\n            var o;\n            if (argumen" +
                "ts.length !== flds.length ) {\n                throw new Sk.builtin.TypeError(\"" +
                "Number of arguments must match\");\n            }\n            if (!(this instan" +
                "ceof mod.namedtuples[nm])) {\n                o = Object.create(mod.namedtuples[" +
                "nm].prototype);\n                o.constructor.apply(o, arguments);\n           " +
                "     return o;\n            }\n\n            this.v = arguments;\n            th" +
                "is.__class__ = mod.namedtuples[nm];\n        };\n        mod.namedtuples[nm] = c" +
                "ons;\n\n        Skinherits(cons, Sk.builtin.tuple);\n        cons.prototype.tp$n" +
                "ame = nm;\n        cons.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(nm, " +
                "mod.namedtuples[nm]);\n        cons.prototype[\"$r\"] = function () {\n         " +
                "   var ret;\n            var i;\n            var bits;\n            if (this.v.l" +
                "ength === 0) {\n                return new Sk.builtin.str(nm + \"()\");\n       " +
                "     }\n            bits = [];\n            for (i = 0; i < this.v.length; ++i) " +
                "{\n                bits[i] = flds[i] + \"=\" + Sk.misceval.objectRepr(this.v[i])" +
                ".v;\n            }\n            ret = bits.join(\", \");\n            if (this.v" +
                ".length === 1) {\n                ret += \",\";\n            }\n            retu" +
                "rn new Sk.builtin.str(nm + \"(\" + ret + \")\");\n        };\n\n        cons.pro" +
                "totype.tp$getattr = function (name) {\n            var i = flds.indexOf(name);\n" +
                "            if (i >= 0) {\n                return this.v[i];\n            }\n   " +
                "         return undefined;\n        };\n\n        cons.prototype.tp$setattr = fu" +
                "nction (name, value) {\n            throw new Sk.builtin.AttributeError(\"can't " +
                "set attribute\");\n        };\n\n        return cons;\n    };\n\n    return mod;" +
                "\n};\n",
        "src/lib/lib-tk/__init__.py": "raise NotImplementedError(\"lib-tk is not yet implemented in Skulpt\")\n",
        "src/lib/json/__init__.py": "raise NotImplementedError(\"json is not yet implemented in Skulpt\")\n",
        "src/lib/difflib.py": "raise NotImplementedError(\"difflib is not yet implemented in Skulpt\")\n",
        "src/lib/dis.py": "raise NotImplementedError(\"dis is not yet implemented in Skulpt\")\n",
        "src/lib/sched.py": "raise NotImplementedError(\"sched is not yet implemented in Skulpt\")\n",
        "src/lib/rfc822.py": "raise NotImplementedError(\"rfc822 is not yet implemented in Skulpt\")\n",
        "src/lib/distutils/command/__init__.py": "raise NotImplementedError(\"command is not yet implemented in Skulpt\")\n",
        "src/lib/stat.py": "raise NotImplementedError(\"stat is not yet implemented in Skulpt\")\n",
        "src/lib/StringIO.py": "r\"\"\"File-like objects that read from or write to a string buffer.\n\nThis imp" +
                "lements (nearly) all stdio methods.\n\nf = StringIO()      # ready for writing\n" +
                "f = StringIO(buf)   # ready for reading\nf.close()           # explicitly releas" +
                "e resources held\nflag = f.isatty()   # always false\npos = f.tell()      # get " +
                "current position\nf.seek(pos)         # set current position\nf.seek(pos, mode) " +
                "  # mode 0: absolute; 1: relative; 2: relative to EOF\nbuf = f.read()      # rea" +
                "d until EOF\nbuf = f.read(n)     # read up to n bytes\nbuf = f.readline()  # rea" +
                "d until end of line ('\\n') or EOF\nlist = f.readlines()# list of f.readline() r" +
                "esults until EOF\nf.truncate([size])  # truncate file at to at most size (defaul" +
                "t: current pos)\nf.write(buf)        # write at current position\nf.writelines(l" +
                "ist)  # for line in list: f.write(line)\nf.getvalue()        # return whole file" +
                "'s contents as a string\n\nNotes:\n- Using a real file is often faster (but less" +
                " convenient).\n- There's also a much faster implementation in C, called cStringI" +
                "O, but\n  it's not subclassable.\n- fileno() is left unimplemented so that code " +
                "which uses it triggers\n  an exception early.\n- Seeking far beyond EOF and then" +
                " writing will insert real null\n  bytes that occupy space in the buffer.\n- Ther" +
                "e's a simple test set (see end of this file).\n\"\"\"\n\n__all__ = [\"StringIO\"" +
                "]\n\ndef _complain_ifclosed(closed):\n    if closed:\n        raise ValueError, " +
                "\"I/O operation on closed file\"\n\nclass StringIO:\n    \"\"\"class StringIO([b" +
                "uffer])\n\n    When a StringIO object is created, it can be initialized to an ex" +
                "isting\n    string by passing the string to the constructor. If no string is giv" +
                "en,\n    the StringIO will start empty.\n\n    The StringIO object can accept ei" +
                "ther Unicode or 8-bit strings, but\n    mixing the two may take some care. If bo" +
                "th are used, 8-bit strings that\n    cannot be interpreted as 7-bit ASCII (that " +
                "use the 8th bit) will cause\n    a UnicodeError to be raised when getvalue() is " +
                "called.\n    \"\"\"\n    def __init__(self, buf = ''):\n        # Force self.buf" +
                " to be a string or unicode\n        if not isinstance(buf, str):\n            bu" +
                "f = str(buf)\n        self.buf = buf\n        self.len = len(buf)\n        self." +
                "buflist = []\n        self.pos = 0\n        self.closed = False\n        self.so" +
                "ftspace = 0\n\n    def __iter__(self):\n        return self\n\n    def next(self" +
                "):\n        \"\"\"A file object is its own iterator, for example iter(f) returns" +
                " f\n        (unless f is closed). When a file is used as an iterator, typically" +
                "\n        in a for loop (for example, for line in f: print line), the next()\n  " +
                "      method is called repeatedly. This method returns the next input line,\n   " +
                "     or raises StopIteration when EOF is hit.\n        \"\"\"\n        _complain" +
                "_ifclosed(self.closed)\n        r = self.readline()\n        if not r:\n        " +
                "    raise StopIteration\n        return r\n\n    def close(self):\n        \"\"" +
                "\"Free the memory buffer.\n        \"\"\"\n        if not self.closed:\n        " +
                "    self.closed = True\n            self.buf = None\n            self.pos = None" +
                "\n\n    def isatty(self):\n        \"\"\"Returns False because StringIO objects " +
                "are not connected to a\n        tty-like device.\n        \"\"\"\n        _compl" +
                "ain_ifclosed(self.closed)\n        return False\n\n    def seek(self, pos, mode " +
                "= 0):\n        \"\"\"Set the file's current position.\n\n        The mode argume" +
                "nt is optional and defaults to 0 (absolute file\n        positioning); other val" +
                "ues are 1 (seek relative to the current\n        position) and 2 (seek relative " +
                "to the file's end).\n\n        There is no return value.\n        \"\"\"\n      " +
                "  _complain_ifclosed(self.closed)\n        if self.buflist:\n            self.bu" +
                "f += ''.join(self.buflist)\n            self.buflist = []\n        if mode == 1:" +
                "\n            pos += self.pos\n        elif mode == 2:\n            pos += self." +
                "len\n        self.pos = max(0, pos)\n\n    def tell(self):\n        \"\"\"Return" +
                " the file's current position.\"\"\"\n        _complain_ifclosed(self.closed)\n  " +
                "      return self.pos\n\n    def read(self, n = -1):\n        \"\"\"Read at most" +
                " size bytes from the file\n        (less if the read hits EOF before obtaining s" +
                "ize bytes).\n\n        If the size argument is negative or omitted, read all dat" +
                "a until EOF\n        is reached. The bytes are returned as a string object. An e" +
                "mpty\n        string is returned when EOF is encountered immediately.\n        " +
                "\"\"\"\n        _complain_ifclosed(self.closed)\n        if self.buflist:\n     " +
                "       self.buf += ''.join(self.buflist)\n            self.buflist = []\n       " +
                " if n is None or n < 0:\n            newpos = self.len\n        else:\n         " +
                "   newpos = min(self.pos+n, self.len)\n        r = self.buf[self.pos:newpos]\n  " +
                "      self.pos = newpos\n        return r\n\n    def readline(self, length=None)" +
                ":\n        r\"\"\"Read one entire line from the file.\n\n        A trailing newl" +
                "ine character is kept in the string (but may be absent\n        when a file ends" +
                " with an incomplete line). If the size argument is\n        present and non-nega" +
                "tive, it is a maximum byte count (including the\n        trailing newline) and a" +
                "n incomplete line may be returned.\n\n        An empty string is returned only w" +
                "hen EOF is encountered immediately.\n\n        Note: Unlike stdio's fgets(), the" +
                " returned string contains null\n        characters ('\\0') if they occurred in t" +
                "he input.\n        \"\"\"\n        _complain_ifclosed(self.closed)\n        if s" +
                "elf.buflist:\n            self.buf += ''.join(self.buflist)\n            self.bu" +
                "flist = []\n        i = self.buf.find('\\n', self.pos)\n        if i < 0:\n     " +
                "       newpos = self.len\n        else:\n            newpos = i+1\n        if le" +
                "ngth is not None and length >= 0:\n            if self.pos + length < newpos:\n " +
                "               newpos = self.pos + length\n        r = self.buf[self.pos:newpos]" +
                "\n        self.pos = newpos\n        return r\n\n    def readlines(self, sizehin" +
                "t = 0):\n        \"\"\"Read until EOF using readline() and return a list contain" +
                "ing the\n        lines thus read.\n\n        If the optional sizehint argument i" +
                "s present, instead of reading up\n        to EOF, whole lines totalling approxim" +
                "ately sizehint bytes (or more\n        to accommodate a final whole line).\n    " +
                "    \"\"\"\n        total = 0\n        lines = []\n        line = self.readline(" +
                ")\n        while line:\n            lines.append(line)\n            total += len" +
                "(line)\n            if 0 < sizehint <= total:\n                break\n          " +
                "  line = self.readline()\n        return lines\n\n    def truncate(self, size=No" +
                "ne):\n        \"\"\"Truncate the file's size.\n\n        If the optional size ar" +
                "gument is present, the file is truncated to\n        (at most) that size. The si" +
                "ze defaults to the current position.\n        The current file position is not c" +
                "hanged unless the position\n        is beyond the new file size.\n\n        If t" +
                "he specified size exceeds the file's current size, the\n        file remains unc" +
                "hanged.\n        \"\"\"\n        _complain_ifclosed(self.closed)\n        if siz" +
                "e is None:\n            size = self.pos\n        elif size < 0:\n            rai" +
                "se IOError(22, \"Negative size not allowed\")\n        elif size < self.pos:\n  " +
                "          self.pos = size\n        self.buf = self.getvalue()[:size]\n        se" +
                "lf.len = size\n\n    def write(self, s):\n        \"\"\"Write a string to the fi" +
                "le.\n\n        There is no return value.\n        \"\"\"\n        _complain_ifcl" +
                "osed(self.closed)\n        if not s: return\n        # Force s to be a string or" +
                " unicode\n        if not isinstance(s, str):\n            s = str(s)\n        sp" +
                "os = self.pos\n        slen = self.len\n        if spos == slen:\n            se" +
                "lf.buflist.append(s)\n            self.len = self.pos = spos + len(s)\n         " +
                "   return\n        if spos > slen:\n            self.buflist.append('\\0'*(spos " +
                "- slen))\n            slen = spos\n        newpos = spos + len(s)\n        if sp" +
                "os < slen:\n            if self.buflist:\n                self.buf += ''.join(se" +
                "lf.buflist)\n            self.buflist = [self.buf[:spos], s, self.buf[newpos:]]" +
                "\n            self.buf = ''\n            if newpos > slen:\n                slen" +
                " = newpos\n        else:\n            self.buflist.append(s)\n            slen =" +
                " newpos\n        self.len = slen\n        self.pos = newpos\n\n    def writeline" +
                "s(self, iterable):\n        \"\"\"Write a sequence of strings to the file. The s" +
                "equence can be any\n        iterable object producing strings, typically a list " +
                "of strings. There\n        is no return value.\n\n        (The name is intended " +
                "to match readlines(); writelines() does not add\n        line separators.)\n    " +
                "    \"\"\"\n        write = self.write\n        for line in iterable:\n         " +
                "   write(line)\n\n    def flush(self):\n        \"\"\"Flush the internal buffer" +
                "\n        \"\"\"\n        _complain_ifclosed(self.closed)\n\n    def getvalue(se" +
                "lf):\n        \"\"\"\n        Retrieve the entire contents of the \"file\" at an" +
                "y time before\n        the StringIO object's close() method is called.\n\n      " +
                "  The StringIO object can accept either Unicode or 8-bit strings,\n        but m" +
                "ixing the two may take some care. If both are used, 8-bit\n        strings that " +
                "cannot be interpreted as 7-bit ASCII (that use the\n        8th bit) will cause " +
                "a UnicodeError to be raised when getvalue()\n        is called.\n        \"\"\"" +
                "\n        _complain_ifclosed(self.closed)\n        if self.buflist:\n           " +
                " self.buf += ''.join(self.buflist)\n            self.buflist = []\n        retur" +
                "n self.buf\n",
        "src/lib/sqlite3/__init__.py": "raise NotImplementedError(\"sqlite3 is not yet implemented in Skulpt\")\n",
        "src/lib/xdrlib.py": "raise NotImplementedError(\"xdrlib is not yet implemented in Skulpt\")\n",
        "src/lib/__phello__.foo.py": "raise NotImplementedError(\"__phello__.foo is not yet implemented in Skulpt\")\n",
        "src/lib/imaplib.py": "raise NotImplementedError(\"imaplib is not yet implemented in Skulpt\")\n",
        "src/lib/smtplib.py": "raise NotImplementedError(\"smtplib is not yet implemented in Skulpt\")\n",
        "src/lib/repr.py": "raise NotImplementedError(\"repr is not yet implemented in Skulpt\")\n",
        "src/lib/distutils/tests/__init__.py": "raise NotImplementedError(\"tests is not yet implemented in Skulpt\")\n",
        "src/lib/telnetlib.py": "raise NotImplementedError(\"telnetlib is not yet implemented in Skulpt\")\n",
        "src/lib/curses/__init__.py": "raise NotImplementedError(\"curses is not yet implemented in Skulpt\")\n",
        "src/lib/bisect.py": "raise NotImplementedError(\"bisect is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/trees/__init__.py": "\n# from .binaryTree import BinaryTree\n# from .balance import AVLTree\n# from ." +
                "bst import BinarySearchTree\n# from .binheap import BinHeap\n\n\n",
        "src/lib/pythonds/trees/binaryTree.py": "# Bradley N. Miller, David L. Ranum\n# Introduction to Data Structures and Algor" +
                "ithms in Python\n# Copyright 2005\n# \n\nclass BinaryTree:\n    \"\"\"\n    A re" +
                "cursive implementation of Binary Tree\n    Using links and Nodes approach.\n    " +
                "\"\"\"    \n    def __init__(self,rootObj):\n        self.key = rootObj\n       " +
                " self.leftChild = None\n        self.rightChild = None\n\n    def insertLeft(sel" +
                "f,newNode):\n        if self.leftChild == None:\n            self.leftChild = Bi" +
                "naryTree(newNode)\n        else:\n            t = BinaryTree(newNode)\n         " +
                "   t.left = self.leftChild\n            self.leftChild = t\n    \n    def insert" +
                "Right(self,newNode):\n        if self.rightChild == None:\n            self.righ" +
                "tChild = BinaryTree(newNode)\n        else:\n            t = BinaryTree(newNode)" +
                "\n            t.right = self.rightChild\n            self.rightChild = t\n\n    " +
                "def isLeaf(self):\n        return ((not self.leftChild) and (not self.rightChild" +
                "))\n\n    def getRightChild(self):\n        return self.rightChild\n\n    def ge" +
                "tLeftChild(self):\n        return self.leftChild\n\n    def setRootVal(self,obj)" +
                ":\n        self.key = obj\n\n    def getRootVal(self,):\n        return self.key" +
                "\n\n    def inorder(self):\n        if self.leftChild:\n            self.leftChi" +
                "ld.inorder()\n        print(self.key)\n        if self.rightChild:\n            " +
                "self.rightChild.inorder()\n\n    def postorder(self):\n        if self.leftChild" +
                ":\n            self.leftChild.postorder()\n        if self.rightChild:\n        " +
                "    self.rightChild.postorder()\n        print(self.key)\n\n\n    def preorder(s" +
                "elf):\n        print(self.key)\n        if self.leftChild:\n            self.lef" +
                "tChild.preorder()\n        if self.rightChild:\n            self.rightChild.preo" +
                "rder()\n\n    def printexp(self):\n        if self.leftChild:\n            print" +
                "('(')\n            self.leftChild.printexp()\n        print(self.key)\n        i" +
                "f self.rightChild:\n            self.rightChild.printexp()\n            print(')" +
                "')\n\n    def postordereval(self):\n        opers = {'+':operator.add, '-':opera" +
                "tor.sub, '*':operator.mul, '/':operator.truediv}\n        res1 = None\n        r" +
                "es2 = None\n        if self.leftChild:\n            res1 = self.leftChild.postor" +
                "dereval()  #// \\label{peleft}\n        if self.rightChild:\n            res2 = " +
                "self.rightChild.postordereval() #// \\label{peright}\n        if res1 and res2:" +
                "\n            return opers[self.key](res1,res2) #// \\label{peeval}\n        els" +
                "e:\n            return self.key\n\ndef inorder(tree):\n    if tree != None:\n   " +
                "     inorder(tree.getLeftChild())\n        print(tree.getRootVal())\n        ino" +
                "rder(tree.getRightChild())\n\ndef printexp(tree):\n    if tree.leftChild:\n     " +
                "   print('(')\n        printexp(tree.getLeftChild())\n    print(tree.getRootVal(" +
                "))\n    if tree.rightChild:\n        printexp(tree.getRightChild())\n        pri" +
                "nt(')') \n\ndef printexp(tree):\n    sVal = \"\"\n    if tree:\n        sVal = '" +
                "(' + printexp(tree.getLeftChild())\n        sVal = sVal + str(tree.getRootVal())" +
                "\n        sVal = sVal + printexp(tree.getRightChild()) + ')'\n    return sVal\n" +
                "\ndef postordereval(tree):\n    opers = {'+':operator.add, '-':operator.sub, '*'" +
                ":operator.mul, '/':operator.truediv}\n    res1 = None\n    res2 = None\n    if t" +
                "ree:\n        res1 = postordereval(tree.getLeftChild())  #// \\label{peleft}\n  " +
                "      res2 = postordereval(tree.getRightChild()) #// \\label{peright}\n        i" +
                "f res1 and res2:\n            return opers[tree.getRootVal()](res1,res2) #// \\l" +
                "abel{peeval}\n        else:\n            return tree.getRootVal()\n\ndef height(" +
                "tree):\n    if tree == None:\n        return -1\n    else:\n        return 1 + m" +
                "ax(height(tree.leftChild),height(tree.rightChild))\n\n# t = BinaryTree(7)\n# t.i" +
                "nsertLeft(3)\n# t.insertRight(9)\n# inorder(t)\n# import operator\n# x = BinaryT" +
                "ree('*')\n# x.insertLeft('+')\n# l = x.getLeftChild()\n# l.insertLeft(4)\n# l.in" +
                "sertRight(5)\n# x.insertRight(7)\n# print(printexp(x))\n# print(postordereval(x)" +
                ")\n# print(height(x))\n",
        "src/lib/webgl/primitives.js": "// most of this file is from 'tdl'\n\nvar $builtinmodule = function(name)\n{\n  " +
                "  var mod = {};\n\n\n\n    /**\n     * AttribBuffer manages a TypedArray as an a" +
                "rray of vectors.\n     *\n     * @param {number} numComponents Number of compone" +
                "nts per\n     *     vector.\n     * @param {number|!Array.<number>} numElements " +
                "Number of vectors or the data.\n     * @param {string} opt_type The type of the " +
                "TypedArray to\n     *     create. Default = 'Float32Array'.\n     * @param {!Arr" +
                "ay.<number>} opt_data The data for the array.\n     */\n    var AttribBuffer = f" +
                "unction(\n            numComponents, numElements, opt_type) {\n        opt_type " +
                "= opt_type || 'Float32Array';\n        var type = window[opt_type];\n        if " +
                "(numElements.length) {\n            this.buffer = new type(numElements);\n      " +
                "      numElements = this.buffer.length / numComponents;\n            this.cursor" +
                " = numElements;\n        } else {\n            this.buffer = new type(numCompone" +
                "nts * numElements);\n            this.cursor = 0;\n        }\n        this.numCo" +
                "mponents = numComponents;\n        this.numElements = numElements;\n        this" +
                ".type = opt_type;\n    };\n\n    AttribBuffer.prototype.stride = function() {\n " +
                "       return 0;\n    };\n\n    AttribBuffer.prototype.offset = function() {\n  " +
                "      return 0;\n    };\n\n    AttribBuffer.prototype.getElement = function(inde" +
                "x) {\n        var offset = index * this.numComponents;\n        var value = [];" +
                "\n        for (var ii = 0; ii < this.numComponents; ++ii) {\n            value.p" +
                "ush(this.buffer[offset + ii]);\n        }\n        return value;\n    };\n\n    " +
                "AttribBuffer.prototype.setElement = function(index, value) {\n        var offset" +
                " = index * this.numComponents;\n        for (var ii = 0; ii < this.numComponents" +
                "; ++ii) {\n            this.buffer[offset + ii] = value[ii];\n        }\n    };" +
                "\n\n    AttribBuffer.prototype.clone = function() {\n        var copy = new Attr" +
                "ibBuffer(\n                this.numComponents, this.numElements, this.type);\n  " +
                "      copy.pushArray(this);\n        return copy;\n    }\n\n    AttribBuffer.pro" +
                "totype.push = function(value) {\n        this.setElement(this.cursor++, value);" +
                "\n    };\n\n    AttribBuffer.prototype.pushArray = function(array) {\n        //" +
                "  this.buffer.set(array, this.cursor * this.numComponents);\n        //  this.cu" +
                "rsor += array.numElements;\n        for (var ii = 0; ii < array.numElements; ++i" +
                "i) {\n            this.push(array.getElement(ii));\n        }\n    };\n\n    Att" +
                "ribBuffer.prototype.pushArrayWithOffset =\n    function(array, offset) {\n      " +
                "  for (var ii = 0; ii < array.numElements; ++ii) {\n            var elem = array" +
                ".getElement(ii);\n            for (var jj = 0; jj < offset.length; ++jj) {\n    " +
                "            elem[jj] += offset[jj];\n            }\n            this.push(elem);" +
                "\n        }\n    };\n\n    /**\n    * Computes the extents\n    * @param {!Attri" +
                "bBuffer} positions The positions\n    * @return {!{min: !tdl.math.Vector3, max:!" +
                "tdl.math.Vector3}}\n    *     The min and max extents.\n    */\n    AttribBuffer" +
                ".prototype.computeExtents = function() {\n        var numElements = this.numElem" +
                "ents;\n        var numComponents = this.numComponents;\n        var minExtent = " +
                "this.getElement(0);\n        var maxExtent = this.getElement(0);\n        for (v" +
                "ar ii = 1; ii < numElements; ++ii) {\n            var element = this.getElement(" +
                "ii);\n            for (var jj = 0; jj < numComponents; ++jj) {\n                " +
                "minExtent[jj] = Math.min(minExtent[jj], element[jj]);\n                maxExtent" +
                "[jj] = Math.max(maxExtent[jj], element[jj]);\n            }\n        }\n        " +
                "return {min: minExtent, max: maxExtent};\n    };\n\n\n    /**\n     * Creates th" +
                "e vertices and indices for a cube. The\n     * cube will be created around the o" +
                "rigin. (-size / 2, size / 2)\n     *\n     * @param {number} size Width, height " +
                "and depth of the cube.\n     * @return {!Object.<string, !tdl.primitives.AttribB" +
                "uffer>} The\n     *         created plane vertices.\n     */\n    mod.createCube" +
                " = new Sk.builtin.func(function(size)\n            {\n                var CUBE_F" +
                "ACE_INDICES_ = [\n                    [3, 7, 5, 1],\n                    [0, 4, " +
                "6, 2],\n                    [6, 7, 3, 2],\n                    [0, 1, 5, 4],\n  " +
                "                  [5, 7, 6, 4],\n                    [2, 3, 1, 0]\n             " +
                "   ];\n\n                var k = size / 2;\n\n                var cornerVertices" +
                " = [\n                        [-k, -k, -k],\n                        [+k, -k, -k" +
                "],\n                        [-k, +k, -k],\n                        [+k, +k, -k]," +
                "\n                        [-k, -k, +k],\n                        [+k, -k, +k],\n" +
                "                        [-k, +k, +k],\n                        [+k, +k, +k]\n   " +
                "                 ];\n\n                var faceNormals = [\n                    " +
                "    [+1, +0, +0],\n                        [-1, +0, +0],\n                      " +
                "  [+0, +1, +0],\n                        [+0, -1, +0],\n                        " +
                "[+0, +0, +1],\n                        [+0, +0, -1]\n                    ];\n\n " +
                "               var uvCoords = [\n                        [0, 0],\n              " +
                "          [1, 0],\n                        [1, 1],\n                        [0, " +
                "1]\n                    ];\n\n                var numVertices = 6 * 4;\n        " +
                "        var positions = new AttribBuffer(3, numVertices);\n                var n" +
                "ormals = new AttribBuffer(3, numVertices);\n                var texCoords = new " +
                "AttribBuffer(2, numVertices);\n                var indices = new AttribBuffer(3," +
                " 6 * 2, 'Uint16Array');\n\n                for (var f = 0; f < 6; ++f) {\n      " +
                "              var faceIndices = CUBE_FACE_INDICES_[f];\n                    for " +
                "(var v = 0; v < 4; ++v) {\n                        var position = cornerVertices" +
                "[faceIndices[v]];\n                        var normal = faceNormals[f];\n       " +
                "                 var uv = uvCoords[v];\n\n                        // Each face n" +
                "eeds all four vertices because the normals and texture\n                        " +
                "// coordinates are not all the same.\n                        positions.push(pos" +
                "ition);\n                        normals.push(normal);\n                        " +
                "texCoords.push(uv);\n\n                    }\n                    // Two triangl" +
                "es make a square face.\n                    var offset = 4 * f;\n               " +
                "     indices.push([offset + 0, offset + 1, offset + 2]);\n                    in" +
                "dices.push([offset + 0, offset + 2, offset + 3]);\n                }\n\n        " +
                "        return {\n                        position: positions,\n                " +
                "        normal: normals,\n                        texCoord: texCoords,\n        " +
                "                indices: indices\n                };\n            });\n\n    ret" +
                "urn mod;\n};\n",
        "src/lib/weakref.py": "raise NotImplementedError(\"weakref is not yet implemented in Skulpt\")\n",
        "src/lib/user.py": "raise NotImplementedError(\"user is not yet implemented in Skulpt\")\n",
        "src/lib/pickletools.py": "raise NotImplementedError(\"pickletools is not yet implemented in Skulpt\")\n",
        "src/lib/mhlib.py": "raise NotImplementedError(\"mhlib is not yet implemented in Skulpt\")\n",
        "src/lib/re.js": "var $builtinmodule = function (name) {\n    var mod = {};\n\n    // Constants (m" +
                "ostly unsupported)\n    mod.I = 2;\n    mod.IGNORECASE = 2;\n    // mod.L = 4;\n" +
                "    // mod.LOCALE = 4;\n    mod.M = 8;\n    mod.MULTILINE = 8;\n    // mod.S = 1" +
                "6;\n    // mod.DOTALL = 16;\n    // mod.U = 32;\n    // mod.UNICODE = 32;\n    /" +
                "/ mod.X = 64;\n    // mod.VERBOSE = 64;\n\n    var validGroups = [\"(?:\", \"(?=" +
                "\", \"(?!\"];\n\n    var convert = function (pattern) {\n        var newpattern;" +
                "\n        var match;\n        var i;\n\n        // Look for disallowed construct" +
                "s\n        match = pattern.match(/\\(\\?./g);\n        if (match) {\n           " +
                " for (i = 0; i < match.length; i++) {\n                if (validGroups.indexOf(m" +
                "atch[i]) == -1) {\n                    throw new Sk.builtin.ValueError(\"Disallo" +
                "wed group in pattern: '\"\n                        + match[i] + \"'\");\n       " +
                "         }\n                ;\n            }\n            ;\n        }\n        " +
                ";\n\n        newpattern = pattern.replace('/\\\\/g', '\\\\\\\\');\n        newpa" +
                "ttern = pattern.replace(/([^\\\\]){,(?![^\\[]*\\])/g, '$1{0,');\n\n        retur" +
                "n newpattern;\n    };\n\n    var getFlags = function (flags) {\n        var jsfl" +
                "ags = \"g\";\n        if ((flags & mod.IGNORECASE) == mod.IGNORECASE) {\n       " +
                "     jsflags += \"i\";\n        }\n        ;\n        if ((flags & mod.MULTILINE" +
                ") == mod.MULTILINE) {\n            jsflags += \"m\";\n        }\n        ;\n    " +
                "    return jsflags;\n    };\n\n    mod.split = Sk.nativejs.func(function split (" +
                "pattern, string, maxsplit, flags) {\n        Sk.builtin.pyCheckArgs(\"split\", a" +
                "rguments, 2, 4);\n        if (!Sk.builtin.checkString(pattern)) {\n            t" +
                "hrow new Sk.builtin.TypeError(\"pattern must be a string\");\n        }\n       " +
                " ;\n        if (!Sk.builtin.checkString(string)) {\n            throw new Sk.bui" +
                "ltin.TypeError(\"string must be a string\");\n        }\n        ;\n        if (" +
                "maxsplit === undefined) {\n            maxsplit = 0;\n        }\n        ;\n    " +
                "    if (!Sk.builtin.checkNumber(maxsplit)) {\n            throw new Sk.builtin.T" +
                "ypeError(\"maxsplit must be a number\");\n        }\n        ;\n        if (flag" +
                "s === undefined) {\n            flags = 0;\n        }\n        ;\n        if (!S" +
                "k.builtin.checkNumber(flags)) {\n            throw new Sk.builtin.TypeError(\"fl" +
                "ags must be a number\");\n        }\n        ;\n\n        maxsplit = Sk.builtin." +
                "asnum$(maxsplit);\n        var pat = Sk.ffi.unwrapo(pattern);\n        var str =" +
                " Sk.ffi.unwrapo(string);\n\n        // Convert pat from Python to Javascript reg" +
                "ex syntax\n        pat = convert(pat);\n        //print(\"Pat: \" + pat);\n     " +
                "   //print(\"Str: \" + str);\n\n        var captured = !(pat.match(/^\\(.*\\)$/)" +
                " === null);\n        //print(\"Captured: \", captured);\n\n        var jsflags =" +
                " getFlags(flags);\n        //print(\"Flags: \", jsflags);\n\n        var regex =" +
                " new RegExp(pat, jsflags);\n\n        var result = [];\n        var match;\n    " +
                "    var index = 0;\n        var splits = 0;\n        while ((match = regex.exec(" +
                "str)) != null) {\n            //print(\"Matched '\" + match[0] + \"' at position" +
                " \" + match.index + \n            //      \"; next search at \" + regex.lastInde" +
                "x);\n            if (match.index === regex.lastIndex) {\n                // empt" +
                "y match\n                break;\n            }\n            ;\n            resul" +
                "t.push(new Sk.builtin.str(str.substring(index, match.index)));\n            if (" +
                "captured) {\n                // Add matching pattern, too\n                resul" +
                "t.push(new Sk.builtin.str(match[0]));\n            }\n            ;\n           " +
                " index = regex.lastIndex;\n            splits += 1;\n            if (maxsplit &&" +
                " (splits >= maxsplit)) {\n                break;\n            }\n            ;\n" +
                "        }\n        ;\n        result.push(new Sk.builtin.str(str.substring(index" +
                ")));\n\n        return new Sk.builtin.list(result);\n    });\n\n    mod.findall " +
                "= Sk.nativejs.func(function findall (pattern, string, flags) {\n        Sk.built" +
                "in.pyCheckArgs(\"findall\", arguments, 2, 3);\n        if (!Sk.builtin.checkStri" +
                "ng(pattern)) {\n            throw new Sk.builtin.TypeError(\"pattern must be a s" +
                "tring\");\n        }\n        ;\n        if (!Sk.builtin.checkString(string)) {" +
                "\n            throw new Sk.builtin.TypeError(\"string must be a string\");\n    " +
                "    }\n        ;\n        if (flags === undefined) {\n            flags = 0;\n  " +
                "      }\n        ;\n        if (!Sk.builtin.checkNumber(flags)) {\n            t" +
                "hrow new Sk.builtin.TypeError(\"flags must be a number\");\n        }\n        ;" +
                "\n\n        var pat = Sk.ffi.unwrapo(pattern);\n        var str = Sk.ffi.unwrapo" +
                "(string);\n\n        // Convert pat from Python to Javascript regex syntax\n    " +
                "    pat = convert(pat);\n        //print(\"Pat: \" + pat);\n        //print(\"St" +
                "r: \" + str);\n\n        var jsflags = getFlags(flags);\n        //print(\"Flags" +
                ": \", jsflags);\n\n        var regex = new RegExp(pat, jsflags);\n\n        if (" +
                "pat.match(/\\$/)) {\n            var newline_at_end = new RegExp(/\\n$/);\n     " +
                "       if (str.match(newline_at_end)) {\n                str = str.slice(0, -1);" +
                "\n            }\n        }\n\n        var result = [];\n        var match;\n    " +
                "    while ((match = regex.exec(str)) != null) {\n            //print(\"Matched '" +
                "\" + match[0] + \"' at position \" + match.index + \n            //      \"; nex" +
                "t search at \" + regex.lastIndex);\n            // print(\"match: \" + JSON.stri" +
                "ngify(match));\n            if (match.length < 2) {\n                result.push" +
                "(new Sk.builtin.str(match[0]));\n            } else if (match.length == 2) {\n  " +
                "              result.push(new Sk.builtin.str(match[1]));\n            } else {\n" +
                "                var groups = [];\n                for (var i = 1; i < match.leng" +
                "th; i++) {\n                    groups.push(new Sk.builtin.str(match[i]));\n    " +
                "            }\n                ;\n                result.push(new Sk.builtin.tup" +
                "le(groups));\n            }\n            ;\n            if (match.index === rege" +
                "x.lastIndex) {\n                regex.lastIndex += 1;\n            }\n          " +
                "  ;\n        }\n        ;\n\n        return new Sk.builtin.list(result);\n    })" +
                ";\n\n\n    var matchobj = function ($gbl, $loc) {\n        $loc.__init__ = new S" +
                "k.builtin.func(function (self, thematch, pattern, string) {\n            self.th" +
                "ematch = thematch;\n            self.re = pattern;\n            self.string = st" +
                "ring;\n        });\n\n        $loc.groups = new Sk.builtin.func(function (self) " +
                "{\n            return new Sk.builtin.tuple(self.thematch.v.slice(1))\n        })" +
                ";\n\n        $loc.group = new Sk.builtin.func(function (self, grpnum) {\n       " +
                "     if (grpnum === undefined) {\n                grpnum = 0;\n            }\n  " +
                "          else {\n                grpnum = Sk.builtin.asnum$(grpnum);\n         " +
                "   }\n            if (grpnum >= self.thematch.v.length) {\n                throw" +
                " new Sk.builtin.IndexError(\"Index out of range: \" + grpnum);\n            }\n " +
                "           return self.thematch.v[grpnum]\n        });\n\n    }\n\n    mod.Match" +
                "Object = Sk.misceval.buildClass(mod, matchobj, 'MatchObject', []);\n\n    // Int" +
                "ernal function to return a Python list of strings \n    // From a JS regular exp" +
                "ression string\n    mod._findre = function (res, string) {\n        res = res.re" +
                "place(/([^\\\\]){,(?![^\\[]*\\])/g, '$1{0,');\n        var re = eval(res);\n    " +
                "    var patt = new RegExp('\\n$');\n        if (string.v.match(patt)) {\n       " +
                "     var matches = string.v.slice(0, -1).match(re);\n        }\n        else {\n" +
                "            var matches = string.v.match(re);\n        }\n        retval = new S" +
                "k.builtin.list();\n        if (matches == null) {\n            return retval;\n " +
                "       }\n        for (var i = 0; i < matches.length; ++i) {\n            var si" +
                "tem = new Sk.builtin.str(matches[i]);\n            retval.v.push(sitem);\n      " +
                "  }\n        return retval;\n    }\n\n    mod.search = new Sk.builtin.func(funct" +
                "ion (pattern, string, flags) {\n        Sk.builtin.pyCheckArgs('search', argumen" +
                "ts, 2, 3);\n        if (!Sk.builtin.checkString(pattern)) {\n            throw n" +
                "ew Sk.builtin.TypeError(\"pattern must be a string\");\n        }\n        ;\n  " +
                "      if (!Sk.builtin.checkString(string)) {\n            throw new Sk.builtin.T" +
                "ypeError(\"string must be a string\");\n        }\n        ;\n        if (flags " +
                "=== undefined) {\n            flags = 0;\n        }\n        ;\n        if (!Sk." +
                "builtin.checkNumber(flags)) {\n            throw new Sk.builtin.TypeError(\"flag" +
                "s must be a number\");\n        }\n        ;\n        var res = \"/\" + pattern." +
                "v.replace(/\\//g, \"\\\\/\") + \"/\";\n        lst = mod._findre(res, string);\n" +
                "        if (lst.v.length < 1) {\n            return Sk.builtin.none.none$;\n    " +
                "    }\n        var mob = Sk.misceval.callsim(mod.MatchObject, lst, pattern, stri" +
                "ng);\n        return mob;\n    });\n\n    mod.match = new Sk.builtin.func(functi" +
                "on (pattern, string, flags) {\n        Sk.builtin.pyCheckArgs('match', arguments" +
                ", 2, 3);\n        if (!Sk.builtin.checkString(pattern)) {\n            throw new" +
                " Sk.builtin.TypeError(\"pattern must be a string\");\n        }\n        ;\n    " +
                "    if (!Sk.builtin.checkString(string)) {\n            throw new Sk.builtin.Typ" +
                "eError(\"string must be a string\");\n        }\n        ;\n        if (flags ==" +
                "= undefined) {\n            flags = 0;\n        }\n        ;\n        if (!Sk.bu" +
                "iltin.checkNumber(flags)) {\n            throw new Sk.builtin.TypeError(\"flags " +
                "must be a number\");\n        }\n        ;\n        var res = \"/^\" + pattern.v" +
                ".replace(/\\//g, \"\\\\/\") + \"/\";\n        lst = mod._findre(res, string);\n " +
                "       if (lst.v.length < 1) {\n            return Sk.builtin.none.none$;\n     " +
                "   }\n        var mob = Sk.misceval.callsim(mod.MatchObject, lst, pattern, strin" +
                "g);\n        return mob;\n    });\n\n    return mod;\n}\n",
        "src/lib/SocketServer.py": "raise NotImplementedError(\"SocketServer is not yet implemented in Skulpt\")\n",
        "src/lib/types.py": "raise NotImplementedError(\"types is not yet implemented in Skulpt\")\n",
        "src/lib/DocXMLRPCServer.py": "raise NotImplementedError(\"DocXMLRPCServer is not yet implemented in Skulpt\")" +
                "\n",
        "src/lib/heapq.py": "raise NotImplementedError(\"heapq is not yet implemented in Skulpt\")\n",
        "src/lib/encodings/__init__.py": "raise NotImplementedError(\"encodings is not yet implemented in Skulpt\")\n",
        "src/lib/mimify.py": "raise NotImplementedError(\"mimify is not yet implemented in Skulpt\")\n",
        "src/lib/tokenize.py": "raise NotImplementedError(\"tokenize is not yet implemented in Skulpt\")\n",
        "src/lib/pythonds/graphs/__init__.py": "\n\nfrom .adjGraph import Graph\nfrom .adjGraph import Vertex\nfrom .priorityQue" +
                "ue import PriorityQueue\n"
    }
}
