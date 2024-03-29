const Constants  = module.exports = Object.freeze({
    OPCODES: {
        OP_nop: 0x00,
        OP_aconst_null: 0x01,
        OP_iconst_m1: 0x02,
        OP_iconst_0: 0x03,
        OP_iconst_1: 0x04,
        OP_iconst_2: 0x05,
        OP_iconst_3: 0x06,
        OP_iconst_4: 0x07,
        OP_iconst_5: 0x08,
        OP_lconst_0: 0x09,
        OP_lconst_1: 0x0A,
        OP_fconst_0: 0x0B,
        OP_fconst_1: 0x0C,
        OP_fconst_2: 0x0D,
        OP_dconst_0: 0x0E,
        OP_dconst_1: 0x0F,
        OP_bipush: 0x10,
        OP_sipush: 0x11,
        OP_ldc: 0x12,
        OP_ldc_w: 0x13,
        OP_ldc2_w: 0x14,
        OP_iload: 0x15,
        OP_lload: 0x16,
        OP_fload: 0x17,
        OP_dload: 0x18,
        OP_aload: 0x19,
        OP_iload_0: 0x1A,
        OP_iload_1: 0x1B,
        OP_iload_2: 0x1C,
        OP_iload_3: 0x1D,
        OP_lload_0: 0x1E,
        OP_lload_1: 0x1F,
        OP_lload_2: 0x20,
        OP_lload_3: 0x21,
        OP_fload_0: 0x22,
        OP_fload_1: 0x23,
        OP_fload_2: 0x24,
        OP_fload_3: 0x25,
        OP_dload_0: 0x26,
        OP_dload_1: 0x27,
        OP_dload_2: 0x28,
        OP_dload_3: 0x29,
        OP_aload_0: 0x2A,
        OP_aload_1: 0x2B,
        OP_aload_2: 0x2C,
        OP_aload_3: 0x2D,
        OP_iaload: 0x2E,
        OP_laload: 0x2F,
        OP_faload: 0x30,
        OP_daload: 0x31,
        OP_aaload: 0x32,
        OP_baload: 0x33,
        OP_caload: 0x34,
        OP_saload: 0x35,
        OP_istore: 0x36,
        OP_lstore: 0x37,
        OP_fstore: 0x38,
        OP_dstore: 0x39,
        OP_astore: 0x3A,
        OP_istore_0: 0x3B,
        OP_istore_1: 0x3C,
        OP_istore_2: 0x3D,
        OP_istore_3: 0x3E,
        OP_lstore_0: 0x3F,
        OP_lstore_1: 0x40,
        OP_lstore_2: 0x41,
        OP_lstore_3: 0x42,
        OP_fstore_0: 0x43,
        OP_fstore_1: 0x44,
        OP_fstore_2: 0x45,
        OP_fstore_3: 0x46,
        OP_dstore_0: 0x47,
        OP_dstore_1: 0x48,
        OP_dstore_2: 0x49,
        OP_dstore_3: 0x4A,
        OP_astore_0: 0x4B,
        OP_astore_1: 0x4C,
        OP_astore_2: 0x4D,
        OP_astore_3: 0x4E,
        OP_iastore: 0x4F,
        OP_lastore: 0x50,
        OP_fastore: 0x51,
        OP_dastore: 0x52,
        OP_aastore: 0x53,
        OP_bastore: 0x54,
        OP_castore: 0x55,
        OP_sastore: 0x56,
        OP_pop: 0x57,
        OP_pop2: 0x58,
        OP_dup: 0x59,
        OP_dup_x1: 0x5A,
        OP_dup_x2: 0x5B,
        OP_dup2: 0x5C,
        OP_dup2_x1: 0x5D,
        OP_dup2_x2: 0x5E,
        OP_swap: 0x5F,
        OP_iadd: 0x60,
        OP_ladd: 0x61,
        OP_fadd: 0x62,
        OP_dadd: 0x63,
        OP_isub: 0x64,
        OP_lsub: 0x65,
        OP_fsub: 0x66,
        OP_dsub: 0x67,
        OP_imul: 0x68,
        OP_lmul: 0x69,
        OP_fmul: 0x6A,
        OP_dmul: 0x6B,
        OP_idiv: 0x6C,
        OP_ldiv: 0x6D,
        OP_fdiv: 0x6E,
        OP_ddiv: 0x6F,
        OP_irem: 0x70,
        OP_lrem: 0x71,
        OP_frem: 0x72,
        OP_drem: 0x73,
        OP_ineg: 0x74,
        OP_lneg: 0x75,
        OP_fneg: 0x76,
        OP_dneg: 0x77,
        OP_ishl: 0x78,
        OP_lshl: 0x79,
        OP_ishr: 0x7A,
        OP_lshr: 0x7B,
        OP_iushr: 0x7C,
        OP_lushr: 0x7D,
        OP_iand: 0x7E,
        OP_land: 0x7F,
        OP_ior: 0x80,
        OP_lor: 0x81,
        OP_ixor: 0x82,
        OP_lxor: 0x83,
        OP_iinc: 0x84,
        OP_i2l: 0x85,
        OP_i2f: 0x86,
        OP_i2d: 0x87,
        OP_l2i: 0x88,
        OP_l2f: 0x89,
        OP_l2d: 0x8A,
        OP_f2i: 0x8B,
        OP_f2l: 0x8C,
        OP_f2d: 0x8D,
        OP_d2i: 0x8E,
        OP_d2l: 0x8F,
        OP_d2f: 0x90,
        OP_i2b: 0x91,
        OP_i2c: 0x92,
        OP_i2s: 0x93,
        OP_lcmp: 0x94,
        OP_fcmpl: 0x95,
        OP_fcmpg: 0x96,
        OP_dcmpl: 0x97,
        OP_dcmpg: 0x98,
        OP_ifeq: 0x99,
        OP_ifne: 0x9A,
        OP_iflt: 0x9B,
        OP_ifge: 0x9C,
        OP_ifgt: 0x9D,
        OP_ifle: 0x9E,
        OP_if_icmpeq: 0x9F,
        OP_if_icmpne: 0xA0,
        OP_if_icmplt: 0xA1,
        OP_if_icmpge: 0xA2,
        OP_if_icmpgt: 0xA3,
        OP_if_icmple: 0xA4,
        OP_if_acmpeq: 0xA5,
        OP_if_acmpne: 0xA6,
        OP_goto: 0xA7,
        OP_jsr: 0xA8,
        OP_ret: 0xA9,
        OP_tableswitch: 0xAA,
        OP_lookupswitch: 0xAB,
        OP_ireturn: 0xAC,
        OP_lreturn: 0xAD,
        OP_freturn: 0xAE,
        OP_dreturn: 0xAF,
        OP_areturn: 0xB0,
        OP_return: 0xB1,
        OP_getstatic: 0xB2,
        OP_putstatic: 0xB3,
        OP_getfield: 0xB4,
        OP_putfield: 0xB5,
        OP_invokevirtual: 0xB6,
        OP_invokespecial: 0xB7,
        OP_invokestatic: 0xB8,
        OP_invokeinterface: 0xB9,
        OP_invokedynamic: 0xBA,
        OP_new: 0xBB,
        OP_newarray: 0xBC,
        OP_anewarray: 0xBD,
        OP_arraylength: 0xBE,
        OP_athrow: 0xBF,
        OP_checkcast: 0xC0,
        OP_instanceof: 0xC1,
        OP_monitorenter: 0xC2,
        OP_monitorexit: 0xC3,
        OP_wide: 0xC4,
        OP_multianewarray: 0xC5,
        OP_ifnull: 0xC6,
        OP_ifnonnull: 0xC7,
        OP_goto_w: 0xC8,
        OP_jsr_w: 0xC9
    },
    ACCESS_FLAGS: {
        ACC_PUBLIC: 0x0001,
        ACC_PRIVATE: 0x0002,
        ACC_PROTECTED: 0x0004,
        ACC_STATIC: 0x0008,
        ACC_FINAL: 0x0010,
        ACC_SYNCHRONIZED: 0x0020,
        ACC_VOLATILE: 0x0040,
        ACC_TRANSIENT: 0x0080,
        ACC_NATIVE: 0x0100,
        ACC_INTERFACE: 0x0200,
        ACC_ABSTRACT: 0x0400
    },
    ATTRIBUTE_TYPES: {
        ConstantValue:  "ConstantValue",
        Code: "Code",
        Exceptions: "Exceptions",
        InnerClasses: "InnerClasses",
        Synthetic: "Synthetic",
        SourceFile: "SourceFile",
        LineNumberTable: "LineNumberTable",
        LocalVariableTable: "LocalVariableTable",
        MethodParameters: "MethodParameters",
        Signature: "Signature",
        BootstrapMethods: "BootstrapMethods",
        RuntimeVisibleAnnotations: "RuntimeVisibleAnnotations",
        RuntimeInvisibleAnnotations: "RuntimeInvisibleAnnotations",
        RuntimeVisibleParameterAnnotations: "RuntimeVisibleParameterAnnotations",
        RuntimeInvisibleParameterAnnotations: "RuntimeInvisibleParameterAnnotations",
        EnclosingMethod: "EnclosingMethod",
        AnnotationDefault: "AnnotationDefault",
        Deprecated: "Deprecated",
        NestHost: "NestHost",
        NestMembers: "NestMembers"
    },
    TAGS: {
        CONSTANT_Class: 7,
        CONSTANT_Fieldref: 9,
        CONSTANT_Methodref: 10,
        CONSTANT_InterfaceMethodref: 11,
        CONSTANT_String: 8,
        CONSTANT_Integer: 3,
        CONSTANT_Float: 4,
        CONSTANT_Long: 5,
        CONSTANT_Double: 6,
        CONSTANT_NameAndType: 12,
        CONSTANT_Utf8: 1,
        CONSTANT_MethodHandle: 15,
        CONSTANT_MethodType: 16,
        CONSTANT_InvokeDynamic: 18,
        CONSTANT_Module: 19,
        CONSTANT_Package: 20
    }, REF: {
        getField: 1,
        getStatic: 2,
        putField: 3,
        putStatic: 4,
        invokeVirtual: 5,
        invokeStatic: 6,
        invokeSpecial: 7,
        newInvokeSpecial: 8,
        invokeInterface: 9,
        toString: function (value) {
            let keys = Object.keys(Constants.REF);
            for (let idx = 0; idx < keys.length; idx++) {
                let key = keys[idx];
                if (Constants.REF[key] == value) {
                    return key;
                }
            }
            // return null;
            throw new Exception(`Type ${value} is not supported.`)
        }
    }
});
