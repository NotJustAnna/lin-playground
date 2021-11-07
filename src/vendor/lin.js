(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.lin = factory(typeof lin === 'undefined' ? {} : lin);
}(this, function (_) {
  'use strict';
  DoubleTimeMark.prototype = Object.create(TimeMark.prototype);
  DoubleTimeMark.prototype.constructor = DoubleTimeMark;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  NotImplementedError.prototype = Object.create(Error_0.prototype);
  NotImplementedError.prototype.constructor = NotImplementedError;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  LongProgressionIterator.prototype = Object.create(LongIterator.prototype);
  LongProgressionIterator.prototype.constructor = LongProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  LongRange.prototype = Object.create(LongProgression.prototype);
  LongRange.prototype.constructor = LongRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  NodeJsOutput_0.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput_0.prototype.constructor = NodeJsOutput_0;
  BufferedOutput_0.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput_0.prototype.constructor = BufferedOutput_0;
  BufferedOutputToConsoleLog_0.prototype = Object.create(BufferedOutput_0.prototype);
  BufferedOutputToConsoleLog_0.prototype.constructor = BufferedOutputToConsoleLog_0;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  DurationUnit.prototype = Object.create(Enum.prototype);
  DurationUnit.prototype.constructor = DurationUnit;
  _no_name_provided__29.prototype = Object.create(TimeMark.prototype);
  _no_name_provided__29.prototype.constructor = _no_name_provided__29;
  PerformanceTimeSource.prototype = Object.create(AbstractDoubleTimeSource.prototype);
  PerformanceTimeSource.prototype.constructor = PerformanceTimeSource;
  DateNowTimeSource.prototype = Object.create(AbstractDoubleTimeSource.prototype);
  DateNowTimeSource.prototype.constructor = DateNowTimeSource;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  NumberFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  NumberFormatException.prototype.constructor = NumberFormatException;
  AssertionError.prototype = Object.create(Error_0.prototype);
  AssertionError.prototype.constructor = AssertionError;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  SyntaxException.prototype = Object.create(RuntimeException.prototype);
  SyntaxException.prototype.constructor = SyntaxException;
  Invalid.prototype = Object.create(LexicalNumber.prototype);
  Invalid.prototype.constructor = Invalid;
  Decimal.prototype = Object.create(LexicalNumber.prototype);
  Decimal.prototype.constructor = Decimal;
  Integer.prototype = Object.create(LexicalNumber.prototype);
  Integer.prototype.constructor = Integer;
  ArrayIndexOutOfBoundsException.prototype = Object.create(IndexOutOfBoundsException.prototype);
  ArrayIndexOutOfBoundsException.prototype.constructor = ArrayIndexOutOfBoundsException;
  SegmentedByteString.prototype = Object.create(ByteString.prototype);
  SegmentedByteString.prototype.constructor = SegmentedByteString;
  ArrayInsertInsn.prototype = Object.create(Insn.prototype);
  ArrayInsertInsn.prototype.constructor = ArrayInsertInsn;
  AssignInsn.prototype = Object.create(Insn.prototype);
  AssignInsn.prototype.constructor = AssignInsn;
  BinaryAddOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryAddOperationInsn.prototype.constructor = BinaryAddOperationInsn;
  BinaryDivideOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryDivideOperationInsn.prototype.constructor = BinaryDivideOperationInsn;
  BinaryEqualsOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryEqualsOperationInsn.prototype.constructor = BinaryEqualsOperationInsn;
  BinaryGtOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryGtOperationInsn.prototype.constructor = BinaryGtOperationInsn;
  BinaryGteOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryGteOperationInsn.prototype.constructor = BinaryGteOperationInsn;
  BinaryInOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryInOperationInsn.prototype.constructor = BinaryInOperationInsn;
  BinaryLtOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryLtOperationInsn.prototype.constructor = BinaryLtOperationInsn;
  BinaryLteOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryLteOperationInsn.prototype.constructor = BinaryLteOperationInsn;
  BinaryMultiplyOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryMultiplyOperationInsn.prototype.constructor = BinaryMultiplyOperationInsn;
  BinaryNotEqualsOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryNotEqualsOperationInsn.prototype.constructor = BinaryNotEqualsOperationInsn;
  BinaryRangeOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryRangeOperationInsn.prototype.constructor = BinaryRangeOperationInsn;
  BinaryRemainingOperationInsn.prototype = Object.create(Insn.prototype);
  BinaryRemainingOperationInsn.prototype.constructor = BinaryRemainingOperationInsn;
  BinarySubtractOperationInsn.prototype = Object.create(Insn.prototype);
  BinarySubtractOperationInsn.prototype.constructor = BinarySubtractOperationInsn;
  BranchIfInsn.prototype = Object.create(Insn.prototype);
  BranchIfInsn.prototype.constructor = BranchIfInsn;
  BreakInsn.prototype = Object.create(Insn.prototype);
  BreakInsn.prototype.constructor = BreakInsn;
  ContinueInsn.prototype = Object.create(Insn.prototype);
  ContinueInsn.prototype.constructor = ContinueInsn;
  DeclareVariableInsn.prototype = Object.create(Insn.prototype);
  DeclareVariableInsn.prototype.constructor = DeclareVariableInsn;
  DupInsn.prototype = Object.create(Insn.prototype);
  DupInsn.prototype.constructor = DupInsn;
  GetMemberPropertyInsn.prototype = Object.create(Insn.prototype);
  GetMemberPropertyInsn.prototype.constructor = GetMemberPropertyInsn;
  GetSubscriptInsn.prototype = Object.create(Insn.prototype);
  GetSubscriptInsn.prototype.constructor = GetSubscriptInsn;
  GetVariableInsn.prototype = Object.create(Insn.prototype);
  GetVariableInsn.prototype.constructor = GetVariableInsn;
  Opcode.prototype = Object.create(Enum.prototype);
  Opcode.prototype.constructor = Opcode;
  ParameterlessCode.prototype = Object.create(Enum.prototype);
  ParameterlessCode.prototype.constructor = ParameterlessCode;
  InvokeInsn.prototype = Object.create(Insn.prototype);
  InvokeInsn.prototype.constructor = InvokeInsn;
  InvokeLocalInsn.prototype = Object.create(Insn.prototype);
  InvokeLocalInsn.prototype.constructor = InvokeLocalInsn;
  InvokeMemberInsn.prototype = Object.create(Insn.prototype);
  InvokeMemberInsn.prototype.constructor = InvokeMemberInsn;
  JumpInsn.prototype = Object.create(Insn.prototype);
  JumpInsn.prototype.constructor = JumpInsn;
  LoadDecimalInsn.prototype = Object.create(Insn.prototype);
  LoadDecimalInsn.prototype.constructor = LoadDecimalInsn;
  LoadIntegerInsn.prototype = Object.create(Insn.prototype);
  LoadIntegerInsn.prototype.constructor = LoadIntegerInsn;
  LoadStringInsn.prototype = Object.create(Insn.prototype);
  LoadStringInsn.prototype.constructor = LoadStringInsn;
  NewArrayInsn.prototype = Object.create(Insn.prototype);
  NewArrayInsn.prototype.constructor = NewArrayInsn;
  NewFunctionInsn.prototype = Object.create(Insn.prototype);
  NewFunctionInsn.prototype.constructor = NewFunctionInsn;
  NewObjectInsn.prototype = Object.create(Insn.prototype);
  NewObjectInsn.prototype.constructor = NewObjectInsn;
  ObjectInsertInsn.prototype = Object.create(Insn.prototype);
  ObjectInsertInsn.prototype.constructor = ObjectInsertInsn;
  PopExceptionHandlingInsn.prototype = Object.create(Insn.prototype);
  PopExceptionHandlingInsn.prototype.constructor = PopExceptionHandlingInsn;
  PopInsn.prototype = Object.create(Insn.prototype);
  PopInsn.prototype.constructor = PopInsn;
  PopLoopHandlingInsn.prototype = Object.create(Insn.prototype);
  PopLoopHandlingInsn.prototype.constructor = PopLoopHandlingInsn;
  PopScopeInsn.prototype = Object.create(Insn.prototype);
  PopScopeInsn.prototype.constructor = PopScopeInsn;
  PushBooleanInsn.prototype = Object.create(Insn.prototype);
  PushBooleanInsn.prototype.constructor = PushBooleanInsn;
  PushDecimalInsn.prototype = Object.create(Insn.prototype);
  PushDecimalInsn.prototype.constructor = PushDecimalInsn;
  PushExceptionHandlingInsn.prototype = Object.create(Insn.prototype);
  PushExceptionHandlingInsn.prototype.constructor = PushExceptionHandlingInsn;
  PushIntegerInsn.prototype = Object.create(Insn.prototype);
  PushIntegerInsn.prototype.constructor = PushIntegerInsn;
  PushLoopHandlingInsn.prototype = Object.create(Insn.prototype);
  PushLoopHandlingInsn.prototype.constructor = PushLoopHandlingInsn;
  PushNullInsn.prototype = Object.create(Insn.prototype);
  PushNullInsn.prototype.constructor = PushNullInsn;
  PushScopeInsn.prototype = Object.create(Insn.prototype);
  PushScopeInsn.prototype.constructor = PushScopeInsn;
  PushThisInsn.prototype = Object.create(Insn.prototype);
  PushThisInsn.prototype.constructor = PushThisInsn;
  ReturnInsn.prototype = Object.create(Insn.prototype);
  ReturnInsn.prototype.constructor = ReturnInsn;
  SetMemberPropertyInsn.prototype = Object.create(Insn.prototype);
  SetMemberPropertyInsn.prototype.constructor = SetMemberPropertyInsn;
  SetSubscriptInsn.prototype = Object.create(Insn.prototype);
  SetSubscriptInsn.prototype.constructor = SetSubscriptInsn;
  SetVariableInsn.prototype = Object.create(Insn.prototype);
  SetVariableInsn.prototype.constructor = SetVariableInsn;
  ThrowInsn.prototype = Object.create(Insn.prototype);
  ThrowInsn.prototype.constructor = ThrowInsn;
  TypeofInsn.prototype = Object.create(Insn.prototype);
  TypeofInsn.prototype.constructor = TypeofInsn;
  UnaryNegativeOperationInsn.prototype = Object.create(Insn.prototype);
  UnaryNegativeOperationInsn.prototype.constructor = UnaryNegativeOperationInsn;
  UnaryNotOperationInsn.prototype = Object.create(Insn.prototype);
  UnaryNotOperationInsn.prototype.constructor = UnaryNotOperationInsn;
  UnaryPositiveOperationInsn.prototype = Object.create(Insn.prototype);
  UnaryPositiveOperationInsn.prototype.constructor = UnaryPositiveOperationInsn;
  UnaryTruthOperationInsn.prototype = Object.create(Insn.prototype);
  UnaryTruthOperationInsn.prototype.constructor = UnaryTruthOperationInsn;
  IllegalConstantIndexException.prototype = Object.create(RuntimeException.prototype);
  IllegalConstantIndexException.prototype.constructor = IllegalConstantIndexException;
  StackUnderflowException.prototype = Object.create(NoSuchElementException.prototype);
  StackUnderflowException.prototype.constructor = StackUnderflowException;
  TokenType.prototype = Object.create(Enum.prototype);
  TokenType.prototype.constructor = TokenType;
  BinaryOperationType.prototype = Object.create(Enum.prototype);
  BinaryOperationType.prototype.constructor = BinaryOperationType;
  UnaryOperationType.prototype = Object.create(Enum.prototype);
  UnaryOperationType.prototype.constructor = UnaryOperationType;
  LAnyException.prototype = Object.create(RuntimeException.prototype);
  LAnyException.prototype.constructor = LAnyException;
  Returned.prototype = Object.create(VMResult.prototype);
  Returned.prototype.constructor = Returned;
  Thrown.prototype = Object.create(VMResult.prototype);
  Thrown.prototype.constructor = Thrown;
  Comparison.prototype = Object.create(Enum.prototype);
  Comparison.prototype.constructor = Comparison;
  GT.prototype = Object.create(Comparison.prototype);
  GT.prototype.constructor = GT;
  GTE.prototype = Object.create(Comparison.prototype);
  GTE.prototype.constructor = GTE;
  LT.prototype = Object.create(Comparison.prototype);
  LT.prototype.constructor = LT;
  LTE.prototype = Object.create(Comparison.prototype);
  LTE.prototype.constructor = LTE;
  MutableScope.prototype = Object.create(Scope.prototype);
  MutableScope.prototype.constructor = MutableScope;
  AbstractMutableScope.prototype = Object.create(MutableScope.prototype);
  AbstractMutableScope.prototype.constructor = AbstractMutableScope;
  DefaultMutableScope.prototype = Object.create(AbstractMutableScope.prototype);
  DefaultMutableScope.prototype.constructor = DefaultMutableScope;
  ImmutableMapScope.prototype = Object.create(Scope.prototype);
  ImmutableMapScope.prototype.constructor = ImmutableMapScope;
  LArray.prototype = Object.create(LAny.prototype);
  LArray.prototype.constructor = LArray;
  LFunction.prototype = Object.create(LAny.prototype);
  LFunction.prototype.constructor = LFunction;
  LCompiledFunction.prototype = Object.create(LFunction.prototype);
  LCompiledFunction.prototype.constructor = LCompiledFunction;
  LNumber.prototype = Object.create(LAny.prototype);
  LNumber.prototype.constructor = LNumber;
  LDecimal.prototype = Object.create(LNumber.prototype);
  LDecimal.prototype.constructor = LDecimal;
  LFalse.prototype = Object.create(LAny.prototype);
  LFalse.prototype.constructor = LFalse;
  LInteger.prototype = Object.create(LNumber.prototype);
  LInteger.prototype.constructor = LInteger;
  LNativeFunction.prototype = Object.create(LFunction.prototype);
  LNativeFunction.prototype.constructor = LNativeFunction;
  LNull.prototype = Object.create(LAny.prototype);
  LNull.prototype.constructor = LNull;
  LObject.prototype = Object.create(LAny.prototype);
  LObject.prototype.constructor = LObject;
  LRange.prototype = Object.create(LAny.prototype);
  LRange.prototype.constructor = LRange;
  LString.prototype = Object.create(LAny.prototype);
  LString.prototype.constructor = LString;
  LTrue.prototype = Object.create(LAny.prototype);
  LTrue.prototype.constructor = LTrue;
  function filterNotNull(_this_) {
    return filterNotNullTo(_this_, ArrayList_init_$Create$());
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0;
  }
  function filterNotNullTo(_this_, destination) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!(element == null)) {
        destination.add_2bq_k$(element);
        Unit_getInstance();
      }}
    return destination;
  }
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last_0);
    } else {
      var inductionVariable_0 = 0;
      var last_1 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_1)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_1);
    }
    return -1;
  }
  function _get_lastIndex_(_this_) {
    return _this_.length - 1 | 0;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    $l$break: while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function first(_this_) {
    if (_this_.isEmpty_0_k$())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_ha5a7z_k$(0);
  }
  function last(_this_) {
    if (_this_.isEmpty_0_k$())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_ha5a7z_k$(_get_lastIndex__0(_this_));
  }
  function getOrNull(_this_, index) {
    return (index >= 0 ? index <= _get_lastIndex__0(_this_) : false) ? _this_.get_ha5a7z_k$(index) : null;
  }
  function toList(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__0_k$();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_ha5a7z_k$(0);
          } else {
            {
              tmp_0 = _this_.iterator_0_k$().next_0_k$();
            }
          }

          tmp = listOf_0(tmp_0);
          break;
        default:tmp = toMutableList(_this_);
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlyList(toMutableList_0(_this_));
  }
  function asSequence(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1(_this_);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function lastOrNull(_this_) {
    return _this_.isEmpty_0_k$() ? null : _this_.get_ha5a7z_k$(_this_._get_size__0_k$() - 1 | 0);
  }
  function reversed(_this_) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__0_k$() <= 1;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return toList(_this_);
    else {
    }
    var list = toMutableList_0(_this_);
    reverse(list);
    return list;
  }
  function toMutableList(_this_) {
    return ArrayList_init_$Create$_1(_this_);
  }
  function plus(_this_, elements) {
    if (isInterface(elements, Collection)) {
      var result = ArrayList_init_$Create$_0(_this_._get_size__0_k$() + elements._get_size__0_k$() | 0);
      result.addAll_dxd4eo_k$(_this_);
      Unit_getInstance();
      result.addAll_dxd4eo_k$(elements);
      Unit_getInstance();
      return result;
    } else {
      {
        var result_0 = ArrayList_init_$Create$_1(_this_);
        addAll(result_0, elements);
        Unit_getInstance();
        return result_0;
      }
    }
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function sortedWith(_this_, comparator) {
    if (isInterface(_this_, Collection)) {
      if (_this_._get_size__0_k$() <= 1)
        return toList(_this_);
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_toTypedArray_0 = _this_;
          tmp$ret$0 = copyToArray_0(tmp0_toTypedArray_0);
          break $l$block;
        }
        var tmp = tmp$ret$0;
        var tmp1_apply_0 = isArray(tmp) ? tmp : THROW_CCE();
        {
        }
        {
          sortWith_0(tmp1_apply_0, comparator);
        }
        tmp$ret$1 = tmp1_apply_0;
        break $l$block_0;
      }
      return asList(tmp$ret$1);
    } else {
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp2_apply_0 = toMutableList_0(_this_);
      {
      }
      {
        sortWith(tmp2_apply_0, comparator);
      }
      tmp$ret$2 = tmp2_apply_0;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toMutableList_0(_this_) {
    if (isInterface(_this_, Collection))
      return toMutableList(_this_);
    else {
    }
    return toCollection(_this_, ArrayList_init_$Create$());
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_0_k$();
    $l$break: while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function toCollection(_this_, destination) {
    var tmp0_iterator = _this_.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var item = tmp0_iterator.next_0_k$();
      destination.add_2bq_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function single(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return single_0(_this_);
    else {
      {
        var iterator = _this_.iterator_0_k$();
        if (!iterator.hasNext_0_k$())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single_1 = iterator.next_0_k$();
        if (iterator.hasNext_0_k$())
          throw IllegalArgumentException_init_$Create$('Collection has more than one element.');
        return single_1;
      }
    }
  }
  function single_0(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this_.get_ha5a7z_k$(0);
        break;
      default:throw IllegalArgumentException_init_$Create$('List has more than one element.');
    }
    return tmp;
  }
  function _no_name_provided__1($this_asSequence) {
    this._$this_asSequence = $this_asSequence;
  }
  _no_name_provided__1.prototype.iterator_2_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._$this_asSequence.iterator_0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__1.prototype.iterator_0_k$ = function () {
    return this.iterator_2_0_k$();
  };
  _no_name_provided__1.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Sequence]
  };
  function asSequence_0(_this_) {
    return asSequence(_this_._get_entries__0_k$());
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE)
      return Companion_getInstance_6()._EMPTY;
    return numberRangeToNumber(_this_, to_0 - 1 | 0);
  }
  function downTo(_this_, to_0) {
    return Companion_getInstance_4().fromClosedRange_fcwjfj_k$(_this_, to_0, -1);
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue.compareTo_wiekkq_k$(maximumValue) > 0)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_.compareTo_wiekkq_k$(minimumValue) < 0)
      return minimumValue;
    if (_this_.compareTo_wiekkq_k$(maximumValue) > 0)
      return maximumValue;
    return _this_;
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_;
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function coerceIn_0(_this_, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_ < minimumValue)
      return minimumValue;
    if (_this_ > maximumValue)
      return maximumValue;
    return _this_;
  }
  function map(_this_, transform) {
    return new TransformingSequence(_this_, transform);
  }
  function dropLast(_this_, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Requested character count ' + n + ' is less than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_2));
      }}
    return take(_this_, coerceAtLeast(_this_.length - n | 0, 0));
  }
  function take(_this_, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Requested character count ' + n + ' is less than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_2));
      }}
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_substring_0 = coerceAtMost(n, _this_.length);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this_;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.substring(0, tmp1_substring_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function first_0(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(_this_) === 0;
      break $l$block;
    }
    if (tmp$ret$0)
      throw NoSuchElementException_init_$Create$_0('Char sequence is empty.');
    else {
    }
    return charSequenceGet(_this_, 0);
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_2bq_k$ = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_2bq_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_2bq_k$ = function (element) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = equals_0(element_2, element);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2bq_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_2bq_k$(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkPositionIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkRangeIndexes_zd700_k$ = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.checkBoundsIndexes_zd700_k$ = function (startIndex, endIndex, size) {
    if (startIndex < 0 ? true : endIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'startIndex: ' + startIndex + ', endIndex: ' + endIndex + ', size: ' + size);
    }if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'startIndex: ' + startIndex + ' > endIndex: ' + endIndex);
    }};
  Companion_0.prototype.orderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var e = tmp0_iterator.next_0_k$();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals_tuq55s_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var otherIterator = other.iterator_0_k$();
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var elem = tmp0_iterator.next_0_k$();
      var elemOther = otherIterator.next_0_k$();
      if (!equals_0(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_firstOrNull_0 = $this._get_entries__0_k$();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = equals_0(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode_4vm2wp_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp2_safe_receiver_4 = e._get_key__0_k$();
        var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
        var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
        var tmp0_safe_receiver_6 = e._get_value__0_k$();
        var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
        tmp$ret$0 = tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_1.prototype.entryToString_4vm2wp_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = '' + e._get_key__0_k$() + '=' + e._get_value__0_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_1.prototype.entryEquals_caydzc_k$ = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_0(e._get_key__0_k$(), other._get_key__0_k$()) ? equals_0(e._get_value__0_k$(), other._get_value__0_k$()) : false;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__0(this$0) {
    this._this$0_0 = this$0;
  }
  _no_name_provided__0.prototype.invoke_4v0zae_k$ = function (it) {
    return this._this$0_0.toString_4v0zae_k$(it);
  };
  _no_name_provided__0.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_4v0zae_k$((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_2bw_k$ = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_7gsh9e_k$ = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__0_k$();
    var value = entry._get_value__0_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = (isInterface(this, Map_0) ? this : THROW_CCE()).get_2bw_k$(key);
      break $l$block;
    }
    var ourValue = tmp$ret$0;
    if (!equals_0(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = (isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2bw_k$(key);
        break $l$block_0;
      }
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block_2: {
      var tmp0_all_0 = other._get_entries__0_k$();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.containsEntry_7gsh9e_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__0_k$());
  };
  AbstractMap.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractMap.prototype._get_size__0_k$ = function () {
    return this._get_entries__0_k$()._get_size__0_k$();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__0_k$();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_4v0zae_k$ = function (entry) {
    return toString(this, entry._get_key__0_k$()) + '=' + toString(this, entry._get_value__0_k$());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_4v0zae_k$(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals_qlktm2_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = c.containsAll_dxd4eo_k$(other);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function listOf(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function _get_lastIndex__0(_this_) {
    return _this_._get_size__0_k$() - 1 | 0;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function ArrayAsCollection(values, isVarargs) {
    this._values = values;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__0_k$ = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = this._values;
      tmp$ret$0 = tmp0_isEmpty_0.length === 0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.contains_2c5_k$ = function (element) {
    return contains(this._values, element);
  };
  ArrayAsCollection.prototype.containsAll_dxd41r_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2c5_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_dxd41r_k$(elements);
  };
  ArrayAsCollection.prototype.iterator_0_k$ = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function rangeCheck(size, fromIndex, toIndex) {
    if (fromIndex > toIndex)
      throw IllegalArgumentException_init_$Create$('' + 'fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    else if (fromIndex < 0)
      throw IndexOutOfBoundsException_init_$Create$('' + 'fromIndex (' + fromIndex + ') is less than zero.');
    else if (toIndex > size)
      throw IndexOutOfBoundsException_init_$Create$('' + 'toIndex (' + toIndex + ') is greater than size (' + size + ').');
  }
  function binarySearch(_this_, fromIndex, toIndex, comparison) {
    rangeCheck(_this_._get_size__0_k$(), fromIndex, toIndex);
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1;
      var midVal = _this_.get_ha5a7z_k$(mid);
      var cmp = comparison(midVal);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__0_k$ = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_0_k$ = function () {
    return true;
  };
  EmptyList.prototype.containsAll_lwol4p_k$ = function (elements) {
    return elements.isEmpty_0_k$();
  };
  EmptyList.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_lwol4p_k$(elements);
  };
  EmptyList.prototype.get_ha5a7z_k$ = function (index) {
    throw IndexOutOfBoundsException_init_$Create$('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.iterator_0_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_0_k$ = function () {
    return false;
  };
  EmptyIterator.prototype.next_0_k$ = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf_0(_this_.get_ha5a7z_k$(0));
      default:return _this_;
    }
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__0_k$();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function getOrImplicitDefault(_this_, key) {
    if (isInterface(_this_, MapWithDefault))
      return _this_.getOrImplicitDefault_2bw_k$(key);
    else {
    }
    var tmp$ret$0;
    $l$block: {
      var value_1 = _this_.get_2bw_k$(key);
      if (value_1 == null ? !_this_.containsKey_2bw_k$(key) : false) {
        throw NoSuchElementException_init_$Create$_0('' + 'Key ' + key + ' is missing in the map.');
      } else {
        tmp$ret$0 = (value_1 == null ? true : isObject(value_1)) ? value_1 : THROW_CCE();
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function MapWithDefault() {
  }
  MapWithDefault.$metadata$ = {
    simpleName: 'MapWithDefault',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function getValue(_this_, key) {
    return getOrImplicitDefault(_this_, key);
  }
  function toMap(_this_) {
    var tmp0_subject = _this_._get_size__0_k$();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = emptyMap();
        break;
      case 1:
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toMutableMap(_this_);
          break $l$block;
        }

        tmp = tmp$ret$0;
        break;
      default:tmp = toMutableMap(_this_);
        break;
    }
    return tmp;
  }
  function toMap_0(_this_, destination) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        putAll(destination, _this_);
      }
      tmp$ret$0 = destination;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map_0) ? tmp : THROW_CCE();
  }
  function toMutableMap(_this_) {
    return LinkedHashMap_init_$Create$_1(_this_);
  }
  function putAll(_this_, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.component1_0_k$();
      var value = tmp1_loop_parameter.component2_0_k$();
      _this_.put_1q9pf_k$(key, value);
      Unit_getInstance();
    }
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this._serialVersionUID_0 = new Long(-888910638, 1920087921);
  }
  EmptyMap.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map_0) : false) {
      tmp = other.isEmpty_0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyMap.prototype.hashCode = function () {
    return 0;
  };
  EmptyMap.prototype.toString = function () {
    return '{}';
  };
  EmptyMap.prototype._get_size__0_k$ = function () {
    return 0;
  };
  EmptyMap.prototype.isEmpty_0_k$ = function () {
    return true;
  };
  EmptyMap.prototype.containsKey_wi7j7l_k$ = function (key) {
    return false;
  };
  EmptyMap.prototype.containsKey_2bw_k$ = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    else {
    }
    return this.containsKey_wi7j7l_k$((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.get_wi7j7l_k$ = function (key) {
    return null;
  };
  EmptyMap.prototype.get_2bw_k$ = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    else {
    }
    return this.get_wi7j7l_k$((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype._get_entries__0_k$ = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.$metadata$ = {
    simpleName: 'EmptyMap',
    kind: 'object',
    interfaces: [Map_0, Serializable]
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function removeLast(_this_) {
    var tmp;
    if (_this_.isEmpty_0_k$()) {
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    } else {
      tmp = _this_.removeAt_ha5a7z_k$(_get_lastIndex__0(_this_));
    }
    return tmp;
  }
  function removeLastOrNull(_this_) {
    return _this_.isEmpty_0_k$() ? null : _this_.removeAt_ha5a7z_k$(_get_lastIndex__0(_this_));
  }
  function removeFirst(_this_) {
    var tmp;
    if (_this_.isEmpty_0_k$()) {
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    } else {
      tmp = _this_.removeAt_ha5a7z_k$(0);
    }
    return tmp;
  }
  function removeFirstOrNull(_this_) {
    return _this_.isEmpty_0_k$() ? null : _this_.removeAt_ha5a7z_k$(0);
  }
  function addAll(_this_, elements) {
    var tmp0_subject = elements;
    if (isInterface(tmp0_subject, Collection))
      return _this_.addAll_dxd4eo_k$(elements);
    else {
      {
        var result = false;
        var tmp1_iterator = elements.iterator_0_k$();
        while (tmp1_iterator.hasNext_0_k$()) {
          var item = tmp1_iterator.next_0_k$();
          if (_this_.add_2bq_k$(item))
            result = true;
        }
        return result;
      }
    }
  }
  function addAll_0(_this_, elements) {
    return _this_.addAll_dxd4eo_k$(asList(elements));
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided__2(this$0) {
    this._this$0_1 = this$0;
    this._iterator = this._this$0_1._sequence.iterator_0_k$();
  }
  _no_name_provided__2.prototype.next_0_k$ = function () {
    return this._this$0_1._transformer(this._iterator.next_0_k$());
  };
  _no_name_provided__2.prototype.hasNext_0_k$ = function () {
    return this._iterator.hasNext_0_k$();
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TransformingSequence(sequence, transformer) {
    this._sequence = sequence;
    this._transformer = transformer;
  }
  TransformingSequence.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__2(this);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function EmptySet() {
    EmptySet_instance = this;
    this._serialVersionUID_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype._get_size__0_k$ = function () {
    return 0;
  };
  EmptySet.prototype.isEmpty_0_k$ = function () {
    return true;
  };
  EmptySet.prototype.containsAll_lwol4p_k$ = function (elements) {
    return elements.isEmpty_0_k$();
  };
  EmptySet.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_lwol4p_k$(elements);
  };
  EmptySet.prototype.iterator_0_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = {
    simpleName: 'EmptySet',
    kind: 'object',
    interfaces: [Set, Serializable]
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function compareValues(a, b) {
    if (a === b)
      return 0;
    if (a == null)
      return -1;
    if (b == null)
      return 1;
    return compareTo((!(a == null) ? isComparable(a) : false) ? a : THROW_CCE(), b);
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_v1o70a_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_v1o70a_k$(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_wi8o78_k$(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_v1o70a_k$(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this_);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (thisUpper.equals(otherUpper)) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              var tmp0_asDynamic_0 = thisUpper.toString();
              tmp$ret$0 = tmp0_asDynamic_0;
              break $l$block;
            }
            var tmp1_unsafeCast_0 = tmp$ret$0.toLowerCase();
            tmp$ret$1 = tmp1_unsafeCast_0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
        break $l$block_2;
      }
      var tmp_0 = tmp$ret$3;
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_asDynamic_0 = otherUpper.toString();
              tmp$ret$4 = tmp2_asDynamic_0;
              break $l$block_3;
            }
            var tmp3_unsafeCast_0 = tmp$ret$4.toLowerCase();
            tmp$ret$5 = tmp3_unsafeCast_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
        break $l$block_6;
      }
      tmp = tmp_0.equals(tmp$ret$7);
    }
    return tmp;
  }
  function toIntOrNull(_this_, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this_.length;
    if (length === 0)
      return null;
    var start;
    var isNegative_0;
    var limit;
    var firstChar = charSequenceGet(_this_, 0);
    if (firstChar.compareTo_wi8o78_k$(new Char(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar.equals(new Char(45))) {
        isNegative_0 = true;
        limit = IntCompanionObject_getInstance()._MIN_VALUE;
      } else if (firstChar.equals(new Char(43))) {
        isNegative_0 = false;
        limit = -IntCompanionObject_getInstance()._MAX_VALUE | 0;
      } else
        return null;
    } else {
      start = 0;
      isNegative_0 = false;
      limit = -IntCompanionObject_getInstance()._MAX_VALUE | 0;
    }
    var limitForMaxRadix = (-IntCompanionObject_getInstance()._MAX_VALUE | 0) / 36 | 0;
    var limitBeforeMul = limitForMaxRadix;
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this_, i), radix);
        if (digit < 0)
          return null;
        if (result < limitBeforeMul) {
          if (limitBeforeMul === limitForMaxRadix) {
            limitBeforeMul = limit / radix | 0;
            if (result < limitBeforeMul) {
              return null;
            }} else {
            return null;
          }
        }result = imul(result, radix);
        if (result < (limit + digit | 0))
          return null;
        result = result - digit | 0;
      }
       while (inductionVariable < length);
    return isNegative_0 ? result : -result | 0;
  }
  function numberFormatError(input) {
    throw NumberFormatException_init_$Create$('' + "Invalid number format: '" + input + "'");
  }
  function toLongOrNull(_this_) {
    return toLongOrNull_0(_this_, 10);
  }
  function toLongOrNull_0(_this_, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this_.length;
    if (length === 0)
      return null;
    var start;
    var isNegative_0;
    var limit;
    var firstChar = charSequenceGet(_this_, 0);
    if (firstChar.compareTo_wi8o78_k$(new Char(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar.equals(new Char(45))) {
        isNegative_0 = true;
        Companion_getInstance_11();
        limit = new Long(0, -2147483648);
      } else if (firstChar.equals(new Char(43))) {
        isNegative_0 = false;
        Companion_getInstance_11();
        limit = (new Long(-1, 2147483647)).unaryMinus_0_k$();
      } else
        return null;
    } else {
      start = 0;
      isNegative_0 = false;
      Companion_getInstance_11();
      limit = (new Long(-1, 2147483647)).unaryMinus_0_k$();
    }
    var tmp$ret$0;
    $l$block: {
      Companion_getInstance_11();
      var tmp0_div_0 = (new Long(-1, 2147483647)).unaryMinus_0_k$();
      tmp$ret$0 = tmp0_div_0.div_wiekkq_k$(new Long(36, 0));
      break $l$block;
    }
    var limitForMaxRadix = tmp$ret$0;
    var limitBeforeMul = limitForMaxRadix;
    var result = new Long(0, 0);
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this_, i), radix);
        if (digit < 0)
          return null;
        if (result.compareTo_wiekkq_k$(limitBeforeMul) < 0) {
          if (limitBeforeMul.equals(limitForMaxRadix)) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = limit.div_wiekkq_k$(toLong_0(radix));
              break $l$block_0;
            }
            limitBeforeMul = tmp$ret$1;
            if (result.compareTo_wiekkq_k$(limitBeforeMul) < 0) {
              return null;
            }} else {
            return null;
          }
        }var tmp$ret$2;
        $l$block_1: {
          var tmp1_times_0 = result;
          tmp$ret$2 = tmp1_times_0.times_wiekkq_k$(toLong_0(radix));
          break $l$block_1;
        }
        result = tmp$ret$2;
        var tmp = result;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = limit.plus_wiekkq_k$(toLong_0(digit));
          break $l$block_2;
        }
        if (tmp.compareTo_wiekkq_k$(tmp$ret$3) < 0)
          return null;
        else {
        }
        var tmp$ret$4;
        $l$block_3: {
          var tmp2_minus_0 = result;
          tmp$ret$4 = tmp2_minus_0.minus_wiekkq_k$(toLong_0(digit));
          break $l$block_3;
        }
        result = tmp$ret$4;
      }
       while (inductionVariable < length);
    return isNegative_0 ? result : result.unaryMinus_0_k$();
  }
  function padStart(_this_, length, padChar) {
    return toString_1(padStart_0(isCharSequence(_this_) ? _this_ : THROW_CCE(), length, padChar));
  }
  function _get_lastIndex__1(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function indexOf_0(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this_);
      tmp = indexOf$default_0(_this_, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeIndexOf_0 = _this_;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.indexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function indexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_0(_this_, string, startIndex, ignoreCase);
  }
  function lineSequence(_this_) {
    return splitToSequence$default(_this_, ['\r\n', '\n', '\r'], false, 0, 6, null);
  }
  function requireNonNegativeLimit(limit) {
    var tmp0_require_0 = limit >= 0;
    {
    }
    var tmp;
    if (!tmp0_require_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = '' + 'Limit must be non-negative, but was ' + limit;
        break $l$block;
      }
      var message_2 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_1(message_2));
    }return tmp;
  }
  function _get_indices_(_this_) {
    return numberRangeToNumber(0, charSequenceLength(_this_) - 1 | 0);
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function padStart_0(_this_, length, padChar) {
    if (length < 0)
      throw IllegalArgumentException_init_$Create$('' + 'Desired length ' + length + ' is less than zero.');
    if (length <= charSequenceLength(_this_))
      return charSequenceSubSequence(_this_, 0, charSequenceLength(_this_));
    var sb = StringBuilder_init_$Create$(length);
    var inductionVariable = 1;
    var last_0 = length - charSequenceLength(_this_) | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sb.append_wi8o78_k$(padChar);
        Unit_getInstance();
      }
       while (!(i === last_0));
    sb.append_v1o70a_k$(_this_);
    Unit_getInstance();
    return sb;
  }
  function indexOf_1(_this_, other, startIndex, endIndex, ignoreCase, last_0) {
    var indices = !last_0 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this_))) : downTo(coerceAtMost(startIndex, _get_lastIndex__1(_this_)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this_ === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._first_0;
      var last_1 = indices._last;
      var step = indices._step_1;
      if ((step > 0 ? inductionVariable <= last_1 : false) ? true : step < 0 ? last_1 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this_, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_1));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_2 = indices._last;
        var step_0 = indices._step_1;
        if ((step_0 > 0 ? inductionVariable_0 <= last_2 : false) ? true : step_0 < 0 ? last_2 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            if (regionMatchesImpl(other, 0, _this_, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_2));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this_, other, startIndex, endIndex, ignoreCase, last_0, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last_0 = false;
    return indexOf_1(_this_, other, startIndex, endIndex, ignoreCase, last_0);
  }
  function splitToSequence(_this_, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this_, delimiters, 0, ignoreCase, limit, 2, null);
    return map(tmp, _no_name_provided_$factory_1(_this_));
  }
  function splitToSequence$default(_this_, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this_, delimiters, ignoreCase, limit);
  }
  function substring(_this_, range) {
    return toString_1(charSequenceSubSequence(_this_, range._get_start__0_k$(), range._get_endInclusive__0_k$() + 1 | 0));
  }
  function rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this_, startIndex, limit, _no_name_provided_$factory_2(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this_, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit);
  }
  function calcNext($this) {
    if ($this._nextSearchIndex < 0) {
      $this._nextState = 0;
      $this._nextItem = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this._this$0_2._limit > 0) {
        var tmp0_this = $this;
        tmp0_this._counter = tmp0_this._counter + 1 | 0;
        tmp_0 = tmp0_this._counter >= $this._this$0_2._limit;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this._nextSearchIndex > charSequenceLength($this._this$0_2._input);
        }
      }
      if (tmp) {
        $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__1($this._this$0_2._input));
        $this._nextSearchIndex = -1;
      } else {
        {
          var match = $this._this$0_2._getNextMatch($this._this$0_2._input, $this._nextSearchIndex);
          if (match == null) {
            $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__1($this._this$0_2._input));
            $this._nextSearchIndex = -1;
          } else {
            var tmp1_container = match;
            var index = tmp1_container.component1_0_k$();
            var length = tmp1_container.component2_0_k$();
            $this._nextItem = until($this._currentStartIndex, index);
            $this._currentStartIndex = index + length | 0;
            $this._nextSearchIndex = $this._currentStartIndex + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this._nextState = 1;
    }
  }
  function _no_name_provided__3(this$0) {
    this._this$0_2 = this$0;
    this._nextState = -1;
    this._currentStartIndex = coerceIn_0(this._this$0_2._startIndex, 0, charSequenceLength(this._this$0_2._input));
    this._nextSearchIndex = this._currentStartIndex;
    this._nextItem = null;
    this._counter = 0;
  }
  _no_name_provided__3.prototype.next_0_k$ = function () {
    if (this._nextState === -1)
      calcNext(this);
    if (this._nextState === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this._nextItem = null;
    this._nextState = -1;
    return result;
  };
  _no_name_provided__3.prototype.hasNext_0_k$ = function () {
    if (this._nextState === -1)
      calcNext(this);
    return this._nextState === 1;
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this._input = input;
    this._startIndex = startIndex;
    this._limit = limit;
    this._getNextMatch = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__3(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this_, strings, startIndex, ignoreCase, last_0) {
    if (!ignoreCase ? strings._get_size__0_k$() === 1 : false) {
      var string = single(strings);
      var tmp;
      if (!last_0) {
        tmp = indexOf$default(_this_, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this_, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }var indices = !last_0 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this_)) : downTo(coerceAtMost(startIndex, _get_lastIndex__1(_this_)), 0);
    if (typeof _this_ === 'string') {
      var inductionVariable = indices._first_0;
      var last_1 = indices._last;
      var step = indices._step_1;
      if ((step > 0 ? inductionVariable <= last_1 : false) ? true : step < 0 ? last_1 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block_1: {
            var tmp0_iterator_1 = strings.iterator_0_k$();
            while (tmp0_iterator_1.hasNext_0_k$()) {
              var element_2 = tmp0_iterator_1.next_0_k$();
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = regionMatches(element_2, 0, _this_, index_0, element_2.length, ignoreCase);
                break $l$block;
              }
              if (tmp$ret$0) {
                tmp$ret$1 = element_2;
                break $l$block_1;
              } else {
              }
            }
            tmp$ret$1 = null;
            break $l$block_1;
          }
          var matchingString = tmp$ret$1;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_1));
    } else {
      {
        var inductionVariable_0 = indices._first_0;
        var last_2 = indices._last;
        var step_0 = indices._step_1;
        if ((step_0 > 0 ? inductionVariable_0 <= last_2 : false) ? true : step_0 < 0 ? last_2 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var tmp$ret$3;
            $l$block_4: {
              var tmp0_iterator_1_0 = strings.iterator_0_k$();
              while (tmp0_iterator_1_0.hasNext_0_k$()) {
                var element_2_0 = tmp0_iterator_1_0.next_0_k$();
                var tmp$ret$2;
                $l$block_2: {
                  tmp$ret$2 = regionMatchesImpl(element_2_0, 0, _this_, index_1, element_2_0.length, ignoreCase);
                  break $l$block_2;
                }
                if (tmp$ret$2) {
                  tmp$ret$3 = element_2_0;
                  break $l$block_4;
                } else {
                }
              }
              tmp$ret$3 = null;
              break $l$block_4;
            }
            var matchingString_0 = tmp$ret$3;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_2));
      }
    }
    return null;
  }
  function lastIndexOf(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_1(_this_, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeLastIndexOf_0 = _this_;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeLastIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.lastIndexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__1(_this_);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this_, string, startIndex, ignoreCase);
  }
  function substring_0(_this_, range) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = range._get_start__0_k$();
      var tmp1_substring_0 = range._get_endInclusive__0_k$() + 1 | 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring_0, tmp1_substring_0);
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function findAnyOf_0(_this_, strings, startIndex, ignoreCase) {
    return findAnyOf(_this_, strings, startIndex, ignoreCase, false);
  }
  function findAnyOf$default(_this_, strings, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return findAnyOf_0(_this_, strings, startIndex, ignoreCase);
  }
  function _no_name_provided__4($this_splitToSequence) {
    this._$this_splitToSequence = $this_splitToSequence;
  }
  _no_name_provided__4.prototype.invoke_em8bnc_k$ = function (it) {
    return substring(this._$this_splitToSequence, it);
  };
  _no_name_provided__4.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_em8bnc_k$(p1 instanceof IntRange ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5($delimitersList, $ignoreCase) {
    this._$delimitersList = $delimitersList;
    this._$ignoreCase = $ignoreCase;
  }
  _no_name_provided__5.prototype.invoke_w2qdfo_k$ = function ($this$$receiver, currentIndex) {
    var tmp0_safe_receiver = findAnyOf($this$$receiver, this._$delimitersList, currentIndex, this._$ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = to(tmp0_safe_receiver._first, tmp0_safe_receiver._second.length);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  _no_name_provided__5.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_w2qdfo_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_1($this_splitToSequence) {
    var i = new _no_name_provided__4($this_splitToSequence);
    return function (p1) {
      return i.invoke_em8bnc_k$(p1);
    };
  }
  function _no_name_provided_$factory_2($delimitersList, $ignoreCase) {
    var i = new _no_name_provided__5($delimitersList, $ignoreCase);
    return function (p1, p2) {
      return i.invoke_w2qdfo_k$(p1, p2);
    };
  }
  function _Duration___init__impl_(rawValue) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = true;
      break $l$block;
    }
    if (tmp$ret$0) {
      if (isInNanos(rawValue)) {
        var containsLower = new Long(387905, -1073741824);
        var containsUpper = new Long(-387905, 1073741823);
        var containsArg = _get_value_(rawValue);
        if (!(containsLower.compareTo_wiekkq_k$(containsArg) <= 0 ? containsArg.compareTo_wiekkq_k$(containsUpper) <= 0 : false))
          throw AssertionError_init_$Create$('' + _get_value_(rawValue) + ' ns is out of nanoseconds range');
        else {
        }
      } else {
        var containsLower_0 = new Long(1, -1073741824);
        var containsUpper_0 = new Long(-1, 1073741823);
        var containsArg_0 = _get_value_(rawValue);
        if (!(containsLower_0.compareTo_wiekkq_k$(containsArg_0) <= 0 ? containsArg_0.compareTo_wiekkq_k$(containsUpper_0) <= 0 : false))
          throw AssertionError_init_$Create$('' + _get_value_(rawValue) + ' ms is out of milliseconds range');
        else {
        }
        var containsLower_1 = new Long(1108857478, -1074);
        var containsUpper_1 = new Long(-1108857478, 1073);
        var containsArg_1 = _get_value_(rawValue);
        if (containsLower_1.compareTo_wiekkq_k$(containsArg_1) <= 0 ? containsArg_1.compareTo_wiekkq_k$(containsUpper_1) <= 0 : false)
          throw AssertionError_init_$Create$('' + _get_value_(rawValue) + ' ms is denormalized');
        else {
        }
      }
    } else {
    }
    return rawValue;
  }
  function _get_rawValue_($this) {
    return $this;
  }
  function _get_value_($this) {
    return _get_rawValue_($this).shr_ha5a7z_k$(1);
  }
  function isInNanos($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _get_rawValue_($this).toInt_0_k$() & 1;
      break $l$block;
    }
    return tmp$ret$0 === 0;
  }
  function isInMillis($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _get_rawValue_($this).toInt_0_k$() & 1;
      break $l$block;
    }
    return tmp$ret$0 === 1;
  }
  function _get_storageUnit_($this) {
    return isInNanos($this) ? DurationUnit_NANOSECONDS_getInstance() : DurationUnit_MILLISECONDS_getInstance();
  }
  function Companion_3() {
    Companion_instance_2 = this;
    this._ZERO = _Duration___init__impl_(new Long(0, 0));
    this._INFINITE = durationOfMillis(new Long(-1, 1073741823));
    this._NEG_INFINITE = durationOfMillis(new Long(1, -1073741824));
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function Duration__unaryMinus_impl(this_0) {
    var tmp = _get_value_(this_0).unaryMinus_0_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _get_rawValue_(this_0).toInt_0_k$() & 1;
      break $l$block;
    }
    return durationOf(tmp, tmp$ret$0);
  }
  function Duration__plus_impl(this_0, other) {
    if (Duration__isInfinite_impl(this_0)) {
      if (Duration__isFinite_impl(other) ? true : _get_rawValue_(this_0).xor_wiekkq_k$(_get_rawValue_(other)).compareTo_wiekkq_k$(new Long(0, 0)) >= 0)
        return this_0;
      else
        throw IllegalArgumentException_init_$Create$('Summing infinite durations of different signs yields an undefined result.');
    } else if (Duration__isInfinite_impl(other))
      return other;
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _get_rawValue_(this_0).toInt_0_k$() & 1;
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _get_rawValue_(other).toInt_0_k$() & 1;
      break $l$block_0;
    }
    if (tmp_0 === tmp$ret$1) {
      var result = _get_value_(this_0).plus_wiekkq_k$(_get_value_(other));
      tmp = isInNanos(this_0) ? durationOfNanosNormalized(result) : durationOfMillisNormalized(result);
    } else {
      if (isInMillis(this_0)) {
        tmp = addValuesMixedRanges(this_0, _get_value_(this_0), _get_value_(other));
      } else {
        {
          tmp = addValuesMixedRanges(this_0, _get_value_(other), _get_value_(this_0));
        }
      }
    }
    return tmp;
  }
  function addValuesMixedRanges($this, thisMillis, otherNanos) {
    var otherMillis = nanosToMillis(otherNanos);
    var resultMillis = thisMillis.plus_wiekkq_k$(otherMillis);
    var tmp;
    var containsLower = new Long(1108857478, -1074);
    if (resultMillis.compareTo_wiekkq_k$(new Long(-1108857478, 1073)) <= 0 ? containsLower.compareTo_wiekkq_k$(resultMillis) <= 0 : false) {
      var otherNanoRemainder = otherNanos.minus_wiekkq_k$(millisToNanos(otherMillis));
      tmp = durationOfNanos(millisToNanos(resultMillis).plus_wiekkq_k$(otherNanoRemainder));
    } else {
      {
        tmp = durationOfMillis(coerceIn(resultMillis, new Long(1, -1073741824), new Long(-1, 1073741823)));
      }
    }
    return tmp;
  }
  function Duration__minus_impl(this_0, other) {
    return Duration__plus_impl(this_0, Duration__unaryMinus_impl(other));
  }
  function Duration__isNegative_impl(this_0) {
    return _get_rawValue_(this_0).compareTo_wiekkq_k$(new Long(0, 0)) < 0;
  }
  function Duration__isInfinite_impl(this_0) {
    return _get_rawValue_(this_0).equals(_get_rawValue_(Companion_getInstance_2()._INFINITE)) ? true : _get_rawValue_(this_0).equals(_get_rawValue_(Companion_getInstance_2()._NEG_INFINITE));
  }
  function Duration__isFinite_impl(this_0) {
    return !Duration__isInfinite_impl(this_0);
  }
  function _Duration___get_absoluteValue__impl_(this_0) {
    return Duration__isNegative_impl(this_0) ? Duration__unaryMinus_impl(this_0) : this_0;
  }
  function Duration__compareTo_impl(this_0, other) {
    var compareBits = _get_rawValue_(this_0).xor_wiekkq_k$(_get_rawValue_(other));
    if (compareBits.compareTo_wiekkq_k$(new Long(0, 0)) < 0 ? true : (compareBits.toInt_0_k$() & 1) === 0)
      return _get_rawValue_(this_0).compareTo_wiekkq_k$(_get_rawValue_(other));
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _get_rawValue_(this_0).toInt_0_k$() & 1;
      break $l$block;
    }
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _get_rawValue_(other).toInt_0_k$() & 1;
      break $l$block_0;
    }
    var r = tmp - tmp$ret$1 | 0;
    return Duration__isNegative_impl(this_0) ? -r | 0 : r;
  }
  function Duration__compareTo_impl_0(this_0, other) {
    var tmp = this_0._rawValue;
    return Duration__compareTo_impl(tmp, other instanceof Duration ? other._rawValue : THROW_CCE());
  }
  function _Duration___get_hoursComponent__impl_(this_0) {
    var tmp;
    if (Duration__isInfinite_impl(this_0)) {
      tmp = 0;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_rem_0 = _Duration___get_inWholeHours__impl_(this_0);
        tmp$ret$0 = tmp0_rem_0.rem_wiekkq_k$(new Long(24, 0));
        break $l$block;
      }
      tmp = tmp$ret$0.toInt_0_k$();
    }
    return tmp;
  }
  function _Duration___get_minutesComponent__impl_(this_0) {
    var tmp;
    if (Duration__isInfinite_impl(this_0)) {
      tmp = 0;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_rem_0 = _Duration___get_inWholeMinutes__impl_(this_0);
        tmp$ret$0 = tmp0_rem_0.rem_wiekkq_k$(new Long(60, 0));
        break $l$block;
      }
      tmp = tmp$ret$0.toInt_0_k$();
    }
    return tmp;
  }
  function _Duration___get_secondsComponent__impl_(this_0) {
    var tmp;
    if (Duration__isInfinite_impl(this_0)) {
      tmp = 0;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_rem_0 = _Duration___get_inWholeSeconds__impl_(this_0);
        tmp$ret$0 = tmp0_rem_0.rem_wiekkq_k$(new Long(60, 0));
        break $l$block;
      }
      tmp = tmp$ret$0.toInt_0_k$();
    }
    return tmp;
  }
  function _Duration___get_nanosecondsComponent__impl_(this_0) {
    var tmp;
    if (Duration__isInfinite_impl(this_0)) {
      tmp = 0;
    } else if (isInMillis(this_0)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_rem_0 = _get_value_(this_0);
        tmp$ret$0 = tmp0_rem_0.rem_wiekkq_k$(new Long(1000, 0));
        break $l$block;
      }
      tmp = millisToNanos(tmp$ret$0).toInt_0_k$();
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_rem_0 = _get_value_(this_0);
        tmp$ret$1 = tmp1_rem_0.rem_wiekkq_k$(new Long(1000000000, 0));
        break $l$block_0;
      }
      tmp = tmp$ret$1.toInt_0_k$();
    }
    return tmp;
  }
  function Duration__toLong_impl(this_0, unit) {
    var tmp0_subject = _get_rawValue_(this_0);
    var tmp;
    if (tmp0_subject.equals(_get_rawValue_(Companion_getInstance_2()._INFINITE))) {
      Companion_getInstance_11();
      tmp = new Long(-1, 2147483647);
    } else if (tmp0_subject.equals(_get_rawValue_(Companion_getInstance_2()._NEG_INFINITE))) {
      Companion_getInstance_11();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = convertDurationUnit_0(_get_value_(this_0), _get_storageUnit_(this_0), unit);
    }
    return tmp;
  }
  function _Duration___get_inWholeDays__impl_(this_0) {
    return Duration__toLong_impl(this_0, DurationUnit_DAYS_getInstance());
  }
  function _Duration___get_inWholeHours__impl_(this_0) {
    return Duration__toLong_impl(this_0, DurationUnit_HOURS_getInstance());
  }
  function _Duration___get_inWholeMinutes__impl_(this_0) {
    return Duration__toLong_impl(this_0, DurationUnit_MINUTES_getInstance());
  }
  function _Duration___get_inWholeSeconds__impl_(this_0) {
    return Duration__toLong_impl(this_0, DurationUnit_SECONDS_getInstance());
  }
  function Duration__toString_impl(this_0) {
    var tmp0_subject = _get_rawValue_(this_0);
    var tmp;
    if (tmp0_subject.equals(new Long(0, 0))) {
      tmp = '0s';
    } else if (tmp0_subject.equals(_get_rawValue_(Companion_getInstance_2()._INFINITE))) {
      tmp = 'Infinity';
    } else if (tmp0_subject.equals(_get_rawValue_(Companion_getInstance_2()._NEG_INFINITE))) {
      tmp = '-Infinity';
    } else {
      var isNegative_0 = Duration__isNegative_impl(this_0);
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_apply_0_1 = StringBuilder_init_$Create$_0();
          {
          }
          {
            if (isNegative_0) {
              tmp0_apply_0_1.append_wi8o78_k$(new Char(45));
              Unit_getInstance();
            }var tmp$ret$0;
            $l$block: {
              var tmp0_toComponents_0_3 = _Duration___get_absoluteValue__impl_(this_0);
              {
              }
              var tmp1__anonymous__1_4 = _Duration___get_inWholeDays__impl_(tmp0_toComponents_0_3);
              var tmp2__anonymous__1_5 = _Duration___get_hoursComponent__impl_(tmp0_toComponents_0_3);
              var tmp3__anonymous__1_6 = _Duration___get_minutesComponent__impl_(tmp0_toComponents_0_3);
              var tmp4__anonymous__1_7 = _Duration___get_secondsComponent__impl_(tmp0_toComponents_0_3);
              var tmp5__anonymous__1_8 = _Duration___get_nanosecondsComponent__impl_(tmp0_toComponents_0_3);
              var hasDays_2_9 = !tmp1__anonymous__1_4.equals(new Long(0, 0));
              var hasHours_3_10 = !(tmp2__anonymous__1_5 === 0);
              var hasMinutes_4_11 = !(tmp3__anonymous__1_6 === 0);
              var hasSeconds_5_12 = !(tmp4__anonymous__1_7 === 0) ? true : !(tmp5__anonymous__1_8 === 0);
              var components_6_13 = 0;
              if (hasDays_2_9) {
                tmp0_apply_0_1.append_wi7j7l_k$(tmp1__anonymous__1_4).append_wi8o78_k$(new Char(100));
                Unit_getInstance();
                var tmp0_7_14 = components_6_13;
                components_6_13 = tmp0_7_14 + 1 | 0;
                Unit_getInstance();
              }if (hasHours_3_10 ? true : hasDays_2_9 ? hasMinutes_4_11 ? true : hasSeconds_5_12 : false) {
                var tmp1_8_15 = components_6_13;
                components_6_13 = tmp1_8_15 + 1 | 0;
                if (tmp1_8_15 > 0) {
                  tmp0_apply_0_1.append_wi8o78_k$(new Char(32));
                  Unit_getInstance();
                } else {
                }
                tmp0_apply_0_1.append_wi7j7l_k$(tmp2__anonymous__1_5).append_wi8o78_k$(new Char(104));
                Unit_getInstance();
              }if (hasMinutes_4_11 ? true : hasSeconds_5_12 ? hasHours_3_10 ? true : hasDays_2_9 : false) {
                var tmp2_9_16 = components_6_13;
                components_6_13 = tmp2_9_16 + 1 | 0;
                if (tmp2_9_16 > 0) {
                  tmp0_apply_0_1.append_wi8o78_k$(new Char(32));
                  Unit_getInstance();
                } else {
                }
                tmp0_apply_0_1.append_wi7j7l_k$(tmp3__anonymous__1_6).append_wi8o78_k$(new Char(109));
                Unit_getInstance();
              }if (hasSeconds_5_12) {
                var tmp3_10_17 = components_6_13;
                components_6_13 = tmp3_10_17 + 1 | 0;
                if (tmp3_10_17 > 0) {
                  tmp0_apply_0_1.append_wi8o78_k$(new Char(32));
                  Unit_getInstance();
                } else {
                }
                if (((!(tmp4__anonymous__1_7 === 0) ? true : hasDays_2_9) ? true : hasHours_3_10) ? true : hasMinutes_4_11)
                  appendFractional(tmp0_apply_0_1, this_0, tmp4__anonymous__1_7, tmp5__anonymous__1_8, 9, 's', false);
                else if (tmp5__anonymous__1_8 >= 1000000)
                  appendFractional(tmp0_apply_0_1, this_0, tmp5__anonymous__1_8 / 1000000 | 0, tmp5__anonymous__1_8 % 1000000, 6, 'ms', false);
                else if (tmp5__anonymous__1_8 >= 1000)
                  appendFractional(tmp0_apply_0_1, this_0, tmp5__anonymous__1_8 / 1000 | 0, tmp5__anonymous__1_8 % 1000, 3, 'us', false);
                else {
                  tmp0_apply_0_1.append_wi7j7l_k$(tmp5__anonymous__1_8).append_uch40_k$('ns');
                  Unit_getInstance();
                }
              }var tmp_0;
              if (isNegative_0 ? components_6_13 > 1 : false) {
                tmp0_apply_0_1.insert_259trv_k$(1, new Char(40)).append_wi8o78_k$(new Char(41));
                tmp_0 = Unit_getInstance();
              }tmp$ret$0 = tmp_0;
              break $l$block;
            }
          }
          tmp$ret$1 = tmp0_apply_0_1;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1.toString();
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function appendFractional(_this_, $this, whole, fractional, fractionalSize, unit, isoZeroes) {
    _this_.append_wi7j7l_k$(whole);
    Unit_getInstance();
    if (!(fractional === 0)) {
      _this_.append_wi8o78_k$(new Char(46));
      Unit_getInstance();
      var fracString = padStart(fractional.toString(), fractionalSize, new Char(48));
      var tmp$ret$1;
      $l$block_1: {
        var inductionVariable = charSequenceLength(fracString) - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var tmp$ret$0;
            $l$block: {
              var tmp0__anonymous__3 = charSequenceGet(fracString, index_2);
              tmp$ret$0 = !tmp0__anonymous__3.equals(new Char(48));
              break $l$block;
            }
            if (tmp$ret$0) {
              tmp$ret$1 = index_2;
              break $l$block_1;
            } else {
            }
          }
           while (0 <= inductionVariable);
        tmp$ret$1 = -1;
        break $l$block_1;
      }
      var nonZeroDigits = tmp$ret$1 + 1 | 0;
      if (!isoZeroes ? nonZeroDigits < 3 : false) {
        _this_.appendRange_icedxh_k$(fracString, 0, nonZeroDigits);
        Unit_getInstance();
      } else {
        _this_.appendRange_icedxh_k$(fracString, 0, imul((nonZeroDigits + 2 | 0) / 3 | 0, 3));
        Unit_getInstance();
      }
    }_this_.append_uch40_k$(unit);
    Unit_getInstance();
  }
  function Duration__hashCode_impl(this_0) {
    return this_0.hashCode();
  }
  function Duration__equals_impl(this_0, other) {
    if (!(other instanceof Duration))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Duration ? other._rawValue : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Duration(rawValue) {
    Companion_getInstance_2();
    this._rawValue = rawValue;
  }
  Duration.prototype.compareTo_mqzjix_k$ = function (other) {
    return Duration__compareTo_impl(this._rawValue, other);
  };
  Duration.prototype.compareTo_2c5_k$ = function (other) {
    return Duration__compareTo_impl_0(this, other);
  };
  Duration.prototype.toString = function () {
    return Duration__toString_impl(this._rawValue);
  };
  Duration.prototype.hashCode = function () {
    return Duration__hashCode_impl(this._rawValue);
  };
  Duration.prototype.equals = function (other) {
    return Duration__equals_impl(this._rawValue, other);
  };
  Duration.$metadata$ = {
    simpleName: 'Duration',
    kind: 'class',
    interfaces: [Comparable]
  };
  function durationOfMillis(normalMillis) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = normalMillis.shl_ha5a7z_k$(1);
      tmp$ret$0 = tmp0_plus_0.plus_wiekkq_k$(new Long(1, 0));
      break $l$block;
    }
    return _Duration___init__impl_(tmp$ret$0);
  }
  function toDuration(_this_, unit) {
    var valueInNs = convertDurationUnit(_this_, unit, DurationUnit_NANOSECONDS_getInstance());
    {
      var tmp0_require_0 = !isNaN_0(valueInNs);
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Duration value cannot be NaN.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_2));
      }}
    var nanos = roundToLong(valueInNs);
    var tmp;
    var containsLower = new Long(387905, -1073741824);
    if (nanos.compareTo_wiekkq_k$(new Long(-387905, 1073741823)) <= 0 ? containsLower.compareTo_wiekkq_k$(nanos) <= 0 : false) {
      tmp = durationOfNanos(nanos);
    } else {
      {
        var millis = roundToLong(convertDurationUnit(_this_, unit, DurationUnit_MILLISECONDS_getInstance()));
        tmp = durationOfMillisNormalized(millis);
      }
    }
    return tmp;
  }
  function durationOf(normalValue, unitDiscriminator) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_plus_0 = normalValue.shl_ha5a7z_k$(1);
      tmp$ret$0 = tmp0_plus_0.plus_wiekkq_k$(toLong_0(unitDiscriminator));
      break $l$block;
    }
    return _Duration___init__impl_(tmp$ret$0);
  }
  function durationOfNanosNormalized(nanos) {
    var tmp;
    var containsLower = new Long(387905, -1073741824);
    if (nanos.compareTo_wiekkq_k$(new Long(-387905, 1073741823)) <= 0 ? containsLower.compareTo_wiekkq_k$(nanos) <= 0 : false) {
      tmp = durationOfNanos(nanos);
    } else {
      {
        tmp = durationOfMillis(nanosToMillis(nanos));
      }
    }
    return tmp;
  }
  function durationOfMillisNormalized(millis) {
    var tmp;
    var containsLower = new Long(1108857478, -1074);
    if (millis.compareTo_wiekkq_k$(new Long(-1108857478, 1073)) <= 0 ? containsLower.compareTo_wiekkq_k$(millis) <= 0 : false) {
      tmp = durationOfNanos(millisToNanos(millis));
    } else {
      {
        tmp = durationOfMillis(coerceIn(millis, new Long(1, -1073741824), new Long(-1, 1073741823)));
      }
    }
    return tmp;
  }
  function nanosToMillis(nanos) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_div_0 = 1000000;
      tmp$ret$0 = nanos.div_wiekkq_k$(toLong_0(tmp0_div_0));
      break $l$block;
    }
    return tmp$ret$0;
  }
  function millisToNanos(millis) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_times_0 = 1000000;
      tmp$ret$0 = millis.times_wiekkq_k$(toLong_0(tmp0_times_0));
      break $l$block;
    }
    return tmp$ret$0;
  }
  function durationOfNanos(normalNanos) {
    return _Duration___init__impl_(normalNanos.shl_ha5a7z_k$(1));
  }
  function Monotonic() {
    Monotonic_instance = this;
    this._$$delegate_0 = MonotonicTimeSource_getInstance();
  }
  Monotonic.prototype.markNow_0_k$ = function () {
    return this._$$delegate_0.markNow_0_k$();
  };
  Monotonic.prototype.toString = function () {
    return toString_1(MonotonicTimeSource_getInstance());
  };
  Monotonic.$metadata$ = {
    simpleName: 'Monotonic',
    kind: 'object',
    interfaces: [TimeSource]
  };
  var Monotonic_instance;
  function Monotonic_getInstance() {
    if (Monotonic_instance == null)
      new Monotonic();
    return Monotonic_instance;
  }
  function TimeSource() {
  }
  TimeSource.$metadata$ = {
    simpleName: 'TimeSource',
    kind: 'interface',
    interfaces: []
  };
  function TimeMark() {
  }
  TimeMark.$metadata$ = {
    simpleName: 'TimeMark',
    kind: 'class',
    interfaces: []
  };
  function DoubleTimeMark(startedAt, timeSource, offset) {
    TimeMark.call(this);
    this._startedAt = startedAt;
    this._timeSource = timeSource;
    this._offset = offset;
  }
  DoubleTimeMark.prototype.elapsedNow_jukv7u_k$ = function () {
    return Duration__minus_impl(toDuration(this._timeSource.read_0_k$() - this._startedAt, this._timeSource._unit), this._offset);
  };
  DoubleTimeMark.$metadata$ = {
    simpleName: 'DoubleTimeMark',
    kind: 'class',
    interfaces: []
  };
  function AbstractDoubleTimeSource(unit) {
    this._unit = unit;
  }
  AbstractDoubleTimeSource.prototype.markNow_0_k$ = function () {
    return new DoubleTimeMark(this.read_0_k$(), this, Companion_getInstance_2()._ZERO);
  };
  AbstractDoubleTimeSource.$metadata$ = {
    simpleName: 'AbstractDoubleTimeSource',
    kind: 'class',
    interfaces: [TimeSource]
  };
  function TimedValue(value, duration) {
    this._value = value;
    this._duration = duration;
  }
  TimedValue.prototype.component1_0_k$ = function () {
    return this._value;
  };
  TimedValue.prototype.component2_jukv7u_k$ = function () {
    return this._duration;
  };
  TimedValue.prototype.toString = function () {
    return '' + 'TimedValue(value=' + this._value + ', duration=' + new Duration(this._duration) + ')';
  };
  TimedValue.prototype.hashCode = function () {
    var result = this._value == null ? 0 : hashCode(this._value);
    result = imul(result, 31) + Duration__hashCode_impl(this._duration) | 0;
    return result;
  };
  TimedValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TimedValue))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TimedValue ? other : THROW_CCE();
    if (!equals_0(this._value, tmp0_other_with_cast._value))
      return false;
    if (!equals_0(new Duration(this._duration), new Duration(tmp0_other_with_cast._duration)))
      return false;
    return true;
  };
  TimedValue.$metadata$ = {
    simpleName: 'TimedValue',
    kind: 'class',
    interfaces: []
  };
  function _Result___init__impl_(value) {
    return value;
  }
  function _Result___get_value__impl_(this_0) {
    return this_0;
  }
  function _Result___get_isFailure__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl_(this_0)._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Result__toString_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = toString_1(_Result___get_value__impl_(this_0));
    } else {
      {
        tmp = '' + 'Success(' + _Result___get_value__impl_(this_0) + ')';
      }
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_3 = this;
  }
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_0(this._exception, other._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function Result__hashCode_impl(this_0) {
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function Result__equals_impl(this_0, other) {
    if (!(other instanceof Result))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Result ? other._value_0 : THROW_CCE();
    if (!equals_0(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Result(value) {
    Companion_getInstance_3();
    this._value_0 = value;
  }
  Result.prototype.toString = function () {
    return Result__toString_impl(this._value_0);
  };
  Result.prototype.hashCode = function () {
    return Result__hashCode_impl(this._value_0);
  };
  Result.prototype.equals = function (other) {
    return Result__equals_impl(this._value_0, other);
  };
  Result.$metadata$ = {
    simpleName: 'Result',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function NotImplementedError(message) {
    Error_init_$Init$(message, this);
    captureStack(this, NotImplementedError);
  }
  NotImplementedError.$metadata$ = {
    simpleName: 'NotImplementedError',
    kind: 'class',
    interfaces: []
  };
  function Pair(first_1, second) {
    this._first = first_1;
    this._second = second;
  }
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1_0_k$ = function () {
    return this._first;
  };
  Pair.prototype.component2_0_k$ = function () {
    return this._second;
  };
  Pair.prototype.hashCode = function () {
    var result = this._first == null ? 0 : hashCode(this._first);
    result = imul(result, 31) + (this._second == null ? 0 : hashCode(this._second)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this._first, tmp0_other_with_cast._first))
      return false;
    if (!equals_0(this._second, tmp0_other_with_cast._second))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_0_k$ = function () {
    return this.nextInt_0_k$();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function LongIterator() {
  }
  LongIterator.prototype.next_0_k$ = function () {
    return this.nextLong_0_k$();
  };
  LongIterator.$metadata$ = {
    simpleName: 'LongIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first_1, last_0, step) {
    IntIterator.call(this);
    this._step = step;
    this._finalElement = last_0;
    this._hasNext = this._step > 0 ? first_1 <= last_0 : first_1 >= last_0;
    this._next = this._hasNext ? first_1 : this._finalElement;
  }
  IntProgressionIterator.prototype.hasNext_0_k$ = function () {
    return this._hasNext;
  };
  IntProgressionIterator.prototype.nextInt_0_k$ = function () {
    var value = this._next;
    if (value === this._finalElement) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next = tmp0_this._next + this._step | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function LongProgressionIterator(first_1, last_0, step) {
    LongIterator.call(this);
    this._step_0 = step;
    this._finalElement_0 = last_0;
    this._hasNext_0 = this._step_0.compareTo_wiekkq_k$(new Long(0, 0)) > 0 ? first_1.compareTo_wiekkq_k$(last_0) <= 0 : first_1.compareTo_wiekkq_k$(last_0) >= 0;
    this._next_0 = this._hasNext_0 ? first_1 : this._finalElement_0;
  }
  LongProgressionIterator.prototype.hasNext_0_k$ = function () {
    return this._hasNext_0;
  };
  LongProgressionIterator.prototype.nextLong_0_k$ = function () {
    var value = this._next_0;
    if (value.equals(this._finalElement_0)) {
      if (!this._hasNext_0)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_0 = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_0 = tmp0_this._next_0.plus_wiekkq_k$(this._step_0);
    }
    return value;
  };
  LongProgressionIterator.$metadata$ = {
    simpleName: 'LongProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_5() {
    Companion_instance_4 = this;
  }
  Companion_5.prototype.fromClosedRange_fcwjfj_k$ = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_4();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step);
    this._step_1 = step;
  }
  IntProgression.prototype._get_first__0_k$ = function () {
    return this._first_0;
  };
  IntProgression.prototype._get_last__0_k$ = function () {
    return this._last;
  };
  IntProgression.prototype.iterator_0_k$ = function () {
    return new IntProgressionIterator(this._first_0, this._last, this._step_1);
  };
  IntProgression.prototype.isEmpty_0_k$ = function () {
    return this._step_1 > 0 ? this._first_0 > this._last : this._first_0 < this._last;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : (this._first_0 === other._first_0 ? this._last === other._last : false) ? this._step_1 === other._step_1 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : imul(31, imul(31, this._first_0) + this._last | 0) + this._step_1 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_1 > 0 ? '' + this._first_0 + '..' + this._last + ' step ' + this._step_1 : '' + this._first_0 + ' downTo ' + this._last + ' step ' + (-this._step_1 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function Companion_6() {
    Companion_instance_5 = this;
  }
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function LongProgression(start, endInclusive, step) {
    Companion_getInstance_5();
    if (step.equals(new Long(0, 0)))
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    Companion_getInstance_11();
    if (step.equals(new Long(0, -2147483648)))
      throw IllegalArgumentException_init_$Create$('Step must be greater than Long.MIN_VALUE to avoid overflow on negation.');
    else {
    }
    this._first_1 = start;
    this._last_0 = getProgressionLastElement_0(start, endInclusive, step);
    this._step_2 = step;
  }
  LongProgression.prototype._get_first__0_k$ = function () {
    return this._first_1;
  };
  LongProgression.prototype._get_last__0_k$ = function () {
    return this._last_0;
  };
  LongProgression.prototype.iterator_0_k$ = function () {
    return new LongProgressionIterator(this._first_1, this._last_0, this._step_2);
  };
  LongProgression.prototype.isEmpty_0_k$ = function () {
    return this._step_2.compareTo_wiekkq_k$(new Long(0, 0)) > 0 ? this._first_1.compareTo_wiekkq_k$(this._last_0) > 0 : this._first_1.compareTo_wiekkq_k$(this._last_0) < 0;
  };
  LongProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof LongProgression) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : (this._first_1.equals(other._first_1) ? this._last_0.equals(other._last_0) : false) ? this._step_2.equals(other._step_2) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  LongProgression.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : numberToLong(31).times_wiekkq_k$(numberToLong(31).times_wiekkq_k$(this._first_1.xor_wiekkq_k$(this._first_1.ushr_ha5a7z_k$(32))).plus_wiekkq_k$(this._last_0.xor_wiekkq_k$(this._last_0.ushr_ha5a7z_k$(32)))).plus_wiekkq_k$(this._step_2.xor_wiekkq_k$(this._step_2.ushr_ha5a7z_k$(32))).toInt_0_k$();
  };
  LongProgression.prototype.toString = function () {
    return this._step_2.compareTo_wiekkq_k$(new Long(0, 0)) > 0 ? '' + this._first_1 + '..' + this._last_0 + ' step ' + this._step_2 : '' + this._first_1 + ' downTo ' + this._last_0 + ' step ' + this._step_2.unaryMinus_0_k$();
  };
  LongProgression.$metadata$ = {
    simpleName: 'LongProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_7() {
    Companion_instance_6 = this;
    this._EMPTY = new IntRange(1, 0);
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_6();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start__0_k$ = function () {
    return this._get_first__0_k$();
  };
  IntRange.prototype._get_endInclusive__0_k$ = function () {
    return this._get_last__0_k$();
  };
  IntRange.prototype.isEmpty_0_k$ = function () {
    return this._get_first__0_k$() > this._get_last__0_k$();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : this._get_first__0_k$() === other._get_first__0_k$() ? this._get_last__0_k$() === other._get_last__0_k$() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : imul(31, this._get_first__0_k$()) + this._get_last__0_k$() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__0_k$() + '..' + this._get_last__0_k$();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_8() {
    Companion_instance_7 = this;
    this._EMPTY_0 = new LongRange(new Long(1, 0), new Long(0, 0));
  }
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function LongRange(start, endInclusive) {
    Companion_getInstance_7();
    LongProgression.call(this, start, endInclusive, new Long(1, 0));
  }
  LongRange.prototype.isEmpty_0_k$ = function () {
    return this._get_first__0_k$().compareTo_wiekkq_k$(this._get_last__0_k$()) > 0;
  };
  LongRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof LongRange) {
      tmp = (this.isEmpty_0_k$() ? other.isEmpty_0_k$() : false) ? true : this._get_first__0_k$().equals(other._get_first__0_k$()) ? this._get_last__0_k$().equals(other._get_last__0_k$()) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  LongRange.prototype.hashCode = function () {
    return this.isEmpty_0_k$() ? -1 : numberToLong(31).times_wiekkq_k$(this._get_first__0_k$().xor_wiekkq_k$(this._get_first__0_k$().ushr_ha5a7z_k$(32))).plus_wiekkq_k$(this._get_last__0_k$().xor_wiekkq_k$(this._get_last__0_k$().ushr_ha5a7z_k$(32))).toInt_0_k$();
  };
  LongRange.prototype.toString = function () {
    return '' + this._get_first__0_k$() + '..' + this._get_last__0_k$();
  };
  LongRange.$metadata$ = {
    simpleName: 'LongRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function getProgressionLastElement_0(start, end, step) {
    var tmp;
    if (step.compareTo_wiekkq_k$(new Long(0, 0)) > 0) {
      tmp = start.compareTo_wiekkq_k$(end) >= 0 ? end : end.minus_wiekkq_k$(differenceModulo_0(end, start, step));
    } else if (step.compareTo_wiekkq_k$(new Long(0, 0)) < 0) {
      tmp = start.compareTo_wiekkq_k$(end) <= 0 ? end : end.plus_wiekkq_k$(differenceModulo_0(start, end, step.unaryMinus_0_k$()));
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function differenceModulo_0(a, b, c) {
    return mod_0(mod_0(a, c).minus_wiekkq_k$(mod_0(b, c)), c);
  }
  function mod(a, b) {
    var mod_1 = a % b;
    return mod_1 >= 0 ? mod_1 : mod_1 + b | 0;
  }
  function mod_0(a, b) {
    var mod_1 = a.rem_wiekkq_k$(b);
    return mod_1.compareTo_wiekkq_k$(new Long(0, 0)) >= 0 ? mod_1 : mod_1.plus_wiekkq_k$(b);
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE = -2147483648;
    this._MAX_VALUE = 2147483647;
    this._SIZE_BYTES = 4;
    this._SIZE_BITS = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$ = function () {
    return this._MIN_VALUE;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$ = function () {
    return this._MAX_VALUE;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$ = function () {
    return this._SIZE_BYTES;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$ = function () {
    return this._SIZE_BITS;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__0_k$
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__0_k$
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function DoubleCompanionObject_0() {
    DoubleCompanionObject_instance = this;
    this._MIN_VALUE_0 = 4.9E-324;
    this._MAX_VALUE_0 = 1.7976931348623157E308;
    this._POSITIVE_INFINITY = Infinity;
    this._NEGATIVE_INFINITY = -Infinity;
    this._NaN = NaN;
    this._SIZE_BYTES_0 = 8;
    this._SIZE_BITS_0 = 64;
  }
  DoubleCompanionObject_0.prototype._get_MIN_VALUE__0_k$ = function () {
    return this._MIN_VALUE_0;
  };
  DoubleCompanionObject_0.prototype._get_MAX_VALUE__0_k$ = function () {
    return this._MAX_VALUE_0;
  };
  DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0_k$ = function () {
    return this._POSITIVE_INFINITY;
  };
  DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0_k$ = function () {
    return this._NEGATIVE_INFINITY;
  };
  DoubleCompanionObject_0.prototype._get_NaN__0_k$ = function () {
    return this._NaN;
  };
  DoubleCompanionObject_0.prototype._get_SIZE_BYTES__0_k$ = function () {
    return this._SIZE_BYTES_0;
  };
  DoubleCompanionObject_0.prototype._get_SIZE_BITS__0_k$ = function () {
    return this._SIZE_BITS_0;
  };
  DoubleCompanionObject_0.$metadata$ = {
    simpleName: 'DoubleCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MIN_VALUE__0_k$
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MAX_VALUE__0_k$
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0_k$
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0_k$
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'NaN', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NaN__0_k$
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BYTES__0_k$
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BITS__0_k$
  });
  var DoubleCompanionObject_instance;
  function DoubleCompanionObject_getInstance() {
    if (DoubleCompanionObject_instance == null)
      new DoubleCompanionObject_0();
    return DoubleCompanionObject_instance;
  }
  function Comparator() {
  }
  Comparator.$metadata$ = {
    simpleName: 'Comparator',
    kind: 'interface',
    interfaces: []
  };
  function arrayCopy_0(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkRangeIndexes_zd700_k$(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().checkRangeIndexes_zd700_k$(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (ArrayBuffer.isView(destination) && ArrayBuffer.isView(source)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = source;
        break $l$block;
      }
      var subrange = tmp$ret$0.subarray(startIndex, endIndex);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = destination;
        break $l$block_0;
      }
      tmp$ret$1.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function listOf_0(element) {
    return arrayListOf([element]);
  }
  function collectionsSort(list, comparator) {
    if (list._get_size__0_k$() <= 1)
      return Unit_getInstance();
    var array = copyToArray_0(list);
    sortArrayWith(array, comparator);
    var inductionVariable = 0;
    var last_0 = array.length;
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        list.set_ddb1qf_k$(i, array[i]);
        Unit_getInstance();
      }
       while (inductionVariable < last_0);
  }
  function copyToArray_0(collection) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = collection;
      break $l$block;
    }
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = collection;
          break $l$block_0;
        }
        var tmp0_unsafeCast_0 = tmp$ret$1.toArray();
        tmp$ret$2 = tmp0_unsafeCast_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      {
        var tmp$ret$4;
        $l$block_3: {
          var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = tmp1_unsafeCast_0;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp = tmp$ret$4;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    var array = tmp$ret$0;
    var iterator = collection.iterator_0_k$();
    while (iterator.hasNext_0_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = array;
        break $l$block_0;
      }
      tmp$ret$1.push(iterator.next_0_k$());
    }
    return array;
  }
  function sortWith(_this_, comparator) {
    collectionsSort(_this_, comparator);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }return index;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.addAll_dxd4eo_k$ = function (elements) {
    this.checkIsMutable_sv8swh_k$();
    var modified = false;
    var tmp0_iterator = elements.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      if (this.add_2bq_k$(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_sv8swh_k$ = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last_1 = -1;
  }
  IteratorImpl.prototype.hasNext_0_k$ = function () {
    return this._index < this._$this._get_size__0_k$();
  };
  IteratorImpl.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last_1 = tmp1;
    return this._$this.get_ha5a7z_k$(this._last_1);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__majfzk_k$ = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0_k$ = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    this.add_vz2mgm_k$(this._get_size__0_k$(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_0_k$ = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_2bq_k$ = function (element) {
    return this.indexOf_2bq_k$(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_2bq_k$ = function (element) {
    var inductionVariable = 0;
    var last_0 = _get_lastIndex__0(this);
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.get_ha5a7z_k$(index), element)) {
          return index;
        }}
       while (!(index === last_0));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals_tuq55s_k$(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function SimpleEntry(key, value) {
    this._key = key;
    this.__value = value;
  }
  SimpleEntry.prototype._get_key__0_k$ = function () {
    return this._key;
  };
  SimpleEntry.prototype._get_value__0_k$ = function () {
    return this.__value;
  };
  SimpleEntry.prototype.setValue_2c7_k$ = function (newValue) {
    var oldValue = this.__value;
    this.__value = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode_4vm2wp_k$(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString_4vm2wp_k$(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals_caydzc_k$(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_2bq_k$ = function (element) {
    return this.containsEntry_4v0zae_k$(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype.putAll_nn707j_k$ = function (from) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = from._get_entries__0_k$().iterator_0_k$();
      break $l$block;
    }
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_0_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_0_k$();
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp1_loop_parameter._get_key__0_k$();
        break $l$block_0;
      }
      var key = tmp$ret$1;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_loop_parameter._get_value__0_k$();
        break $l$block_1;
      }
      var value = tmp$ret$2;
      this.put_1q9pf_k$(key, value);
      Unit_getInstance();
    }
  };
  AbstractMutableMap.prototype.checkIsMutable_sv8swh_k$ = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals_qlktm2_k$(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray_0(elements);
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck_0($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkElementIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkPositionIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__0_k$ = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_ha5a7z_k$ = function (index) {
    var tmp = this._array[rangeCheck_0(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.set_ddb1qf_k$ = function (index, element) {
    this.checkIsMutable_sv8swh_k$();
    rangeCheck_0(this, index);
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = this._array[index];
      {
      }
      {
        this._array[index] = element;
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_vz2mgm_k$ = function (index, element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_dxd4eo_k$ = function (elements) {
    this.checkIsMutable_sv8swh_k$();
    if (elements.isEmpty_0_k$())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_plus_0 = tmp0_this._array;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = copyToArray_0(elements);
        break $l$block;
      }
      var tmp1_plus_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_plus_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.concat(tmp1_plus_0);
      break $l$block_1;
    }
    tmp._array = tmp$ret$2;
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__0_k$();
    tmp1_this._set_modCount__majfzk_k$(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.removeAt_ha5a7z_k$ = function (index) {
    this.checkIsMutable_sv8swh_k$();
    rangeCheck_0(this, index);
    Unit_getInstance();
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    var tmp;
    if (index === _get_lastIndex__0(this)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_asDynamic_0 = this._array;
        tmp$ret$0 = tmp0_asDynamic_0;
        break $l$block;
      }
      tmp = tmp$ret$0.pop();
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_asDynamic_0 = this._array;
        tmp$ret$1 = tmp1_asDynamic_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1.splice(index, 1)[0];
    }
    return tmp;
  };
  ArrayList.prototype.indexOf_2bq_k$ = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0_k$ = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0_k$();
  };
  ArrayList.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  var _stableSortingIsSupported;
  function sortArrayWith(array, comparator) {
    if (getStableSortingIsSupported()) {
      var comparison = _no_name_provided_$factory_3(comparator);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = array;
        break $l$block;
      }
      tmp$ret$0.sort(comparison);
    } else {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = array;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      mergeSort(tmp$ret$2, 0, _get_lastIndex_(array), comparator);
    }
  }
  function getStableSortingIsSupported() {
    var tmp0_safe_receiver = _stableSortingIsSupported;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return tmp0_safe_receiver;
      }
    }
    Unit_getInstance();
    _stableSortingIsSupported = false;
    var tmp$ret$1;
    $l$block: {
      var tmp0_unsafeCast_0 = [];
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var array = tmp$ret$1;
    var inductionVariable = 0;
    if (inductionVariable < 600)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$2;
        $l$block_0: {
          tmp$ret$2 = array;
          break $l$block_0;
        }
        tmp$ret$2.push(index);
      }
       while (inductionVariable < 600);
    var comparison = _no_name_provided_$factory_4();
    var tmp$ret$3;
    $l$block_1: {
      tmp$ret$3 = array;
      break $l$block_1;
    }
    tmp$ret$3.sort(comparison);
    var inductionVariable_0 = 1;
    var last_0 = array.length;
    if (inductionVariable_0 < last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var a = array[index_0 - 1 | 0];
        var b = array[index_0];
        if ((a & 3) === (b & 3) ? a >= b : false)
          return false;
      }
       while (inductionVariable_0 < last_0);
    _stableSortingIsSupported = true;
    return true;
  }
  function mergeSort(array, start, endInclusive, comparator) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_arrayOfNulls_0 = array.length;
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
        break $l$block;
      }
      var tmp1_unsafeCast_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var buffer = tmp$ret$2;
    var result = mergeSort_0(array, buffer, start, endInclusive, comparator);
    if (!(result === array)) {
      var inductionVariable = start;
      if (inductionVariable <= endInclusive)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          array[i] = result[i];
        }
         while (!(i === endInclusive));
    }}
  function mergeSort_0(array, buffer, start, end, comparator) {
    if (start === end) {
      return array;
    }var median = (start + end | 0) / 2 | 0;
    var left = mergeSort_0(array, buffer, start, median, comparator);
    var right = mergeSort_0(array, buffer, median + 1 | 0, end, comparator);
    var target = left === buffer ? array : buffer;
    var leftIndex = start;
    var rightIndex = median + 1 | 0;
    var inductionVariable = start;
    if (inductionVariable <= end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (leftIndex <= median ? rightIndex <= end : false) {
          var leftValue = left[leftIndex];
          var rightValue = right[rightIndex];
          if (comparator.compare(leftValue, rightValue) <= 0) {
            target[i] = leftValue;
            var tmp1 = leftIndex;
            leftIndex = tmp1 + 1 | 0;
            Unit_getInstance();
          } else {
            target[i] = rightValue;
            var tmp2 = rightIndex;
            rightIndex = tmp2 + 1 | 0;
            Unit_getInstance();
          }
        } else if (leftIndex <= median) {
          target[i] = left[leftIndex];
          var tmp3 = leftIndex;
          leftIndex = tmp3 + 1 | 0;
          Unit_getInstance();
        } else {
          target[i] = right[rightIndex];
          var tmp4 = rightIndex;
          rightIndex = tmp4 + 1 | 0;
          Unit_getInstance();
          Unit_getInstance();
        }
      }
       while (!(i === end));
    return target;
  }
  function _no_name_provided__6($comparator) {
    this._$comparator = $comparator;
  }
  _no_name_provided__6.prototype.invoke_1qgdm_k$ = function (a, b) {
    return this._$comparator.compare(a, b);
  };
  _no_name_provided__6.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE();
    return this.invoke_1qgdm_k$(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_27zxwg_k$ = function (a, b) {
    return (a & 3) - (b & 3) | 0;
  };
  _no_name_provided__7.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE();
    return this.invoke_27zxwg_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_3($comparator) {
    var i = new _no_name_provided__6($comparator);
    return function (p1, p2) {
      return i.invoke_1qgdm_k$(p1, p2);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__7();
    return function (p1, p2) {
      return i.invoke_27zxwg_k$(p1, p2);
    };
  }
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_rvz98i_k$ = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.getHashCode_wi7j7l_k$ = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_0 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_0.containsEntry_7gsh9e_k$(element);
  };
  EntrySet.prototype.iterator_0_k$ = function () {
    return this._$this_0._internalMap.iterator_0_k$();
  };
  EntrySet.prototype._get_size__0_k$ = function () {
    return this._$this_0._get_size__0_k$();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0_k$();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    {
      var tmp0_require_0 = initialCapacity >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Negative initial capacity: ' + initialCapacity;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    {
      var tmp1_require_0 = loadFactor >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = '' + 'Non-positive load factor: ' + loadFactor;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
      }}
    return $this;
  }
  HashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._internalMap.contains_2bw_k$(key);
  };
  HashMap.prototype._get_entries__0_k$ = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0_k$();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_2bw_k$ = function (key) {
    return this._internalMap.get_2bw_k$(key);
  };
  HashMap.prototype.put_1q9pf_k$ = function (key, value) {
    return this._internalMap.put_1q9pf_k$(key, value);
  };
  HashMap.prototype._get_size__0_k$ = function () {
    return this._internalMap._get_size__0_k$();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = $this._chainOrEntry;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_3._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_wi7j7l_k$(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this._equality_0.equals_rvz98i_k$(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__8(this$0) {
    this._this$0_3 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_3._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__8.prototype.hasNext_0_k$ = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__8.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0[this._itemIndex];
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0_k$();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0_k$ = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__0_k$ = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_1q9pf_k$ = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_wi7j7l_k$(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
          return entry.setValue_2c7_k$(value);
        } else {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
            var tmp$ret$1;
            $l$block_0: {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_arrayOf_0;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          this._backingMap[hashCode_1] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_2c7_k$(value);
          }var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = chain;
            break $l$block_2;
          }
          tmp$ret$3.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.contains_2bw_k$ = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  InternalHashCodeMap.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__8(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0_k$ = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function EntryIterator($outer) {
    this._$this_1 = $outer;
    this._last_2 = null;
    this._next_1 = null;
    this._next_1 = this._$this_1._$this_3._head;
  }
  EntryIterator.prototype.hasNext_0_k$ = function () {
    return !(this._next_1 === null);
  };
  EntryIterator.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this._next_1);
    this._last_2 = current;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_takeIf_0 = current._next_2;
      {
      }
      var tmp_0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !(tmp0_takeIf_0 === this._$this_1._$this_3._head);
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp_0 = tmp0_takeIf_0;
      } else {
        {
          tmp_0 = null;
        }
      }
      tmp$ret$1 = tmp_0;
      break $l$block_0;
    }
    tmp._next_1 = tmp$ret$1;
    return current;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this._$this_2 = $outer;
    SimpleEntry.call(this, key, value);
    this._next_2 = null;
    this._prev = null;
  }
  ChainEntry.prototype.setValue_2c7_k$ = function (newValue) {
    this._$this_2.checkIsMutable_sv8swh_k$();
    return SimpleEntry.prototype.setValue_2c7_k$.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this._$this_3 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_3.containsEntry_7gsh9e_k$(element);
  };
  EntrySet_0.prototype.iterator_0_k$ = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype._get_size__0_k$ = function () {
    return this._$this_3._get_size__0_k$();
  };
  EntrySet_0.prototype.checkIsMutable_sv8swh_k$ = function () {
    return this._$this_3.checkIsMutable_sv8swh_k$();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function addToEnd(_this_, $this) {
    {
      var tmp0_check_0 = _this_._next_2 == null ? _this_._prev == null : false;
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_1(message_2_1));
        }}
    }
    var _head = $this._head;
    if (_head == null) {
      $this._head = _this_;
      _this_._next_2 = _this_;
      _this_._prev = _this_;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_checkNotNull_0 = _head._prev;
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          if (tmp1_checkNotNull_0 == null) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Required value was null.';
              break $l$block_0;
            }
            var message_1_1 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_1(message_1_1));
          } else {
            tmp$ret$2 = tmp1_checkNotNull_0;
            break $l$block_1;
          }
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var _tail = tmp$ret$3;
      _this_._prev = _tail;
      _this_._next_2 = _head;
      _head._prev = _this_;
      _tail._next_2 = _this_;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this._map = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_2(original, $this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map = HashMap_init_$Create$();
    $this.putAll_nn707j_k$(original);
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(original) {
    return LinkedHashMap_init_$Init$_2(original, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.build_0_k$ = function () {
    this.checkIsMutable_sv8swh_k$();
    this._isReadOnly_0 = true;
    return this;
  };
  LinkedHashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._map.containsKey_2bw_k$(key);
  };
  LinkedHashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = this._map.get_2bw_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  LinkedHashMap.prototype.put_1q9pf_k$ = function (key, value) {
    this.checkIsMutable_sv8swh_k$();
    var old = this._map.get_2bw_k$(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this._map.put_1q9pf_k$(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_2c7_k$(value);
    }
  };
  LinkedHashMap.prototype._get_size__0_k$ = function () {
    return this._map._get_size__0_k$();
  };
  LinkedHashMap.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly_0)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this._head = null;
    this._isReadOnly_0 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_sv8swh_k$ = function () {
    this.print_qi8yb4_k$('\n');
  };
  BaseOutput.prototype.println_qi8yb4_k$ = function (message) {
    this.print_qi8yb4_k$(message);
    this.println_sv8swh_k$();
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput_0(outputStream) {
    BaseOutput.call(this);
    this._outputStream = outputStream;
  }
  NodeJsOutput_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var messageString = tmp$ret$0;
    this._outputStream.write(messageString);
  };
  NodeJsOutput_0.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog_0() {
    BufferedOutput_0.call(this);
  }
  BufferedOutputToConsoleLog_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var s = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_nativeLastIndexOf_0 = s;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_nativeLastIndexOf_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.lastIndexOf('\n', 0);
      break $l$block_1;
    }
    var i = tmp$ret$2;
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this._get_buffer__0_k$();
      var tmp$ret$4;
      $l$block_3: {
        var tmp1_substring_0 = s;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = tmp1_substring_0;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3.substring(0, i);
        break $l$block_3;
      }
      tmp0_this._set_buffer__a4enbm_k$(tmp + tmp$ret$4);
      this.flush_sv8swh_k$();
      var tmp$ret$6;
      $l$block_5: {
        var tmp2_substring_0 = s;
        var tmp3_substring_0 = i + 1 | 0;
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = tmp2_substring_0;
          break $l$block_4;
        }
        tmp$ret$6 = tmp$ret$5.substring(tmp3_substring_0);
        break $l$block_5;
      }
      s = tmp$ret$6;
    }var tmp1_this = this;
    tmp1_this._set_buffer__a4enbm_k$(tmp1_this._get_buffer__0_k$() + s);
  };
  BufferedOutputToConsoleLog_0.prototype.flush_sv8swh_k$ = function () {
    console.log(this._get_buffer__0_k$());
    this._set_buffer__a4enbm_k$('');
  };
  BufferedOutputToConsoleLog_0.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutput_0() {
    BaseOutput.call(this);
    this._buffer = '';
  }
  BufferedOutput_0.prototype._set_buffer__a4enbm_k$ = function (_set___) {
    this._buffer = _set___;
  };
  BufferedOutput_0.prototype._get_buffer__0_k$ = function () {
    return this._buffer;
  };
  BufferedOutput_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._buffer;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    tmp._buffer = tmp_0 + tmp$ret$0;
  };
  BufferedOutput_0.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function println(message) {
    output.println_qi8yb4_k$(message);
  }
  function output$init$() {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
        tmp$ret$0 = isNode_2 ? new NodeJsOutput_0(process.stdout) : new BufferedOutputToConsoleLog_0();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function roundToLong(_this_) {
    var tmp;
    if (isNaN_0(_this_)) {
      throw IllegalArgumentException_init_$Create$('Cannot round NaN value.');
    } else {
      Companion_getInstance_11();
      if (_this_ > (new Long(-1, 2147483647)).toDouble_0_k$()) {
        Companion_getInstance_11();
        tmp = new Long(-1, 2147483647);
      } else {
        Companion_getInstance_11();
        if (_this_ < (new Long(0, -2147483648)).toDouble_0_k$()) {
          Companion_getInstance_11();
          tmp = new Long(0, -2147483648);
        } else {
          {
            tmp = numberToLong(Math.round(_this_));
          }
        }
      }
    }
    return tmp;
  }
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__0_k$();
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__0_k$ = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this._get_jClass__0_k$(), other._get_jClass__0_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__0_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__0_k$();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__0_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__0_k$ = function () {
    throw IllegalStateException_init_$Create$('Unknown simpleName for ErrorKClass');
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = jClass;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block_0;
    }
    tmp._simpleName_0 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function KFunction() {
  }
  KFunction.$metadata$ = {
    simpleName: 'KFunction',
    kind: 'interface',
    interfaces: [KCallable]
  };
  var functionClasses;
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_wi7j7l_k$ = function (it) {
    return isObject(it);
  };
  _no_name_provided__9.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_wi7j7l_k$ = function (it) {
    return isNumber(it);
  };
  _no_name_provided__10.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__11.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__12.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__13.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__14.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__15.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__16.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__18.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_wi7j7l_k$ = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__19.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__21.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__22.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__23.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__24.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25() {
  }
  _no_name_provided__25.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__25.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__26() {
  }
  _no_name_provided__26.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__26.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__27() {
  }
  _no_name_provided__27.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__27.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__28.prototype.invoke_wi7j7l_k$ = function (it) {
    var tmp;
    if (typeof it === 'function') {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = it;
        break $l$block;
      }
      tmp = tmp$ret$0.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__28.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object;
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_5());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0_0;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_6());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_0_1;
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_7());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_0_2;
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_8());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_0_3;
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_9());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_0_4;
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_10());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_0_5;
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_11());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_0_6;
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_12());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_0_7;
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_13());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_0_8;
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_14());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_0_9;
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_15());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_0_10;
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_16());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_0_11;
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_17());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_0_12;
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_18());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_0_13;
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_19());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_0_14;
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_20());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_0_15;
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_21());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_0_16;
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_22());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_0_17;
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_23());
  }
  PrimitiveClasses_0.prototype._get_anyClass__0_k$ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass__0_k$ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass__0_k$ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass__0_k$ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass__0_k$ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass__0_k$ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass__0_k$ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass__0_k$ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass__0_k$ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass__0_k$ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass__0_k$ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass__0_k$ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass__0_k$ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass__0_k$ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass__0_k$ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = Function;
            tmp$ret$0 = tmp0_unsafeCast_0_3;
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = '' + 'Function' + arity;
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_24(arity));
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0_5 = functionClasses;
            tmp$ret$1 = tmp1_asDynamic_0_5;
            break $l$block_0;
          }
          tmp$ret$1[arity] = result_2;
          tmp$ret$2 = result_2;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__25();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__26();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_23() {
    var i = new _no_name_provided__27();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_24($arity) {
    var i = new _no_name_provided__28($arity);
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function functionClasses$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(0), null);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = jClass;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = getKClassM_0(tmp$ret$1);
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = jClass;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = getKClass1_0(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_unsafeCast_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }

        tmp = tmp$ret$1;
        break;
      default:var tmp$ret$3;
        $l$block_2: {
          var tmp1_unsafeCast_0 = new ErrorKClass();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_unsafeCast_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return tmp$ret$1;
    }var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = jClass;
      break $l$block_1;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_subject = typeof e;
      var tmp;
      switch (tmp0_subject) {
        case 'string':
          tmp = PrimitiveClasses_getInstance()._stringClass;
          break;
        case 'number':
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }

          if (tmp$ret$0 === e) {
            tmp_0 = PrimitiveClasses_getInstance()._intClass;
          } else {
            {
              tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
            }
          }

          tmp = tmp_0;
          break;
        case 'boolean':
          tmp = PrimitiveClasses_getInstance()._booleanClass;
          break;
        case 'function':
          var tmp_1 = PrimitiveClasses_getInstance();
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = e;
            break $l$block_0;
          }

          tmp = tmp_1.functionClass(tmp$ret$1.length);
          break;
        default:var tmp_2;
          if (isBooleanArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
          } else {
            if (isCharArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
            } else {
              if (isByteArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
              } else {
                if (isShortArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
                } else {
                  if (isIntArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                  } else {
                    if (isLongArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                    } else {
                      if (isFloatArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                      } else {
                        if (isDoubleArray(e)) {
                          tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                        } else {
                          if (isInterface(e, KClass)) {
                            tmp_2 = getKClass_0(KClass);
                          } else {
                            if (isArray(e)) {
                              tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                            } else {
                              {
                                var constructor = Object.getPrototypeOf(e).constructor;
                                var tmp_3;
                                if (constructor === Object) {
                                  tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                                } else if (constructor === Error) {
                                  tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                                } else {
                                  var jsClass = constructor;
                                  tmp_3 = getKClass1_0(jsClass);
                                }
                                tmp_2 = tmp_3;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          tmp = tmp_2;
          break;
      }
      var tmp1_unsafeCast_0 = tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_unsafeCast_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._string;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.get_ha5a7z_k$ = function (index) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getOrElse_0 = this._string;
      var tmp;
      if (index >= 0 ? index <= _get_lastIndex__1(tmp0_getOrElse_0) : false) {
        tmp = charSequenceGet(tmp0_getOrElse_0, index);
      } else {
        throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', length: ' + this._get_length__0_k$() + '}');
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  StringBuilder.prototype.subSequence_27zxwg_k$ = function (startIndex, endIndex) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this._string;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  StringBuilder.prototype.append_wi8o78_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_v1o70a_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_wi7j7l_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_uch40_k$ = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.insert_259trv_k$ = function (index, value) {
    Companion_getInstance().checkPositionIndex_rvwcgf_k$(index, this._get_length__0_k$());
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this._string;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(0, index);
      break $l$block_0;
    }
    var tmp_0 = tmp$ret$1 + value;
    var tmp$ret$3;
    $l$block_2: {
      var tmp1_substring_0 = this._string;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_substring_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2.substring(index);
      break $l$block_2;
    }
    tmp._string = tmp_0 + tmp$ret$3;
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.prototype.clear_0_k$ = function () {
    this._string = '';
    return this;
  };
  StringBuilder.prototype.appendRange_icedxh_k$ = function (value, startIndex, endIndex) {
    var stringCsq = toString_1(value);
    Companion_getInstance().checkBoundsIndexes_zd700_k$(startIndex, endIndex, stringCsq.length);
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = stringCsq;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    tmp._string = tmp_0 + tmp$ret$1;
    return this;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function uppercaseChar(_this_) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = _this_.toString();
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        var tmp1_unsafeCast_0 = tmp$ret$0.toUpperCase();
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this_ : charSequenceGet(uppercase, 0);
  }
  function isLetter(_this_) {
    if ((new Char(97) <= _this_ ? _this_ <= new Char(122) : false) ? true : new Char(65) <= _this_ ? _this_ <= new Char(90) : false) {
      return true;
    }if (_this_.compareTo_wi8o78_k$(new Char(128)) < 0) {
      return false;
    }return isLetterImpl(_this_);
  }
  function isLetterOrDigit(_this_) {
    if (((new Char(97) <= _this_ ? _this_ <= new Char(122) : false) ? true : new Char(65) <= _this_ ? _this_ <= new Char(90) : false) ? true : new Char(48) <= _this_ ? _this_ <= new Char(57) : false) {
      return true;
    }if (_this_.compareTo_wi8o78_k$(new Char(128)) < 0) {
      return false;
    }return isDigitImpl(_this_) ? true : isLetterImpl(_this_);
  }
  function isWhitespace(_this_) {
    return isWhitespaceImpl(_this_);
  }
  function isDigit(_this_) {
    if (new Char(48) <= _this_ ? _this_ <= new Char(57) : false) {
      return true;
    }if (_this_.compareTo_wi8o78_k$(new Char(128)) < 0) {
      return false;
    }return isDigitImpl(_this_);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$('' + 'radix ' + radix + ' was not in valid range 2..36');
    }return radix;
  }
  function toDouble(_this_) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this_;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = +tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      var tmp1_also_0 = tmp$ret$1;
      {
      }
      {
        if ((isNaN_0(tmp1_also_0) ? !isNaN_1(_this_) : false) ? true : tmp1_also_0 === 0.0 ? isBlank(_this_) : false) {
          numberFormatError(_this_);
        }}
      tmp$ret$2 = tmp1_also_0;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toLong(_this_) {
    var tmp0_elvis_lhs = toLongOrNull(_this_);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this_);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isNaN_1(_this_) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      break $l$block_0;
    }
    var tmp0_subject = tmp$ret$1;
    switch (tmp0_subject) {
      case 'nan':
      case '+nan':
      case '-nan':
        return true;
      default:return false;
    }
  }
  function digitOf(char, radix) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = (char.compareTo_wi8o78_k$(new Char(48)) >= 0 ? char.compareTo_wi8o78_k$(new Char(57)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(48)) : (char.compareTo_wi8o78_k$(new Char(65)) >= 0 ? char.compareTo_wi8o78_k$(new Char(90)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(65)) + 10 | 0 : (char.compareTo_wi8o78_k$(new Char(97)) >= 0 ? char.compareTo_wi8o78_k$(new Char(122)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(97)) + 10 | 0 : char.compareTo_wi8o78_k$(new Char(128)) < 0 ? -1 : (char.compareTo_wi8o78_k$(new Char(65313)) >= 0 ? char.compareTo_wi8o78_k$(new Char(65338)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(65313)) + 10 | 0 : (char.compareTo_wi8o78_k$(new Char(65345)) >= 0 ? char.compareTo_wi8o78_k$(new Char(65370)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(65345)) + 10 | 0 : digitToIntImpl(char);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_let_0 >= radix ? -1 : tmp0_let_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function Companion_9() {
    Companion_instance_8 = this;
    this._patternEscape = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
    this._replacementEscape = new RegExp('[\\$]', 'g');
    this._nativeReplacementEscape = new RegExp('\\$', 'g');
  }
  Companion_9.prototype.escape_6wfw3l_k$ = function (literal) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_nativeReplace_0 = this._patternEscape;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = literal;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.replace(tmp0_nativeReplace_0, '\\$&');
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_9.prototype.nativeEscapeReplacement_6wfw3l_k$ = function (literal) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_nativeReplace_0 = this._nativeReplacementEscape;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = literal;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.replace(tmp0_nativeReplace_0, '$$$$');
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_9();
    return Companion_instance_8;
  }
  function concatToString(_this_) {
    var result = '';
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var char = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      result = result + char;
    }
    return result;
  }
  function concatToString_0(_this_, startIndex, endIndex) {
    Companion_getInstance().checkBoundsIndexes_zd700_k$(startIndex, endIndex, _this_.length);
    var result = '';
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + _this_[index];
      }
       while (inductionVariable < endIndex);
    return result;
  }
  function replace(_this_, oldValue, newValue, ignoreCase) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_nativeReplace_0 = new RegExp(Companion_getInstance_8().escape_6wfw3l_k$(oldValue), ignoreCase ? 'gui' : 'gu');
      var tmp1_nativeReplace_0 = Companion_getInstance_8().nativeEscapeReplacement_6wfw3l_k$(newValue);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.replace(tmp0_nativeReplace_0, tmp1_nativeReplace_0);
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function replace$default(_this_, oldValue, newValue, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return replace(_this_, oldValue, newValue, ignoreCase);
  }
  function repeat(_this_, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + "Count 'n' must be non-negative, but was " + n + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    var tmp0_subject = n;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = '';
        break;
      case 1:
        tmp = toString_1(_this_);
        break;
      default:var result = '';
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = charSequenceLength(_this_) === 0;
          break $l$block_0;
        }

        if (!tmp$ret$1) {
          var s = toString_1(_this_);
          var count = n;
          $l$break: while (true) {
            if ((count & 1) === 1) {
              result = result + s;
            }count = count >>> 1;
            if (count === 0) {
              break $l$break;
            }s = s + s;
          }
        } else {
        }

        return result;
    }
    return tmp;
  }
  function isBlank(_this_) {
    var tmp;
    if (charSequenceLength(_this_) === 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_2: {
        var tmp0_all_0 = _get_indices_(_this_);
        var tmp_0;
        if (isInterface(tmp0_all_0, Collection)) {
          tmp_0 = tmp0_all_0.isEmpty_0_k$();
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
        var inductionVariable = tmp0_all_0._get_first__0_k$();
        var last_0 = tmp0_all_0._get_last__0_k$();
        if (inductionVariable <= last_0)
          do {
            var element_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = isWhitespace(charSequenceGet(_this_, element_2));
              break $l$block_0;
            }
            if (!tmp$ret$1) {
              tmp$ret$0 = false;
              break $l$block_2;
            } else {
            }
          }
           while (!(element_2 === last_0));
        tmp$ret$0 = true;
        break $l$block_2;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function stackTraceToString(_this_) {
    return (new ExceptionTraceBuilder()).buildFor_onfaoi_k$(_this_);
  }
  function hasSeen($this, exception) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_any_0 = $this._visited;
      var indexedObject = tmp0_any_0;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = element_2 === exception;
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = true;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = false;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function dumpFullTrace(_this_, $this, indent, qualifier) {
    if (dumpSelfTrace(_this_, $this, indent, qualifier))
      true;
    else
      return Unit_getInstance();
    Unit_getInstance();
    var cause = _this_.cause;
    while (!(cause == null)) {
      if (dumpSelfTrace(cause, $this, indent, 'Caused by: '))
        true;
      else
        return Unit_getInstance();
      Unit_getInstance();
      cause = cause.cause;
    }
  }
  function dumpSelfTrace(_this_, $this, indent, qualifier) {
    $this._target.append_uch40_k$(indent).append_uch40_k$(qualifier);
    Unit_getInstance();
    var shortInfo = _this_.toString();
    if (hasSeen($this, _this_)) {
      $this._target.append_uch40_k$('[CIRCULAR REFERENCE, SEE ABOVE: ').append_uch40_k$(shortInfo).append_uch40_k$(']\n');
      Unit_getInstance();
      return false;
    }var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = $this._visited;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(_this_);
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = _this_;
      break $l$block_0;
    }
    var tmp = tmp$ret$1.stack;
    var stack = (tmp == null ? true : typeof tmp === 'string') ? tmp : THROW_CCE();
    if (!(stack == null)) {
      var tmp$ret$3;
      $l$block_2: {
        var tmp_0 = stack;
        var tmp1_let_0 = indexOf$default(tmp_0, shortInfo, 0, false, 6, null);
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = tmp1_let_0 < 0 ? 0 : tmp1_let_0 + shortInfo.length | 0;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var stackStart = tmp$ret$3;
      if (stackStart === 0) {
        $this._target.append_uch40_k$(shortInfo).append_uch40_k$('\n');
        Unit_getInstance();
      }var tmp$ret$4;
      $l$block_3: {
        var tmp2_isEmpty_0 = $this._topStack;
        tmp$ret$4 = charSequenceLength(tmp2_isEmpty_0) === 0;
        break $l$block_3;
      }
      if (tmp$ret$4) {
        $this._topStack = stack;
        $this._topStackStart = stackStart;
      } else {
        {
          stack = dropCommonFrames($this, stack, stackStart);
        }
      }
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = charSequenceLength(indent) > 0;
        break $l$block_4;
      }
      if (tmp$ret$5) {
        var tmp_1;
        if (stackStart === 0) {
          tmp_1 = 0;
        } else {
          var tmp$ret$7;
          $l$block_6: {
            var count_1 = 0;
            var indexedObject = shortInfo;
            var inductionVariable = 0;
            var last_0 = indexedObject.length;
            while (inductionVariable < last_0) {
              var element_3 = charSequenceGet(indexedObject, inductionVariable);
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$6;
              $l$block_5: {
                tmp$ret$6 = element_3.equals(new Char(10));
                break $l$block_5;
              }
              if (tmp$ret$6) {
                count_1 = count_1 + 1 | 0;
                Unit_getInstance();
              } else {
              }
            }
            tmp$ret$7 = count_1;
            break $l$block_6;
          }
          tmp_1 = 1 + tmp$ret$7 | 0;
        }
        var messageLines = tmp_1;
        {
          var tmp3_forEachIndexed_0 = lineSequence(stack);
          var index_1 = 0;
          var tmp0_iterator_2 = tmp3_forEachIndexed_0.iterator_0_k$();
          while (tmp0_iterator_2.hasNext_0_k$()) {
            var item_3 = tmp0_iterator_2.next_0_k$();
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp4__anonymous__5 = checkIndexOverflow(tmp1_4);
              if (tmp4__anonymous__5 >= messageLines) {
                $this._target.append_uch40_k$(indent);
                Unit_getInstance();
              }$this._target.append_uch40_k$(item_3).append_uch40_k$('\n');
              Unit_getInstance();
            }
          }
        }
      } else {
        {
          $this._target.append_uch40_k$(stack).append_uch40_k$('\n');
          Unit_getInstance();
        }
      }
    } else {
      $this._target.append_uch40_k$(shortInfo).append_uch40_k$('\n');
      Unit_getInstance();
    }
    var suppressed = _get_suppressedExceptions_(_this_);
    var tmp$ret$8;
    $l$block_7: {
      tmp$ret$8 = !suppressed.isEmpty_0_k$();
      break $l$block_7;
    }
    if (tmp$ret$8) {
      var suppressedIndent = indent + '    ';
      var tmp0_iterator = suppressed.iterator_0_k$();
      while (tmp0_iterator.hasNext_0_k$()) {
        var s = tmp0_iterator.next_0_k$();
        dumpFullTrace(s, $this, suppressedIndent, 'Suppressed: ');
      }
    } else {
    }
    return true;
  }
  function dropCommonFrames($this, stack, stackStart) {
    var commonFrames = 0;
    var lastBreak = 0;
    var preLastBreak = 0;
    var inductionVariable = 0;
    var tmp$ret$0;
    $l$block: {
      var tmp0_minOf_0 = $this._topStack.length - $this._topStackStart | 0;
      var tmp1_minOf_0 = stack.length - stackStart | 0;
      tmp$ret$0 = Math.min(tmp0_minOf_0, tmp1_minOf_0);
      break $l$block;
    }
    var last_0 = tmp$ret$0;
    if (inductionVariable < last_0)
      $l$break: do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = charSequenceGet(stack, _get_lastIndex__1(stack) - pos | 0);
        if (!c.equals(charSequenceGet($this._topStack, _get_lastIndex__1($this._topStack) - pos | 0)))
          break $l$break;
        if (c.equals(new Char(10))) {
          commonFrames = commonFrames + 1 | 0;
          preLastBreak = lastBreak;
          lastBreak = pos;
        }}
       while (inductionVariable < last_0);
    if (commonFrames <= 1)
      return stack;
    while (preLastBreak > 0 ? charSequenceGet(stack, _get_lastIndex__1(stack) - (preLastBreak - 1 | 0) | 0).equals(new Char(32)) : false)
      preLastBreak = preLastBreak - 1 | 0;
    return dropLast(stack, preLastBreak) + ('' + '... and ' + (commonFrames - 1 | 0) + ' more common stack frames skipped');
  }
  function ExceptionTraceBuilder() {
    this._target = StringBuilder_init_$Create$_0();
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = [];
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    tmp._visited = tmp$ret$2;
    this._topStack = '';
    this._topStackStart = 0;
  }
  ExceptionTraceBuilder.prototype.buildFor_onfaoi_k$ = function (exception) {
    dumpFullTrace(exception, this, '', '');
    return this._target.toString();
  };
  ExceptionTraceBuilder.$metadata$ = {
    simpleName: 'ExceptionTraceBuilder',
    kind: 'class',
    interfaces: []
  };
  function _get_suppressedExceptions_(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var tmp0_safe_receiver = tmp$ret$0._suppressed;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_safe_receiver;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  }
  var DurationUnit_NANOSECONDS_instance;
  var DurationUnit_MICROSECONDS_instance;
  var DurationUnit_MILLISECONDS_instance;
  var DurationUnit_SECONDS_instance;
  var DurationUnit_MINUTES_instance;
  var DurationUnit_HOURS_instance;
  var DurationUnit_DAYS_instance;
  var DurationUnit_entriesInitialized;
  function DurationUnit_initEntries() {
    if (DurationUnit_entriesInitialized)
      return Unit_getInstance();
    DurationUnit_entriesInitialized = true;
    DurationUnit_NANOSECONDS_instance = new DurationUnit('NANOSECONDS', 0, 1.0);
    DurationUnit_MICROSECONDS_instance = new DurationUnit('MICROSECONDS', 1, 1000.0);
    DurationUnit_MILLISECONDS_instance = new DurationUnit('MILLISECONDS', 2, 1000000.0);
    DurationUnit_SECONDS_instance = new DurationUnit('SECONDS', 3, 1.0E9);
    DurationUnit_MINUTES_instance = new DurationUnit('MINUTES', 4, 6.0E10);
    DurationUnit_HOURS_instance = new DurationUnit('HOURS', 5, 3.6E12);
    DurationUnit_DAYS_instance = new DurationUnit('DAYS', 6, 8.64E13);
  }
  function DurationUnit(name, ordinal, scale) {
    Enum.call(this, name, ordinal);
    this._scale = scale;
  }
  DurationUnit.$metadata$ = {
    simpleName: 'DurationUnit',
    kind: 'class',
    interfaces: []
  };
  function convertDurationUnit(value, sourceUnit, targetUnit) {
    var sourceCompareTarget = compareTo(sourceUnit._scale, targetUnit._scale);
    return sourceCompareTarget > 0 ? value * (sourceUnit._scale / targetUnit._scale) : sourceCompareTarget < 0 ? value / (targetUnit._scale / sourceUnit._scale) : value;
  }
  function convertDurationUnit_0(value, sourceUnit, targetUnit) {
    var sourceCompareTarget = compareTo(sourceUnit._scale, targetUnit._scale);
    var tmp;
    if (sourceCompareTarget > 0) {
      var scale = numberToLong(sourceUnit._scale / targetUnit._scale);
      var result = value.times_wiekkq_k$(scale);
      var tmp_0;
      if (result.div_wiekkq_k$(scale).equals(value)) {
        tmp_0 = result;
      } else if (value.compareTo_wiekkq_k$(new Long(0, 0)) > 0) {
        Companion_getInstance_11();
        tmp_0 = new Long(-1, 2147483647);
      } else {
        Companion_getInstance_11();
        tmp_0 = new Long(0, -2147483648);
      }
      tmp = tmp_0;
    } else if (sourceCompareTarget < 0) {
      tmp = value.div_wiekkq_k$(numberToLong(targetUnit._scale / sourceUnit._scale));
    } else {
      tmp = value;
    }
    return tmp;
  }
  function DurationUnit_NANOSECONDS_getInstance() {
    DurationUnit_initEntries();
    return DurationUnit_NANOSECONDS_instance;
  }
  function DurationUnit_MILLISECONDS_getInstance() {
    DurationUnit_initEntries();
    return DurationUnit_MILLISECONDS_instance;
  }
  function DurationUnit_SECONDS_getInstance() {
    DurationUnit_initEntries();
    return DurationUnit_SECONDS_instance;
  }
  function DurationUnit_MINUTES_getInstance() {
    DurationUnit_initEntries();
    return DurationUnit_MINUTES_instance;
  }
  function DurationUnit_HOURS_getInstance() {
    DurationUnit_initEntries();
    return DurationUnit_HOURS_instance;
  }
  function DurationUnit_DAYS_getInstance() {
    DurationUnit_initEntries();
    return DurationUnit_DAYS_instance;
  }
  function MonotonicTimeSource() {
    MonotonicTimeSource_instance = this;
    var tmp = this;
    var tmp$ret$4;
    $l$block_3: {
      {
      }
      var tmp$ret$3;
      $l$block_2: {
        var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
        var tmp_0;
        if (isNode_2) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = process;
            tmp$ret$0 = tmp0_unsafeCast_0_3;
            break $l$block;
          }
          tmp_0 = new HrTimeSource(tmp$ret$0);
        } else {
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_unsafeCast_0_7 = self;
            tmp$ret$1 = tmp1_unsafeCast_0_7;
            break $l$block_0;
          }
          var tmp0_safe_receiver_6 = tmp$ret$1;
          var tmp1_safe_receiver_5 = tmp0_safe_receiver_6 == null ? null : tmp0_safe_receiver_6.performance;
          var tmp_1;
          if (tmp1_safe_receiver_5 == null) {
            tmp_1 = null;
          } else {
            var tmp$ret$2;
            $l$block_1: {
              {
              }
              tmp$ret$2 = new PerformanceTimeSource(tmp1_safe_receiver_5);
              break $l$block_1;
            }
            tmp_1 = tmp$ret$2;
          }
          var tmp2_elvis_lhs_4 = tmp_1;
          tmp_0 = tmp2_elvis_lhs_4 == null ? DateNowTimeSource_getInstance() : tmp2_elvis_lhs_4;
        }
        tmp$ret$3 = tmp_0;
        break $l$block_2;
      }
      tmp$ret$4 = tmp$ret$3;
      break $l$block_3;
    }
    tmp._actualSource = tmp$ret$4;
  }
  MonotonicTimeSource.prototype.markNow_0_k$ = function () {
    return this._actualSource.markNow_0_k$();
  };
  MonotonicTimeSource.$metadata$ = {
    simpleName: 'MonotonicTimeSource',
    kind: 'object',
    interfaces: [TimeSource]
  };
  var MonotonicTimeSource_instance;
  function MonotonicTimeSource_getInstance() {
    if (MonotonicTimeSource_instance == null)
      new MonotonicTimeSource();
    return MonotonicTimeSource_instance;
  }
  function _no_name_provided__29(this$0) {
    this._this$0_4 = this$0;
    TimeMark.call(this);
    this._startedAt_0 = this._this$0_4._process.hrtime();
  }
  _no_name_provided__29.prototype.elapsedNow_jukv7u_k$ = function () {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_let_0 = this._this$0_4._process.hrtime(this._startedAt_0);
      {
      }
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_let_0[0];
          break $l$block;
        }
        var seconds_2 = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = tmp0_let_0[1];
          break $l$block_0;
        }
        var nanos_3 = tmp$ret$1;
        tmp$ret$2 = Duration__plus_impl(toDuration(seconds_2, DurationUnit_SECONDS_getInstance()), toDuration(nanos_3, DurationUnit_NANOSECONDS_getInstance()));
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function HrTimeSource(process) {
    this._process = process;
  }
  HrTimeSource.prototype.markNow_0_k$ = function () {
    return new _no_name_provided__29(this);
  };
  HrTimeSource.prototype.toString = function () {
    return 'TimeSource(process.hrtime())';
  };
  HrTimeSource.$metadata$ = {
    simpleName: 'HrTimeSource',
    kind: 'class',
    interfaces: [TimeSource]
  };
  function PerformanceTimeSource(performance) {
    AbstractDoubleTimeSource.call(this, DurationUnit_MILLISECONDS_getInstance());
    this._performance = performance;
  }
  PerformanceTimeSource.prototype.read_0_k$ = function () {
    return this._performance.now();
  };
  PerformanceTimeSource.prototype.toString = function () {
    return 'TimeSource(self.performance.now())';
  };
  PerformanceTimeSource.$metadata$ = {
    simpleName: 'PerformanceTimeSource',
    kind: 'class',
    interfaces: []
  };
  function DateNowTimeSource() {
    DateNowTimeSource_instance = this;
    AbstractDoubleTimeSource.call(this, DurationUnit_MILLISECONDS_getInstance());
  }
  DateNowTimeSource.prototype.read_0_k$ = function () {
    return Date.now();
  };
  DateNowTimeSource.prototype.toString = function () {
    return 'TimeSource(Date.now())';
  };
  DateNowTimeSource.$metadata$ = {
    simpleName: 'DateNowTimeSource',
    kind: 'object',
    interfaces: []
  };
  var DateNowTimeSource_instance;
  function DateNowTimeSource_getInstance() {
    if (DateNowTimeSource_instance == null)
      new DateNowTimeSource();
    return DateNowTimeSource_instance;
  }
  function Companion_10() {
    Companion_instance_9 = this;
    this._MIN_VALUE_1 = new Char(0);
    this._MAX_VALUE_1 = new Char(65535);
    this._MIN_HIGH_SURROGATE = new Char(55296);
    this._MAX_HIGH_SURROGATE = new Char(56319);
    this._MIN_LOW_SURROGATE = new Char(56320);
    this._MAX_LOW_SURROGATE = new Char(57343);
    this._MIN_SURROGATE = new Char(55296);
    this._MAX_SURROGATE = new Char(57343);
    this._SIZE_BYTES_1 = 2;
    this._SIZE_BITS_1 = 16;
  }
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_10();
    return Companion_instance_9;
  }
  function Char(code) {
    Companion_getInstance_9();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___get_data__impl_(code) & 65535;
      break $l$block;
    }
    tmp._value_1 = tmp$ret$0;
  }
  Char.prototype.compareTo_wi8o78_k$ = function (other) {
    return this._value_1 - other._value_1 | 0;
  };
  Char.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_wi8o78_k$(other instanceof Char ? other : THROW_CCE());
  };
  Char.prototype.minus_wi8o78_k$ = function (other) {
    return this._value_1 - other._value_1 | 0;
  };
  Char.prototype.toInt_0_k$ = function () {
    return this._value_1;
  };
  Char.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char))
      return false;
    else {
    }
    return this._value_1 === other._value_1;
  };
  Char.prototype.hashCode = function () {
    return this._value_1;
  };
  Char.prototype.toString = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = String.fromCharCode(this._value_1);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_11() {
    Companion_instance_10 = this;
  }
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_11();
    return Companion_instance_10;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_10();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype._get_ordinal__0_k$ = function () {
    return this._ordinal;
  };
  Enum.prototype.compareTo_2bq_k$ = function (other) {
    return compareTo(this._ordinal, other._ordinal);
  };
  Enum.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_2bq_k$(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last_0 = array.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last_0));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__30(array);
  }
  function charArray(size) {
    var tmp$ret$4;
    $l$block_3: {
      var tmp$ret$3;
      $l$block_2: {
        var tmp = Array(size);
        var tmp$ret$2;
        $l$block_1: {
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            Companion_getInstance_9();
            var tmp0__get_code__0_1 = new Char(0);
            tmp$ret$0 = tmp0__get_code__0_1.toInt_0_k$();
            break $l$block;
          }
          if (0 < tmp$ret$0) {
            tmp_0 = true;
          } else {
            {
              var tmp$ret$1;
              $l$block_0: {
                Companion_getInstance_9();
                var tmp1__get_code__0_2 = new Char(65535);
                tmp$ret$1 = tmp1__get_code__0_2.toInt_0_k$();
                break $l$block_0;
              }
              tmp_0 = 0 > tmp$ret$1;
            }
          }
          if (tmp_0) {
            throw IllegalArgumentException_init_$Create$('Invalid Char code: 0');
          } else {
          }
          tmp$ret$2 = new Char(0);
          break $l$block_1;
        }
        var tmp0_withType_0 = fillArrayVal(tmp, tmp$ret$2);
        tmp0_withType_0.$type$ = 'CharArray';
        tmp$ret$3 = tmp0_withType_0;
        break $l$block_2;
      }
      var tmp1_unsafeCast_0 = tmp$ret$3;
      tmp$ret$4 = tmp1_unsafeCast_0;
      break $l$block_3;
    }
    return tmp$ret$4;
  }
  function charArrayOf(arr) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = arr;
          break $l$block;
        }
        var tmp0_withType_0 = tmp$ret$0.slice();
        tmp0_withType_0.$type$ = 'CharArray';
        tmp$ret$1 = tmp0_withType_0;
        break $l$block_0;
      }
      var tmp1_unsafeCast_0 = tmp$ret$1;
      tmp$ret$2 = tmp1_unsafeCast_0;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function _no_name_provided__30($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__30.prototype.hasNext_0_k$ = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__30.prototype.next_0_k$ = function () {
    var tmp;
    if (!(this._index_0 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_0);
    }
    return tmp;
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function doubleToRawBits(value) {
    bufFloat64[0] = value;
    return new Long(bufInt32[lowIndex], bufInt32[highIndex]);
  }
  function doubleFromBits(value) {
    bufInt32[lowIndex] = value._low;
    bufInt32[highIndex] = value._high;
    return bufFloat64[0];
  }
  function getNumberHashCode(obj) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = new Float64Array(buf);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function bufInt32$init$() {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = new Int32Array(buf);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function lowIndex$init$() {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        bufFloat64[0] = -1.0;
        tmp$ret$0 = !(bufInt32[0] === 0) ? 1 : 0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = a;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        var tmp1_Char_0 = tmp$ret$1;
        var tmp_0;
        var tmp$ret$2;
        $l$block_1: {
          Companion_getInstance_9();
          var tmp0__get_code__0_1 = new Char(0);
          tmp$ret$2 = tmp0__get_code__0_1.toInt_0_k$();
          break $l$block_1;
        }
        if (tmp1_Char_0 < tmp$ret$2) {
          tmp_0 = true;
        } else {
          {
            var tmp$ret$3;
            $l$block_2: {
              Companion_getInstance_9();
              var tmp1__get_code__0_2 = new Char(65535);
              tmp$ret$3 = tmp1__get_code__0_2.toInt_0_k$();
              break $l$block_2;
            }
            tmp_0 = tmp1_Char_0 > tmp$ret$3;
          }
        }
        if (tmp_0) {
          throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp1_Char_0);
        } else {
        }
        tmp$ret$4 = numberToChar(tmp1_Char_0);
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      tmp = a.get_ha5a7z_k$(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.length;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a._get_length__0_k$();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.substring(startIndex, endIndex);
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a.subSequence_27zxwg_k$(startIndex, endIndex);
    }
    return tmp;
  }
  function contentHashCodeInternal(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var a = tmp$ret$0;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last_0 = a.length;
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode(a[i]) | 0;
      }
       while (inductionVariable < last_0);
    return result;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_25(), 24, null);
  }
  function _no_name_provided__31() {
  }
  _no_name_provided__31.prototype.invoke_wi7j7l_k$ = function (it) {
    return toString_1(it);
  };
  _no_name_provided__31.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_25() {
    var i = new _no_name_provided__31();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_0_k$());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 1;
          break $l$block;
        }
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 1;
          break $l$block_0;
        }
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_2c5_k$(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = obj;
          break $l$block;
        }

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = o.toString();
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last_0 = length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = str;
          break $l$block;
        }
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last_0));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 1;
            break $l$block;
          }
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function boxIntrinsic(x) {
    throw IllegalStateException_init_$Create$('Should be lowered');
  }
  function unboxIntrinsic(x) {
    throw IllegalStateException_init_$Create$('Should be lowered');
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = dst;
      break $l$block;
    }
    var arr = tmp$ret$0;
    while (index < srcLen ? index < dstLen : false) {
      var tmp = index;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      arr[tmp] = src[tmp0];
    }
    return dst;
  }
  function Companion_12() {
    Companion_instance_11 = this;
    this._MIN_VALUE_2 = new Long(0, -2147483648);
    this._MAX_VALUE_2 = new Long(-1, 2147483647);
    this._SIZE_BYTES_2 = 8;
    this._SIZE_BITS_2 = 64;
  }
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_12();
    return Companion_instance_11;
  }
  function Long(low, high) {
    Companion_getInstance_11();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_wiekkq_k$ = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_wiekkq_k$(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.plus_wiekkq_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_wiekkq_k$ = function (other) {
    return subtract(this, other);
  };
  Long.prototype.times_wiekkq_k$ = function (other) {
    return multiply(this, other);
  };
  Long.prototype.div_wiekkq_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.rem_wiekkq_k$ = function (other) {
    return modulo(this, other);
  };
  Long.prototype.unaryMinus_0_k$ = function () {
    return this.inv_0_k$().plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.rangeTo_wiekkq_k$ = function (other) {
    return new LongRange(this, other);
  };
  Long.prototype.shl_ha5a7z_k$ = function (bitCount) {
    return shiftLeft(this, bitCount);
  };
  Long.prototype.shr_ha5a7z_k$ = function (bitCount) {
    return shiftRight(this, bitCount);
  };
  Long.prototype.ushr_ha5a7z_k$ = function (bitCount) {
    return shiftRightUnsigned(this, bitCount);
  };
  Long.prototype.and_wiekkq_k$ = function (other) {
    return new Long(this._low & other._low, this._high & other._high);
  };
  Long.prototype.or_wiekkq_k$ = function (other) {
    return new Long(this._low | other._low, this._high | other._high);
  };
  Long.prototype.xor_wiekkq_k$ = function (other) {
    return new Long(this._low ^ other._low, this._high ^ other._high);
  };
  Long.prototype.inv_0_k$ = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toByte_0_k$ = function () {
    return toByte(this._low);
  };
  Long.prototype.toInt_0_k$ = function () {
    return this._low;
  };
  Long.prototype.toDouble_0_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_0_k$();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_0_k$());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_wiekkq_k$(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_wiekkq_k$(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_wiekkq_k$(negate(other));
      } else {
        tmp = negate(negate(_this_).div_wiekkq_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_wiekkq_k$(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function modulo(_this_, other) {
    return subtract(_this_, multiply(_this_.div_wiekkq_k$(other), other));
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function shiftRightUnsigned(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >>> numBits_0);
      } else {
        var tmp;
        if (numBits_0 === 32) {
          tmp = new Long(_this_._high, 0);
        } else {
          tmp = new Long(_this_._high >>> (numBits_0 - 32 | 0), 0);
        }
        return tmp;
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_wiekkq_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_0_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_wiekkq_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_0_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = tmp1_unsafeCast_0;
        break $l$block_2;
      }
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_0_k$();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function toByte(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toByte$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_0_k$();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function numberToDouble(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = numberToDouble$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toShort(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toShort$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToLong(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a;
    } else {
      {
        tmp = fromNumber(a);
      }
    }
    return tmp;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toUShort_0 = numberToInt(a);
      tmp$ret$0 = _UShort___init__impl_(toShort(tmp0_toUShort_0));
      break $l$block;
    }
    return new Char(tmp$ret$0);
  }
  function toLong_0(a) {
    return fromInt(a);
  }
  function toByte$outlinedJsCode$(a) {
    return a << 24 >> 24;
  }
  function numberToDouble$outlinedJsCode$(a) {
    return +a;
  }
  function toShort$outlinedJsCode$(a) {
    return a << 16 >> 16;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Array.isArray(obj);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = obj;
        break $l$block;
      }
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isComparable(value) {
    var type = typeof value;
    return ((type === 'string' ? true : type === 'boolean') ? true : isNumber(value)) ? true : isInterface(value, _get_js_(getKClass_0(Comparable)));
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function copyOf(_this_, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    return fillFrom(_this_, new Int8Array(newSize));
  }
  function copyOfRange(_this_, fromIndex, toIndex) {
    Companion_getInstance().checkRangeIndexes_zd700_k$(fromIndex, toIndex, _this_.length);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    return tmp$ret$0.slice(fromIndex, toIndex);
  }
  function contentHashCode(_this_) {
    return contentHashCodeInternal(_this_);
  }
  function asList(_this_) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return new ArrayList(tmp$ret$1);
  }
  function sortWith_0(_this_, comparator) {
    if (_this_.length > 1)
      sortArrayWith(_this_, comparator);
  }
  function decodeVarLenBase64(base64, fromBase64, resultLength) {
    var result = new Int32Array(resultLength);
    var index = 0;
    var int = 0;
    var shift = 0;
    var indexedObject = base64;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var char = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = char.toInt_0_k$();
        break $l$block;
      }
      var sixBit = fromBase64[tmp$ret$0];
      int = int | (sixBit & 31) << shift;
      if (sixBit < 32) {
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        result[tmp1] = int;
        int = 0;
        shift = 0;
      } else {
        shift = shift + 5 | 0;
      }
    }
    return result;
  }
  function reverse(_this_) {
    var midPoint = (_this_._get_size__0_k$() / 2 | 0) - 1 | 0;
    if (midPoint < 0)
      return Unit_getInstance();
    var reverseIndex = _get_lastIndex__0(_this_);
    var inductionVariable = 0;
    if (inductionVariable <= midPoint)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = _this_.get_ha5a7z_k$(index);
        _this_.set_ddb1qf_k$(index, _this_.get_ha5a7z_k$(reverseIndex));
        Unit_getInstance();
        _this_.set_ddb1qf_k$(reverseIndex, tmp);
        Unit_getInstance();
        var tmp1 = reverseIndex;
        reverseIndex = tmp1 - 1 | 0;
        Unit_getInstance();
      }
       while (!(index === midPoint));
  }
  function isDigitImpl(_this_) {
    return digitToIntImpl(_this_) >= 0;
  }
  function binarySearchRange(array, needle) {
    var bottom = 0;
    var top = array.length - 1 | 0;
    var middle = -1;
    var value = 0;
    while (bottom <= top) {
      middle = (bottom + top | 0) / 2 | 0;
      value = array[middle];
      if (needle > value)
        bottom = middle + 1 | 0;
      else if (needle === value)
        return middle;
      else
        top = middle - 1 | 0;
    }
    return middle - (needle < value ? 1 : 0) | 0;
  }
  function digitToIntImpl(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_.toInt_0_k$();
      break $l$block;
    }
    var ch = tmp$ret$0;
    var index = binarySearchRange(Digit_getInstance()._rangeStart, ch);
    var diff = ch - Digit_getInstance()._rangeStart[index] | 0;
    return diff < 10 ? diff : -1;
  }
  function Digit() {
    Digit_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
      break $l$block;
    }
    tmp._rangeStart = tmp$ret$0;
  }
  Digit.$metadata$ = {
    simpleName: 'Digit',
    kind: 'object',
    interfaces: []
  };
  var Digit_instance;
  function Digit_getInstance() {
    if (Digit_instance == null)
      new Digit();
    return Digit_instance;
  }
  function isLetterImpl(_this_) {
    return !(getLetterType(_this_) === 0);
  }
  function getLetterType(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_.toInt_0_k$();
      break $l$block;
    }
    var ch = tmp$ret$0;
    var index = binarySearchRange(Letter_getInstance()._decodedRangeStart, ch);
    var rangeStart = Letter_getInstance()._decodedRangeStart[index];
    var rangeEnd = (rangeStart + Letter_getInstance()._decodedRangeLength[index] | 0) - 1 | 0;
    var code = Letter_getInstance()._decodedRangeCategory[index];
    if (ch > rangeEnd) {
      return 0;
    }var lastTwoBits = code & 3;
    if (lastTwoBits === 0) {
      var shift = 2;
      var threshold = rangeStart;
      var inductionVariable = 0;
      if (inductionVariable <= 1)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          threshold = threshold + (code >> shift & 127) | 0;
          if (threshold > ch) {
            return 3;
          }shift = shift + 7 | 0;
          threshold = threshold + (code >> shift & 127) | 0;
          if (threshold > ch) {
            return 0;
          }shift = shift + 7 | 0;
        }
         while (inductionVariable <= 1);
      return 3;
    }if (code <= 7) {
      return lastTwoBits;
    }var distance = ch - rangeStart | 0;
    var shift_0 = code <= 31 ? distance % 2 : distance;
    return code >> imul(2, shift_0) & 3;
  }
  function Letter() {
    Letter_instance = this;
    var toBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var fromBase64 = new Int32Array(128);
    var inductionVariable = 0;
    var last_0 = charSequenceLength(toBase64) - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__get_code__0 = charSequenceGet(toBase64, i);
          tmp$ret$0 = tmp0__get_code__0.toInt_0_k$();
          break $l$block;
        }
        fromBase64[tmp$ret$0] = i;
      }
       while (inductionVariable <= last_0);
    var rangeStartDiff = 'hCgBpCQGYHZH5BRpBPPPPPPRMP5BPPlCPP6BkEPPPPcPXPzBvBrB3BOiDoBHwD+E3DauCnFmBmB2D6E1BlBTiBmBlBP5BhBiBrBvBjBqBnBPRtBiCmCtBlB0BmB5BiB7BmBgEmChBZgCoEoGVpBSfRhBPqKQ2BwBYoFgB4CJuTiEvBuCuDrF5DgEgFlJ1DgFmBQtBsBRGsB+BPiBlD1EIjDPRPPPQPPPPPGQSQS/DxENVNU+B9zCwBwBPPCkDPNnBPqDYY1R8B7FkFgTgwGgwUwmBgKwBuBScmEP/BPPPPPPrBP8B7F1B/ErBqC6B7BiBmBfQsBUwCw/KwqIwLwETPcPjQgJxFgBlBsD';
    var diff = decodeVarLenBase64(rangeStartDiff, fromBase64, 222);
    var start = new Int32Array(diff.length);
    var inductionVariable_0 = 0;
    var last_1 = diff.length - 1 | 0;
    if (inductionVariable_0 <= last_1)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (i_0 === 0)
          start[i_0] = diff[i_0];
        else
          start[i_0] = start[i_0 - 1 | 0] + diff[i_0] | 0;
      }
       while (inductionVariable_0 <= last_1);
    this._decodedRangeStart = start;
    var rangeLength = 'aaMBXHYH5BRpBPPPPPPRMP5BPPlCPPzBDOOPPcPXPzBvBjB3BOhDmBBpB7DoDYxB+EiBP1DoExBkBQhBekBPmBgBhBctBiBMWOOXhCsBpBkBUV3Ba4BkB0DlCgBXgBtD4FSdBfPhBPpKP0BvBXjEQ2CGsT8DhBtCqDpFvD1D3E0IrD2EkBJrBDOBsB+BPiBlB1EIjDPPPPPPPPPPPGPPMNLsBNPNPKCvBvBPPCkDPBmBPhDXXgD4B6FzEgDguG9vUtkB9JcuBSckEP/BPPPPPPBPf4FrBjEhBpC3B5BKaWPrBOwCk/KsCuLqDHPbPxPsFtEaaqDL';
    this._decodedRangeLength = decodeVarLenBase64(rangeLength, fromBase64, 222);
    var rangeCategory = 'GFjgggUHGGFFZZZmzpz5qB6s6020B60ptltB6smt2sB60mz22B1+vv+8BZZ5s2850BW5q1ymtB506smzBF3q1q1qB1q1q1+Bgii4wDTm74g3KiggxqM60q1q1Bq1o1q1BF1qlrqrBZ2q5wprBGFZWWZGHFsjiooLowgmOowjkwCkgoiIk7ligGogiioBkwkiYkzj2oNoi+sbkwj04DghhkQ8wgiYkgoioDsgnkwC4gikQ//v+85BkwvoIsgoyI4yguI0whiwEowri4CoghsJowgqYowgm4DkwgsY/nwnzPowhmYkg6wI8yggZswikwHgxgmIoxgqYkwgk4DkxgmIkgoioBsgssoBgzgyI8g9gL8g9kI0wgwJoxgkoC0wgioFkw/wI0w53iF4gioYowjmgBHGq1qkgwBF1q1q8qBHwghuIwghyKk0goQkwgoQk3goQHGFHkyg0pBgxj6IoinkxDswno7Ikwhz9Bo0gioB8z48Rwli0xN0mpjoX8w78pDwltoqKHFGGwwgsIHFH3q1q16BFHWFZ1q10q1B2qlwq1B1q10q1B2q1yq1B6q1gq1Biq1qhxBir1qp1Bqt1q1qB1g1q1+B//3q16B///q1qBH/qlqq9Bholqq9B1i00a1q10qD1op1HkwmigEigiy6Cptogq1Bixo1kDq7/j00B2qgoBWGFm1lz50B6s5q1+BGWhggzhwBFFhgk4//Bo2jigE8wguI8wguI8wgugUog1qoB4qjmIwwi2KgkYHHH4lBgiFWkgIWoghssMmz5smrBZ3q1y50B5sm7gzBtz1smzB5smz50BqzqtmzB5sgzqzBF2/9//5BowgoIwmnkzPkwgk4C8ys65BkgoqI0wgy6FghquZo2giY0ghiIsgh24B4ghsQ8QF/v1q1OFs0O8iCHHF1qggz/B8wg6Iznv+//B08QgohsjK0QGFk7hsQ4gB';
    this._decodedRangeCategory = decodeVarLenBase64(rangeCategory, fromBase64, 222);
  }
  Letter.$metadata$ = {
    simpleName: 'Letter',
    kind: 'object',
    interfaces: []
  };
  var Letter_instance;
  function Letter_getInstance() {
    if (Letter_instance == null)
      new Letter();
    return Letter_instance;
  }
  function isWhitespaceImpl(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_.toInt_0_k$();
      break $l$block;
    }
    var ch = tmp$ret$0;
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$(message, $this) {
    extendThrowable($this, message, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message) {
    var tmp = RuntimeException_init_$Init$_0(message, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function NumberFormatException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    NumberFormatException.call($this);
    return $this;
  }
  function NumberFormatException_init_$Create$(message) {
    var tmp = NumberFormatException_init_$Init$(message, Object.create(NumberFormatException.prototype));
    captureStack(tmp, NumberFormatException_init_$Create$);
    return tmp;
  }
  function NumberFormatException() {
    captureStack(this, NumberFormatException);
  }
  NumberFormatException.$metadata$ = {
    simpleName: 'NumberFormatException',
    kind: 'class',
    interfaces: []
  };
  function AssertionError_init_$Init$(message, $this) {
    Error_init_$Init$(message, $this);
    AssertionError.call($this);
    return $this;
  }
  function AssertionError_init_$Create$(message) {
    var tmp = AssertionError_init_$Init$(message, Object.create(AssertionError.prototype));
    captureStack(tmp, AssertionError_init_$Create$);
    return tmp;
  }
  function AssertionError() {
    captureStack(this, AssertionError);
  }
  AssertionError.$metadata$ = {
    simpleName: 'AssertionError',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack);
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function toBits(_this_) {
    var tmp;
    if (isNaN_0(_this_)) {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = _this_;
    }
    return doubleToRawBits(tmp);
  }
  function sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0(function_0) {
    this._function = function_0;
  }
  sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0.prototype.test_wi8o78_k$ = function (value) {
    return this._function(value);
  };
  sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0.$metadata$ = {
    simpleName: 'sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0',
    kind: 'class',
    interfaces: [CharPredicate]
  };
  function sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_0(function_0) {
    this._function_0 = function_0;
  }
  sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_0.prototype.test_wi8o78_k$ = function (value) {
    return this._function_0(value);
  };
  sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_0.$metadata$ = {
    simpleName: 'sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0',
    kind: 'class',
    interfaces: [CharPredicate]
  };
  function sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_1(function_0) {
    this._function_1 = function_0;
  }
  sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_1.prototype.test_wi8o78_k$ = function (value) {
    return this._function_1(value);
  };
  sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_1.$metadata$ = {
    simpleName: 'sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0',
    kind: 'class',
    interfaces: [CharPredicate]
  };
  function _no_name_provided__32() {
  }
  _no_name_provided__32.prototype.invoke_wi8o78_k$ = function (p0) {
    return isLetter(p0);
  };
  _no_name_provided__32.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi8o78_k$(p1 instanceof Char ? p1 : THROW_CCE());
  };
  _no_name_provided__32.prototype._get_name__0_k$ = function () {
    return 'isLetter';
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__33() {
  }
  _no_name_provided__33.prototype.invoke_wi8o78_k$ = function (p0) {
    return isDigit(p0);
  };
  _no_name_provided__33.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi8o78_k$(p1 instanceof Char ? p1 : THROW_CCE());
  };
  _no_name_provided__33.prototype._get_name__0_k$ = function () {
    return 'isDigit';
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__34() {
  }
  _no_name_provided__34.prototype.invoke_wi8o78_k$ = function (p0) {
    return isLetterOrDigit(p0);
  };
  _no_name_provided__34.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi8o78_k$(p1 instanceof Char ? p1 : THROW_CCE());
  };
  _no_name_provided__34.prototype._get_name__0_k$ = function () {
    return 'isLetterOrDigit';
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Companion_13() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = _no_name_provided_$factory_26();
    tmp._isLetter = new sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = _no_name_provided_$factory_27();
    tmp_1._isDigit = new sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_0(tmp_2);
    var tmp_3 = this;
    var tmp_4 = _no_name_provided_$factory_28();
    tmp_3._isLetterOrDigit = new sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_1(tmp_4);
  }
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_13();
    return Companion_instance_12;
  }
  function CharPredicate() {
  }
  CharPredicate.$metadata$ = {
    simpleName: 'CharPredicate',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_26() {
    var i = new _no_name_provided__32();
    var l = function (p1) {
      return i.invoke_wi8o78_k$(p1);
    };
    l.callableName = i._get_name__0_k$();
    return l;
  }
  function _no_name_provided_$factory_27() {
    var i = new _no_name_provided__33();
    var l = function (p1) {
      return i.invoke_wi8o78_k$(p1);
    };
    l.callableName = i._get_name__0_k$();
    return l;
  }
  function _no_name_provided_$factory_28() {
    var i = new _no_name_provided__34();
    var l = function (p1) {
      return i.invoke_wi8o78_k$(p1);
    };
    l.callableName = i._get_name__0_k$();
    return l;
  }
  function GrammarDSL() {
  }
  GrammarDSL.prototype.prefix$default_914gix_k$ = function (type, parselet, override, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      override = false;
    return $handler == null ? this.prefix_un6blj_k$(type, parselet, override) : $handler(type, parselet, override);
  };
  GrammarDSL.prototype.infix$default_dfvar_k$ = function (type, parselet, override, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      override = false;
    return $handler == null ? this.infix_37epv1_k$(type, parselet, override) : $handler(type, parselet, override);
  };
  GrammarDSL.$metadata$ = {
    simpleName: 'GrammarDSL',
    kind: 'interface',
    interfaces: []
  };
  function LexerDSL() {
  }
  LexerDSL.prototype.invoke_b8gbam_k$ = function (_this__0, block) {
    this.matching_wi8o78_k$(_this__0).configure_mo7eqk_k$(block);
  };
  LexerDSL.prototype.invoke_rw362x_k$ = function (_this__0, block) {
    this.matching_6wfw3l_k$(_this__0).configure_mo7eqk_k$(block);
  };
  LexerDSL.$metadata$ = {
    simpleName: 'LexerDSL',
    kind: 'interface',
    interfaces: []
  };
  function Companion_14() {
    Companion_instance_13 = this;
  }
  Companion_14.prototype.create_x7pxok_k$ = function (block) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = new GrammarBuilder();
      {
      }
      block(tmp0_apply_0);
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0.build_0_k$();
  };
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_14();
    return Companion_instance_13;
  }
  function Grammar(prefix, infix) {
    Companion_getInstance_13();
    this._prefix = prefix;
    this._infix = infix;
  }
  Grammar.prototype.toString = function () {
    return '' + 'Grammar(prefix=' + this._prefix + ', infix=' + this._infix + ')';
  };
  Grammar.prototype.hashCode = function () {
    var result = hashCode(this._prefix);
    result = imul(result, 31) + hashCode(this._infix) | 0;
    return result;
  };
  Grammar.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Grammar))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Grammar ? other : THROW_CCE();
    if (!equals_0(this._prefix, tmp0_other_with_cast._prefix))
      return false;
    if (!equals_0(this._infix, tmp0_other_with_cast._infix))
      return false;
    return true;
  };
  Grammar.$metadata$ = {
    simpleName: 'Grammar',
    kind: 'class',
    interfaces: []
  };
  function InfixParselet() {
  }
  InfixParselet.$metadata$ = {
    simpleName: 'InfixParselet',
    kind: 'interface',
    interfaces: []
  };
  function PrefixParselet() {
  }
  PrefixParselet.$metadata$ = {
    simpleName: 'PrefixParselet',
    kind: 'interface',
    interfaces: []
  };
  function Companion_15() {
    Companion_instance_14 = this;
  }
  Companion_15.prototype.create_stlp8_k$ = function (block) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = new MatcherImpl();
      {
      }
      block(tmp0_apply_0);
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return new LexerImpl(tmp$ret$0);
  };
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_15();
    return Companion_instance_14;
  }
  function _no_name_provided__35($collection) {
    this._$collection = $collection;
  }
  _no_name_provided__35.prototype.invoke_iav7o_k$ = function (it) {
    this._$collection.add_2bq_k$(it);
    Unit_getInstance();
  };
  _no_name_provided__35.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_iav7o_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Lexer() {
  }
  Lexer.prototype.parseTo_jahqw7_k$ = function (source, collection) {
    this.parse_92wbp5_k$(source, _no_name_provided_$factory_29(collection));
    return collection;
  };
  Lexer.prototype.parseToList_97u0gy_k$ = function (source) {
    return this.parseTo_jahqw7_k$(source, ArrayList_init_$Create$());
  };
  Lexer.$metadata$ = {
    simpleName: 'Lexer',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_29($collection) {
    var i = new _no_name_provided__35($collection);
    return function (p1) {
      i.invoke_iav7o_k$(p1);
      return Unit_getInstance();
    };
  }
  function LexerContext() {
  }
  LexerContext.$metadata$ = {
    simpleName: 'LexerContext',
    kind: 'interface',
    interfaces: []
  };
  function Section(source, index, length) {
    this._source = source;
    this._index_1 = index;
    this._length = length;
    var sourceBounds = this._source._get_bounds__0_k$();
    {
      var containsLower = sourceBounds._get_first__0_k$();
      var containsUpper = sourceBounds._get_last__0_k$();
      var containsArg = this._index_1;
      var tmp0_require_0 = containsLower <= containsArg ? containsArg <= containsUpper : false;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Section index (' + this._index_1 + ") must be within content's bounds (0.." + this._source._content_0.length + ')';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    var end = this._index_1 + this._length | 0;
    {
      var containsLower_0 = sourceBounds._get_first__0_k$();
      var tmp1_require_0 = end <= sourceBounds._get_last__0_k$() ? containsLower_0 <= end : false;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = '' + 'Section end (' + end + ") must be within content's bounds (0.." + this._source._content_0.length + ')';
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
      }}
    var tmp = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp$ret$3;
      $l$block_2: {
        var tmp0_dropWhile_0 = this._source._lines_0;
        var yielding_1 = false;
        var list_2 = ArrayList_init_$Create$();
        var tmp0_iterator_3 = tmp0_dropWhile_0.iterator_0_k$();
        while (tmp0_iterator_3.hasNext_0_k$()) {
          var item_4 = tmp0_iterator_3.next_0_k$();
          if (yielding_1) {
            list_2.add_2bq_k$(item_4);
            Unit_getInstance();
          } else {
            var tmp$ret$2;
            $l$block_1: {
              tmp$ret$2 = this._index_1 > item_4._range._get_last__0_k$();
              break $l$block_1;
            }
            if (!tmp$ret$2) {
              list_2.add_2bq_k$(item_4);
              Unit_getInstance();
              yielding_1 = true;
            } else {
            }
          }
        }
        tmp$ret$3 = list_2;
        break $l$block_2;
      }
      var tmp1_takeWhile_0 = tmp$ret$3;
      var list_1 = ArrayList_init_$Create$();
      var tmp0_iterator_2 = tmp1_takeWhile_0.iterator_0_k$();
      $l$break: while (tmp0_iterator_2.hasNext_0_k$()) {
        var item_3 = tmp0_iterator_2.next_0_k$();
        var tmp$ret$4;
        $l$block_3: {
          tmp$ret$4 = (this._index_1 + this._length | 0) > item_3._range._get_first__0_k$();
          break $l$block_3;
        }
        if (!tmp$ret$4)
          break $l$break;
        else {
        }
        list_1.add_2bq_k$(item_3);
        Unit_getInstance();
      }
      tmp$ret$5 = list_1;
      break $l$block_4;
    }
    tmp._lines = tmp$ret$5;
  }
  Section.prototype._get_range__0_k$ = function () {
    return numberRangeToNumber(this._index_1, this._index_1 + this._length | 0);
  };
  Section.prototype._get_substring__0_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this._source._content_0;
      var tmp1_substring_0 = this._index_1;
      var tmp2_substring_0 = this._index_1 + this._length | 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(tmp1_substring_0, tmp2_substring_0);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Section.prototype._get_firstLine__0_k$ = function () {
    return first(this._lines);
  };
  Section.prototype.span_3dwx6q_k$ = function (other) {
    {
      var tmp0_require_0 = this._source.equals(other._source);
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Sections ' + this + ' and ' + other + " have different sources and thus can't be spanned.";
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_min_0 = this._get_range__0_k$()._get_first__0_k$();
      var tmp2_min_0 = other._get_range__0_k$()._get_first__0_k$();
      tmp$ret$1 = Math.min(tmp1_min_0, tmp2_min_0);
      break $l$block_0;
    }
    var start = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      var tmp3_max_0 = this._get_range__0_k$()._get_last__0_k$();
      var tmp4_max_0 = other._get_range__0_k$()._get_last__0_k$();
      tmp$ret$2 = Math.max(tmp3_max_0, tmp4_max_0);
      break $l$block_1;
    }
    var end = tmp$ret$2;
    return new Section(this._source, start, end - start | 0);
  };
  Section.prototype.toString = function () {
    return '' + '(' + this._source._name_0 + ':' + this._get_firstLine__0_k$()._lineNumber + ':' + (this._index_1 - this._get_firstLine__0_k$()._range._get_first__0_k$() | 0) + ')';
  };
  Section.prototype.hashCode = function () {
    var result = this._source.hashCode();
    result = imul(result, 31) + this._index_1 | 0;
    result = imul(result, 31) + this._length | 0;
    return result;
  };
  Section.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Section))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Section ? other : THROW_CCE();
    if (!this._source.equals(tmp0_other_with_cast._source))
      return false;
    if (!(this._index_1 === tmp0_other_with_cast._index_1))
      return false;
    if (!(this._length === tmp0_other_with_cast._length))
      return false;
    return true;
  };
  Section.$metadata$ = {
    simpleName: 'Section',
    kind: 'class',
    interfaces: []
  };
  function Sectional() {
  }
  Sectional.prototype.span_czcotl_k$ = function (other) {
    return this._get_section__0_k$().span_3dwx6q_k$(other._get_section__0_k$());
  };
  Sectional.$metadata$ = {
    simpleName: 'Sectional',
    kind: 'interface',
    interfaces: []
  };
  function Source_init_$Init$(content, name, path, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      name = '?';
    if (!(($mask0 & 4) === 0))
      path = '!!no path!!';
    Source.call($this, content, name, path);
    return $this;
  }
  function Source_init_$Create$(content, name, path, $mask0, $marker) {
    return Source_init_$Init$(content, name, path, $mask0, $marker, Object.create(Source.prototype));
  }
  function Line(lineNumber, content, range) {
    this._lineNumber = lineNumber;
    this._content = content;
    this._range = range;
  }
  Line.prototype.toString = function () {
    return '' + 'Line(lineNumber=' + this._lineNumber + ', content=' + this._content + ', range=' + this._range + ')';
  };
  Line.prototype.hashCode = function () {
    var result = this._lineNumber;
    result = imul(result, 31) + getStringHashCode(this._content) | 0;
    result = imul(result, 31) + this._range.hashCode() | 0;
    return result;
  };
  Line.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Line))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Line ? other : THROW_CCE();
    if (!(this._lineNumber === tmp0_other_with_cast._lineNumber))
      return false;
    if (!(this._content === tmp0_other_with_cast._content))
      return false;
    if (!this._range.equals(tmp0_other_with_cast._range))
      return false;
    return true;
  };
  Line.$metadata$ = {
    simpleName: 'Line',
    kind: 'class',
    interfaces: []
  };
  function Companion_16() {
    Companion_instance_15 = this;
  }
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_16();
    return Companion_instance_15;
  }
  function Source(content, name, path) {
    Companion_getInstance_15();
    this._content_0 = content;
    this._name_0 = name;
    this._path = path;
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_mapIndexed_0 = calculateLineRanges(this._content_0);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapIndexedTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_mapIndexed_0, 10));
        var index_1_2 = 0;
        var tmp0_iterator_2_3 = tmp0_mapIndexed_0.iterator_0_k$();
        while (tmp0_iterator_2_3.hasNext_0_k$()) {
          var item_3_4 = tmp0_iterator_2_3.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            var tmp1_4_5 = index_1_2;
            index_1_2 = tmp1_4_5 + 1 | 0;
            var tmp1__anonymous__6 = checkIndexOverflow(tmp1_4_5);
            tmp$ret$0 = new Line(tmp1__anonymous__6 + 1 | 0, substring_0(this._content_0, item_3_4), item_3_4);
            break $l$block;
          }
          tmp0_mapIndexedTo_0_1.add_2bq_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapIndexedTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    tmp._lines_0 = tmp$ret$2;
  }
  Source.prototype._get_bounds__0_k$ = function () {
    return numberRangeToNumber(0, this._content_0.length);
  };
  Source.prototype.toString = function () {
    return '' + 'Source(content=' + this._content_0 + ', name=' + this._name_0 + ', path=' + this._path + ')';
  };
  Source.prototype.hashCode = function () {
    var result = getStringHashCode(this._content_0);
    result = imul(result, 31) + getStringHashCode(this._name_0) | 0;
    result = imul(result, 31) + getStringHashCode(this._path) | 0;
    return result;
  };
  Source.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Source))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Source ? other : THROW_CCE();
    if (!(this._content_0 === tmp0_other_with_cast._content_0))
      return false;
    if (!(this._name_0 === tmp0_other_with_cast._name_0))
      return false;
    if (!(this._path === tmp0_other_with_cast._path))
      return false;
    return true;
  };
  Source.$metadata$ = {
    simpleName: 'Source',
    kind: 'class',
    interfaces: []
  };
  function Companion_17() {
    Companion_instance_16 = this;
  }
  Companion_17.prototype.create_l18u9c_k$ = function (grammar, block) {
    return new ParserImpl(grammar, block);
  };
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_17();
    return Companion_instance_16;
  }
  function Parser() {
  }
  Parser.prototype.parse_lxcvpv_k$ = function (source, lexer) {
    return this.parse_6w9dld_k$(source, lexer.parseToList_97u0gy_k$(source));
  };
  Parser.$metadata$ = {
    simpleName: 'Parser',
    kind: 'interface',
    interfaces: []
  };
  function ParserContext() {
  }
  ParserContext.prototype.parseExpression$default_l3mjq9_k$ = function (precedence, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      precedence = 0;
    return $handler == null ? this.parseExpression_ha5a7z_k$(precedence) : $handler(precedence);
  };
  ParserContext.prototype.peek$default_l3mjq9_k$ = function (distance, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      distance = 0;
    return $handler == null ? this.peek_ha5a7z_k$(distance) : $handler(distance);
  };
  ParserContext.$metadata$ = {
    simpleName: 'ParserContext',
    kind: 'interface',
    interfaces: []
  };
  function Companion_18() {
    Companion_instance_17 = this;
  }
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_18();
    return Companion_instance_17;
  }
  function SourceParser(lexer, parser) {
    Companion_getInstance_17();
    this._lexer = lexer;
    this._parser = parser;
  }
  SourceParser.prototype.parse_97u0gy_k$ = function (source) {
    return this._parser.parse_lxcvpv_k$(source, this._lexer);
  };
  SourceParser.prototype.toString = function () {
    return '' + 'SourceParser(lexer=' + this._lexer + ', parser=' + this._parser + ')';
  };
  SourceParser.prototype.hashCode = function () {
    var result = hashCode(this._lexer);
    result = imul(result, 31) + hashCode(this._parser) | 0;
    return result;
  };
  SourceParser.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SourceParser))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SourceParser ? other : THROW_CCE();
    if (!equals_0(this._lexer, tmp0_other_with_cast._lexer))
      return false;
    if (!equals_0(this._parser, tmp0_other_with_cast._parser))
      return false;
    return true;
  };
  SourceParser.$metadata$ = {
    simpleName: 'SourceParser',
    kind: 'class',
    interfaces: []
  };
  function SyntaxException(message, position) {
    RuntimeException_init_$Init$_0('' + message + ' at ' + position, this);
    this._position = position;
    captureStack(this, SyntaxException);
  }
  SyntaxException.$metadata$ = {
    simpleName: 'SyntaxException',
    kind: 'class',
    interfaces: []
  };
  function Token(type, value, section_0) {
    this._type = type;
    this._value_2 = value;
    this._section = section_0;
  }
  Token.prototype._get_section__0_k$ = function () {
    return this._section;
  };
  Token.prototype.toString = function () {
    return '' + this._type + '[' + this._value_2 + '] ' + this._section;
  };
  Token.prototype.component1_0_k$ = function () {
    return this._type;
  };
  Token.prototype.component2_0_k$ = function () {
    return this._value_2;
  };
  Token.prototype.component3_0_k$ = function () {
    return this._section;
  };
  Token.prototype.hashCode = function () {
    var result = this._type == null ? 0 : hashCode(this._type);
    result = imul(result, 31) + getStringHashCode(this._value_2) | 0;
    result = imul(result, 31) + this._section.hashCode() | 0;
    return result;
  };
  Token.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Token))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Token ? other : THROW_CCE();
    if (!equals_0(this._type, tmp0_other_with_cast._type))
      return false;
    if (!(this._value_2 === tmp0_other_with_cast._value_2))
      return false;
    if (!this._section.equals(tmp0_other_with_cast._section))
      return false;
    return true;
  };
  Token.$metadata$ = {
    simpleName: 'Token',
    kind: 'class',
    interfaces: [Sectional]
  };
  function makeToken(_this_, type, offset) {
    return makeToken_0(_this_, type, '', offset);
  }
  function makeToken$default(_this_, type, offset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 1;
    return makeToken(_this_, type, offset);
  }
  function makeToken_0(_this_, type, string, offset) {
    var section_0 = new Section(_this_._get_source__0_k$(), (_this_._get_index__0_k$() - string.length | 0) - offset | 0, string.length + offset | 0);
    return new Token(type, string, section_0);
  }
  function makeToken$default_0(_this_, type, string, offset, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      offset = 0;
    return makeToken_0(_this_, type, string, offset);
  }
  function readString(_this_, delimiter) {
    var buf_0 = StringBuilder_init_$Create$_0();
    var eol = false;
    $l$break: while (_this_.hasNext_0_k$()) {
      var c = _this_.peek_0_k$();
      if (c.equals(delimiter)) {
        _this_.next_0_k$();
        Unit_getInstance();
        eol = true;
        break $l$break;
      } else {
        _this_.next_0_k$();
        Unit_getInstance();
        buf_0.append_wi8o78_k$(c);
        Unit_getInstance();
      }
    }
    if (!eol) {
      throw IllegalStateException_init_$Create$('Unterminated string');
    }return buf_0.toString();
  }
  function Invalid(string) {
    LexicalNumber.call(this);
    this._string_0 = string;
  }
  Invalid.prototype._get_string__0_k$ = function () {
    return this._string_0;
  };
  Invalid.prototype.toString = function () {
    return '' + 'Invalid(string=' + this._string_0 + ')';
  };
  Invalid.prototype.hashCode = function () {
    return getStringHashCode(this._string_0);
  };
  Invalid.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Invalid))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Invalid ? other : THROW_CCE();
    if (!(this._string_0 === tmp0_other_with_cast._string_0))
      return false;
    return true;
  };
  Invalid.$metadata$ = {
    simpleName: 'Invalid',
    kind: 'class',
    interfaces: []
  };
  function Decimal(string, value, isFloat) {
    LexicalNumber.call(this);
    this._string_1 = string;
    this._value_3 = value;
    this._isFloat = isFloat;
  }
  Decimal.prototype._get_string__0_k$ = function () {
    return this._string_1;
  };
  Decimal.prototype.toString = function () {
    return '' + 'Decimal(string=' + this._string_1 + ', value=' + this._value_3 + ', isFloat=' + this._isFloat + ')';
  };
  Decimal.prototype.hashCode = function () {
    var result = getStringHashCode(this._string_1);
    result = imul(result, 31) + getNumberHashCode(this._value_3) | 0;
    result = imul(result, 31) + (this._isFloat | 0) | 0;
    return result;
  };
  Decimal.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Decimal))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Decimal ? other : THROW_CCE();
    if (!(this._string_1 === tmp0_other_with_cast._string_1))
      return false;
    if (!equals_0(this._value_3, tmp0_other_with_cast._value_3))
      return false;
    if (!(this._isFloat === tmp0_other_with_cast._isFloat))
      return false;
    return true;
  };
  Decimal.$metadata$ = {
    simpleName: 'Decimal',
    kind: 'class',
    interfaces: []
  };
  function Integer(string, value, radix, isLong) {
    LexicalNumber.call(this);
    this._string_2 = string;
    this._value_4 = value;
    this._radix = radix;
    this._isLong = isLong;
  }
  Integer.prototype._get_string__0_k$ = function () {
    return this._string_2;
  };
  Integer.prototype.toString = function () {
    return '' + 'Integer(string=' + this._string_2 + ', value=' + this._value_4 + ', radix=' + this._radix + ', isLong=' + this._isLong + ')';
  };
  Integer.prototype.hashCode = function () {
    var result = getStringHashCode(this._string_2);
    result = imul(result, 31) + this._value_4.hashCode() | 0;
    result = imul(result, 31) + this._radix | 0;
    result = imul(result, 31) + (this._isLong | 0) | 0;
    return result;
  };
  Integer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Integer))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Integer ? other : THROW_CCE();
    if (!(this._string_2 === tmp0_other_with_cast._string_2))
      return false;
    if (!this._value_4.equals(tmp0_other_with_cast._value_4))
      return false;
    if (!(this._radix === tmp0_other_with_cast._radix))
      return false;
    if (!(this._isLong === tmp0_other_with_cast._isLong))
      return false;
    return true;
  };
  Integer.$metadata$ = {
    simpleName: 'Integer',
    kind: 'class',
    interfaces: []
  };
  function LexicalNumber() {
  }
  LexicalNumber.$metadata$ = {
    simpleName: 'LexicalNumber',
    kind: 'class',
    interfaces: []
  };
  function readNumber(_this_, c) {
    var buf_0 = StringBuilder_init_$Create$_0();
    if (c.equals(new Char(48))) {
      if (_this_.match_wi8o78_k$(new Char(120))) {
        fillBufferNumbers(_this_, buf_0, true);
        var isLong = _this_.match_wi8o78_k$(new Char(108)) ? true : _this_.match_wi8o78_k$(new Char(76));
        var s = buf_0.toString();
        var tmp0_elvis_lhs = toLongOrNull_0(s, 16);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return new Invalid(buf_0.toString());
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var number = tmp;
        return new Integer(s, number, 16, isLong);
      } else if (_this_.match_wi8o78_k$(new Char(98))) {
        fillBufferNumbers(_this_, buf_0, false);
        var isLong_0 = _this_.match_wi8o78_k$(new Char(108)) ? true : _this_.match_wi8o78_k$(new Char(76));
        var s_0 = buf_0.toString();
        var tmp1_elvis_lhs = toLongOrNull_0(s_0, 2);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          return new Invalid(buf_0.toString());
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var number_0 = tmp_0;
        return new Integer(s_0, number_0, 2, isLong_0);
      } else {
        buf_0.append_wi8o78_k$(new Char(48));
        Unit_getInstance();
      }
    } else {
      buf_0.append_wi8o78_k$(c);
      Unit_getInstance();
    }
    fillBufferNumbers(_this_, buf_0, false);
    var tmp_1;
    if (_this_.peek_0_k$().equals(new Char(46)) ? isDigit(_this_.peek_ha5a7z_k$(1)) : false) {
      _this_.next_0_k$();
      Unit_getInstance();
      buf_0.append_wi8o78_k$(new Char(46));
      Unit_getInstance();
      fillBufferNumbers(_this_, buf_0, false);
      var isFloat = _this_.match_wi8o78_k$(new Char(102)) ? true : _this_.match_wi8o78_k$(new Char(70));
      var s_1 = buf_0.toString();
      tmp_1 = new Decimal(s_1, toDouble(s_1), isFloat);
    } else {
      var s_2 = buf_0.toString();
      var int = toLongOrNull(s_2);
      var tmp_2;
      if (_this_.match_wi8o78_k$(new Char(102)) ? true : _this_.match_wi8o78_k$(new Char(70))) {
        tmp_2 = new Decimal(s_2, toDouble(s_2), true);
      } else if (!(int == null)) {
        var isLong_1 = _this_.match_wi8o78_k$(new Char(108)) ? true : _this_.match_wi8o78_k$(new Char(76));
        tmp_2 = new Integer(s_2, int, 10, isLong_1);
      } else {
        tmp_2 = new Invalid(buf_0.toString());
      }
      tmp_1 = tmp_2;
    }
    return tmp_1;
  }
  function section(_this_, offset, length) {
    return new Section(_this_._get_source__0_k$(), (_this_._get_index__0_k$() - length | 0) - offset | 0, length + offset | 0);
  }
  function section$default(_this_, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      length = 0;
    return section(_this_, offset, length);
  }
  function fillBufferNumbers(_this_, buf_0, allowHex) {
    $l$break: while (_this_.hasNext_0_k$()) {
      var c = _this_.peek_0_k$();
      if (isDigit(c) ? true : allowHex ? (new Char(65) <= c ? c <= new Char(70) : false) ? true : new Char(97) <= c ? c <= new Char(102) : false : false) {
        buf_0.append_wi8o78_k$(_this_.next_0_k$());
        Unit_getInstance();
      } else {
        break $l$break;
      }
    }
  }
  function GrammarBuilder() {
    this._prefix_0 = LinkedHashMap_init_$Create$();
    this._infix_0 = LinkedHashMap_init_$Create$();
  }
  GrammarBuilder.prototype.prefix_un6blj_k$ = function (type, parselet, override) {
    var tmp;
    if (!override) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_contains_0 = this._prefix_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = (isInterface(tmp0_contains_0, Map_0) ? tmp0_contains_0 : THROW_CCE()).containsKey_2bw_k$(type);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('' + 'Prefix parselet associated with ' + type + ' already exists. Did you forget to enable overriding?');
    } else {
    }
    {
      var tmp1_set_0 = this._prefix_0;
      tmp1_set_0.put_1q9pf_k$(type, parselet);
      Unit_getInstance();
    }
  };
  GrammarBuilder.prototype.infix_37epv1_k$ = function (type, parselet, override) {
    var tmp;
    if (!override) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_contains_0 = this._infix_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = (isInterface(tmp0_contains_0, Map_0) ? tmp0_contains_0 : THROW_CCE()).containsKey_2bw_k$(type);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('' + 'Infix parselet associated with ' + type + ' already exists. Did you forget to enable overriding?');
    } else {
    }
    {
      var tmp1_set_0 = this._infix_0;
      tmp1_set_0.put_1q9pf_k$(type, parselet);
      Unit_getInstance();
    }
  };
  GrammarBuilder.prototype.build_0_k$ = function () {
    return new Grammar(toMap(this._prefix_0), toMap(this._infix_0));
  };
  GrammarBuilder.$metadata$ = {
    simpleName: 'GrammarBuilder',
    kind: 'class',
    interfaces: [GrammarDSL]
  };
  var lineSeparators;
  function calculateLineRanges(_this_) {
    var currentIndex = 0;
    var nextIndex = 0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var list = tmp$ret$0;
    $l$break: while (nextIndex < charSequenceLength(_this_)) {
      var tmp = nextIndex;
      var tmp0_elvis_lhs = findAnyOf$default(_this_, lineSeparators, tmp, false, 4, null);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$break;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var tmp1_container = tmp_0;
      var index = tmp1_container.component1_0_k$();
      var s = tmp1_container.component2_0_k$();
      var length = s.length;
      {
        var tmp0_plusAssign_0 = until(currentIndex, index + length | 0);
        list.add_2bq_k$(tmp0_plusAssign_0);
        Unit_getInstance();
      }
      currentIndex = index + length | 0;
      nextIndex = currentIndex + (length === 0 ? 1 : 0) | 0;
    }
    {
      var tmp1_plusAssign_0 = numberRangeToNumber(currentIndex, _get_lastIndex__1(_this_));
      list.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
    return list;
  }
  function LexerMatcher_init_$Init$(m, $this) {
    var tmp$ret$8;
    $l$block_7: {
      var tmp$ret$3;
      $l$block_2: {
        var tmp0_filterNot_0 = m._trie_0;
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_filterNotTo_0_1 = LinkedHashMap_init_$Create$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_filterNot_0._get_entries__0_k$().iterator_0_k$();
            break $l$block;
          }
          var tmp0_iterator_1_2 = tmp$ret$0;
          while (tmp0_iterator_1_2.hasNext_0_k$()) {
            var element_2_3 = tmp0_iterator_1_2.next_0_k$();
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = element_2_3._get_value__0_k$().isEmpty_0_k$();
              break $l$block_0;
            }
            if (!tmp$ret$1) {
              tmp0_filterNotTo_0_1.put_1q9pf_k$(element_2_3._get_key__0_k$(), element_2_3._get_value__0_k$());
              Unit_getInstance();
            } else {
            }
          }
          tmp$ret$2 = tmp0_filterNotTo_0_1;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var tmp1_mapValues_0 = tmp$ret$3;
      var tmp$ret$7;
      $l$block_6: {
        var tmp1_mapValuesTo_0_1 = LinkedHashMap_init_$Create$_0(mapCapacity(tmp1_mapValues_0._get_size__0_k$()));
        var tmp$ret$6;
        $l$block_5: {
          var tmp0_associateByTo_0_2 = tmp1_mapValues_0._get_entries__0_k$();
          var tmp0_iterator_1_3 = tmp0_associateByTo_0_2.iterator_0_k$();
          while (tmp0_iterator_1_3.hasNext_0_k$()) {
            var element_2_4 = tmp0_iterator_1_3.next_0_k$();
            var tmp$ret$4;
            $l$block_3: {
              tmp$ret$4 = element_2_4._get_key__0_k$();
              break $l$block_3;
            }
            var tmp = tmp$ret$4;
            var tmp$ret$5;
            $l$block_4: {
              tmp$ret$5 = LexerMatcher_init_$Create$(element_2_4._get_value__0_k$());
              break $l$block_4;
            }
            tmp1_mapValuesTo_0_1.put_1q9pf_k$(tmp, tmp$ret$5);
            Unit_getInstance();
          }
          tmp$ret$6 = tmp1_mapValuesTo_0_1;
          break $l$block_5;
        }
        tmp$ret$7 = tmp$ret$6;
        break $l$block_6;
      }
      tmp$ret$8 = tmp$ret$7;
      break $l$block_7;
    }
    var tmp_0 = tmp$ret$8;
    var tmp$ret$14;
    $l$block_13: {
      var tmp$ret$11;
      $l$block_10: {
        var tmp2_filterNot_0 = m._predicates_0;
        var tmp$ret$10;
        $l$block_9: {
          var tmp0_filterNotTo_0_1_0 = ArrayList_init_$Create$();
          var tmp0_iterator_1_2_0 = tmp2_filterNot_0.iterator_0_k$();
          while (tmp0_iterator_1_2_0.hasNext_0_k$()) {
            var element_2_3_0 = tmp0_iterator_1_2_0.next_0_k$();
            var tmp$ret$9;
            $l$block_8: {
              tmp$ret$9 = element_2_3_0.isMatcherEmpty_0_k$();
              break $l$block_8;
            }
            if (!tmp$ret$9) {
              tmp0_filterNotTo_0_1_0.add_2bq_k$(element_2_3_0);
              Unit_getInstance();
            } else {
            }
          }
          tmp$ret$10 = tmp0_filterNotTo_0_1_0;
          break $l$block_9;
        }
        tmp$ret$11 = tmp$ret$10;
        break $l$block_10;
      }
      var tmp3_map_0 = tmp$ret$11;
      var tmp$ret$13;
      $l$block_12: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp3_map_0, 10));
        var tmp0_iterator_1_2_1 = tmp3_map_0.iterator_0_k$();
        while (tmp0_iterator_1_2_1.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2_1.next_0_k$();
          var tmp$ret$12;
          $l$block_11: {
            tmp$ret$12 = LexerMatcherWithPredicate_init_$Create$(item_2_3);
            break $l$block_11;
          }
          tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$12);
          Unit_getInstance();
        }
        tmp$ret$13 = tmp0_mapTo_0_1;
        break $l$block_12;
      }
      tmp$ret$14 = tmp$ret$13;
      break $l$block_13;
    }
    LexerMatcher.call($this, tmp_0, tmp$ret$14, m._onMatch_0);
    return $this;
  }
  function LexerMatcher_init_$Create$(m) {
    return LexerMatcher_init_$Init$(m, Object.create(LexerMatcher.prototype));
  }
  function LexerMatcherWithPredicate_init_$Init$(m, $this) {
    LexerMatcherWithPredicate.call($this, m._predicate_0, LexerMatcher_init_$Create$(m._matcher_1));
    return $this;
  }
  function LexerMatcherWithPredicate_init_$Create$(m) {
    return LexerMatcherWithPredicate_init_$Init$(m, Object.create(LexerMatcherWithPredicate.prototype));
  }
  function CollectingContext($outer, collection) {
    this._$this_4 = $outer;
    this._collection = collection;
    this._$$delegate_0_0 = this._$this_4;
  }
  CollectingContext.prototype.hasNext_0_k$ = function () {
    return this._$$delegate_0_0.hasNext_0_k$();
  };
  CollectingContext.prototype.match_wi8o78_k$ = function (expect) {
    return this._$$delegate_0_0.match_wi8o78_k$(expect);
  };
  CollectingContext.prototype.next_0_k$ = function () {
    return this._$$delegate_0_0.next_0_k$();
  };
  CollectingContext.prototype.nextString_ha5a7z_k$ = function (length) {
    return this._$$delegate_0_0.nextString_ha5a7z_k$(length);
  };
  CollectingContext.prototype.parseOnce_0_k$ = function () {
    return this._$$delegate_0_0.parseOnce_0_k$();
  };
  CollectingContext.prototype.peek_0_k$ = function () {
    return this._$$delegate_0_0.peek_0_k$();
  };
  CollectingContext.prototype.peek_ha5a7z_k$ = function (distance) {
    return this._$$delegate_0_0.peek_ha5a7z_k$(distance);
  };
  CollectingContext.prototype.peekString_ha5a7z_k$ = function (length) {
    return this._$$delegate_0_0.peekString_ha5a7z_k$(length);
  };
  CollectingContext.prototype._get_index__0_k$ = function () {
    return this._$$delegate_0_0._index_2;
  };
  CollectingContext.prototype._get_source__0_k$ = function () {
    return this._$$delegate_0_0._source_0;
  };
  CollectingContext.prototype.process_iav7o_k$ = function (token) {
    this._collection.add_2bq_k$(token);
    Unit_getInstance();
  };
  CollectingContext.$metadata$ = {
    simpleName: 'CollectingContext',
    kind: 'class',
    interfaces: [LexerContext]
  };
  function doParse($this, impl, ctx) {
    if (impl.hasNext_0_k$()) {
      impl._read = 0;
      var function_0 = doMatch$default($this._matcher_0, $this, impl, false, 4, null)._onMatch;
      if (!(function_0 == null)) {
        function_0(ctx, impl._curr);
      } else {
        skipUntilMatch($this._matcher_0, $this, impl);
        var tmp = impl._read;
        var section_0 = section$default(impl, tmp, 0, 2, null);
        throw new SyntaxException('' + "No matcher registered for '" + section_0._get_substring__0_k$() + "'", section_0);
      }
      if (impl._read === 0)
        throw IllegalStateException_init_$Create$('No further characters consumed.');
    }}
  function doParse$default($this, impl, ctx, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      ctx = impl;
    return doParse($this, impl, ctx);
  }
  function LexerMatcher(trie, predicates, onMatch) {
    this._trie = trie;
    this._predicates = predicates;
    this._onMatch = onMatch;
  }
  LexerMatcher.prototype.tryMatchChild_wi8o78_k$ = function (char) {
    var tmp1_elvis_lhs = this._trie.get_2bw_k$(char);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$1;
      $l$block_1: {
        var tmp0_firstOrNull_0 = this._predicates;
        var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_0_k$();
        while (tmp0_iterator_1.hasNext_0_k$()) {
          var element_2 = tmp0_iterator_1.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = element_2._predicate.test_wi8o78_k$(char);
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element_2;
            break $l$block_1;
          } else {
          }
        }
        tmp$ret$1 = null;
        break $l$block_1;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._matcher;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  LexerMatcher.$metadata$ = {
    simpleName: 'LexerMatcher',
    kind: 'class',
    interfaces: []
  };
  function LexerMatcherWithPredicate(predicate, matcher) {
    this._predicate = predicate;
    this._matcher = matcher;
  }
  LexerMatcherWithPredicate.$metadata$ = {
    simpleName: 'LexerMatcherWithPredicate',
    kind: 'class',
    interfaces: []
  };
  function skipUntilMatch(_this_, $this, ctx) {
    var $this_0 = $this;
    var $this_1 = _this_;
    var ctx_0 = ctx;
    while (true) {
      var $this_2 = $this_0;
      var $this_3 = $this_1;
      var ctx_1 = ctx_0;
      if (!ctx_1.hasNext_0_k$())
        return Unit_getInstance();
      var char = ctx_1.peek_0_k$();
      if (!($this_3.tryMatchChild_wi8o78_k$(char) == null) ? true : char.equals(new Char(10)))
        return Unit_getInstance();
      ctx_1.next_0_k$();
      Unit_getInstance();
      $this_0 = $this_2;
      $this_1 = $this_3;
      ctx_0 = ctx_1;
      continue;
    }
  }
  function doMatch(_this_, $this, ctx, eat) {
    var $this_0 = $this;
    var $this_1 = _this_;
    var ctx_0 = ctx;
    var eat_0 = eat;
    while (true) {
      var $this_2 = $this_0;
      var $this_3 = $this_1;
      var ctx_1 = ctx_0;
      var eat_1 = eat_0;
      if (eat_1) {
        ctx_1.next_0_k$();
        Unit_getInstance();
      }$this_0 = $this_2;
      var tmp0_elvis_lhs = $this_3.tryMatchChild_wi8o78_k$(ctx_1.peek_0_k$());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return $this_3;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      $this_1 = tmp;
      ctx_0 = ctx_1;
      eat_0 = true;
      continue;
    }
  }
  function doMatch$default(_this_, $this, ctx, eat, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      eat = false;
    return doMatch(_this_, $this, ctx, eat);
  }
  function ContextImpl($outer, source, output_0) {
    this._$this_5 = $outer;
    this._source_0 = source;
    this._output = output_0;
    this._reader = new StringReader(this._source_0._content_0);
    this._read = 0;
    this._index_2 = 0;
    this._curr = new Char(65535);
  }
  ContextImpl.prototype._get_source__0_k$ = function () {
    return this._source_0;
  };
  ContextImpl.prototype._get_index__0_k$ = function () {
    return this._index_2;
  };
  ContextImpl.prototype.peek_0_k$ = function () {
    this._reader.mark_majfzk_k$(1);
    var c = numberToChar(this._reader.read_0_k$());
    this._reader.reset_sv8swh_k$();
    return c;
  };
  ContextImpl.prototype.peek_ha5a7z_k$ = function (distance) {
    this._reader.mark_majfzk_k$(distance + 1 | 0);
    var value = -1;
    var inductionVariable = 0;
    if (inductionVariable <= distance)
      $l$break: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var next = this._reader.read_0_k$();
        if (next === -1) {
          value = -1;
          break $l$break;
        } else if (!(i === distance)) {
          continue $l$break;
        }value = next;
      }
       while (!(i === distance));
    this._reader.reset_sv8swh_k$();
    return numberToChar(value);
  };
  ContextImpl.prototype.peekString_ha5a7z_k$ = function (length) {
    this._reader.mark_majfzk_k$(length);
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$(length);
        {
        }
        {
          var inductionVariable = 0;
          if (inductionVariable < length)
            $l$break: do {
              var i_4 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var next_5 = this._reader.read_0_k$();
              if (next_5 === -1)
                break $l$break;
              tmp0_apply_0_1.append_wi8o78_k$(numberToChar(next_5));
              Unit_getInstance();
            }
             while (inductionVariable < length);
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    var value = tmp$ret$1;
    this._reader.reset_sv8swh_k$();
    return value;
  };
  ContextImpl.prototype.match_wi8o78_k$ = function (expect) {
    var matched = this.peek_0_k$().equals(expect);
    if (matched) {
      this.next_0_k$();
      Unit_getInstance();
    }return matched;
  };
  ContextImpl.prototype.hasNext_0_k$ = function () {
    this._reader.mark_majfzk_k$(1);
    var i = this._reader.read_0_k$();
    this._reader.reset_sv8swh_k$();
    return i > 0;
  };
  ContextImpl.prototype.next_0_k$ = function () {
    var c = numberToChar(this._reader.read_0_k$());
    var tmp0_this = this;
    var tmp1 = tmp0_this._read;
    tmp0_this._read = tmp1 + 1 | 0;
    Unit_getInstance();
    var tmp2_this = this;
    var tmp3 = tmp2_this._index_2;
    tmp2_this._index_2 = tmp3 + 1 | 0;
    Unit_getInstance();
    this._curr = c;
    return c;
  };
  ContextImpl.prototype.nextString_ha5a7z_k$ = function (length) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$(length);
        {
        }
        {
          var i_3 = 0;
          $l$break: while (true) {
            var tmp;
            if (this.hasNext_0_k$()) {
              var tmp0_4 = i_3;
              i_3 = tmp0_4 + 1 | 0;
              tmp = tmp0_4 < length;
            } else {
              tmp = false;
            }
            if (!tmp) {
              break $l$break;
            }tmp0_apply_0_1.append_wi8o78_k$(this.next_0_k$());
            Unit_getInstance();
          }
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ContextImpl.prototype.process_iav7o_k$ = function (token) {
    this._output(token);
  };
  ContextImpl.prototype.parseOnce_0_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = ArrayList_init_$Create$();
        break $l$block;
      }
      var tmp0_also_0 = tmp$ret$0;
      {
      }
      {
        doParse(this._$this_5, this, new CollectingContext(this, tmp0_also_0));
      }
      tmp$ret$1 = tmp0_also_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ContextImpl.$metadata$ = {
    simpleName: 'ContextImpl',
    kind: 'class',
    interfaces: [LexerContext]
  };
  function LexerImpl(root) {
    this._matcher_0 = LexerMatcher_init_$Create$(root);
  }
  LexerImpl.prototype.parse_92wbp5_k$ = function (source, output_0) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_use_0 = new ContextImpl(this, source, output_0);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_using_0 = tmp1_use_0._reader;
        var tmp$ret$0;
        $l$block: {
          while (tmp1_use_0.hasNext_0_k$()) {
            doParse$default(this, tmp1_use_0, null, 4, null);
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
  };
  LexerImpl.$metadata$ = {
    simpleName: 'LexerImpl',
    kind: 'class',
    interfaces: [Lexer]
  };
  function MatcherWithPredicate(predicate, matcher) {
    this._predicate_0 = predicate;
    this._matcher_1 = matcher;
  }
  MatcherWithPredicate.prototype.isMatcherEmpty_0_k$ = function () {
    return this._matcher_1.isEmpty_0_k$();
  };
  MatcherWithPredicate.$metadata$ = {
    simpleName: 'MatcherWithPredicate',
    kind: 'class',
    interfaces: []
  };
  function MatcherImpl() {
    this._trie_0 = LinkedHashMap_init_$Create$();
    this._predicates_0 = ArrayList_init_$Create$();
    this._onMatch_0 = null;
  }
  MatcherImpl.prototype.isEmpty_0_k$ = function () {
    return (this._trie_0.isEmpty_0_k$() ? this._predicates_0.isEmpty_0_k$() : false) ? this._onMatch_0 == null : false;
  };
  MatcherImpl.prototype.matching_6wfw3l_k$ = function (string) {
    var tmp0_subject = string.length;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this;
        break;
      case 1:
        tmp = this.matching_wi8o78_k$(first_0(string));
        break;
      default:var tmp$ret$0;
        $l$block: {
          var accumulator_1 = this;
          var indexedObject = string;
          var inductionVariable = 0;
          var last_0 = indexedObject.length;
          while (inductionVariable < last_0) {
            var element_3 = charSequenceGet(indexedObject, inductionVariable);
            inductionVariable = inductionVariable + 1 | 0;
            accumulator_1 = accumulator_1.matching_wi8o78_k$(element_3);
          }
          tmp$ret$0 = accumulator_1;
          break $l$block;
        }

        tmp = tmp$ret$0;
        break;
    }
    return tmp;
  };
  MatcherImpl.prototype.matching_wi8o78_k$ = function (char) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getOrPut_0 = this._trie_0;
      var value_1 = tmp0_getOrPut_0.get_2bw_k$(char);
      var tmp;
      if (value_1 == null) {
        var answer_2 = new MatcherImpl();
        tmp0_getOrPut_0.put_1q9pf_k$(char, answer_2);
        Unit_getInstance();
        tmp = answer_2;
      } else {
        tmp = value_1;
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  MatcherImpl.prototype.matching_zi9qff_k$ = function (block) {
    var matcher = new MatcherImpl();
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._predicates_0;
      var tmp1_plusAssign_0 = new MatcherWithPredicate(block, matcher);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
    return matcher;
  };
  MatcherImpl.prototype.configure_mo7eqk_k$ = function (block) {
    this._onMatch_0 = block;
  };
  MatcherImpl.$metadata$ = {
    simpleName: 'MatcherImpl',
    kind: 'class',
    interfaces: [LexerDSL]
  };
  function parseExpr($this, grammar, precedence) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = $this.eat_0_k$();
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_safe_receiver_3 = grammar._prefix.get_2bw_k$(tmp0_let_0._type);
        var tmp1_elvis_lhs_2 = tmp0_safe_receiver_3 == null ? null : tmp0_safe_receiver_3.parse_e86nu8_k$($this, tmp0_let_0);
        var tmp;
        if (tmp1_elvis_lhs_2 == null) {
          throw new SyntaxException('' + 'Unexpected ' + tmp0_let_0, tmp0_let_0._section);
        } else {
          tmp = tmp1_elvis_lhs_2;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var left = tmp$ret$1;
    $l$break: while (true) {
      var tmp_0;
      if (!$this._get_eof__0_k$()) {
        var tmp0_safe_receiver = $this._grammar._infix.get_2bw_k$($this.peek_ha5a7z_k$(0)._type);
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_precedence__0_k$();
        tmp_0 = precedence < (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$break;
      }var tmp$ret$3;
      $l$block_2: {
        var tmp1_let_0 = $this.eat_0_k$();
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_safe_receiver_3_0 = grammar._infix.get_2bw_k$(tmp1_let_0._type);
          var tmp1_elvis_lhs_2_0 = tmp0_safe_receiver_3_0 == null ? null : tmp0_safe_receiver_3_0.parse_h7gyuu_k$($this, left, tmp1_let_0);
          var tmp_1;
          if (tmp1_elvis_lhs_2_0 == null) {
            throw new SyntaxException('' + 'Unexpected ' + tmp1_let_0, tmp1_let_0._section);
          } else {
            tmp_1 = tmp1_elvis_lhs_2_0;
          }
          tmp$ret$2 = tmp_1;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      left = tmp$ret$3;
    }
    return left;
  }
  function ContextImpl_0($outer, source, tokens, grammar) {
    this._$this_6 = $outer;
    this._source_1 = source;
    this._grammar = grammar;
    this._tokens = toMutableList(tokens);
    this._index_3 = 0;
  }
  ContextImpl_0.prototype._set_index__majfzk_k$ = function (_set___) {
    this._index_3 = _set___;
  };
  ContextImpl_0.prototype._get_index__0_k$ = function () {
    return this._index_3;
  };
  ContextImpl_0.prototype._get_eof__0_k$ = function () {
    return this._index_3 === this._tokens._get_size__0_k$();
  };
  ContextImpl_0.prototype._get_last__0_k$ = function () {
    return this._tokens.get_ha5a7z_k$(this._index_3 - 1 | 0);
  };
  ContextImpl_0.prototype.parseExpression_ha5a7z_k$ = function (precedence) {
    return parseExpr(this, this._grammar, precedence);
  };
  ContextImpl_0.prototype.eat_0_k$ = function () {
    if (this._get_eof__0_k$())
      throw new SyntaxException('Expected token but reached end of file', this._get_last__0_k$()._section);
    var tmp0_this = this;
    var tmp1 = tmp0_this._index_3;
    tmp0_this._index_3 = tmp1 + 1 | 0;
    return this._tokens.get_ha5a7z_k$(tmp1);
  };
  ContextImpl_0.prototype.eat_2c5_k$ = function (type) {
    if (this._get_eof__0_k$())
      throw new SyntaxException('' + 'Expected ' + type + ' but reached end of file', this._get_last__0_k$()._section);
    var token = this.peek$default_l3mjq9_k$(0, 1, null);
    if (!equals_0(token._type, type)) {
      throw new SyntaxException('' + "Expected '" + type + "' but found '" + token._type + "'.", token._section);
    }return this.eat_0_k$();
  };
  ContextImpl_0.prototype.match_2c5_k$ = function (type) {
    var shouldEat = this.nextIs_2c5_k$(type);
    if (shouldEat) {
      this.eat_0_k$();
      Unit_getInstance();
    }return shouldEat;
  };
  ContextImpl_0.prototype.peek_ha5a7z_k$ = function (distance) {
    return this._tokens.get_ha5a7z_k$(this._index_3 + distance | 0);
  };
  ContextImpl_0.prototype.nextIs_2c5_k$ = function (type) {
    var tmp;
    if (!this._get_eof__0_k$()) {
      tmp = equals_0(this.peek$default_l3mjq9_k$(0, 1, null)._type, type);
    } else {
      tmp = false;
    }
    return tmp;
  };
  ContextImpl_0.prototype.nextIsAny_80qlpp_k$ = function (types) {
    var tmp;
    if (!this._get_eof__0_k$()) {
      var tmp$ret$1;
      $l$block_1: {
        var indexedObject = types;
        var inductionVariable = 0;
        var last_0 = indexedObject.length;
        while (inductionVariable < last_0) {
          var element_2 = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = this.nextIs_2c5_k$(element_2);
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block_1;
          } else {
          }
        }
        tmp$ret$1 = false;
        break $l$block_1;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  ContextImpl_0.prototype.peekAheadUntil_80qlpp_k$ = function (type) {
    if (this._get_eof__0_k$())
      return emptyList();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var list = tmp$ret$0;
    var lastIndex = this._index_3;
    while (!this._get_eof__0_k$() ? !this.nextIsAny_80qlpp_k$(type.slice()) : false) {
      var tmp0_plusAssign_0 = this.eat_0_k$();
      list.add_2bq_k$(tmp0_plusAssign_0);
      Unit_getInstance();
    }
    this._index_3 = lastIndex;
    return list;
  };
  ContextImpl_0.prototype.skipUntil_a8x97o_k$ = function (type) {
    while (!this._get_eof__0_k$() ? !this.nextIsAny_80qlpp_k$(type.slice()) : false) {
      this.eat_0_k$();
      Unit_getInstance();
    }
  };
  ContextImpl_0.$metadata$ = {
    simpleName: 'ContextImpl',
    kind: 'class',
    interfaces: [ParserContext]
  };
  function ParserImpl(grammar, block) {
    this._grammar_0 = grammar;
    this._block = block;
  }
  ParserImpl.prototype.parse_6w9dld_k$ = function (source, tokens) {
    return this._block(new ContextImpl_0(this, source, tokens, this._grammar_0));
  };
  ParserImpl.$metadata$ = {
    simpleName: 'ParserImpl',
    kind: 'class',
    interfaces: [Parser]
  };
  function StringReader(s) {
    this._str = s;
    this._length_0 = s.length;
    this._next_3 = 0;
    this._mark = 0;
  }
  StringReader.prototype.read_0_k$ = function () {
    var tmp;
    if (this._next_3 >= this._length_0) {
      tmp = -1;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp_0 = this._str;
        var tmp0_this = this;
        var tmp1 = tmp0_this._next_3;
        tmp0_this._next_3 = tmp1 + 1 | 0;
        var tmp0__get_code__0 = charSequenceGet(tmp_0, tmp1);
        tmp$ret$0 = tmp0__get_code__0.toInt_0_k$();
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  StringReader.prototype.mark_majfzk_k$ = function (readAheadLimit) {
    {
      var tmp0_require_0 = readAheadLimit >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Read-ahead limit < 0';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    this._mark = this._next_3;
  };
  StringReader.prototype.reset_sv8swh_k$ = function () {
    this._next_3 = this._mark;
  };
  StringReader.$metadata$ = {
    simpleName: 'StringReader',
    kind: 'class',
    interfaces: []
  };
  var BASE64;
  var BASE64_URL_SAFE;
  function encodeBase64(_this_, map_0) {
    var length = imul((_this_.length + 2 | 0) / 3 | 0, 4);
    var out = new Int8Array(length);
    var index = 0;
    var end = _this_.length - _this_.length % 3 | 0;
    var i = 0;
    while (i < end) {
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      var b0 = _this_[tmp0];
      var tmp1 = i;
      i = tmp1 + 1 | 0;
      var b1 = _this_[tmp1];
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      var b2 = _this_[tmp2];
      var tmp3 = index;
      index = tmp3 + 1 | 0;
      out[tmp3] = map_0[(b0 & 255) >> 2];
      var tmp4 = index;
      index = tmp4 + 1 | 0;
      out[tmp4] = map_0[(b0 & 3) << 4 | (b1 & 255) >> 4];
      var tmp5 = index;
      index = tmp5 + 1 | 0;
      out[tmp5] = map_0[(b1 & 15) << 2 | (b2 & 255) >> 6];
      var tmp6 = index;
      index = tmp6 + 1 | 0;
      out[tmp6] = map_0[b2 & 63];
    }
    var tmp7_subject = _this_.length - end | 0;
    if (tmp7_subject === 1) {
      var b0_0 = _this_[i];
      var tmp8 = index;
      index = tmp8 + 1 | 0;
      out[tmp8] = map_0[(b0_0 & 255) >> 2];
      var tmp9 = index;
      index = tmp9 + 1 | 0;
      out[tmp9] = map_0[(b0_0 & 3) << 4];
      var tmp10 = index;
      index = tmp10 + 1 | 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 61;
        break $l$block;
      }
      out[tmp10] = toByte(tmp$ret$0);
      var tmp = index;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = 61;
        break $l$block_0;
      }
      out[tmp] = toByte(tmp$ret$1);
    } else if (tmp7_subject === 2) {
      var tmp11 = i;
      i = tmp11 + 1 | 0;
      var b0_1 = _this_[tmp11];
      var b1_0 = _this_[i];
      var tmp12 = index;
      index = tmp12 + 1 | 0;
      out[tmp12] = map_0[(b0_1 & 255) >> 2];
      var tmp13 = index;
      index = tmp13 + 1 | 0;
      out[tmp13] = map_0[(b0_1 & 3) << 4 | (b1_0 & 255) >> 4];
      var tmp14 = index;
      index = tmp14 + 1 | 0;
      out[tmp14] = map_0[(b1_0 & 15) << 2];
      var tmp_0 = index;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = 61;
        break $l$block_1;
      }
      out[tmp_0] = toByte(tmp$ret$2);
    }return toUtf8String(out);
  }
  function encodeBase64$default(_this_, map_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      map_0 = BASE64;
    return encodeBase64(_this_, map_0);
  }
  var DEFAULT__new_UnsafeCursor;
  var DEFAULT__ByteString_size;
  function checkOffsetAndCount(size, offset, byteCount) {
    if ((offset.or_wiekkq_k$(byteCount).compareTo_wiekkq_k$(new Long(0, 0)) < 0 ? true : offset.compareTo_wiekkq_k$(size) > 0) ? true : size.minus_wiekkq_k$(offset).compareTo_wiekkq_k$(byteCount) < 0) {
      throw new ArrayIndexOutOfBoundsException('' + 'size=' + size + ' offset=' + offset + ' byteCount=' + byteCount);
    }}
  function resolveDefaultParameter(_this_, position) {
    if (position === DEFAULT__ByteString_size)
      return _this_._get_size__0_k$();
    return position;
  }
  function arrayRangeEquals(a, aOffset, b, bOffset, byteCount) {
    var inductionVariable = 0;
    if (inductionVariable < byteCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(a[i + aOffset | 0] === b[i + bOffset | 0]))
          return false;
      }
       while (inductionVariable < byteCount);
    return true;
  }
  function Segment_init_$Init$($this) {
    Segment.call($this);
    var tmp = $this;
    Companion_getInstance_18();
    tmp._data = new Int8Array(8192);
    $this._owner = true;
    $this._shared = false;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(Object.create(Segment.prototype));
  }
  function Segment_init_$Init$_0(data, pos, limit, shared, owner, $this) {
    Segment.call($this);
    $this._data = data;
    $this._pos = pos;
    $this._limit_0 = limit;
    $this._shared = shared;
    $this._owner = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shared, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shared, owner, Object.create(Segment.prototype));
  }
  function Companion_19() {
    Companion_instance_18 = this;
    this._SIZE = 8192;
    this._SHARE_MINIMUM = 1024;
  }
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_19();
    return Companion_instance_18;
  }
  Segment.prototype.push_5dd05i_k$ = function (segment_0) {
    segment_0._prev_0 = this;
    segment_0._next_4 = this._next_4;
    ensureNotNull(this._next_4)._prev_0 = segment_0;
    this._next_4 = segment_0;
    return segment_0;
  };
  function Segment() {
    Companion_getInstance_18();
    this._pos = 0;
    this._limit_0 = 0;
    this._shared = false;
    this._owner = false;
    this._next_4 = null;
    this._prev_0 = null;
  }
  Segment.$metadata$ = {
    simpleName: 'Segment',
    kind: 'class',
    interfaces: []
  };
  function Source_0() {
  }
  Source_0.$metadata$ = {
    simpleName: 'Source',
    kind: 'interface',
    interfaces: [Closeable]
  };
  var HEX_DIGIT_BYTES;
  var HEX_DIGIT_CHARS;
  function commonWrite(_this_, buffer, offset, byteCount) {
    buffer.write_irqg4d_k$(_this_._data_1, offset, byteCount);
    Unit_getInstance();
  }
  function codePointIndexToCharIndex(s, codePointCount) {
    var charCount = 0;
    var j = 0;
    {
      var tmp0_processUtf8CodePoints_0 = s.length;
      var index_1 = 0;
      while (index_1 < tmp0_processUtf8CodePoints_0) {
        var b0_2 = s[index_1];
        if (b0_2 >= 0) {
          {
            var tmp1__anonymous__39 = b0_2;
            var tmp0_40 = j;
            j = tmp0_40 + 1 | 0;
            if (tmp0_40 === codePointCount) {
              return charCount;
            } else {
            }
            var tmp;
            var tmp_0;
            var tmp_1;
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = 10;
              break $l$block;
            }
            if (!(tmp1__anonymous__39 === tmp$ret$0)) {
              var tmp$ret$1;
              $l$block_0: {
                tmp$ret$1 = 13;
                break $l$block_0;
              }
              tmp_1 = !(tmp1__anonymous__39 === tmp$ret$1);
            } else {
              {
                tmp_1 = false;
              }
            }
            if (tmp_1) {
              var tmp$ret$2;
              $l$block_1: {
                tmp$ret$2 = (0 <= tmp1__anonymous__39 ? tmp1__anonymous__39 <= 31 : false) ? true : 127 <= tmp1__anonymous__39 ? tmp1__anonymous__39 <= 159 : false;
                break $l$block_1;
              }
              tmp_0 = tmp$ret$2;
            } else {
              {
                tmp_0 = false;
              }
            }
            if (tmp_0) {
              tmp = true;
            } else {
              {
                tmp = tmp1__anonymous__39 === 65533;
              }
            }
            if (tmp) {
              return -1;
            } else {
            }
            charCount = charCount + (tmp1__anonymous__39 < 65536 ? 1 : 2) | 0;
          }
          var tmp0_3 = index_1;
          index_1 = tmp0_3 + 1 | 0;
          Unit_getInstance();
          while (index_1 < tmp0_processUtf8CodePoints_0 ? s[index_1] >= 0 : false) {
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp2__anonymous__39 = s[tmp1_4];
              var tmp0_40_0 = j;
              j = tmp0_40_0 + 1 | 0;
              if (tmp0_40_0 === codePointCount) {
                return charCount;
              } else {
              }
              var tmp_2;
              var tmp_3;
              var tmp_4;
              var tmp$ret$3;
              $l$block_2: {
                tmp$ret$3 = 10;
                break $l$block_2;
              }
              if (!(tmp2__anonymous__39 === tmp$ret$3)) {
                var tmp$ret$4;
                $l$block_3: {
                  tmp$ret$4 = 13;
                  break $l$block_3;
                }
                tmp_4 = !(tmp2__anonymous__39 === tmp$ret$4);
              } else {
                {
                  tmp_4 = false;
                }
              }
              if (tmp_4) {
                var tmp$ret$5;
                $l$block_4: {
                  tmp$ret$5 = (0 <= tmp2__anonymous__39 ? tmp2__anonymous__39 <= 31 : false) ? true : 127 <= tmp2__anonymous__39 ? tmp2__anonymous__39 <= 159 : false;
                  break $l$block_4;
                }
                tmp_3 = tmp$ret$5;
              } else {
                {
                  tmp_3 = false;
                }
              }
              if (tmp_3) {
                tmp_2 = true;
              } else {
                {
                  tmp_2 = tmp2__anonymous__39 === 65533;
                }
              }
              if (tmp_2) {
                return -1;
              } else {
              }
              charCount = charCount + (tmp2__anonymous__39 < 65536 ? 1 : 2) | 0;
            }
          }
        } else {
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = b0_2 >> 5;
            break $l$block_5;
          }
          if (tmp$ret$6 === -2) {
            var tmp_5 = index_1;
            var tmp$ret$10;
            $l$block_22: {
              var tmp0_process2Utf8Bytes_0_5 = index_1;
              if (tmp0_processUtf8CodePoints_0 <= (tmp0_process2Utf8Bytes_0_5 + 1 | 0)) {
                {
                  var tmp1__anonymous__4_6 = 65533;
                  {
                    var tmp0_40_1 = j;
                    j = tmp0_40_1 + 1 | 0;
                    if (tmp0_40_1 === codePointCount) {
                      return charCount;
                    } else {
                    }
                    var tmp_6;
                    var tmp_7;
                    var tmp_8;
                    var tmp$ret$7;
                    $l$block_6: {
                      tmp$ret$7 = 10;
                      break $l$block_6;
                    }
                    if (!(tmp1__anonymous__4_6 === tmp$ret$7)) {
                      var tmp$ret$8;
                      $l$block_7: {
                        tmp$ret$8 = 13;
                        break $l$block_7;
                      }
                      tmp_8 = !(tmp1__anonymous__4_6 === tmp$ret$8);
                    } else {
                      {
                        tmp_8 = false;
                      }
                    }
                    if (tmp_8) {
                      var tmp$ret$9;
                      $l$block_8: {
                        tmp$ret$9 = (0 <= tmp1__anonymous__4_6 ? tmp1__anonymous__4_6 <= 31 : false) ? true : 127 <= tmp1__anonymous__4_6 ? tmp1__anonymous__4_6 <= 159 : false;
                        break $l$block_8;
                      }
                      tmp_7 = tmp$ret$9;
                    } else {
                      {
                        tmp_7 = false;
                      }
                    }
                    if (tmp_7) {
                      tmp_6 = true;
                    } else {
                      {
                        tmp_6 = tmp1__anonymous__4_6 === 65533;
                      }
                    }
                    if (tmp_6) {
                      return -1;
                    } else {
                    }
                    charCount = charCount + (tmp1__anonymous__4_6 < 65536 ? 1 : 2) | 0;
                  }
                }
                tmp$ret$10 = 1;
                break $l$block_22;
              }var b0_1_7 = s[tmp0_process2Utf8Bytes_0_5];
              var b1_2_8 = s[tmp0_process2Utf8Bytes_0_5 + 1 | 0];
              var tmp$ret$12;
              $l$block_11: {
                var tmp$ret$11;
                $l$block_10: {
                  tmp$ret$11 = b1_2_8 & 192;
                  break $l$block_10;
                }
                tmp$ret$12 = tmp$ret$11 === 128;
                break $l$block_11;
              }
              if (!tmp$ret$12) {
                {
                  var tmp2__anonymous__4_9 = 65533;
                  {
                    var tmp0_40_2 = j;
                    j = tmp0_40_2 + 1 | 0;
                    if (tmp0_40_2 === codePointCount) {
                      return charCount;
                    } else {
                    }
                    var tmp_9;
                    var tmp_10;
                    var tmp_11;
                    var tmp$ret$13;
                    $l$block_12: {
                      tmp$ret$13 = 10;
                      break $l$block_12;
                    }
                    if (!(tmp2__anonymous__4_9 === tmp$ret$13)) {
                      var tmp$ret$14;
                      $l$block_13: {
                        tmp$ret$14 = 13;
                        break $l$block_13;
                      }
                      tmp_11 = !(tmp2__anonymous__4_9 === tmp$ret$14);
                    } else {
                      {
                        tmp_11 = false;
                      }
                    }
                    if (tmp_11) {
                      var tmp$ret$15;
                      $l$block_14: {
                        tmp$ret$15 = (0 <= tmp2__anonymous__4_9 ? tmp2__anonymous__4_9 <= 31 : false) ? true : 127 <= tmp2__anonymous__4_9 ? tmp2__anonymous__4_9 <= 159 : false;
                        break $l$block_14;
                      }
                      tmp_10 = tmp$ret$15;
                    } else {
                      {
                        tmp_10 = false;
                      }
                    }
                    if (tmp_10) {
                      tmp_9 = true;
                    } else {
                      {
                        tmp_9 = tmp2__anonymous__4_9 === 65533;
                      }
                    }
                    if (tmp_9) {
                      return -1;
                    } else {
                    }
                    charCount = charCount + (tmp2__anonymous__4_9 < 65536 ? 1 : 2) | 0;
                  }
                }
                tmp$ret$10 = 1;
                break $l$block_22;
              } else {
              }
              var codePoint_3_10 = 3968 ^ b1_2_8 ^ b0_1_7 << 6;
              if (codePoint_3_10 < 128) {
                {
                  var tmp3__anonymous__4_11 = 65533;
                  {
                    var tmp0_40_3 = j;
                    j = tmp0_40_3 + 1 | 0;
                    if (tmp0_40_3 === codePointCount) {
                      return charCount;
                    } else {
                    }
                    var tmp_12;
                    var tmp_13;
                    var tmp_14;
                    var tmp$ret$16;
                    $l$block_16: {
                      tmp$ret$16 = 10;
                      break $l$block_16;
                    }
                    if (!(tmp3__anonymous__4_11 === tmp$ret$16)) {
                      var tmp$ret$17;
                      $l$block_17: {
                        tmp$ret$17 = 13;
                        break $l$block_17;
                      }
                      tmp_14 = !(tmp3__anonymous__4_11 === tmp$ret$17);
                    } else {
                      {
                        tmp_14 = false;
                      }
                    }
                    if (tmp_14) {
                      var tmp$ret$18;
                      $l$block_18: {
                        tmp$ret$18 = (0 <= tmp3__anonymous__4_11 ? tmp3__anonymous__4_11 <= 31 : false) ? true : 127 <= tmp3__anonymous__4_11 ? tmp3__anonymous__4_11 <= 159 : false;
                        break $l$block_18;
                      }
                      tmp_13 = tmp$ret$18;
                    } else {
                      {
                        tmp_13 = false;
                      }
                    }
                    if (tmp_13) {
                      tmp_12 = true;
                    } else {
                      {
                        tmp_12 = tmp3__anonymous__4_11 === 65533;
                      }
                    }
                    if (tmp_12) {
                      return -1;
                    } else {
                    }
                    charCount = charCount + (tmp3__anonymous__4_11 < 65536 ? 1 : 2) | 0;
                  }
                }
              } else {
                {
                  {
                    var tmp0_40_4 = j;
                    j = tmp0_40_4 + 1 | 0;
                    if (tmp0_40_4 === codePointCount) {
                      return charCount;
                    } else {
                    }
                    var tmp_15;
                    var tmp_16;
                    var tmp_17;
                    var tmp$ret$19;
                    $l$block_19: {
                      tmp$ret$19 = 10;
                      break $l$block_19;
                    }
                    if (!(codePoint_3_10 === tmp$ret$19)) {
                      var tmp$ret$20;
                      $l$block_20: {
                        tmp$ret$20 = 13;
                        break $l$block_20;
                      }
                      tmp_17 = !(codePoint_3_10 === tmp$ret$20);
                    } else {
                      {
                        tmp_17 = false;
                      }
                    }
                    if (tmp_17) {
                      var tmp$ret$21;
                      $l$block_21: {
                        tmp$ret$21 = (0 <= codePoint_3_10 ? codePoint_3_10 <= 31 : false) ? true : 127 <= codePoint_3_10 ? codePoint_3_10 <= 159 : false;
                        break $l$block_21;
                      }
                      tmp_16 = tmp$ret$21;
                    } else {
                      {
                        tmp_16 = false;
                      }
                    }
                    if (tmp_16) {
                      tmp_15 = true;
                    } else {
                      {
                        tmp_15 = codePoint_3_10 === 65533;
                      }
                    }
                    if (tmp_15) {
                      return -1;
                    } else {
                    }
                    charCount = charCount + (codePoint_3_10 < 65536 ? 1 : 2) | 0;
                  }
                }
              }
              tmp$ret$10 = 2;
              break $l$block_22;
            }
            index_1 = tmp_5 + tmp$ret$10 | 0;
          } else {
            var tmp$ret$22;
            $l$block_23: {
              tmp$ret$22 = b0_2 >> 4;
              break $l$block_23;
            }
            if (tmp$ret$22 === -2) {
              var tmp_18 = index_1;
              var tmp$ret$28;
              $l$block_52: {
                var tmp5_process3Utf8Bytes_0_12 = index_1;
                if (tmp0_processUtf8CodePoints_0 <= (tmp5_process3Utf8Bytes_0_12 + 2 | 0)) {
                  {
                    var tmp6__anonymous__5_13 = 65533;
                    {
                      var tmp0_40_5 = j;
                      j = tmp0_40_5 + 1 | 0;
                      if (tmp0_40_5 === codePointCount) {
                        return charCount;
                      } else {
                      }
                      var tmp_19;
                      var tmp_20;
                      var tmp_21;
                      var tmp$ret$23;
                      $l$block_24: {
                        tmp$ret$23 = 10;
                        break $l$block_24;
                      }
                      if (!(tmp6__anonymous__5_13 === tmp$ret$23)) {
                        var tmp$ret$24;
                        $l$block_25: {
                          tmp$ret$24 = 13;
                          break $l$block_25;
                        }
                        tmp_21 = !(tmp6__anonymous__5_13 === tmp$ret$24);
                      } else {
                        {
                          tmp_21 = false;
                        }
                      }
                      if (tmp_21) {
                        var tmp$ret$25;
                        $l$block_26: {
                          tmp$ret$25 = (0 <= tmp6__anonymous__5_13 ? tmp6__anonymous__5_13 <= 31 : false) ? true : 127 <= tmp6__anonymous__5_13 ? tmp6__anonymous__5_13 <= 159 : false;
                          break $l$block_26;
                        }
                        tmp_20 = tmp$ret$25;
                      } else {
                        {
                          tmp_20 = false;
                        }
                      }
                      if (tmp_20) {
                        tmp_19 = true;
                      } else {
                        {
                          tmp_19 = tmp6__anonymous__5_13 === 65533;
                        }
                      }
                      if (tmp_19) {
                        return -1;
                      } else {
                      }
                      charCount = charCount + (tmp6__anonymous__5_13 < 65536 ? 1 : 2) | 0;
                    }
                  }
                  var tmp_22;
                  if (tmp0_processUtf8CodePoints_0 <= (tmp5_process3Utf8Bytes_0_12 + 1 | 0)) {
                    tmp_22 = true;
                  } else {
                    var tmp$ret$27;
                    $l$block_28: {
                      var tmp4_isUtf8Continuation_0_14 = s[tmp5_process3Utf8Bytes_0_12 + 1 | 0];
                      var tmp$ret$26;
                      $l$block_27: {
                        tmp$ret$26 = tmp4_isUtf8Continuation_0_14 & 192;
                        break $l$block_27;
                      }
                      tmp$ret$27 = tmp$ret$26 === 128;
                      break $l$block_28;
                    }
                    tmp_22 = !tmp$ret$27;
                  }
                  if (tmp_22) {
                    tmp$ret$28 = 1;
                    break $l$block_52;
                  } else {
                    {
                      tmp$ret$28 = 2;
                      break $l$block_52;
                    }
                  }
                }var b0_1_15 = s[tmp5_process3Utf8Bytes_0_12];
                var b1_2_16 = s[tmp5_process3Utf8Bytes_0_12 + 1 | 0];
                var tmp$ret$30;
                $l$block_32: {
                  var tmp$ret$29;
                  $l$block_31: {
                    tmp$ret$29 = b1_2_16 & 192;
                    break $l$block_31;
                  }
                  tmp$ret$30 = tmp$ret$29 === 128;
                  break $l$block_32;
                }
                if (!tmp$ret$30) {
                  {
                    var tmp7__anonymous__5_17 = 65533;
                    {
                      var tmp0_40_6 = j;
                      j = tmp0_40_6 + 1 | 0;
                      if (tmp0_40_6 === codePointCount) {
                        return charCount;
                      } else {
                      }
                      var tmp_23;
                      var tmp_24;
                      var tmp_25;
                      var tmp$ret$31;
                      $l$block_33: {
                        tmp$ret$31 = 10;
                        break $l$block_33;
                      }
                      if (!(tmp7__anonymous__5_17 === tmp$ret$31)) {
                        var tmp$ret$32;
                        $l$block_34: {
                          tmp$ret$32 = 13;
                          break $l$block_34;
                        }
                        tmp_25 = !(tmp7__anonymous__5_17 === tmp$ret$32);
                      } else {
                        {
                          tmp_25 = false;
                        }
                      }
                      if (tmp_25) {
                        var tmp$ret$33;
                        $l$block_35: {
                          tmp$ret$33 = (0 <= tmp7__anonymous__5_17 ? tmp7__anonymous__5_17 <= 31 : false) ? true : 127 <= tmp7__anonymous__5_17 ? tmp7__anonymous__5_17 <= 159 : false;
                          break $l$block_35;
                        }
                        tmp_24 = tmp$ret$33;
                      } else {
                        {
                          tmp_24 = false;
                        }
                      }
                      if (tmp_24) {
                        tmp_23 = true;
                      } else {
                        {
                          tmp_23 = tmp7__anonymous__5_17 === 65533;
                        }
                      }
                      if (tmp_23) {
                        return -1;
                      } else {
                      }
                      charCount = charCount + (tmp7__anonymous__5_17 < 65536 ? 1 : 2) | 0;
                    }
                  }
                  tmp$ret$28 = 1;
                  break $l$block_52;
                } else {
                }
                var b2_3_18 = s[tmp5_process3Utf8Bytes_0_12 + 2 | 0];
                var tmp$ret$35;
                $l$block_38: {
                  var tmp$ret$34;
                  $l$block_37: {
                    tmp$ret$34 = b2_3_18 & 192;
                    break $l$block_37;
                  }
                  tmp$ret$35 = tmp$ret$34 === 128;
                  break $l$block_38;
                }
                if (!tmp$ret$35) {
                  {
                    var tmp8__anonymous__5_19 = 65533;
                    {
                      var tmp0_40_7 = j;
                      j = tmp0_40_7 + 1 | 0;
                      if (tmp0_40_7 === codePointCount) {
                        return charCount;
                      } else {
                      }
                      var tmp_26;
                      var tmp_27;
                      var tmp_28;
                      var tmp$ret$36;
                      $l$block_39: {
                        tmp$ret$36 = 10;
                        break $l$block_39;
                      }
                      if (!(tmp8__anonymous__5_19 === tmp$ret$36)) {
                        var tmp$ret$37;
                        $l$block_40: {
                          tmp$ret$37 = 13;
                          break $l$block_40;
                        }
                        tmp_28 = !(tmp8__anonymous__5_19 === tmp$ret$37);
                      } else {
                        {
                          tmp_28 = false;
                        }
                      }
                      if (tmp_28) {
                        var tmp$ret$38;
                        $l$block_41: {
                          tmp$ret$38 = (0 <= tmp8__anonymous__5_19 ? tmp8__anonymous__5_19 <= 31 : false) ? true : 127 <= tmp8__anonymous__5_19 ? tmp8__anonymous__5_19 <= 159 : false;
                          break $l$block_41;
                        }
                        tmp_27 = tmp$ret$38;
                      } else {
                        {
                          tmp_27 = false;
                        }
                      }
                      if (tmp_27) {
                        tmp_26 = true;
                      } else {
                        {
                          tmp_26 = tmp8__anonymous__5_19 === 65533;
                        }
                      }
                      if (tmp_26) {
                        return -1;
                      } else {
                      }
                      charCount = charCount + (tmp8__anonymous__5_19 < 65536 ? 1 : 2) | 0;
                    }
                  }
                  tmp$ret$28 = 2;
                  break $l$block_52;
                } else {
                }
                var codePoint_4_20 = -123008 ^ b2_3_18 ^ b1_2_16 << 6 ^ b0_1_15 << 12;
                if (codePoint_4_20 < 2048) {
                  {
                    var tmp9__anonymous__5_21 = 65533;
                    {
                      var tmp0_40_8 = j;
                      j = tmp0_40_8 + 1 | 0;
                      if (tmp0_40_8 === codePointCount) {
                        return charCount;
                      } else {
                      }
                      var tmp_29;
                      var tmp_30;
                      var tmp_31;
                      var tmp$ret$39;
                      $l$block_43: {
                        tmp$ret$39 = 10;
                        break $l$block_43;
                      }
                      if (!(tmp9__anonymous__5_21 === tmp$ret$39)) {
                        var tmp$ret$40;
                        $l$block_44: {
                          tmp$ret$40 = 13;
                          break $l$block_44;
                        }
                        tmp_31 = !(tmp9__anonymous__5_21 === tmp$ret$40);
                      } else {
                        {
                          tmp_31 = false;
                        }
                      }
                      if (tmp_31) {
                        var tmp$ret$41;
                        $l$block_45: {
                          tmp$ret$41 = (0 <= tmp9__anonymous__5_21 ? tmp9__anonymous__5_21 <= 31 : false) ? true : 127 <= tmp9__anonymous__5_21 ? tmp9__anonymous__5_21 <= 159 : false;
                          break $l$block_45;
                        }
                        tmp_30 = tmp$ret$41;
                      } else {
                        {
                          tmp_30 = false;
                        }
                      }
                      if (tmp_30) {
                        tmp_29 = true;
                      } else {
                        {
                          tmp_29 = tmp9__anonymous__5_21 === 65533;
                        }
                      }
                      if (tmp_29) {
                        return -1;
                      } else {
                      }
                      charCount = charCount + (tmp9__anonymous__5_21 < 65536 ? 1 : 2) | 0;
                    }
                  }
                } else if (55296 <= codePoint_4_20 ? codePoint_4_20 <= 57343 : false) {
                  {
                    var tmp10__anonymous__5_22 = 65533;
                    {
                      var tmp0_40_9 = j;
                      j = tmp0_40_9 + 1 | 0;
                      if (tmp0_40_9 === codePointCount) {
                        return charCount;
                      } else {
                      }
                      var tmp_32;
                      var tmp_33;
                      var tmp_34;
                      var tmp$ret$42;
                      $l$block_46: {
                        tmp$ret$42 = 10;
                        break $l$block_46;
                      }
                      if (!(tmp10__anonymous__5_22 === tmp$ret$42)) {
                        var tmp$ret$43;
                        $l$block_47: {
                          tmp$ret$43 = 13;
                          break $l$block_47;
                        }
                        tmp_34 = !(tmp10__anonymous__5_22 === tmp$ret$43);
                      } else {
                        {
                          tmp_34 = false;
                        }
                      }
                      if (tmp_34) {
                        var tmp$ret$44;
                        $l$block_48: {
                          tmp$ret$44 = (0 <= tmp10__anonymous__5_22 ? tmp10__anonymous__5_22 <= 31 : false) ? true : 127 <= tmp10__anonymous__5_22 ? tmp10__anonymous__5_22 <= 159 : false;
                          break $l$block_48;
                        }
                        tmp_33 = tmp$ret$44;
                      } else {
                        {
                          tmp_33 = false;
                        }
                      }
                      if (tmp_33) {
                        tmp_32 = true;
                      } else {
                        {
                          tmp_32 = tmp10__anonymous__5_22 === 65533;
                        }
                      }
                      if (tmp_32) {
                        return -1;
                      } else {
                      }
                      charCount = charCount + (tmp10__anonymous__5_22 < 65536 ? 1 : 2) | 0;
                    }
                  }
                } else {
                  {
                    {
                      var tmp0_40_10 = j;
                      j = tmp0_40_10 + 1 | 0;
                      if (tmp0_40_10 === codePointCount) {
                        return charCount;
                      } else {
                      }
                      var tmp_35;
                      var tmp_36;
                      var tmp_37;
                      var tmp$ret$45;
                      $l$block_49: {
                        tmp$ret$45 = 10;
                        break $l$block_49;
                      }
                      if (!(codePoint_4_20 === tmp$ret$45)) {
                        var tmp$ret$46;
                        $l$block_50: {
                          tmp$ret$46 = 13;
                          break $l$block_50;
                        }
                        tmp_37 = !(codePoint_4_20 === tmp$ret$46);
                      } else {
                        {
                          tmp_37 = false;
                        }
                      }
                      if (tmp_37) {
                        var tmp$ret$47;
                        $l$block_51: {
                          tmp$ret$47 = (0 <= codePoint_4_20 ? codePoint_4_20 <= 31 : false) ? true : 127 <= codePoint_4_20 ? codePoint_4_20 <= 159 : false;
                          break $l$block_51;
                        }
                        tmp_36 = tmp$ret$47;
                      } else {
                        {
                          tmp_36 = false;
                        }
                      }
                      if (tmp_36) {
                        tmp_35 = true;
                      } else {
                        {
                          tmp_35 = codePoint_4_20 === 65533;
                        }
                      }
                      if (tmp_35) {
                        return -1;
                      } else {
                      }
                      charCount = charCount + (codePoint_4_20 < 65536 ? 1 : 2) | 0;
                    }
                  }
                }
                tmp$ret$28 = 3;
                break $l$block_52;
              }
              index_1 = tmp_18 + tmp$ret$28 | 0;
            } else {
              var tmp$ret$48;
              $l$block_53: {
                tmp$ret$48 = b0_2 >> 3;
                break $l$block_53;
              }
              if (tmp$ret$48 === -2) {
                var tmp_38 = index_1;
                var tmp$ret$54;
                $l$block_94: {
                  var tmp13_process4Utf8Bytes_0_23 = index_1;
                  if (tmp0_processUtf8CodePoints_0 <= (tmp13_process4Utf8Bytes_0_23 + 3 | 0)) {
                    {
                      var tmp14__anonymous__6_24 = 65533;
                      {
                        var tmp0_40_11 = j;
                        j = tmp0_40_11 + 1 | 0;
                        if (tmp0_40_11 === codePointCount) {
                          return charCount;
                        } else {
                        }
                        var tmp_39;
                        var tmp_40;
                        var tmp_41;
                        var tmp$ret$49;
                        $l$block_54: {
                          tmp$ret$49 = 10;
                          break $l$block_54;
                        }
                        if (!(tmp14__anonymous__6_24 === tmp$ret$49)) {
                          var tmp$ret$50;
                          $l$block_55: {
                            tmp$ret$50 = 13;
                            break $l$block_55;
                          }
                          tmp_41 = !(tmp14__anonymous__6_24 === tmp$ret$50);
                        } else {
                          {
                            tmp_41 = false;
                          }
                        }
                        if (tmp_41) {
                          var tmp$ret$51;
                          $l$block_56: {
                            tmp$ret$51 = (0 <= tmp14__anonymous__6_24 ? tmp14__anonymous__6_24 <= 31 : false) ? true : 127 <= tmp14__anonymous__6_24 ? tmp14__anonymous__6_24 <= 159 : false;
                            break $l$block_56;
                          }
                          tmp_40 = tmp$ret$51;
                        } else {
                          {
                            tmp_40 = false;
                          }
                        }
                        if (tmp_40) {
                          tmp_39 = true;
                        } else {
                          {
                            tmp_39 = tmp14__anonymous__6_24 === 65533;
                          }
                        }
                        if (tmp_39) {
                          return -1;
                        } else {
                        }
                        charCount = charCount + (tmp14__anonymous__6_24 < 65536 ? 1 : 2) | 0;
                      }
                    }
                    var tmp_42;
                    if (tmp0_processUtf8CodePoints_0 <= (tmp13_process4Utf8Bytes_0_23 + 1 | 0)) {
                      tmp_42 = true;
                    } else {
                      var tmp$ret$53;
                      $l$block_58: {
                        var tmp11_isUtf8Continuation_0_25 = s[tmp13_process4Utf8Bytes_0_23 + 1 | 0];
                        var tmp$ret$52;
                        $l$block_57: {
                          tmp$ret$52 = tmp11_isUtf8Continuation_0_25 & 192;
                          break $l$block_57;
                        }
                        tmp$ret$53 = tmp$ret$52 === 128;
                        break $l$block_58;
                      }
                      tmp_42 = !tmp$ret$53;
                    }
                    if (tmp_42) {
                      tmp$ret$54 = 1;
                      break $l$block_94;
                    } else {
                      var tmp_43;
                      if (tmp0_processUtf8CodePoints_0 <= (tmp13_process4Utf8Bytes_0_23 + 2 | 0)) {
                        tmp_43 = true;
                      } else {
                        var tmp$ret$56;
                        $l$block_61: {
                          var tmp12_isUtf8Continuation_0_26 = s[tmp13_process4Utf8Bytes_0_23 + 2 | 0];
                          var tmp$ret$55;
                          $l$block_60: {
                            tmp$ret$55 = tmp12_isUtf8Continuation_0_26 & 192;
                            break $l$block_60;
                          }
                          tmp$ret$56 = tmp$ret$55 === 128;
                          break $l$block_61;
                        }
                        tmp_43 = !tmp$ret$56;
                      }
                      if (tmp_43) {
                        tmp$ret$54 = 2;
                        break $l$block_94;
                      } else {
                        {
                          tmp$ret$54 = 3;
                          break $l$block_94;
                        }
                      }
                    }
                  }var b0_1_27 = s[tmp13_process4Utf8Bytes_0_23];
                  var b1_2_28 = s[tmp13_process4Utf8Bytes_0_23 + 1 | 0];
                  var tmp$ret$58;
                  $l$block_65: {
                    var tmp$ret$57;
                    $l$block_64: {
                      tmp$ret$57 = b1_2_28 & 192;
                      break $l$block_64;
                    }
                    tmp$ret$58 = tmp$ret$57 === 128;
                    break $l$block_65;
                  }
                  if (!tmp$ret$58) {
                    {
                      var tmp15__anonymous__6_29 = 65533;
                      {
                        var tmp0_40_12 = j;
                        j = tmp0_40_12 + 1 | 0;
                        if (tmp0_40_12 === codePointCount) {
                          return charCount;
                        } else {
                        }
                        var tmp_44;
                        var tmp_45;
                        var tmp_46;
                        var tmp$ret$59;
                        $l$block_66: {
                          tmp$ret$59 = 10;
                          break $l$block_66;
                        }
                        if (!(tmp15__anonymous__6_29 === tmp$ret$59)) {
                          var tmp$ret$60;
                          $l$block_67: {
                            tmp$ret$60 = 13;
                            break $l$block_67;
                          }
                          tmp_46 = !(tmp15__anonymous__6_29 === tmp$ret$60);
                        } else {
                          {
                            tmp_46 = false;
                          }
                        }
                        if (tmp_46) {
                          var tmp$ret$61;
                          $l$block_68: {
                            tmp$ret$61 = (0 <= tmp15__anonymous__6_29 ? tmp15__anonymous__6_29 <= 31 : false) ? true : 127 <= tmp15__anonymous__6_29 ? tmp15__anonymous__6_29 <= 159 : false;
                            break $l$block_68;
                          }
                          tmp_45 = tmp$ret$61;
                        } else {
                          {
                            tmp_45 = false;
                          }
                        }
                        if (tmp_45) {
                          tmp_44 = true;
                        } else {
                          {
                            tmp_44 = tmp15__anonymous__6_29 === 65533;
                          }
                        }
                        if (tmp_44) {
                          return -1;
                        } else {
                        }
                        charCount = charCount + (tmp15__anonymous__6_29 < 65536 ? 1 : 2) | 0;
                      }
                    }
                    tmp$ret$54 = 1;
                    break $l$block_94;
                  } else {
                  }
                  var b2_3_30 = s[tmp13_process4Utf8Bytes_0_23 + 2 | 0];
                  var tmp$ret$63;
                  $l$block_71: {
                    var tmp$ret$62;
                    $l$block_70: {
                      tmp$ret$62 = b2_3_30 & 192;
                      break $l$block_70;
                    }
                    tmp$ret$63 = tmp$ret$62 === 128;
                    break $l$block_71;
                  }
                  if (!tmp$ret$63) {
                    {
                      var tmp16__anonymous__6_31 = 65533;
                      {
                        var tmp0_40_13 = j;
                        j = tmp0_40_13 + 1 | 0;
                        if (tmp0_40_13 === codePointCount) {
                          return charCount;
                        } else {
                        }
                        var tmp_47;
                        var tmp_48;
                        var tmp_49;
                        var tmp$ret$64;
                        $l$block_72: {
                          tmp$ret$64 = 10;
                          break $l$block_72;
                        }
                        if (!(tmp16__anonymous__6_31 === tmp$ret$64)) {
                          var tmp$ret$65;
                          $l$block_73: {
                            tmp$ret$65 = 13;
                            break $l$block_73;
                          }
                          tmp_49 = !(tmp16__anonymous__6_31 === tmp$ret$65);
                        } else {
                          {
                            tmp_49 = false;
                          }
                        }
                        if (tmp_49) {
                          var tmp$ret$66;
                          $l$block_74: {
                            tmp$ret$66 = (0 <= tmp16__anonymous__6_31 ? tmp16__anonymous__6_31 <= 31 : false) ? true : 127 <= tmp16__anonymous__6_31 ? tmp16__anonymous__6_31 <= 159 : false;
                            break $l$block_74;
                          }
                          tmp_48 = tmp$ret$66;
                        } else {
                          {
                            tmp_48 = false;
                          }
                        }
                        if (tmp_48) {
                          tmp_47 = true;
                        } else {
                          {
                            tmp_47 = tmp16__anonymous__6_31 === 65533;
                          }
                        }
                        if (tmp_47) {
                          return -1;
                        } else {
                        }
                        charCount = charCount + (tmp16__anonymous__6_31 < 65536 ? 1 : 2) | 0;
                      }
                    }
                    tmp$ret$54 = 2;
                    break $l$block_94;
                  } else {
                  }
                  var b3_4_32 = s[tmp13_process4Utf8Bytes_0_23 + 3 | 0];
                  var tmp$ret$68;
                  $l$block_77: {
                    var tmp$ret$67;
                    $l$block_76: {
                      tmp$ret$67 = b3_4_32 & 192;
                      break $l$block_76;
                    }
                    tmp$ret$68 = tmp$ret$67 === 128;
                    break $l$block_77;
                  }
                  if (!tmp$ret$68) {
                    {
                      var tmp17__anonymous__6_33 = 65533;
                      {
                        var tmp0_40_14 = j;
                        j = tmp0_40_14 + 1 | 0;
                        if (tmp0_40_14 === codePointCount) {
                          return charCount;
                        } else {
                        }
                        var tmp_50;
                        var tmp_51;
                        var tmp_52;
                        var tmp$ret$69;
                        $l$block_78: {
                          tmp$ret$69 = 10;
                          break $l$block_78;
                        }
                        if (!(tmp17__anonymous__6_33 === tmp$ret$69)) {
                          var tmp$ret$70;
                          $l$block_79: {
                            tmp$ret$70 = 13;
                            break $l$block_79;
                          }
                          tmp_52 = !(tmp17__anonymous__6_33 === tmp$ret$70);
                        } else {
                          {
                            tmp_52 = false;
                          }
                        }
                        if (tmp_52) {
                          var tmp$ret$71;
                          $l$block_80: {
                            tmp$ret$71 = (0 <= tmp17__anonymous__6_33 ? tmp17__anonymous__6_33 <= 31 : false) ? true : 127 <= tmp17__anonymous__6_33 ? tmp17__anonymous__6_33 <= 159 : false;
                            break $l$block_80;
                          }
                          tmp_51 = tmp$ret$71;
                        } else {
                          {
                            tmp_51 = false;
                          }
                        }
                        if (tmp_51) {
                          tmp_50 = true;
                        } else {
                          {
                            tmp_50 = tmp17__anonymous__6_33 === 65533;
                          }
                        }
                        if (tmp_50) {
                          return -1;
                        } else {
                        }
                        charCount = charCount + (tmp17__anonymous__6_33 < 65536 ? 1 : 2) | 0;
                      }
                    }
                    tmp$ret$54 = 3;
                    break $l$block_94;
                  } else {
                  }
                  var codePoint_5_34 = 3678080 ^ b3_4_32 ^ b2_3_30 << 6 ^ b1_2_28 << 12 ^ b0_1_27 << 18;
                  if (codePoint_5_34 > 1114111) {
                    {
                      var tmp18__anonymous__6_35 = 65533;
                      {
                        var tmp0_40_15 = j;
                        j = tmp0_40_15 + 1 | 0;
                        if (tmp0_40_15 === codePointCount) {
                          return charCount;
                        } else {
                        }
                        var tmp_53;
                        var tmp_54;
                        var tmp_55;
                        var tmp$ret$72;
                        $l$block_82: {
                          tmp$ret$72 = 10;
                          break $l$block_82;
                        }
                        if (!(tmp18__anonymous__6_35 === tmp$ret$72)) {
                          var tmp$ret$73;
                          $l$block_83: {
                            tmp$ret$73 = 13;
                            break $l$block_83;
                          }
                          tmp_55 = !(tmp18__anonymous__6_35 === tmp$ret$73);
                        } else {
                          {
                            tmp_55 = false;
                          }
                        }
                        if (tmp_55) {
                          var tmp$ret$74;
                          $l$block_84: {
                            tmp$ret$74 = (0 <= tmp18__anonymous__6_35 ? tmp18__anonymous__6_35 <= 31 : false) ? true : 127 <= tmp18__anonymous__6_35 ? tmp18__anonymous__6_35 <= 159 : false;
                            break $l$block_84;
                          }
                          tmp_54 = tmp$ret$74;
                        } else {
                          {
                            tmp_54 = false;
                          }
                        }
                        if (tmp_54) {
                          tmp_53 = true;
                        } else {
                          {
                            tmp_53 = tmp18__anonymous__6_35 === 65533;
                          }
                        }
                        if (tmp_53) {
                          return -1;
                        } else {
                        }
                        charCount = charCount + (tmp18__anonymous__6_35 < 65536 ? 1 : 2) | 0;
                      }
                    }
                  } else if (55296 <= codePoint_5_34 ? codePoint_5_34 <= 57343 : false) {
                    {
                      var tmp19__anonymous__6_36 = 65533;
                      {
                        var tmp0_40_16 = j;
                        j = tmp0_40_16 + 1 | 0;
                        if (tmp0_40_16 === codePointCount) {
                          return charCount;
                        } else {
                        }
                        var tmp_56;
                        var tmp_57;
                        var tmp_58;
                        var tmp$ret$75;
                        $l$block_85: {
                          tmp$ret$75 = 10;
                          break $l$block_85;
                        }
                        if (!(tmp19__anonymous__6_36 === tmp$ret$75)) {
                          var tmp$ret$76;
                          $l$block_86: {
                            tmp$ret$76 = 13;
                            break $l$block_86;
                          }
                          tmp_58 = !(tmp19__anonymous__6_36 === tmp$ret$76);
                        } else {
                          {
                            tmp_58 = false;
                          }
                        }
                        if (tmp_58) {
                          var tmp$ret$77;
                          $l$block_87: {
                            tmp$ret$77 = (0 <= tmp19__anonymous__6_36 ? tmp19__anonymous__6_36 <= 31 : false) ? true : 127 <= tmp19__anonymous__6_36 ? tmp19__anonymous__6_36 <= 159 : false;
                            break $l$block_87;
                          }
                          tmp_57 = tmp$ret$77;
                        } else {
                          {
                            tmp_57 = false;
                          }
                        }
                        if (tmp_57) {
                          tmp_56 = true;
                        } else {
                          {
                            tmp_56 = tmp19__anonymous__6_36 === 65533;
                          }
                        }
                        if (tmp_56) {
                          return -1;
                        } else {
                        }
                        charCount = charCount + (tmp19__anonymous__6_36 < 65536 ? 1 : 2) | 0;
                      }
                    }
                  } else if (codePoint_5_34 < 65536) {
                    {
                      var tmp20__anonymous__6_37 = 65533;
                      {
                        var tmp0_40_17 = j;
                        j = tmp0_40_17 + 1 | 0;
                        if (tmp0_40_17 === codePointCount) {
                          return charCount;
                        } else {
                        }
                        var tmp_59;
                        var tmp_60;
                        var tmp_61;
                        var tmp$ret$78;
                        $l$block_88: {
                          tmp$ret$78 = 10;
                          break $l$block_88;
                        }
                        if (!(tmp20__anonymous__6_37 === tmp$ret$78)) {
                          var tmp$ret$79;
                          $l$block_89: {
                            tmp$ret$79 = 13;
                            break $l$block_89;
                          }
                          tmp_61 = !(tmp20__anonymous__6_37 === tmp$ret$79);
                        } else {
                          {
                            tmp_61 = false;
                          }
                        }
                        if (tmp_61) {
                          var tmp$ret$80;
                          $l$block_90: {
                            tmp$ret$80 = (0 <= tmp20__anonymous__6_37 ? tmp20__anonymous__6_37 <= 31 : false) ? true : 127 <= tmp20__anonymous__6_37 ? tmp20__anonymous__6_37 <= 159 : false;
                            break $l$block_90;
                          }
                          tmp_60 = tmp$ret$80;
                        } else {
                          {
                            tmp_60 = false;
                          }
                        }
                        if (tmp_60) {
                          tmp_59 = true;
                        } else {
                          {
                            tmp_59 = tmp20__anonymous__6_37 === 65533;
                          }
                        }
                        if (tmp_59) {
                          return -1;
                        } else {
                        }
                        charCount = charCount + (tmp20__anonymous__6_37 < 65536 ? 1 : 2) | 0;
                      }
                    }
                  } else {
                    {
                      {
                        var tmp0_40_18 = j;
                        j = tmp0_40_18 + 1 | 0;
                        if (tmp0_40_18 === codePointCount) {
                          return charCount;
                        } else {
                        }
                        var tmp_62;
                        var tmp_63;
                        var tmp_64;
                        var tmp$ret$81;
                        $l$block_91: {
                          tmp$ret$81 = 10;
                          break $l$block_91;
                        }
                        if (!(codePoint_5_34 === tmp$ret$81)) {
                          var tmp$ret$82;
                          $l$block_92: {
                            tmp$ret$82 = 13;
                            break $l$block_92;
                          }
                          tmp_64 = !(codePoint_5_34 === tmp$ret$82);
                        } else {
                          {
                            tmp_64 = false;
                          }
                        }
                        if (tmp_64) {
                          var tmp$ret$83;
                          $l$block_93: {
                            tmp$ret$83 = (0 <= codePoint_5_34 ? codePoint_5_34 <= 31 : false) ? true : 127 <= codePoint_5_34 ? codePoint_5_34 <= 159 : false;
                            break $l$block_93;
                          }
                          tmp_63 = tmp$ret$83;
                        } else {
                          {
                            tmp_63 = false;
                          }
                        }
                        if (tmp_63) {
                          tmp_62 = true;
                        } else {
                          {
                            tmp_62 = codePoint_5_34 === 65533;
                          }
                        }
                        if (tmp_62) {
                          return -1;
                        } else {
                        }
                        charCount = charCount + (codePoint_5_34 < 65536 ? 1 : 2) | 0;
                      }
                    }
                  }
                  tmp$ret$54 = 4;
                  break $l$block_94;
                }
                index_1 = tmp_38 + tmp$ret$54 | 0;
              } else {
                {
                  {
                    var tmp3__anonymous__39 = 65533;
                    var tmp0_40_19 = j;
                    j = tmp0_40_19 + 1 | 0;
                    if (tmp0_40_19 === codePointCount) {
                      return charCount;
                    } else {
                    }
                    var tmp_65;
                    var tmp_66;
                    var tmp_67;
                    var tmp$ret$84;
                    $l$block_95: {
                      tmp$ret$84 = 10;
                      break $l$block_95;
                    }
                    if (!(tmp3__anonymous__39 === tmp$ret$84)) {
                      var tmp$ret$85;
                      $l$block_96: {
                        tmp$ret$85 = 13;
                        break $l$block_96;
                      }
                      tmp_67 = !(tmp3__anonymous__39 === tmp$ret$85);
                    } else {
                      {
                        tmp_67 = false;
                      }
                    }
                    if (tmp_67) {
                      var tmp$ret$86;
                      $l$block_97: {
                        tmp$ret$86 = (0 <= tmp3__anonymous__39 ? tmp3__anonymous__39 <= 31 : false) ? true : 127 <= tmp3__anonymous__39 ? tmp3__anonymous__39 <= 159 : false;
                        break $l$block_97;
                      }
                      tmp_66 = tmp$ret$86;
                    } else {
                      {
                        tmp_66 = false;
                      }
                    }
                    if (tmp_66) {
                      tmp_65 = true;
                    } else {
                      {
                        tmp_65 = tmp3__anonymous__39 === 65533;
                      }
                    }
                    if (tmp_65) {
                      return -1;
                    } else {
                    }
                    charCount = charCount + (tmp3__anonymous__39 < 65536 ? 1 : 2) | 0;
                  }
                  var tmp2_38 = index_1;
                  index_1 = tmp2_38 + 1 | 0;
                  Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
    return charCount;
  }
  function codePointIndexToCharIndex$accessor$13225fg(s, codePointCount) {
    return codePointIndexToCharIndex(s, codePointCount);
  }
  function HEX_DIGIT_CHARS$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charArrayOf([new Char(48), new Char(49), new Char(50), new Char(51), new Char(52), new Char(53), new Char(54), new Char(55), new Char(56), new Char(57), new Char(97), new Char(98), new Char(99), new Char(100), new Char(101), new Char(102)]);
      break $l$block;
    }
    return tmp$ret$0;
  }
  var SLASH;
  var BACKSLASH;
  var ANY_SLASH;
  var DOT;
  var DOT_DOT;
  function segment(_this_, pos) {
    var i = binarySearch_0(_this_._directory, pos + 1 | 0, 0, _this_._segments.length);
    return i >= 0 ? i : ~i;
  }
  function binarySearch_0(_this_, value, fromIndex, toIndex) {
    var left = fromIndex;
    var right = toIndex - 1 | 0;
    while (left <= right) {
      var mid = (left + right | 0) >>> 1;
      var midVal = _this_[mid];
      if (midVal < value)
        left = mid + 1 | 0;
      else if (midVal > value)
        right = mid - 1 | 0;
      else
        return mid;
    }
    return (-left | 0) - 1 | 0;
  }
  function commonAsUtf8ToByteArray(_this_) {
    var bytes = new Int8Array(imul(4, _this_.length));
    var inductionVariable = 0;
    var last_0 = _this_.length;
    if (inductionVariable < last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b0 = charSequenceGet(_this_, index);
        if (b0.compareTo_wi8o78_k$(new Char(128)) >= 0) {
          var size = index;
          {
            var tmp0_processUtf8Bytes_0 = _this_.length;
            var index_1 = index;
            while (index_1 < tmp0_processUtf8Bytes_0) {
              var c_2 = charSequenceGet(_this_, index_1);
              if (c_2.compareTo_wi8o78_k$(new Char(128)) < 0) {
                {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = c_2.toInt_0_k$();
                    break $l$block;
                  }
                  var tmp1__anonymous__11 = toByte(tmp$ret$0);
                  var tmp0_12 = size;
                  size = tmp0_12 + 1 | 0;
                  bytes[tmp0_12] = tmp1__anonymous__11;
                }
                var tmp0_3 = index_1;
                index_1 = tmp0_3 + 1 | 0;
                Unit_getInstance();
                while (index_1 < tmp0_processUtf8Bytes_0 ? charSequenceGet(_this_, index_1).compareTo_wi8o78_k$(new Char(128)) < 0 : false) {
                  {
                    var tmp$ret$1;
                    $l$block_0: {
                      var tmp1_5 = index_1;
                      index_1 = tmp1_5 + 1 | 0;
                      var tmp0__get_code__0_4 = charSequenceGet(_this_, tmp1_5);
                      tmp$ret$1 = tmp0__get_code__0_4.toInt_0_k$();
                      break $l$block_0;
                    }
                    var tmp2__anonymous__11 = toByte(tmp$ret$1);
                    var tmp0_12_0 = size;
                    size = tmp0_12_0 + 1 | 0;
                    bytes[tmp0_12_0] = tmp2__anonymous__11;
                  }
                }
              } else if (c_2.compareTo_wi8o78_k$(new Char(2048)) < 0) {
                {
                  var tmp$ret$2;
                  $l$block_1: {
                    tmp$ret$2 = c_2.toInt_0_k$();
                    break $l$block_1;
                  }
                  var tmp3__anonymous__11 = toByte(tmp$ret$2 >> 6 | 192);
                  var tmp0_12_1 = size;
                  size = tmp0_12_1 + 1 | 0;
                  bytes[tmp0_12_1] = tmp3__anonymous__11;
                }
                {
                  var tmp$ret$3;
                  $l$block_2: {
                    tmp$ret$3 = c_2.toInt_0_k$();
                    break $l$block_2;
                  }
                  var tmp4__anonymous__11 = toByte(tmp$ret$3 & 63 | 128);
                  var tmp0_12_2 = size;
                  size = tmp0_12_2 + 1 | 0;
                  bytes[tmp0_12_2] = tmp4__anonymous__11;
                }
                var tmp2_6 = index_1;
                index_1 = tmp2_6 + 1 | 0;
                Unit_getInstance();
              } else if (!(new Char(55296) <= c_2 ? c_2 <= new Char(57343) : false)) {
                {
                  var tmp$ret$4;
                  $l$block_3: {
                    tmp$ret$4 = c_2.toInt_0_k$();
                    break $l$block_3;
                  }
                  var tmp5__anonymous__11 = toByte(tmp$ret$4 >> 12 | 224);
                  var tmp0_12_3 = size;
                  size = tmp0_12_3 + 1 | 0;
                  bytes[tmp0_12_3] = tmp5__anonymous__11;
                }
                {
                  var tmp$ret$5;
                  $l$block_4: {
                    tmp$ret$5 = c_2.toInt_0_k$();
                    break $l$block_4;
                  }
                  var tmp6__anonymous__11 = toByte(tmp$ret$5 >> 6 & 63 | 128);
                  var tmp0_12_4 = size;
                  size = tmp0_12_4 + 1 | 0;
                  bytes[tmp0_12_4] = tmp6__anonymous__11;
                }
                {
                  var tmp$ret$6;
                  $l$block_5: {
                    tmp$ret$6 = c_2.toInt_0_k$();
                    break $l$block_5;
                  }
                  var tmp7__anonymous__11 = toByte(tmp$ret$6 & 63 | 128);
                  var tmp0_12_5 = size;
                  size = tmp0_12_5 + 1 | 0;
                  bytes[tmp0_12_5] = tmp7__anonymous__11;
                }
                var tmp3_7 = index_1;
                index_1 = tmp3_7 + 1 | 0;
                Unit_getInstance();
              } else {
                var tmp;
                if (c_2.compareTo_wi8o78_k$(new Char(56319)) > 0 ? true : tmp0_processUtf8Bytes_0 <= (index_1 + 1 | 0)) {
                  tmp = true;
                } else {
                  var containsArg = charSequenceGet(_this_, index_1 + 1 | 0);
                  tmp = !(new Char(56320) <= containsArg ? containsArg <= new Char(57343) : false);
                }
                if (tmp) {
                  {
                    var tmp8__anonymous__11 = 63;
                    var tmp0_12_6 = size;
                    size = tmp0_12_6 + 1 | 0;
                    bytes[tmp0_12_6] = tmp8__anonymous__11;
                  }
                  var tmp4_8 = index_1;
                  index_1 = tmp4_8 + 1 | 0;
                  Unit_getInstance();
                } else {
                  {
                    var tmp$ret$7;
                    $l$block_6: {
                      tmp$ret$7 = c_2.toInt_0_k$();
                      break $l$block_6;
                    }
                    var tmp_0 = tmp$ret$7 << 10;
                    var tmp$ret$8;
                    $l$block_7: {
                      var tmp1__get_code__0_10 = charSequenceGet(_this_, index_1 + 1 | 0);
                      tmp$ret$8 = tmp1__get_code__0_10.toInt_0_k$();
                      break $l$block_7;
                    }
                    var codePoint_9 = (tmp_0 + tmp$ret$8 | 0) + -56613888 | 0;
                    {
                      var tmp9__anonymous__11 = toByte(codePoint_9 >> 18 | 240);
                      var tmp0_12_7 = size;
                      size = tmp0_12_7 + 1 | 0;
                      bytes[tmp0_12_7] = tmp9__anonymous__11;
                    }
                    {
                      var tmp10__anonymous__11 = toByte(codePoint_9 >> 12 & 63 | 128);
                      var tmp0_12_8 = size;
                      size = tmp0_12_8 + 1 | 0;
                      bytes[tmp0_12_8] = tmp10__anonymous__11;
                    }
                    {
                      var tmp11__anonymous__11 = toByte(codePoint_9 >> 6 & 63 | 128);
                      var tmp0_12_9 = size;
                      size = tmp0_12_9 + 1 | 0;
                      bytes[tmp0_12_9] = tmp11__anonymous__11;
                    }
                    {
                      var tmp12__anonymous__11 = toByte(codePoint_9 & 63 | 128);
                      var tmp0_12_10 = size;
                      size = tmp0_12_10 + 1 | 0;
                      bytes[tmp0_12_10] = tmp12__anonymous__11;
                    }
                    index_1 = index_1 + 2 | 0;
                  }
                }
              }
            }
          }
          return copyOf(bytes, size);
        }var tmp$ret$9;
        $l$block_8: {
          tmp$ret$9 = b0.toInt_0_k$();
          break $l$block_8;
        }
        bytes[index] = toByte(tmp$ret$9);
      }
       while (inductionVariable < last_0);
    return copyOf(bytes, _this_.length);
  }
  function commonToUtf8String(_this_, beginIndex, endIndex) {
    if ((beginIndex < 0 ? true : endIndex > _this_.length) ? true : beginIndex > endIndex) {
      throw new ArrayIndexOutOfBoundsException('' + 'size=' + _this_.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    {
      var index_1 = beginIndex;
      while (index_1 < endIndex) {
        var b0_2 = _this_[index_1];
        if (b0_2 >= 0) {
          {
            var tmp0__anonymous__39 = numberToChar(b0_2);
            var tmp0_40 = length;
            length = tmp0_40 + 1 | 0;
            chars[tmp0_40] = tmp0__anonymous__39;
          }
          var tmp0_3 = index_1;
          index_1 = tmp0_3 + 1 | 0;
          Unit_getInstance();
          while (index_1 < endIndex ? _this_[index_1] >= 0 : false) {
            {
              var tmp1_4 = index_1;
              index_1 = tmp1_4 + 1 | 0;
              var tmp1__anonymous__39 = numberToChar(_this_[tmp1_4]);
              var tmp0_40_0 = length;
              length = tmp0_40_0 + 1 | 0;
              chars[tmp0_40_0] = tmp1__anonymous__39;
            }
          }
        } else {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = b0_2 >> 5;
            break $l$block;
          }
          if (tmp$ret$0 === -2) {
            var tmp = index_1;
            var tmp$ret$1;
            $l$block_4: {
              var tmp0_process2Utf8Bytes_0_5 = index_1;
              if (endIndex <= (tmp0_process2Utf8Bytes_0_5 + 1 | 0)) {
                {
                  var tmp1__anonymous__4_6 = 65533;
                  {
                    var tmp2__anonymous__39 = numberToChar(tmp1__anonymous__4_6);
                    var tmp0_40_1 = length;
                    length = tmp0_40_1 + 1 | 0;
                    chars[tmp0_40_1] = tmp2__anonymous__39;
                  }
                }
                tmp$ret$1 = 1;
                break $l$block_4;
              }var b0_1_7 = _this_[tmp0_process2Utf8Bytes_0_5];
              var b1_2_8 = _this_[tmp0_process2Utf8Bytes_0_5 + 1 | 0];
              var tmp$ret$3;
              $l$block_2: {
                var tmp$ret$2;
                $l$block_1: {
                  tmp$ret$2 = b1_2_8 & 192;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2 === 128;
                break $l$block_2;
              }
              if (!tmp$ret$3) {
                {
                  var tmp2__anonymous__4_9 = 65533;
                  {
                    var tmp3__anonymous__39 = numberToChar(tmp2__anonymous__4_9);
                    var tmp0_40_2 = length;
                    length = tmp0_40_2 + 1 | 0;
                    chars[tmp0_40_2] = tmp3__anonymous__39;
                  }
                }
                tmp$ret$1 = 1;
                break $l$block_4;
              } else {
              }
              var codePoint_3_10 = 3968 ^ b1_2_8 ^ b0_1_7 << 6;
              if (codePoint_3_10 < 128) {
                {
                  var tmp3__anonymous__4_11 = 65533;
                  {
                    var tmp4__anonymous__39 = numberToChar(tmp3__anonymous__4_11);
                    var tmp0_40_3 = length;
                    length = tmp0_40_3 + 1 | 0;
                    chars[tmp0_40_3] = tmp4__anonymous__39;
                  }
                }
              } else {
                {
                  {
                    var tmp5__anonymous__39 = numberToChar(codePoint_3_10);
                    var tmp0_40_4 = length;
                    length = tmp0_40_4 + 1 | 0;
                    chars[tmp0_40_4] = tmp5__anonymous__39;
                  }
                }
              }
              tmp$ret$1 = 2;
              break $l$block_4;
            }
            index_1 = tmp + tmp$ret$1 | 0;
          } else {
            var tmp$ret$4;
            $l$block_5: {
              tmp$ret$4 = b0_2 >> 4;
              break $l$block_5;
            }
            if (tmp$ret$4 === -2) {
              var tmp_0 = index_1;
              var tmp$ret$7;
              $l$block_16: {
                var tmp4_process3Utf8Bytes_0_12 = index_1;
                if (endIndex <= (tmp4_process3Utf8Bytes_0_12 + 2 | 0)) {
                  {
                    var tmp5__anonymous__6_13 = 65533;
                    {
                      var tmp6__anonymous__39 = numberToChar(tmp5__anonymous__6_13);
                      var tmp0_40_5 = length;
                      length = tmp0_40_5 + 1 | 0;
                      chars[tmp0_40_5] = tmp6__anonymous__39;
                    }
                  }
                  var tmp_1;
                  if (endIndex <= (tmp4_process3Utf8Bytes_0_12 + 1 | 0)) {
                    tmp_1 = true;
                  } else {
                    var tmp$ret$6;
                    $l$block_7: {
                      var tmp0_isUtf8Continuation_0_1_14 = _this_[tmp4_process3Utf8Bytes_0_12 + 1 | 0];
                      var tmp$ret$5;
                      $l$block_6: {
                        tmp$ret$5 = tmp0_isUtf8Continuation_0_1_14 & 192;
                        break $l$block_6;
                      }
                      tmp$ret$6 = tmp$ret$5 === 128;
                      break $l$block_7;
                    }
                    tmp_1 = !tmp$ret$6;
                  }
                  if (tmp_1) {
                    tmp$ret$7 = 1;
                    break $l$block_16;
                  } else {
                    {
                      tmp$ret$7 = 2;
                      break $l$block_16;
                    }
                  }
                }var b0_2_15 = _this_[tmp4_process3Utf8Bytes_0_12];
                var b1_3_16 = _this_[tmp4_process3Utf8Bytes_0_12 + 1 | 0];
                var tmp$ret$9;
                $l$block_11: {
                  var tmp$ret$8;
                  $l$block_10: {
                    tmp$ret$8 = b1_3_16 & 192;
                    break $l$block_10;
                  }
                  tmp$ret$9 = tmp$ret$8 === 128;
                  break $l$block_11;
                }
                if (!tmp$ret$9) {
                  {
                    var tmp6__anonymous__6_17 = 65533;
                    {
                      var tmp7__anonymous__39 = numberToChar(tmp6__anonymous__6_17);
                      var tmp0_40_6 = length;
                      length = tmp0_40_6 + 1 | 0;
                      chars[tmp0_40_6] = tmp7__anonymous__39;
                    }
                  }
                  tmp$ret$7 = 1;
                  break $l$block_16;
                } else {
                }
                var b2_4_18 = _this_[tmp4_process3Utf8Bytes_0_12 + 2 | 0];
                var tmp$ret$11;
                $l$block_14: {
                  var tmp$ret$10;
                  $l$block_13: {
                    tmp$ret$10 = b2_4_18 & 192;
                    break $l$block_13;
                  }
                  tmp$ret$11 = tmp$ret$10 === 128;
                  break $l$block_14;
                }
                if (!tmp$ret$11) {
                  {
                    var tmp7__anonymous__6_19 = 65533;
                    {
                      var tmp8__anonymous__39 = numberToChar(tmp7__anonymous__6_19);
                      var tmp0_40_7 = length;
                      length = tmp0_40_7 + 1 | 0;
                      chars[tmp0_40_7] = tmp8__anonymous__39;
                    }
                  }
                  tmp$ret$7 = 2;
                  break $l$block_16;
                } else {
                }
                var codePoint_5_20 = -123008 ^ b2_4_18 ^ b1_3_16 << 6 ^ b0_2_15 << 12;
                if (codePoint_5_20 < 2048) {
                  {
                    var tmp8__anonymous__6_21 = 65533;
                    {
                      var tmp9__anonymous__39 = numberToChar(tmp8__anonymous__6_21);
                      var tmp0_40_8 = length;
                      length = tmp0_40_8 + 1 | 0;
                      chars[tmp0_40_8] = tmp9__anonymous__39;
                    }
                  }
                } else if (55296 <= codePoint_5_20 ? codePoint_5_20 <= 57343 : false) {
                  {
                    var tmp9__anonymous__6_22 = 65533;
                    {
                      var tmp10__anonymous__39 = numberToChar(tmp9__anonymous__6_22);
                      var tmp0_40_9 = length;
                      length = tmp0_40_9 + 1 | 0;
                      chars[tmp0_40_9] = tmp10__anonymous__39;
                    }
                  }
                } else {
                  {
                    {
                      var tmp11__anonymous__39 = numberToChar(codePoint_5_20);
                      var tmp0_40_10 = length;
                      length = tmp0_40_10 + 1 | 0;
                      chars[tmp0_40_10] = tmp11__anonymous__39;
                    }
                  }
                }
                tmp$ret$7 = 3;
                break $l$block_16;
              }
              index_1 = tmp_0 + tmp$ret$7 | 0;
            } else {
              var tmp$ret$12;
              $l$block_17: {
                tmp$ret$12 = b0_2 >> 3;
                break $l$block_17;
              }
              if (tmp$ret$12 === -2) {
                var tmp_2 = index_1;
                var tmp$ret$15;
                $l$block_34: {
                  var tmp10_process4Utf8Bytes_0_23 = index_1;
                  if (endIndex <= (tmp10_process4Utf8Bytes_0_23 + 3 | 0)) {
                    {
                      var tmp11__anonymous__8_24 = 65533;
                      if (!(tmp11__anonymous__8_24 === 65533)) {
                        {
                          var tmp12__anonymous__39 = numberToChar((tmp11__anonymous__8_24 >>> 10) + 55232 | 0);
                          var tmp0_40_11 = length;
                          length = tmp0_40_11 + 1 | 0;
                          chars[tmp0_40_11] = tmp12__anonymous__39;
                        }
                        {
                          var tmp13__anonymous__39 = numberToChar((tmp11__anonymous__8_24 & 1023) + 56320 | 0);
                          var tmp0_40_12 = length;
                          length = tmp0_40_12 + 1 | 0;
                          chars[tmp0_40_12] = tmp13__anonymous__39;
                        }
                      } else {
                        {
                          var tmp14__anonymous__39 = new Char(65533);
                          var tmp0_40_13 = length;
                          length = tmp0_40_13 + 1 | 0;
                          chars[tmp0_40_13] = tmp14__anonymous__39;
                        }
                      }
                    }
                    var tmp_3;
                    if (endIndex <= (tmp10_process4Utf8Bytes_0_23 + 1 | 0)) {
                      tmp_3 = true;
                    } else {
                      var tmp$ret$14;
                      $l$block_19: {
                        var tmp0_isUtf8Continuation_0_1_25 = _this_[tmp10_process4Utf8Bytes_0_23 + 1 | 0];
                        var tmp$ret$13;
                        $l$block_18: {
                          tmp$ret$13 = tmp0_isUtf8Continuation_0_1_25 & 192;
                          break $l$block_18;
                        }
                        tmp$ret$14 = tmp$ret$13 === 128;
                        break $l$block_19;
                      }
                      tmp_3 = !tmp$ret$14;
                    }
                    if (tmp_3) {
                      tmp$ret$15 = 1;
                      break $l$block_34;
                    } else {
                      var tmp_4;
                      if (endIndex <= (tmp10_process4Utf8Bytes_0_23 + 2 | 0)) {
                        tmp_4 = true;
                      } else {
                        var tmp$ret$17;
                        $l$block_22: {
                          var tmp1_isUtf8Continuation_0_2_26 = _this_[tmp10_process4Utf8Bytes_0_23 + 2 | 0];
                          var tmp$ret$16;
                          $l$block_21: {
                            tmp$ret$16 = tmp1_isUtf8Continuation_0_2_26 & 192;
                            break $l$block_21;
                          }
                          tmp$ret$17 = tmp$ret$16 === 128;
                          break $l$block_22;
                        }
                        tmp_4 = !tmp$ret$17;
                      }
                      if (tmp_4) {
                        tmp$ret$15 = 2;
                        break $l$block_34;
                      } else {
                        {
                          tmp$ret$15 = 3;
                          break $l$block_34;
                        }
                      }
                    }
                  }var b0_3_27 = _this_[tmp10_process4Utf8Bytes_0_23];
                  var b1_4_28 = _this_[tmp10_process4Utf8Bytes_0_23 + 1 | 0];
                  var tmp$ret$19;
                  $l$block_26: {
                    var tmp$ret$18;
                    $l$block_25: {
                      tmp$ret$18 = b1_4_28 & 192;
                      break $l$block_25;
                    }
                    tmp$ret$19 = tmp$ret$18 === 128;
                    break $l$block_26;
                  }
                  if (!tmp$ret$19) {
                    {
                      var tmp12__anonymous__8_29 = 65533;
                      if (!(tmp12__anonymous__8_29 === 65533)) {
                        {
                          var tmp15__anonymous__39 = numberToChar((tmp12__anonymous__8_29 >>> 10) + 55232 | 0);
                          var tmp0_40_14 = length;
                          length = tmp0_40_14 + 1 | 0;
                          chars[tmp0_40_14] = tmp15__anonymous__39;
                        }
                        {
                          var tmp16__anonymous__39 = numberToChar((tmp12__anonymous__8_29 & 1023) + 56320 | 0);
                          var tmp0_40_15 = length;
                          length = tmp0_40_15 + 1 | 0;
                          chars[tmp0_40_15] = tmp16__anonymous__39;
                        }
                      } else {
                        {
                          var tmp17__anonymous__39 = new Char(65533);
                          var tmp0_40_16 = length;
                          length = tmp0_40_16 + 1 | 0;
                          chars[tmp0_40_16] = tmp17__anonymous__39;
                        }
                      }
                    }
                    tmp$ret$15 = 1;
                    break $l$block_34;
                  } else {
                  }
                  var b2_5_30 = _this_[tmp10_process4Utf8Bytes_0_23 + 2 | 0];
                  var tmp$ret$21;
                  $l$block_29: {
                    var tmp$ret$20;
                    $l$block_28: {
                      tmp$ret$20 = b2_5_30 & 192;
                      break $l$block_28;
                    }
                    tmp$ret$21 = tmp$ret$20 === 128;
                    break $l$block_29;
                  }
                  if (!tmp$ret$21) {
                    {
                      var tmp13__anonymous__8_31 = 65533;
                      if (!(tmp13__anonymous__8_31 === 65533)) {
                        {
                          var tmp18__anonymous__39 = numberToChar((tmp13__anonymous__8_31 >>> 10) + 55232 | 0);
                          var tmp0_40_17 = length;
                          length = tmp0_40_17 + 1 | 0;
                          chars[tmp0_40_17] = tmp18__anonymous__39;
                        }
                        {
                          var tmp19__anonymous__39 = numberToChar((tmp13__anonymous__8_31 & 1023) + 56320 | 0);
                          var tmp0_40_18 = length;
                          length = tmp0_40_18 + 1 | 0;
                          chars[tmp0_40_18] = tmp19__anonymous__39;
                        }
                      } else {
                        {
                          var tmp20__anonymous__39 = new Char(65533);
                          var tmp0_40_19 = length;
                          length = tmp0_40_19 + 1 | 0;
                          chars[tmp0_40_19] = tmp20__anonymous__39;
                        }
                      }
                    }
                    tmp$ret$15 = 2;
                    break $l$block_34;
                  } else {
                  }
                  var b3_6_32 = _this_[tmp10_process4Utf8Bytes_0_23 + 3 | 0];
                  var tmp$ret$23;
                  $l$block_32: {
                    var tmp$ret$22;
                    $l$block_31: {
                      tmp$ret$22 = b3_6_32 & 192;
                      break $l$block_31;
                    }
                    tmp$ret$23 = tmp$ret$22 === 128;
                    break $l$block_32;
                  }
                  if (!tmp$ret$23) {
                    {
                      var tmp14__anonymous__8_33 = 65533;
                      if (!(tmp14__anonymous__8_33 === 65533)) {
                        {
                          var tmp21__anonymous__39 = numberToChar((tmp14__anonymous__8_33 >>> 10) + 55232 | 0);
                          var tmp0_40_20 = length;
                          length = tmp0_40_20 + 1 | 0;
                          chars[tmp0_40_20] = tmp21__anonymous__39;
                        }
                        {
                          var tmp22__anonymous__39 = numberToChar((tmp14__anonymous__8_33 & 1023) + 56320 | 0);
                          var tmp0_40_21 = length;
                          length = tmp0_40_21 + 1 | 0;
                          chars[tmp0_40_21] = tmp22__anonymous__39;
                        }
                      } else {
                        {
                          var tmp23__anonymous__39 = new Char(65533);
                          var tmp0_40_22 = length;
                          length = tmp0_40_22 + 1 | 0;
                          chars[tmp0_40_22] = tmp23__anonymous__39;
                        }
                      }
                    }
                    tmp$ret$15 = 3;
                    break $l$block_34;
                  } else {
                  }
                  var codePoint_7_34 = 3678080 ^ b3_6_32 ^ b2_5_30 << 6 ^ b1_4_28 << 12 ^ b0_3_27 << 18;
                  if (codePoint_7_34 > 1114111) {
                    {
                      var tmp15__anonymous__8_35 = 65533;
                      if (!(tmp15__anonymous__8_35 === 65533)) {
                        {
                          var tmp24__anonymous__39 = numberToChar((tmp15__anonymous__8_35 >>> 10) + 55232 | 0);
                          var tmp0_40_23 = length;
                          length = tmp0_40_23 + 1 | 0;
                          chars[tmp0_40_23] = tmp24__anonymous__39;
                        }
                        {
                          var tmp25__anonymous__39 = numberToChar((tmp15__anonymous__8_35 & 1023) + 56320 | 0);
                          var tmp0_40_24 = length;
                          length = tmp0_40_24 + 1 | 0;
                          chars[tmp0_40_24] = tmp25__anonymous__39;
                        }
                      } else {
                        {
                          var tmp26__anonymous__39 = new Char(65533);
                          var tmp0_40_25 = length;
                          length = tmp0_40_25 + 1 | 0;
                          chars[tmp0_40_25] = tmp26__anonymous__39;
                        }
                      }
                    }
                  } else if (55296 <= codePoint_7_34 ? codePoint_7_34 <= 57343 : false) {
                    {
                      var tmp16__anonymous__8_36 = 65533;
                      if (!(tmp16__anonymous__8_36 === 65533)) {
                        {
                          var tmp27__anonymous__39 = numberToChar((tmp16__anonymous__8_36 >>> 10) + 55232 | 0);
                          var tmp0_40_26 = length;
                          length = tmp0_40_26 + 1 | 0;
                          chars[tmp0_40_26] = tmp27__anonymous__39;
                        }
                        {
                          var tmp28__anonymous__39 = numberToChar((tmp16__anonymous__8_36 & 1023) + 56320 | 0);
                          var tmp0_40_27 = length;
                          length = tmp0_40_27 + 1 | 0;
                          chars[tmp0_40_27] = tmp28__anonymous__39;
                        }
                      } else {
                        {
                          var tmp29__anonymous__39 = new Char(65533);
                          var tmp0_40_28 = length;
                          length = tmp0_40_28 + 1 | 0;
                          chars[tmp0_40_28] = tmp29__anonymous__39;
                        }
                      }
                    }
                  } else if (codePoint_7_34 < 65536) {
                    {
                      var tmp17__anonymous__8_37 = 65533;
                      if (!(tmp17__anonymous__8_37 === 65533)) {
                        {
                          var tmp30__anonymous__39 = numberToChar((tmp17__anonymous__8_37 >>> 10) + 55232 | 0);
                          var tmp0_40_29 = length;
                          length = tmp0_40_29 + 1 | 0;
                          chars[tmp0_40_29] = tmp30__anonymous__39;
                        }
                        {
                          var tmp31__anonymous__39 = numberToChar((tmp17__anonymous__8_37 & 1023) + 56320 | 0);
                          var tmp0_40_30 = length;
                          length = tmp0_40_30 + 1 | 0;
                          chars[tmp0_40_30] = tmp31__anonymous__39;
                        }
                      } else {
                        {
                          var tmp32__anonymous__39 = new Char(65533);
                          var tmp0_40_31 = length;
                          length = tmp0_40_31 + 1 | 0;
                          chars[tmp0_40_31] = tmp32__anonymous__39;
                        }
                      }
                    }
                  } else {
                    {
                      if (!(codePoint_7_34 === 65533)) {
                        {
                          var tmp33__anonymous__39 = numberToChar((codePoint_7_34 >>> 10) + 55232 | 0);
                          var tmp0_40_32 = length;
                          length = tmp0_40_32 + 1 | 0;
                          chars[tmp0_40_32] = tmp33__anonymous__39;
                        }
                        {
                          var tmp34__anonymous__39 = numberToChar((codePoint_7_34 & 1023) + 56320 | 0);
                          var tmp0_40_33 = length;
                          length = tmp0_40_33 + 1 | 0;
                          chars[tmp0_40_33] = tmp34__anonymous__39;
                        }
                      } else {
                        {
                          var tmp35__anonymous__39 = new Char(65533);
                          var tmp0_40_34 = length;
                          length = tmp0_40_34 + 1 | 0;
                          chars[tmp0_40_34] = tmp35__anonymous__39;
                        }
                      }
                    }
                  }
                  tmp$ret$15 = 4;
                  break $l$block_34;
                }
                index_1 = tmp_2 + tmp$ret$15 | 0;
              } else {
                {
                  {
                    var tmp36__anonymous__39 = new Char(65533);
                    var tmp0_40_35 = length;
                    length = tmp0_40_35 + 1 | 0;
                    chars[tmp0_40_35] = tmp36__anonymous__39;
                  }
                  var tmp2_38 = index_1;
                  index_1 = tmp2_38 + 1 | 0;
                  Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
    return concatToString_0(chars, 0, length);
  }
  function commonToUtf8String$default(_this_, beginIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      beginIndex = 0;
    if (!(($mask0 & 2) === 0))
      endIndex = _this_.length;
    return commonToUtf8String(_this_, beginIndex, endIndex);
  }
  function asUtf8ToByteArray(_this_) {
    return commonAsUtf8ToByteArray(_this_);
  }
  function ArrayIndexOutOfBoundsException(message) {
    IndexOutOfBoundsException_init_$Init$(message, this);
    captureStack(this, ArrayIndexOutOfBoundsException);
  }
  ArrayIndexOutOfBoundsException.$metadata$ = {
    simpleName: 'ArrayIndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function Closeable() {
  }
  Closeable.$metadata$ = {
    simpleName: 'Closeable',
    kind: 'interface',
    interfaces: []
  };
  function toUtf8String(_this_) {
    return commonToUtf8String$default(_this_, 0, 0, 3, null);
  }
  function UnsafeCursor() {
    this._buffer_0 = null;
    this._readWrite = false;
    this._segment = null;
    this._offset_0 = new Long(-1, -1);
    this._data_0 = null;
    this._start = -1;
    this._end = -1;
  }
  UnsafeCursor.$metadata$ = {
    simpleName: 'UnsafeCursor',
    kind: 'class',
    interfaces: []
  };
  function Buffer() {
    this._head_0 = null;
    this._size_0 = new Long(0, 0);
  }
  Buffer.prototype.write_ugqkca_k$ = function (byteString) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_commonWrite_0 = byteString._get_size__0_k$();
      byteString.write_lbxf8c_k$(this, 0, tmp0_commonWrite_0);
      tmp$ret$0 = this;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.writableSegment_ha5a7z_k$ = function (minimumCapacity) {
    var tmp$ret$1;
    $l$block_1: {
      {
        var tmp;
        if (minimumCapacity >= 1) {
          Companion_getInstance_18();
          tmp = minimumCapacity <= 8192;
        } else {
          tmp = false;
        }
        var tmp0_require_0_1 = tmp;
        {
        }
        if (!tmp0_require_0_1) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'unexpected capacity';
            break $l$block;
          }
          var message_1_2 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_1(message_1_2));
        }}
      if (this._head_0 == null) {
        var result_3 = SegmentPool_getInstance().take_0_k$();
        this._head_0 = result_3;
        result_3._prev_0 = result_3;
        result_3._next_4 = result_3;
        tmp$ret$1 = result_3;
        break $l$block_1;
      }var tail_4 = ensureNotNull(this._head_0)._prev_0;
      var tmp_0;
      var tmp_1 = ensureNotNull(tail_4)._limit_0 + minimumCapacity | 0;
      Companion_getInstance_18();
      if (tmp_1 > 8192) {
        tmp_0 = true;
      } else {
        {
          tmp_0 = !tail_4._owner;
        }
      }
      if (tmp_0) {
        tail_4 = tail_4.push_5dd05i_k$(SegmentPool_getInstance().take_0_k$());
      } else {
      }
      tmp$ret$1 = tail_4;
      break $l$block_1;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.write_irqg4d_k$ = function (source, offset, byteCount) {
    var tmp$ret$6;
    $l$block_5: {
      var offset_1 = offset;
      checkOffsetAndCount(toLong_0(source.length), toLong_0(offset_1), toLong_0(byteCount));
      var limit_2 = offset_1 + byteCount | 0;
      while (offset_1 < limit_2) {
        var tail_3 = this.writableSegment_ha5a7z_k$(1);
        var tmp$ret$0;
        $l$block: {
          var tmp0_minOf_0_5 = limit_2 - offset_1 | 0;
          Companion_getInstance_18();
          var tmp1_minOf_0_6 = 8192 - tail_3._limit_0 | 0;
          tmp$ret$0 = Math.min(tmp0_minOf_0_5, tmp1_minOf_0_6);
          break $l$block;
        }
        var toCopy_4 = tmp$ret$0;
        var tmp$ret$5;
        $l$block_4: {
          var tmp2_copyInto_0_7 = tail_3._data;
          var tmp3_copyInto_0_8 = tail_3._limit_0;
          var tmp4_copyInto_0_9 = offset_1;
          var tmp5_copyInto_0_10 = offset_1 + toCopy_4 | 0;
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = source;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          var tmp = tmp$ret$2;
          var tmp$ret$4;
          $l$block_3: {
            var tmp$ret$3;
            $l$block_2: {
              tmp$ret$3 = tmp2_copyInto_0_7;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          arrayCopy_0(tmp, tmp$ret$4, tmp3_copyInto_0_8, tmp4_copyInto_0_9, tmp5_copyInto_0_10);
          tmp$ret$5 = tmp2_copyInto_0_7;
          break $l$block_4;
        }
        Unit_getInstance();
        offset_1 = offset_1 + toCopy_4 | 0;
        var tmp0_this_11 = tail_3;
        tmp0_this_11._limit_0 = tmp0_this_11._limit_0 + toCopy_4 | 0;
      }
      var tmp1_this_12 = this;
      tmp1_this_12._size_0 = tmp1_this_12._size_0.plus_wiekkq_k$(toLong_0(byteCount));
      tmp$ret$6 = this;
      break $l$block_5;
    }
    return tmp$ret$6;
  };
  Buffer.prototype.writeByte_ha5a7z_k$ = function (b) {
    var tmp$ret$0;
    $l$block: {
      var tail_1 = this.writableSegment_ha5a7z_k$(1);
      var tmp0_this_2 = tail_1;
      var tmp1_3 = tmp0_this_2._limit_0;
      tmp0_this_2._limit_0 = tmp1_3 + 1 | 0;
      tail_1._data[tmp1_3] = toByte(b);
      var tmp2_this_4 = this;
      tmp2_this_4._size_0 = tmp2_this_4._size_0.plus_wiekkq_k$(new Long(1, 0));
      tmp$ret$0 = this;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.writeShort_ha5a7z_k$ = function (s) {
    var tmp$ret$0;
    $l$block: {
      var tail_1 = this.writableSegment_ha5a7z_k$(2);
      var data_2 = tail_1._data;
      var limit_3 = tail_1._limit_0;
      var tmp0_4 = limit_3;
      limit_3 = tmp0_4 + 1 | 0;
      data_2[tmp0_4] = toByte(s >>> 8 & 255);
      var tmp1_5 = limit_3;
      limit_3 = tmp1_5 + 1 | 0;
      data_2[tmp1_5] = toByte(s & 255);
      tail_1._limit_0 = limit_3;
      var tmp2_this_6 = this;
      tmp2_this_6._size_0 = tmp2_this_6._size_0.plus_wiekkq_k$(new Long(2, 0));
      tmp$ret$0 = this;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.writeInt_ha5a7z_k$ = function (i) {
    var tmp$ret$0;
    $l$block: {
      var tail_1 = this.writableSegment_ha5a7z_k$(4);
      var data_2 = tail_1._data;
      var limit_3 = tail_1._limit_0;
      var tmp0_4 = limit_3;
      limit_3 = tmp0_4 + 1 | 0;
      data_2[tmp0_4] = toByte(i >>> 24 & 255);
      var tmp1_5 = limit_3;
      limit_3 = tmp1_5 + 1 | 0;
      data_2[tmp1_5] = toByte(i >>> 16 & 255);
      var tmp2_6 = limit_3;
      limit_3 = tmp2_6 + 1 | 0;
      data_2[tmp2_6] = toByte(i >>> 8 & 255);
      var tmp3_7 = limit_3;
      limit_3 = tmp3_7 + 1 | 0;
      data_2[tmp3_7] = toByte(i & 255);
      tail_1._limit_0 = limit_3;
      var tmp4_this_8 = this;
      tmp4_this_8._size_0 = tmp4_this_8._size_0.plus_wiekkq_k$(new Long(4, 0));
      tmp$ret$0 = this;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.writeLong_wiekkq_k$ = function (v) {
    var tmp$ret$0;
    $l$block: {
      var tail_1 = this.writableSegment_ha5a7z_k$(8);
      var data_2 = tail_1._data;
      var limit_3 = tail_1._limit_0;
      var tmp0_4 = limit_3;
      limit_3 = tmp0_4 + 1 | 0;
      data_2[tmp0_4] = v.ushr_ha5a7z_k$(56).and_wiekkq_k$(new Long(255, 0)).toByte_0_k$();
      var tmp1_5 = limit_3;
      limit_3 = tmp1_5 + 1 | 0;
      data_2[tmp1_5] = v.ushr_ha5a7z_k$(48).and_wiekkq_k$(new Long(255, 0)).toByte_0_k$();
      var tmp2_6 = limit_3;
      limit_3 = tmp2_6 + 1 | 0;
      data_2[tmp2_6] = v.ushr_ha5a7z_k$(40).and_wiekkq_k$(new Long(255, 0)).toByte_0_k$();
      var tmp3_7 = limit_3;
      limit_3 = tmp3_7 + 1 | 0;
      data_2[tmp3_7] = v.ushr_ha5a7z_k$(32).and_wiekkq_k$(new Long(255, 0)).toByte_0_k$();
      var tmp4_8 = limit_3;
      limit_3 = tmp4_8 + 1 | 0;
      data_2[tmp4_8] = v.ushr_ha5a7z_k$(24).and_wiekkq_k$(new Long(255, 0)).toByte_0_k$();
      var tmp5_9 = limit_3;
      limit_3 = tmp5_9 + 1 | 0;
      data_2[tmp5_9] = v.ushr_ha5a7z_k$(16).and_wiekkq_k$(new Long(255, 0)).toByte_0_k$();
      var tmp6_10 = limit_3;
      limit_3 = tmp6_10 + 1 | 0;
      data_2[tmp6_10] = v.ushr_ha5a7z_k$(8).and_wiekkq_k$(new Long(255, 0)).toByte_0_k$();
      var tmp7_11 = limit_3;
      limit_3 = tmp7_11 + 1 | 0;
      data_2[tmp7_11] = v.and_wiekkq_k$(new Long(255, 0)).toByte_0_k$();
      tail_1._limit_0 = limit_3;
      var tmp8_this_12 = this;
      tmp8_this_12._size_0 = tmp8_this_12._size_0.plus_wiekkq_k$(new Long(8, 0));
      tmp$ret$0 = this;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }if (!(other instanceof Buffer)) {
        tmp$ret$0 = false;
        break $l$block_5;
      } else {
      }
      if (!this._size_0.equals(other._size_0)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }if (this._size_0.equals(new Long(0, 0))) {
        tmp$ret$0 = true;
        break $l$block_5;
      }var sa_1 = ensureNotNull(this._head_0);
      var sb_2 = ensureNotNull(other._head_0);
      var posA_3 = sa_1._pos;
      var posB_4 = sb_2._pos;
      var pos_5 = new Long(0, 0);
      var count_6;
      while (pos_5.compareTo_wiekkq_k$(this._size_0) < 0) {
        var tmp$ret$1;
        $l$block_3: {
          var tmp0_minOf_0_7 = sa_1._limit_0 - posA_3 | 0;
          var tmp1_minOf_0_8 = sb_2._limit_0 - posB_4 | 0;
          tmp$ret$1 = Math.min(tmp0_minOf_0_7, tmp1_minOf_0_8);
          break $l$block_3;
        }
        count_6 = toLong_0(tmp$ret$1);
        var inductionVariable = new Long(0, 0);
        var step = new Long(1, 0);
        if (inductionVariable.compareTo_wiekkq_k$(count_6) < 0)
          do {
            var i_10 = inductionVariable;
            inductionVariable = inductionVariable.plus_wiekkq_k$(step);
            var tmp = sa_1._data;
            var tmp1_11 = posA_3;
            posA_3 = tmp1_11 + 1 | 0;
            var tmp_0 = tmp[tmp1_11];
            var tmp_1 = sb_2._data;
            var tmp2_12 = posB_4;
            posB_4 = tmp2_12 + 1 | 0;
            if (!(tmp_0 === tmp_1[tmp2_12])) {
              tmp$ret$0 = false;
              break $l$block_5;
            } else {
            }
          }
           while (inductionVariable.compareTo_wiekkq_k$(count_6) < 0);
        if (posA_3 === sa_1._limit_0) {
          sa_1 = ensureNotNull(sa_1._next_4);
          posA_3 = sa_1._pos;
        }if (posB_4 === sb_2._limit_0) {
          sb_2 = ensureNotNull(sb_2._next_4);
          posB_4 = sb_2._pos;
        }pos_5 = pos_5.plus_wiekkq_k$(count_6);
      }
      tmp$ret$0 = true;
      break $l$block_5;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block_0: {
      var tmp0_elvis_lhs_2 = this._head_0;
      var tmp;
      if (tmp0_elvis_lhs_2 == null) {
        tmp$ret$0 = 0;
        break $l$block_0;
      } else {
        tmp = tmp0_elvis_lhs_2;
      }
      var s_1 = tmp;
      var result_3 = 1;
      do {
        var pos_4 = s_1._pos;
        var limit_5 = s_1._limit_0;
        while (pos_4 < limit_5) {
          result_3 = imul(31, result_3) + s_1._data[pos_4] | 0;
          var tmp1_6 = pos_4;
          pos_4 = tmp1_6 + 1 | 0;
          Unit_getInstance();
        }
        s_1 = ensureNotNull(s_1._next_4);
      }
       while (!(s_1 === this._head_0));
      tmp$ret$0 = result_3;
      break $l$block_0;
    }
    return tmp$ret$0;
  };
  Buffer.prototype.toString = function () {
    return this.snapshot_0_k$().toString();
  };
  Buffer.prototype.snapshot_0_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      {
        var tmp0_check_0_1 = this._size_0.compareTo_wiekkq_k$(toLong_0(IntCompanionObject_getInstance()._MAX_VALUE)) <= 0;
        {
        }
        if (!tmp0_check_0_1) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = '' + 'size > Int.MAX_VALUE: ' + this._size_0;
            break $l$block;
          }
          var message_1_2 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_1(message_1_2));
        }}
      tmp$ret$1 = this.snapshot_ha5a7z_k$(this._size_0.toInt_0_k$());
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Buffer.prototype.snapshot_ha5a7z_k$ = function (byteCount) {
    var tmp$ret$0;
    $l$block_2: {
      if (byteCount === 0) {
        tmp$ret$0 = Companion_getInstance_19()._EMPTY_1;
        break $l$block_2;
      }checkOffsetAndCount(this._size_0, new Long(0, 0), toLong_0(byteCount));
      var offset_1 = 0;
      var segmentCount_2 = 0;
      var s_3 = this._head_0;
      while (offset_1 < byteCount) {
        if (ensureNotNull(s_3)._limit_0 === s_3._pos) {
          throw AssertionError_init_$Create$('s.limit == s.pos');
        }offset_1 = offset_1 + (s_3._limit_0 - s_3._pos | 0) | 0;
        var tmp0_4 = segmentCount_2;
        segmentCount_2 = tmp0_4 + 1 | 0;
        Unit_getInstance();
        s_3 = s_3._next_4;
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_arrayOfNulls_0_6 = segmentCount_2;
        tmp$ret$1 = fillArrayVal(Array(tmp0_arrayOfNulls_0_6), null);
        break $l$block_0;
      }
      var segments_5 = tmp$ret$1;
      var directory_7 = new Int32Array(imul(segmentCount_2, 2));
      offset_1 = 0;
      segmentCount_2 = 0;
      s_3 = this._head_0;
      while (offset_1 < byteCount) {
        segments_5[segmentCount_2] = ensureNotNull(s_3)._data;
        offset_1 = offset_1 + (s_3._limit_0 - s_3._pos | 0) | 0;
        var tmp = segmentCount_2;
        var tmp$ret$2;
        $l$block_1: {
          var tmp1_minOf_0_8 = offset_1;
          tmp$ret$2 = Math.min(tmp1_minOf_0_8, byteCount);
          break $l$block_1;
        }
        directory_7[tmp] = tmp$ret$2;
        directory_7[segmentCount_2 + segments_5.length | 0] = s_3._pos;
        s_3._shared = true;
        var tmp1_9 = segmentCount_2;
        segmentCount_2 = tmp1_9 + 1 | 0;
        Unit_getInstance();
        s_3 = s_3._next_4;
      }
      tmp$ret$0 = new SegmentedByteString(isArray(segments_5) ? segments_5 : THROW_CCE(), directory_7);
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  Buffer.$metadata$ = {
    simpleName: 'Buffer',
    kind: 'class',
    interfaces: [BufferedSource, BufferedSink]
  };
  function BufferedSink() {
  }
  BufferedSink.$metadata$ = {
    simpleName: 'BufferedSink',
    kind: 'interface',
    interfaces: [Sink]
  };
  function BufferedSource() {
  }
  BufferedSource.$metadata$ = {
    simpleName: 'BufferedSource',
    kind: 'interface',
    interfaces: [Source_0]
  };
  function Companion_20() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Int8Array([]);
      break $l$block;
    }
    tmp._EMPTY_1 = new ByteString(tmp$ret$0);
  }
  Companion_20.prototype.encodeUtf8_uk8unn_k$ = function (_this__0) {
    var tmp$ret$0;
    $l$block: {
      var byteString_1 = new ByteString(asUtf8ToByteArray(_this__0));
      byteString_1._set_utf8__qlpr75_k$(_this__0);
      tmp$ret$0 = byteString_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_20();
    return Companion_instance_19;
  }
  function ByteString(data) {
    Companion_getInstance_19();
    this._data_1 = data;
    this._hashCode = 0;
    this._utf8 = null;
  }
  ByteString.prototype._set_hashCode__majfzk_k$ = function (value) {
  };
  ByteString.prototype._get_hashCode__0_k$ = function () {
    return this._hashCode;
  };
  ByteString.prototype._set_utf8__qlpr75_k$ = function (value) {
  };
  ByteString.prototype.utf8_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var result_1 = this._utf8;
      if (result_1 == null) {
        result_1 = toUtf8String(this.internalArray_0_k$());
        this._set_utf8__qlpr75_k$(result_1);
      }tmp$ret$0 = result_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.base64_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = encodeBase64$default(this._data_1, null, 1, null);
      break $l$block;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.hex_0_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var result_1 = charArray(imul(this._data_1.length, 2));
      var c_2 = 0;
      var indexedObject = this._data_1;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var b_4 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_5 = c_2;
        c_2 = tmp1_5 + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = b_4 >> 4;
          break $l$block;
        }
        result_1[tmp1_5] = HEX_DIGIT_CHARS[tmp$ret$0 & 15];
        var tmp2_6 = c_2;
        c_2 = tmp2_6 + 1 | 0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = b_4 & 15;
          break $l$block_0;
        }
        result_1[tmp2_6] = HEX_DIGIT_CHARS[tmp$ret$1];
      }
      tmp$ret$2 = concatToString(result_1);
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  ByteString.prototype.internalGet_ha5a7z_k$ = function (pos) {
    if (pos >= this._get_size__0_k$() ? true : pos < 0)
      throw new ArrayIndexOutOfBoundsException('' + 'size=' + this._get_size__0_k$() + ' pos=' + pos);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._data_1[pos];
      break $l$block;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.get_ha5a7z_k$ = function (index) {
    return this.internalGet_ha5a7z_k$(index);
  };
  ByteString.prototype._get_size__0_k$ = function () {
    return this.getSize_0_k$();
  };
  ByteString.prototype.getSize_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._data_1.length;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.toByteArray_0_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_copyOf_0_1 = this._data_1;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_copyOf_0_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.slice();
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  ByteString.prototype.internalArray_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._data_1;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.write_lbxf8c_k$ = function (buffer, offset, byteCount) {
    return commonWrite(this, buffer, offset, byteCount);
  };
  ByteString.prototype.rangeEquals_9piif6_k$ = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = (((offset >= 0 ? offset <= (this._data_1.length - byteCount | 0) : false) ? otherOffset >= 0 : false) ? otherOffset <= (other.length - byteCount | 0) : false) ? arrayRangeEquals(this._data_1, offset, other, otherOffset, byteCount) : false;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (other === this) {
        tmp = true;
      } else {
        if (other instanceof ByteString) {
          tmp = other._get_size__0_k$() === this._data_1.length ? other.rangeEquals_9piif6_k$(0, this._data_1, 0, this._data_1.length) : false;
        } else {
          {
            tmp = false;
          }
        }
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block_1: {
      var result_1 = this._hashCode;
      if (!(result_1 === 0)) {
        tmp$ret$0 = result_1;
        break $l$block_1;
      }var tmp$ret$1;
      $l$block_0: {
        var tmp0_also_0_2 = contentHashCode(this._data_1);
        {
        }
        {
          this._set_hashCode__majfzk_k$(tmp0_also_0_2);
        }
        tmp$ret$1 = tmp0_also_0_2;
        break $l$block_0;
      }
      tmp$ret$0 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$0;
  };
  ByteString.prototype.compareTo_ugqkca_k$ = function (other) {
    var tmp$ret$3;
    $l$block_4: {
      var sizeA_1 = this._get_size__0_k$();
      var sizeB_2 = other._get_size__0_k$();
      var i_3 = 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Math.min(sizeA_1, sizeB_2);
        break $l$block;
      }
      var size_4 = tmp$ret$0;
      while (i_3 < size_4) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_and_0_6 = this.get_ha5a7z_k$(i_3);
          tmp$ret$1 = tmp0_and_0_6 & 255;
          break $l$block_0;
        }
        var byteA_5 = tmp$ret$1;
        var tmp$ret$2;
        $l$block_1: {
          var tmp1_and_0_8 = other.get_ha5a7z_k$(i_3);
          tmp$ret$2 = tmp1_and_0_8 & 255;
          break $l$block_1;
        }
        var byteB_7 = tmp$ret$2;
        if (byteA_5 === byteB_7) {
          var tmp0_9 = i_3;
          i_3 = tmp0_9 + 1 | 0;
          Unit_getInstance();
          continue;
        }tmp$ret$3 = byteA_5 < byteB_7 ? -1 : 1;
        break $l$block_4;
      }
      if (sizeA_1 === sizeB_2) {
        tmp$ret$3 = 0;
        break $l$block_4;
      }tmp$ret$3 = sizeA_1 < sizeB_2 ? -1 : 1;
      break $l$block_4;
    }
    return tmp$ret$3;
  };
  ByteString.prototype.compareTo_2c5_k$ = function (other) {
    return this.compareTo_ugqkca_k$(other instanceof ByteString ? other : THROW_CCE());
  };
  ByteString.prototype.toString = function () {
    var tmp$ret$1;
    $l$block_9: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_isEmpty_0_1 = this._data_1;
        tmp$ret$0 = tmp0_isEmpty_0_1.length === 0;
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp$ret$1 = '[size=0]';
        break $l$block_9;
      } else {
      }
      var i_2 = codePointIndexToCharIndex$accessor$13225fg(this._data_1, 64);
      if (i_2 === -1) {
        var tmp;
        if (this._data_1.length <= 64) {
          tmp = '' + '[hex=' + this.hex_0_k$() + ']';
        } else {
          var tmp_0 = this._data_1.length;
          var tmp$ret$5;
          $l$block_5: {
            var endIndex_1_3 = resolveDefaultParameter(this, 64);
            {
              var tmp0_require_0_2_4 = true;
              {
              }
              if (!tmp0_require_0_2_4) {
                var tmp$ret$2;
                $l$block_1: {
                  tmp$ret$2 = 'beginIndex < 0';
                  break $l$block_1;
                }
                var message_1_3_5 = tmp$ret$2;
                throw IllegalArgumentException_init_$Create$(toString_1(message_1_3_5));
              }}
            {
              var tmp1_require_0_4_6 = endIndex_1_3 <= this._data_1.length;
              {
              }
              if (!tmp1_require_0_4_6) {
                var tmp$ret$3;
                $l$block_2: {
                  tmp$ret$3 = '' + 'endIndex > length(' + this._data_1.length + ')';
                  break $l$block_2;
                }
                var message_1_5_7 = tmp$ret$3;
                throw IllegalArgumentException_init_$Create$(toString_1(message_1_5_7));
              }}
            var subLen_6_8 = endIndex_1_3 - 0 | 0;
            {
              var tmp2_require_0_7_9 = subLen_6_8 >= 0;
              {
              }
              if (!tmp2_require_0_7_9) {
                var tmp$ret$4;
                $l$block_3: {
                  tmp$ret$4 = 'endIndex < beginIndex';
                  break $l$block_3;
                }
                var message_1_8_10 = tmp$ret$4;
                throw IllegalArgumentException_init_$Create$(toString_1(message_1_8_10));
              }}
            if (endIndex_1_3 === this._data_1.length) {
              tmp$ret$5 = this;
              break $l$block_5;
            }tmp$ret$5 = new ByteString(copyOfRange(this._data_1, 0, endIndex_1_3));
            break $l$block_5;
          }
          tmp = '' + '[size=' + tmp_0 + ' hex=' + tmp$ret$5.hex_0_k$() + '\u2026]';
        }
        tmp$ret$1 = tmp;
        break $l$block_9;
      }var text_11 = this.utf8_0_k$();
      var tmp$ret$7;
      $l$block_8: {
        var tmp$ret$6;
        $l$block_7: {
          tmp$ret$6 = text_11;
          break $l$block_7;
        }
        tmp$ret$7 = tmp$ret$6.substring(0, i_2);
        break $l$block_8;
      }
      var tmp_1 = tmp$ret$7;
      var tmp_2 = replace$default(tmp_1, '\\', '\\\\', false, 4, null);
      var tmp_3 = replace$default(tmp_2, '\n', '\\n', false, 4, null);
      var safeText_12 = replace$default(tmp_3, '\r', '\\r', false, 4, null);
      var tmp_4;
      if (i_2 < text_11.length) {
        tmp_4 = '' + '[size=' + this._data_1.length + ' text=' + safeText_12 + '\u2026]';
      } else {
        tmp_4 = '' + '[text=' + safeText_12 + ']';
      }
      tmp$ret$1 = tmp_4;
      break $l$block_9;
    }
    return tmp$ret$1;
  };
  ByteString.$metadata$ = {
    simpleName: 'ByteString',
    kind: 'class',
    interfaces: [Comparable]
  };
  function SegmentPool() {
    SegmentPool_instance = this;
    this._MAX_SIZE = 0;
    this._byteCount = 0;
  }
  SegmentPool.prototype.take_0_k$ = function () {
    return Segment_init_$Create$();
  };
  SegmentPool.$metadata$ = {
    simpleName: 'SegmentPool',
    kind: 'object',
    interfaces: []
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    if (SegmentPool_instance == null)
      new SegmentPool();
    return SegmentPool_instance;
  }
  function toByteString($this) {
    return new ByteString($this.toByteArray_0_k$());
  }
  function SegmentedByteString(segments, directory) {
    ByteString.call(this, Companion_getInstance_19()._EMPTY_1._data_1);
    this._segments = segments;
    this._directory = directory;
  }
  SegmentedByteString.prototype.base64_0_k$ = function () {
    return toByteString(this).base64_0_k$();
  };
  SegmentedByteString.prototype.hex_0_k$ = function () {
    return toByteString(this).hex_0_k$();
  };
  SegmentedByteString.prototype.internalGet_ha5a7z_k$ = function (pos) {
    var tmp$ret$0;
    $l$block: {
      checkOffsetAndCount(toLong_0(this._directory[this._segments.length - 1 | 0]), toLong_0(pos), new Long(1, 0));
      var segment_1 = segment(this, pos);
      var segmentOffset_2 = segment_1 === 0 ? 0 : this._directory[segment_1 - 1 | 0];
      var segmentPos_3 = this._directory[segment_1 + this._segments.length | 0];
      tmp$ret$0 = this._segments[segment_1][(pos - segmentOffset_2 | 0) + segmentPos_3 | 0];
      break $l$block;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.getSize_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this._directory[this._segments.length - 1 | 0];
      break $l$block;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.toByteArray_0_k$ = function () {
    var tmp$ret$5;
    $l$block_4: {
      var result_1 = new Int8Array(this._get_size__0_k$());
      var resultPos_2 = 0;
      {
        var segmentCount_1_3 = this._segments.length;
        var s_2_4 = 0;
        var pos_3_5 = 0;
        while (s_2_4 < segmentCount_1_3) {
          var segmentPos_4_6 = this._directory[segmentCount_1_3 + s_2_4 | 0];
          var nextSegmentOffset_5_7 = this._directory[s_2_4];
          {
            var tmp0__anonymous__7_8 = this._segments[s_2_4];
            var tmp1__anonymous__7_9 = nextSegmentOffset_5_7 - pos_3_5 | 0;
            var tmp$ret$4;
            $l$block_3: {
              var tmp0_copyInto_0_8_10 = resultPos_2;
              var tmp1_copyInto_0_9_11 = segmentPos_4_6 + tmp1__anonymous__7_9 | 0;
              var tmp$ret$1;
              $l$block_0: {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = tmp0__anonymous__7_8;
                  break $l$block;
                }
                tmp$ret$1 = tmp$ret$0;
                break $l$block_0;
              }
              var tmp = tmp$ret$1;
              var tmp$ret$3;
              $l$block_2: {
                var tmp$ret$2;
                $l$block_1: {
                  tmp$ret$2 = result_1;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
              }
              arrayCopy_0(tmp, tmp$ret$3, tmp0_copyInto_0_8_10, segmentPos_4_6, tmp1_copyInto_0_9_11);
              tmp$ret$4 = result_1;
              break $l$block_3;
            }
            Unit_getInstance();
            resultPos_2 = resultPos_2 + tmp1__anonymous__7_9 | 0;
          }
          pos_3_5 = nextSegmentOffset_5_7;
          var tmp0_6_12 = s_2_4;
          s_2_4 = tmp0_6_12 + 1 | 0;
          Unit_getInstance();
        }
      }
      tmp$ret$5 = result_1;
      break $l$block_4;
    }
    return tmp$ret$5;
  };
  SegmentedByteString.prototype.write_lbxf8c_k$ = function (buffer, offset, byteCount) {
    {
      var tmp1_forEachSegment_0_1 = offset + byteCount | 0;
      var s_1_2 = segment(this, offset);
      var pos_2_3 = offset;
      while (pos_2_3 < tmp1_forEachSegment_0_1) {
        var segmentOffset_3_4 = s_1_2 === 0 ? 0 : this._directory[s_1_2 - 1 | 0];
        var segmentSize_4_5 = this._directory[s_1_2] - segmentOffset_3_4 | 0;
        var segmentPos_5_6 = this._directory[this._segments.length + s_1_2 | 0];
        var tmp$ret$0;
        $l$block: {
          var tmp0_minOf_0_8 = segmentOffset_3_4 + segmentSize_4_5 | 0;
          tmp$ret$0 = Math.min(tmp1_forEachSegment_0_1, tmp0_minOf_0_8);
          break $l$block;
        }
        var byteCount_6_7 = tmp$ret$0 - pos_2_3 | 0;
        var offset_7_9 = segmentPos_5_6 + (pos_2_3 - segmentOffset_3_4 | 0) | 0;
        {
          var tmp2__anonymous__9_10 = this._segments[s_1_2];
          var segment_10_11 = Segment_init_$Create$_0(tmp2__anonymous__9_10, offset_7_9, offset_7_9 + byteCount_6_7 | 0, true, false);
          if (buffer._head_0 == null) {
            segment_10_11._prev_0 = segment_10_11;
            segment_10_11._next_4 = segment_10_11._prev_0;
            buffer._head_0 = segment_10_11._next_4;
          } else {
            ensureNotNull(ensureNotNull(buffer._head_0)._prev_0).push_5dd05i_k$(segment_10_11);
            Unit_getInstance();
          }
        }
        pos_2_3 = pos_2_3 + byteCount_6_7 | 0;
        var tmp0_8_12 = s_1_2;
        s_1_2 = tmp0_8_12 + 1 | 0;
        Unit_getInstance();
      }
    }
    var tmp0_this_13 = buffer;
    var tmp = tmp0_this_13;
    var tmp$ret$1;
    $l$block_0: {
      var tmp3_plus_0_14 = tmp0_this_13._size_0;
      tmp$ret$1 = tmp3_plus_0_14.plus_wiekkq_k$(toLong_0(byteCount));
      break $l$block_0;
    }
    tmp._size_0 = tmp$ret$1;
    return Unit_getInstance();
  };
  SegmentedByteString.prototype.rangeEquals_1vy4ih_k$ = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_2: {
      if (offset < 0 ? true : offset > (this._get_size__0_k$() - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_2;
      }var otherOffset_1 = otherOffset;
      {
        var tmp1_forEachSegment_0_2 = offset + byteCount | 0;
        var s_1_3 = segment(this, offset);
        var pos_2_4 = offset;
        while (pos_2_4 < tmp1_forEachSegment_0_2) {
          var segmentOffset_3_5 = s_1_3 === 0 ? 0 : this._directory[s_1_3 - 1 | 0];
          var segmentSize_4_6 = this._directory[s_1_3] - segmentOffset_3_5 | 0;
          var segmentPos_5_7 = this._directory[this._segments.length + s_1_3 | 0];
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_minOf_0_9 = segmentOffset_3_5 + segmentSize_4_6 | 0;
            tmp$ret$1 = Math.min(tmp1_forEachSegment_0_2, tmp0_minOf_0_9);
            break $l$block_0;
          }
          var byteCount_6_8 = tmp$ret$1 - pos_2_4 | 0;
          var offset_7_10 = segmentPos_5_7 + (pos_2_4 - segmentOffset_3_5 | 0) | 0;
          {
            var tmp2__anonymous__9_11 = this._segments[s_1_3];
            if (!other.rangeEquals_9piif6_k$(otherOffset_1, tmp2__anonymous__9_11, offset_7_10, byteCount_6_8)) {
              tmp$ret$0 = false;
              break $l$block_2;
            }otherOffset_1 = otherOffset_1 + byteCount_6_8 | 0;
          }
          pos_2_4 = pos_2_4 + byteCount_6_8 | 0;
          var tmp0_8_12 = s_1_3;
          s_1_3 = tmp0_8_12 + 1 | 0;
          Unit_getInstance();
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.rangeEquals_9piif6_k$ = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_2: {
      if (((offset < 0 ? true : offset > (this._get_size__0_k$() - byteCount | 0)) ? true : otherOffset < 0) ? true : otherOffset > (other.length - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_2;
      }var otherOffset_1 = otherOffset;
      {
        var tmp1_forEachSegment_0_2 = offset + byteCount | 0;
        var s_1_3 = segment(this, offset);
        var pos_2_4 = offset;
        while (pos_2_4 < tmp1_forEachSegment_0_2) {
          var segmentOffset_3_5 = s_1_3 === 0 ? 0 : this._directory[s_1_3 - 1 | 0];
          var segmentSize_4_6 = this._directory[s_1_3] - segmentOffset_3_5 | 0;
          var segmentPos_5_7 = this._directory[this._segments.length + s_1_3 | 0];
          var tmp$ret$1;
          $l$block_0: {
            var tmp0_minOf_0_9 = segmentOffset_3_5 + segmentSize_4_6 | 0;
            tmp$ret$1 = Math.min(tmp1_forEachSegment_0_2, tmp0_minOf_0_9);
            break $l$block_0;
          }
          var byteCount_6_8 = tmp$ret$1 - pos_2_4 | 0;
          var offset_7_10 = segmentPos_5_7 + (pos_2_4 - segmentOffset_3_5 | 0) | 0;
          {
            var tmp2__anonymous__9_11 = this._segments[s_1_3];
            if (!arrayRangeEquals(tmp2__anonymous__9_11, offset_7_10, other, otherOffset_1, byteCount_6_8)) {
              tmp$ret$0 = false;
              break $l$block_2;
            }otherOffset_1 = otherOffset_1 + byteCount_6_8 | 0;
          }
          pos_2_4 = pos_2_4 + byteCount_6_8 | 0;
          var tmp0_8_12 = s_1_3;
          s_1_3 = tmp0_8_12 + 1 | 0;
          Unit_getInstance();
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.internalArray_0_k$ = function () {
    return this.toByteArray_0_k$();
  };
  SegmentedByteString.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (other === this) {
        tmp = true;
      } else {
        if (other instanceof ByteString) {
          tmp = other._get_size__0_k$() === this._get_size__0_k$() ? this.rangeEquals_1vy4ih_k$(0, other, 0, this._get_size__0_k$()) : false;
        } else {
          {
            tmp = false;
          }
        }
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.hashCode = function () {
    var tmp$ret$0;
    $l$block_0: {
      var result_1 = this._get_hashCode__0_k$();
      if (!(result_1 === 0)) {
        tmp$ret$0 = result_1;
        break $l$block_0;
      }result_1 = 1;
      {
        var segmentCount_1_2 = this._segments.length;
        var s_2_3 = 0;
        var pos_3_4 = 0;
        while (s_2_3 < segmentCount_1_2) {
          var segmentPos_4_5 = this._directory[segmentCount_1_2 + s_2_3 | 0];
          var nextSegmentOffset_5_6 = this._directory[s_2_3];
          {
            var tmp0__anonymous__7_7 = this._segments[s_2_3];
            var tmp1__anonymous__7_8 = nextSegmentOffset_5_6 - pos_3_4 | 0;
            var i_8_9 = segmentPos_4_5;
            var limit_9_10 = segmentPos_4_5 + tmp1__anonymous__7_8 | 0;
            while (i_8_9 < limit_9_10) {
              result_1 = imul(31, result_1) + tmp0__anonymous__7_7[i_8_9] | 0;
              var tmp0_10_11 = i_8_9;
              i_8_9 = tmp0_10_11 + 1 | 0;
              Unit_getInstance();
            }
          }
          pos_3_4 = nextSegmentOffset_5_6;
          var tmp0_6_12 = s_2_3;
          s_2_3 = tmp0_6_12 + 1 | 0;
          Unit_getInstance();
        }
      }
      this._set_hashCode__majfzk_k$(result_1);
      tmp$ret$0 = result_1;
      break $l$block_0;
    }
    return tmp$ret$0;
  };
  SegmentedByteString.prototype.toString = function () {
    return toByteString(this).toString();
  };
  SegmentedByteString.$metadata$ = {
    simpleName: 'SegmentedByteString',
    kind: 'class',
    interfaces: []
  };
  function Sink() {
  }
  Sink.$metadata$ = {
    simpleName: 'Sink',
    kind: 'interface',
    interfaces: [Closeable]
  };
  function Lin() {
    Lin_instance = this;
    this._parser_0 = new SourceParser(linStdLexer(), linStdParser(linStdGrammar()));
  }
  Lin.$metadata$ = {
    simpleName: 'Lin',
    kind: 'object',
    interfaces: []
  };
  var Lin_instance;
  function Lin_getInstance() {
    if (Lin_instance == null)
      new Lin();
    return Lin_instance;
  }
  function ConstExpr() {
  }
  ConstExpr.$metadata$ = {
    simpleName: 'ConstExpr',
    kind: 'interface',
    interfaces: [Expr]
  };
  function Expr() {
  }
  Expr.$metadata$ = {
    simpleName: 'Expr',
    kind: 'interface',
    interfaces: [Node]
  };
  function build(_this_, $this) {
    var tmp0_elvis_lhs = _this_._section_0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Section wasn't set!");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return new InvalidNode(tmp, _this_._children, _this_._errors);
  }
  function Builder() {
    this._section_0 = null;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._children = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = ArrayList_init_$Create$();
      break $l$block_0;
    }
    tmp_0._errors = tmp$ret$1;
  }
  Builder.prototype.section_3dwx6q_k$ = function (value) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        this._section_0 = value;
      }
      tmp$ret$0 = this;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Builder.prototype.child_nvozoj_k$ = function (values) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      {
        var list_2 = filterNotNull(values);
        var tmp0_this_3 = this;
        {
          var tmp0_plusAssign_0_4 = tmp0_this_3._children;
          addAll(tmp0_plusAssign_0_4, list_2);
          Unit_getInstance();
        }
        var tmp;
        if (this._section_0 == null) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = !list_2.isEmpty_0_k$();
            break $l$block;
          }
          tmp = tmp$ret$0;
        } else {
          tmp = false;
        }
        if (tmp)
          this._section_0 = first(list_2)._get_section__0_k$();
        else {
        }
      }
      tmp$ret$1 = this;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Builder.prototype.error_6mmv15_k$ = function (values) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        var tmp0_this_2 = this;
        {
          var tmp0_plusAssign_0_3 = tmp0_this_2._errors;
          addAll_0(tmp0_plusAssign_0_3, values);
          Unit_getInstance();
        }
      }
      tmp$ret$0 = this;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Builder.$metadata$ = {
    simpleName: 'Builder',
    kind: 'class',
    interfaces: []
  };
  function Companion_21() {
    Companion_instance_20 = this;
  }
  Companion_21.prototype.invoke_b5r9f6_k$ = function (block) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = new Builder();
      {
      }
      block(tmp0_apply_0);
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return build(tmp$ret$0, this);
  };
  Companion_21.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_21();
    return Companion_instance_20;
  }
  function InvalidNode(section_0, children, errors) {
    Companion_getInstance_20();
    this._section_1 = section_0;
    this._children_0 = children;
    this._errors_0 = errors;
  }
  InvalidNode.prototype._get_section__0_k$ = function () {
    return this._section_1;
  };
  InvalidNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitInvalidNode_m1al9a_k$(this);
  };
  InvalidNode.prototype.toString = function () {
    return '' + 'InvalidNode(section=' + this._section_1 + ', children=' + this._children_0 + ', errors=' + this._errors_0 + ')';
  };
  InvalidNode.prototype.hashCode = function () {
    var result = this._section_1.hashCode();
    result = imul(result, 31) + hashCode(this._children_0) | 0;
    result = imul(result, 31) + hashCode(this._errors_0) | 0;
    return result;
  };
  InvalidNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InvalidNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InvalidNode ? other : THROW_CCE();
    if (!this._section_1.equals(tmp0_other_with_cast._section_1))
      return false;
    if (!equals_0(this._children_0, tmp0_other_with_cast._children_0))
      return false;
    if (!equals_0(this._errors_0, tmp0_other_with_cast._errors_0))
      return false;
    return true;
  };
  InvalidNode.$metadata$ = {
    simpleName: 'InvalidNode',
    kind: 'class',
    interfaces: [Expr]
  };
  function MultiExpr(list, last_0, section_0) {
    this._list = list;
    this._last_3 = last_0;
    this._section_2 = section_0;
  }
  MultiExpr.prototype._get_section__0_k$ = function () {
    return this._section_2;
  };
  MultiExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitMultiExpr_fzc19l_k$(this);
  };
  MultiExpr.prototype.toString = function () {
    return '' + 'MultiExpr(list=' + this._list + ', last=' + this._last_3 + ', section=' + this._section_2 + ')';
  };
  MultiExpr.prototype.hashCode = function () {
    var result = hashCode(this._list);
    result = imul(result, 31) + hashCode(this._last_3) | 0;
    result = imul(result, 31) + this._section_2.hashCode() | 0;
    return result;
  };
  MultiExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MultiExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MultiExpr ? other : THROW_CCE();
    if (!equals_0(this._list, tmp0_other_with_cast._list))
      return false;
    if (!equals_0(this._last_3, tmp0_other_with_cast._last_3))
      return false;
    if (!this._section_2.equals(tmp0_other_with_cast._section_2))
      return false;
    return true;
  };
  MultiExpr.$metadata$ = {
    simpleName: 'MultiExpr',
    kind: 'class',
    interfaces: [Expr, Multi]
  };
  function MultiNode(list, section_0) {
    this._list_0 = list;
    this._section_3 = section_0;
  }
  MultiNode.prototype._get_section__0_k$ = function () {
    return this._section_3;
  };
  MultiNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitMultiNode_qta17o_k$(this);
  };
  MultiNode.prototype.toString = function () {
    return '' + 'MultiNode(list=' + this._list_0 + ', section=' + this._section_3 + ')';
  };
  MultiNode.prototype.hashCode = function () {
    var result = hashCode(this._list_0);
    result = imul(result, 31) + this._section_3.hashCode() | 0;
    return result;
  };
  MultiNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MultiNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MultiNode ? other : THROW_CCE();
    if (!equals_0(this._list_0, tmp0_other_with_cast._list_0))
      return false;
    if (!this._section_3.equals(tmp0_other_with_cast._section_3))
      return false;
    return true;
  };
  MultiNode.$metadata$ = {
    simpleName: 'MultiNode',
    kind: 'class',
    interfaces: [Multi]
  };
  function Multi() {
  }
  Multi.$metadata$ = {
    simpleName: 'Multi',
    kind: 'interface',
    interfaces: [Node]
  };
  function Node() {
  }
  Node.$metadata$ = {
    simpleName: 'Node',
    kind: 'interface',
    interfaces: [Sectional]
  };
  function AssignNode(name, value, section_0) {
    this._name_1 = name;
    this._value_5 = value;
    this._section_4 = section_0;
  }
  AssignNode.prototype._get_section__0_k$ = function () {
    return this._section_4;
  };
  AssignNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitAssignNode_sdbc6c_k$(this);
  };
  AssignNode.prototype.toString = function () {
    return '' + 'AssignNode(name=' + this._name_1 + ', value=' + this._value_5 + ', section=' + this._section_4 + ')';
  };
  AssignNode.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_1);
    result = imul(result, 31) + hashCode(this._value_5) | 0;
    result = imul(result, 31) + this._section_4.hashCode() | 0;
    return result;
  };
  AssignNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AssignNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof AssignNode ? other : THROW_CCE();
    if (!(this._name_1 === tmp0_other_with_cast._name_1))
      return false;
    if (!equals_0(this._value_5, tmp0_other_with_cast._value_5))
      return false;
    if (!this._section_4.equals(tmp0_other_with_cast._section_4))
      return false;
    return true;
  };
  AssignNode.$metadata$ = {
    simpleName: 'AssignNode',
    kind: 'class',
    interfaces: [Node]
  };
  function IdentifierExpr(name, section_0) {
    this._name_2 = name;
    this._section_5 = section_0;
  }
  IdentifierExpr.prototype._get_section__0_k$ = function () {
    return this._section_5;
  };
  IdentifierExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitIdentifierExpr_w34sup_k$(this);
  };
  IdentifierExpr.prototype.toString = function () {
    return '' + 'IdentifierExpr(name=' + this._name_2 + ', section=' + this._section_5 + ')';
  };
  IdentifierExpr.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_2);
    result = imul(result, 31) + this._section_5.hashCode() | 0;
    return result;
  };
  IdentifierExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IdentifierExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IdentifierExpr ? other : THROW_CCE();
    if (!(this._name_2 === tmp0_other_with_cast._name_2))
      return false;
    if (!this._section_5.equals(tmp0_other_with_cast._section_5))
      return false;
    return true;
  };
  IdentifierExpr.$metadata$ = {
    simpleName: 'IdentifierExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function PropertyAccessExpr(target, nullSafe, name, section_0) {
    this._target_0 = target;
    this._nullSafe = nullSafe;
    this._name_3 = name;
    this._section_6 = section_0;
  }
  PropertyAccessExpr.prototype._get_section__0_k$ = function () {
    return this._section_6;
  };
  PropertyAccessExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitPropertyAccessExpr_i9klxb_k$(this);
  };
  PropertyAccessExpr.prototype.toString = function () {
    return '' + 'PropertyAccessExpr(target=' + this._target_0 + ', nullSafe=' + this._nullSafe + ', name=' + this._name_3 + ', section=' + this._section_6 + ')';
  };
  PropertyAccessExpr.prototype.hashCode = function () {
    var result = hashCode(this._target_0);
    result = imul(result, 31) + (this._nullSafe | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this._name_3) | 0;
    result = imul(result, 31) + this._section_6.hashCode() | 0;
    return result;
  };
  PropertyAccessExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropertyAccessExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PropertyAccessExpr ? other : THROW_CCE();
    if (!equals_0(this._target_0, tmp0_other_with_cast._target_0))
      return false;
    if (!(this._nullSafe === tmp0_other_with_cast._nullSafe))
      return false;
    if (!(this._name_3 === tmp0_other_with_cast._name_3))
      return false;
    if (!this._section_6.equals(tmp0_other_with_cast._section_6))
      return false;
    return true;
  };
  PropertyAccessExpr.$metadata$ = {
    simpleName: 'PropertyAccessExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function PropertyAssignNode(target, nullSafe, name, value, section_0) {
    this._target_1 = target;
    this._nullSafe_0 = nullSafe;
    this._name_4 = name;
    this._value_6 = value;
    this._section_7 = section_0;
  }
  PropertyAssignNode.prototype._get_section__0_k$ = function () {
    return this._section_7;
  };
  PropertyAssignNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitPropertyAssignNode_2hicx3_k$(this);
  };
  PropertyAssignNode.prototype.toString = function () {
    return '' + 'PropertyAssignNode(target=' + this._target_1 + ', nullSafe=' + this._nullSafe_0 + ', name=' + this._name_4 + ', value=' + this._value_6 + ', section=' + this._section_7 + ')';
  };
  PropertyAssignNode.prototype.hashCode = function () {
    var result = hashCode(this._target_1);
    result = imul(result, 31) + (this._nullSafe_0 | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this._name_4) | 0;
    result = imul(result, 31) + hashCode(this._value_6) | 0;
    result = imul(result, 31) + this._section_7.hashCode() | 0;
    return result;
  };
  PropertyAssignNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropertyAssignNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PropertyAssignNode ? other : THROW_CCE();
    if (!equals_0(this._target_1, tmp0_other_with_cast._target_1))
      return false;
    if (!(this._nullSafe_0 === tmp0_other_with_cast._nullSafe_0))
      return false;
    if (!(this._name_4 === tmp0_other_with_cast._name_4))
      return false;
    if (!equals_0(this._value_6, tmp0_other_with_cast._value_6))
      return false;
    if (!this._section_7.equals(tmp0_other_with_cast._section_7))
      return false;
    return true;
  };
  PropertyAssignNode.$metadata$ = {
    simpleName: 'PropertyAssignNode',
    kind: 'class',
    interfaces: [Node]
  };
  function SubscriptAccessExpr(target, arguments_0, section_0) {
    this._target_2 = target;
    this._arguments = arguments_0;
    this._section_8 = section_0;
  }
  SubscriptAccessExpr.prototype._get_section__0_k$ = function () {
    return this._section_8;
  };
  SubscriptAccessExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitSubscriptAccessExpr_1ea7lb_k$(this);
  };
  SubscriptAccessExpr.prototype.toString = function () {
    return '' + 'SubscriptAccessExpr(target=' + this._target_2 + ', arguments=' + this._arguments + ', section=' + this._section_8 + ')';
  };
  SubscriptAccessExpr.prototype.hashCode = function () {
    var result = hashCode(this._target_2);
    result = imul(result, 31) + hashCode(this._arguments) | 0;
    result = imul(result, 31) + this._section_8.hashCode() | 0;
    return result;
  };
  SubscriptAccessExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SubscriptAccessExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SubscriptAccessExpr ? other : THROW_CCE();
    if (!equals_0(this._target_2, tmp0_other_with_cast._target_2))
      return false;
    if (!equals_0(this._arguments, tmp0_other_with_cast._arguments))
      return false;
    if (!this._section_8.equals(tmp0_other_with_cast._section_8))
      return false;
    return true;
  };
  SubscriptAccessExpr.$metadata$ = {
    simpleName: 'SubscriptAccessExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function SubscriptAssignNode(target, arguments_0, value, section_0) {
    this._target_3 = target;
    this._arguments_0 = arguments_0;
    this._value_7 = value;
    this._section_9 = section_0;
  }
  SubscriptAssignNode.prototype._get_section__0_k$ = function () {
    return this._section_9;
  };
  SubscriptAssignNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitSubscriptAssignNode_h6cglj_k$(this);
  };
  SubscriptAssignNode.prototype.toString = function () {
    return '' + 'SubscriptAssignNode(target=' + this._target_3 + ', arguments=' + this._arguments_0 + ', value=' + this._value_7 + ', section=' + this._section_9 + ')';
  };
  SubscriptAssignNode.prototype.hashCode = function () {
    var result = hashCode(this._target_3);
    result = imul(result, 31) + hashCode(this._arguments_0) | 0;
    result = imul(result, 31) + hashCode(this._value_7) | 0;
    result = imul(result, 31) + this._section_9.hashCode() | 0;
    return result;
  };
  SubscriptAssignNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SubscriptAssignNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SubscriptAssignNode ? other : THROW_CCE();
    if (!equals_0(this._target_3, tmp0_other_with_cast._target_3))
      return false;
    if (!equals_0(this._arguments_0, tmp0_other_with_cast._arguments_0))
      return false;
    if (!equals_0(this._value_7, tmp0_other_with_cast._value_7))
      return false;
    if (!this._section_9.equals(tmp0_other_with_cast._section_9))
      return false;
    return true;
  };
  SubscriptAssignNode.$metadata$ = {
    simpleName: 'SubscriptAssignNode',
    kind: 'class',
    interfaces: [Node]
  };
  function BreakExpr(section_0) {
    this._section_10 = section_0;
  }
  BreakExpr.prototype._get_section__0_k$ = function () {
    return this._section_10;
  };
  BreakExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitBreakExpr_ci00lo_k$(this);
  };
  BreakExpr.prototype.toString = function () {
    return '' + 'BreakExpr(section=' + this._section_10 + ')';
  };
  BreakExpr.prototype.hashCode = function () {
    return this._section_10.hashCode();
  };
  BreakExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BreakExpr ? other : THROW_CCE();
    if (!this._section_10.equals(tmp0_other_with_cast._section_10))
      return false;
    return true;
  };
  BreakExpr.$metadata$ = {
    simpleName: 'BreakExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function CatchBranch(caughtName, branch) {
    this._caughtName = caughtName;
    this._branch = branch;
  }
  CatchBranch.prototype.toString = function () {
    return '' + 'CatchBranch(caughtName=' + this._caughtName + ', branch=' + this._branch + ')';
  };
  CatchBranch.prototype.hashCode = function () {
    var result = this._caughtName == null ? 0 : getStringHashCode(this._caughtName);
    result = imul(result, 31) + hashCode(this._branch) | 0;
    return result;
  };
  CatchBranch.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CatchBranch))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CatchBranch ? other : THROW_CCE();
    if (!(this._caughtName == tmp0_other_with_cast._caughtName))
      return false;
    if (!equals_0(this._branch, tmp0_other_with_cast._branch))
      return false;
    return true;
  };
  CatchBranch.$metadata$ = {
    simpleName: 'CatchBranch',
    kind: 'class',
    interfaces: []
  };
  function ContinueExpr(section_0) {
    this._section_11 = section_0;
  }
  ContinueExpr.prototype._get_section__0_k$ = function () {
    return this._section_11;
  };
  ContinueExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitContinueExpr_fk2gzm_k$(this);
  };
  ContinueExpr.prototype.toString = function () {
    return '' + 'ContinueExpr(section=' + this._section_11 + ')';
  };
  ContinueExpr.prototype.hashCode = function () {
    return this._section_11.hashCode();
  };
  ContinueExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContinueExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ContinueExpr ? other : THROW_CCE();
    if (!this._section_11.equals(tmp0_other_with_cast._section_11))
      return false;
    return true;
  };
  ContinueExpr.$metadata$ = {
    simpleName: 'ContinueExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function DoWhileNode(body, condition, section_0) {
    this._body = body;
    this._condition = condition;
    this._section_12 = section_0;
  }
  DoWhileNode.prototype._get_section__0_k$ = function () {
    return this._section_12;
  };
  DoWhileNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitDoWhileNode_fx04lc_k$(this);
  };
  DoWhileNode.prototype.toString = function () {
    return '' + 'DoWhileNode(body=' + this._body + ', condition=' + this._condition + ', section=' + this._section_12 + ')';
  };
  DoWhileNode.prototype.hashCode = function () {
    var result = this._body == null ? 0 : hashCode(this._body);
    result = imul(result, 31) + hashCode(this._condition) | 0;
    result = imul(result, 31) + this._section_12.hashCode() | 0;
    return result;
  };
  DoWhileNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DoWhileNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DoWhileNode ? other : THROW_CCE();
    if (!equals_0(this._body, tmp0_other_with_cast._body))
      return false;
    if (!equals_0(this._condition, tmp0_other_with_cast._condition))
      return false;
    if (!this._section_12.equals(tmp0_other_with_cast._section_12))
      return false;
    return true;
  };
  DoWhileNode.$metadata$ = {
    simpleName: 'DoWhileNode',
    kind: 'class',
    interfaces: [Node]
  };
  function ForNode(variableName, iterable, body, section_0) {
    this._variableName = variableName;
    this._iterable = iterable;
    this._body_0 = body;
    this._section_13 = section_0;
  }
  ForNode.prototype._get_section__0_k$ = function () {
    return this._section_13;
  };
  ForNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitForNode_5zgy77_k$(this);
  };
  ForNode.prototype.toString = function () {
    return '' + 'ForNode(variableName=' + this._variableName + ', iterable=' + this._iterable + ', body=' + this._body_0 + ', section=' + this._section_13 + ')';
  };
  ForNode.prototype.hashCode = function () {
    var result = getStringHashCode(this._variableName);
    result = imul(result, 31) + hashCode(this._iterable) | 0;
    result = imul(result, 31) + hashCode(this._body_0) | 0;
    result = imul(result, 31) + this._section_13.hashCode() | 0;
    return result;
  };
  ForNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ForNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ForNode ? other : THROW_CCE();
    if (!(this._variableName === tmp0_other_with_cast._variableName))
      return false;
    if (!equals_0(this._iterable, tmp0_other_with_cast._iterable))
      return false;
    if (!equals_0(this._body_0, tmp0_other_with_cast._body_0))
      return false;
    if (!this._section_13.equals(tmp0_other_with_cast._section_13))
      return false;
    return true;
  };
  ForNode.$metadata$ = {
    simpleName: 'ForNode',
    kind: 'class',
    interfaces: [Node]
  };
  function IfExpr(condition, thenBranch, elseBranch, section_0) {
    this._condition_0 = condition;
    this._thenBranch = thenBranch;
    this._elseBranch = elseBranch;
    this._section_14 = section_0;
  }
  IfExpr.prototype._get_section__0_k$ = function () {
    return this._section_14;
  };
  IfExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitIfExpr_cppdfc_k$(this);
  };
  IfExpr.prototype.toString = function () {
    return '' + 'IfExpr(condition=' + this._condition_0 + ', thenBranch=' + this._thenBranch + ', elseBranch=' + this._elseBranch + ', section=' + this._section_14 + ')';
  };
  IfExpr.prototype.hashCode = function () {
    var result = hashCode(this._condition_0);
    result = imul(result, 31) + hashCode(this._thenBranch) | 0;
    result = imul(result, 31) + hashCode(this._elseBranch) | 0;
    result = imul(result, 31) + this._section_14.hashCode() | 0;
    return result;
  };
  IfExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IfExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IfExpr ? other : THROW_CCE();
    if (!equals_0(this._condition_0, tmp0_other_with_cast._condition_0))
      return false;
    if (!equals_0(this._thenBranch, tmp0_other_with_cast._thenBranch))
      return false;
    if (!equals_0(this._elseBranch, tmp0_other_with_cast._elseBranch))
      return false;
    if (!this._section_14.equals(tmp0_other_with_cast._section_14))
      return false;
    return true;
  };
  IfExpr.$metadata$ = {
    simpleName: 'IfExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function IfNode(condition, thenBranch, elseBranch, section_0) {
    this._condition_1 = condition;
    this._thenBranch_0 = thenBranch;
    this._elseBranch_0 = elseBranch;
    this._section_15 = section_0;
  }
  IfNode.prototype._get_section__0_k$ = function () {
    return this._section_15;
  };
  IfNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitIfNode_fism2j_k$(this);
  };
  IfNode.prototype.toString = function () {
    return '' + 'IfNode(condition=' + this._condition_1 + ', thenBranch=' + this._thenBranch_0 + ', elseBranch=' + this._elseBranch_0 + ', section=' + this._section_15 + ')';
  };
  IfNode.prototype.hashCode = function () {
    var result = hashCode(this._condition_1);
    result = imul(result, 31) + hashCode(this._thenBranch_0) | 0;
    result = imul(result, 31) + (this._elseBranch_0 == null ? 0 : hashCode(this._elseBranch_0)) | 0;
    result = imul(result, 31) + this._section_15.hashCode() | 0;
    return result;
  };
  IfNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IfNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IfNode ? other : THROW_CCE();
    if (!equals_0(this._condition_1, tmp0_other_with_cast._condition_1))
      return false;
    if (!equals_0(this._thenBranch_0, tmp0_other_with_cast._thenBranch_0))
      return false;
    if (!equals_0(this._elseBranch_0, tmp0_other_with_cast._elseBranch_0))
      return false;
    if (!this._section_15.equals(tmp0_other_with_cast._section_15))
      return false;
    return true;
  };
  IfNode.$metadata$ = {
    simpleName: 'IfNode',
    kind: 'class',
    interfaces: [Node]
  };
  function ReturnExpr(value, section_0) {
    this._value_8 = value;
    this._section_16 = section_0;
  }
  ReturnExpr.prototype._get_section__0_k$ = function () {
    return this._section_16;
  };
  ReturnExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitReturnExpr_1r8sl1_k$(this);
  };
  ReturnExpr.prototype.toString = function () {
    return '' + 'ReturnExpr(value=' + this._value_8 + ', section=' + this._section_16 + ')';
  };
  ReturnExpr.prototype.hashCode = function () {
    var result = hashCode(this._value_8);
    result = imul(result, 31) + this._section_16.hashCode() | 0;
    return result;
  };
  ReturnExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReturnExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ReturnExpr ? other : THROW_CCE();
    if (!equals_0(this._value_8, tmp0_other_with_cast._value_8))
      return false;
    if (!this._section_16.equals(tmp0_other_with_cast._section_16))
      return false;
    return true;
  };
  ReturnExpr.$metadata$ = {
    simpleName: 'ReturnExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function ThrowExpr(value, section_0) {
    this._value_9 = value;
    this._section_17 = section_0;
  }
  ThrowExpr.prototype._get_section__0_k$ = function () {
    return this._section_17;
  };
  ThrowExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitThrowExpr_o8w86r_k$(this);
  };
  ThrowExpr.prototype.toString = function () {
    return '' + 'ThrowExpr(value=' + this._value_9 + ', section=' + this._section_17 + ')';
  };
  ThrowExpr.prototype.hashCode = function () {
    var result = hashCode(this._value_9);
    result = imul(result, 31) + this._section_17.hashCode() | 0;
    return result;
  };
  ThrowExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ThrowExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ThrowExpr ? other : THROW_CCE();
    if (!equals_0(this._value_9, tmp0_other_with_cast._value_9))
      return false;
    if (!this._section_17.equals(tmp0_other_with_cast._section_17))
      return false;
    return true;
  };
  ThrowExpr.$metadata$ = {
    simpleName: 'ThrowExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function TryExpr(tryBranch, catchBranch, finallyBranch, section_0) {
    this._tryBranch = tryBranch;
    this._catchBranch = catchBranch;
    this._finallyBranch = finallyBranch;
    this._section_18 = section_0;
  }
  TryExpr.prototype._get_section__0_k$ = function () {
    return this._section_18;
  };
  TryExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitTryExpr_wonimg_k$(this);
  };
  TryExpr.prototype.toString = function () {
    return '' + 'TryExpr(tryBranch=' + this._tryBranch + ', catchBranch=' + this._catchBranch + ', finallyBranch=' + this._finallyBranch + ', section=' + this._section_18 + ')';
  };
  TryExpr.prototype.hashCode = function () {
    var result = hashCode(this._tryBranch);
    result = imul(result, 31) + (this._catchBranch == null ? 0 : this._catchBranch.hashCode()) | 0;
    result = imul(result, 31) + (this._finallyBranch == null ? 0 : hashCode(this._finallyBranch)) | 0;
    result = imul(result, 31) + this._section_18.hashCode() | 0;
    return result;
  };
  TryExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TryExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TryExpr ? other : THROW_CCE();
    if (!equals_0(this._tryBranch, tmp0_other_with_cast._tryBranch))
      return false;
    if (!equals_0(this._catchBranch, tmp0_other_with_cast._catchBranch))
      return false;
    if (!equals_0(this._finallyBranch, tmp0_other_with_cast._finallyBranch))
      return false;
    if (!this._section_18.equals(tmp0_other_with_cast._section_18))
      return false;
    return true;
  };
  TryExpr.$metadata$ = {
    simpleName: 'TryExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function WhileNode(condition, body, section_0) {
    this._condition_2 = condition;
    this._body_1 = body;
    this._section_19 = section_0;
  }
  WhileNode.prototype._get_section__0_k$ = function () {
    return this._section_19;
  };
  WhileNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitWhileNode_u00le3_k$(this);
  };
  WhileNode.prototype.toString = function () {
    return '' + 'WhileNode(condition=' + this._condition_2 + ', body=' + this._body_1 + ', section=' + this._section_19 + ')';
  };
  WhileNode.prototype.hashCode = function () {
    var result = hashCode(this._condition_2);
    result = imul(result, 31) + (this._body_1 == null ? 0 : hashCode(this._body_1)) | 0;
    result = imul(result, 31) + this._section_19.hashCode() | 0;
    return result;
  };
  WhileNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhileNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof WhileNode ? other : THROW_CCE();
    if (!equals_0(this._condition_2, tmp0_other_with_cast._condition_2))
      return false;
    if (!equals_0(this._body_1, tmp0_other_with_cast._body_1))
      return false;
    if (!this._section_19.equals(tmp0_other_with_cast._section_19))
      return false;
    return true;
  };
  WhileNode.$metadata$ = {
    simpleName: 'WhileNode',
    kind: 'class',
    interfaces: [Node]
  };
  function DeclareFunctionExpr(name, value, section_0) {
    this._name_5 = name;
    this._value_10 = value;
    this._section_20 = section_0;
  }
  DeclareFunctionExpr.prototype._get_section__0_k$ = function () {
    return this._section_20;
  };
  DeclareFunctionExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitDeclareFunctionExpr_vxuj7o_k$(this);
  };
  DeclareFunctionExpr.prototype.toString = function () {
    return '' + 'DeclareFunctionExpr(name=' + this._name_5 + ', value=' + this._value_10 + ', section=' + this._section_20 + ')';
  };
  DeclareFunctionExpr.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_5);
    result = imul(result, 31) + this._value_10.hashCode() | 0;
    result = imul(result, 31) + this._section_20.hashCode() | 0;
    return result;
  };
  DeclareFunctionExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeclareFunctionExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DeclareFunctionExpr ? other : THROW_CCE();
    if (!(this._name_5 === tmp0_other_with_cast._name_5))
      return false;
    if (!this._value_10.equals(tmp0_other_with_cast._value_10))
      return false;
    if (!this._section_20.equals(tmp0_other_with_cast._section_20))
      return false;
    return true;
  };
  DeclareFunctionExpr.$metadata$ = {
    simpleName: 'DeclareFunctionExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function DeclareVariableNode(name, mutable, value, section_0) {
    this._name_6 = name;
    this._mutable = mutable;
    this._value_11 = value;
    this._section_21 = section_0;
  }
  DeclareVariableNode.prototype._get_section__0_k$ = function () {
    return this._section_21;
  };
  DeclareVariableNode.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitDeclareVariableNode_77c4j1_k$(this);
  };
  DeclareVariableNode.prototype.toString = function () {
    return '' + 'DeclareVariableNode(name=' + this._name_6 + ', mutable=' + this._mutable + ', value=' + this._value_11 + ', section=' + this._section_21 + ')';
  };
  DeclareVariableNode.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_6);
    result = imul(result, 31) + (this._mutable | 0) | 0;
    result = imul(result, 31) + (this._value_11 == null ? 0 : hashCode(this._value_11)) | 0;
    result = imul(result, 31) + this._section_21.hashCode() | 0;
    return result;
  };
  DeclareVariableNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeclareVariableNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DeclareVariableNode ? other : THROW_CCE();
    if (!(this._name_6 === tmp0_other_with_cast._name_6))
      return false;
    if (!(this._mutable === tmp0_other_with_cast._mutable))
      return false;
    if (!equals_0(this._value_11, tmp0_other_with_cast._value_11))
      return false;
    if (!this._section_21.equals(tmp0_other_with_cast._section_21))
      return false;
    return true;
  };
  DeclareVariableNode.$metadata$ = {
    simpleName: 'DeclareVariableNode',
    kind: 'class',
    interfaces: [Node]
  };
  function InvokeExpr(target, arguments_0, section_0) {
    this._target_4 = target;
    this._arguments_1 = arguments_0;
    this._section_22 = section_0;
  }
  InvokeExpr.prototype._get_section__0_k$ = function () {
    return this._section_22;
  };
  InvokeExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitInvokeExpr_xo0qb8_k$(this);
  };
  InvokeExpr.prototype.toString = function () {
    return '' + 'InvokeExpr(target=' + this._target_4 + ', arguments=' + this._arguments_1 + ', section=' + this._section_22 + ')';
  };
  InvokeExpr.prototype.hashCode = function () {
    var result = hashCode(this._target_4);
    result = imul(result, 31) + hashCode(this._arguments_1) | 0;
    result = imul(result, 31) + this._section_22.hashCode() | 0;
    return result;
  };
  InvokeExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InvokeExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InvokeExpr ? other : THROW_CCE();
    if (!equals_0(this._target_4, tmp0_other_with_cast._target_4))
      return false;
    if (!equals_0(this._arguments_1, tmp0_other_with_cast._arguments_1))
      return false;
    if (!this._section_22.equals(tmp0_other_with_cast._section_22))
      return false;
    return true;
  };
  InvokeExpr.$metadata$ = {
    simpleName: 'InvokeExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function InvokeLocalExpr(name, arguments_0, section_0) {
    this._name_7 = name;
    this._arguments_2 = arguments_0;
    this._section_23 = section_0;
  }
  InvokeLocalExpr.prototype._get_section__0_k$ = function () {
    return this._section_23;
  };
  InvokeLocalExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitInvokeLocalExpr_b10h3b_k$(this);
  };
  InvokeLocalExpr.prototype.toString = function () {
    return '' + 'InvokeLocalExpr(name=' + this._name_7 + ', arguments=' + this._arguments_2 + ', section=' + this._section_23 + ')';
  };
  InvokeLocalExpr.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_7);
    result = imul(result, 31) + hashCode(this._arguments_2) | 0;
    result = imul(result, 31) + this._section_23.hashCode() | 0;
    return result;
  };
  InvokeLocalExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InvokeLocalExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InvokeLocalExpr ? other : THROW_CCE();
    if (!(this._name_7 === tmp0_other_with_cast._name_7))
      return false;
    if (!equals_0(this._arguments_2, tmp0_other_with_cast._arguments_2))
      return false;
    if (!this._section_23.equals(tmp0_other_with_cast._section_23))
      return false;
    return true;
  };
  InvokeLocalExpr.$metadata$ = {
    simpleName: 'InvokeLocalExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function InvokeMemberExpr(target, nullSafe, name, arguments_0, section_0) {
    this._target_5 = target;
    this._nullSafe_1 = nullSafe;
    this._name_8 = name;
    this._arguments_3 = arguments_0;
    this._section_24 = section_0;
  }
  InvokeMemberExpr.prototype._get_section__0_k$ = function () {
    return this._section_24;
  };
  InvokeMemberExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitInvokeMemberExpr_d5ntl2_k$(this);
  };
  InvokeMemberExpr.prototype.toString = function () {
    return '' + 'InvokeMemberExpr(target=' + this._target_5 + ', nullSafe=' + this._nullSafe_1 + ', name=' + this._name_8 + ', arguments=' + this._arguments_3 + ', section=' + this._section_24 + ')';
  };
  InvokeMemberExpr.prototype.hashCode = function () {
    var result = hashCode(this._target_5);
    result = imul(result, 31) + (this._nullSafe_1 | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this._name_8) | 0;
    result = imul(result, 31) + hashCode(this._arguments_3) | 0;
    result = imul(result, 31) + this._section_24.hashCode() | 0;
    return result;
  };
  InvokeMemberExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InvokeMemberExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InvokeMemberExpr ? other : THROW_CCE();
    if (!equals_0(this._target_5, tmp0_other_with_cast._target_5))
      return false;
    if (!(this._nullSafe_1 === tmp0_other_with_cast._nullSafe_1))
      return false;
    if (!(this._name_8 === tmp0_other_with_cast._name_8))
      return false;
    if (!equals_0(this._arguments_3, tmp0_other_with_cast._arguments_3))
      return false;
    if (!this._section_24.equals(tmp0_other_with_cast._section_24))
      return false;
    return true;
  };
  InvokeMemberExpr.$metadata$ = {
    simpleName: 'InvokeMemberExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function BinaryOperation(left, right, operator, section_0) {
    this._left = left;
    this._right = right;
    this._operator = operator;
    this._section_25 = section_0;
  }
  BinaryOperation.prototype._get_section__0_k$ = function () {
    return this._section_25;
  };
  BinaryOperation.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitBinaryOperation_y0sprt_k$(this);
  };
  BinaryOperation.prototype.toString = function () {
    return '' + 'BinaryOperation(left=' + this._left + ', right=' + this._right + ', operator=' + this._operator + ', section=' + this._section_25 + ')';
  };
  BinaryOperation.prototype.hashCode = function () {
    var result = hashCode(this._left);
    result = imul(result, 31) + hashCode(this._right) | 0;
    result = imul(result, 31) + this._operator.hashCode() | 0;
    result = imul(result, 31) + this._section_25.hashCode() | 0;
    return result;
  };
  BinaryOperation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BinaryOperation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BinaryOperation ? other : THROW_CCE();
    if (!equals_0(this._left, tmp0_other_with_cast._left))
      return false;
    if (!equals_0(this._right, tmp0_other_with_cast._right))
      return false;
    if (!this._operator.equals(tmp0_other_with_cast._operator))
      return false;
    if (!this._section_25.equals(tmp0_other_with_cast._section_25))
      return false;
    return true;
  };
  BinaryOperation.$metadata$ = {
    simpleName: 'BinaryOperation',
    kind: 'class',
    interfaces: [Expr]
  };
  function EnsureNotNullExpr(value, section_0) {
    this._value_12 = value;
    this._section_26 = section_0;
  }
  EnsureNotNullExpr.prototype._get_section__0_k$ = function () {
    return this._section_26;
  };
  EnsureNotNullExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitEnsureNotNullExpr_7oiys_k$(this);
  };
  EnsureNotNullExpr.prototype.toString = function () {
    return '' + 'EnsureNotNullExpr(value=' + this._value_12 + ', section=' + this._section_26 + ')';
  };
  EnsureNotNullExpr.prototype.hashCode = function () {
    var result = hashCode(this._value_12);
    result = imul(result, 31) + this._section_26.hashCode() | 0;
    return result;
  };
  EnsureNotNullExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnsureNotNullExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof EnsureNotNullExpr ? other : THROW_CCE();
    if (!equals_0(this._value_12, tmp0_other_with_cast._value_12))
      return false;
    if (!this._section_26.equals(tmp0_other_with_cast._section_26))
      return false;
    return true;
  };
  EnsureNotNullExpr.$metadata$ = {
    simpleName: 'EnsureNotNullExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function TypeofExpr(value, section_0) {
    this._value_13 = value;
    this._section_27 = section_0;
  }
  TypeofExpr.prototype._get_section__0_k$ = function () {
    return this._section_27;
  };
  TypeofExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitTypeofExpr_heb3f3_k$(this);
  };
  TypeofExpr.prototype.toString = function () {
    return '' + 'TypeofExpr(value=' + this._value_13 + ', section=' + this._section_27 + ')';
  };
  TypeofExpr.prototype.hashCode = function () {
    var result = hashCode(this._value_13);
    result = imul(result, 31) + this._section_27.hashCode() | 0;
    return result;
  };
  TypeofExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeofExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TypeofExpr ? other : THROW_CCE();
    if (!equals_0(this._value_13, tmp0_other_with_cast._value_13))
      return false;
    if (!this._section_27.equals(tmp0_other_with_cast._section_27))
      return false;
    return true;
  };
  TypeofExpr.$metadata$ = {
    simpleName: 'TypeofExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function UnaryOperation(target, operator, section_0) {
    this._target_6 = target;
    this._operator_0 = operator;
    this._section_28 = section_0;
  }
  UnaryOperation.prototype._get_section__0_k$ = function () {
    return this._section_28;
  };
  UnaryOperation.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitUnaryOperation_eqdm0z_k$(this);
  };
  UnaryOperation.$metadata$ = {
    simpleName: 'UnaryOperation',
    kind: 'class',
    interfaces: [Expr]
  };
  function ArrayExpr(value, section_0) {
    this._value_14 = value;
    this._section_29 = section_0;
  }
  ArrayExpr.prototype._get_section__0_k$ = function () {
    return this._section_29;
  };
  ArrayExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitArrayExpr_klk2yu_k$(this);
  };
  ArrayExpr.prototype.toString = function () {
    return '' + 'ArrayExpr(value=' + this._value_14 + ', section=' + this._section_29 + ')';
  };
  ArrayExpr.prototype.hashCode = function () {
    var result = hashCode(this._value_14);
    result = imul(result, 31) + this._section_29.hashCode() | 0;
    return result;
  };
  ArrayExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ArrayExpr ? other : THROW_CCE();
    if (!equals_0(this._value_14, tmp0_other_with_cast._value_14))
      return false;
    if (!this._section_29.equals(tmp0_other_with_cast._section_29))
      return false;
    return true;
  };
  ArrayExpr.$metadata$ = {
    simpleName: 'ArrayExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function BooleanExpr(value, section_0) {
    this._value_15 = value;
    this._section_30 = section_0;
  }
  BooleanExpr.prototype._get_section__0_k$ = function () {
    return this._section_30;
  };
  BooleanExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitBooleanExpr_es5jwp_k$(this);
  };
  BooleanExpr.prototype.toString = function () {
    return '' + 'BooleanExpr(value=' + this._value_15 + ', section=' + this._section_30 + ')';
  };
  BooleanExpr.prototype.hashCode = function () {
    var result = this._value_15 | 0;
    result = imul(result, 31) + this._section_30.hashCode() | 0;
    return result;
  };
  BooleanExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BooleanExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BooleanExpr ? other : THROW_CCE();
    if (!(this._value_15 === tmp0_other_with_cast._value_15))
      return false;
    if (!this._section_30.equals(tmp0_other_with_cast._section_30))
      return false;
    return true;
  };
  BooleanExpr.$metadata$ = {
    simpleName: 'BooleanExpr',
    kind: 'class',
    interfaces: [ConstExpr]
  };
  function DecimalExpr(value, section_0) {
    this._value_16 = value;
    this._section_31 = section_0;
  }
  DecimalExpr.prototype._get_section__0_k$ = function () {
    return this._section_31;
  };
  DecimalExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitDecimalExpr_ok2vda_k$(this);
  };
  DecimalExpr.prototype.toString = function () {
    return '' + 'DecimalExpr(value=' + this._value_16 + ', section=' + this._section_31 + ')';
  };
  DecimalExpr.prototype.hashCode = function () {
    var result = getNumberHashCode(this._value_16);
    result = imul(result, 31) + this._section_31.hashCode() | 0;
    return result;
  };
  DecimalExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecimalExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DecimalExpr ? other : THROW_CCE();
    if (!equals_0(this._value_16, tmp0_other_with_cast._value_16))
      return false;
    if (!this._section_31.equals(tmp0_other_with_cast._section_31))
      return false;
    return true;
  };
  DecimalExpr.$metadata$ = {
    simpleName: 'DecimalExpr',
    kind: 'class',
    interfaces: [ConstExpr]
  };
  function Parameter(name, varargs, defaultValue) {
    this._name_9 = name;
    this._varargs = varargs;
    this._defaultValue = defaultValue;
  }
  Parameter.prototype.component1_0_k$ = function () {
    return this._name_9;
  };
  Parameter.prototype.component2_0_k$ = function () {
    return this._varargs;
  };
  Parameter.prototype.component3_0_k$ = function () {
    return this._defaultValue;
  };
  Parameter.prototype.toString = function () {
    return '' + 'Parameter(name=' + this._name_9 + ', varargs=' + this._varargs + ', defaultValue=' + this._defaultValue + ')';
  };
  Parameter.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_9);
    result = imul(result, 31) + (this._varargs | 0) | 0;
    result = imul(result, 31) + (this._defaultValue == null ? 0 : hashCode(this._defaultValue)) | 0;
    return result;
  };
  Parameter.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Parameter))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Parameter ? other : THROW_CCE();
    if (!(this._name_9 === tmp0_other_with_cast._name_9))
      return false;
    if (!(this._varargs === tmp0_other_with_cast._varargs))
      return false;
    if (!equals_0(this._defaultValue, tmp0_other_with_cast._defaultValue))
      return false;
    return true;
  };
  Parameter.$metadata$ = {
    simpleName: 'Parameter',
    kind: 'class',
    interfaces: []
  };
  function FunctionExpr(parameters, name, body, section_0) {
    this._parameters = parameters;
    this._name_10 = name;
    this._body_2 = body;
    this._section_32 = section_0;
  }
  FunctionExpr.prototype._get_section__0_k$ = function () {
    return this._section_32;
  };
  FunctionExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitFunctionExpr_rni1wf_k$(this);
  };
  FunctionExpr.prototype.toString = function () {
    return '' + 'FunctionExpr(parameters=' + this._parameters + ', name=' + this._name_10 + ', body=' + this._body_2 + ', section=' + this._section_32 + ')';
  };
  FunctionExpr.prototype.hashCode = function () {
    var result = hashCode(this._parameters);
    result = imul(result, 31) + (this._name_10 == null ? 0 : getStringHashCode(this._name_10)) | 0;
    result = imul(result, 31) + (this._body_2 == null ? 0 : hashCode(this._body_2)) | 0;
    result = imul(result, 31) + this._section_32.hashCode() | 0;
    return result;
  };
  FunctionExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FunctionExpr ? other : THROW_CCE();
    if (!equals_0(this._parameters, tmp0_other_with_cast._parameters))
      return false;
    if (!(this._name_10 == tmp0_other_with_cast._name_10))
      return false;
    if (!equals_0(this._body_2, tmp0_other_with_cast._body_2))
      return false;
    if (!this._section_32.equals(tmp0_other_with_cast._section_32))
      return false;
    return true;
  };
  FunctionExpr.$metadata$ = {
    simpleName: 'FunctionExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function IntegerExpr(value, section_0) {
    this._value_17 = value;
    this._section_33 = section_0;
  }
  IntegerExpr.prototype._get_section__0_k$ = function () {
    return this._section_33;
  };
  IntegerExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitIntegerExpr_nz4v8f_k$(this);
  };
  IntegerExpr.prototype.toString = function () {
    return '' + 'IntegerExpr(value=' + this._value_17 + ', section=' + this._section_33 + ')';
  };
  IntegerExpr.prototype.hashCode = function () {
    var result = this._value_17.hashCode();
    result = imul(result, 31) + this._section_33.hashCode() | 0;
    return result;
  };
  IntegerExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntegerExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IntegerExpr ? other : THROW_CCE();
    if (!this._value_17.equals(tmp0_other_with_cast._value_17))
      return false;
    if (!this._section_33.equals(tmp0_other_with_cast._section_33))
      return false;
    return true;
  };
  IntegerExpr.$metadata$ = {
    simpleName: 'IntegerExpr',
    kind: 'class',
    interfaces: [ConstExpr]
  };
  function NullExpr(section_0) {
    this._section_34 = section_0;
  }
  NullExpr.prototype._get_section__0_k$ = function () {
    return this._section_34;
  };
  NullExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitNullExpr_rhthhq_k$(this);
  };
  NullExpr.prototype.toString = function () {
    return '' + 'NullExpr(section=' + this._section_34 + ')';
  };
  NullExpr.prototype.hashCode = function () {
    return this._section_34.hashCode();
  };
  NullExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NullExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof NullExpr ? other : THROW_CCE();
    if (!this._section_34.equals(tmp0_other_with_cast._section_34))
      return false;
    return true;
  };
  NullExpr.$metadata$ = {
    simpleName: 'NullExpr',
    kind: 'class',
    interfaces: [ConstExpr]
  };
  function ObjectExpr(value, section_0) {
    this._value_18 = value;
    this._section_35 = section_0;
  }
  ObjectExpr.prototype._get_section__0_k$ = function () {
    return this._section_35;
  };
  ObjectExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitObjectExpr_i59t16_k$(this);
  };
  ObjectExpr.prototype.toString = function () {
    return '' + 'ObjectExpr(value=' + this._value_18 + ', section=' + this._section_35 + ')';
  };
  ObjectExpr.prototype.hashCode = function () {
    var result = hashCode(this._value_18);
    result = imul(result, 31) + this._section_35.hashCode() | 0;
    return result;
  };
  ObjectExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ObjectExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ObjectExpr ? other : THROW_CCE();
    if (!equals_0(this._value_18, tmp0_other_with_cast._value_18))
      return false;
    if (!this._section_35.equals(tmp0_other_with_cast._section_35))
      return false;
    return true;
  };
  ObjectExpr.$metadata$ = {
    simpleName: 'ObjectExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function StringExpr(value, section_0) {
    this._value_19 = value;
    this._section_36 = section_0;
  }
  StringExpr.prototype._get_section__0_k$ = function () {
    return this._section_36;
  };
  StringExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitStringExpr_h98b6g_k$(this);
  };
  StringExpr.prototype.toString = function () {
    return '' + 'StringExpr(value=' + this._value_19 + ', section=' + this._section_36 + ')';
  };
  StringExpr.prototype.hashCode = function () {
    var result = getStringHashCode(this._value_19);
    result = imul(result, 31) + this._section_36.hashCode() | 0;
    return result;
  };
  StringExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StringExpr ? other : THROW_CCE();
    if (!(this._value_19 === tmp0_other_with_cast._value_19))
      return false;
    if (!this._section_36.equals(tmp0_other_with_cast._section_36))
      return false;
    return true;
  };
  StringExpr.$metadata$ = {
    simpleName: 'StringExpr',
    kind: 'class',
    interfaces: [ConstExpr]
  };
  function ThisExpr(section_0) {
    this._section_37 = section_0;
  }
  ThisExpr.prototype._get_section__0_k$ = function () {
    return this._section_37;
  };
  ThisExpr.prototype.accept_258a0l_k$ = function (visitor) {
    return visitor.visitThisExpr_kvf49x_k$(this);
  };
  ThisExpr.prototype.toString = function () {
    return '' + 'ThisExpr(section=' + this._section_37 + ')';
  };
  ThisExpr.prototype.hashCode = function () {
    return this._section_37.hashCode();
  };
  ThisExpr.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ThisExpr))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ThisExpr ? other : THROW_CCE();
    if (!this._section_37.equals(tmp0_other_with_cast._section_37))
      return false;
    return true;
  };
  ThisExpr.$metadata$ = {
    simpleName: 'ThisExpr',
    kind: 'class',
    interfaces: [Expr]
  };
  function NodeVisitor() {
  }
  NodeVisitor.$metadata$ = {
    simpleName: 'NodeVisitor',
    kind: 'interface',
    interfaces: []
  };
  function Companion_22() {
    Companion_instance_21 = this;
  }
  Companion_22.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: [Deserializer]
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_22();
    return Companion_instance_21;
  }
  function CompiledFunction(parametersId, nameConst, bodyId) {
    Companion_getInstance_21();
    this._parametersId = parametersId;
    this._nameConst = nameConst;
    this._bodyId = bodyId;
  }
  CompiledFunction.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeInt_ha5a7z_k$(this._parametersId).writeInt_ha5a7z_k$(this._nameConst).writeInt_ha5a7z_k$(this._bodyId);
    Unit_getInstance();
  };
  CompiledFunction.prototype.component1_0_k$ = function () {
    return this._parametersId;
  };
  CompiledFunction.prototype.component3_0_k$ = function () {
    return this._bodyId;
  };
  CompiledFunction.prototype.toString = function () {
    return '' + 'CompiledFunction(parametersId=' + this._parametersId + ', nameConst=' + this._nameConst + ', bodyId=' + this._bodyId + ')';
  };
  CompiledFunction.prototype.hashCode = function () {
    var result = this._parametersId;
    result = imul(result, 31) + this._nameConst | 0;
    result = imul(result, 31) + this._bodyId | 0;
    return result;
  };
  CompiledFunction.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompiledFunction))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompiledFunction ? other : THROW_CCE();
    if (!(this._parametersId === tmp0_other_with_cast._parametersId))
      return false;
    if (!(this._nameConst === tmp0_other_with_cast._nameConst))
      return false;
    if (!(this._bodyId === tmp0_other_with_cast._bodyId))
      return false;
    return true;
  };
  CompiledFunction.$metadata$ = {
    simpleName: 'CompiledFunction',
    kind: 'class',
    interfaces: [Serializable_0]
  };
  function Companion_23() {
    Companion_instance_22 = this;
  }
  Companion_23.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: [Deserializer]
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_23();
    return Companion_instance_22;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this._function_2 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_1qgdm_k$ = function (a, b) {
    return this._function_2(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_1qgdm_k$(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = {
    simpleName: 'sam$kotlin_Comparator$0',
    kind: 'class',
    interfaces: [Comparator]
  };
  function _no_name_provided__36() {
  }
  _no_name_provided__36.prototype.invoke_l1ji3k_k$ = function (a, b) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = a._code;
        break $l$block;
      }
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = b._code;
        break $l$block_0;
      }
      tmp$ret$2 = compareValues(tmp, tmp$ret$1);
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  _no_name_provided__36.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = p1 instanceof JumpLabel ? p1 : THROW_CCE();
    return this.invoke_l1ji3k_k$(tmp, p2 instanceof JumpLabel ? p2 : THROW_CCE());
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__37($code) {
    this._$code = $code;
  }
  _no_name_provided__37.prototype.invoke_p67int_k$ = function (it) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = it._code;
      break $l$block;
    }
    return compareValues(tmp$ret$0, this._$code);
  };
  _no_name_provided__37.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_p67int_k$(p1 instanceof JumpLabel ? p1 : THROW_CCE());
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CompiledNode(instructions, jumpLabels) {
    Companion_getInstance_22();
    this._instructions = instructions;
    this._jumpLabels = jumpLabels;
  }
  CompiledNode.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeInt_ha5a7z_k$(this._instructions._get_size__0_k$());
    Unit_getInstance();
    var tmp0_iterator = this._instructions.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var insn = tmp0_iterator.next_0_k$();
      insn.serializeTo_vy2nus_k$(buffer);
    }
    buffer.writeInt_ha5a7z_k$(this._jumpLabels._get_size__0_k$());
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_sortedBy_0 = this._jumpLabels;
      var tmp$ret$0;
      $l$block: {
        var tmp = _no_name_provided_$factory_30();
        tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
        break $l$block;
      }
      tmp$ret$1 = sortedWith(tmp0_sortedBy_0, tmp$ret$0);
      break $l$block_0;
    }
    var tmp1_iterator = tmp$ret$1.iterator_0_k$();
    while (tmp1_iterator.hasNext_0_k$()) {
      var label = tmp1_iterator.next_0_k$();
      label.serializeTo_vy2nus_k$(buffer);
    }
  };
  CompiledNode.prototype.resolveLabel_ha5a7z_k$ = function (code) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_binarySearchBy_0 = this._jumpLabels;
      var tmp1_binarySearchBy_0 = tmp0_binarySearchBy_0._get_size__0_k$();
      tmp$ret$0 = binarySearch(tmp0_binarySearchBy_0, 0, tmp1_binarySearchBy_0, _no_name_provided_$factory_31(code));
      break $l$block;
    }
    var indexOf_2 = tmp$ret$0;
    {
      var tmp2_check_0 = indexOf_2 >= 0;
      {
      }
      if (!tmp2_check_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = '' + 'Label ' + code + ' was not found.';
          break $l$block_0;
        }
        var message_1 = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      }}
    return this._jumpLabels.get_ha5a7z_k$(indexOf_2)._at;
  };
  CompiledNode.prototype.toString = function () {
    return '' + 'CompiledNode(instructions=' + this._instructions + ', jumpLabels=' + this._jumpLabels + ')';
  };
  CompiledNode.prototype.hashCode = function () {
    var result = hashCode(this._instructions);
    result = imul(result, 31) + hashCode(this._jumpLabels) | 0;
    return result;
  };
  CompiledNode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompiledNode))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompiledNode ? other : THROW_CCE();
    if (!equals_0(this._instructions, tmp0_other_with_cast._instructions))
      return false;
    if (!equals_0(this._jumpLabels, tmp0_other_with_cast._jumpLabels))
      return false;
    return true;
  };
  CompiledNode.$metadata$ = {
    simpleName: 'CompiledNode',
    kind: 'class',
    interfaces: [Serializable_0]
  };
  function _no_name_provided_$factory_30() {
    var i = new _no_name_provided__36();
    return function (p1, p2) {
      return i.invoke_l1ji3k_k$(p1, p2);
    };
  }
  function _no_name_provided_$factory_31($code) {
    var i = new _no_name_provided__37($code);
    return function (p1) {
      return i.invoke_p67int_k$(p1);
    };
  }
  function Companion_24() {
    Companion_instance_23 = this;
  }
  Companion_24.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: [Deserializer]
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_24();
    return Companion_instance_23;
  }
  function CompiledParameter(nameConst, varargs, defaultValueNodeId) {
    Companion_getInstance_23();
    this._nameConst_0 = nameConst;
    this._varargs_0 = varargs;
    this._defaultValueNodeId = defaultValueNodeId;
  }
  CompiledParameter.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeInt_ha5a7z_k$(this._nameConst_0).writeByte_ha5a7z_k$(this._varargs_0 ? 1 : 0).writeInt_ha5a7z_k$(this._defaultValueNodeId);
    Unit_getInstance();
  };
  CompiledParameter.prototype.toString = function () {
    return '' + 'CompiledParameter(nameConst=' + this._nameConst_0 + ', varargs=' + this._varargs_0 + ', defaultValueNodeId=' + this._defaultValueNodeId + ')';
  };
  CompiledParameter.prototype.hashCode = function () {
    var result = this._nameConst_0;
    result = imul(result, 31) + (this._varargs_0 | 0) | 0;
    result = imul(result, 31) + this._defaultValueNodeId | 0;
    return result;
  };
  CompiledParameter.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompiledParameter))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompiledParameter ? other : THROW_CCE();
    if (!(this._nameConst_0 === tmp0_other_with_cast._nameConst_0))
      return false;
    if (!(this._varargs_0 === tmp0_other_with_cast._varargs_0))
      return false;
    if (!(this._defaultValueNodeId === tmp0_other_with_cast._defaultValueNodeId))
      return false;
    return true;
  };
  CompiledParameter.$metadata$ = {
    simpleName: 'CompiledParameter',
    kind: 'class',
    interfaces: [Serializable_0]
  };
  function Companion_25() {
    Companion_instance_24 = this;
  }
  Companion_25.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: [Deserializer]
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_25();
    return Companion_instance_24;
  }
  function CompiledSection(pathConst, nameConst, index, length) {
    Companion_getInstance_24();
    this._pathConst = pathConst;
    this._nameConst_1 = nameConst;
    this._index_4 = index;
    this._length_1 = length;
  }
  CompiledSection.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeInt_ha5a7z_k$(this._pathConst).writeInt_ha5a7z_k$(this._nameConst_1).writeInt_ha5a7z_k$(this._index_4).writeInt_ha5a7z_k$(this._length_1);
    Unit_getInstance();
  };
  CompiledSection.prototype.toString = function () {
    return '' + 'CompiledSection(pathConst=' + this._pathConst + ', nameConst=' + this._nameConst_1 + ', index=' + this._index_4 + ', length=' + this._length_1 + ')';
  };
  CompiledSection.prototype.hashCode = function () {
    var result = this._pathConst;
    result = imul(result, 31) + this._nameConst_1 | 0;
    result = imul(result, 31) + this._index_4 | 0;
    result = imul(result, 31) + this._length_1 | 0;
    return result;
  };
  CompiledSection.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompiledSection))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompiledSection ? other : THROW_CCE();
    if (!(this._pathConst === tmp0_other_with_cast._pathConst))
      return false;
    if (!(this._nameConst_1 === tmp0_other_with_cast._nameConst_1))
      return false;
    if (!(this._index_4 === tmp0_other_with_cast._index_4))
      return false;
    if (!(this._length_1 === tmp0_other_with_cast._length_1))
      return false;
    return true;
  };
  CompiledSection.$metadata$ = {
    simpleName: 'CompiledSection',
    kind: 'class',
    interfaces: [Serializable_0]
  };
  function Companion_26() {
    Companion_instance_25 = this;
  }
  Companion_26.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: [Deserializer]
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_26();
    return Companion_instance_25;
  }
  function CompiledSource(longPool, stringPool, functionParameters, functions, nodes) {
    Companion_getInstance_25();
    this._longPool = longPool;
    this._stringPool = stringPool;
    this._functionParameters = functionParameters;
    this._functions = functions;
    this._nodes = nodes;
  }
  CompiledSource.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeInt_ha5a7z_k$(this._longPool._get_size__0_k$());
    Unit_getInstance();
    var tmp0_iterator = this._longPool.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var l = tmp0_iterator.next_0_k$();
      buffer.writeLong_wiekkq_k$(l);
      Unit_getInstance();
    }
    buffer.writeInt_ha5a7z_k$(this._stringPool._get_size__0_k$());
    Unit_getInstance();
    var tmp1_iterator = this._stringPool.iterator_0_k$();
    while (tmp1_iterator.hasNext_0_k$()) {
      var s = tmp1_iterator.next_0_k$();
      var encoded = Companion_getInstance_19().encodeUtf8_uk8unn_k$(s);
      buffer.writeInt_ha5a7z_k$(encoded._get_size__0_k$()).write_ugqkca_k$(encoded);
      Unit_getInstance();
    }
    buffer.writeInt_ha5a7z_k$(this._functionParameters._get_size__0_k$());
    Unit_getInstance();
    var tmp2_iterator = this._functionParameters.iterator_0_k$();
    while (tmp2_iterator.hasNext_0_k$()) {
      var list = tmp2_iterator.next_0_k$();
      buffer.writeInt_ha5a7z_k$(list._get_size__0_k$());
      Unit_getInstance();
      var tmp3_iterator = list.iterator_0_k$();
      while (tmp3_iterator.hasNext_0_k$()) {
        var parameter = tmp3_iterator.next_0_k$();
        parameter.serializeTo_vy2nus_k$(buffer);
      }
    }
    buffer.writeInt_ha5a7z_k$(this._functions._get_size__0_k$());
    Unit_getInstance();
    var tmp4_iterator = this._functions.iterator_0_k$();
    while (tmp4_iterator.hasNext_0_k$()) {
      var function_0 = tmp4_iterator.next_0_k$();
      function_0.serializeTo_vy2nus_k$(buffer);
    }
    buffer.writeInt_ha5a7z_k$(this._nodes._get_size__0_k$());
    Unit_getInstance();
    var tmp5_iterator = this._nodes.iterator_0_k$();
    while (tmp5_iterator.hasNext_0_k$()) {
      var node = tmp5_iterator.next_0_k$();
      node.serializeTo_vy2nus_k$(buffer);
    }
  };
  CompiledSource.prototype.longConstOrNull_ha5a7z_k$ = function (index) {
    return getOrNull(this._longPool, index);
  };
  CompiledSource.prototype.longConst_ha5a7z_k$ = function (index) {
    var tmp0_elvis_lhs = this.longConstOrNull_ha5a7z_k$(index);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new IllegalConstantIndexException(index);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  CompiledSource.prototype.stringConstOrNull_ha5a7z_k$ = function (index) {
    return getOrNull(this._stringPool, index);
  };
  CompiledSource.prototype.stringConst_ha5a7z_k$ = function (index) {
    var tmp0_elvis_lhs = this.stringConstOrNull_ha5a7z_k$(index);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new IllegalConstantIndexException(index);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  CompiledSource.prototype.toString = function () {
    return '' + 'CompiledSource(longPool=' + this._longPool + ', stringPool=' + this._stringPool + ', functionParameters=' + this._functionParameters + ', functions=' + this._functions + ', nodes=' + this._nodes + ')';
  };
  CompiledSource.prototype.hashCode = function () {
    var result = hashCode(this._longPool);
    result = imul(result, 31) + hashCode(this._stringPool) | 0;
    result = imul(result, 31) + hashCode(this._functionParameters) | 0;
    result = imul(result, 31) + hashCode(this._functions) | 0;
    result = imul(result, 31) + hashCode(this._nodes) | 0;
    return result;
  };
  CompiledSource.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompiledSource))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompiledSource ? other : THROW_CCE();
    if (!equals_0(this._longPool, tmp0_other_with_cast._longPool))
      return false;
    if (!equals_0(this._stringPool, tmp0_other_with_cast._stringPool))
      return false;
    if (!equals_0(this._functionParameters, tmp0_other_with_cast._functionParameters))
      return false;
    if (!equals_0(this._functions, tmp0_other_with_cast._functions))
      return false;
    if (!equals_0(this._nodes, tmp0_other_with_cast._nodes))
      return false;
    return true;
  };
  CompiledSource.$metadata$ = {
    simpleName: 'CompiledSource',
    kind: 'class',
    interfaces: [Serializable_0]
  };
  function Companion_27() {
    Companion_instance_26 = this;
  }
  Companion_27.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: [Deserializer]
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_27();
    return Companion_instance_26;
  }
  function JumpLabel(code, at) {
    Companion_getInstance_26();
    this._code = code;
    this._at = at;
  }
  JumpLabel.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeInt_ha5a7z_k$(this._code).writeInt_ha5a7z_k$(this._at);
    Unit_getInstance();
  };
  JumpLabel.prototype.toString = function () {
    return '' + 'JumpLabel(code=' + this._code + ', at=' + this._at + ')';
  };
  JumpLabel.prototype.hashCode = function () {
    var result = this._code;
    result = imul(result, 31) + this._at | 0;
    return result;
  };
  JumpLabel.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JumpLabel))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof JumpLabel ? other : THROW_CCE();
    if (!(this._code === tmp0_other_with_cast._code))
      return false;
    if (!(this._at === tmp0_other_with_cast._at))
      return false;
    return true;
  };
  JumpLabel.$metadata$ = {
    simpleName: 'JumpLabel',
    kind: 'class',
    interfaces: [Serializable_0]
  };
  function ArrayInsertInsn() {
    ArrayInsertInsn_instance = this;
    Insn.call(this);
  }
  ArrayInsertInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_ARRAY_INSERT_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  ArrayInsertInsn.$metadata$ = {
    simpleName: 'ArrayInsertInsn',
    kind: 'object',
    interfaces: []
  };
  var ArrayInsertInsn_instance;
  function ArrayInsertInsn_getInstance() {
    if (ArrayInsertInsn_instance == null)
      new ArrayInsertInsn();
    return ArrayInsertInsn_instance;
  }
  function AssignInsn(nameConst) {
    Insn.call(this);
    this._nameConst_2 = nameConst;
  }
  AssignInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_ASSIGN_getInstance()._get_ordinal__0_k$()), this._nameConst_2);
    Unit_getInstance();
  };
  AssignInsn.prototype.toString = function () {
    return '' + 'AssignInsn(nameConst=' + this._nameConst_2 + ')';
  };
  AssignInsn.prototype.hashCode = function () {
    return this._nameConst_2;
  };
  AssignInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AssignInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof AssignInsn ? other : THROW_CCE();
    if (!(this._nameConst_2 === tmp0_other_with_cast._nameConst_2))
      return false;
    return true;
  };
  AssignInsn.$metadata$ = {
    simpleName: 'AssignInsn',
    kind: 'class',
    interfaces: []
  };
  function BinaryAddOperationInsn() {
    BinaryAddOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryAddOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_ADD_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryAddOperationInsn.$metadata$ = {
    simpleName: 'BinaryAddOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryAddOperationInsn_instance;
  function BinaryAddOperationInsn_getInstance() {
    if (BinaryAddOperationInsn_instance == null)
      new BinaryAddOperationInsn();
    return BinaryAddOperationInsn_instance;
  }
  function BinaryDivideOperationInsn() {
    BinaryDivideOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryDivideOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_DIVIDE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryDivideOperationInsn.$metadata$ = {
    simpleName: 'BinaryDivideOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryDivideOperationInsn_instance;
  function BinaryDivideOperationInsn_getInstance() {
    if (BinaryDivideOperationInsn_instance == null)
      new BinaryDivideOperationInsn();
    return BinaryDivideOperationInsn_instance;
  }
  function BinaryEqualsOperationInsn() {
    BinaryEqualsOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryEqualsOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_EQUALS_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryEqualsOperationInsn.$metadata$ = {
    simpleName: 'BinaryEqualsOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryEqualsOperationInsn_instance;
  function BinaryEqualsOperationInsn_getInstance() {
    if (BinaryEqualsOperationInsn_instance == null)
      new BinaryEqualsOperationInsn();
    return BinaryEqualsOperationInsn_instance;
  }
  function BinaryGtOperationInsn() {
    BinaryGtOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryGtOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_GT_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryGtOperationInsn.$metadata$ = {
    simpleName: 'BinaryGtOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryGtOperationInsn_instance;
  function BinaryGtOperationInsn_getInstance() {
    if (BinaryGtOperationInsn_instance == null)
      new BinaryGtOperationInsn();
    return BinaryGtOperationInsn_instance;
  }
  function BinaryGteOperationInsn() {
    BinaryGteOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryGteOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_GTE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryGteOperationInsn.$metadata$ = {
    simpleName: 'BinaryGteOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryGteOperationInsn_instance;
  function BinaryGteOperationInsn_getInstance() {
    if (BinaryGteOperationInsn_instance == null)
      new BinaryGteOperationInsn();
    return BinaryGteOperationInsn_instance;
  }
  function BinaryInOperationInsn() {
    BinaryInOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryInOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_IN_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryInOperationInsn.$metadata$ = {
    simpleName: 'BinaryInOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryInOperationInsn_instance;
  function BinaryInOperationInsn_getInstance() {
    if (BinaryInOperationInsn_instance == null)
      new BinaryInOperationInsn();
    return BinaryInOperationInsn_instance;
  }
  function BinaryLtOperationInsn() {
    BinaryLtOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryLtOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_LT_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryLtOperationInsn.$metadata$ = {
    simpleName: 'BinaryLtOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryLtOperationInsn_instance;
  function BinaryLtOperationInsn_getInstance() {
    if (BinaryLtOperationInsn_instance == null)
      new BinaryLtOperationInsn();
    return BinaryLtOperationInsn_instance;
  }
  function BinaryLteOperationInsn() {
    BinaryLteOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryLteOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_LTE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryLteOperationInsn.$metadata$ = {
    simpleName: 'BinaryLteOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryLteOperationInsn_instance;
  function BinaryLteOperationInsn_getInstance() {
    if (BinaryLteOperationInsn_instance == null)
      new BinaryLteOperationInsn();
    return BinaryLteOperationInsn_instance;
  }
  function BinaryMultiplyOperationInsn() {
    BinaryMultiplyOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryMultiplyOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_MULTIPLY_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryMultiplyOperationInsn.$metadata$ = {
    simpleName: 'BinaryMultiplyOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryMultiplyOperationInsn_instance;
  function BinaryMultiplyOperationInsn_getInstance() {
    if (BinaryMultiplyOperationInsn_instance == null)
      new BinaryMultiplyOperationInsn();
    return BinaryMultiplyOperationInsn_instance;
  }
  function BinaryNotEqualsOperationInsn() {
    BinaryNotEqualsOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryNotEqualsOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_NOT_EQUALS_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryNotEqualsOperationInsn.$metadata$ = {
    simpleName: 'BinaryNotEqualsOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryNotEqualsOperationInsn_instance;
  function BinaryNotEqualsOperationInsn_getInstance() {
    if (BinaryNotEqualsOperationInsn_instance == null)
      new BinaryNotEqualsOperationInsn();
    return BinaryNotEqualsOperationInsn_instance;
  }
  function BinaryRangeOperationInsn() {
    BinaryRangeOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryRangeOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_RANGE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryRangeOperationInsn.$metadata$ = {
    simpleName: 'BinaryRangeOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryRangeOperationInsn_instance;
  function BinaryRangeOperationInsn_getInstance() {
    if (BinaryRangeOperationInsn_instance == null)
      new BinaryRangeOperationInsn();
    return BinaryRangeOperationInsn_instance;
  }
  function BinaryRemainingOperationInsn() {
    BinaryRemainingOperationInsn_instance = this;
    Insn.call(this);
  }
  BinaryRemainingOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_REMAINING_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinaryRemainingOperationInsn.$metadata$ = {
    simpleName: 'BinaryRemainingOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinaryRemainingOperationInsn_instance;
  function BinaryRemainingOperationInsn_getInstance() {
    if (BinaryRemainingOperationInsn_instance == null)
      new BinaryRemainingOperationInsn();
    return BinaryRemainingOperationInsn_instance;
  }
  function BinarySubtractOperationInsn() {
    BinarySubtractOperationInsn_instance = this;
    Insn.call(this);
  }
  BinarySubtractOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BINARY_SUBTRACT_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BinarySubtractOperationInsn.$metadata$ = {
    simpleName: 'BinarySubtractOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var BinarySubtractOperationInsn_instance;
  function BinarySubtractOperationInsn_getInstance() {
    if (BinarySubtractOperationInsn_instance == null)
      new BinarySubtractOperationInsn();
    return BinarySubtractOperationInsn_instance;
  }
  function BranchIfInsn(value, labelCode) {
    Insn.call(this);
    this._value_20 = value;
    this._labelCode = labelCode;
  }
  BranchIfInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$((this._value_20 ? Opcode_BRANCH_IF_TRUE_getInstance() : Opcode_BRANCH_IF_FALSE_getInstance())._get_ordinal__0_k$()), this._labelCode);
    Unit_getInstance();
  };
  BranchIfInsn.prototype.toString = function () {
    return '' + 'BranchIfInsn(value=' + this._value_20 + ', labelCode=' + this._labelCode + ')';
  };
  BranchIfInsn.prototype.hashCode = function () {
    var result = this._value_20 | 0;
    result = imul(result, 31) + this._labelCode | 0;
    return result;
  };
  BranchIfInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BranchIfInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof BranchIfInsn ? other : THROW_CCE();
    if (!(this._value_20 === tmp0_other_with_cast._value_20))
      return false;
    if (!(this._labelCode === tmp0_other_with_cast._labelCode))
      return false;
    return true;
  };
  BranchIfInsn.$metadata$ = {
    simpleName: 'BranchIfInsn',
    kind: 'class',
    interfaces: []
  };
  function BreakInsn() {
    BreakInsn_instance = this;
    Insn.call(this);
  }
  BreakInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_BREAK_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  BreakInsn.$metadata$ = {
    simpleName: 'BreakInsn',
    kind: 'object',
    interfaces: []
  };
  var BreakInsn_instance;
  function BreakInsn_getInstance() {
    if (BreakInsn_instance == null)
      new BreakInsn();
    return BreakInsn_instance;
  }
  function ContinueInsn() {
    ContinueInsn_instance = this;
    Insn.call(this);
  }
  ContinueInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_CONTINUE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  ContinueInsn.$metadata$ = {
    simpleName: 'ContinueInsn',
    kind: 'object',
    interfaces: []
  };
  var ContinueInsn_instance;
  function ContinueInsn_getInstance() {
    if (ContinueInsn_instance == null)
      new ContinueInsn();
    return ContinueInsn_instance;
  }
  function DeclareVariableInsn(nameConst, mutable) {
    Insn.call(this);
    this._nameConst_3 = nameConst;
    this._mutable_0 = mutable;
  }
  DeclareVariableInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$((this._mutable_0 ? Opcode_DECLARE_VARIABLE_MUTABLE_getInstance() : Opcode_DECLARE_VARIABLE_IMMUTABLE_getInstance())._get_ordinal__0_k$()), this._nameConst_3);
    Unit_getInstance();
  };
  DeclareVariableInsn.prototype.toString = function () {
    return '' + 'DeclareVariableInsn(nameConst=' + this._nameConst_3 + ', mutable=' + this._mutable_0 + ')';
  };
  DeclareVariableInsn.prototype.hashCode = function () {
    var result = this._nameConst_3;
    result = imul(result, 31) + (this._mutable_0 | 0) | 0;
    return result;
  };
  DeclareVariableInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeclareVariableInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DeclareVariableInsn ? other : THROW_CCE();
    if (!(this._nameConst_3 === tmp0_other_with_cast._nameConst_3))
      return false;
    if (!(this._mutable_0 === tmp0_other_with_cast._mutable_0))
      return false;
    return true;
  };
  DeclareVariableInsn.$metadata$ = {
    simpleName: 'DeclareVariableInsn',
    kind: 'class',
    interfaces: []
  };
  function DupInsn() {
    DupInsn_instance = this;
    Insn.call(this);
  }
  DupInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_DUP_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  DupInsn.$metadata$ = {
    simpleName: 'DupInsn',
    kind: 'object',
    interfaces: []
  };
  var DupInsn_instance;
  function DupInsn_getInstance() {
    if (DupInsn_instance == null)
      new DupInsn();
    return DupInsn_instance;
  }
  function GetMemberPropertyInsn(nameConst) {
    Insn.call(this);
    this._nameConst_4 = nameConst;
  }
  GetMemberPropertyInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_GET_MEMBER_PROPERTY_getInstance()._get_ordinal__0_k$()), this._nameConst_4);
    Unit_getInstance();
  };
  GetMemberPropertyInsn.prototype.toString = function () {
    return '' + 'GetMemberPropertyInsn(nameConst=' + this._nameConst_4 + ')';
  };
  GetMemberPropertyInsn.prototype.hashCode = function () {
    return this._nameConst_4;
  };
  GetMemberPropertyInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetMemberPropertyInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof GetMemberPropertyInsn ? other : THROW_CCE();
    if (!(this._nameConst_4 === tmp0_other_with_cast._nameConst_4))
      return false;
    return true;
  };
  GetMemberPropertyInsn.$metadata$ = {
    simpleName: 'GetMemberPropertyInsn',
    kind: 'class',
    interfaces: []
  };
  function GetSubscriptInsn(size) {
    Insn.call(this);
    this._size_1 = size;
  }
  GetSubscriptInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeByte_ha5a7z_k$(Opcode_GET_SUBSCRIPT_getInstance()._get_ordinal__0_k$()).writeShort_ha5a7z_k$(0).writeByte_ha5a7z_k$(this._size_1);
    Unit_getInstance();
  };
  GetSubscriptInsn.prototype.toString = function () {
    return '' + 'GetSubscriptInsn(size=' + this._size_1 + ')';
  };
  GetSubscriptInsn.prototype.hashCode = function () {
    return this._size_1;
  };
  GetSubscriptInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetSubscriptInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof GetSubscriptInsn ? other : THROW_CCE();
    if (!(this._size_1 === tmp0_other_with_cast._size_1))
      return false;
    return true;
  };
  GetSubscriptInsn.$metadata$ = {
    simpleName: 'GetSubscriptInsn',
    kind: 'class',
    interfaces: []
  };
  function GetVariableInsn(nameConst) {
    Insn.call(this);
    this._nameConst_5 = nameConst;
  }
  GetVariableInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_GET_VARIABLE_getInstance()._get_ordinal__0_k$()), this._nameConst_5);
    Unit_getInstance();
  };
  GetVariableInsn.prototype.toString = function () {
    return '' + 'GetVariableInsn(nameConst=' + this._nameConst_5 + ')';
  };
  GetVariableInsn.prototype.hashCode = function () {
    return this._nameConst_5;
  };
  GetVariableInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GetVariableInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof GetVariableInsn ? other : THROW_CCE();
    if (!(this._nameConst_5 === tmp0_other_with_cast._nameConst_5))
      return false;
    return true;
  };
  GetVariableInsn.$metadata$ = {
    simpleName: 'GetVariableInsn',
    kind: 'class',
    interfaces: []
  };
  var Opcode_PARAMETERLESS_instance;
  var Opcode_ASSIGN_instance;
  var Opcode_BRANCH_IF_FALSE_instance;
  var Opcode_BRANCH_IF_TRUE_instance;
  var Opcode_DECLARE_VARIABLE_IMMUTABLE_instance;
  var Opcode_DECLARE_VARIABLE_MUTABLE_instance;
  var Opcode_GET_MEMBER_PROPERTY_instance;
  var Opcode_GET_SUBSCRIPT_instance;
  var Opcode_GET_VARIABLE_instance;
  var Opcode_INVOKE_instance;
  var Opcode_INVOKE_LOCAL_instance;
  var Opcode_INVOKE_MEMBER_instance;
  var Opcode_JUMP_instance;
  var Opcode_LOAD_DECIMAL_instance;
  var Opcode_LOAD_INTEGER_instance;
  var Opcode_LOAD_STRING_instance;
  var Opcode_NEW_FUNCTION_instance;
  var Opcode_PUSH_DECIMAL_instance;
  var Opcode_PUSH_INTEGER_instance;
  var Opcode_PUSH_EXCEPTION_HANDLING_instance;
  var Opcode_PUSH_LOOP_HANDLING_instance;
  var Opcode_SET_MEMBER_PROPERTY_instance;
  var Opcode_SET_SUBSCRIPT_instance;
  var Opcode_SET_VARIABLE_instance;
  var Opcode_entriesInitialized;
  function Opcode_initEntries() {
    if (Opcode_entriesInitialized)
      return Unit_getInstance();
    Opcode_entriesInitialized = true;
    Opcode_PARAMETERLESS_instance = new Opcode('PARAMETERLESS', 0);
    Opcode_ASSIGN_instance = new Opcode('ASSIGN', 1);
    Opcode_BRANCH_IF_FALSE_instance = new Opcode('BRANCH_IF_FALSE', 2);
    Opcode_BRANCH_IF_TRUE_instance = new Opcode('BRANCH_IF_TRUE', 3);
    Opcode_DECLARE_VARIABLE_IMMUTABLE_instance = new Opcode('DECLARE_VARIABLE_IMMUTABLE', 4);
    Opcode_DECLARE_VARIABLE_MUTABLE_instance = new Opcode('DECLARE_VARIABLE_MUTABLE', 5);
    Opcode_GET_MEMBER_PROPERTY_instance = new Opcode('GET_MEMBER_PROPERTY', 6);
    Opcode_GET_SUBSCRIPT_instance = new Opcode('GET_SUBSCRIPT', 7);
    Opcode_GET_VARIABLE_instance = new Opcode('GET_VARIABLE', 8);
    Opcode_INVOKE_instance = new Opcode('INVOKE', 9);
    Opcode_INVOKE_LOCAL_instance = new Opcode('INVOKE_LOCAL', 10);
    Opcode_INVOKE_MEMBER_instance = new Opcode('INVOKE_MEMBER', 11);
    Opcode_JUMP_instance = new Opcode('JUMP', 12);
    Opcode_LOAD_DECIMAL_instance = new Opcode('LOAD_DECIMAL', 13);
    Opcode_LOAD_INTEGER_instance = new Opcode('LOAD_INTEGER', 14);
    Opcode_LOAD_STRING_instance = new Opcode('LOAD_STRING', 15);
    Opcode_NEW_FUNCTION_instance = new Opcode('NEW_FUNCTION', 16);
    Opcode_PUSH_DECIMAL_instance = new Opcode('PUSH_DECIMAL', 17);
    Opcode_PUSH_INTEGER_instance = new Opcode('PUSH_INTEGER', 18);
    Opcode_PUSH_EXCEPTION_HANDLING_instance = new Opcode('PUSH_EXCEPTION_HANDLING', 19);
    Opcode_PUSH_LOOP_HANDLING_instance = new Opcode('PUSH_LOOP_HANDLING', 20);
    Opcode_SET_MEMBER_PROPERTY_instance = new Opcode('SET_MEMBER_PROPERTY', 21);
    Opcode_SET_SUBSCRIPT_instance = new Opcode('SET_SUBSCRIPT', 22);
    Opcode_SET_VARIABLE_instance = new Opcode('SET_VARIABLE', 23);
  }
  var ParameterlessCode_ARRAY_INSERT_instance;
  var ParameterlessCode_BREAK_instance;
  var ParameterlessCode_CONTINUE_instance;
  var ParameterlessCode_DUP_instance;
  var ParameterlessCode_NEW_ARRAY_instance;
  var ParameterlessCode_NEW_OBJECT_instance;
  var ParameterlessCode_OBJECT_INSERT_instance;
  var ParameterlessCode_POP_instance;
  var ParameterlessCode_POP_SCOPE_instance;
  var ParameterlessCode_POP_EXCEPTION_HANDLING_instance;
  var ParameterlessCode_POP_LOOP_HANDLING_instance;
  var ParameterlessCode_PUSH_NULL_instance;
  var ParameterlessCode_PUSH_SCOPE_instance;
  var ParameterlessCode_PUSH_THIS_instance;
  var ParameterlessCode_RETURN_instance;
  var ParameterlessCode_THROW_instance;
  var ParameterlessCode_TYPEOF_instance;
  var ParameterlessCode_PUSH_TRUE_instance;
  var ParameterlessCode_PUSH_FALSE_instance;
  var ParameterlessCode_UNARY_POSITIVE_instance;
  var ParameterlessCode_UNARY_NEGATIVE_instance;
  var ParameterlessCode_UNARY_TRUTH_instance;
  var ParameterlessCode_UNARY_NOT_instance;
  var ParameterlessCode_BINARY_ADD_instance;
  var ParameterlessCode_BINARY_SUBTRACT_instance;
  var ParameterlessCode_BINARY_MULTIPLY_instance;
  var ParameterlessCode_BINARY_DIVIDE_instance;
  var ParameterlessCode_BINARY_REMAINING_instance;
  var ParameterlessCode_BINARY_EQUALS_instance;
  var ParameterlessCode_BINARY_NOT_EQUALS_instance;
  var ParameterlessCode_BINARY_LT_instance;
  var ParameterlessCode_BINARY_LTE_instance;
  var ParameterlessCode_BINARY_GT_instance;
  var ParameterlessCode_BINARY_GTE_instance;
  var ParameterlessCode_BINARY_IN_instance;
  var ParameterlessCode_BINARY_RANGE_instance;
  var ParameterlessCode_entriesInitialized;
  function ParameterlessCode_initEntries() {
    if (ParameterlessCode_entriesInitialized)
      return Unit_getInstance();
    ParameterlessCode_entriesInitialized = true;
    ParameterlessCode_ARRAY_INSERT_instance = new ParameterlessCode('ARRAY_INSERT', 0);
    ParameterlessCode_BREAK_instance = new ParameterlessCode('BREAK', 1);
    ParameterlessCode_CONTINUE_instance = new ParameterlessCode('CONTINUE', 2);
    ParameterlessCode_DUP_instance = new ParameterlessCode('DUP', 3);
    ParameterlessCode_NEW_ARRAY_instance = new ParameterlessCode('NEW_ARRAY', 4);
    ParameterlessCode_NEW_OBJECT_instance = new ParameterlessCode('NEW_OBJECT', 5);
    ParameterlessCode_OBJECT_INSERT_instance = new ParameterlessCode('OBJECT_INSERT', 6);
    ParameterlessCode_POP_instance = new ParameterlessCode('POP', 7);
    ParameterlessCode_POP_SCOPE_instance = new ParameterlessCode('POP_SCOPE', 8);
    ParameterlessCode_POP_EXCEPTION_HANDLING_instance = new ParameterlessCode('POP_EXCEPTION_HANDLING', 9);
    ParameterlessCode_POP_LOOP_HANDLING_instance = new ParameterlessCode('POP_LOOP_HANDLING', 10);
    ParameterlessCode_PUSH_NULL_instance = new ParameterlessCode('PUSH_NULL', 11);
    ParameterlessCode_PUSH_SCOPE_instance = new ParameterlessCode('PUSH_SCOPE', 12);
    ParameterlessCode_PUSH_THIS_instance = new ParameterlessCode('PUSH_THIS', 13);
    ParameterlessCode_RETURN_instance = new ParameterlessCode('RETURN', 14);
    ParameterlessCode_THROW_instance = new ParameterlessCode('THROW', 15);
    ParameterlessCode_TYPEOF_instance = new ParameterlessCode('TYPEOF', 16);
    ParameterlessCode_PUSH_TRUE_instance = new ParameterlessCode('PUSH_TRUE', 17);
    ParameterlessCode_PUSH_FALSE_instance = new ParameterlessCode('PUSH_FALSE', 18);
    ParameterlessCode_UNARY_POSITIVE_instance = new ParameterlessCode('UNARY_POSITIVE', 19);
    ParameterlessCode_UNARY_NEGATIVE_instance = new ParameterlessCode('UNARY_NEGATIVE', 20);
    ParameterlessCode_UNARY_TRUTH_instance = new ParameterlessCode('UNARY_TRUTH', 21);
    ParameterlessCode_UNARY_NOT_instance = new ParameterlessCode('UNARY_NOT', 22);
    ParameterlessCode_BINARY_ADD_instance = new ParameterlessCode('BINARY_ADD', 23);
    ParameterlessCode_BINARY_SUBTRACT_instance = new ParameterlessCode('BINARY_SUBTRACT', 24);
    ParameterlessCode_BINARY_MULTIPLY_instance = new ParameterlessCode('BINARY_MULTIPLY', 25);
    ParameterlessCode_BINARY_DIVIDE_instance = new ParameterlessCode('BINARY_DIVIDE', 26);
    ParameterlessCode_BINARY_REMAINING_instance = new ParameterlessCode('BINARY_REMAINING', 27);
    ParameterlessCode_BINARY_EQUALS_instance = new ParameterlessCode('BINARY_EQUALS', 28);
    ParameterlessCode_BINARY_NOT_EQUALS_instance = new ParameterlessCode('BINARY_NOT_EQUALS', 29);
    ParameterlessCode_BINARY_LT_instance = new ParameterlessCode('BINARY_LT', 30);
    ParameterlessCode_BINARY_LTE_instance = new ParameterlessCode('BINARY_LTE', 31);
    ParameterlessCode_BINARY_GT_instance = new ParameterlessCode('BINARY_GT', 32);
    ParameterlessCode_BINARY_GTE_instance = new ParameterlessCode('BINARY_GTE', 33);
    ParameterlessCode_BINARY_IN_instance = new ParameterlessCode('BINARY_IN', 34);
    ParameterlessCode_BINARY_RANGE_instance = new ParameterlessCode('BINARY_RANGE', 35);
  }
  function Opcode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Opcode.$metadata$ = {
    simpleName: 'Opcode',
    kind: 'class',
    interfaces: []
  };
  function ParameterlessCode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ParameterlessCode.$metadata$ = {
    simpleName: 'ParameterlessCode',
    kind: 'class',
    interfaces: []
  };
  function Companion_28() {
    Companion_instance_27 = this;
  }
  Companion_28.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: [Deserializer]
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_28();
    return Companion_instance_27;
  }
  function Opcode_PARAMETERLESS_getInstance() {
    Opcode_initEntries();
    return Opcode_PARAMETERLESS_instance;
  }
  function Opcode_ASSIGN_getInstance() {
    Opcode_initEntries();
    return Opcode_ASSIGN_instance;
  }
  function Opcode_BRANCH_IF_FALSE_getInstance() {
    Opcode_initEntries();
    return Opcode_BRANCH_IF_FALSE_instance;
  }
  function Opcode_BRANCH_IF_TRUE_getInstance() {
    Opcode_initEntries();
    return Opcode_BRANCH_IF_TRUE_instance;
  }
  function Opcode_DECLARE_VARIABLE_IMMUTABLE_getInstance() {
    Opcode_initEntries();
    return Opcode_DECLARE_VARIABLE_IMMUTABLE_instance;
  }
  function Opcode_DECLARE_VARIABLE_MUTABLE_getInstance() {
    Opcode_initEntries();
    return Opcode_DECLARE_VARIABLE_MUTABLE_instance;
  }
  function Opcode_GET_MEMBER_PROPERTY_getInstance() {
    Opcode_initEntries();
    return Opcode_GET_MEMBER_PROPERTY_instance;
  }
  function Opcode_GET_SUBSCRIPT_getInstance() {
    Opcode_initEntries();
    return Opcode_GET_SUBSCRIPT_instance;
  }
  function Opcode_GET_VARIABLE_getInstance() {
    Opcode_initEntries();
    return Opcode_GET_VARIABLE_instance;
  }
  function Opcode_INVOKE_getInstance() {
    Opcode_initEntries();
    return Opcode_INVOKE_instance;
  }
  function Opcode_INVOKE_LOCAL_getInstance() {
    Opcode_initEntries();
    return Opcode_INVOKE_LOCAL_instance;
  }
  function Opcode_INVOKE_MEMBER_getInstance() {
    Opcode_initEntries();
    return Opcode_INVOKE_MEMBER_instance;
  }
  function Opcode_JUMP_getInstance() {
    Opcode_initEntries();
    return Opcode_JUMP_instance;
  }
  function Opcode_LOAD_DECIMAL_getInstance() {
    Opcode_initEntries();
    return Opcode_LOAD_DECIMAL_instance;
  }
  function Opcode_LOAD_INTEGER_getInstance() {
    Opcode_initEntries();
    return Opcode_LOAD_INTEGER_instance;
  }
  function Opcode_LOAD_STRING_getInstance() {
    Opcode_initEntries();
    return Opcode_LOAD_STRING_instance;
  }
  function Opcode_NEW_FUNCTION_getInstance() {
    Opcode_initEntries();
    return Opcode_NEW_FUNCTION_instance;
  }
  function Opcode_PUSH_DECIMAL_getInstance() {
    Opcode_initEntries();
    return Opcode_PUSH_DECIMAL_instance;
  }
  function Opcode_PUSH_INTEGER_getInstance() {
    Opcode_initEntries();
    return Opcode_PUSH_INTEGER_instance;
  }
  function Opcode_PUSH_EXCEPTION_HANDLING_getInstance() {
    Opcode_initEntries();
    return Opcode_PUSH_EXCEPTION_HANDLING_instance;
  }
  function Opcode_PUSH_LOOP_HANDLING_getInstance() {
    Opcode_initEntries();
    return Opcode_PUSH_LOOP_HANDLING_instance;
  }
  function Opcode_SET_MEMBER_PROPERTY_getInstance() {
    Opcode_initEntries();
    return Opcode_SET_MEMBER_PROPERTY_instance;
  }
  function Opcode_SET_SUBSCRIPT_getInstance() {
    Opcode_initEntries();
    return Opcode_SET_SUBSCRIPT_instance;
  }
  function Opcode_SET_VARIABLE_getInstance() {
    Opcode_initEntries();
    return Opcode_SET_VARIABLE_instance;
  }
  function ParameterlessCode_ARRAY_INSERT_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_ARRAY_INSERT_instance;
  }
  function ParameterlessCode_BREAK_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BREAK_instance;
  }
  function ParameterlessCode_CONTINUE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_CONTINUE_instance;
  }
  function ParameterlessCode_DUP_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_DUP_instance;
  }
  function ParameterlessCode_NEW_ARRAY_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_NEW_ARRAY_instance;
  }
  function ParameterlessCode_NEW_OBJECT_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_NEW_OBJECT_instance;
  }
  function ParameterlessCode_OBJECT_INSERT_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_OBJECT_INSERT_instance;
  }
  function ParameterlessCode_POP_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_POP_instance;
  }
  function ParameterlessCode_POP_SCOPE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_POP_SCOPE_instance;
  }
  function ParameterlessCode_POP_EXCEPTION_HANDLING_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_POP_EXCEPTION_HANDLING_instance;
  }
  function ParameterlessCode_POP_LOOP_HANDLING_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_POP_LOOP_HANDLING_instance;
  }
  function ParameterlessCode_PUSH_NULL_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_PUSH_NULL_instance;
  }
  function ParameterlessCode_PUSH_SCOPE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_PUSH_SCOPE_instance;
  }
  function ParameterlessCode_PUSH_THIS_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_PUSH_THIS_instance;
  }
  function ParameterlessCode_RETURN_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_RETURN_instance;
  }
  function ParameterlessCode_THROW_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_THROW_instance;
  }
  function ParameterlessCode_TYPEOF_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_TYPEOF_instance;
  }
  function ParameterlessCode_PUSH_TRUE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_PUSH_TRUE_instance;
  }
  function ParameterlessCode_PUSH_FALSE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_PUSH_FALSE_instance;
  }
  function ParameterlessCode_UNARY_POSITIVE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_UNARY_POSITIVE_instance;
  }
  function ParameterlessCode_UNARY_NEGATIVE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_UNARY_NEGATIVE_instance;
  }
  function ParameterlessCode_UNARY_TRUTH_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_UNARY_TRUTH_instance;
  }
  function ParameterlessCode_UNARY_NOT_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_UNARY_NOT_instance;
  }
  function ParameterlessCode_BINARY_ADD_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_ADD_instance;
  }
  function ParameterlessCode_BINARY_SUBTRACT_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_SUBTRACT_instance;
  }
  function ParameterlessCode_BINARY_MULTIPLY_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_MULTIPLY_instance;
  }
  function ParameterlessCode_BINARY_DIVIDE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_DIVIDE_instance;
  }
  function ParameterlessCode_BINARY_REMAINING_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_REMAINING_instance;
  }
  function ParameterlessCode_BINARY_EQUALS_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_EQUALS_instance;
  }
  function ParameterlessCode_BINARY_NOT_EQUALS_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_NOT_EQUALS_instance;
  }
  function ParameterlessCode_BINARY_LT_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_LT_instance;
  }
  function ParameterlessCode_BINARY_LTE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_LTE_instance;
  }
  function ParameterlessCode_BINARY_GT_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_GT_instance;
  }
  function ParameterlessCode_BINARY_GTE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_GTE_instance;
  }
  function ParameterlessCode_BINARY_IN_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_IN_instance;
  }
  function ParameterlessCode_BINARY_RANGE_getInstance() {
    ParameterlessCode_initEntries();
    return ParameterlessCode_BINARY_RANGE_instance;
  }
  function Insn() {
    Companion_getInstance_27();
  }
  Insn.prototype.toString = function () {
    var tmp0_elvis_lhs = getKClassFromExpression_0(this)._get_simpleName__0_k$();
    return tmp0_elvis_lhs == null ? anyToString(this) : tmp0_elvis_lhs;
  };
  Insn.$metadata$ = {
    simpleName: 'Insn',
    kind: 'class',
    interfaces: [Serializable_0]
  };
  function InvokeInsn(size) {
    Insn.call(this);
    this._size_2 = size;
  }
  InvokeInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeByte_ha5a7z_k$(Opcode_INVOKE_getInstance()._get_ordinal__0_k$()).writeShort_ha5a7z_k$(0).writeByte_ha5a7z_k$(this._size_2);
    Unit_getInstance();
  };
  InvokeInsn.prototype.toString = function () {
    return '' + 'InvokeInsn(size=' + this._size_2 + ')';
  };
  InvokeInsn.prototype.hashCode = function () {
    return this._size_2;
  };
  InvokeInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InvokeInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InvokeInsn ? other : THROW_CCE();
    if (!(this._size_2 === tmp0_other_with_cast._size_2))
      return false;
    return true;
  };
  InvokeInsn.$metadata$ = {
    simpleName: 'InvokeInsn',
    kind: 'class',
    interfaces: []
  };
  function InvokeLocalInsn(nameConst, size) {
    Insn.call(this);
    this._nameConst_6 = nameConst;
    this._size_3 = size;
  }
  InvokeLocalInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeByte_ha5a7z_k$(Opcode_INVOKE_LOCAL_getInstance()._get_ordinal__0_k$()).writeShort_ha5a7z_k$(this._nameConst_6).writeByte_ha5a7z_k$(this._size_3);
    Unit_getInstance();
  };
  InvokeLocalInsn.prototype.toString = function () {
    return '' + 'InvokeLocalInsn(nameConst=' + this._nameConst_6 + ', size=' + this._size_3 + ')';
  };
  InvokeLocalInsn.prototype.hashCode = function () {
    var result = this._nameConst_6;
    result = imul(result, 31) + this._size_3 | 0;
    return result;
  };
  InvokeLocalInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InvokeLocalInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InvokeLocalInsn ? other : THROW_CCE();
    if (!(this._nameConst_6 === tmp0_other_with_cast._nameConst_6))
      return false;
    if (!(this._size_3 === tmp0_other_with_cast._size_3))
      return false;
    return true;
  };
  InvokeLocalInsn.$metadata$ = {
    simpleName: 'InvokeLocalInsn',
    kind: 'class',
    interfaces: []
  };
  function InvokeMemberInsn(nameConst, size) {
    Insn.call(this);
    this._nameConst_7 = nameConst;
    this._size_4 = size;
  }
  InvokeMemberInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeByte_ha5a7z_k$(Opcode_INVOKE_MEMBER_getInstance()._get_ordinal__0_k$()).writeShort_ha5a7z_k$(this._nameConst_7).writeByte_ha5a7z_k$(this._size_4);
    Unit_getInstance();
  };
  InvokeMemberInsn.prototype.toString = function () {
    return '' + 'InvokeMemberInsn(nameConst=' + this._nameConst_7 + ', size=' + this._size_4 + ')';
  };
  InvokeMemberInsn.prototype.hashCode = function () {
    var result = this._nameConst_7;
    result = imul(result, 31) + this._size_4 | 0;
    return result;
  };
  InvokeMemberInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InvokeMemberInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof InvokeMemberInsn ? other : THROW_CCE();
    if (!(this._nameConst_7 === tmp0_other_with_cast._nameConst_7))
      return false;
    if (!(this._size_4 === tmp0_other_with_cast._size_4))
      return false;
    return true;
  };
  InvokeMemberInsn.$metadata$ = {
    simpleName: 'InvokeMemberInsn',
    kind: 'class',
    interfaces: []
  };
  function JumpInsn(labelCode) {
    Insn.call(this);
    this._labelCode_0 = labelCode;
  }
  JumpInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_JUMP_getInstance()._get_ordinal__0_k$()), this._labelCode_0);
    Unit_getInstance();
  };
  JumpInsn.prototype.toString = function () {
    return '' + 'JumpInsn(labelCode=' + this._labelCode_0 + ')';
  };
  JumpInsn.prototype.hashCode = function () {
    return this._labelCode_0;
  };
  JumpInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JumpInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof JumpInsn ? other : THROW_CCE();
    if (!(this._labelCode_0 === tmp0_other_with_cast._labelCode_0))
      return false;
    return true;
  };
  JumpInsn.$metadata$ = {
    simpleName: 'JumpInsn',
    kind: 'class',
    interfaces: []
  };
  function LoadDecimalInsn(valueConst) {
    Insn.call(this);
    this._valueConst = valueConst;
  }
  LoadDecimalInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_LOAD_DECIMAL_getInstance()._get_ordinal__0_k$()), this._valueConst);
    Unit_getInstance();
  };
  LoadDecimalInsn.prototype.toString = function () {
    return '' + 'LoadDecimalInsn(valueConst=' + this._valueConst + ')';
  };
  LoadDecimalInsn.prototype.hashCode = function () {
    return this._valueConst;
  };
  LoadDecimalInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadDecimalInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LoadDecimalInsn ? other : THROW_CCE();
    if (!(this._valueConst === tmp0_other_with_cast._valueConst))
      return false;
    return true;
  };
  LoadDecimalInsn.$metadata$ = {
    simpleName: 'LoadDecimalInsn',
    kind: 'class',
    interfaces: []
  };
  function LoadIntegerInsn(valueConst) {
    Insn.call(this);
    this._valueConst_0 = valueConst;
  }
  LoadIntegerInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_LOAD_INTEGER_getInstance()._get_ordinal__0_k$()), this._valueConst_0);
    Unit_getInstance();
  };
  LoadIntegerInsn.prototype.toString = function () {
    return '' + 'LoadIntegerInsn(valueConst=' + this._valueConst_0 + ')';
  };
  LoadIntegerInsn.prototype.hashCode = function () {
    return this._valueConst_0;
  };
  LoadIntegerInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadIntegerInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LoadIntegerInsn ? other : THROW_CCE();
    if (!(this._valueConst_0 === tmp0_other_with_cast._valueConst_0))
      return false;
    return true;
  };
  LoadIntegerInsn.$metadata$ = {
    simpleName: 'LoadIntegerInsn',
    kind: 'class',
    interfaces: []
  };
  function LoadStringInsn(valueConst) {
    Insn.call(this);
    this._valueConst_1 = valueConst;
  }
  LoadStringInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_LOAD_STRING_getInstance()._get_ordinal__0_k$()), this._valueConst_1);
    Unit_getInstance();
  };
  LoadStringInsn.prototype.toString = function () {
    return '' + 'LoadStringInsn(valueConst=' + this._valueConst_1 + ')';
  };
  LoadStringInsn.prototype.hashCode = function () {
    return this._valueConst_1;
  };
  LoadStringInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadStringInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LoadStringInsn ? other : THROW_CCE();
    if (!(this._valueConst_1 === tmp0_other_with_cast._valueConst_1))
      return false;
    return true;
  };
  LoadStringInsn.$metadata$ = {
    simpleName: 'LoadStringInsn',
    kind: 'class',
    interfaces: []
  };
  function NewArrayInsn() {
    NewArrayInsn_instance = this;
    Insn.call(this);
  }
  NewArrayInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_NEW_ARRAY_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  NewArrayInsn.$metadata$ = {
    simpleName: 'NewArrayInsn',
    kind: 'object',
    interfaces: []
  };
  var NewArrayInsn_instance;
  function NewArrayInsn_getInstance() {
    if (NewArrayInsn_instance == null)
      new NewArrayInsn();
    return NewArrayInsn_instance;
  }
  function NewFunctionInsn(functionId) {
    Insn.call(this);
    this._functionId = functionId;
  }
  NewFunctionInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_NEW_FUNCTION_getInstance()._get_ordinal__0_k$()), this._functionId);
    Unit_getInstance();
  };
  NewFunctionInsn.prototype.toString = function () {
    return '' + 'NewFunctionInsn(functionId=' + this._functionId + ')';
  };
  NewFunctionInsn.prototype.hashCode = function () {
    return this._functionId;
  };
  NewFunctionInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NewFunctionInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof NewFunctionInsn ? other : THROW_CCE();
    if (!(this._functionId === tmp0_other_with_cast._functionId))
      return false;
    return true;
  };
  NewFunctionInsn.$metadata$ = {
    simpleName: 'NewFunctionInsn',
    kind: 'class',
    interfaces: []
  };
  function NewObjectInsn() {
    NewObjectInsn_instance = this;
    Insn.call(this);
  }
  NewObjectInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_NEW_OBJECT_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  NewObjectInsn.$metadata$ = {
    simpleName: 'NewObjectInsn',
    kind: 'object',
    interfaces: []
  };
  var NewObjectInsn_instance;
  function NewObjectInsn_getInstance() {
    if (NewObjectInsn_instance == null)
      new NewObjectInsn();
    return NewObjectInsn_instance;
  }
  function ObjectInsertInsn() {
    ObjectInsertInsn_instance = this;
    Insn.call(this);
  }
  ObjectInsertInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_OBJECT_INSERT_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  ObjectInsertInsn.$metadata$ = {
    simpleName: 'ObjectInsertInsn',
    kind: 'object',
    interfaces: []
  };
  var ObjectInsertInsn_instance;
  function ObjectInsertInsn_getInstance() {
    if (ObjectInsertInsn_instance == null)
      new ObjectInsertInsn();
    return ObjectInsertInsn_instance;
  }
  function PopExceptionHandlingInsn() {
    PopExceptionHandlingInsn_instance = this;
    Insn.call(this);
  }
  PopExceptionHandlingInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_POP_EXCEPTION_HANDLING_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  PopExceptionHandlingInsn.$metadata$ = {
    simpleName: 'PopExceptionHandlingInsn',
    kind: 'object',
    interfaces: []
  };
  var PopExceptionHandlingInsn_instance;
  function PopExceptionHandlingInsn_getInstance() {
    if (PopExceptionHandlingInsn_instance == null)
      new PopExceptionHandlingInsn();
    return PopExceptionHandlingInsn_instance;
  }
  function PopInsn() {
    PopInsn_instance = this;
    Insn.call(this);
  }
  PopInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_POP_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  PopInsn.$metadata$ = {
    simpleName: 'PopInsn',
    kind: 'object',
    interfaces: []
  };
  var PopInsn_instance;
  function PopInsn_getInstance() {
    if (PopInsn_instance == null)
      new PopInsn();
    return PopInsn_instance;
  }
  function PopLoopHandlingInsn() {
    PopLoopHandlingInsn_instance = this;
    Insn.call(this);
  }
  PopLoopHandlingInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_POP_LOOP_HANDLING_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  PopLoopHandlingInsn.$metadata$ = {
    simpleName: 'PopLoopHandlingInsn',
    kind: 'object',
    interfaces: []
  };
  var PopLoopHandlingInsn_instance;
  function PopLoopHandlingInsn_getInstance() {
    if (PopLoopHandlingInsn_instance == null)
      new PopLoopHandlingInsn();
    return PopLoopHandlingInsn_instance;
  }
  function PopScopeInsn() {
    PopScopeInsn_instance = this;
    Insn.call(this);
  }
  PopScopeInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_POP_SCOPE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  PopScopeInsn.$metadata$ = {
    simpleName: 'PopScopeInsn',
    kind: 'object',
    interfaces: []
  };
  var PopScopeInsn_instance;
  function PopScopeInsn_getInstance() {
    if (PopScopeInsn_instance == null)
      new PopScopeInsn();
    return PopScopeInsn_instance;
  }
  function PushBooleanInsn(value) {
    Insn.call(this);
    this._value_21 = value;
  }
  PushBooleanInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), (this._value_21 ? ParameterlessCode_PUSH_TRUE_getInstance() : ParameterlessCode_PUSH_FALSE_getInstance())._get_ordinal__0_k$());
    Unit_getInstance();
  };
  PushBooleanInsn.prototype.toString = function () {
    return '' + 'PushBooleanInsn(value=' + this._value_21 + ')';
  };
  PushBooleanInsn.prototype.hashCode = function () {
    return this._value_21 | 0;
  };
  PushBooleanInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PushBooleanInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PushBooleanInsn ? other : THROW_CCE();
    if (!(this._value_21 === tmp0_other_with_cast._value_21))
      return false;
    return true;
  };
  PushBooleanInsn.$metadata$ = {
    simpleName: 'PushBooleanInsn',
    kind: 'class',
    interfaces: []
  };
  function PushDecimalInsn(immediateValue) {
    Insn.call(this);
    this._immediateValue = immediateValue;
  }
  PushDecimalInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PUSH_DECIMAL_getInstance()._get_ordinal__0_k$()), this._immediateValue);
    Unit_getInstance();
  };
  PushDecimalInsn.prototype.toString = function () {
    return '' + 'PushDecimalInsn(immediateValue=' + this._immediateValue + ')';
  };
  PushDecimalInsn.prototype.hashCode = function () {
    return this._immediateValue;
  };
  PushDecimalInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PushDecimalInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PushDecimalInsn ? other : THROW_CCE();
    if (!(this._immediateValue === tmp0_other_with_cast._immediateValue))
      return false;
    return true;
  };
  PushDecimalInsn.$metadata$ = {
    simpleName: 'PushDecimalInsn',
    kind: 'class',
    interfaces: []
  };
  function PushExceptionHandlingInsn(catchLabel, endLabel) {
    Insn.call(this);
    this._catchLabel = catchLabel;
    this._endLabel = endLabel;
  }
  PushExceptionHandlingInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU12Pair(buffer.writeByte_ha5a7z_k$(Opcode_PUSH_EXCEPTION_HANDLING_getInstance()._get_ordinal__0_k$()), this._catchLabel, this._endLabel);
  };
  PushExceptionHandlingInsn.prototype.toString = function () {
    return '' + 'PushExceptionHandlingInsn(catchLabel=' + this._catchLabel + ', endLabel=' + this._endLabel + ')';
  };
  PushExceptionHandlingInsn.prototype.hashCode = function () {
    var result = this._catchLabel;
    result = imul(result, 31) + this._endLabel | 0;
    return result;
  };
  PushExceptionHandlingInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PushExceptionHandlingInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PushExceptionHandlingInsn ? other : THROW_CCE();
    if (!(this._catchLabel === tmp0_other_with_cast._catchLabel))
      return false;
    if (!(this._endLabel === tmp0_other_with_cast._endLabel))
      return false;
    return true;
  };
  PushExceptionHandlingInsn.$metadata$ = {
    simpleName: 'PushExceptionHandlingInsn',
    kind: 'class',
    interfaces: []
  };
  function PushIntegerInsn(immediateValue) {
    Insn.call(this);
    this._immediateValue_0 = immediateValue;
  }
  PushIntegerInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PUSH_INTEGER_getInstance()._get_ordinal__0_k$()), this._immediateValue_0);
    Unit_getInstance();
  };
  PushIntegerInsn.prototype.toString = function () {
    return '' + 'PushIntegerInsn(immediateValue=' + this._immediateValue_0 + ')';
  };
  PushIntegerInsn.prototype.hashCode = function () {
    return this._immediateValue_0;
  };
  PushIntegerInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PushIntegerInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PushIntegerInsn ? other : THROW_CCE();
    if (!(this._immediateValue_0 === tmp0_other_with_cast._immediateValue_0))
      return false;
    return true;
  };
  PushIntegerInsn.$metadata$ = {
    simpleName: 'PushIntegerInsn',
    kind: 'class',
    interfaces: []
  };
  function PushLoopHandlingInsn(continueLabel, breakLabel) {
    Insn.call(this);
    this._continueLabel = continueLabel;
    this._breakLabel = breakLabel;
  }
  PushLoopHandlingInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU12Pair(buffer.writeByte_ha5a7z_k$(Opcode_PUSH_LOOP_HANDLING_getInstance()._get_ordinal__0_k$()), this._continueLabel, this._breakLabel);
  };
  PushLoopHandlingInsn.prototype.toString = function () {
    return '' + 'PushLoopHandlingInsn(continueLabel=' + this._continueLabel + ', breakLabel=' + this._breakLabel + ')';
  };
  PushLoopHandlingInsn.prototype.hashCode = function () {
    var result = this._continueLabel;
    result = imul(result, 31) + this._breakLabel | 0;
    return result;
  };
  PushLoopHandlingInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PushLoopHandlingInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof PushLoopHandlingInsn ? other : THROW_CCE();
    if (!(this._continueLabel === tmp0_other_with_cast._continueLabel))
      return false;
    if (!(this._breakLabel === tmp0_other_with_cast._breakLabel))
      return false;
    return true;
  };
  PushLoopHandlingInsn.$metadata$ = {
    simpleName: 'PushLoopHandlingInsn',
    kind: 'class',
    interfaces: []
  };
  function PushNullInsn() {
    PushNullInsn_instance = this;
    Insn.call(this);
  }
  PushNullInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_PUSH_NULL_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  PushNullInsn.$metadata$ = {
    simpleName: 'PushNullInsn',
    kind: 'object',
    interfaces: []
  };
  var PushNullInsn_instance;
  function PushNullInsn_getInstance() {
    if (PushNullInsn_instance == null)
      new PushNullInsn();
    return PushNullInsn_instance;
  }
  function PushScopeInsn() {
    PushScopeInsn_instance = this;
    Insn.call(this);
  }
  PushScopeInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_PUSH_SCOPE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  PushScopeInsn.$metadata$ = {
    simpleName: 'PushScopeInsn',
    kind: 'object',
    interfaces: []
  };
  var PushScopeInsn_instance;
  function PushScopeInsn_getInstance() {
    if (PushScopeInsn_instance == null)
      new PushScopeInsn();
    return PushScopeInsn_instance;
  }
  function PushThisInsn() {
    PushThisInsn_instance = this;
    Insn.call(this);
  }
  PushThisInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_PUSH_THIS_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  PushThisInsn.$metadata$ = {
    simpleName: 'PushThisInsn',
    kind: 'object',
    interfaces: []
  };
  var PushThisInsn_instance;
  function PushThisInsn_getInstance() {
    if (PushThisInsn_instance == null)
      new PushThisInsn();
    return PushThisInsn_instance;
  }
  function ReturnInsn() {
    ReturnInsn_instance = this;
    Insn.call(this);
  }
  ReturnInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_RETURN_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  ReturnInsn.$metadata$ = {
    simpleName: 'ReturnInsn',
    kind: 'object',
    interfaces: []
  };
  var ReturnInsn_instance;
  function ReturnInsn_getInstance() {
    if (ReturnInsn_instance == null)
      new ReturnInsn();
    return ReturnInsn_instance;
  }
  function SetMemberPropertyInsn(nameConst) {
    Insn.call(this);
    this._nameConst_8 = nameConst;
  }
  SetMemberPropertyInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_SET_MEMBER_PROPERTY_getInstance()._get_ordinal__0_k$()), this._nameConst_8);
    Unit_getInstance();
  };
  SetMemberPropertyInsn.prototype.toString = function () {
    return '' + 'SetMemberPropertyInsn(nameConst=' + this._nameConst_8 + ')';
  };
  SetMemberPropertyInsn.prototype.hashCode = function () {
    return this._nameConst_8;
  };
  SetMemberPropertyInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetMemberPropertyInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SetMemberPropertyInsn ? other : THROW_CCE();
    if (!(this._nameConst_8 === tmp0_other_with_cast._nameConst_8))
      return false;
    return true;
  };
  SetMemberPropertyInsn.$metadata$ = {
    simpleName: 'SetMemberPropertyInsn',
    kind: 'class',
    interfaces: []
  };
  function SetSubscriptInsn(size) {
    Insn.call(this);
    this._size_5 = size;
  }
  SetSubscriptInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    buffer.writeByte_ha5a7z_k$(Opcode_SET_SUBSCRIPT_getInstance()._get_ordinal__0_k$()).writeShort_ha5a7z_k$(0).writeByte_ha5a7z_k$(this._size_5);
    Unit_getInstance();
  };
  SetSubscriptInsn.prototype.toString = function () {
    return '' + 'SetSubscriptInsn(size=' + this._size_5 + ')';
  };
  SetSubscriptInsn.prototype.hashCode = function () {
    return this._size_5;
  };
  SetSubscriptInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetSubscriptInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SetSubscriptInsn ? other : THROW_CCE();
    if (!(this._size_5 === tmp0_other_with_cast._size_5))
      return false;
    return true;
  };
  SetSubscriptInsn.$metadata$ = {
    simpleName: 'SetSubscriptInsn',
    kind: 'class',
    interfaces: []
  };
  function SetVariableInsn(nameConst) {
    Insn.call(this);
    this._nameConst_9 = nameConst;
  }
  SetVariableInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_SET_VARIABLE_getInstance()._get_ordinal__0_k$()), this._nameConst_9);
    Unit_getInstance();
  };
  SetVariableInsn.prototype.toString = function () {
    return '' + 'SetVariableInsn(nameConst=' + this._nameConst_9 + ')';
  };
  SetVariableInsn.prototype.hashCode = function () {
    return this._nameConst_9;
  };
  SetVariableInsn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetVariableInsn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SetVariableInsn ? other : THROW_CCE();
    if (!(this._nameConst_9 === tmp0_other_with_cast._nameConst_9))
      return false;
    return true;
  };
  SetVariableInsn.$metadata$ = {
    simpleName: 'SetVariableInsn',
    kind: 'class',
    interfaces: []
  };
  function ThrowInsn() {
    ThrowInsn_instance = this;
    Insn.call(this);
  }
  ThrowInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_THROW_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  ThrowInsn.$metadata$ = {
    simpleName: 'ThrowInsn',
    kind: 'object',
    interfaces: []
  };
  var ThrowInsn_instance;
  function ThrowInsn_getInstance() {
    if (ThrowInsn_instance == null)
      new ThrowInsn();
    return ThrowInsn_instance;
  }
  function TypeofInsn() {
    TypeofInsn_instance = this;
    Insn.call(this);
  }
  TypeofInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_TYPEOF_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  TypeofInsn.$metadata$ = {
    simpleName: 'TypeofInsn',
    kind: 'object',
    interfaces: []
  };
  var TypeofInsn_instance;
  function TypeofInsn_getInstance() {
    if (TypeofInsn_instance == null)
      new TypeofInsn();
    return TypeofInsn_instance;
  }
  function UnaryNegativeOperationInsn() {
    UnaryNegativeOperationInsn_instance = this;
    Insn.call(this);
  }
  UnaryNegativeOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_UNARY_NEGATIVE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  UnaryNegativeOperationInsn.$metadata$ = {
    simpleName: 'UnaryNegativeOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var UnaryNegativeOperationInsn_instance;
  function UnaryNegativeOperationInsn_getInstance() {
    if (UnaryNegativeOperationInsn_instance == null)
      new UnaryNegativeOperationInsn();
    return UnaryNegativeOperationInsn_instance;
  }
  function UnaryNotOperationInsn() {
    UnaryNotOperationInsn_instance = this;
    Insn.call(this);
  }
  UnaryNotOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_UNARY_NOT_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  UnaryNotOperationInsn.$metadata$ = {
    simpleName: 'UnaryNotOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var UnaryNotOperationInsn_instance;
  function UnaryNotOperationInsn_getInstance() {
    if (UnaryNotOperationInsn_instance == null)
      new UnaryNotOperationInsn();
    return UnaryNotOperationInsn_instance;
  }
  function UnaryPositiveOperationInsn() {
    UnaryPositiveOperationInsn_instance = this;
    Insn.call(this);
  }
  UnaryPositiveOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_UNARY_POSITIVE_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  UnaryPositiveOperationInsn.$metadata$ = {
    simpleName: 'UnaryPositiveOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var UnaryPositiveOperationInsn_instance;
  function UnaryPositiveOperationInsn_getInstance() {
    if (UnaryPositiveOperationInsn_instance == null)
      new UnaryPositiveOperationInsn();
    return UnaryPositiveOperationInsn_instance;
  }
  function UnaryTruthOperationInsn() {
    UnaryTruthOperationInsn_instance = this;
    Insn.call(this);
  }
  UnaryTruthOperationInsn.prototype.serializeTo_vy2nus_k$ = function (buffer) {
    writeU24(buffer.writeByte_ha5a7z_k$(Opcode_PARAMETERLESS_getInstance()._get_ordinal__0_k$()), ParameterlessCode_UNARY_TRUTH_getInstance()._get_ordinal__0_k$());
    Unit_getInstance();
  };
  UnaryTruthOperationInsn.$metadata$ = {
    simpleName: 'UnaryTruthOperationInsn',
    kind: 'object',
    interfaces: []
  };
  var UnaryTruthOperationInsn_instance;
  function UnaryTruthOperationInsn_getInstance() {
    if (UnaryTruthOperationInsn_instance == null)
      new UnaryTruthOperationInsn();
    return UnaryTruthOperationInsn_instance;
  }
  function writeU24(_this_, value) {
    return _this_.writeByte_ha5a7z_k$(value >>> 16).writeShort_ha5a7z_k$(value);
  }
  function writeU12Pair(_this_, first_1, second) {
    writeU24(_this_, first_1 >>> 12 | second & 4095);
    Unit_getInstance();
  }
  function Companion_29() {
    Companion_instance_28 = this;
    this._I24_MAX = 8388607;
    this._I24_MIN = -8388608;
    this._i24Range = numberRangeToNumber(-8388608, 8388607);
  }
  Companion_29.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_29();
    return Companion_instance_28;
  }
  function CompiledNodeBuilder(parent, nodeId) {
    Companion_getInstance_28();
    this._parent = parent;
    this._nodeId = nodeId;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._instructions_0 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = ArrayList_init_$Create$();
      break $l$block_0;
    }
    tmp_0._jumpLabels_0 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = ArrayList_init_$Create$();
      break $l$block_1;
    }
    tmp_1._sectionLabels = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = ArrayList_init_$Create$();
      break $l$block_2;
    }
    tmp_2._sectionStack = tmp$ret$3;
    this._nextLabelCode = 0;
  }
  CompiledNodeBuilder.prototype.nextLabel_0_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._nextLabelCode;
    tmp0_this._nextLabelCode = tmp1 + 1 | 0;
    return tmp1;
  };
  CompiledNodeBuilder.prototype.newArrayInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = NewArrayInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.arrayInsertInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = ArrayInsertInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.assignInsn_a4enbm_k$ = function (name) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new AssignInsn(this._parent.constantId_6wfw3l_k$(name));
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushBooleanInsn_rpwsgn_k$ = function (value) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new PushBooleanInsn(value);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushDecimalInsn_okcceq_k$ = function (value) {
    var tmp;
    if (value % 1 === 0.0) {
      var progression = Companion_getInstance_28()._i24Range;
      var containsLower = progression._get_first__0_k$();
      var containsUpper = progression._get_last__0_k$();
      var containsArg = numberToInt(value);
      tmp = containsLower <= containsArg ? containsArg <= containsUpper : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp0_this = this;
      {
        var tmp0_plusAssign_0 = tmp0_this._instructions_0;
        var tmp1_plusAssign_0 = new PushDecimalInsn(numberToInt(value));
        tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
        Unit_getInstance();
      }
      return Unit_getInstance();
    } else {
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign_0 = tmp1_this._instructions_0;
      var tmp3_plusAssign_0 = new LoadDecimalInsn(this._parent.constantId_e2tf9d_k$(value));
      tmp2_plusAssign_0.add_2bq_k$(tmp3_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushIntegerInsn_kdfck9_k$ = function (value) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = value.rem_wiekkq_k$(new Long(1, 0));
      break $l$block;
    }
    if (tmp$ret$0.equals(new Long(0, 0))) {
      var progression = Companion_getInstance_28()._i24Range;
      var containsLower = progression._get_first__0_k$();
      var containsUpper = progression._get_last__0_k$();
      var containsArg = value.toInt_0_k$();
      tmp = containsLower <= containsArg ? containsArg <= containsUpper : false;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var tmp0_this = this;
      {
        var tmp0_plusAssign_0 = tmp0_this._instructions_0;
        var tmp1_plusAssign_0 = new PushIntegerInsn(value.toInt_0_k$());
        tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
        Unit_getInstance();
      }
      return Unit_getInstance();
    } else {
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign_0 = tmp1_this._instructions_0;
      var tmp3_plusAssign_0 = new LoadIntegerInsn(this._parent.constantId_wiekkq_k$(value));
      tmp2_plusAssign_0.add_2bq_k$(tmp3_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.invokeInsn_majfzk_k$ = function (size) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new InvokeInsn(size);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.invokeLocalInsn_3qac9d_k$ = function (name, size) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new InvokeLocalInsn(this._parent.constantId_6wfw3l_k$(name), size);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.invokeMemberInsn_3qac9d_k$ = function (name, size) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new InvokeMemberInsn(this._parent.constantId_6wfw3l_k$(name), size);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushStringInsn_a4enbm_k$ = function (value) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new LoadStringInsn(this._parent.constantId_6wfw3l_k$(value));
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.returnInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = ReturnInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushThisInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = PushThisInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushNullInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = PushNullInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.typeofInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = TypeofInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.newObjectInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = NewObjectInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.objectInsertInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = ObjectInsertInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.breakInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = BreakInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.continueInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = ContinueInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.throwInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = ThrowInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.jumpInsn_majfzk_k$ = function (labelCode) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new JumpInsn(labelCode);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.branchIfFalseInsn_majfzk_k$ = function (labelCode) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new BranchIfInsn(false, labelCode);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.branchIfTrueInsn_majfzk_k$ = function (labelCode) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new BranchIfInsn(true, labelCode);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.unaryOperationInsn_bt14ug_k$ = function (operator) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_subject = operator;
      var tmp;
      if (tmp1_subject.equals(UnaryOperationType_POSITIVE_getInstance())) {
        tmp = UnaryPositiveOperationInsn_getInstance();
      } else if (tmp1_subject.equals(UnaryOperationType_NEGATIVE_getInstance())) {
        tmp = UnaryNegativeOperationInsn_getInstance();
      } else if (tmp1_subject.equals(UnaryOperationType_NOT_getInstance())) {
        tmp = UnaryNotOperationInsn_getInstance();
      } else if (tmp1_subject.equals(UnaryOperationType_TRUTH_getInstance())) {
        tmp = UnaryTruthOperationInsn_getInstance();
      } else {
        noWhenBranchMatchedException();
      }
      var tmp1_plusAssign_0 = tmp;
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.binaryOperationInsn_v73me0_k$ = function (operator) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_subject = operator;
      var tmp;
      if (tmp1_subject.equals(BinaryOperationType_ADD_getInstance())) {
        tmp = BinaryAddOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_SUBTRACT_getInstance())) {
        tmp = BinarySubtractOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_MULTIPLY_getInstance())) {
        tmp = BinaryMultiplyOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_DIVIDE_getInstance())) {
        tmp = BinaryDivideOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_REMAINING_getInstance())) {
        tmp = BinaryRemainingOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_EQUALS_getInstance())) {
        tmp = BinaryEqualsOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_NOT_EQUALS_getInstance())) {
        tmp = BinaryNotEqualsOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_LT_getInstance())) {
        tmp = BinaryLtOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_LTE_getInstance())) {
        tmp = BinaryLteOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_GT_getInstance())) {
        tmp = BinaryGtOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_GTE_getInstance())) {
        tmp = BinaryGteOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_IN_getInstance())) {
        tmp = BinaryInOperationInsn_getInstance();
      } else if (tmp1_subject.equals(BinaryOperationType_RANGE_getInstance())) {
        tmp = BinaryRangeOperationInsn_getInstance();
      } else {
        throw RuntimeException_init_$Create$('' + 'The operator ' + operator + " can't be converted to a instruction and must be de-sugared.");
      }
      var tmp1_plusAssign_0 = tmp;
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.declareVariableInsn_5xhc52_k$ = function (name, mutable) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new DeclareVariableInsn(this._parent.constantId_6wfw3l_k$(name), mutable);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.getVariableInsn_a4enbm_k$ = function (name) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new GetVariableInsn(this._parent.constantId_6wfw3l_k$(name));
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.setVariableInsn_a4enbm_k$ = function (name) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new SetVariableInsn(this._parent.constantId_6wfw3l_k$(name));
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.getMemberPropertyInsn_a4enbm_k$ = function (name) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new GetMemberPropertyInsn(this._parent.constantId_6wfw3l_k$(name));
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.setMemberPropertyInsn_a4enbm_k$ = function (name) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new SetMemberPropertyInsn(this._parent.constantId_6wfw3l_k$(name));
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.getSubscriptInsn_majfzk_k$ = function (size) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new GetSubscriptInsn(size);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.setSubscriptInsn_majfzk_k$ = function (size) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new SetSubscriptInsn(size);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.newFunctionInsn_qqqxoj_k$ = function (parameters, name, bodyId) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new NewFunctionInsn(this._parent.registerFunction_4njcm6_k$(this._parent.registerParameters_1sqr59_k$(parameters), name, bodyId));
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.dupInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = DupInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.popInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = PopInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushScopeInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = PushScopeInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.popScopeInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = PopScopeInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushExceptionHandlingInsn_rvwcgf_k$ = function (catchLabel, endLabel) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new PushExceptionHandlingInsn(catchLabel, endLabel);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.popExceptionHandlingInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = PopExceptionHandlingInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.pushLoopHandlingInsn_rvwcgf_k$ = function (continueLabel, breakLabel) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = new PushLoopHandlingInsn(continueLabel, breakLabel);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.popLoopHandlingInsn_sv8swh_k$ = function () {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._instructions_0;
      var tmp1_plusAssign_0 = PopLoopHandlingInsn_getInstance();
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.markLabel_majfzk_k$ = function (code) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._jumpLabels_0;
      var tmp1_at = this._instructions_0._get_size__0_k$();
      var tmp1_plusAssign_0 = new JumpLabel(code, tmp1_at);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
  };
  CompiledNodeBuilder.prototype.markSectionStart_majfzk_k$ = function (sectionId) {
    this._sectionStack.add_2bq_k$(sectionId);
    Unit_getInstance();
  };
  CompiledNodeBuilder.prototype.markSectionStart_5xjolv_k$ = function (section_0) {
    this.markSectionStart_majfzk_k$(this._parent.sectionId_3dwx6q_k$(section_0));
  };
  CompiledNodeBuilder.prototype.markSectionEnd_sv8swh_k$ = function () {
    removeLast(this._sectionStack);
    Unit_getInstance();
  };
  CompiledNodeBuilder.prototype.build_0_k$ = function () {
    return new CompiledNode(toList(this._instructions_0), toList(this._jumpLabels_0));
  };
  CompiledNodeBuilder.$metadata$ = {
    simpleName: 'CompiledNodeBuilder',
    kind: 'class',
    interfaces: []
  };
  function CompiledSourceBuilder() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._longPool_0 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = ArrayList_init_$Create$();
      break $l$block_0;
    }
    tmp_0._stringPool_0 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = ArrayList_init_$Create$();
      break $l$block_1;
    }
    tmp_1._sections = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = ArrayList_init_$Create$();
      break $l$block_2;
    }
    tmp_2._functionParameters_0 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    $l$block_3: {
      tmp$ret$4 = ArrayList_init_$Create$();
      break $l$block_3;
    }
    tmp_3._functions_0 = tmp$ret$4;
    var tmp_4 = this;
    var tmp$ret$5;
    $l$block_4: {
      tmp$ret$5 = ArrayList_init_$Create$();
      break $l$block_4;
    }
    tmp_4._nodeBuilders = tmp$ret$5;
  }
  CompiledSourceBuilder.prototype.newNodeBuilder_0_k$ = function () {
    var builder = new CompiledNodeBuilder(this, this._nodeBuilders._get_size__0_k$());
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._nodeBuilders;
      tmp0_plusAssign_0.add_2bq_k$(builder);
      Unit_getInstance();
    }
    return builder;
  };
  CompiledSourceBuilder.prototype.sectionId_3dwx6q_k$ = function (section_0) {
    var source = section_0._source;
    var pathConst = this.constantId_6wfw3l_k$(source._path);
    var nameConst = this.constantId_6wfw3l_k$(source._name_0);
    var value = new CompiledSection(pathConst, nameConst, section_0._index_1, section_0._length);
    var indexOf_2 = this._sections.indexOf_2bq_k$(value);
    if (!(indexOf_2 === -1))
      return indexOf_2;
    this._sections.add_2bq_k$(value);
    Unit_getInstance();
    return _get_lastIndex__0(this._sections);
  };
  CompiledSourceBuilder.prototype.constantId_6wfw3l_k$ = function (value) {
    var indexOf_2 = this._stringPool_0.indexOf_2bq_k$(value);
    if (!(indexOf_2 === -1))
      return indexOf_2;
    this._stringPool_0.add_2bq_k$(value);
    Unit_getInstance();
    return _get_lastIndex__0(this._stringPool_0);
  };
  CompiledSourceBuilder.prototype.constantId_e2tf9d_k$ = function (value) {
    return this.constantId_wiekkq_k$(toBits(value));
  };
  CompiledSourceBuilder.prototype.constantId_wiekkq_k$ = function (value) {
    var indexOf_2 = this._longPool_0.indexOf_2bq_k$(value);
    if (!(indexOf_2 === -1))
      return indexOf_2;
    this._longPool_0.add_2bq_k$(value);
    Unit_getInstance();
    return _get_lastIndex__0(this._stringPool_0);
  };
  CompiledSourceBuilder.prototype.registerFunction_4njcm6_k$ = function (parametersId, name, bodyId) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._functions_0;
      var tmp1_safe_receiver = name;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = this.constantId_6wfw3l_k$(tmp1_safe_receiver);
          break $l$block;
        }
        tmp = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp;
      var tmp1_plusAssign_0 = new CompiledFunction(parametersId, tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs, bodyId);
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
    return _get_lastIndex__0(this._functions_0);
  };
  CompiledSourceBuilder.prototype.registerParameters_1sqr59_k$ = function (parameters) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign_0 = tmp0_this._functionParameters_0;
      tmp0_plusAssign_0.add_2bq_k$(parameters);
      Unit_getInstance();
    }
    return _get_lastIndex__0(this._functionParameters_0);
  };
  CompiledSourceBuilder.prototype.build_0_k$ = function () {
    var tmp = toList(this._longPool_0);
    var tmp_0 = toList(this._stringPool_0);
    var tmp_1 = toList(this._functionParameters_0);
    var tmp_2 = toList(this._functions_0);
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_map_0 = this._nodeBuilders;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2 = tmp0_map_0.iterator_0_k$();
        while (tmp0_iterator_1_2.hasNext_0_k$()) {
          var item_2_3 = tmp0_iterator_1_2.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = item_2_3.build_0_k$();
            break $l$block;
          }
          tmp0_mapTo_0_1.add_2bq_k$(tmp$ret$0);
          Unit_getInstance();
        }
        tmp$ret$1 = tmp0_mapTo_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return new CompiledSource(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$2);
  };
  CompiledSourceBuilder.$metadata$ = {
    simpleName: 'CompiledSourceBuilder',
    kind: 'class',
    interfaces: []
  };
  function NodeCompiler_init_$Init$(source, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      source = new CompiledSourceBuilder();
    NodeCompiler.call($this, source);
    return $this;
  }
  function NodeCompiler_init_$Create$(source, $mask0, $marker) {
    return NodeCompiler_init_$Init$(source, $mask0, $marker, Object.create(NodeCompiler.prototype));
  }
  function Companion_30() {
    Companion_instance_29 = this;
  }
  Companion_30.prototype.compile_35k71k_k$ = function (node) {
    var compiler = NodeCompiler_init_$Create$(null, 1, null);
    node.accept_258a0l_k$(compiler);
    return compiler.compiledSource_0_k$();
  };
  Companion_30.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_30();
    return Companion_instance_29;
  }
  function NodeCompiler(source) {
    Companion_getInstance_29();
    this._source_2 = source;
    this._builder = this._source_2.newNodeBuilder_0_k$();
  }
  NodeCompiler.prototype.compiledSource_0_k$ = function () {
    return this._source_2.build_0_k$();
  };
  NodeCompiler.prototype.visitArrayExpr_klk2yu_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.newArrayInsn_sv8swh_k$();
        var tmp0_iterator_2 = node._value_14.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var expr_3 = tmp0_iterator_2.next_0_k$();
          expr_3.accept_258a0l_k$(this);
          this._builder.arrayInsertInsn_sv8swh_k$();
        }
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitAssignNode_sdbc6c_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._value_5.accept_258a0l_k$(this);
        this._builder.assignInsn_a4enbm_k$(node._name_1);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitBinaryOperation_y0sprt_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._left.accept_258a0l_k$(this);
        if (node._operator.equals(BinaryOperationType_ELVIS_getInstance())) {
          var skip_2 = this._builder.nextLabel_0_k$();
          this._builder.dupInsn_sv8swh_k$();
          this._builder.pushNullInsn_sv8swh_k$();
          this._builder.binaryOperationInsn_v73me0_k$(BinaryOperationType_EQUALS_getInstance());
          this._builder.branchIfFalseInsn_majfzk_k$(skip_2);
          this._builder.popInsn_sv8swh_k$();
          node._right.accept_258a0l_k$(this);
          this._builder.markLabel_majfzk_k$(skip_2);
          return Unit_getInstance();
        } else if (node._operator.equals(BinaryOperationType_IS_getInstance())) {
          this._builder.typeofInsn_sv8swh_k$();
          node._right.accept_258a0l_k$(this);
          this._builder.binaryOperationInsn_v73me0_k$(BinaryOperationType_EQUALS_getInstance());
          return Unit_getInstance();
        }if (node._operator.equals(BinaryOperationType_AND_getInstance()) ? true : node._operator.equals(BinaryOperationType_OR_getInstance())) {
          var skip_3 = this._builder.nextLabel_0_k$();
          this._builder.dupInsn_sv8swh_k$();
          if (node._operator.equals(BinaryOperationType_AND_getInstance())) {
            this._builder.branchIfFalseInsn_majfzk_k$(skip_3);
          } else {
            this._builder.branchIfTrueInsn_majfzk_k$(skip_3);
          }
          node._right.accept_258a0l_k$(this);
          this._builder.markLabel_majfzk_k$(skip_3);
        }node._right.accept_258a0l_k$(this);
        this._builder.binaryOperationInsn_v73me0_k$(node._operator);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitBooleanExpr_es5jwp_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.pushBooleanInsn_rpwsgn_k$(node._value_15);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitBreakExpr_ci00lo_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.breakInsn_sv8swh_k$();
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitContinueExpr_fk2gzm_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.continueInsn_sv8swh_k$();
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitDeclareFunctionExpr_vxuj7o_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.declareVariableInsn_5xhc52_k$(node._name_5, false);
        node._value_10.accept_258a0l_k$(this);
        this._builder.dupInsn_sv8swh_k$();
        this._builder.setVariableInsn_a4enbm_k$(node._name_5);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitDeclareVariableNode_77c4j1_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.declareVariableInsn_5xhc52_k$(node._name_6, node._mutable);
        if (!(node._value_11 == null)) {
          node._value_11.accept_258a0l_k$(this);
          this._builder.setVariableInsn_a4enbm_k$(node._name_6);
        }}
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitDoWhileNode_fx04lc_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        var startLabel_2 = this._builder.nextLabel_0_k$();
        this._builder.markLabel_majfzk_k$(startLabel_2);
        if (node._body == null) {
          node._condition.accept_258a0l_k$(this);
          this._builder.branchIfTrueInsn_majfzk_k$(startLabel_2);
          return Unit_getInstance();
        }var conditionLabel_3 = this._builder.nextLabel_0_k$();
        var endLabel_4 = this._builder.nextLabel_0_k$();
        this._builder.pushLoopHandlingInsn_rvwcgf_k$(conditionLabel_3, endLabel_4);
        {
          var tmp0_withScope_0_5 = this._builder;
          tmp0_withScope_0_5.pushScopeInsn_sv8swh_k$();
          {
            node._body.accept_258a0l_k$(this);
          }
          tmp0_withScope_0_5.popScopeInsn_sv8swh_k$();
        }
        this._builder.popLoopHandlingInsn_sv8swh_k$();
        this._builder.markLabel_majfzk_k$(conditionLabel_3);
        node._condition.accept_258a0l_k$(this);
        this._builder.branchIfTrueInsn_majfzk_k$(startLabel_2);
        this._builder.markLabel_majfzk_k$(endLabel_4);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitDecimalExpr_ok2vda_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.pushDecimalInsn_okcceq_k$(node._value_16);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitEnsureNotNullExpr_7oiys_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._value_12.accept_258a0l_k$(this);
        this._builder.dupInsn_sv8swh_k$();
        this._builder.invokeLocalInsn_3qac9d_k$('__ensureNotNull', 1);
        this._builder.popInsn_sv8swh_k$();
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitForNode_5zgy77_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        var nextLabel_2 = this._builder.nextLabel_0_k$();
        var endLabel_3 = this._builder.nextLabel_0_k$();
        {
          var tmp0_withScope_0_4 = this._builder;
          tmp0_withScope_0_4.pushScopeInsn_sv8swh_k$();
          {
            var iterator_2_5 = '' + node._variableName + '$__iterator';
            this._builder.declareVariableInsn_5xhc52_k$(iterator_2_5, false);
            node._iterable.accept_258a0l_k$(this);
            this._builder.invokeMemberInsn_3qac9d_k$('__iterator', 0);
            this._builder.setVariableInsn_a4enbm_k$(iterator_2_5);
            this._builder.markLabel_majfzk_k$(nextLabel_2);
            this._builder.getVariableInsn_a4enbm_k$(iterator_2_5);
            this._builder.invokeMemberInsn_3qac9d_k$('__hasNext', 0);
            this._builder.branchIfFalseInsn_majfzk_k$(endLabel_3);
            {
              var tmp0_withScope_0_3_6 = this._builder;
              tmp0_withScope_0_3_6.pushScopeInsn_sv8swh_k$();
              {
                this._builder.declareVariableInsn_5xhc52_k$(node._variableName, false);
                this._builder.getVariableInsn_a4enbm_k$(iterator_2_5);
                this._builder.invokeMemberInsn_3qac9d_k$('__next', 0);
                this._builder.setVariableInsn_a4enbm_k$(node._variableName);
                node._body_0.accept_258a0l_k$(this);
              }
              tmp0_withScope_0_3_6.popScopeInsn_sv8swh_k$();
            }
            this._builder.jumpInsn_majfzk_k$(nextLabel_2);
            this._builder.markLabel_majfzk_k$(endLabel_3);
          }
          tmp0_withScope_0_4.popScopeInsn_sv8swh_k$();
        }
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitFunctionExpr_rni1wf_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        var tmp$ret$5;
        $l$block_4: {
          var tmp0_map_0_3 = node._parameters;
          var tmp$ret$4;
          $l$block_3: {
            var tmp0_mapTo_0_1_4 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0_3, 10));
            var tmp0_iterator_1_2_5 = tmp0_map_0_3.iterator_0_k$();
            while (tmp0_iterator_1_2_5.hasNext_0_k$()) {
              var item_2_3_6 = tmp0_iterator_1_2_5.next_0_k$();
              var tmp$ret$3;
              $l$block_2: {
                var name_5_7 = item_2_3_6.component1_0_k$();
                var varargs_6_8 = item_2_3_6.component2_0_k$();
                var defaultValue_7_9 = item_2_3_6.component3_0_k$();
                var tmp = this._source_2.constantId_6wfw3l_k$(name_5_7);
                var tmp0_safe_receiver_9_11 = defaultValue_7_9;
                var tmp_0;
                if (tmp0_safe_receiver_9_11 == null) {
                  tmp_0 = null;
                } else {
                  var tmp$ret$2;
                  $l$block_1: {
                    {
                    }
                    var tmp$ret$1;
                    $l$block_0: {
                      var tmp$ret$0;
                      $l$block: {
                        var tmp0_also_0_2_10_12 = new NodeCompiler(this._source_2);
                        {
                        }
                        {
                          tmp0_safe_receiver_9_11.accept_258a0l_k$(tmp0_also_0_2_10_12);
                        }
                        tmp$ret$0 = tmp0_also_0_2_10_12;
                        break $l$block;
                      }
                      tmp$ret$1 = tmp$ret$0._builder._nodeId;
                      break $l$block_0;
                    }
                    tmp$ret$2 = tmp$ret$1;
                    break $l$block_1;
                  }
                  tmp_0 = tmp$ret$2;
                }
                var tmp1_elvis_lhs_8_10 = tmp_0;
                tmp$ret$3 = new CompiledParameter(tmp, varargs_6_8, tmp1_elvis_lhs_8_10 == null ? -1 : tmp1_elvis_lhs_8_10);
                break $l$block_2;
              }
              tmp0_mapTo_0_1_4.add_2bq_k$(tmp$ret$3);
              Unit_getInstance();
            }
            tmp$ret$4 = tmp0_mapTo_0_1_4;
            break $l$block_3;
          }
          tmp$ret$5 = tmp$ret$4;
          break $l$block_4;
        }
        var parameters_2 = tmp$ret$5;
        var tmp0_safe_receiver_15 = node._body_2;
        var tmp_1;
        if (tmp0_safe_receiver_15 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$8;
          $l$block_7: {
            {
            }
            var tmp$ret$7;
            $l$block_6: {
              var tmp$ret$6;
              $l$block_5: {
                var tmp0_also_0_2_16 = new NodeCompiler(this._source_2);
                {
                }
                {
                  tmp0_safe_receiver_15.accept_258a0l_k$(tmp0_also_0_2_16);
                }
                tmp$ret$6 = tmp0_also_0_2_16;
                break $l$block_5;
              }
              tmp$ret$7 = tmp$ret$6._builder._nodeId;
              break $l$block_6;
            }
            tmp$ret$8 = tmp$ret$7;
            break $l$block_7;
          }
          tmp_1 = tmp$ret$8;
        }
        var tmp1_elvis_lhs_14 = tmp_1;
        var bodyId_13 = tmp1_elvis_lhs_14 == null ? -1 : tmp1_elvis_lhs_14;
        this._builder.newFunctionInsn_qqqxoj_k$(parameters_2, node._name_10, bodyId_13);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitIdentifierExpr_w34sup_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.getVariableInsn_a4enbm_k$(node._name_2);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitIfExpr_cppdfc_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        var elseLabel_2 = this._builder.nextLabel_0_k$();
        var endLabel_3 = this._builder.nextLabel_0_k$();
        {
          var tmp0_markSection_0_4 = this._builder;
          tmp0_markSection_0_4.markSectionStart_5xjolv_k$(node._get_section__0_k$());
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          tmp0_markSection_0_4.markSectionEnd_sv8swh_k$();
        }
        node._condition_0.accept_258a0l_k$(this);
        this._builder.branchIfFalseInsn_majfzk_k$(elseLabel_2);
        this._builder.pushScopeInsn_sv8swh_k$();
        node._thenBranch.accept_258a0l_k$(this);
        this._builder.popScopeInsn_sv8swh_k$();
        this._builder.jumpInsn_majfzk_k$(endLabel_3);
        this._builder.markLabel_majfzk_k$(elseLabel_2);
        this._builder.pushScopeInsn_sv8swh_k$();
        node._thenBranch.accept_258a0l_k$(this);
        this._builder.popScopeInsn_sv8swh_k$();
        this._builder.markLabel_majfzk_k$(endLabel_3);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitIfNode_fism2j_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        if (node._elseBranch_0 == null) {
          var endLabel_2 = this._builder.nextLabel_0_k$();
          node._condition_1.accept_258a0l_k$(this);
          this._builder.branchIfFalseInsn_majfzk_k$(endLabel_2);
          this._builder.pushScopeInsn_sv8swh_k$();
          node._thenBranch_0.accept_258a0l_k$(this);
          this._builder.popScopeInsn_sv8swh_k$();
          this._builder.markLabel_majfzk_k$(endLabel_2);
        }var elseLabel_3 = this._builder.nextLabel_0_k$();
        var endLabel_4 = this._builder.nextLabel_0_k$();
        {
          var tmp0_markSection_0_5 = this._builder;
          tmp0_markSection_0_5.markSectionStart_5xjolv_k$(node._get_section__0_k$());
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          tmp0_markSection_0_5.markSectionEnd_sv8swh_k$();
        }
        node._condition_1.accept_258a0l_k$(this);
        this._builder.branchIfFalseInsn_majfzk_k$(elseLabel_3);
        this._builder.pushScopeInsn_sv8swh_k$();
        node._thenBranch_0.accept_258a0l_k$(this);
        this._builder.popScopeInsn_sv8swh_k$();
        this._builder.jumpInsn_majfzk_k$(endLabel_4);
        this._builder.markLabel_majfzk_k$(elseLabel_3);
        this._builder.pushScopeInsn_sv8swh_k$();
        node._thenBranch_0.accept_258a0l_k$(this);
        this._builder.popScopeInsn_sv8swh_k$();
        this._builder.markLabel_majfzk_k$(endLabel_4);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitIntegerExpr_nz4v8f_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.pushIntegerInsn_kdfck9_k$(node._value_17);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitInvalidNode_m1al9a_k$ = function (node) {
    throw new SyntaxException(node.toString(), node._section_1);
  };
  NodeCompiler.prototype.visitInvokeExpr_xo0qb8_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._target_4.accept_258a0l_k$(this);
        var tmp0_iterator_2 = node._arguments_1.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var argument_3 = tmp0_iterator_2.next_0_k$();
          argument_3.accept_258a0l_k$(this);
        }
        this._builder.invokeInsn_majfzk_k$(node._arguments_1._get_size__0_k$());
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitInvokeLocalExpr_b10h3b_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        var tmp0_iterator_2 = node._arguments_2.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var argument_3 = tmp0_iterator_2.next_0_k$();
          argument_3.accept_258a0l_k$(this);
        }
        this._builder.invokeLocalInsn_3qac9d_k$(node._name_7, node._arguments_2._get_size__0_k$());
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitInvokeMemberExpr_d5ntl2_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._target_5.accept_258a0l_k$(this);
        var tmp0_iterator_2 = node._arguments_3.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var argument_3 = tmp0_iterator_2.next_0_k$();
          argument_3.accept_258a0l_k$(this);
        }
        this._builder.invokeMemberInsn_3qac9d_k$(node._name_8, node._arguments_3._get_size__0_k$());
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitMultiExpr_fzc19l_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        var tmp0_iterator_2 = node._list.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var each_3 = tmp0_iterator_2.next_0_k$();
          each_3.accept_258a0l_k$(this);
          if (isInterface(each_3, Expr)) {
            this._builder.popInsn_sv8swh_k$();
          } else {
          }
        }
        node._last_3.accept_258a0l_k$(this);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitMultiNode_qta17o_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        var tmp0_iterator_2 = node._list_0.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var each_3 = tmp0_iterator_2.next_0_k$();
          each_3.accept_258a0l_k$(this);
          if (isInterface(each_3, Expr)) {
            this._builder.popInsn_sv8swh_k$();
          } else {
          }
        }
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitNullExpr_rhthhq_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.pushNullInsn_sv8swh_k$();
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitObjectExpr_i59t16_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.newObjectInsn_sv8swh_k$();
        var tmp0_iterator_2 = node._value_18.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var tmp1_loop_parameter_3 = tmp0_iterator_2.next_0_k$();
          var key_4 = tmp1_loop_parameter_3.component1_0_k$();
          var value_5 = tmp1_loop_parameter_3.component2_0_k$();
          key_4.accept_258a0l_k$(this);
          value_5.accept_258a0l_k$(this);
          this._builder.objectInsertInsn_sv8swh_k$();
        }
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitPropertyAccessExpr_i9klxb_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._target_0.accept_258a0l_k$(this);
        if (!node._nullSafe) {
          this._builder.getMemberPropertyInsn_a4enbm_k$(node._name_3);
          return Unit_getInstance();
        }var skip_2 = this._builder.nextLabel_0_k$();
        this._builder.dupInsn_sv8swh_k$();
        this._builder.pushNullInsn_sv8swh_k$();
        this._builder.binaryOperationInsn_v73me0_k$(BinaryOperationType_EQUALS_getInstance());
        this._builder.branchIfTrueInsn_majfzk_k$(skip_2);
        this._builder.getMemberPropertyInsn_a4enbm_k$(node._name_3);
        this._builder.markLabel_majfzk_k$(skip_2);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitPropertyAssignNode_2hicx3_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._target_1.accept_258a0l_k$(this);
        if (!node._nullSafe_0) {
          node._value_6.accept_258a0l_k$(this);
          this._builder.setMemberPropertyInsn_a4enbm_k$(node._name_4);
          return Unit_getInstance();
        }var skip_2 = this._builder.nextLabel_0_k$();
        this._builder.dupInsn_sv8swh_k$();
        this._builder.pushNullInsn_sv8swh_k$();
        this._builder.binaryOperationInsn_v73me0_k$(BinaryOperationType_EQUALS_getInstance());
        this._builder.branchIfTrueInsn_majfzk_k$(skip_2);
        node._value_6.accept_258a0l_k$(this);
        this._builder.setMemberPropertyInsn_a4enbm_k$(node._name_4);
        this._builder.markLabel_majfzk_k$(skip_2);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitReturnExpr_1r8sl1_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._value_8.accept_258a0l_k$(this);
        this._builder.returnInsn_sv8swh_k$();
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitStringExpr_h98b6g_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.pushStringInsn_a4enbm_k$(node._value_19);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitSubscriptAccessExpr_1ea7lb_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._target_2.accept_258a0l_k$(this);
        var tmp0_iterator_2 = node._arguments.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var argument_3 = tmp0_iterator_2.next_0_k$();
          argument_3.accept_258a0l_k$(this);
        }
        this._builder.getSubscriptInsn_majfzk_k$(node._arguments._get_size__0_k$());
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitSubscriptAssignNode_h6cglj_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._target_3.accept_258a0l_k$(this);
        var tmp0_iterator_2 = node._arguments_0.iterator_0_k$();
        while (tmp0_iterator_2.hasNext_0_k$()) {
          var argument_3 = tmp0_iterator_2.next_0_k$();
          argument_3.accept_258a0l_k$(this);
        }
        node._value_7.accept_258a0l_k$(this);
        this._builder.setSubscriptInsn_majfzk_k$(node._arguments_0._get_size__0_k$());
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitThisExpr_kvf49x_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        this._builder.pushThisInsn_sv8swh_k$();
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitThrowExpr_o8w86r_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._value_9.accept_258a0l_k$(this);
        this._builder.throwInsn_sv8swh_k$();
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitTryExpr_wonimg_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        if (node._catchBranch == null) {
          this._builder.pushScopeInsn_sv8swh_k$();
          node._tryBranch.accept_258a0l_k$(this);
          this._builder.popScopeInsn_sv8swh_k$();
          return Unit_getInstance();
        }var catchLabel_2 = this._builder.nextLabel_0_k$();
        var endLabel_3 = this._builder.nextLabel_0_k$();
        {
          var tmp0_withExceptionHandling_0_4 = this._builder;
          tmp0_withExceptionHandling_0_4.pushExceptionHandlingInsn_rvwcgf_k$(catchLabel_2, endLabel_3);
          {
            {
              var tmp0_withScope_0_2_5 = this._builder;
              tmp0_withScope_0_2_5.pushScopeInsn_sv8swh_k$();
              {
                node._tryBranch.accept_258a0l_k$(this);
              }
              tmp0_withScope_0_2_5.popScopeInsn_sv8swh_k$();
            }
          }
          tmp0_withExceptionHandling_0_4.popExceptionHandlingInsn_sv8swh_k$();
        }
        this._builder.jumpInsn_majfzk_k$(endLabel_3);
        this._builder.markLabel_majfzk_k$(catchLabel_2);
        if (node._catchBranch._caughtName == null) {
          this._builder.popInsn_sv8swh_k$();
        } else {
          this._builder.pushScopeInsn_sv8swh_k$();
          this._builder.declareVariableInsn_5xhc52_k$(node._catchBranch._caughtName, false);
          this._builder.setVariableInsn_a4enbm_k$(node._catchBranch._caughtName);
        }
        {
          var tmp1_withScope_0_6 = this._builder;
          tmp1_withScope_0_6.pushScopeInsn_sv8swh_k$();
          {
            node._catchBranch._branch.accept_258a0l_k$(this);
          }
          tmp1_withScope_0_6.popScopeInsn_sv8swh_k$();
        }
        if (!(node._catchBranch._caughtName == null)) {
          this._builder.popScopeInsn_sv8swh_k$();
        }this._builder.markLabel_majfzk_k$(endLabel_3);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitTypeofExpr_heb3f3_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._value_13.accept_258a0l_k$(this);
        this._builder.typeofInsn_sv8swh_k$();
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitUnaryOperation_eqdm0z_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        node._target_6.accept_258a0l_k$(this);
        this._builder.unaryOperationInsn_bt14ug_k$(node._operator_0);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.prototype.visitWhileNode_u00le3_k$ = function (node) {
    {
      var tmp0_markSection_0 = this._builder;
      tmp0_markSection_0.markSectionStart_5xjolv_k$(node._get_section__0_k$());
      {
        var startLabel_2 = this._builder.nextLabel_0_k$();
        this._builder.markLabel_majfzk_k$(startLabel_2);
        node._condition_2.accept_258a0l_k$(this);
        if (node._body_1 == null) {
          this._builder.branchIfTrueInsn_majfzk_k$(startLabel_2);
          return Unit_getInstance();
        }var endLabel_3 = this._builder.nextLabel_0_k$();
        this._builder.branchIfFalseInsn_majfzk_k$(endLabel_3);
        {
          var tmp0_withLoopHandling_0_4 = this._builder;
          tmp0_withLoopHandling_0_4.pushLoopHandlingInsn_rvwcgf_k$(startLabel_2, endLabel_3);
          {
            {
              var tmp0_withScope_0_2_5 = this._builder;
              tmp0_withScope_0_2_5.pushScopeInsn_sv8swh_k$();
              {
                node._body_1.accept_258a0l_k$(this);
              }
              tmp0_withScope_0_2_5.popScopeInsn_sv8swh_k$();
            }
          }
          tmp0_withLoopHandling_0_4.popLoopHandlingInsn_sv8swh_k$();
        }
        this._builder.jumpInsn_majfzk_k$(startLabel_2);
        this._builder.markLabel_majfzk_k$(endLabel_3);
      }
      tmp0_markSection_0.markSectionEnd_sv8swh_k$();
    }
  };
  NodeCompiler.$metadata$ = {
    simpleName: 'NodeCompiler',
    kind: 'class',
    interfaces: [NodeVisitor]
  };
  function IllegalConstantIndexException(index) {
    RuntimeException_init_$Init$_0('' + 'Index #' + index + ' is not a valid constant', this);
    captureStack(this, IllegalConstantIndexException);
  }
  IllegalConstantIndexException.$metadata$ = {
    simpleName: 'IllegalConstantIndexException',
    kind: 'class',
    interfaces: []
  };
  function StackUnderflowException(message) {
    NoSuchElementException_init_$Init$_0(message, this);
    captureStack(this, StackUnderflowException);
  }
  StackUnderflowException.$metadata$ = {
    simpleName: 'StackUnderflowException',
    kind: 'class',
    interfaces: []
  };
  function linStdLexer() {
    var tmp = Companion_getInstance_14();
    return tmp.create_stlp8_k$(_no_name_provided_$factory_32());
  }
  function sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_2(function_0) {
    this._function_3 = function_0;
  }
  sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_2.prototype.test_wi8o78_k$ = function (value) {
    return this._function_3(value);
  };
  sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_2.$metadata$ = {
    simpleName: 'sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0',
    kind: 'class',
    interfaces: [CharPredicate]
  };
  function _no_name_provided__38() {
  }
  _no_name_provided__38.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $l$break: while ($this$invoke.hasNext_0_k$())
      if (!$this$invoke.match_wi8o78_k$(new Char(32)))
        break $l$break;
  };
  _no_name_provided__38.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__39() {
  }
  _no_name_provided__39.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.match_wi8o78_k$(new Char(10));
    Unit_getInstance();
    var tmp = TokenType_NL_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__39.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__40() {
  }
  _no_name_provided__40.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_NL_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__40.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__40.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__41() {
  }
  _no_name_provided__41.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_L_BRACE_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__41.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__41.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__42() {
  }
  _no_name_provided__42.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_R_BRACE_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__42.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__42.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__43() {
  }
  _no_name_provided__43.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_L_PAREN_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__43.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__43.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__44() {
  }
  _no_name_provided__44.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_R_PAREN_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__44.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__44.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__45() {
  }
  _no_name_provided__45.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_L_BRACKET_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__45.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__45.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__46() {
  }
  _no_name_provided__46.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_R_BRACKET_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__46.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__46.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__47() {
  }
  _no_name_provided__47.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_RANGE_getInstance(), 2));
  };
  _no_name_provided__47.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__47.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__48() {
  }
  _no_name_provided__48.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_DOT_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__48.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__48.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__49() {
  }
  _no_name_provided__49.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_COMMA_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__49.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__49.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__50() {
  }
  _no_name_provided__50.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_DOUBLE_COLON_getInstance(), 2));
  };
  _no_name_provided__50.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__50.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__51() {
  }
  _no_name_provided__51.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_COLON_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__51.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__51.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__52() {
  }
  _no_name_provided__52.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_SEMICOLON_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__52.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__52.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__53() {
  }
  _no_name_provided__53.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_PLUS_ASSIGN_getInstance(), 2));
  };
  _no_name_provided__53.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__53.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__54() {
  }
  _no_name_provided__54.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_INCREMENT_getInstance(), 2));
  };
  _no_name_provided__54.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__54.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__55() {
  }
  _no_name_provided__55.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_PLUS_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__55.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__55.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__56() {
  }
  _no_name_provided__56.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_ARROW_getInstance(), 2));
  };
  _no_name_provided__56.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__56.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__57() {
  }
  _no_name_provided__57.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_MINUS_ASSIGN_getInstance(), 2));
  };
  _no_name_provided__57.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__57.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__58() {
  }
  _no_name_provided__58.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_DECREMENT_getInstance(), 2));
  };
  _no_name_provided__58.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__58.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__59() {
  }
  _no_name_provided__59.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_MINUS_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__59.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__59.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__60() {
  }
  _no_name_provided__60.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_REM_ASSIGN_getInstance(), 2));
  };
  _no_name_provided__60.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__60.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__61() {
  }
  _no_name_provided__61.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_REM_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__61.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__61.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__62() {
  }
  _no_name_provided__62.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_ASTERISK_ASSIGN_getInstance(), 2));
  };
  _no_name_provided__62.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__62.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__63() {
  }
  _no_name_provided__63.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_ASTERISK_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__63.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__63.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__64() {
  }
  _no_name_provided__64.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $l$break: while ($this$invoke.hasNext_0_k$())
      if ($this$invoke.next_0_k$().equals(new Char(10)))
        break $l$break;
  };
  _no_name_provided__64.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__64.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__65() {
  }
  _no_name_provided__65.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $l$break: while ($this$invoke.hasNext_0_k$())
      if ($this$invoke.next_0_k$().equals(new Char(42)) ? $this$invoke.match_wi8o78_k$(new Char(47)) : false)
        break $l$break;
  };
  _no_name_provided__65.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__65.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__66() {
  }
  _no_name_provided__66.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_SLASH_ASSIGN_getInstance(), 2));
  };
  _no_name_provided__66.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__66.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__67() {
  }
  _no_name_provided__67.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_SLASH_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__67.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__67.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__68() {
  }
  _no_name_provided__68.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_BACKSLASH_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__68.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__68.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__69() {
  }
  _no_name_provided__69.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_NEQ_getInstance(), 2));
  };
  _no_name_provided__69.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__69.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__70() {
  }
  _no_name_provided__70.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_DOUBLE_BANG_getInstance(), 2));
  };
  _no_name_provided__70.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__70.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__71() {
  }
  _no_name_provided__71.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_BANG_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__71.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__71.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__72() {
  }
  _no_name_provided__72.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_ELVIS_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__72.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__72.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__73() {
  }
  _no_name_provided__73.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_QUESTION_DOT_getInstance(), 2));
  };
  _no_name_provided__73.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__73.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__74() {
  }
  _no_name_provided__74.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_QUESTION_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__74.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__74.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__75() {
  }
  _no_name_provided__75.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_EQ_getInstance(), 2));
  };
  _no_name_provided__75.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__75.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__76() {
  }
  _no_name_provided__76.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_ASSIGN_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__76.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__76.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__77() {
  }
  _no_name_provided__77.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_OR_getInstance(), 2));
  };
  _no_name_provided__77.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__77.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__78() {
  }
  _no_name_provided__78.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_PIPE_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__78.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__78.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__79() {
  }
  _no_name_provided__79.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_AND_getInstance(), 2));
  };
  _no_name_provided__79.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__79.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__80() {
  }
  _no_name_provided__80.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_AMP_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__80.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__80.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__81() {
  }
  _no_name_provided__81.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_LTE_getInstance(), 2));
  };
  _no_name_provided__81.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__81.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__82() {
  }
  _no_name_provided__82.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_LT_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__82.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__82.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__83() {
  }
  _no_name_provided__83.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_GTE_getInstance(), 2));
  };
  _no_name_provided__83.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__83.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__84() {
  }
  _no_name_provided__84.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_GT_getInstance();
    $this$invoke.process_iav7o_k$(makeToken$default($this$invoke, tmp, 0, 2, null));
  };
  _no_name_provided__84.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__84.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__85() {
  }
  _no_name_provided__85.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    readLinTemplateString($this$invoke, it.toString(), false);
  };
  _no_name_provided__85.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__85.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__86() {
  }
  _no_name_provided__86.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    readLinTemplateString($this$invoke, it.toString(), true);
  };
  _no_name_provided__86.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__86.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__87() {
  }
  _no_name_provided__87.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    $this$invoke.process_iav7o_k$(makeToken($this$invoke, TokenType_STRING_getInstance(), 2));
  };
  _no_name_provided__87.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__87.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__88() {
  }
  _no_name_provided__88.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    readLinTemplateString($this$invoke, it.toString(), false);
  };
  _no_name_provided__88.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__88.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__89() {
  }
  _no_name_provided__89.prototype.invoke_pi9f13_k$ = function ($this$invoke, it) {
    var tmp = TokenType_IDENTIFIER_getInstance();
    var tmp_0 = readString($this$invoke, it);
    $this$invoke.process_iav7o_k$(makeToken$default_0($this$invoke, tmp, tmp_0, 0, 4, null));
  };
  _no_name_provided__89.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__89.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__90() {
  }
  _no_name_provided__90.prototype.invoke_pi9f13_k$ = function ($this$configure, it) {
    var n = readNumber($this$configure, it);
    var tmp;
    if (n instanceof Invalid) {
      var tmp_0 = TokenType_INVALID_getInstance();
      var tmp_1 = n._get_string__0_k$();
      tmp = makeToken$default_0($this$configure, tmp_0, tmp_1, 0, 4, null);
    } else {
      if (n instanceof Decimal) {
        var tmp_2 = TokenType_DECIMAL_getInstance();
        var tmp_3 = n._value_3.toString();
        tmp = makeToken$default_0($this$configure, tmp_2, tmp_3, 0, 4, null);
      } else {
        if (n instanceof Integer) {
          var tmp_4 = TokenType_INTEGER_getInstance();
          var tmp_5 = n._value_4.toString();
          tmp = makeToken$default_0($this$configure, tmp_4, tmp_5, 0, 4, null);
        } else {
          {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    $this$configure.process_iav7o_k$(tmp);
  };
  _no_name_provided__90.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__90.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__91() {
  }
  _no_name_provided__91.prototype.invoke_wi8o78_k$ = function (it) {
    return (isLetter(it) ? true : it.equals(new Char(95))) ? true : it.equals(new Char(64));
  };
  _no_name_provided__91.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi8o78_k$(p1 instanceof Char ? p1 : THROW_CCE());
  };
  _no_name_provided__91.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__92() {
  }
  _no_name_provided__92.prototype.invoke_pi9f13_k$ = function ($this$configure, it) {
    var s = readLinIdentifier($this$configure, it);
    var tmp;
    switch (s) {
      case 'break':
        tmp = makeToken($this$configure, TokenType_BREAK_getInstance(), 5);
        break;
      case 'continue':
        tmp = makeToken($this$configure, TokenType_CONTINUE_getInstance(), 8);
        break;
      case 'do':
        tmp = makeToken($this$configure, TokenType_DO_getInstance(), 2);
        break;
      case 'else':
        tmp = makeToken($this$configure, TokenType_ELSE_getInstance(), 4);
        break;
      case 'false':
        tmp = makeToken($this$configure, TokenType_FALSE_getInstance(), 4);
        break;
      case 'for':
        tmp = makeToken($this$configure, TokenType_FOR_getInstance(), 3);
        break;
      case 'fun':
        tmp = makeToken($this$configure, TokenType_FUN_getInstance(), 3);
        break;
      case 'if':
        tmp = makeToken($this$configure, TokenType_IF_getInstance(), 2);
        break;
      case 'in':
        tmp = makeToken($this$configure, TokenType_IN_getInstance(), 2);
        break;
      case 'is':
        tmp = makeToken($this$configure, TokenType_IS_getInstance(), 2);
        break;
      case 'null':
        tmp = makeToken($this$configure, TokenType_NULL_getInstance(), 4);
        break;
      case 'return':
        tmp = makeToken($this$configure, TokenType_RETURN_getInstance(), 6);
        break;
      case 'this':
        tmp = makeToken($this$configure, TokenType_THIS_getInstance(), 4);
        break;
      case 'throw':
        tmp = makeToken($this$configure, TokenType_THROW_getInstance(), 5);
        break;
      case 'true':
        tmp = makeToken($this$configure, TokenType_TRUE_getInstance(), 4);
        break;
      case 'try':
        tmp = makeToken($this$configure, TokenType_TRY_getInstance(), 3);
        break;
      case 'typeof':
        tmp = makeToken($this$configure, TokenType_TYPEOF_getInstance(), 6);
        break;
      case 'val':
        tmp = makeToken($this$configure, TokenType_VAL_getInstance(), 3);
        break;
      case 'var':
        tmp = makeToken($this$configure, TokenType_VAR_getInstance(), 3);
        break;
      case 'when':
        tmp = makeToken($this$configure, TokenType_WHEN_getInstance(), 4);
        break;
      case 'while':
        tmp = makeToken($this$configure, TokenType_WHILE_getInstance(), 5);
        break;
      default:var tmp_0 = TokenType_IDENTIFIER_getInstance();
        tmp = makeToken$default_0($this$configure, tmp_0, s, 0, 4, null);
        break;
    }
    $this$configure.process_iav7o_k$(tmp);
  };
  _no_name_provided__92.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__92.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__93() {
  }
  _no_name_provided__93.prototype.invoke_pi9f13_k$ = function ($this$configure, it) {
    var tmp = TokenType_INVALID_getInstance();
    var tmp_0 = $this$configure.next_0_k$().toString();
    $this$configure.process_iav7o_k$(makeToken$default_0($this$configure, tmp, tmp_0, 0, 4, null));
  };
  _no_name_provided__93.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, LexerContext) : false) ? p1 : THROW_CCE();
    this.invoke_pi9f13_k$(tmp, p2 instanceof Char ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__93.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__94() {
  }
  _no_name_provided__94.prototype.invoke_74vorm_k$ = function ($this$create) {
    var tmp = new Char(32);
    $this$create.invoke_b8gbam_k$(tmp, _no_name_provided_$factory_33());
    var tmp_0 = new Char(13);
    $this$create.invoke_b8gbam_k$(tmp_0, _no_name_provided_$factory_34());
    var tmp_1 = new Char(10);
    $this$create.invoke_b8gbam_k$(tmp_1, _no_name_provided_$factory_35());
    var tmp_2 = new Char(123);
    $this$create.invoke_b8gbam_k$(tmp_2, _no_name_provided_$factory_36());
    var tmp_3 = new Char(125);
    $this$create.invoke_b8gbam_k$(tmp_3, _no_name_provided_$factory_37());
    var tmp_4 = new Char(40);
    $this$create.invoke_b8gbam_k$(tmp_4, _no_name_provided_$factory_38());
    var tmp_5 = new Char(41);
    $this$create.invoke_b8gbam_k$(tmp_5, _no_name_provided_$factory_39());
    var tmp_6 = new Char(91);
    $this$create.invoke_b8gbam_k$(tmp_6, _no_name_provided_$factory_40());
    var tmp_7 = new Char(93);
    $this$create.invoke_b8gbam_k$(tmp_7, _no_name_provided_$factory_41());
    $this$create.invoke_rw362x_k$('..', _no_name_provided_$factory_42());
    var tmp_8 = new Char(46);
    $this$create.invoke_b8gbam_k$(tmp_8, _no_name_provided_$factory_43());
    var tmp_9 = new Char(44);
    $this$create.invoke_b8gbam_k$(tmp_9, _no_name_provided_$factory_44());
    $this$create.invoke_rw362x_k$('::', _no_name_provided_$factory_45());
    var tmp_10 = new Char(58);
    $this$create.invoke_b8gbam_k$(tmp_10, _no_name_provided_$factory_46());
    var tmp_11 = new Char(59);
    $this$create.invoke_b8gbam_k$(tmp_11, _no_name_provided_$factory_47());
    $this$create.invoke_rw362x_k$('+=', _no_name_provided_$factory_48());
    $this$create.invoke_rw362x_k$('++', _no_name_provided_$factory_49());
    var tmp_12 = new Char(43);
    $this$create.invoke_b8gbam_k$(tmp_12, _no_name_provided_$factory_50());
    $this$create.invoke_rw362x_k$('->', _no_name_provided_$factory_51());
    $this$create.invoke_rw362x_k$('-=', _no_name_provided_$factory_52());
    $this$create.invoke_rw362x_k$('--', _no_name_provided_$factory_53());
    var tmp_13 = new Char(45);
    $this$create.invoke_b8gbam_k$(tmp_13, _no_name_provided_$factory_54());
    $this$create.invoke_rw362x_k$('%=', _no_name_provided_$factory_55());
    var tmp_14 = new Char(37);
    $this$create.invoke_b8gbam_k$(tmp_14, _no_name_provided_$factory_56());
    $this$create.invoke_rw362x_k$('*=', _no_name_provided_$factory_57());
    var tmp_15 = new Char(42);
    $this$create.invoke_b8gbam_k$(tmp_15, _no_name_provided_$factory_58());
    $this$create.invoke_rw362x_k$('//', _no_name_provided_$factory_59());
    $this$create.invoke_rw362x_k$('/*', _no_name_provided_$factory_60());
    $this$create.invoke_rw362x_k$('/=', _no_name_provided_$factory_61());
    var tmp_16 = new Char(47);
    $this$create.invoke_b8gbam_k$(tmp_16, _no_name_provided_$factory_62());
    var tmp_17 = new Char(92);
    $this$create.invoke_b8gbam_k$(tmp_17, _no_name_provided_$factory_63());
    $this$create.invoke_rw362x_k$('!=', _no_name_provided_$factory_64());
    $this$create.invoke_rw362x_k$('!!', _no_name_provided_$factory_65());
    var tmp_18 = new Char(33);
    $this$create.invoke_b8gbam_k$(tmp_18, _no_name_provided_$factory_66());
    $this$create.invoke_rw362x_k$('?:', _no_name_provided_$factory_67());
    $this$create.invoke_rw362x_k$('?.', _no_name_provided_$factory_68());
    var tmp_19 = new Char(63);
    $this$create.invoke_b8gbam_k$(tmp_19, _no_name_provided_$factory_69());
    $this$create.invoke_rw362x_k$('==', _no_name_provided_$factory_70());
    var tmp_20 = new Char(61);
    $this$create.invoke_b8gbam_k$(tmp_20, _no_name_provided_$factory_71());
    $this$create.invoke_rw362x_k$('||', _no_name_provided_$factory_72());
    $this$create.invoke_rw362x_k$('|', _no_name_provided_$factory_73());
    $this$create.invoke_rw362x_k$('&&', _no_name_provided_$factory_74());
    $this$create.invoke_rw362x_k$('&', _no_name_provided_$factory_75());
    $this$create.invoke_rw362x_k$('<=', _no_name_provided_$factory_76());
    var tmp_21 = new Char(60);
    $this$create.invoke_b8gbam_k$(tmp_21, _no_name_provided_$factory_77());
    $this$create.invoke_rw362x_k$('>=', _no_name_provided_$factory_78());
    var tmp_22 = new Char(62);
    $this$create.invoke_b8gbam_k$(tmp_22, _no_name_provided_$factory_79());
    var tmp_23 = new Char(39);
    $this$create.invoke_b8gbam_k$(tmp_23, _no_name_provided_$factory_80());
    $this$create.invoke_rw362x_k$('"""', _no_name_provided_$factory_81());
    $this$create.invoke_rw362x_k$('""', _no_name_provided_$factory_82());
    var tmp_24 = new Char(34);
    $this$create.invoke_b8gbam_k$(tmp_24, _no_name_provided_$factory_83());
    $this$create.invoke_rw362x_k$('`', _no_name_provided_$factory_84());
    var tmp_25 = $this$create.matching_zi9qff_k$(Companion_getInstance_12()._isDigit);
    tmp_25.configure_mo7eqk_k$(_no_name_provided_$factory_85());
    var tmp_26 = _no_name_provided_$factory_86();
    var tmp_27 = $this$create.matching_zi9qff_k$(new sam$com_github_notjustanna_tartar_api_dsl_CharPredicate$0_2(tmp_26));
    tmp_27.configure_mo7eqk_k$(_no_name_provided_$factory_87());
    $this$create.configure_mo7eqk_k$(_no_name_provided_$factory_88());
  };
  _no_name_provided__94.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_74vorm_k$((!(p1 == null) ? isInterface(p1, LexerDSL) : false) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__94.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_32() {
    var i = new _no_name_provided__94();
    return function (p1) {
      i.invoke_74vorm_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_33() {
    var i = new _no_name_provided__38();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_34() {
    var i = new _no_name_provided__39();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_35() {
    var i = new _no_name_provided__40();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_36() {
    var i = new _no_name_provided__41();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_37() {
    var i = new _no_name_provided__42();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_38() {
    var i = new _no_name_provided__43();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_39() {
    var i = new _no_name_provided__44();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_40() {
    var i = new _no_name_provided__45();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_41() {
    var i = new _no_name_provided__46();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_42() {
    var i = new _no_name_provided__47();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_43() {
    var i = new _no_name_provided__48();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_44() {
    var i = new _no_name_provided__49();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_45() {
    var i = new _no_name_provided__50();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_46() {
    var i = new _no_name_provided__51();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_47() {
    var i = new _no_name_provided__52();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_48() {
    var i = new _no_name_provided__53();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_49() {
    var i = new _no_name_provided__54();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_50() {
    var i = new _no_name_provided__55();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_51() {
    var i = new _no_name_provided__56();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_52() {
    var i = new _no_name_provided__57();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_53() {
    var i = new _no_name_provided__58();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_54() {
    var i = new _no_name_provided__59();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_55() {
    var i = new _no_name_provided__60();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_56() {
    var i = new _no_name_provided__61();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_57() {
    var i = new _no_name_provided__62();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_58() {
    var i = new _no_name_provided__63();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_59() {
    var i = new _no_name_provided__64();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_60() {
    var i = new _no_name_provided__65();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_61() {
    var i = new _no_name_provided__66();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_62() {
    var i = new _no_name_provided__67();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_63() {
    var i = new _no_name_provided__68();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_64() {
    var i = new _no_name_provided__69();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_65() {
    var i = new _no_name_provided__70();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_66() {
    var i = new _no_name_provided__71();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_67() {
    var i = new _no_name_provided__72();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_68() {
    var i = new _no_name_provided__73();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_69() {
    var i = new _no_name_provided__74();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_70() {
    var i = new _no_name_provided__75();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_71() {
    var i = new _no_name_provided__76();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_72() {
    var i = new _no_name_provided__77();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_73() {
    var i = new _no_name_provided__78();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_74() {
    var i = new _no_name_provided__79();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_75() {
    var i = new _no_name_provided__80();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_76() {
    var i = new _no_name_provided__81();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_77() {
    var i = new _no_name_provided__82();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_78() {
    var i = new _no_name_provided__83();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_79() {
    var i = new _no_name_provided__84();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_80() {
    var i = new _no_name_provided__85();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_81() {
    var i = new _no_name_provided__86();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_82() {
    var i = new _no_name_provided__87();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_83() {
    var i = new _no_name_provided__88();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_84() {
    var i = new _no_name_provided__89();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_85() {
    var i = new _no_name_provided__90();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_86() {
    var i = new _no_name_provided__91();
    return function (p1) {
      return i.invoke_wi8o78_k$(p1);
    };
  }
  function _no_name_provided_$factory_87() {
    var i = new _no_name_provided__92();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_88() {
    var i = new _no_name_provided__93();
    return function (p1, p2) {
      i.invoke_pi9f13_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function readLinIdentifier(_this_, firstChar) {
    var buf_0 = StringBuilder_init_$Create$_0();
    var tmp0_safe_receiver = firstChar;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = buf_0.append_wi8o78_k$(tmp0_safe_receiver);
        break $l$block;
      }
    }
    Unit_getInstance();
    $l$break: while (_this_.hasNext_0_k$()) {
      var cc = _this_.peek_0_k$();
      if ((isLetterOrDigit(cc) ? true : cc.equals(new Char(95))) ? true : cc.equals(new Char(64))) {
        buf_0.append_wi8o78_k$(cc);
        Unit_getInstance();
        _this_.next_0_k$();
        Unit_getInstance();
      } else {
        break $l$break;
      }
    }
    return buf_0.toString();
  }
  function readLinTemplateString(_this_, delim, raw) {
    var buf_0 = StringBuilder_init_$Create$_0();
    var eol = false;
    $l$break_1: while (_this_.hasNext_0_k$()) {
      var c = _this_.peek_0_k$();
      if (c.equals(new Char(36))) {
        _this_.next_0_k$();
        Unit_getInstance();
        if (_this_.peek_0_k$().equals(new Char(123))) {
          _this_.next_0_k$();
          Unit_getInstance();
          var tmp = TokenType_STRING_getInstance();
          var tmp_0 = buf_0.toString();
          _this_.process_iav7o_k$(makeToken$default_0(_this_, tmp, tmp_0, 0, 4, null));
          var tmp_1 = TokenType_PLUS_getInstance();
          _this_.process_iav7o_k$(makeToken$default(_this_, tmp_1, 0, 2, null));
          buf_0.clear_0_k$();
          Unit_getInstance();
          var braces = 0;
          var tmp_2 = TokenType_L_PAREN_getInstance();
          _this_.process_iav7o_k$(makeToken$default(_this_, tmp_2, 0, 2, null));
          $l$break: while (_this_.hasNext_0_k$()) {
            var cc = _this_.peek_0_k$();
            if (cc.equals(new Char(125))) {
              if (braces === 0) {
                _this_.next_0_k$();
                Unit_getInstance();
                break $l$break;
              } else {
                var tmp0 = braces;
                braces = tmp0 - 1 | 0;
                Unit_getInstance();
              }
            } else if (cc.equals(new Char(123))) {
              var tmp1 = braces;
              braces = tmp1 + 1 | 0;
              Unit_getInstance();
            }{
              var tmp0_forEach_0 = _this_.parseOnce_0_k$();
              var tmp0_iterator_1 = tmp0_forEach_0.iterator_0_k$();
              while (tmp0_iterator_1.hasNext_0_k$()) {
                var element_2 = tmp0_iterator_1.next_0_k$();
                _this_.process_iav7o_k$(element_2);
              }
            }
          }
          var tmp_3 = TokenType_R_PAREN_getInstance();
          _this_.process_iav7o_k$(makeToken$default(_this_, tmp_3, 0, 2, null));
          var tmp_4 = TokenType_PLUS_getInstance();
          _this_.process_iav7o_k$(makeToken$default(_this_, tmp_4, 0, 2, null));
        } else if (isLetter(_this_.peek_0_k$())) {
          var tmp_5 = TokenType_STRING_getInstance();
          var tmp_6 = buf_0.toString();
          _this_.process_iav7o_k$(makeToken$default_0(_this_, tmp_5, tmp_6, 0, 4, null));
          var tmp_7 = TokenType_PLUS_getInstance();
          _this_.process_iav7o_k$(makeToken$default(_this_, tmp_7, 0, 2, null));
          buf_0.clear_0_k$();
          Unit_getInstance();
          buf_0.append_wi8o78_k$(_this_.next_0_k$());
          Unit_getInstance();
          while (_this_.hasNext_0_k$() ? isLetterOrDigit(_this_.peek_0_k$()) : false) {
            buf_0.append_wi8o78_k$(_this_.next_0_k$());
            Unit_getInstance();
          }
          var tmp_8 = TokenType_IDENTIFIER_getInstance();
          var tmp_9 = buf_0.toString();
          _this_.process_iav7o_k$(makeToken$default_0(_this_, tmp_8, tmp_9, 0, 4, null));
          buf_0.clear_0_k$();
          Unit_getInstance();
          var tmp_10 = TokenType_PLUS_getInstance();
          _this_.process_iav7o_k$(makeToken$default(_this_, tmp_10, 0, 2, null));
        } else {
          buf_0.append_wi8o78_k$(_this_.next_0_k$());
          Unit_getInstance();
        }
      } else if (c.equals(new Char(92)) ? raw : false) {
        _this_.next_0_k$();
        Unit_getInstance();
        if (!_this_.hasNext_0_k$())
          break $l$break_1;
        var tmp2_subject = _this_.next_0_k$();
        if (tmp2_subject.equals(new Char(110))) {
          buf_0.append_wi8o78_k$(new Char(10));
          Unit_getInstance();
        } else if (tmp2_subject.equals(new Char(114))) {
          buf_0.append_wi8o78_k$(new Char(13));
          Unit_getInstance();
        } else if (tmp2_subject.equals(new Char(98))) {
          buf_0.append_wi8o78_k$(new Char(8));
          Unit_getInstance();
        } else if (tmp2_subject.equals(new Char(116))) {
          buf_0.append_wi8o78_k$(new Char(9));
          Unit_getInstance();
        } else if (tmp2_subject.equals(new Char(39))) {
          buf_0.append_wi8o78_k$(new Char(39));
          Unit_getInstance();
        } else if (tmp2_subject.equals(new Char(34))) {
          buf_0.append_wi8o78_k$(new Char(34));
          Unit_getInstance();
        } else if (tmp2_subject.equals(new Char(92))) {
          buf_0.append_wi8o78_k$(new Char(92));
          Unit_getInstance();
        } else if (tmp2_subject.equals(new Char(117))) {
          var u = _this_.peekString_ha5a7z_k$(4);
          if (!(u.length === 4))
            throw IllegalStateException_init_$Create$('File terminated before escaping');
          var tmp3_safe_receiver = toIntOrNull(u, 16);
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : numberToChar(tmp3_safe_receiver);
          var tmp_11;
          if (tmp4_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Illegal unicode escaping');
          } else {
            tmp_11 = tmp4_elvis_lhs;
          }
          buf_0.append_wi8o78_k$(tmp_11);
          Unit_getInstance();
          _this_.nextString_ha5a7z_k$(4);
          Unit_getInstance();
        } else
          throw IllegalStateException_init_$Create$('Unknown escaping');
      } else if (_this_.peekString_ha5a7z_k$(delim.length) === delim) {
        _this_.nextString_ha5a7z_k$(delim.length);
        Unit_getInstance();
        eol = true;
        break $l$break_1;
      } else {
        _this_.next_0_k$();
        Unit_getInstance();
        buf_0.append_wi8o78_k$(c);
        Unit_getInstance();
      }
    }
    if (!eol) {
      throw IllegalStateException_init_$Create$('Unterminated string');
    }_this_.process_iav7o_k$(makeToken_0(_this_, TokenType_STRING_getInstance(), buf_0.toString(), 2));
  }
  var TokenType_L_BRACE_instance;
  var TokenType_R_BRACE_instance;
  var TokenType_L_PAREN_instance;
  var TokenType_R_PAREN_instance;
  var TokenType_L_BRACKET_instance;
  var TokenType_R_BRACKET_instance;
  var TokenType_LT_instance;
  var TokenType_GT_instance;
  var TokenType_LTE_instance;
  var TokenType_GTE_instance;
  var TokenType_EQ_instance;
  var TokenType_NEQ_instance;
  var TokenType_RANGE_instance;
  var TokenType_AND_instance;
  var TokenType_OR_instance;
  var TokenType_AMP_instance;
  var TokenType_PIPE_instance;
  var TokenType_PLUS_instance;
  var TokenType_MINUS_instance;
  var TokenType_ASTERISK_instance;
  var TokenType_SLASH_instance;
  var TokenType_BACKSLASH_instance;
  var TokenType_REM_instance;
  var TokenType_ASSIGN_instance;
  var TokenType_PLUS_ASSIGN_instance;
  var TokenType_MINUS_ASSIGN_instance;
  var TokenType_ASTERISK_ASSIGN_instance;
  var TokenType_SLASH_ASSIGN_instance;
  var TokenType_REM_ASSIGN_instance;
  var TokenType_QUESTION_instance;
  var TokenType_QUESTION_DOT_instance;
  var TokenType_ELVIS_instance;
  var TokenType_DOUBLE_BANG_instance;
  var TokenType_BANG_instance;
  var TokenType_ARROW_instance;
  var TokenType_INCREMENT_instance;
  var TokenType_DECREMENT_instance;
  var TokenType_STRING_instance;
  var TokenType_IDENTIFIER_instance;
  var TokenType_INTEGER_instance;
  var TokenType_DECIMAL_instance;
  var TokenType_TRUE_instance;
  var TokenType_FALSE_instance;
  var TokenType_NULL_instance;
  var TokenType_DOT_instance;
  var TokenType_COMMA_instance;
  var TokenType_COLON_instance;
  var TokenType_DOUBLE_COLON_instance;
  var TokenType_QUESTION_DOUBLE_COLON_instance;
  var TokenType_SEMICOLON_instance;
  var TokenType_NL_instance;
  var TokenType_BREAK_instance;
  var TokenType_CONTINUE_instance;
  var TokenType_DO_instance;
  var TokenType_ELSE_instance;
  var TokenType_FOR_instance;
  var TokenType_FUN_instance;
  var TokenType_IF_instance;
  var TokenType_IN_instance;
  var TokenType_IS_instance;
  var TokenType_RETURN_instance;
  var TokenType_THIS_instance;
  var TokenType_THROW_instance;
  var TokenType_TRY_instance;
  var TokenType_TYPEOF_instance;
  var TokenType_VAL_instance;
  var TokenType_VAR_instance;
  var TokenType_WHEN_instance;
  var TokenType_WHILE_instance;
  var TokenType_INVALID_instance;
  var TokenType_RESERVED_instance;
  var TokenType_entriesInitialized;
  function TokenType_initEntries() {
    if (TokenType_entriesInitialized)
      return Unit_getInstance();
    TokenType_entriesInitialized = true;
    TokenType_L_BRACE_instance = new TokenType('L_BRACE', 0);
    TokenType_R_BRACE_instance = new TokenType('R_BRACE', 1);
    TokenType_L_PAREN_instance = new TokenType('L_PAREN', 2);
    TokenType_R_PAREN_instance = new TokenType('R_PAREN', 3);
    TokenType_L_BRACKET_instance = new TokenType('L_BRACKET', 4);
    TokenType_R_BRACKET_instance = new TokenType('R_BRACKET', 5);
    TokenType_LT_instance = new TokenType('LT', 6);
    TokenType_GT_instance = new TokenType('GT', 7);
    TokenType_LTE_instance = new TokenType('LTE', 8);
    TokenType_GTE_instance = new TokenType('GTE', 9);
    TokenType_EQ_instance = new TokenType('EQ', 10);
    TokenType_NEQ_instance = new TokenType('NEQ', 11);
    TokenType_RANGE_instance = new TokenType('RANGE', 12);
    TokenType_AND_instance = new TokenType('AND', 13);
    TokenType_OR_instance = new TokenType('OR', 14);
    TokenType_AMP_instance = new TokenType('AMP', 15);
    TokenType_PIPE_instance = new TokenType('PIPE', 16);
    TokenType_PLUS_instance = new TokenType('PLUS', 17);
    TokenType_MINUS_instance = new TokenType('MINUS', 18);
    TokenType_ASTERISK_instance = new TokenType('ASTERISK', 19);
    TokenType_SLASH_instance = new TokenType('SLASH', 20);
    TokenType_BACKSLASH_instance = new TokenType('BACKSLASH', 21);
    TokenType_REM_instance = new TokenType('REM', 22);
    TokenType_ASSIGN_instance = new TokenType('ASSIGN', 23);
    TokenType_PLUS_ASSIGN_instance = new TokenType('PLUS_ASSIGN', 24);
    TokenType_MINUS_ASSIGN_instance = new TokenType('MINUS_ASSIGN', 25);
    TokenType_ASTERISK_ASSIGN_instance = new TokenType('ASTERISK_ASSIGN', 26);
    TokenType_SLASH_ASSIGN_instance = new TokenType('SLASH_ASSIGN', 27);
    TokenType_REM_ASSIGN_instance = new TokenType('REM_ASSIGN', 28);
    TokenType_QUESTION_instance = new TokenType('QUESTION', 29);
    TokenType_QUESTION_DOT_instance = new TokenType('QUESTION_DOT', 30);
    TokenType_ELVIS_instance = new TokenType('ELVIS', 31);
    TokenType_DOUBLE_BANG_instance = new TokenType('DOUBLE_BANG', 32);
    TokenType_BANG_instance = new TokenType('BANG', 33);
    TokenType_ARROW_instance = new TokenType('ARROW', 34);
    TokenType_INCREMENT_instance = new TokenType('INCREMENT', 35);
    TokenType_DECREMENT_instance = new TokenType('DECREMENT', 36);
    TokenType_STRING_instance = new TokenType('STRING', 37);
    TokenType_IDENTIFIER_instance = new TokenType('IDENTIFIER', 38);
    TokenType_INTEGER_instance = new TokenType('INTEGER', 39);
    TokenType_DECIMAL_instance = new TokenType('DECIMAL', 40);
    TokenType_TRUE_instance = new TokenType('TRUE', 41);
    TokenType_FALSE_instance = new TokenType('FALSE', 42);
    TokenType_NULL_instance = new TokenType('NULL', 43);
    TokenType_DOT_instance = new TokenType('DOT', 44);
    TokenType_COMMA_instance = new TokenType('COMMA', 45);
    TokenType_COLON_instance = new TokenType('COLON', 46);
    TokenType_DOUBLE_COLON_instance = new TokenType('DOUBLE_COLON', 47);
    TokenType_QUESTION_DOUBLE_COLON_instance = new TokenType('QUESTION_DOUBLE_COLON', 48);
    TokenType_SEMICOLON_instance = new TokenType('SEMICOLON', 49);
    TokenType_NL_instance = new TokenType('NL', 50);
    TokenType_BREAK_instance = new TokenType('BREAK', 51);
    TokenType_CONTINUE_instance = new TokenType('CONTINUE', 52);
    TokenType_DO_instance = new TokenType('DO', 53);
    TokenType_ELSE_instance = new TokenType('ELSE', 54);
    TokenType_FOR_instance = new TokenType('FOR', 55);
    TokenType_FUN_instance = new TokenType('FUN', 56);
    TokenType_IF_instance = new TokenType('IF', 57);
    TokenType_IN_instance = new TokenType('IN', 58);
    TokenType_IS_instance = new TokenType('IS', 59);
    TokenType_RETURN_instance = new TokenType('RETURN', 60);
    TokenType_THIS_instance = new TokenType('THIS', 61);
    TokenType_THROW_instance = new TokenType('THROW', 62);
    TokenType_TRY_instance = new TokenType('TRY', 63);
    TokenType_TYPEOF_instance = new TokenType('TYPEOF', 64);
    TokenType_VAL_instance = new TokenType('VAL', 65);
    TokenType_VAR_instance = new TokenType('VAR', 66);
    TokenType_WHEN_instance = new TokenType('WHEN', 67);
    TokenType_WHILE_instance = new TokenType('WHILE', 68);
    TokenType_INVALID_instance = new TokenType('INVALID', 69);
    TokenType_RESERVED_instance = new TokenType('RESERVED', 70);
  }
  function TokenType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  TokenType.$metadata$ = {
    simpleName: 'TokenType',
    kind: 'class',
    interfaces: []
  };
  function TokenType_L_BRACE_getInstance() {
    TokenType_initEntries();
    return TokenType_L_BRACE_instance;
  }
  function TokenType_R_BRACE_getInstance() {
    TokenType_initEntries();
    return TokenType_R_BRACE_instance;
  }
  function TokenType_L_PAREN_getInstance() {
    TokenType_initEntries();
    return TokenType_L_PAREN_instance;
  }
  function TokenType_R_PAREN_getInstance() {
    TokenType_initEntries();
    return TokenType_R_PAREN_instance;
  }
  function TokenType_L_BRACKET_getInstance() {
    TokenType_initEntries();
    return TokenType_L_BRACKET_instance;
  }
  function TokenType_R_BRACKET_getInstance() {
    TokenType_initEntries();
    return TokenType_R_BRACKET_instance;
  }
  function TokenType_LT_getInstance() {
    TokenType_initEntries();
    return TokenType_LT_instance;
  }
  function TokenType_GT_getInstance() {
    TokenType_initEntries();
    return TokenType_GT_instance;
  }
  function TokenType_LTE_getInstance() {
    TokenType_initEntries();
    return TokenType_LTE_instance;
  }
  function TokenType_GTE_getInstance() {
    TokenType_initEntries();
    return TokenType_GTE_instance;
  }
  function TokenType_EQ_getInstance() {
    TokenType_initEntries();
    return TokenType_EQ_instance;
  }
  function TokenType_NEQ_getInstance() {
    TokenType_initEntries();
    return TokenType_NEQ_instance;
  }
  function TokenType_RANGE_getInstance() {
    TokenType_initEntries();
    return TokenType_RANGE_instance;
  }
  function TokenType_AND_getInstance() {
    TokenType_initEntries();
    return TokenType_AND_instance;
  }
  function TokenType_OR_getInstance() {
    TokenType_initEntries();
    return TokenType_OR_instance;
  }
  function TokenType_AMP_getInstance() {
    TokenType_initEntries();
    return TokenType_AMP_instance;
  }
  function TokenType_PIPE_getInstance() {
    TokenType_initEntries();
    return TokenType_PIPE_instance;
  }
  function TokenType_PLUS_getInstance() {
    TokenType_initEntries();
    return TokenType_PLUS_instance;
  }
  function TokenType_MINUS_getInstance() {
    TokenType_initEntries();
    return TokenType_MINUS_instance;
  }
  function TokenType_ASTERISK_getInstance() {
    TokenType_initEntries();
    return TokenType_ASTERISK_instance;
  }
  function TokenType_SLASH_getInstance() {
    TokenType_initEntries();
    return TokenType_SLASH_instance;
  }
  function TokenType_BACKSLASH_getInstance() {
    TokenType_initEntries();
    return TokenType_BACKSLASH_instance;
  }
  function TokenType_REM_getInstance() {
    TokenType_initEntries();
    return TokenType_REM_instance;
  }
  function TokenType_ASSIGN_getInstance() {
    TokenType_initEntries();
    return TokenType_ASSIGN_instance;
  }
  function TokenType_PLUS_ASSIGN_getInstance() {
    TokenType_initEntries();
    return TokenType_PLUS_ASSIGN_instance;
  }
  function TokenType_MINUS_ASSIGN_getInstance() {
    TokenType_initEntries();
    return TokenType_MINUS_ASSIGN_instance;
  }
  function TokenType_ASTERISK_ASSIGN_getInstance() {
    TokenType_initEntries();
    return TokenType_ASTERISK_ASSIGN_instance;
  }
  function TokenType_SLASH_ASSIGN_getInstance() {
    TokenType_initEntries();
    return TokenType_SLASH_ASSIGN_instance;
  }
  function TokenType_REM_ASSIGN_getInstance() {
    TokenType_initEntries();
    return TokenType_REM_ASSIGN_instance;
  }
  function TokenType_QUESTION_getInstance() {
    TokenType_initEntries();
    return TokenType_QUESTION_instance;
  }
  function TokenType_QUESTION_DOT_getInstance() {
    TokenType_initEntries();
    return TokenType_QUESTION_DOT_instance;
  }
  function TokenType_ELVIS_getInstance() {
    TokenType_initEntries();
    return TokenType_ELVIS_instance;
  }
  function TokenType_DOUBLE_BANG_getInstance() {
    TokenType_initEntries();
    return TokenType_DOUBLE_BANG_instance;
  }
  function TokenType_BANG_getInstance() {
    TokenType_initEntries();
    return TokenType_BANG_instance;
  }
  function TokenType_ARROW_getInstance() {
    TokenType_initEntries();
    return TokenType_ARROW_instance;
  }
  function TokenType_INCREMENT_getInstance() {
    TokenType_initEntries();
    return TokenType_INCREMENT_instance;
  }
  function TokenType_DECREMENT_getInstance() {
    TokenType_initEntries();
    return TokenType_DECREMENT_instance;
  }
  function TokenType_STRING_getInstance() {
    TokenType_initEntries();
    return TokenType_STRING_instance;
  }
  function TokenType_IDENTIFIER_getInstance() {
    TokenType_initEntries();
    return TokenType_IDENTIFIER_instance;
  }
  function TokenType_INTEGER_getInstance() {
    TokenType_initEntries();
    return TokenType_INTEGER_instance;
  }
  function TokenType_DECIMAL_getInstance() {
    TokenType_initEntries();
    return TokenType_DECIMAL_instance;
  }
  function TokenType_TRUE_getInstance() {
    TokenType_initEntries();
    return TokenType_TRUE_instance;
  }
  function TokenType_FALSE_getInstance() {
    TokenType_initEntries();
    return TokenType_FALSE_instance;
  }
  function TokenType_NULL_getInstance() {
    TokenType_initEntries();
    return TokenType_NULL_instance;
  }
  function TokenType_DOT_getInstance() {
    TokenType_initEntries();
    return TokenType_DOT_instance;
  }
  function TokenType_COMMA_getInstance() {
    TokenType_initEntries();
    return TokenType_COMMA_instance;
  }
  function TokenType_COLON_getInstance() {
    TokenType_initEntries();
    return TokenType_COLON_instance;
  }
  function TokenType_DOUBLE_COLON_getInstance() {
    TokenType_initEntries();
    return TokenType_DOUBLE_COLON_instance;
  }
  function TokenType_SEMICOLON_getInstance() {
    TokenType_initEntries();
    return TokenType_SEMICOLON_instance;
  }
  function TokenType_NL_getInstance() {
    TokenType_initEntries();
    return TokenType_NL_instance;
  }
  function TokenType_BREAK_getInstance() {
    TokenType_initEntries();
    return TokenType_BREAK_instance;
  }
  function TokenType_CONTINUE_getInstance() {
    TokenType_initEntries();
    return TokenType_CONTINUE_instance;
  }
  function TokenType_DO_getInstance() {
    TokenType_initEntries();
    return TokenType_DO_instance;
  }
  function TokenType_ELSE_getInstance() {
    TokenType_initEntries();
    return TokenType_ELSE_instance;
  }
  function TokenType_FOR_getInstance() {
    TokenType_initEntries();
    return TokenType_FOR_instance;
  }
  function TokenType_FUN_getInstance() {
    TokenType_initEntries();
    return TokenType_FUN_instance;
  }
  function TokenType_IF_getInstance() {
    TokenType_initEntries();
    return TokenType_IF_instance;
  }
  function TokenType_IN_getInstance() {
    TokenType_initEntries();
    return TokenType_IN_instance;
  }
  function TokenType_IS_getInstance() {
    TokenType_initEntries();
    return TokenType_IS_instance;
  }
  function TokenType_RETURN_getInstance() {
    TokenType_initEntries();
    return TokenType_RETURN_instance;
  }
  function TokenType_THIS_getInstance() {
    TokenType_initEntries();
    return TokenType_THIS_instance;
  }
  function TokenType_THROW_getInstance() {
    TokenType_initEntries();
    return TokenType_THROW_instance;
  }
  function TokenType_TRY_getInstance() {
    TokenType_initEntries();
    return TokenType_TRY_instance;
  }
  function TokenType_TYPEOF_getInstance() {
    TokenType_initEntries();
    return TokenType_TYPEOF_instance;
  }
  function TokenType_VAL_getInstance() {
    TokenType_initEntries();
    return TokenType_VAL_instance;
  }
  function TokenType_VAR_getInstance() {
    TokenType_initEntries();
    return TokenType_VAR_instance;
  }
  function TokenType_WHEN_getInstance() {
    TokenType_initEntries();
    return TokenType_WHEN_instance;
  }
  function TokenType_WHILE_getInstance() {
    TokenType_initEntries();
    return TokenType_WHILE_instance;
  }
  function TokenType_INVALID_getInstance() {
    TokenType_initEntries();
    return TokenType_INVALID_instance;
  }
  function linStdGrammar() {
    var tmp = Companion_getInstance_13();
    return tmp.create_x7pxok_k$(_no_name_provided_$factory_89());
  }
  function _no_name_provided__95() {
  }
  _no_name_provided__95.prototype.invoke_b5khsk_k$ = function ($this$create) {
    var tmp = TokenType_INTEGER_getInstance();
    var tmp_0 = IntegerParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp, tmp_0, false, 4, null);
    var tmp_1 = TokenType_DECIMAL_getInstance();
    var tmp_2 = DecimalParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_1, tmp_2, false, 4, null);
    var tmp_3 = TokenType_NULL_getInstance();
    var tmp_4 = NullParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_3, tmp_4, false, 4, null);
    var tmp_5 = TokenType_THIS_getInstance();
    var tmp_6 = ThisParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_5, tmp_6, false, 4, null);
    var tmp_7 = TokenType_STRING_getInstance();
    var tmp_8 = StringParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_7, tmp_8, false, 4, null);
    var tmp_9 = TokenType_TRUE_getInstance();
    var tmp_10 = new BooleanParser(true);
    $this$create.prefix$default_914gix_k$(tmp_9, tmp_10, false, 4, null);
    var tmp_11 = TokenType_FALSE_getInstance();
    var tmp_12 = new BooleanParser(false);
    $this$create.prefix$default_914gix_k$(tmp_11, tmp_12, false, 4, null);
    var tmp_13 = TokenType_L_BRACE_getInstance();
    var tmp_14 = ObjectParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_13, tmp_14, false, 4, null);
    var tmp_15 = TokenType_L_BRACKET_getInstance();
    var tmp_16 = ArrayParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_15, tmp_16, false, 4, null);
    var tmp_17 = TokenType_FUN_getInstance();
    var tmp_18 = FunctionParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_17, tmp_18, false, 4, null);
    var tmp_19 = TokenType_RETURN_getInstance();
    var tmp_20 = ReturnParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_19, tmp_20, false, 4, null);
    var tmp_21 = TokenType_THROW_getInstance();
    var tmp_22 = ThrowParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_21, tmp_22, false, 4, null);
    var tmp_23 = TokenType_BREAK_getInstance();
    var tmp_24 = BreakParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_23, tmp_24, false, 4, null);
    var tmp_25 = TokenType_CONTINUE_getInstance();
    var tmp_26 = ContinueParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_25, tmp_26, false, 4, null);
    var tmp_27 = TokenType_IF_getInstance();
    var tmp_28 = IfParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_27, tmp_28, false, 4, null);
    var tmp_29 = TokenType_DO_getInstance();
    var tmp_30 = DoParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_29, tmp_30, false, 4, null);
    var tmp_31 = TokenType_WHILE_getInstance();
    var tmp_32 = WhileParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_31, tmp_32, false, 4, null);
    var tmp_33 = TokenType_FOR_getInstance();
    var tmp_34 = ForParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_33, tmp_34, false, 4, null);
    var tmp_35 = TokenType_BANG_getInstance();
    var tmp_36 = new UnaryOperatorParser(UnaryOperationType_NOT_getInstance());
    $this$create.prefix$default_914gix_k$(tmp_35, tmp_36, false, 4, null);
    var tmp_37 = TokenType_DOUBLE_BANG_getInstance();
    var tmp_38 = new UnaryOperatorParser(UnaryOperationType_TRUTH_getInstance());
    $this$create.prefix$default_914gix_k$(tmp_37, tmp_38, false, 4, null);
    var tmp_39 = TokenType_PLUS_getInstance();
    var tmp_40 = new UnaryOperatorParser(UnaryOperationType_POSITIVE_getInstance());
    $this$create.prefix$default_914gix_k$(tmp_39, tmp_40, false, 4, null);
    var tmp_41 = TokenType_MINUS_getInstance();
    var tmp_42 = new UnaryOperatorParser(UnaryOperationType_NEGATIVE_getInstance());
    $this$create.prefix$default_914gix_k$(tmp_41, tmp_42, false, 4, null);
    var tmp_43 = TokenType_EQ_getInstance();
    Precedence_getInstance();
    var tmp_44 = BinaryOperationType_EQUALS_getInstance();
    var tmp_45 = BinaryOperatorParser_init_$Create$(5, tmp_44, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_43, tmp_45, false, 4, null);
    var tmp_46 = TokenType_NEQ_getInstance();
    Precedence_getInstance();
    var tmp_47 = BinaryOperationType_NOT_EQUALS_getInstance();
    var tmp_48 = BinaryOperatorParser_init_$Create$(5, tmp_47, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_46, tmp_48, false, 4, null);
    var tmp_49 = TokenType_PLUS_getInstance();
    Precedence_getInstance();
    var tmp_50 = BinaryOperationType_ADD_getInstance();
    var tmp_51 = BinaryOperatorParser_init_$Create$(11, tmp_50, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_49, tmp_51, false, 4, null);
    var tmp_52 = TokenType_MINUS_getInstance();
    Precedence_getInstance();
    var tmp_53 = BinaryOperationType_SUBTRACT_getInstance();
    var tmp_54 = BinaryOperatorParser_init_$Create$(11, tmp_53, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_52, tmp_54, false, 4, null);
    var tmp_55 = TokenType_ASTERISK_getInstance();
    Precedence_getInstance();
    var tmp_56 = BinaryOperationType_MULTIPLY_getInstance();
    var tmp_57 = BinaryOperatorParser_init_$Create$(12, tmp_56, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_55, tmp_57, false, 4, null);
    var tmp_58 = TokenType_SLASH_getInstance();
    Precedence_getInstance();
    var tmp_59 = BinaryOperationType_DIVIDE_getInstance();
    var tmp_60 = BinaryOperatorParser_init_$Create$(12, tmp_59, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_58, tmp_60, false, 4, null);
    var tmp_61 = TokenType_REM_getInstance();
    Precedence_getInstance();
    var tmp_62 = BinaryOperationType_REMAINING_getInstance();
    var tmp_63 = BinaryOperatorParser_init_$Create$(12, tmp_62, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_61, tmp_63, false, 4, null);
    var tmp_64 = TokenType_AND_getInstance();
    Precedence_getInstance();
    var tmp_65 = BinaryOperationType_AND_getInstance();
    var tmp_66 = BinaryOperatorParser_init_$Create$(4, tmp_65, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_64, tmp_66, false, 4, null);
    var tmp_67 = TokenType_OR_getInstance();
    Precedence_getInstance();
    var tmp_68 = BinaryOperationType_OR_getInstance();
    var tmp_69 = BinaryOperatorParser_init_$Create$(3, tmp_68, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_67, tmp_69, false, 4, null);
    var tmp_70 = TokenType_LT_getInstance();
    Precedence_getInstance();
    var tmp_71 = BinaryOperationType_LT_getInstance();
    var tmp_72 = BinaryOperatorParser_init_$Create$(6, tmp_71, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_70, tmp_72, false, 4, null);
    var tmp_73 = TokenType_LTE_getInstance();
    Precedence_getInstance();
    var tmp_74 = BinaryOperationType_LTE_getInstance();
    var tmp_75 = BinaryOperatorParser_init_$Create$(6, tmp_74, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_73, tmp_75, false, 4, null);
    var tmp_76 = TokenType_GT_getInstance();
    Precedence_getInstance();
    var tmp_77 = BinaryOperationType_GT_getInstance();
    var tmp_78 = BinaryOperatorParser_init_$Create$(6, tmp_77, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_76, tmp_78, false, 4, null);
    var tmp_79 = TokenType_GTE_getInstance();
    Precedence_getInstance();
    var tmp_80 = BinaryOperationType_GTE_getInstance();
    var tmp_81 = BinaryOperatorParser_init_$Create$(6, tmp_80, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_79, tmp_81, false, 4, null);
    var tmp_82 = TokenType_ELVIS_getInstance();
    Precedence_getInstance();
    var tmp_83 = BinaryOperationType_ELVIS_getInstance();
    var tmp_84 = BinaryOperatorParser_init_$Create$(8, tmp_83, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_82, tmp_84, false, 4, null);
    var tmp_85 = TokenType_IN_getInstance();
    Precedence_getInstance();
    var tmp_86 = BinaryOperationType_IN_getInstance();
    var tmp_87 = BinaryOperatorParser_init_$Create$(7, tmp_86, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_85, tmp_87, false, 4, null);
    var tmp_88 = TokenType_RANGE_getInstance();
    Precedence_getInstance();
    var tmp_89 = BinaryOperationType_RANGE_getInstance();
    var tmp_90 = BinaryOperatorParser_init_$Create$(10, tmp_89, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_88, tmp_90, false, 4, null);
    var tmp_91 = TokenType_IS_getInstance();
    Precedence_getInstance();
    var tmp_92 = BinaryOperationType_IS_getInstance();
    var tmp_93 = BinaryOperatorParser_init_$Create$(7, tmp_92, false, 4, null);
    $this$create.infix$default_dfvar_k$(tmp_91, tmp_93, false, 4, null);
    var tmp_94 = TokenType_VAL_getInstance();
    var tmp_95 = new DeclareVariableParser(false);
    $this$create.prefix$default_914gix_k$(tmp_94, tmp_95, false, 4, null);
    var tmp_96 = TokenType_VAR_getInstance();
    var tmp_97 = new DeclareVariableParser(true);
    $this$create.prefix$default_914gix_k$(tmp_96, tmp_97, false, 4, null);
    var tmp_98 = TokenType_IDENTIFIER_getInstance();
    var tmp_99 = IdentifierParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_98, tmp_99, false, 4, null);
    var tmp_100 = TokenType_L_PAREN_getInstance();
    var tmp_101 = ParenthesisParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_100, tmp_101, false, 4, null);
    var tmp_102 = TokenType_TRY_getInstance();
    var tmp_103 = TryParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_102, tmp_103, false, 4, null);
    var tmp_104 = TokenType_TYPEOF_getInstance();
    var tmp_105 = TypeofParser_getInstance();
    $this$create.prefix$default_914gix_k$(tmp_104, tmp_105, false, 4, null);
    var tmp_106 = TokenType_DOT_getInstance();
    var tmp_107 = new DotParser(false);
    $this$create.infix$default_dfvar_k$(tmp_106, tmp_107, false, 4, null);
    var tmp_108 = TokenType_QUESTION_DOT_getInstance();
    var tmp_109 = new DotParser(true);
    $this$create.infix$default_dfvar_k$(tmp_108, tmp_109, false, 4, null);
    var tmp_110 = TokenType_BANG_getInstance();
    var tmp_111 = InfixBangParser_getInstance();
    $this$create.infix$default_dfvar_k$(tmp_110, tmp_111, false, 4, null);
    var tmp_112 = TokenType_DOUBLE_BANG_getInstance();
    var tmp_113 = DoubleBangParser_getInstance();
    $this$create.infix$default_dfvar_k$(tmp_112, tmp_113, false, 4, null);
    var tmp_114 = TokenType_L_PAREN_getInstance();
    var tmp_115 = InvocationParser_getInstance();
    $this$create.infix$default_dfvar_k$(tmp_114, tmp_115, false, 4, null);
    var tmp_116 = TokenType_L_BRACKET_getInstance();
    var tmp_117 = SubscriptParser_getInstance();
    $this$create.infix$default_dfvar_k$(tmp_116, tmp_117, false, 4, null);
  };
  _no_name_provided__95.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_b5khsk_k$((!(p1 == null) ? isInterface(p1, GrammarDSL) : false) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__95.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_89() {
    var i = new _no_name_provided__95();
    return function (p1) {
      i.invoke_b5khsk_k$(p1);
      return Unit_getInstance();
    };
  }
  function linStdParser(grammar) {
    var tmp = Companion_getInstance_16();
    return tmp.create_l18u9c_k$(grammar, _no_name_provided_$factory_90());
  }
  function _no_name_provided__96($start, $list, $e) {
    this._$start = $start;
    this._$list = $list;
    this._$e = $e;
  }
  _no_name_provided__96.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$start._section);
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray_0(this._$list);
      break $l$block;
    }
    $this$invoke.child_nvozoj_k$(tmp$ret$0.slice());
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([this._$e]);
    Unit_getInstance();
  };
  _no_name_provided__96.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__96.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__97($expr, $this_create) {
    this._$expr = $expr;
    this._$this_create = $this_create;
  }
  _no_name_provided__97.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.child_nvozoj_k$([this._$expr]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException("Should've reached end of content", this._$this_create.eat_0_k$()._section)]);
    Unit_getInstance();
  };
  _no_name_provided__97.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__97.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__98() {
  }
  _no_name_provided__98.prototype.invoke_efrkgz_k$ = function ($this$create) {
    var start = $this$create.peek$default_l3mjq9_k$(0, 1, null);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var list = tmp$ret$0;
    matchAll($this$create, [TokenType_NL_getInstance(), TokenType_SEMICOLON_getInstance()]);
    Unit_getInstance();
    var tmp;
    try {
      do {
        var expr = $this$create.parseExpression$default_l3mjq9_k$(0, 1, null);
        {
          var tmp_0;
          var tmp_1;
          if (expr instanceof FunctionExpr) {
            tmp_1 = !(expr._name_10 == null);
          } else {
            {
              tmp_1 = false;
            }
          }
          if (tmp_1) {
            tmp_0 = new DeclareFunctionExpr(expr._name_10, expr, expr._get_section__0_k$());
          } else {
            {
              tmp_0 = expr;
            }
          }
          var tmp0_plusAssign_0 = tmp_0;
          list.add_2bq_k$(tmp0_plusAssign_0);
          Unit_getInstance();
        }
      }
       while (matchAll($this$create, [TokenType_NL_getInstance(), TokenType_SEMICOLON_getInstance()]) ? !$this$create._get_eof__0_k$() : false);
      var tmp_2;
      var tmp_3;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = !list.isEmpty_0_k$();
        break $l$block_0;
      }
      if (tmp$ret$1) {
        var tmp_4 = last(list);
        tmp_3 = isInterface(tmp_4, Expr);
      } else {
        {
          tmp_3 = false;
        }
      }
      if (tmp_3) {
        var tmp_5 = removeLast(list);
        var last_0 = isInterface(tmp_5, Expr) ? tmp_5 : THROW_CCE();
        tmp_2 = new MultiExpr(list, last_0, start._section);
      } else {
        {
          tmp_2 = new MultiNode(list, start._section);
        }
      }
      tmp = tmp_2;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var tmp_7 = Companion_getInstance_20();
        tmp_6 = tmp_7.invoke_b5r9f6_k$(_no_name_provided_$factory_91(start, list, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_6;
    }
    var expr_0 = tmp;
    var tmp_8;
    if (!$this$create._get_eof__0_k$()) {
      var tmp_9 = Companion_getInstance_20();
      tmp_8 = tmp_9.invoke_b5r9f6_k$(_no_name_provided_$factory_92(expr_0, $this$create));
    } else {
      tmp_8 = expr_0;
    }
    return tmp_8;
  };
  _no_name_provided__98.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_efrkgz_k$((!(p1 == null) ? isInterface(p1, ParserContext) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__98.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_90() {
    var i = new _no_name_provided__98();
    return function (p1) {
      return i.invoke_efrkgz_k$(p1);
    };
  }
  function _no_name_provided_$factory_91($start, $list, $e) {
    var i = new _no_name_provided__96($start, $list, $e);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_92($expr, $this_create) {
    var i = new _no_name_provided__97($expr, $this_create);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function Precedence() {
    Precedence_instance = this;
    this._POSTFIX = 15;
    this._PREFIX = 14;
    this._TYPE_RHS = 13;
    this._MULTIPLICATIVE = 12;
    this._ADDITIVE = 11;
    this._RANGE = 10;
    this._INFIX = 9;
    this._ELVIS = 8;
    this._NAMED_CHECKS = 7;
    this._COMPARISON = 6;
    this._EQUALITY = 5;
    this._CONJUNCTION = 4;
    this._DISJUNCTION = 3;
    this._SPREAD_OPERATOR = 2;
    this._ASSIGNMENT = 1;
  }
  Precedence.$metadata$ = {
    simpleName: 'Precedence',
    kind: 'object',
    interfaces: []
  };
  var Precedence_instance;
  function Precedence_getInstance() {
    if (Precedence_instance == null)
      new Precedence();
    return Precedence_instance;
  }
  function BreakParser() {
    BreakParser_instance = this;
  }
  BreakParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    return new BreakExpr(token._section);
  };
  BreakParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  BreakParser.$metadata$ = {
    simpleName: 'BreakParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var BreakParser_instance;
  function BreakParser_getInstance() {
    if (BreakParser_instance == null)
      new BreakParser();
    return BreakParser_instance;
  }
  function ContinueParser() {
    ContinueParser_instance = this;
  }
  ContinueParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    return new ContinueExpr(token._section);
  };
  ContinueParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  ContinueParser.$metadata$ = {
    simpleName: 'ContinueParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var ContinueParser_instance;
  function ContinueParser_getInstance() {
    if (ContinueParser_instance == null)
      new ContinueParser();
    return ContinueParser_instance;
  }
  function _no_name_provided__99($token, $tmp0_let_0) {
    this._$token = $token;
    this._$tmp0_let_0 = $tmp0_let_0;
  }
  _no_name_provided__99.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__99.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__99.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function DoParser() {
    DoParser_instance = this;
  }
  DoParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp;
    if (ctx.match_2c5_k$(TokenType_WHILE_getInstance())) {
      tmp = null;
    } else {
      var tmp0_elvis_lhs = parseBlock$default(ctx, false, false, 3, null);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    var expr = tmp;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    if (!(expr == null) ? !ctx.match_2c5_k$(TokenType_WHILE_getInstance()) : false)
      return expr;
    ctx.eat_2c5_k$(TokenType_L_PAREN_getInstance());
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
        var tmp_1;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp_2 = Companion_getInstance_20();
          return tmp_2.invoke_b5r9f6_k$(_no_name_provided_$factory_93(token, tmp0_let_0));
        } else {
          tmp_1 = tmp0_elvis_lhs_2;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var condition = tmp$ret$1;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_R_PAREN_getInstance());
    Unit_getInstance();
    return new DoWhileNode(expr, condition, token._section);
  };
  DoParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  DoParser.$metadata$ = {
    simpleName: 'DoParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var DoParser_instance;
  function DoParser_getInstance() {
    if (DoParser_instance == null)
      new DoParser();
    return DoParser_instance;
  }
  function _no_name_provided_$factory_93($token, $tmp0_let_0) {
    var i = new _no_name_provided__99($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__100($token, $tmp0_let_0) {
    this._$token_0 = $token;
    this._$tmp0_let_0_0 = $tmp0_let_0;
  }
  _no_name_provided__100.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_0._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_0]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_0._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__100.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__100.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ForParser() {
    ForParser_instance = this;
  }
  ForParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_L_PAREN_getInstance());
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var variableName = ctx.eat_2c5_k$(TokenType_IDENTIFIER_getInstance())._value_2;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_IN_getInstance());
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
        var tmp;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp_0 = Companion_getInstance_20();
          return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_94(token, tmp0_let_0));
        } else {
          tmp = tmp0_elvis_lhs_2;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var iterable = tmp$ret$1;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_R_PAREN_getInstance());
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp0_elvis_lhs = parseBlock$default(ctx, false, false, 3, null);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      tmp_1 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var expr = tmp_1;
    return new ForNode(variableName, iterable, expr, token._section);
  };
  ForParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  ForParser.$metadata$ = {
    simpleName: 'ForParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var ForParser_instance;
  function ForParser_getInstance() {
    if (ForParser_instance == null)
      new ForParser();
    return ForParser_instance;
  }
  function _no_name_provided_$factory_94($token, $tmp0_let_0) {
    var i = new _no_name_provided__100($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__101($token, $tmp0_let_0) {
    this._$token_1 = $token;
    this._$tmp0_let_0_1 = $tmp0_let_0;
  }
  _no_name_provided__101.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_1._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_1]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_1._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__101.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__101.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function IfParser() {
    IfParser_instance = this;
  }
  IfParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    skipOnlyUntil(ctx, [TokenType_L_PAREN_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_L_PAREN_getInstance());
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
        var tmp;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp_0 = Companion_getInstance_20();
          return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_95(token, tmp0_let_0));
        } else {
          tmp = tmp0_elvis_lhs_2;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var condition = tmp$ret$1;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_R_PAREN_getInstance());
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp0_elvis_lhs = parseBlock$default(ctx, false, false, 3, null);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      tmp_1 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var thenBranch = tmp_1;
    skipOnlyUntil(ctx, [TokenType_ELSE_getInstance()]);
    Unit_getInstance();
    var tmp_2;
    if (ctx.match_2c5_k$(TokenType_ELSE_getInstance())) {
      matchAll(ctx, [TokenType_NL_getInstance()]);
      Unit_getInstance();
      var tmp_3;
      if (ctx.nextIs_2c5_k$(TokenType_IF_getInstance())) {
        tmp_3 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      } else {
        var tmp1_elvis_lhs = parseBlock$default(ctx, false, false, 3, null);
        var tmp_4;
        if (tmp1_elvis_lhs == null) {
          tmp_4 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
        } else {
          tmp_4 = tmp1_elvis_lhs;
        }
        tmp_3 = tmp_4;
      }
      tmp_2 = tmp_3;
    } else {
      tmp_2 = null;
    }
    var elseBranch = tmp_2;
    var tmp_5;
    if (isInterface(thenBranch, Expr)) {
      tmp_5 = !(elseBranch == null) ? isInterface(elseBranch, Expr) : false;
    } else {
      {
        tmp_5 = false;
      }
    }
    if (tmp_5) {
      return new IfExpr(condition, thenBranch, elseBranch, token._section);
    } else {
    }
    return new IfNode(condition, thenBranch, elseBranch, token._section);
  };
  IfParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  IfParser.$metadata$ = {
    simpleName: 'IfParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var IfParser_instance;
  function IfParser_getInstance() {
    if (IfParser_instance == null)
      new IfParser();
    return IfParser_instance;
  }
  function _no_name_provided_$factory_95($token, $tmp0_let_0) {
    var i = new _no_name_provided__101($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__102($token, $tmp0_let_0) {
    this._$token_2 = $token;
    this._$tmp0_let_0_2 = $tmp0_let_0;
  }
  _no_name_provided__102.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_2._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_2]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_2._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__102.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__102.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ReturnParser() {
    ReturnParser_instance = this;
  }
  ReturnParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    var tmp;
    if (ctx.nextIsAny_80qlpp_k$([TokenType_SEMICOLON_getInstance(), TokenType_NL_getInstance()])) {
      tmp = new NullExpr(token._section);
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
          var tmp_0;
          if (tmp0_elvis_lhs_2 == null) {
            var tmp_1 = Companion_getInstance_20();
            return tmp_1.invoke_b5r9f6_k$(_no_name_provided_$factory_96(token, tmp0_let_0));
          } else {
            tmp_0 = tmp0_elvis_lhs_2;
          }
          tmp$ret$0 = tmp_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var node = tmp;
    return new ReturnExpr(node, token._section);
  };
  ReturnParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  ReturnParser.$metadata$ = {
    simpleName: 'ReturnParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var ReturnParser_instance;
  function ReturnParser_getInstance() {
    if (ReturnParser_instance == null)
      new ReturnParser();
    return ReturnParser_instance;
  }
  function _no_name_provided_$factory_96($token, $tmp0_let_0) {
    var i = new _no_name_provided__102($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__103($token, $tmp0_let_0) {
    this._$token_3 = $token;
    this._$tmp0_let_0_3 = $tmp0_let_0;
  }
  _no_name_provided__103.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_3._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_3]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_3._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__103.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__103.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ThrowParser() {
    ThrowParser_instance = this;
  }
  ThrowParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
        var tmp;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp_0 = Companion_getInstance_20();
          return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_97(token, tmp0_let_0));
        } else {
          tmp = tmp0_elvis_lhs_2;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var node = tmp$ret$1;
    return new ThrowExpr(node, token._section);
  };
  ThrowParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  ThrowParser.$metadata$ = {
    simpleName: 'ThrowParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var ThrowParser_instance;
  function ThrowParser_getInstance() {
    if (ThrowParser_instance == null)
      new ThrowParser();
    return ThrowParser_instance;
  }
  function _no_name_provided_$factory_97($token, $tmp0_let_0) {
    var i = new _no_name_provided__103($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__104($catchToken, $tryBranch, $tmp3_safe_receiver, $branch) {
    this._$catchToken = $catchToken;
    this._$tryBranch = $tryBranch;
    this._$tmp3_safe_receiver = $tmp3_safe_receiver;
    this._$branch = $branch;
  }
  _no_name_provided__104.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$catchToken._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tryBranch, this._$tmp3_safe_receiver._branch, this._$branch]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Catch branch already defined', this._$tmp3_safe_receiver._branch._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__104.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__104.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function TryParser() {
    TryParser_instance = this;
  }
  TryParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    skipOnlyUntil(ctx, [TokenType_L_BRACE_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_L_BRACE_getInstance());
    Unit_getInstance();
    var tmp0_elvis_lhs = parseBlock$default(ctx, false, true, 1, null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Impossible to be null.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tryBranch = tmp;
    var catchBranch = null;
    var finallyBranch = null;
    var mark = ctx._get_index__0_k$();
    loop: while (catchBranch == null ? true : finallyBranch == null) {
      skipOnlyUntil(ctx, [TokenType_IDENTIFIER_getInstance()]);
      Unit_getInstance();
      if (ctx.nextIs_2c5_k$(TokenType_IDENTIFIER_getInstance())) {
        var tmp1_subject = ctx.eat_0_k$()._value_2;
        switch (tmp1_subject) {
          case 'catch':
            var catchToken = ctx._get_last__0_k$();
            skipOnlyUntil(ctx, [TokenType_L_PAREN_getInstance()]);
            Unit_getInstance();
            var tmp_0;
            if (ctx.match_2c5_k$(TokenType_L_PAREN_getInstance())) {
              ctx.eat_2c5_k$(TokenType_L_PAREN_getInstance());
              Unit_getInstance();
              skipOnlyUntil(ctx, [TokenType_IDENTIFIER_getInstance()]);
              Unit_getInstance();
              var value = ctx.match_2c5_k$(TokenType_IDENTIFIER_getInstance()) ? ctx._get_last__0_k$()._value_2 : null;
              skipOnlyUntil(ctx, [TokenType_R_PAREN_getInstance()]);
              Unit_getInstance();
              ctx.eat_2c5_k$(TokenType_R_PAREN_getInstance());
              Unit_getInstance();
              tmp_0 = value;
            } else {
              tmp_0 = null;
            }

            var name = tmp_0;
            skipOnlyUntil(ctx, [TokenType_L_BRACE_getInstance()]);
            Unit_getInstance();
            ctx.eat_2c5_k$(TokenType_L_BRACE_getInstance());
            Unit_getInstance();
            var tmp2_elvis_lhs = parseBlock$default(ctx, false, true, 1, null);
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Impossible to be null.');
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }

            var branch = tmp_1;
            mark = ctx._get_index__0_k$();
            var tmp3_safe_receiver = catchBranch;
            if (tmp3_safe_receiver == null)
              null;
            else {
              var tmp$ret$0;
              {
                {
                }
                var tmp_2 = Companion_getInstance_20();
                return tmp_2.invoke_b5r9f6_k$(_no_name_provided_$factory_98(catchToken, tryBranch, tmp3_safe_receiver, branch));
              }
            }

            Unit_getInstance();
            catchBranch = new CatchBranch(name, branch);
            break;
          case 'finally':
            skipOnlyUntil(ctx, [TokenType_L_BRACE_getInstance()]);
            Unit_getInstance();
            ctx.eat_2c5_k$(TokenType_L_BRACE_getInstance());
            Unit_getInstance();
            var tmp4_elvis_lhs = parseBlock$default(ctx, false, true, 1, null);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Impossible to be null.');
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }

            finallyBranch = tmp_3;
            break loop;
          default:ctx._set_index__majfzk_k$(mark);
            break loop;
        }
      } else {
        ctx._set_index__majfzk_k$(mark);
        break loop;
      }
    }
    return new TryExpr(tryBranch, catchBranch, finallyBranch, token._section);
  };
  TryParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  TryParser.$metadata$ = {
    simpleName: 'TryParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var TryParser_instance;
  function TryParser_getInstance() {
    if (TryParser_instance == null)
      new TryParser();
    return TryParser_instance;
  }
  function _no_name_provided_$factory_98($catchToken, $tryBranch, $tmp3_safe_receiver, $branch) {
    var i = new _no_name_provided__104($catchToken, $tryBranch, $tmp3_safe_receiver, $branch);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__105($token, $tmp0_let_0) {
    this._$token_4 = $token;
    this._$tmp0_let_0_4 = $tmp0_let_0;
  }
  _no_name_provided__105.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_4._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_4]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_4._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__105.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__105.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function WhileParser() {
    WhileParser_instance = this;
  }
  WhileParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_L_PAREN_getInstance());
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
        var tmp;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp_0 = Companion_getInstance_20();
          return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_99(token, tmp0_let_0));
        } else {
          tmp = tmp0_elvis_lhs_2;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var condition = tmp$ret$1;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_R_PAREN_getInstance());
    Unit_getInstance();
    skipOnlyUntil(ctx, []);
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp_1;
    if (ctx.match_2c5_k$(TokenType_SEMICOLON_getInstance())) {
      tmp_1 = null;
    } else {
      var tmp0_elvis_lhs = parseBlock$default(ctx, false, false, 3, null);
      var tmp_2;
      if (tmp0_elvis_lhs == null) {
        tmp_2 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      } else {
        tmp_2 = tmp0_elvis_lhs;
      }
      tmp_1 = tmp_2;
    }
    var expr = tmp_1;
    return new WhileNode(condition, expr, token._section);
  };
  WhileParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  WhileParser.$metadata$ = {
    simpleName: 'WhileParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var WhileParser_instance;
  function WhileParser_getInstance() {
    if (WhileParser_instance == null)
      new WhileParser();
    return WhileParser_instance;
  }
  function _no_name_provided_$factory_99($token, $tmp0_let_0) {
    var i = new _no_name_provided__105($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__106($tmp0_let_0) {
    this._$tmp0_let_0_5 = $tmp0_let_0;
  }
  _no_name_provided__106.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$tmp0_let_0_5._get_section__0_k$());
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_5]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_5._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__106.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__106.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function DeclareVariableParser(mutable) {
    this._mutable_1 = mutable;
  }
  DeclareVariableParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    var ident = ctx.eat_2c5_k$(TokenType_IDENTIFIER_getInstance());
    skipOnlyUntil(ctx, [TokenType_ASSIGN_getInstance()]);
    Unit_getInstance();
    if (ctx.match_2c5_k$(TokenType_ASSIGN_getInstance())) {
      matchAll(ctx, [TokenType_NL_getInstance()]);
      Unit_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
          var tmp;
          if (tmp0_elvis_lhs_2 == null) {
            var tmp_0 = Companion_getInstance_20();
            return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_100(tmp0_let_0));
          } else {
            tmp = tmp0_elvis_lhs_2;
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var expr = tmp$ret$1;
      return new DeclareVariableNode(ident._value_2, this._mutable_1, expr, token._section);
    }return new DeclareVariableNode(ident._value_2, this._mutable_1, null, token._section);
  };
  DeclareVariableParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  DeclareVariableParser.$metadata$ = {
    simpleName: 'DeclareVariableParser',
    kind: 'class',
    interfaces: [PrefixParselet]
  };
  function _no_name_provided_$factory_100($tmp0_let_0) {
    var i = new _no_name_provided__106($tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__107($token, $left) {
    this._$token_5 = $token;
    this._$left = $left;
  }
  _no_name_provided__107.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_5._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$left]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$left._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__107.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__107.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__108($token, $tmp0_let_0) {
    this._$token_6 = $token;
    this._$tmp0_let_0_6 = $tmp0_let_0;
  }
  _no_name_provided__108.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_6._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_6]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_6._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__108.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__108.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__109($token, $left, $identifier) {
    this._$token_7 = $token;
    this._$left_0 = $left;
    this._$identifier = $identifier;
  }
  _no_name_provided__109.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_7._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$left_0]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('' + 'Expected an indentifier, but found ' + this._$token_7._type, this._$identifier._section)]);
    Unit_getInstance();
  };
  _no_name_provided__109.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__109.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function DotParser(nullSafe) {
    this._nullSafe_2 = nullSafe;
    this._precedence = 15;
  }
  DotParser.prototype._get_precedence__0_k$ = function () {
    return this._precedence;
  };
  DotParser.prototype.parse_idg4ty_k$ = function (ctx, left, token) {
    if (!isInterface(left, Expr)) {
      var tmp = Companion_getInstance_20();
      return tmp.invoke_b5r9f6_k$(_no_name_provided_$factory_101(token, left));
    } else {
    }
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var identifier = ctx.eat_0_k$();
    if (identifier._type.equals(TokenType_IDENTIFIER_getInstance())) {
      var name = identifier._value_2;
      var tmp_0;
      if (ctx.match_2c5_k$(TokenType_ASSIGN_getInstance())) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
          {
          }
          var tmp$ret$0;
          $l$block: {
            var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
            var tmp_1;
            if (tmp0_elvis_lhs_2 == null) {
              var tmp_2 = Companion_getInstance_20();
              return tmp_2.invoke_b5r9f6_k$(_no_name_provided_$factory_102(token, tmp0_let_0));
            } else {
              tmp_1 = tmp0_elvis_lhs_2;
            }
            tmp$ret$0 = tmp_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var value = tmp$ret$1;
        maybeIgnoreNL(ctx);
        tmp_0 = new PropertyAssignNode(left, this._nullSafe_2, name, value, token._section);
      } else {
        maybeIgnoreNL(ctx);
        tmp_0 = new PropertyAccessExpr(left, this._nullSafe_2, name, token._section);
      }
      return tmp_0;
    }var tmp_3 = Companion_getInstance_20();
    return tmp_3.invoke_b5r9f6_k$(_no_name_provided_$factory_103(token, left, identifier));
  };
  DotParser.prototype.parse_h7gyuu_k$ = function (ctx, left, token) {
    return this.parse_idg4ty_k$(ctx, (!(left == null) ? isInterface(left, Node) : false) ? left : THROW_CCE(), token);
  };
  DotParser.$metadata$ = {
    simpleName: 'DotParser',
    kind: 'class',
    interfaces: [InfixParselet]
  };
  function _no_name_provided_$factory_101($token, $left) {
    var i = new _no_name_provided__107($token, $left);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_102($token, $tmp0_let_0) {
    var i = new _no_name_provided__108($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_103($token, $left, $identifier) {
    var i = new _no_name_provided__109($token, $left, $identifier);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__110($token, $left) {
    this._$token_8 = $token;
    this._$left_1 = $left;
  }
  _no_name_provided__110.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_8._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$left_1]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$left_1._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__110.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__110.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function DoubleBangParser() {
    DoubleBangParser_instance = this;
    this._precedence_0 = 15;
  }
  DoubleBangParser.prototype._get_precedence__0_k$ = function () {
    return this._precedence_0;
  };
  DoubleBangParser.prototype.parse_idg4ty_k$ = function (ctx, left, token) {
    if (!isInterface(left, Expr)) {
      var tmp = Companion_getInstance_20();
      return tmp.invoke_b5r9f6_k$(_no_name_provided_$factory_104(token, left));
    } else {
    }
    maybeIgnoreNL(ctx);
    return new EnsureNotNullExpr(left, token._section);
  };
  DoubleBangParser.prototype.parse_h7gyuu_k$ = function (ctx, left, token) {
    return this.parse_idg4ty_k$(ctx, (!(left == null) ? isInterface(left, Node) : false) ? left : THROW_CCE(), token);
  };
  DoubleBangParser.$metadata$ = {
    simpleName: 'DoubleBangParser',
    kind: 'object',
    interfaces: [InfixParselet]
  };
  var DoubleBangParser_instance;
  function DoubleBangParser_getInstance() {
    if (DoubleBangParser_instance == null)
      new DoubleBangParser();
    return DoubleBangParser_instance;
  }
  function _no_name_provided_$factory_104($token, $left) {
    var i = new _no_name_provided__110($token, $left);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__111($token, $tmp0_let_0) {
    this._$token_9 = $token;
    this._$tmp0_let_0_7 = $tmp0_let_0;
  }
  _no_name_provided__111.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_9._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_7]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_7._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__111.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__111.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function IdentifierParser() {
    IdentifierParser_instance = this;
  }
  IdentifierParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    var name = token._value_2;
    skipOnlyUntil(ctx, [TokenType_ASSIGN_getInstance()]);
    Unit_getInstance();
    if (ctx.match_2c5_k$(TokenType_ASSIGN_getInstance())) {
      matchAll(ctx, [TokenType_NL_getInstance()]);
      Unit_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
          var tmp;
          if (tmp0_elvis_lhs_2 == null) {
            var tmp_0 = Companion_getInstance_20();
            return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_105(token, tmp0_let_0));
          } else {
            tmp = tmp0_elvis_lhs_2;
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var expr = tmp$ret$1;
      return new AssignNode(name, expr, token._section);
    }maybeIgnoreNL(ctx);
    return new IdentifierExpr(name, token._section);
  };
  IdentifierParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  IdentifierParser.$metadata$ = {
    simpleName: 'IdentifierParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var IdentifierParser_instance;
  function IdentifierParser_getInstance() {
    if (IdentifierParser_instance == null)
      new IdentifierParser();
    return IdentifierParser_instance;
  }
  function _no_name_provided_$factory_105($token, $tmp0_let_0) {
    var i = new _no_name_provided__111($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__112($token, $tmp0_let_0) {
    this._$token_10 = $token;
    this._$tmp0_let_0_8 = $tmp0_let_0;
  }
  _no_name_provided__112.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_10._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_8]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_8._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__112.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__112.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__113($token, $ctx) {
    this._$token_11 = $token;
    this._$ctx = $ctx;
  }
  _no_name_provided__113.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_11._section);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('' + "Expected 'in' but got " + this._$ctx.peek$default_l3mjq9_k$(0, 1, null), this._$token_11._section)]);
    Unit_getInstance();
  };
  _no_name_provided__113.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__113.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function InfixBangParser() {
    InfixBangParser_instance = this;
    this._precedence_1 = 7;
  }
  InfixBangParser.prototype._get_precedence__0_k$ = function () {
    return this._precedence_1;
  };
  InfixBangParser.prototype.parse_idg4ty_k$ = function (ctx, left, token) {
    var tmp;
    if (ctx.match_2c5_k$(TokenType_IN_getInstance())) {
      var tmp$ret$1;
      $l$block_0: {
        Precedence_getInstance();
        var tmp_0 = BinaryOperationType_IN_getInstance();
        var tmp0_let_0 = BinaryOperatorParser_init_$Create$(7, tmp_0, false, 4, null).parse_idg4ty_k$(ctx, left, ctx._get_last__0_k$());
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
          var tmp_1;
          if (tmp0_elvis_lhs_2 == null) {
            var tmp_2 = Companion_getInstance_20();
            return tmp_2.invoke_b5r9f6_k$(_no_name_provided_$factory_106(token, tmp0_let_0));
          } else {
            tmp_1 = tmp0_elvis_lhs_2;
          }
          tmp$ret$0 = tmp_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp_3 = Companion_getInstance_20();
      return tmp_3.invoke_b5r9f6_k$(_no_name_provided_$factory_107(token, ctx));
    }
    var target = tmp;
    return new UnaryOperation(target, UnaryOperationType_NOT_getInstance(), token._section);
  };
  InfixBangParser.prototype.parse_h7gyuu_k$ = function (ctx, left, token) {
    return this.parse_idg4ty_k$(ctx, (!(left == null) ? isInterface(left, Node) : false) ? left : THROW_CCE(), token);
  };
  InfixBangParser.$metadata$ = {
    simpleName: 'InfixBangParser',
    kind: 'object',
    interfaces: [InfixParselet]
  };
  var InfixBangParser_instance;
  function InfixBangParser_getInstance() {
    if (InfixBangParser_instance == null)
      new InfixBangParser();
    return InfixBangParser_instance;
  }
  function _no_name_provided_$factory_106($token, $tmp0_let_0) {
    var i = new _no_name_provided__112($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_107($token, $ctx) {
    var i = new _no_name_provided__113($token, $ctx);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__114($token, $left) {
    this._$token_12 = $token;
    this._$left_2 = $left;
  }
  _no_name_provided__114.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_12._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$left_2]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$left_2._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__114.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__114.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__115($token, $tmp0_let_0) {
    this._$token_13 = $token;
    this._$tmp0_let_0_9 = $tmp0_let_0;
  }
  _no_name_provided__115.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_13._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_9]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_9._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__115.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__115.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function InvocationParser() {
    InvocationParser_instance = this;
    this._precedence_2 = 15;
  }
  InvocationParser.prototype._get_precedence__0_k$ = function () {
    return this._precedence_2;
  };
  InvocationParser.prototype.parse_idg4ty_k$ = function (ctx, left, token) {
    if (!isInterface(left, Expr)) {
      var tmp = Companion_getInstance_20();
      return tmp.invoke_b5r9f6_k$(_no_name_provided_$factory_108(token, left));
    } else {
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var arguments_0 = tmp$ret$0;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    if (!ctx.match_2c5_k$(TokenType_R_PAREN_getInstance())) {
      do {
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
        {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
            {
            }
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
              var tmp_0;
              if (tmp0_elvis_lhs_2 == null) {
                var tmp_1 = Companion_getInstance_20();
                return tmp_1.invoke_b5r9f6_k$(_no_name_provided_$factory_109(token, tmp0_let_0));
              } else {
                tmp_0 = tmp0_elvis_lhs_2;
              }
              tmp$ret$1 = tmp_0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          var tmp1_plusAssign_0 = tmp$ret$2;
          arguments_0.add_2bq_k$(tmp1_plusAssign_0);
          Unit_getInstance();
        }
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
      }
       while (ctx.match_2c5_k$(TokenType_COMMA_getInstance()));
      ctx.eat_2c5_k$(TokenType_R_PAREN_getInstance());
      Unit_getInstance();
    }maybeIgnoreNL(ctx);
    if (left instanceof PropertyAccessExpr) {
      return new InvokeMemberExpr(left._target_0, left._nullSafe, left._name_3, arguments_0, token._section);
    } else {
      if (left instanceof IdentifierExpr) {
        return new InvokeLocalExpr(left._name_2, arguments_0, token._section);
      } else {
      }
    }
    return new InvokeExpr(left, arguments_0, token._section);
  };
  InvocationParser.prototype.parse_h7gyuu_k$ = function (ctx, left, token) {
    return this.parse_idg4ty_k$(ctx, (!(left == null) ? isInterface(left, Node) : false) ? left : THROW_CCE(), token);
  };
  InvocationParser.$metadata$ = {
    simpleName: 'InvocationParser',
    kind: 'object',
    interfaces: [InfixParselet]
  };
  var InvocationParser_instance;
  function InvocationParser_getInstance() {
    if (InvocationParser_instance == null)
      new InvocationParser();
    return InvocationParser_instance;
  }
  function _no_name_provided_$factory_108($token, $left) {
    var i = new _no_name_provided__114($token, $left);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_109($token, $tmp0_let_0) {
    var i = new _no_name_provided__115($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__116($token, $left) {
    this._$token_14 = $token;
    this._$left_3 = $left;
  }
  _no_name_provided__116.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_14._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$left_3]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$left_3._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__116.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__116.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__117($token, $tmp0_let_0) {
    this._$token_15 = $token;
    this._$tmp0_let_0_10 = $tmp0_let_0;
  }
  _no_name_provided__117.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_15._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_10]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_10._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__117.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__117.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__118($token, $tmp2_let_0) {
    this._$token_16 = $token;
    this._$tmp2_let_0 = $tmp2_let_0;
  }
  _no_name_provided__118.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_16._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp2_let_0]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp2_let_0._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__118.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__118.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function SubscriptParser() {
    SubscriptParser_instance = this;
    this._precedence_3 = 15;
  }
  SubscriptParser.prototype._get_precedence__0_k$ = function () {
    return this._precedence_3;
  };
  SubscriptParser.prototype.parse_idg4ty_k$ = function (ctx, left, token) {
    if (!isInterface(left, Expr)) {
      var tmp = Companion_getInstance_20();
      return tmp.invoke_b5r9f6_k$(_no_name_provided_$factory_110(token, left));
    } else {
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var arguments_0 = tmp$ret$0;
    if (!ctx.match_2c5_k$(TokenType_R_BRACKET_getInstance())) {
      do {
        {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
            {
            }
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
              var tmp_0;
              if (tmp0_elvis_lhs_2 == null) {
                var tmp_1 = Companion_getInstance_20();
                return tmp_1.invoke_b5r9f6_k$(_no_name_provided_$factory_111(token, tmp0_let_0));
              } else {
                tmp_0 = tmp0_elvis_lhs_2;
              }
              tmp$ret$1 = tmp_0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          var tmp1_plusAssign_0 = tmp$ret$2;
          arguments_0.add_2bq_k$(tmp1_plusAssign_0);
          Unit_getInstance();
        }
      }
       while (ctx.match_2c5_k$(TokenType_COMMA_getInstance()));
      ctx.eat_2c5_k$(TokenType_R_BRACKET_getInstance());
      Unit_getInstance();
    }var rBracket = ctx._get_last__0_k$();
    var tmp_2;
    if (ctx.match_2c5_k$(TokenType_ASSIGN_getInstance())) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp2_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
        {
        }
        var tmp$ret$3;
        $l$block_2: {
          var tmp0_elvis_lhs_2_0 = isInterface(tmp2_let_0, Expr) ? tmp2_let_0 : null;
          var tmp_3;
          if (tmp0_elvis_lhs_2_0 == null) {
            var tmp_4 = Companion_getInstance_20();
            return tmp_4.invoke_b5r9f6_k$(_no_name_provided_$factory_112(token, tmp2_let_0));
          } else {
            tmp_3 = tmp0_elvis_lhs_2_0;
          }
          tmp$ret$3 = tmp_3;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      var value = tmp$ret$4;
      maybeIgnoreNL(ctx);
      tmp_2 = new SubscriptAssignNode(left, arguments_0, value, left.span_czcotl_k$(value));
    } else {
      maybeIgnoreNL(ctx);
      tmp_2 = new SubscriptAccessExpr(left, arguments_0, left.span_czcotl_k$(rBracket));
    }
    return tmp_2;
  };
  SubscriptParser.prototype.parse_h7gyuu_k$ = function (ctx, left, token) {
    return this.parse_idg4ty_k$(ctx, (!(left == null) ? isInterface(left, Node) : false) ? left : THROW_CCE(), token);
  };
  SubscriptParser.$metadata$ = {
    simpleName: 'SubscriptParser',
    kind: 'object',
    interfaces: [InfixParselet]
  };
  var SubscriptParser_instance;
  function SubscriptParser_getInstance() {
    if (SubscriptParser_instance == null)
      new SubscriptParser();
    return SubscriptParser_instance;
  }
  function _no_name_provided_$factory_110($token, $left) {
    var i = new _no_name_provided__116($token, $left);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_111($token, $tmp0_let_0) {
    var i = new _no_name_provided__117($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_112($token, $tmp2_let_0) {
    var i = new _no_name_provided__118($token, $tmp2_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__119($token, $tmp0_let_0) {
    this._$token_17 = $token;
    this._$tmp0_let_0_11 = $tmp0_let_0;
  }
  _no_name_provided__119.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_17._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_11]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_11._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__119.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__119.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function TypeofParser() {
    TypeofParser_instance = this;
  }
  TypeofParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
        var tmp;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp_0 = Companion_getInstance_20();
          return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_113(token, tmp0_let_0));
        } else {
          tmp = tmp0_elvis_lhs_2;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var node = tmp$ret$1;
    return new TypeofExpr(node, token._section);
  };
  TypeofParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  TypeofParser.$metadata$ = {
    simpleName: 'TypeofParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var TypeofParser_instance;
  function TypeofParser_getInstance() {
    if (TypeofParser_instance == null)
      new TypeofParser();
    return TypeofParser_instance;
  }
  function _no_name_provided_$factory_113($token, $tmp0_let_0) {
    var i = new _no_name_provided__119($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function BinaryOperatorParser_init_$Init$(precedence, operator, leftAssoc, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      leftAssoc = true;
    BinaryOperatorParser.call($this, precedence, operator, leftAssoc);
    return $this;
  }
  function BinaryOperatorParser_init_$Create$(precedence, operator, leftAssoc, $mask0, $marker) {
    return BinaryOperatorParser_init_$Init$(precedence, operator, leftAssoc, $mask0, $marker, Object.create(BinaryOperatorParser.prototype));
  }
  function _no_name_provided__120($token, $left) {
    this._$token_18 = $token;
    this._$left_4 = $left;
  }
  _no_name_provided__120.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_18._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$left_4]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$left_4._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__120.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__120.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__121($token, $tmp0_let_0) {
    this._$token_19 = $token;
    this._$tmp0_let_0_12 = $tmp0_let_0;
  }
  _no_name_provided__121.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_19._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_12]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_12._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__121.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__121.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function BinaryOperatorParser(precedence, operator, leftAssoc) {
    this._precedence_4 = precedence;
    this._operator_1 = operator;
    this._leftAssoc = leftAssoc;
  }
  BinaryOperatorParser.prototype._get_precedence__0_k$ = function () {
    return this._precedence_4;
  };
  BinaryOperatorParser.prototype.parse_idg4ty_k$ = function (ctx, left, token) {
    if (!isInterface(left, Expr)) {
      var tmp = Companion_getInstance_20();
      return tmp.invoke_b5r9f6_k$(_no_name_provided_$factory_114(token, left));
    } else {
    }
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = ctx.parseExpression_ha5a7z_k$(this._precedence_4 - (this._leftAssoc ? 0 : 1) | 0);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
        var tmp_0;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp_1 = Companion_getInstance_20();
          return tmp_1.invoke_b5r9f6_k$(_no_name_provided_$factory_115(token, tmp0_let_0));
        } else {
          tmp_0 = tmp0_elvis_lhs_2;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var right = tmp$ret$1;
    maybeIgnoreNL(ctx);
    return new BinaryOperation(left, right, this._operator_1, token._section);
  };
  BinaryOperatorParser.prototype.parse_h7gyuu_k$ = function (ctx, left, token) {
    return this.parse_idg4ty_k$(ctx, (!(left == null) ? isInterface(left, Node) : false) ? left : THROW_CCE(), token);
  };
  BinaryOperatorParser.$metadata$ = {
    simpleName: 'BinaryOperatorParser',
    kind: 'class',
    interfaces: [InfixParselet]
  };
  function _no_name_provided_$factory_114($token, $left) {
    var i = new _no_name_provided__120($token, $left);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_115($token, $tmp0_let_0) {
    var i = new _no_name_provided__121($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__122($token, $tmp0_let_0) {
    this._$token_20 = $token;
    this._$tmp0_let_0_13 = $tmp0_let_0;
  }
  _no_name_provided__122.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_20._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_13]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_13._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__122.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__122.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function UnaryOperatorParser(operator) {
    this._operator_2 = operator;
  }
  UnaryOperatorParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp$ret$1;
    $l$block_0: {
      Precedence_getInstance();
      var tmp0_let_0 = ctx.parseExpression_ha5a7z_k$(14);
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
        var tmp;
        if (tmp0_elvis_lhs_2 == null) {
          var tmp_0 = Companion_getInstance_20();
          return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_116(token, tmp0_let_0));
        } else {
          tmp = tmp0_elvis_lhs_2;
        }
        tmp$ret$0 = tmp;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var target = tmp$ret$1;
    maybeIgnoreNL(ctx);
    return new UnaryOperation(target, this._operator_2, token._section);
  };
  UnaryOperatorParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  UnaryOperatorParser.$metadata$ = {
    simpleName: 'UnaryOperatorParser',
    kind: 'class',
    interfaces: [PrefixParselet]
  };
  function _no_name_provided_$factory_116($token, $tmp0_let_0) {
    var i = new _no_name_provided__122($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__123($token, $tmp0_let_0) {
    this._$token_21 = $token;
    this._$tmp0_let_0_14 = $tmp0_let_0;
  }
  _no_name_provided__123.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_21._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp0_let_0_14]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp0_let_0_14._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__123.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__123.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ArrayParser() {
    ArrayParser_instance = this;
  }
  ArrayParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var contents = tmp$ret$0;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    if (!ctx.match_2c5_k$(TokenType_R_BRACKET_getInstance())) {
      do {
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
        {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
            {
            }
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_elvis_lhs_2 = isInterface(tmp0_let_0, Expr) ? tmp0_let_0 : null;
              var tmp;
              if (tmp0_elvis_lhs_2 == null) {
                var tmp_0 = Companion_getInstance_20();
                return tmp_0.invoke_b5r9f6_k$(_no_name_provided_$factory_117(token, tmp0_let_0));
              } else {
                tmp = tmp0_elvis_lhs_2;
              }
              tmp$ret$1 = tmp;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          var tmp1_plusAssign_0 = tmp$ret$2;
          contents.add_2bq_k$(tmp1_plusAssign_0);
          Unit_getInstance();
        }
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
      }
       while (ctx.match_2c5_k$(TokenType_COMMA_getInstance()));
      ctx.eat_2c5_k$(TokenType_R_BRACKET_getInstance());
      Unit_getInstance();
    }return new ArrayExpr(contents, token._section);
  };
  ArrayParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  ArrayParser.$metadata$ = {
    simpleName: 'ArrayParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var ArrayParser_instance;
  function ArrayParser_getInstance() {
    if (ArrayParser_instance == null)
      new ArrayParser();
    return ArrayParser_instance;
  }
  function _no_name_provided_$factory_117($token, $tmp0_let_0) {
    var i = new _no_name_provided__123($token, $tmp0_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function BooleanParser(value) {
    this._value_22 = value;
  }
  BooleanParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    maybeIgnoreNL(ctx);
    return new BooleanExpr(this._value_22, token._section);
  };
  BooleanParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  BooleanParser.$metadata$ = {
    simpleName: 'BooleanParser',
    kind: 'class',
    interfaces: [PrefixParselet]
  };
  function DecimalParser() {
    DecimalParser_instance = this;
  }
  DecimalParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    maybeIgnoreNL(ctx);
    return new DecimalExpr(toDouble(token._value_2), token._section);
  };
  DecimalParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  DecimalParser.$metadata$ = {
    simpleName: 'DecimalParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var DecimalParser_instance;
  function DecimalParser_getInstance() {
    if (DecimalParser_instance == null)
      new DecimalParser();
    return DecimalParser_instance;
  }
  function _no_name_provided__124($token, $tmp1_let_0) {
    this._$token_22 = $token;
    this._$tmp1_let_0 = $tmp1_let_0;
  }
  _no_name_provided__124.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_22._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp1_let_0]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp1_let_0._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__124.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__124.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__125($token, $tmp3_let_0) {
    this._$token_23 = $token;
    this._$tmp3_let_0 = $tmp3_let_0;
  }
  _no_name_provided__125.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_23._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp3_let_0]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp3_let_0._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__125.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__125.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function FunctionParser() {
    FunctionParser_instance = this;
  }
  FunctionParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var ident = ctx.nextIs_2c5_k$(TokenType_IDENTIFIER_getInstance()) ? ctx.eat_2c5_k$(TokenType_IDENTIFIER_getInstance()) : null;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    ctx.eat_2c5_k$(TokenType_L_PAREN_getInstance());
    Unit_getInstance();
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var parameters = tmp$ret$0;
    if (!ctx.match_2c5_k$(TokenType_R_PAREN_getInstance())) {
      do {
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
        var isVarargs;
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_let_0 = ctx.eat_2c5_k$(TokenType_IDENTIFIER_getInstance());
          {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp;
            if (tmp0_let_0._value_2 === 'vararg' ? ctx.nextIs_2c5_k$(TokenType_IDENTIFIER_getInstance()) : false) {
              isVarargs = true;
              tmp = ctx.eat_2c5_k$(TokenType_IDENTIFIER_getInstance())._value_2;
            } else {
              isVarargs = false;
              tmp = tmp0_let_0._value_2;
            }
            tmp$ret$1 = tmp;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        var paramName = tmp$ret$2;
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
        var tmp_0;
        if (ctx.match_2c5_k$(TokenType_ASSIGN_getInstance())) {
          matchAll(ctx, [TokenType_NL_getInstance()]);
          Unit_getInstance();
          var tmp$ret$4;
          $l$block_3: {
            var tmp1_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp0_elvis_lhs_2 = isInterface(tmp1_let_0, Expr) ? tmp1_let_0 : null;
              var tmp_1;
              if (tmp0_elvis_lhs_2 == null) {
                var tmp_2 = Companion_getInstance_20();
                return tmp_2.invoke_b5r9f6_k$(_no_name_provided_$factory_118(token, tmp1_let_0));
              } else {
                tmp_1 = tmp0_elvis_lhs_2;
              }
              tmp$ret$3 = tmp_1;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          tmp_0 = tmp$ret$4;
        } else {
          tmp_0 = null;
        }
        var paramValue = tmp_0;
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
        {
          var tmp2_plusAssign_0 = new Parameter(paramName, isVarargs, paramValue);
          parameters.add_2bq_k$(tmp2_plusAssign_0);
          Unit_getInstance();
        }
      }
       while (ctx.match_2c5_k$(TokenType_COMMA_getInstance()));
      matchAll(ctx, [TokenType_NL_getInstance()]);
      Unit_getInstance();
      ctx.eat_2c5_k$(TokenType_R_PAREN_getInstance());
      Unit_getInstance();
    }skipOnlyUntil(ctx, [TokenType_ASSIGN_getInstance(), TokenType_L_BRACE_getInstance()]);
    Unit_getInstance();
    var tmp_3;
    if (ctx.match_2c5_k$(TokenType_ASSIGN_getInstance())) {
      matchAll(ctx, [TokenType_NL_getInstance()]);
      Unit_getInstance();
      var tmp$ret$6;
      $l$block_5: {
        var tmp3_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
        {
        }
        var tmp$ret$5;
        $l$block_4: {
          var tmp0_elvis_lhs_2_0 = isInterface(tmp3_let_0, Expr) ? tmp3_let_0 : null;
          var tmp_4;
          if (tmp0_elvis_lhs_2_0 == null) {
            var tmp_5 = Companion_getInstance_20();
            return tmp_5.invoke_b5r9f6_k$(_no_name_provided_$factory_119(token, tmp3_let_0));
          } else {
            tmp_4 = tmp0_elvis_lhs_2_0;
          }
          tmp$ret$5 = tmp_4;
          break $l$block_4;
        }
        tmp$ret$6 = tmp$ret$5;
        break $l$block_5;
      }
      tmp_3 = tmp$ret$6;
    } else if (ctx.match_2c5_k$(TokenType_L_BRACE_getInstance())) {
      tmp_3 = parseBlock(ctx, false, true);
    } else {
      tmp_3 = null;
    }
    var expr = tmp_3;
    maybeIgnoreNL(ctx);
    var tmp0_safe_receiver = ident;
    return new FunctionExpr(parameters, tmp0_safe_receiver == null ? null : tmp0_safe_receiver._value_2, expr, token._section);
  };
  FunctionParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  FunctionParser.$metadata$ = {
    simpleName: 'FunctionParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var FunctionParser_instance;
  function FunctionParser_getInstance() {
    if (FunctionParser_instance == null)
      new FunctionParser();
    return FunctionParser_instance;
  }
  function _no_name_provided_$factory_118($token, $tmp1_let_0) {
    var i = new _no_name_provided__124($token, $tmp1_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_119($token, $tmp3_let_0) {
    var i = new _no_name_provided__125($token, $tmp3_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function IntegerParser() {
    IntegerParser_instance = this;
  }
  IntegerParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    maybeIgnoreNL(ctx);
    return new IntegerExpr(toLong(token._value_2), token._section);
  };
  IntegerParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  IntegerParser.$metadata$ = {
    simpleName: 'IntegerParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var IntegerParser_instance;
  function IntegerParser_getInstance() {
    if (IntegerParser_instance == null)
      new IntegerParser();
    return IntegerParser_instance;
  }
  function NullParser() {
    NullParser_instance = this;
  }
  NullParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    maybeIgnoreNL(ctx);
    return new NullExpr(token._section);
  };
  NullParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  NullParser.$metadata$ = {
    simpleName: 'NullParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var NullParser_instance;
  function NullParser_getInstance() {
    if (NullParser_instance == null)
      new NullParser();
    return NullParser_instance;
  }
  function _no_name_provided__126($token, $func) {
    this._$token_24 = $token;
    this._$func = $func;
  }
  _no_name_provided__126.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_24._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$func]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected a named function', this._$func._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__126.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__126.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__127($token, $tmp2_let_0) {
    this._$token_25 = $token;
    this._$tmp2_let_0_0 = $tmp2_let_0;
  }
  _no_name_provided__127.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_25._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp2_let_0_0]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp2_let_0_0._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__127.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__127.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__128($ctx, $token) {
    this._$ctx_0 = $ctx;
    this._$token_26 = $token;
  }
  _no_name_provided__128.prototype.invoke_7188po_k$ = function ($this$invoke) {
    if (this._$ctx_0._get_eof__0_k$()) {
      $this$invoke.section_3dwx6q_k$(this._$token_26._section);
      Unit_getInstance();
      $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression, got EOF', this._$token_26._section)]);
      Unit_getInstance();
    } else {
      var actual = this._$ctx_0.eat_0_k$();
      $this$invoke.section_3dwx6q_k$(actual._section);
      Unit_getInstance();
      $this$invoke.error_6mmv15_k$([new SyntaxException('' + actual._type + ' is not a valid object key', actual._section)]);
      Unit_getInstance();
    }
  };
  _no_name_provided__128.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__128.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__129($token, $tmp3_let_0) {
    this._$token_27 = $token;
    this._$tmp3_let_0_0 = $tmp3_let_0;
  }
  _no_name_provided__129.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_27._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$tmp3_let_0_0]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$tmp3_let_0_0._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__129.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__129.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ObjectParser() {
    ObjectParser_instance = this;
  }
  ObjectParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var contents = tmp$ret$0;
    matchAll(ctx, [TokenType_NL_getInstance()]);
    Unit_getInstance();
    if (!ctx.match_2c5_k$(TokenType_R_BRACE_getInstance())) {
      do {
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
        var key;
        if (ctx.nextIsAny_80qlpp_k$([TokenType_STRING_getInstance(), TokenType_IDENTIFIER_getInstance()])) {
          var tmp0_container = ctx.eat_0_k$();
          var type = tmp0_container.component1_0_k$();
          var value = tmp0_container.component2_0_k$();
          var section_0 = tmp0_container.component3_0_k$();
          key = new StringExpr(value, section_0);
          if (type.equals(TokenType_IDENTIFIER_getInstance()) ? skipOnlyUntil(ctx, [TokenType_COMMA_getInstance()]) : false) {
            {
              var tmp0_plusAssign_0 = to(key, new IdentifierExpr(value, section_0));
              contents.add_2bq_k$(tmp0_plusAssign_0);
              Unit_getInstance();
            }
            continue;
          }} else if (ctx.nextIs_2c5_k$(TokenType_FUN_getInstance())) {
          var func = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
          {
            var tmp;
            if (func instanceof DeclareFunctionExpr) {
              tmp = to(new StringExpr(func._name_5, func._get_section__0_k$()), func._value_10);
            } else {
              var tmp_0;
              if (func instanceof FunctionExpr) {
                tmp_0 = !(func._name_10 == null);
              } else {
                {
                  tmp_0 = false;
                }
              }
              if (tmp_0) {
                tmp = to(new StringExpr(func._name_10, func._get_section__0_k$()), func);
              } else {
                {
                  var tmp_1 = Companion_getInstance_20();
                  return tmp_1.invoke_b5r9f6_k$(_no_name_provided_$factory_120(token, func));
                }
              }
            }
            var tmp1_plusAssign_0 = tmp;
            contents.add_2bq_k$(tmp1_plusAssign_0);
            Unit_getInstance();
          }
          continue;
        } else if (ctx.nextIsAny_80qlpp_k$([TokenType_INTEGER_getInstance(), TokenType_DECIMAL_getInstance(), TokenType_TRUE_getInstance(), TokenType_FALSE_getInstance()])) {
          var tmp1_container = ctx.eat_0_k$();
          var type_0 = tmp1_container.component1_0_k$();
          var value_0 = tmp1_container.component2_0_k$();
          var section_1 = tmp1_container.component3_0_k$();
          var tmp2_subject = type_0;
          var tmp_2;
          if (tmp2_subject.equals(TokenType_INTEGER_getInstance())) {
            tmp_2 = new IntegerExpr(toLong(value_0), section_1);
          } else if (tmp2_subject.equals(TokenType_DECIMAL_getInstance())) {
            tmp_2 = new DecimalExpr(toDouble(value_0), section_1);
          } else if (tmp2_subject.equals(TokenType_TRUE_getInstance())) {
            tmp_2 = new BooleanExpr(true, section_1);
          } else if (tmp2_subject.equals(TokenType_FALSE_getInstance())) {
            tmp_2 = new BooleanExpr(false, section_1);
          } else {
            throw AssertionError_init_$Create$('[INTERNAL] Impossible token type');
          }
          key = tmp_2;
        } else if (ctx.match_2c5_k$(TokenType_L_BRACKET_getInstance())) {
          var tmp$ret$2;
          $l$block_1: {
            var tmp2_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
            {
            }
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_elvis_lhs_2 = isInterface(tmp2_let_0, Expr) ? tmp2_let_0 : null;
              var tmp_3;
              if (tmp0_elvis_lhs_2 == null) {
                var tmp_4 = Companion_getInstance_20();
                tmp_3 = tmp_4.invoke_b5r9f6_k$(_no_name_provided_$factory_121(token, tmp2_let_0));
              } else {
                tmp_3 = tmp0_elvis_lhs_2;
              }
              tmp$ret$1 = tmp_3;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          key = tmp$ret$2;
          ctx.eat_2c5_k$(TokenType_R_BRACKET_getInstance());
          Unit_getInstance();
        } else {
          var tmp_5 = Companion_getInstance_20();
          key = tmp_5.invoke_b5r9f6_k$(_no_name_provided_$factory_122(ctx, token));
        }
        ctx.eat_2c5_k$(TokenType_COLON_getInstance());
        Unit_getInstance();
        {
          var tmp$ret$4;
          $l$block_3: {
            var tmp3_let_0 = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
            {
            }
            var tmp$ret$3;
            $l$block_2: {
              var tmp0_elvis_lhs_2_0 = isInterface(tmp3_let_0, Expr) ? tmp3_let_0 : null;
              var tmp_6;
              if (tmp0_elvis_lhs_2_0 == null) {
                var tmp_7 = Companion_getInstance_20();
                return tmp_7.invoke_b5r9f6_k$(_no_name_provided_$factory_123(token, tmp3_let_0));
              } else {
                tmp_6 = tmp0_elvis_lhs_2_0;
              }
              tmp$ret$3 = tmp_6;
              break $l$block_2;
            }
            tmp$ret$4 = tmp$ret$3;
            break $l$block_3;
          }
          var tmp4_plusAssign_0 = to(key, tmp$ret$4);
          contents.add_2bq_k$(tmp4_plusAssign_0);
          Unit_getInstance();
        }
        matchAll(ctx, [TokenType_NL_getInstance()]);
        Unit_getInstance();
      }
       while (ctx.match_2c5_k$(TokenType_COMMA_getInstance()));
      ctx.eat_2c5_k$(TokenType_R_BRACE_getInstance());
      Unit_getInstance();
    }return new ObjectExpr(contents, token._section);
  };
  ObjectParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  ObjectParser.$metadata$ = {
    simpleName: 'ObjectParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var ObjectParser_instance;
  function ObjectParser_getInstance() {
    if (ObjectParser_instance == null)
      new ObjectParser();
    return ObjectParser_instance;
  }
  function _no_name_provided_$factory_120($token, $func) {
    var i = new _no_name_provided__126($token, $func);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_121($token, $tmp2_let_0) {
    var i = new _no_name_provided__127($token, $tmp2_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_122($ctx, $token) {
    var i = new _no_name_provided__128($ctx, $token);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_123($token, $tmp3_let_0) {
    var i = new _no_name_provided__129($token, $tmp3_let_0);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__130($token, $node) {
    this._$token_28 = $token;
    this._$node = $node;
  }
  _no_name_provided__130.prototype.invoke_7188po_k$ = function ($this$invoke) {
    $this$invoke.section_3dwx6q_k$(this._$token_28._section);
    Unit_getInstance();
    $this$invoke.child_nvozoj_k$([this._$node]);
    Unit_getInstance();
    $this$invoke.error_6mmv15_k$([new SyntaxException('Expected an expression', this._$node._get_section__0_k$())]);
    Unit_getInstance();
  };
  _no_name_provided__130.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_7188po_k$(p1 instanceof Builder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__130.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function ParenthesisParser() {
    ParenthesisParser_instance = this;
  }
  ParenthesisParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    var node = ctx.parseExpression$default_l3mjq9_k$(0, 1, null);
    if (!isInterface(node, Expr)) {
      var tmp = Companion_getInstance_20();
      return tmp.invoke_b5r9f6_k$(_no_name_provided_$factory_124(token, node));
    } else {
    }
    ctx.eat_2c5_k$(TokenType_R_PAREN_getInstance());
    Unit_getInstance();
    return node;
  };
  ParenthesisParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  ParenthesisParser.$metadata$ = {
    simpleName: 'ParenthesisParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var ParenthesisParser_instance;
  function ParenthesisParser_getInstance() {
    if (ParenthesisParser_instance == null)
      new ParenthesisParser();
    return ParenthesisParser_instance;
  }
  function _no_name_provided_$factory_124($token, $node) {
    var i = new _no_name_provided__130($token, $node);
    return function (p1) {
      i.invoke_7188po_k$(p1);
      return Unit_getInstance();
    };
  }
  function StringParser() {
    StringParser_instance = this;
  }
  StringParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    maybeIgnoreNL(ctx);
    return new StringExpr(token._value_2, token._section);
  };
  StringParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  StringParser.$metadata$ = {
    simpleName: 'StringParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var StringParser_instance;
  function StringParser_getInstance() {
    if (StringParser_instance == null)
      new StringParser();
    return StringParser_instance;
  }
  function ThisParser() {
    ThisParser_instance = this;
  }
  ThisParser.prototype.parse_amj31u_k$ = function (ctx, token) {
    maybeIgnoreNL(ctx);
    return new ThisExpr(token._section);
  };
  ThisParser.prototype.parse_e86nu8_k$ = function (ctx, token) {
    return this.parse_amj31u_k$(ctx, token);
  };
  ThisParser.$metadata$ = {
    simpleName: 'ThisParser',
    kind: 'object',
    interfaces: [PrefixParselet]
  };
  var ThisParser_instance;
  function ThisParser_getInstance() {
    if (ThisParser_instance == null)
      new ThisParser();
    return ThisParser_instance;
  }
  function maybeIgnoreNL(_this_) {
    skipOnlyUntil(_this_, [TokenType_DOT_getInstance(), TokenType_QUESTION_DOT_getInstance(), TokenType_AND_getInstance(), TokenType_OR_getInstance()]);
    Unit_getInstance();
  }
  function skipOnlyUntil(_this_, type) {
    {
      var tmp0_check_0 = !contains(type, TokenType_NL_getInstance());
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '[INTERNAL] NL was supplied as a token';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      }}
    var tmp$ret$1;
    $l$block_3: {
      var tmp1_all_0 = _this_.peekAheadUntil_80qlpp_k$(type.slice());
      var tmp;
      if (isInterface(tmp1_all_0, Collection)) {
        tmp = tmp1_all_0.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_3;
      } else {
      }
      var tmp0_iterator_1 = tmp1_all_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = element_2._type.equals(TokenType_NL_getInstance());
          break $l$block_1;
        }
        if (!tmp$ret$2) {
          tmp$ret$1 = false;
          break $l$block_3;
        } else {
        }
      }
      tmp$ret$1 = true;
      break $l$block_3;
    }
    if (tmp$ret$1) {
      _this_.skipUntil_a8x97o_k$(type.slice());
      return true;
    } else {
    }
    return false;
  }
  function parseBlock(_this_, smartToExpr, braceConsumed) {
    if (braceConsumed ? true : _this_.match_2c5_k$(TokenType_L_BRACE_getInstance())) {
      var start = _this_._get_last__0_k$();
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = ArrayList_init_$Create$();
        break $l$block;
      }
      var list = tmp$ret$0;
      $l$break: while (true) {
        matchAll(_this_, [TokenType_SEMICOLON_getInstance()]);
        Unit_getInstance();
        skipOnlyUntil(_this_, [TokenType_R_BRACE_getInstance()]);
        Unit_getInstance();
        if (_this_.match_2c5_k$(TokenType_R_BRACE_getInstance()))
          break $l$break;
        matchAll(_this_, [TokenType_NL_getInstance()]);
        Unit_getInstance();
        var expr = _this_.parseExpression$default_l3mjq9_k$(0, 1, null);
        {
          var tmp;
          var tmp_0;
          if (expr instanceof FunctionExpr) {
            tmp_0 = !(expr._name_10 == null);
          } else {
            {
              tmp_0 = false;
            }
          }
          if (tmp_0) {
            tmp = new DeclareFunctionExpr(expr._name_10, expr, expr._get_section__0_k$());
          } else {
            {
              tmp = expr;
            }
          }
          var tmp0_plusAssign_0 = tmp;
          list.add_2bq_k$(tmp0_plusAssign_0);
          Unit_getInstance();
        }
      }
      var tmp_1;
      var tmp_2;
      if (smartToExpr) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !list.isEmpty_0_k$();
          break $l$block_0;
        }
        tmp_2 = tmp$ret$1;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        var tmp_3 = last(list);
        tmp_1 = isInterface(tmp_3, Expr);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        var tmp_4 = removeLast(list);
        var last_0 = isInterface(tmp_4, Expr) ? tmp_4 : THROW_CCE();
        return new MultiExpr(list, last_0, start._section);
      } else {
      }
      return new MultiNode(list, start._section);
    }return null;
  }
  function parseBlock$default(_this_, smartToExpr, braceConsumed, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      smartToExpr = true;
    if (!(($mask0 & 2) === 0))
      braceConsumed = false;
    return parseBlock(_this_, smartToExpr, braceConsumed);
  }
  function matchAll(_this_, types) {
    var tmp;
    if (_this_.nextIsAny_80qlpp_k$(types.slice())) {
      do {
        _this_.eat_0_k$();
        Unit_getInstance();
      }
       while (_this_.nextIsAny_80qlpp_k$(types.slice()));
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  var BinaryOperationType_ADD_instance;
  var BinaryOperationType_SUBTRACT_instance;
  var BinaryOperationType_MULTIPLY_instance;
  var BinaryOperationType_DIVIDE_instance;
  var BinaryOperationType_REMAINING_instance;
  var BinaryOperationType_EQUALS_instance;
  var BinaryOperationType_NOT_EQUALS_instance;
  var BinaryOperationType_AND_instance;
  var BinaryOperationType_OR_instance;
  var BinaryOperationType_LT_instance;
  var BinaryOperationType_LTE_instance;
  var BinaryOperationType_GT_instance;
  var BinaryOperationType_GTE_instance;
  var BinaryOperationType_ELVIS_instance;
  var BinaryOperationType_IN_instance;
  var BinaryOperationType_IS_instance;
  var BinaryOperationType_RANGE_instance;
  var BinaryOperationType_entriesInitialized;
  function BinaryOperationType_initEntries() {
    if (BinaryOperationType_entriesInitialized)
      return Unit_getInstance();
    BinaryOperationType_entriesInitialized = true;
    BinaryOperationType_ADD_instance = new BinaryOperationType('ADD', 0);
    BinaryOperationType_SUBTRACT_instance = new BinaryOperationType('SUBTRACT', 1);
    BinaryOperationType_MULTIPLY_instance = new BinaryOperationType('MULTIPLY', 2);
    BinaryOperationType_DIVIDE_instance = new BinaryOperationType('DIVIDE', 3);
    BinaryOperationType_REMAINING_instance = new BinaryOperationType('REMAINING', 4);
    BinaryOperationType_EQUALS_instance = new BinaryOperationType('EQUALS', 5);
    BinaryOperationType_NOT_EQUALS_instance = new BinaryOperationType('NOT_EQUALS', 6);
    BinaryOperationType_AND_instance = new BinaryOperationType('AND', 7);
    BinaryOperationType_OR_instance = new BinaryOperationType('OR', 8);
    BinaryOperationType_LT_instance = new BinaryOperationType('LT', 9);
    BinaryOperationType_LTE_instance = new BinaryOperationType('LTE', 10);
    BinaryOperationType_GT_instance = new BinaryOperationType('GT', 11);
    BinaryOperationType_GTE_instance = new BinaryOperationType('GTE', 12);
    BinaryOperationType_ELVIS_instance = new BinaryOperationType('ELVIS', 13);
    BinaryOperationType_IN_instance = new BinaryOperationType('IN', 14);
    BinaryOperationType_IS_instance = new BinaryOperationType('IS', 15);
    BinaryOperationType_RANGE_instance = new BinaryOperationType('RANGE', 16);
  }
  function BinaryOperationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BinaryOperationType.$metadata$ = {
    simpleName: 'BinaryOperationType',
    kind: 'class',
    interfaces: []
  };
  function BinaryOperationType_ADD_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_ADD_instance;
  }
  function BinaryOperationType_SUBTRACT_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_SUBTRACT_instance;
  }
  function BinaryOperationType_MULTIPLY_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_MULTIPLY_instance;
  }
  function BinaryOperationType_DIVIDE_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_DIVIDE_instance;
  }
  function BinaryOperationType_REMAINING_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_REMAINING_instance;
  }
  function BinaryOperationType_EQUALS_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_EQUALS_instance;
  }
  function BinaryOperationType_NOT_EQUALS_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_NOT_EQUALS_instance;
  }
  function BinaryOperationType_AND_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_AND_instance;
  }
  function BinaryOperationType_OR_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_OR_instance;
  }
  function BinaryOperationType_LT_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_LT_instance;
  }
  function BinaryOperationType_LTE_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_LTE_instance;
  }
  function BinaryOperationType_GT_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_GT_instance;
  }
  function BinaryOperationType_GTE_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_GTE_instance;
  }
  function BinaryOperationType_ELVIS_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_ELVIS_instance;
  }
  function BinaryOperationType_IN_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_IN_instance;
  }
  function BinaryOperationType_IS_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_IS_instance;
  }
  function BinaryOperationType_RANGE_getInstance() {
    BinaryOperationType_initEntries();
    return BinaryOperationType_RANGE_instance;
  }
  function Deserializer() {
  }
  Deserializer.$metadata$ = {
    simpleName: 'Deserializer',
    kind: 'interface',
    interfaces: []
  };
  function Serializable_0() {
  }
  Serializable_0.prototype.toBytes_0_k$ = function () {
    var buffer = new Buffer();
    this.serializeTo_vy2nus_k$(buffer);
    return buffer.snapshot_0_k$();
  };
  Serializable_0.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  var UnaryOperationType_POSITIVE_instance;
  var UnaryOperationType_NEGATIVE_instance;
  var UnaryOperationType_NOT_instance;
  var UnaryOperationType_TRUTH_instance;
  var UnaryOperationType_entriesInitialized;
  function UnaryOperationType_initEntries() {
    if (UnaryOperationType_entriesInitialized)
      return Unit_getInstance();
    UnaryOperationType_entriesInitialized = true;
    UnaryOperationType_POSITIVE_instance = new UnaryOperationType('POSITIVE', 0);
    UnaryOperationType_NEGATIVE_instance = new UnaryOperationType('NEGATIVE', 1);
    UnaryOperationType_NOT_instance = new UnaryOperationType('NOT', 2);
    UnaryOperationType_TRUTH_instance = new UnaryOperationType('TRUTH', 3);
  }
  function UnaryOperationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  UnaryOperationType.$metadata$ = {
    simpleName: 'UnaryOperationType',
    kind: 'class',
    interfaces: []
  };
  function UnaryOperationType_POSITIVE_getInstance() {
    UnaryOperationType_initEntries();
    return UnaryOperationType_POSITIVE_instance;
  }
  function UnaryOperationType_NEGATIVE_getInstance() {
    UnaryOperationType_initEntries();
    return UnaryOperationType_NEGATIVE_instance;
  }
  function UnaryOperationType_NOT_getInstance() {
    UnaryOperationType_initEntries();
    return UnaryOperationType_NOT_instance;
  }
  function UnaryOperationType_TRUTH_getInstance() {
    UnaryOperationType_initEntries();
    return UnaryOperationType_TRUTH_instance;
  }
  function LAnyException(value) {
    RuntimeException_init_$Init$_0('Object thrown from Lin', this);
    this._value_23 = value;
    captureStack(this, LAnyException);
  }
  LAnyException.$metadata$ = {
    simpleName: 'LAnyException',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__131($boundThis) {
    this._$boundThis = $boundThis;
  }
  _no_name_provided__131.prototype.invoke_79fji1_k$ = function (p0) {
    return this._$boundThis.ofEntry_79fji1_k$(p0);
  };
  _no_name_provided__131.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_79fji1_k$((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__131.prototype._get_name__0_k$ = function () {
    return 'ofEntry';
  };
  _no_name_provided__131.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__132() {
  }
  _no_name_provided__132.prototype.invoke_wiekkq_k$ = function (p0) {
    return new LInteger(p0);
  };
  _no_name_provided__132.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wiekkq_k$(p1 instanceof Long ? p1 : THROW_CCE());
  };
  _no_name_provided__132.prototype._get_name__0_k$ = function () {
    return '<init>';
  };
  _no_name_provided__132.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__133($it) {
    this._$it = $it;
  }
  _no_name_provided__133.prototype.invoke_ec99pl_k$ = function (_anonymous_parameter_0_, _anonymous_parameter_1_) {
    return Companion_getInstance_30().of_wi7j7l_k$(this._$it.hasNext_0_k$());
  };
  _no_name_provided__133.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (p1 == null ? true : p1 instanceof LAny) ? p1 : THROW_CCE();
    return this.invoke_ec99pl_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__133.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__134($it) {
    this._$it_0 = $it;
  }
  _no_name_provided__134.prototype.invoke_ec99pl_k$ = function (_anonymous_parameter_0_, _anonymous_parameter_1_) {
    return this._$it_0.next_0_k$();
  };
  _no_name_provided__134.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (p1 == null ? true : p1 instanceof LAny) ? p1 : THROW_CCE();
    return this.invoke_ec99pl_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__134.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__135() {
  }
  _no_name_provided__135.prototype.invoke_ec99pl_k$ = function (_anonymous_parameter_0_, args) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(args, Collection)) {
        tmp = args.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = args.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = equals_0(element_2, LNull_getInstance());
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    if (tmp$ret$0) {
      throw new LAnyException(Exceptions_getInstance().nullPointer_0_k$());
    } else {
    }
    return LTrue_getInstance();
  };
  _no_name_provided__135.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (p1 == null ? true : p1 instanceof LAny) ? p1 : THROW_CCE();
    return this.invoke_ec99pl_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__135.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__136() {
  }
  _no_name_provided__136.prototype.invoke_ec99pl_k$ = function (thisValue, _anonymous_parameter_1_) {
    var tmp0_subject = thisValue;
    var tmp;
    if (tmp0_subject instanceof LArray) {
      tmp = thisValue._value_26.iterator_0_k$();
    } else {
      if (tmp0_subject instanceof LObject) {
        var tmp_0 = asSequence_0(thisValue._value_29);
        tmp = map(tmp_0, _no_name_provided_$factory_127(Companion_getInstance_30())).iterator_0_k$();
      } else {
        if (tmp0_subject instanceof LRange) {
          var tmp_1 = asSequence(thisValue._value_30);
          tmp = map(tmp_1, _no_name_provided_$factory_128()).iterator_0_k$();
        } else {
          if (tmp0_subject == null) {
            throw new LAnyException(Exceptions_getInstance().nullPointer_0_k$());
          } else {
            {
              throw new LAnyException(Exceptions_getInstance().unsupportedOperation_jg38oy_k$('iterator', thisValue._get_linType__0_k$()));
            }
          }
        }
      }
    }
    var it = tmp;
    var tmp_2 = Companion_getInstance_31();
    var tmp_3 = new LString('__hasNext');
    var tmp_4 = to(tmp_3, LNativeFunction_init_$Create$(null, _no_name_provided_$factory_129(it), 1, null));
    var tmp_5 = new LString('__next');
    return tmp_2.of_b37sri_k$([tmp_4, to(tmp_5, LNativeFunction_init_$Create$(null, _no_name_provided_$factory_130(it), 1, null))]);
  };
  _no_name_provided__136.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (p1 == null ? true : p1 instanceof LAny) ? p1 : THROW_CCE();
    return this.invoke_ec99pl_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__136.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function LinRuntime() {
    LinRuntime_instance = this;
    var tmp = this;
    tmp._ensureNotNull = LNativeFunction_init_$Create$(null, _no_name_provided_$factory_125(), 1, null);
    var tmp_0 = this;
    tmp_0._iterator_0 = LNativeFunction_init_$Create$(null, _no_name_provided_$factory_126(), 1, null);
  }
  LinRuntime.$metadata$ = {
    simpleName: 'LinRuntime',
    kind: 'object',
    interfaces: []
  };
  var LinRuntime_instance;
  function LinRuntime_getInstance() {
    if (LinRuntime_instance == null)
      new LinRuntime();
    return LinRuntime_instance;
  }
  function _no_name_provided_$factory_125() {
    var i = new _no_name_provided__135();
    return function (p1, p2) {
      return i.invoke_ec99pl_k$(p1, p2);
    };
  }
  function _no_name_provided_$factory_126() {
    var i = new _no_name_provided__136();
    return function (p1, p2) {
      return i.invoke_ec99pl_k$(p1, p2);
    };
  }
  function _no_name_provided_$factory_127($boundThis) {
    var i = new _no_name_provided__131($boundThis);
    var l = function (p1) {
      return i.invoke_79fji1_k$(p1);
    };
    l.callableName = i._get_name__0_k$();
    return l;
  }
  function _no_name_provided_$factory_128() {
    var i = new _no_name_provided__132();
    var l = function (p1) {
      return i.invoke_wiekkq_k$(p1);
    };
    l.callableName = i._get_name__0_k$();
    return l;
  }
  function _no_name_provided_$factory_129($it) {
    var i = new _no_name_provided__133($it);
    return function (p1, p2) {
      return i.invoke_ec99pl_k$(p1, p2);
    };
  }
  function _no_name_provided_$factory_130($it) {
    var i = new _no_name_provided__134($it);
    return function (p1, p2) {
      return i.invoke_ec99pl_k$(p1, p2);
    };
  }
  function Returned(value) {
    VMResult.call(this);
    this._value_24 = value;
  }
  Returned.$metadata$ = {
    simpleName: 'Returned',
    kind: 'class',
    interfaces: []
  };
  function Thrown(value) {
    VMResult.call(this);
    this._value_25 = value;
  }
  Thrown.$metadata$ = {
    simpleName: 'Thrown',
    kind: 'class',
    interfaces: []
  };
  function VMResult() {
  }
  VMResult.$metadata$ = {
    simpleName: 'VMResult',
    kind: 'class',
    interfaces: []
  };
  function Events($outer) {
    this._$this_7 = $outer;
  }
  Events.prototype.pushLayer_eyv8jr_k$ = function (layer) {
    var tmp0_this = this._$this_7;
    {
      var tmp0_plusAssign_0 = tmp0_this._layerStack;
      var tmp1_plusAssign_0 = this._$this_7._currentLayer;
      tmp0_plusAssign_0.add_2bq_k$(tmp1_plusAssign_0);
      Unit_getInstance();
    }
    this._$this_7._currentLayer = layer;
  };
  Events.prototype.replaceLayer_eyv8jr_k$ = function (layer) {
    this._$this_7._currentLayer = layer;
  };
  Events.prototype.onReturn_cbcuu9_k$ = function (value) {
    var layer = removeLastOrNull(this._$this_7._layerStack);
    if (layer == null) {
      this._$this_7._result = new Returned(value);
      return Unit_getInstance();
    }this._$this_7._currentLayer = layer;
    layer.onReturn_cbcuu9_k$(value);
  };
  Events.prototype.onThrow_cbcuu9_k$ = function (value) {
    var layer = removeLastOrNull(this._$this_7._layerStack);
    if (layer == null) {
      this._$this_7._result = new Thrown(value);
      return Unit_getInstance();
    }this._$this_7._currentLayer = layer;
    layer.onThrow_cbcuu9_k$(value);
  };
  Events.$metadata$ = {
    simpleName: 'Events',
    kind: 'class',
    interfaces: [VMEvents]
  };
  function LinVirtualMachine(scope, source) {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._layerStack = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = new Events(this);
    var tmp_2 = new DefaultMutableScope(scope);
    tmp_0._currentLayer = DefaultExecutionLayer_init_$Create$(tmp_1, tmp_2, source, null, null, 24, null);
    this._result = null;
  }
  LinVirtualMachine.prototype.run_0_k$ = function () {
    while (this.hasNextStep_0_k$()) {
      this.step_sv8swh_k$();
    }
    return this.result_0_k$();
  };
  LinVirtualMachine.prototype.hasNextStep_0_k$ = function () {
    return this._result == null;
  };
  LinVirtualMachine.prototype.step_sv8swh_k$ = function () {
    this._currentLayer.step_sv8swh_k$();
  };
  LinVirtualMachine.prototype.result_0_k$ = function () {
    var r = this._result;
    if (r instanceof Returned)
      return r._value_24;
    else {
      if (r instanceof Thrown)
        throw new LAnyException(r._value_25);
      else {
        if (r == null)
          throw RuntimeException_init_$Create$('Execution not finished');
        else {
          {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  };
  LinVirtualMachine.$metadata$ = {
    simpleName: 'LinVirtualMachine',
    kind: 'class',
    interfaces: []
  };
  function GT() {
    Comparison.call(this, 'GT', -1);
    Unit_getInstance();
    Comparison_GT_instance = this;
  }
  GT.prototype.toBoolean_ha5a7z_k$ = function (i) {
    return i > 0;
  };
  GT.$metadata$ = {
    simpleName: 'GT',
    kind: 'class',
    interfaces: []
  };
  var Comparison_GT_instance;
  function GTE() {
    Comparison.call(this, 'GTE', -1);
    Unit_getInstance();
    Comparison_GTE_instance = this;
  }
  GTE.prototype.toBoolean_ha5a7z_k$ = function (i) {
    return i >= 0;
  };
  GTE.$metadata$ = {
    simpleName: 'GTE',
    kind: 'class',
    interfaces: []
  };
  var Comparison_GTE_instance;
  function LT() {
    Comparison.call(this, 'LT', -1);
    Unit_getInstance();
    Comparison_LT_instance = this;
  }
  LT.prototype.toBoolean_ha5a7z_k$ = function (i) {
    return i < 0;
  };
  LT.$metadata$ = {
    simpleName: 'LT',
    kind: 'class',
    interfaces: []
  };
  var Comparison_LT_instance;
  function LTE() {
    Comparison.call(this, 'LTE', -1);
    Unit_getInstance();
    Comparison_LTE_instance = this;
  }
  LTE.prototype.toBoolean_ha5a7z_k$ = function (i) {
    return i <= 0;
  };
  LTE.$metadata$ = {
    simpleName: 'LTE',
    kind: 'class',
    interfaces: []
  };
  var Comparison_LTE_instance;
  var Comparison_entriesInitialized;
  function Comparison_initEntries() {
    if (Comparison_entriesInitialized)
      return Unit_getInstance();
    Comparison_entriesInitialized = true;
    Comparison_GT_instance = new GT();
    Comparison_GTE_instance = new GTE();
    Comparison_LT_instance = new LT();
    Comparison_LTE_instance = new LTE();
  }
  function DefaultExecutionLayer_init_$Init$(events, scope, source, node, thisValue, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      node = source._nodes.get_ha5a7z_k$(0);
    if (!(($mask0 & 16) === 0))
      thisValue = null;
    DefaultExecutionLayer.call($this, events, scope, source, node, thisValue);
    return $this;
  }
  function DefaultExecutionLayer_init_$Create$(events, scope, source, node, thisValue, $mask0, $marker) {
    return DefaultExecutionLayer_init_$Init$(events, scope, source, node, thisValue, $mask0, $marker, Object.create(DefaultExecutionLayer.prototype));
  }
  function ExceptionHandler(keepOnStack, jumpOnException, jumpOnEnd) {
    this._keepOnStack = keepOnStack;
    this._jumpOnException = jumpOnException;
    this._jumpOnEnd = jumpOnEnd;
  }
  ExceptionHandler.prototype.toString = function () {
    return '' + 'ExceptionHandler(keepOnStack=' + this._keepOnStack + ', jumpOnException=' + this._jumpOnException + ', jumpOnEnd=' + this._jumpOnEnd + ')';
  };
  ExceptionHandler.prototype.hashCode = function () {
    var result = this._keepOnStack;
    result = imul(result, 31) + this._jumpOnException | 0;
    result = imul(result, 31) + this._jumpOnEnd | 0;
    return result;
  };
  ExceptionHandler.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExceptionHandler))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExceptionHandler ? other : THROW_CCE();
    if (!(this._keepOnStack === tmp0_other_with_cast._keepOnStack))
      return false;
    if (!(this._jumpOnException === tmp0_other_with_cast._jumpOnException))
      return false;
    if (!(this._jumpOnEnd === tmp0_other_with_cast._jumpOnEnd))
      return false;
    return true;
  };
  ExceptionHandler.$metadata$ = {
    simpleName: 'ExceptionHandler',
    kind: 'class',
    interfaces: []
  };
  function LoopHandler(keepOnStack, jumpOnBreak, jumpOnContinue) {
    this._keepOnStack_0 = keepOnStack;
    this._jumpOnBreak = jumpOnBreak;
    this._jumpOnContinue = jumpOnContinue;
  }
  LoopHandler.prototype.toString = function () {
    return '' + 'LoopHandler(keepOnStack=' + this._keepOnStack_0 + ', jumpOnBreak=' + this._jumpOnBreak + ', jumpOnContinue=' + this._jumpOnContinue + ')';
  };
  LoopHandler.prototype.hashCode = function () {
    var result = this._keepOnStack_0;
    result = imul(result, 31) + this._jumpOnBreak | 0;
    result = imul(result, 31) + this._jumpOnContinue | 0;
    return result;
  };
  LoopHandler.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoopHandler))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LoopHandler ? other : THROW_CCE();
    if (!(this._keepOnStack_0 === tmp0_other_with_cast._keepOnStack_0))
      return false;
    if (!(this._jumpOnBreak === tmp0_other_with_cast._jumpOnBreak))
      return false;
    if (!(this._jumpOnContinue === tmp0_other_with_cast._jumpOnContinue))
      return false;
    return true;
  };
  LoopHandler.$metadata$ = {
    simpleName: 'LoopHandler',
    kind: 'class',
    interfaces: []
  };
  function popStack($this) {
    var tmp0_elvis_lhs = removeLastOrNull($this._stack);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new StackUnderflowException('Tried to remove an item from the stack, but the stack is empty.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function peekStack($this) {
    var tmp0_elvis_lhs = lastOrNull($this._stack);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new StackUnderflowException('Tried to get the last item from the stack, but the stack is empty.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function handleArrayInsert($this) {
    var value = popStack($this);
    var tmp = peekStack($this);
    var tmp0_elvis_lhs = tmp instanceof LArray ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Value is not an LArray.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var array = tmp_0;
    array._value_26.add_2bq_k$(value);
    Unit_getInstance();
  }
  function handleAssign($this, nameConst) {
    $this._scope.set_49s1r4_k$($this._source_3.stringConst_ha5a7z_k$(nameConst), popStack($this));
  }
  function handleBranchIf($this, value, labelCode) {
    var truth = popStack($this).truth_0_k$();
    if (truth === value) {
      $this._next_5 = $this._node.resolveLabel_ha5a7z_k$(labelCode);
    }}
  function handleBreak($this) {
    var last_0 = removeLast($this._loopHandlers);
    $this._next_5 = last_0._jumpOnBreak;
  }
  function handleContinue($this) {
    var last_0 = removeLast($this._loopHandlers);
    $this._next_5 = last_0._jumpOnContinue;
  }
  function handleDeclareVariable($this, mutable, nameConst) {
    var tmp = $this._scope;
    var tmp0_elvis_lhs = tmp instanceof MutableScope ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Current scope is not mutable');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var s = tmp_0;
    s.declareVariable_5xhc52_k$($this._source_3.stringConst_ha5a7z_k$(nameConst), mutable);
  }
  function handleDup($this) {
    $this._stack.add_2bq_k$(peekStack($this));
    Unit_getInstance();
  }
  function handleGetMemberProperty($this, nameConst) {
    var target = popStack($this);
    var name = $this._source_3.stringConst_ha5a7z_k$(nameConst);
    var member = target.getMember_6wfw3l_k$(name);
    if (!(member == null)) {
      $this._stack.add_2bq_k$(member);
      Unit_getInstance();
    }$this.onThrow_cbcuu9_k$(Exceptions_getInstance().noElementExists_6wfw3l_k$(name));
  }
  function handleGetSubscript($this, size) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var list_1_1 = ArrayList_init_$Create$_0(size);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var index_3_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = popStack($this);
                  break $l$block;
                }
                list_1_1.add_2bq_k$(tmp$ret$0);
                Unit_getInstance();
              }
            }
             while (inductionVariable < size);
        }
        tmp$ret$1 = list_1_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var arguments_0 = reversed(tmp$ret$2);
    var parent = popStack($this);
    var tmp;
    if (parent instanceof LArray) {
      tmp = size === 1;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var arg = first(arguments_0);
      if (arg instanceof LInteger) {
        var element = getOrNull(parent._value_26, arg._value_28.toInt_0_k$());
        if (!(element == null)) {
          $this._stack.add_2bq_k$(element);
          Unit_getInstance();
          return Unit_getInstance();
        }} else {
      }
    } else {
    }
    var tmp_0;
    if (parent instanceof LObject) {
      tmp_0 = size === 1;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      var arg_0 = first(arguments_0);
      var element_0 = parent._value_29.get_2bw_k$(arg_0);
      if (!(element_0 == null)) {
        $this._stack.add_2bq_k$(element_0);
        Unit_getInstance();
        return Unit_getInstance();
      }} else {
    }
    {
      var tmp0_TODO_0 = '' + 'Not yet implemented: GetSubscript -> ' + parent + arguments_0;
      throw new NotImplementedError('' + 'An operation is not implemented: ' + tmp0_TODO_0);
    }
  }
  function handleGetVariable($this, nameConst) {
    $this._stack.add_2bq_k$($this._scope.get_6wfw3l_k$($this._source_3.stringConst_ha5a7z_k$(nameConst)));
    Unit_getInstance();
  }
  function handleInvoke($this, size) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var list_1_1 = ArrayList_init_$Create$_0(size);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var index_3_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = popStack($this);
                  break $l$block;
                }
                list_1_1.add_2bq_k$(tmp$ret$0);
                Unit_getInstance();
              }
            }
             while (inductionVariable < size);
        }
        tmp$ret$1 = list_1_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var arguments_0 = reversed(tmp$ret$2);
    var function_0 = popStack($this);
    invocation($this, null, function_0, arguments_0);
  }
  function handleInvokeLocal($this, nameConst, size) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var list_1_1 = ArrayList_init_$Create$_0(size);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var index_3_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = popStack($this);
                  break $l$block;
                }
                list_1_1.add_2bq_k$(tmp$ret$0);
                Unit_getInstance();
              }
            }
             while (inductionVariable < size);
        }
        tmp$ret$1 = list_1_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var arguments_0 = reversed(tmp$ret$2);
    var function_0 = $this._scope.get_6wfw3l_k$($this._source_3.stringConst_ha5a7z_k$(nameConst));
    invocation($this, null, function_0, arguments_0);
  }
  function handleInvokeMember($this, nameConst, size) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var list_1_1 = ArrayList_init_$Create$_0(size);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var index_3_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = popStack($this);
                  break $l$block;
                }
                list_1_1.add_2bq_k$(tmp$ret$0);
                Unit_getInstance();
              }
            }
             while (inductionVariable < size);
        }
        tmp$ret$1 = list_1_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var arguments_0 = reversed(tmp$ret$2);
    var parent = popStack($this);
    var tmp0_elvis_lhs = parent.getMember_6wfw3l_k$($this._source_3.stringConst_ha5a7z_k$(nameConst));
    var function_0 = tmp0_elvis_lhs == null ? LNull_getInstance() : tmp0_elvis_lhs;
    invocation($this, parent, function_0, arguments_0);
  }
  function handleJump($this, labelCode) {
    $this._next_5 = $this._node.resolveLabel_ha5a7z_k$(labelCode);
  }
  function handleLoadDecimal($this, valueConst) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_fromBits_0 = DoubleCompanionObject_getInstance();
      var tmp1_fromBits_0 = $this._source_3.longConst_ha5a7z_k$(valueConst);
      tmp$ret$0 = doubleFromBits(tmp1_fromBits_0);
      break $l$block;
    }
    $this._stack.add_2bq_k$(new LDecimal(tmp$ret$0));
    Unit_getInstance();
  }
  function handleLoadInteger($this, valueConst) {
    $this._stack.add_2bq_k$(new LInteger($this._source_3.longConst_ha5a7z_k$(valueConst)));
    Unit_getInstance();
  }
  function handleLoadString($this, valueConst) {
    $this._stack.add_2bq_k$(new LString($this._source_3.stringConst_ha5a7z_k$(valueConst)));
    Unit_getInstance();
  }
  function handleNewArray($this) {
    $this._stack.add_2bq_k$(LArray_init_$Create$(null, 1, null));
    Unit_getInstance();
  }
  function handleNewFunction($this, functionId) {
    var functionData = $this._source_3._functions.get_ha5a7z_k$(functionId);
    $this._stack.add_2bq_k$(new LCompiledFunction($this._source_3, functionData, $this._scope));
    Unit_getInstance();
  }
  function handleNewObject($this) {
    $this._stack.add_2bq_k$(LObject_init_$Create$(null, 1, null));
    Unit_getInstance();
  }
  function handleObjectInsert($this) {
    var value = popStack($this);
    var key = popStack($this);
    var tmp = peekStack($this);
    var tmp0_elvis_lhs = tmp instanceof LObject ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Value is not an LObject.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var obj = tmp_0;
    {
      var tmp0_set_0 = obj._value_29;
      tmp0_set_0.put_1q9pf_k$(key, value);
      Unit_getInstance();
    }
  }
  function handlePopExceptionHandling($this) {
    removeLast($this._exceptionHandlers);
    Unit_getInstance();
  }
  function handlePop($this) {
    popStack($this);
    Unit_getInstance();
  }
  function handlePopLoopHandling($this) {
    removeLast($this._loopHandlers);
    Unit_getInstance();
  }
  function handlePopScope($this) {
    var tmp = $this;
    var tmp0_elvis_lhs = $this._scope._get_parent__0_k$();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("Can't pop root scope.");
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp._scope = tmp_0;
  }
  function handlePushBoolean($this, value) {
    $this._stack.add_2bq_k$(value ? LTrue_getInstance() : LFalse_getInstance());
    Unit_getInstance();
  }
  function handlePushDecimal($this, immediateValue) {
    $this._stack.add_2bq_k$(new LDecimal(immediateValue));
    Unit_getInstance();
  }
  function handlePushExceptionHandling($this, catchLabel, endLabel) {
    $this._exceptionHandlers.add_2bq_k$(new ExceptionHandler($this._stack._get_size__0_k$(), $this._node.resolveLabel_ha5a7z_k$(catchLabel), $this._node.resolveLabel_ha5a7z_k$(endLabel)));
    Unit_getInstance();
  }
  function handlePushInteger($this, immediateValue) {
    $this._stack.add_2bq_k$(new LInteger(toLong_0(immediateValue)));
    Unit_getInstance();
  }
  function handlePushLoopHandling($this, breakLabel, continueLabel) {
    $this._loopHandlers.add_2bq_k$(new LoopHandler($this._stack._get_size__0_k$(), $this._node.resolveLabel_ha5a7z_k$(breakLabel), $this._node.resolveLabel_ha5a7z_k$(continueLabel)));
    Unit_getInstance();
  }
  function handlePushNull($this) {
    $this._stack.add_2bq_k$(LNull_getInstance());
    Unit_getInstance();
  }
  function handlePushScope($this) {
    $this._scope = new DefaultMutableScope($this._scope);
  }
  function handlePushThis($this) {
    var tmp0_elvis_lhs = $this._thisValue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("There's no 'this' defined.");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    $this._stack.add_2bq_k$(tmp);
    Unit_getInstance();
  }
  function handleReturn($this) {
    $this._events.onReturn_cbcuu9_k$(popStack($this));
  }
  function handleSetMemberProperty($this, nameConst) {
    var value = popStack($this);
    var s = $this._source_3.stringConst_ha5a7z_k$(nameConst);
    var parent = popStack($this);
    if (parent instanceof LObject) {
      {
        var tmp0_set_0 = parent._value_29;
        var tmp1_set_0 = new LString(s);
        tmp0_set_0.put_1q9pf_k$(tmp1_set_0, value);
        Unit_getInstance();
      }
    } else {
    }
    {
      var tmp2_TODO_0 = '' + 'Not yet implemented: SetMember ' + parent + '.' + s + ' = ' + value;
      throw new NotImplementedError('' + 'An operation is not implemented: ' + tmp2_TODO_0);
    }
  }
  function handleSetSubscript($this, size) {
    var value = popStack($this);
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var list_1_1 = ArrayList_init_$Create$_0(size);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var index_3_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = popStack($this);
                  break $l$block;
                }
                list_1_1.add_2bq_k$(tmp$ret$0);
                Unit_getInstance();
              }
            }
             while (inductionVariable < size);
        }
        tmp$ret$1 = list_1_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var arguments_0 = reversed(tmp$ret$2);
    var parent = popStack($this);
    var tmp;
    if (parent instanceof LArray) {
      tmp = size === 1;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var arg = first(arguments_0);
      if (arg instanceof LInteger) {
        parent._value_26.set_ddb1qf_k$(arg._value_28.toInt_0_k$(), value);
        Unit_getInstance();
        return Unit_getInstance();
      } else {
      }
    } else {
    }
    var tmp_0;
    if (parent instanceof LObject) {
      tmp_0 = size === 1;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      var arg_0 = first(arguments_0);
      {
        var tmp0_set_0 = parent._value_29;
        tmp0_set_0.put_1q9pf_k$(arg_0, value);
        Unit_getInstance();
      }
      return Unit_getInstance();
    } else {
    }
    {
      var tmp1_TODO_0 = '' + 'Not yet implemented: SetSubscript -> ' + parent + arguments_0 + ' = ' + value;
      throw new NotImplementedError('' + 'An operation is not implemented: ' + tmp1_TODO_0);
    }
  }
  function handleSetVariable($this, nameConst) {
    $this._scope.set_49s1r4_k$($this._source_3.stringConst_ha5a7z_k$(nameConst), popStack($this));
  }
  function handleThrow($this) {
    $this.onThrow_cbcuu9_k$(popStack($this));
  }
  function handleTypeof($this) {
    $this._stack.add_2bq_k$(new LString(popStack($this)._get_linType__0_k$()));
    Unit_getInstance();
  }
  function handleBinaryAddOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    var tmp;
    if (left instanceof LString) {
      tmp = true;
    } else {
      {
        tmp = right instanceof LString;
      }
    }
    if (tmp) {
      $this._stack.add_2bq_k$(new LString(toString_1(left) + toString_1(right)));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    var tmp_0;
    if (left instanceof LArray) {
      tmp_0 = right instanceof LArray;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      $this._stack.add_2bq_k$(new LArray(toMutableList(plus(left._value_26, right._value_26))));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    var tmp_1;
    if (left instanceof LNumber) {
      tmp_1 = right instanceof LNumber;
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      $this._stack.add_2bq_k$(left.plus_f8x72b_k$(right));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_qn10g3_k$('add', left._get_linType__0_k$(), right._get_linType__0_k$()));
  }
  function handleBinaryDivideOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    var tmp;
    if (left instanceof LNumber) {
      tmp = right instanceof LNumber;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      $this._stack.add_2bq_k$(left.div_f8x72b_k$(right));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_qn10g3_k$('divide', left._get_linType__0_k$(), right._get_linType__0_k$()));
  }
  function handleBinaryEqualsOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    $this._stack.add_2bq_k$(Companion_getInstance_30().ofBoolean_vcj5fe_k$(equals_0(right, left)));
    Unit_getInstance();
  }
  function handleBinaryMultiplyOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    var tmp;
    if (left instanceof LString) {
      tmp = right instanceof LInteger;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      $this._stack.add_2bq_k$(new LString(repeat(left._value_31, right._value_28.toInt_0_k$())));
      Unit_getInstance();
    } else {
    }
    var tmp_0;
    if (left instanceof LNumber) {
      tmp_0 = right instanceof LNumber;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      $this._stack.add_2bq_k$(left.times_f8x72b_k$(right));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_qn10g3_k$('multiply', left._get_linType__0_k$(), right._get_linType__0_k$()));
  }
  function handleBinaryNotEqualsOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    $this._stack.add_2bq_k$(Companion_getInstance_30().ofBoolean_vcj5fe_k$(!equals_0(right, left)));
    Unit_getInstance();
  }
  function handleBinaryRangeOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    var tmp;
    if (left instanceof LInteger) {
      tmp = right instanceof LInteger;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      $this._stack.add_2bq_k$(left.rangeTo_u3hid8_k$(right));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_qn10g3_k$('range', left._get_linType__0_k$(), right._get_linType__0_k$()));
  }
  function handleBinaryRemainingOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    var tmp;
    if (left instanceof LNumber) {
      tmp = right instanceof LNumber;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      $this._stack.add_2bq_k$(left.rem_f8x72b_k$(right));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_qn10g3_k$('remaining', left._get_linType__0_k$(), right._get_linType__0_k$()));
  }
  function handleBinarySubtractOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    var tmp;
    if (left instanceof LNumber) {
      tmp = right instanceof LNumber;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      $this._stack.add_2bq_k$(left.minus_f8x72b_k$(right));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_qn10g3_k$('subtract', left._get_linType__0_k$(), right._get_linType__0_k$()));
  }
  function handleBinaryComparison($this, comparison) {
    var right = popStack($this);
    var left = popStack($this);
    var tmp;
    if (left instanceof LString) {
      tmp = right instanceof LString;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      $this._stack.add_2bq_k$(Companion_getInstance_30().ofBoolean_vcj5fe_k$(comparison.toBoolean_ha5a7z_k$(compareTo(left._value_31, right._value_31))));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    var tmp_0;
    if (left instanceof LNumber) {
      tmp_0 = right instanceof LNumber;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      $this._stack.add_2bq_k$(Companion_getInstance_30().ofBoolean_vcj5fe_k$(comparison.toBoolean_ha5a7z_k$(left.compareTo_f8x72b_k$(right))));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_qn10g3_k$('comparison', left._get_linType__0_k$(), right._get_linType__0_k$()));
  }
  function Comparison(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Comparison.$metadata$ = {
    simpleName: 'Comparison',
    kind: 'class',
    interfaces: []
  };
  function handleBinaryInOperation($this) {
    var right = popStack($this);
    var left = popStack($this);
    if (right instanceof LArray) {
      $this._stack.add_2bq_k$(Companion_getInstance_30().ofBoolean_vcj5fe_k$(right._value_26.contains_2bq_k$(left)));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    if (right instanceof LObject) {
      var tmp = Companion_getInstance_30();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_contains_0 = right._value_29;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = (isInterface(tmp0_contains_0, Map_0) ? tmp0_contains_0 : THROW_CCE()).containsKey_2bw_k$(left);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      $this._stack.add_2bq_k$(tmp.ofBoolean_vcj5fe_k$(tmp$ret$1));
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_qn10g3_k$('in', left._get_linType__0_k$(), right._get_linType__0_k$()));
  }
  function handleUnaryNegativeOperation($this) {
    var target = popStack($this);
    if (target instanceof LNumber) {
      $this._stack.add_2bq_k$(target.unaryMinus_0_k$());
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_jg38oy_k$('negative', target._get_linType__0_k$()));
  }
  function handleUnaryNotOperation($this) {
    $this._stack.add_2bq_k$(Companion_getInstance_30().ofBoolean_vcj5fe_k$(!popStack($this).truth_0_k$()));
    Unit_getInstance();
  }
  function handleUnaryPositiveOperation($this) {
    var target = popStack($this);
    if (target instanceof LNumber) {
      $this._stack.add_2bq_k$(target.unaryPlus_0_k$());
      Unit_getInstance();
      return Unit_getInstance();
    } else {
    }
    $this.onThrow_cbcuu9_k$(Exceptions_getInstance().unsupportedOperation_jg38oy_k$('positive', target._get_linType__0_k$()));
  }
  function handleUnaryTruthOperation($this) {
    $this._stack.add_2bq_k$(Companion_getInstance_30().ofBoolean_vcj5fe_k$(popStack($this).truth_0_k$()));
    Unit_getInstance();
  }
  function invocation($this, thisValue, function_0, args) {
    var tmp0_subject = function_0;
    if (tmp0_subject instanceof LNativeFunction) {
      try {
        $this._stack.add_2bq_k$(function_0._block_0(thisValue, args));
        Unit_getInstance();
      } catch ($p) {
        if ($p instanceof LAnyException) {
          $this.onThrow_cbcuu9_k$($p._value_23);
        } else {
          if ($p instanceof Exception) {
            {
              var tmp0_TODO_0 = '' + 'Not yet implemented: ' + thisValue + '.' + function_0 + '(' + joinToString$default_0(args, null, null, null, 0, null, null, 63, null) + ') threw native exception.';
              throw new NotImplementedError('' + 'An operation is not implemented: ' + tmp0_TODO_0);
            }
          } else {
            {
              throw $p;
            }
          }
        }
      }
    } else {
      if (tmp0_subject instanceof LCompiledFunction) {
        var layer = new FunctionSetupLayer($this._events, function_0, thisValue, args);
        $this._events.pushLayer_eyv8jr_k$(layer);
        layer.step_sv8swh_k$();
      } else {
        {
          $this.onThrow_cbcuu9_k$(Exceptions_getInstance().notAFunction_6wfw3l_k$(function_0._get_linType__0_k$()));
        }
      }
    }
  }
  function Comparison_GT_getInstance() {
    Comparison_initEntries();
    return Comparison_GT_instance;
  }
  function Comparison_GTE_getInstance() {
    Comparison_initEntries();
    return Comparison_GTE_instance;
  }
  function Comparison_LT_getInstance() {
    Comparison_initEntries();
    return Comparison_LT_instance;
  }
  function Comparison_LTE_getInstance() {
    Comparison_initEntries();
    return Comparison_LTE_instance;
  }
  function DefaultExecutionLayer(events, scope, source, node, thisValue) {
    this._events = events;
    this._scope = scope;
    this._source_3 = source;
    this._node = node;
    this._thisValue = thisValue;
    this._next_5 = 0;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._stack = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = ArrayList_init_$Create$();
      break $l$block_0;
    }
    tmp_0._exceptionHandlers = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = ArrayList_init_$Create$();
      break $l$block_1;
    }
    tmp_1._loopHandlers = tmp$ret$2;
  }
  DefaultExecutionLayer.prototype.step_sv8swh_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._next_5;
    tmp0_this._next_5 = tmp1 + 1 | 0;
    var insn = getOrNull(this._node._instructions, tmp1);
    if (insn == null) {
      var tmp2_elvis_lhs = removeLastOrNull(this._stack);
      this._events.onReturn_cbcuu9_k$(tmp2_elvis_lhs == null ? LNull_getInstance() : tmp2_elvis_lhs);
      return Unit_getInstance();
    }var tmp3_subject = insn;
    if (equals_0(tmp3_subject, ArrayInsertInsn_getInstance()))
      handleArrayInsert(this);
    else {
      if (tmp3_subject instanceof AssignInsn)
        handleAssign(this, insn._nameConst_2);
      else {
        if (tmp3_subject instanceof BranchIfInsn)
          handleBranchIf(this, insn._value_20, insn._labelCode);
        else {
          if (equals_0(tmp3_subject, BreakInsn_getInstance()))
            handleBreak(this);
          else {
            if (equals_0(tmp3_subject, ContinueInsn_getInstance()))
              handleContinue(this);
            else {
              if (tmp3_subject instanceof DeclareVariableInsn)
                handleDeclareVariable(this, insn._mutable_0, insn._nameConst_3);
              else {
                if (equals_0(tmp3_subject, DupInsn_getInstance()))
                  handleDup(this);
                else {
                  if (tmp3_subject instanceof GetMemberPropertyInsn)
                    handleGetMemberProperty(this, insn._nameConst_4);
                  else {
                    if (tmp3_subject instanceof GetSubscriptInsn)
                      handleGetSubscript(this, insn._size_1);
                    else {
                      if (tmp3_subject instanceof GetVariableInsn)
                        handleGetVariable(this, insn._nameConst_5);
                      else {
                        if (tmp3_subject instanceof InvokeInsn)
                          handleInvoke(this, insn._size_2);
                        else {
                          if (tmp3_subject instanceof InvokeLocalInsn)
                            handleInvokeLocal(this, insn._nameConst_6, insn._size_3);
                          else {
                            if (tmp3_subject instanceof InvokeMemberInsn)
                              handleInvokeMember(this, insn._nameConst_7, insn._size_4);
                            else {
                              if (tmp3_subject instanceof JumpInsn)
                                handleJump(this, insn._labelCode_0);
                              else {
                                if (tmp3_subject instanceof LoadDecimalInsn)
                                  handleLoadDecimal(this, insn._valueConst);
                                else {
                                  if (tmp3_subject instanceof LoadIntegerInsn)
                                    handleLoadInteger(this, insn._valueConst_0);
                                  else {
                                    if (tmp3_subject instanceof LoadStringInsn)
                                      handleLoadString(this, insn._valueConst_1);
                                    else {
                                      if (equals_0(tmp3_subject, NewArrayInsn_getInstance()))
                                        handleNewArray(this);
                                      else {
                                        if (tmp3_subject instanceof NewFunctionInsn)
                                          handleNewFunction(this, insn._functionId);
                                        else {
                                          if (equals_0(tmp3_subject, NewObjectInsn_getInstance()))
                                            handleNewObject(this);
                                          else {
                                            if (equals_0(tmp3_subject, ObjectInsertInsn_getInstance()))
                                              handleObjectInsert(this);
                                            else {
                                              if (equals_0(tmp3_subject, PopExceptionHandlingInsn_getInstance()))
                                                handlePopExceptionHandling(this);
                                              else {
                                                if (equals_0(tmp3_subject, PopInsn_getInstance()))
                                                  handlePop(this);
                                                else {
                                                  if (equals_0(tmp3_subject, PopLoopHandlingInsn_getInstance()))
                                                    handlePopLoopHandling(this);
                                                  else {
                                                    if (equals_0(tmp3_subject, PopScopeInsn_getInstance()))
                                                      handlePopScope(this);
                                                    else {
                                                      if (tmp3_subject instanceof PushBooleanInsn)
                                                        handlePushBoolean(this, insn._value_21);
                                                      else {
                                                        if (tmp3_subject instanceof PushDecimalInsn)
                                                          handlePushDecimal(this, insn._immediateValue);
                                                        else {
                                                          if (tmp3_subject instanceof PushExceptionHandlingInsn)
                                                            handlePushExceptionHandling(this, insn._catchLabel, insn._endLabel);
                                                          else {
                                                            if (tmp3_subject instanceof PushIntegerInsn)
                                                              handlePushInteger(this, insn._immediateValue_0);
                                                            else {
                                                              if (tmp3_subject instanceof PushLoopHandlingInsn)
                                                                handlePushLoopHandling(this, insn._breakLabel, insn._continueLabel);
                                                              else {
                                                                if (equals_0(tmp3_subject, PushNullInsn_getInstance()))
                                                                  handlePushNull(this);
                                                                else {
                                                                  if (equals_0(tmp3_subject, PushScopeInsn_getInstance()))
                                                                    handlePushScope(this);
                                                                  else {
                                                                    if (equals_0(tmp3_subject, PushThisInsn_getInstance()))
                                                                      handlePushThis(this);
                                                                    else {
                                                                      if (equals_0(tmp3_subject, ReturnInsn_getInstance()))
                                                                        handleReturn(this);
                                                                      else {
                                                                        if (tmp3_subject instanceof SetMemberPropertyInsn)
                                                                          handleSetMemberProperty(this, insn._nameConst_8);
                                                                        else {
                                                                          if (tmp3_subject instanceof SetSubscriptInsn)
                                                                            handleSetSubscript(this, insn._size_5);
                                                                          else {
                                                                            if (tmp3_subject instanceof SetVariableInsn)
                                                                              handleSetVariable(this, insn._nameConst_9);
                                                                            else {
                                                                              if (equals_0(tmp3_subject, ThrowInsn_getInstance()))
                                                                                handleThrow(this);
                                                                              else {
                                                                                if (equals_0(tmp3_subject, TypeofInsn_getInstance()))
                                                                                  handleTypeof(this);
                                                                                else {
                                                                                  if (equals_0(tmp3_subject, BinaryAddOperationInsn_getInstance()))
                                                                                    handleBinaryAddOperation(this);
                                                                                  else {
                                                                                    if (equals_0(tmp3_subject, BinaryDivideOperationInsn_getInstance()))
                                                                                      handleBinaryDivideOperation(this);
                                                                                    else {
                                                                                      if (equals_0(tmp3_subject, BinaryEqualsOperationInsn_getInstance()))
                                                                                        handleBinaryEqualsOperation(this);
                                                                                      else {
                                                                                        if (equals_0(tmp3_subject, BinaryGtOperationInsn_getInstance()))
                                                                                          handleBinaryComparison(this, Comparison_GT_getInstance());
                                                                                        else {
                                                                                          if (equals_0(tmp3_subject, BinaryGteOperationInsn_getInstance()))
                                                                                            handleBinaryComparison(this, Comparison_GTE_getInstance());
                                                                                          else {
                                                                                            if (equals_0(tmp3_subject, BinaryInOperationInsn_getInstance()))
                                                                                              handleBinaryInOperation(this);
                                                                                            else {
                                                                                              if (equals_0(tmp3_subject, BinaryLtOperationInsn_getInstance()))
                                                                                                handleBinaryComparison(this, Comparison_LT_getInstance());
                                                                                              else {
                                                                                                if (equals_0(tmp3_subject, BinaryLteOperationInsn_getInstance()))
                                                                                                  handleBinaryComparison(this, Comparison_LTE_getInstance());
                                                                                                else {
                                                                                                  if (equals_0(tmp3_subject, BinaryMultiplyOperationInsn_getInstance()))
                                                                                                    handleBinaryMultiplyOperation(this);
                                                                                                  else {
                                                                                                    if (equals_0(tmp3_subject, BinaryNotEqualsOperationInsn_getInstance()))
                                                                                                      handleBinaryNotEqualsOperation(this);
                                                                                                    else {
                                                                                                      if (equals_0(tmp3_subject, BinaryRangeOperationInsn_getInstance()))
                                                                                                        handleBinaryRangeOperation(this);
                                                                                                      else {
                                                                                                        if (equals_0(tmp3_subject, BinaryRemainingOperationInsn_getInstance()))
                                                                                                          handleBinaryRemainingOperation(this);
                                                                                                        else {
                                                                                                          if (equals_0(tmp3_subject, BinarySubtractOperationInsn_getInstance()))
                                                                                                            handleBinarySubtractOperation(this);
                                                                                                          else {
                                                                                                            if (equals_0(tmp3_subject, UnaryNegativeOperationInsn_getInstance()))
                                                                                                              handleUnaryNegativeOperation(this);
                                                                                                            else {
                                                                                                              if (equals_0(tmp3_subject, UnaryNotOperationInsn_getInstance()))
                                                                                                                handleUnaryNotOperation(this);
                                                                                                              else {
                                                                                                                if (equals_0(tmp3_subject, UnaryPositiveOperationInsn_getInstance()))
                                                                                                                  handleUnaryPositiveOperation(this);
                                                                                                                else {
                                                                                                                  if (equals_0(tmp3_subject, UnaryTruthOperationInsn_getInstance()))
                                                                                                                    handleUnaryTruthOperation(this);
                                                                                                                  else {
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  DefaultExecutionLayer.prototype.onReturn_cbcuu9_k$ = function (value) {
    this._stack.add_2bq_k$(value);
    Unit_getInstance();
  };
  DefaultExecutionLayer.prototype.onThrow_cbcuu9_k$ = function (value) {
    var handler = removeLastOrNull(this._exceptionHandlers);
    if (handler == null) {
      this._events.onThrow_cbcuu9_k$(value);
      return Unit_getInstance();
    }if (handler._keepOnStack < this._stack._get_size__0_k$()) {
      println('' + 'WTF? Stack is missing ' + (handler._keepOnStack - this._stack._get_size__0_k$() | 0) + ' items!! This is probably a bug!');
    } else if (handler._keepOnStack > this._stack._get_size__0_k$()) {
      {
        var tmp0_repeat_0 = handler._keepOnStack - this._stack._get_size__0_k$() | 0;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat_0)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              popStack(this);
              Unit_getInstance();
            }
          }
           while (inductionVariable < tmp0_repeat_0);
      }
    }this._next_5 = handler._jumpOnException;
    this._stack.add_2bq_k$(value);
    Unit_getInstance();
  };
  DefaultExecutionLayer.$metadata$ = {
    simpleName: 'DefaultExecutionLayer',
    kind: 'class',
    interfaces: [ExecutionLayer]
  };
  function Exceptions() {
    Exceptions_instance = this;
  }
  Exceptions.prototype.create_jg38oy_k$ = function (type, description) {
    return LObject_init_$Create$_0([to(new LString('errorType'), new LString(type)), to(new LString('description'), new LString(description))]);
  };
  Exceptions.prototype.mismatchedArgs_0_k$ = function () {
    return this.create_jg38oy_k$('mismatchedArguments', 'Invocation failed due to mismatched arguments.');
  };
  Exceptions.prototype.notAFunction_6wfw3l_k$ = function (type) {
    return this.create_jg38oy_k$('notAFunction', '' + "Cannot invoke function for type '" + type + "'.");
  };
  Exceptions.prototype.noElementExists_6wfw3l_k$ = function (element) {
    return this.create_jg38oy_k$('noElementExists', '' + "Element '" + element + "' does not exist.");
  };
  Exceptions.prototype.unsupportedOperation_qn10g3_k$ = function (operation, leftType, rightType) {
    return this.create_jg38oy_k$('unsupportedOperation', '' + "Cannot apply operation '" + operation + "' for types '" + leftType + "' and '" + rightType + "'.");
  };
  Exceptions.prototype.unsupportedOperation_jg38oy_k$ = function (operation, type) {
    return this.create_jg38oy_k$('unsupportedOperation', '' + "Cannot apply operation '" + operation + "' for type '" + type + "'.");
  };
  Exceptions.prototype.nullPointer_0_k$ = function () {
    return this.create_jg38oy_k$('nullPointer', 'Argument passed is null.');
  };
  Exceptions.$metadata$ = {
    simpleName: 'Exceptions',
    kind: 'object',
    interfaces: []
  };
  var Exceptions_instance;
  function Exceptions_getInstance() {
    if (Exceptions_instance == null)
      new Exceptions();
    return Exceptions_instance;
  }
  function ExecutionLayer() {
  }
  ExecutionLayer.$metadata$ = {
    simpleName: 'ExecutionLayer',
    kind: 'interface',
    interfaces: []
  };
  function FunctionSetupLayer(events, function_0, thisValue, arguments_0) {
    this._events_0 = events;
    this._function_4 = function_0;
    this._thisValue_0 = thisValue;
    this._resolvedParamName = null;
    var tmp0_container = this._function_4._data_2;
    var parametersId = tmp0_container.component1_0_k$();
    var bodyId = tmp0_container.component3_0_k$();
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_getOrElse_0 = this._function_4._source_4._nodes;
      var tmp_0;
      if (bodyId >= 0 ? bodyId <= _get_lastIndex__0(tmp0_getOrElse_0) : false) {
        tmp_0 = tmp0_getOrElse_0.get_ha5a7z_k$(bodyId);
      } else {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = new CompiledNode(emptyList(), emptyList());
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      }
      tmp$ret$1 = tmp_0;
      break $l$block_0;
    }
    tmp._body_3 = tmp$ret$1;
    this._scope_0 = new DefaultMutableScope(this._function_4._rootScope);
    this._paramsLeft = toMutableList(this._function_4._source_4._functionParameters.get_ha5a7z_k$(parametersId));
    this._argsLeft = toMutableList(arguments_0);
  }
  FunctionSetupLayer.prototype.step_sv8swh_k$ = function () {
    $l$break: while (true) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_isNotEmpty_0 = this._paramsLeft;
        tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_0_k$();
        break $l$block;
      }
      if (!tmp$ret$0) {
        break $l$break;
      }var parameter = removeFirst(this._paramsLeft);
      var value = removeFirstOrNull(this._argsLeft);
      var paramName = this._function_4._source_4.stringConst_ha5a7z_k$(parameter._nameConst_0);
      if (parameter._varargs_0) {
        {
          throw new NotImplementedError('An operation is not implemented: Not yet implemented: varargs parameter');
        }
      }if (!(value == null)) {
        this._scope_0.declareVariable_5xhc52_k$(paramName, true);
        this._scope_0.set_49s1r4_k$(paramName, value);
        continue $l$break;
      }if (!(parameter._defaultValueNodeId === -1)) {
        var paramBody = this._function_4._source_4._nodes.get_ha5a7z_k$(parameter._defaultValueNodeId);
        this._resolvedParamName = paramName;
        this._scope_0.declareVariable_5xhc52_k$(paramName, true);
        this._events_0.pushLayer_eyv8jr_k$(new DefaultExecutionLayer(this._events_0, this._scope_0, this._function_4._source_4, paramBody, this._thisValue_0));
        return Unit_getInstance();
      }this._events_0.onThrow_cbcuu9_k$(Exceptions_getInstance().mismatchedArgs_0_k$());
      return Unit_getInstance();
    }
    this._events_0.replaceLayer_eyv8jr_k$(new DefaultExecutionLayer(this._events_0, new DefaultMutableScope(this._scope_0), this._function_4._source_4, this._body_3, this._thisValue_0));
  };
  FunctionSetupLayer.prototype.onReturn_cbcuu9_k$ = function (value) {
    var tmp0_elvis_lhs = this._resolvedParamName;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('resolvedParamName should not be null');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var paramName = tmp;
    this._scope_0.set_49s1r4_k$(paramName, value);
  };
  FunctionSetupLayer.prototype.onThrow_cbcuu9_k$ = function (value) {
    this._events_0.onThrow_cbcuu9_k$(value);
  };
  FunctionSetupLayer.$metadata$ = {
    simpleName: 'FunctionSetupLayer',
    kind: 'class',
    interfaces: [ExecutionLayer]
  };
  function VMEvents() {
  }
  VMEvents.$metadata$ = {
    simpleName: 'VMEvents',
    kind: 'interface',
    interfaces: []
  };
  function AbstractMutableScope() {
    MutableScope.call(this);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp._declared = tmp$ret$0;
  }
  AbstractMutableScope.prototype.declareVariable_5xhc52_k$ = function (name, mutable) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_contains_0 = this._declared;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = (isInterface(tmp0_contains_0, Map_0) ? tmp0_contains_0 : THROW_CCE()).containsKey_2bw_k$(name);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1) {
      throw IllegalStateException_init_$Create$('' + 'Variable ' + name + ' already exists.');
    } else {
    }
    {
      var tmp1_set_0 = this._declared;
      tmp1_set_0.put_1q9pf_k$(name, mutable);
      Unit_getInstance();
    }
  };
  AbstractMutableScope.prototype.implIsDeclared_6wfw3l_k$ = function (name) {
    return this._declared.get_2bw_k$(name);
  };
  AbstractMutableScope.$metadata$ = {
    simpleName: 'AbstractMutableScope',
    kind: 'class',
    interfaces: []
  };
  function DefaultMutableScope(parent) {
    AbstractMutableScope.call(this);
    this._parent_0 = parent;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp._map_0 = tmp$ret$0;
  }
  DefaultMutableScope.prototype._get_parent__0_k$ = function () {
    return this._parent_0;
  };
  DefaultMutableScope.prototype.implSet_49s1r4_k$ = function (name, value) {
    {
      var tmp0_set_0 = this._map_0;
      tmp0_set_0.put_1q9pf_k$(name, value);
      Unit_getInstance();
    }
  };
  DefaultMutableScope.prototype.implIsSet_6wfw3l_k$ = function (name) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_contains_0 = this._map_0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = (isInterface(tmp0_contains_0, Map_0) ? tmp0_contains_0 : THROW_CCE()).containsKey_2bw_k$(name);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  DefaultMutableScope.prototype.implGet_6wfw3l_k$ = function (name) {
    return getValue(this._map_0, name);
  };
  DefaultMutableScope.$metadata$ = {
    simpleName: 'DefaultMutableScope',
    kind: 'class',
    interfaces: []
  };
  function ImmutableMapScope(map_0, parent) {
    Scope.call(this);
    this._map_1 = map_0;
    this._parent_1 = parent;
  }
  ImmutableMapScope.prototype._get_parent__0_k$ = function () {
    return this._parent_1;
  };
  ImmutableMapScope.prototype.implIsDeclared_6wfw3l_k$ = function (name) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_contains_0 = this._map_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = (isInterface(tmp0_contains_0, Map_0) ? tmp0_contains_0 : THROW_CCE()).containsKey_2bw_k$(name);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1) {
      return false;
    } else {
    }
    return null;
  };
  ImmutableMapScope.prototype.implIsSet_6wfw3l_k$ = function (name) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_contains_0 = this._map_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = (isInterface(tmp0_contains_0, Map_0) ? tmp0_contains_0 : THROW_CCE()).containsKey_2bw_k$(name);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ImmutableMapScope.prototype.implGet_6wfw3l_k$ = function (name) {
    return getValue(this._map_1, name);
  };
  ImmutableMapScope.$metadata$ = {
    simpleName: 'ImmutableMapScope',
    kind: 'class',
    interfaces: []
  };
  function MutableScope() {
    Scope.call(this);
  }
  MutableScope.prototype.set_49s1r4_k$ = function (name, value) {
    var s = this;
    while (!(s == null)) {
      if (!(s instanceof MutableScope)) {
        s = s._get_parent__0_k$();
        continue;
      } else {
      }
      var mutable = s.implIsDeclared_6wfw3l_k$(name);
      if (mutable == null) {
        s = s._get_parent__0_k$();
        continue;
      }if (!mutable ? s.implIsSet_6wfw3l_k$(name) : false) {
        throw IllegalStateException_init_$Create$('' + 'Tried to set immutable variable ' + name + ' with value already set.');
      }s.implSet_49s1r4_k$(name, value);
      return Unit_getInstance();
    }
    throw IllegalStateException_init_$Create$('' + 'Tried to set variable ' + name + ' not declared in any scope yet.');
  };
  MutableScope.$metadata$ = {
    simpleName: 'MutableScope',
    kind: 'class',
    interfaces: []
  };
  function Scope() {
  }
  Scope.prototype.get_6wfw3l_k$ = function (name) {
    var s = this;
    while (!(s == null)) {
      if (s.implIsDeclared_6wfw3l_k$(name) == null) {
        s = s._get_parent__0_k$();
        continue;
      }if (!s.implIsSet_6wfw3l_k$(name)) {
        throw IllegalStateException_init_$Create$('' + 'Variable ' + name + ' is declared but not set.');
      }return s.implGet_6wfw3l_k$(name);
    }
    throw IllegalStateException_init_$Create$('' + 'Could not resolve ' + name);
  };
  Scope.prototype.set_49s1r4_k$ = function (name, value) {
    var s = this;
    while (!(s == null)) {
      if (s instanceof MutableScope) {
        s = s._get_parent__0_k$();
        continue;
      } else {
      }
      s.set_49s1r4_k$(name, value);
      return Unit_getInstance();
    }
    throw IllegalStateException_init_$Create$('Could not find a mutable scope.');
  };
  Scope.$metadata$ = {
    simpleName: 'Scope',
    kind: 'class',
    interfaces: []
  };
  function Companion_31() {
    Companion_instance_30 = this;
  }
  Companion_31.prototype.of_wi7j7l_k$ = function (value) {
    var tmp0_subject = value;
    var tmp;
    var tmp_0;
    if (tmp0_subject == null) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof Unit;
    }
    if (tmp_0) {
      tmp = LNull_getInstance();
    } else {
      if (equals_0(tmp0_subject, true)) {
        tmp = LTrue_getInstance();
      } else {
        if (equals_0(tmp0_subject, false)) {
          tmp = LFalse_getInstance();
        } else {
          if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
            tmp = new LString(value);
          } else {
            if (tmp0_subject instanceof Char) {
              tmp = new LString(toString_1(value));
            } else {
              if (isNumber(tmp0_subject)) {
                var tmp_1;
                var tmp_2;
                if (!(value == null) ? typeof value === 'number' : false) {
                  tmp_2 = true;
                } else {
                  {
                    tmp_2 = !(value == null) ? typeof value === 'number' : false;
                  }
                }
                if (tmp_2) {
                  tmp_1 = new LDecimal(numberToDouble(value));
                } else {
                  {
                    tmp_1 = new LInteger(numberToLong(value));
                  }
                }
                tmp = tmp_1;
              } else {
                if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
                  var tmp$ret$2;
                  $l$block_1: {
                    var tmp0_mapTo_0 = value;
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = ArrayList_init_$Create$();
                      break $l$block;
                    }
                    var tmp1_mapTo_0 = tmp$ret$0;
                    var tmp0_iterator_1 = tmp0_mapTo_0.iterator_0_k$();
                    while (tmp0_iterator_1.hasNext_0_k$()) {
                      var item_2 = tmp0_iterator_1.next_0_k$();
                      var tmp$ret$1;
                      $l$block_0: {
                        tmp$ret$1 = Companion_getInstance_30().of_wi7j7l_k$(item_2);
                        break $l$block_0;
                      }
                      tmp1_mapTo_0.add_2bq_k$(tmp$ret$1);
                      Unit_getInstance();
                    }
                    tmp$ret$2 = tmp1_mapTo_0;
                    break $l$block_1;
                  }
                  tmp = new LArray(tmp$ret$2);
                } else {
                  if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map_0) : false) {
                    var tmp$ret$5;
                    $l$block_4: {
                      var tmp2_associateTo_0 = value._get_entries__0_k$();
                      var tmp$ret$3;
                      $l$block_2: {
                        tmp$ret$3 = LinkedHashMap_init_$Create$();
                        break $l$block_2;
                      }
                      var tmp3_associateTo_0 = tmp$ret$3;
                      var tmp0_iterator_1_0 = tmp2_associateTo_0.iterator_0_k$();
                      while (tmp0_iterator_1_0.hasNext_0_k$()) {
                        var element_2 = tmp0_iterator_1_0.next_0_k$();
                        {
                          var tmp$ret$4;
                          $l$block_3: {
                            tmp$ret$4 = to(Companion_getInstance_30().of_wi7j7l_k$(element_2._get_key__0_k$()), Companion_getInstance_30().of_wi7j7l_k$(element_2._get_value__0_k$()));
                            break $l$block_3;
                          }
                          var tmp0_plusAssign_0_3 = tmp$ret$4;
                          tmp3_associateTo_0.put_1q9pf_k$(tmp0_plusAssign_0_3._first, tmp0_plusAssign_0_3._second);
                          Unit_getInstance();
                        }
                      }
                      tmp$ret$5 = tmp3_associateTo_0;
                      break $l$block_4;
                    }
                    tmp = new LObject(tmp$ret$5);
                  } else {
                    {
                      throw IllegalArgumentException_init_$Create$('' + "Can't convert " + value + ' to LAny.');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  Companion_31.prototype.ofBoolean_vcj5fe_k$ = function (value) {
    return value ? LTrue_getInstance() : LFalse_getInstance();
  };
  Companion_31.prototype.ofEntry_79fji1_k$ = function (entry) {
    return LObject_init_$Create$_0([to(new LString('key'), entry._get_key__0_k$()), to(new LString('value'), entry._get_value__0_k$())]);
  };
  Companion_31.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_31();
    return Companion_instance_30;
  }
  function LAny() {
    Companion_getInstance_30();
  }
  LAny.$metadata$ = {
    simpleName: 'LAny',
    kind: 'class',
    interfaces: []
  };
  function LArray_init_$Init$(value, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = ArrayList_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      value = tmp$ret$0;
    }LArray.call($this, value);
    return $this;
  }
  function LArray_init_$Create$(value, $mask0, $marker) {
    return LArray_init_$Init$(value, $mask0, $marker, Object.create(LArray.prototype));
  }
  function LArray(value) {
    LAny.call(this);
    this._value_26 = value;
  }
  LArray.prototype.truth_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNotEmpty_0 = this._value_26;
      tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  LArray.prototype._get_linType__0_k$ = function () {
    return 'array';
  };
  LArray.prototype.getMember_6wfw3l_k$ = function (name) {
    if (name === '__iterator') {
      return LinRuntime_getInstance()._iterator_0;
    }return null;
  };
  LArray.prototype.toString = function () {
    return toString_1(this._value_26);
  };
  LArray.prototype.hashCode = function () {
    return hashCode(this._value_26);
  };
  LArray.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LArray ? other : THROW_CCE();
    if (!equals_0(this._value_26, tmp0_other_with_cast._value_26))
      return false;
    return true;
  };
  LArray.$metadata$ = {
    simpleName: 'LArray',
    kind: 'class',
    interfaces: []
  };
  function LCompiledFunction(source, data, rootScope) {
    LFunction.call(this);
    this._source_4 = source;
    this._data_2 = data;
    this._rootScope = rootScope;
  }
  LCompiledFunction.prototype._get_name__0_k$ = function () {
    return this._source_4.stringConstOrNull_ha5a7z_k$(this._data_2._nameConst);
  };
  LCompiledFunction.$metadata$ = {
    simpleName: 'LCompiledFunction',
    kind: 'class',
    interfaces: []
  };
  function LDecimal(value) {
    LNumber.call(this);
    this._value_27 = value;
  }
  LDecimal.prototype.compareTo_f8x72b_k$ = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      tmp = compareTo(this._value_27, other._value_27);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = compareTo(this._value_27, other._value_28);
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LDecimal.prototype.plus_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      tmp = new LDecimal(this._value_27 + right._value_27);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LDecimal(this._value_27 + right._value_28.toDouble_0_k$());
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LDecimal.prototype.minus_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      tmp = new LDecimal(this._value_27 - right._value_27);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LDecimal(this._value_27 - right._value_28.toDouble_0_k$());
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LDecimal.prototype.times_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      tmp = new LDecimal(this._value_27 * right._value_27);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LDecimal(this._value_27 * right._value_28.toDouble_0_k$());
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LDecimal.prototype.div_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      tmp = new LDecimal(this._value_27 / right._value_27);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LDecimal(this._value_27 / right._value_28.toDouble_0_k$());
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LDecimal.prototype.rem_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      tmp = new LDecimal(this._value_27 % right._value_27);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LDecimal(this._value_27 % right._value_28.toDouble_0_k$());
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LDecimal.prototype.unaryPlus_0_k$ = function () {
    return new LDecimal(+this._value_27);
  };
  LDecimal.prototype.unaryMinus_0_k$ = function () {
    return new LDecimal(-this._value_27);
  };
  LDecimal.prototype.truth_0_k$ = function () {
    return !(this._value_27 === 0.0);
  };
  LDecimal.prototype._get_linType__0_k$ = function () {
    return 'decimal';
  };
  LDecimal.prototype.getMember_6wfw3l_k$ = function (name) {
    return null;
  };
  LDecimal.prototype.toString = function () {
    return this._value_27.toString();
  };
  LDecimal.prototype.hashCode = function () {
    return getNumberHashCode(this._value_27);
  };
  LDecimal.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LDecimal))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LDecimal ? other : THROW_CCE();
    if (!equals_0(this._value_27, tmp0_other_with_cast._value_27))
      return false;
    return true;
  };
  LDecimal.$metadata$ = {
    simpleName: 'LDecimal',
    kind: 'class',
    interfaces: []
  };
  function LFalse() {
    LFalse_instance = this;
    LAny.call(this);
  }
  LFalse.prototype.truth_0_k$ = function () {
    return false;
  };
  LFalse.prototype._get_linType__0_k$ = function () {
    return 'boolean';
  };
  LFalse.prototype.getMember_6wfw3l_k$ = function (name) {
    return null;
  };
  LFalse.prototype.toString = function () {
    return 'false';
  };
  LFalse.$metadata$ = {
    simpleName: 'LFalse',
    kind: 'object',
    interfaces: []
  };
  var LFalse_instance;
  function LFalse_getInstance() {
    if (LFalse_instance == null)
      new LFalse();
    return LFalse_instance;
  }
  function LFunction() {
    LAny.call(this);
  }
  LFunction.prototype.truth_0_k$ = function () {
    return true;
  };
  LFunction.prototype._get_linType__0_k$ = function () {
    return 'function';
  };
  LFunction.prototype.getMember_6wfw3l_k$ = function (name) {
    return null;
  };
  LFunction.prototype.toString = function () {
    if (!(this._get_name__0_k$() == null)) {
      return '' + '<function ' + this._get_name__0_k$() + '>';
    }return '<function>';
  };
  LFunction.$metadata$ = {
    simpleName: 'LFunction',
    kind: 'class',
    interfaces: []
  };
  function LInteger(value) {
    LNumber.call(this);
    this._value_28 = value;
  }
  LInteger.prototype.compareTo_f8x72b_k$ = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_compareTo_0 = this._value_28;
        var tmp1_compareTo_0 = other._value_27;
        tmp$ret$0 = compareTo(tmp0_compareTo_0.toDouble_0_k$(), tmp1_compareTo_0);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = this._value_28.compareTo_wiekkq_k$(other._value_28);
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LInteger.prototype.plus_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_plus_0 = this._value_28;
        var tmp1_plus_0 = right._value_27;
        tmp$ret$0 = tmp0_plus_0.toDouble_0_k$() + tmp1_plus_0;
        break $l$block;
      }
      tmp = new LDecimal(tmp$ret$0);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LInteger(this._value_28.plus_wiekkq_k$(right._value_28));
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LInteger.prototype.minus_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_minus_0 = this._value_28;
        var tmp1_minus_0 = right._value_27;
        tmp$ret$0 = tmp0_minus_0.toDouble_0_k$() - tmp1_minus_0;
        break $l$block;
      }
      tmp = new LDecimal(tmp$ret$0);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LInteger(this._value_28.minus_wiekkq_k$(right._value_28));
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LInteger.prototype.times_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_times_0 = this._value_28;
        var tmp1_times_0 = right._value_27;
        tmp$ret$0 = tmp0_times_0.toDouble_0_k$() * tmp1_times_0;
        break $l$block;
      }
      tmp = new LDecimal(tmp$ret$0);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LInteger(this._value_28.times_wiekkq_k$(right._value_28));
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LInteger.prototype.div_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_div_0 = this._value_28;
        var tmp1_div_0 = right._value_27;
        tmp$ret$0 = tmp0_div_0.toDouble_0_k$() / tmp1_div_0;
        break $l$block;
      }
      tmp = new LDecimal(tmp$ret$0);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LInteger(this._value_28.div_wiekkq_k$(right._value_28));
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LInteger.prototype.rem_f8x72b_k$ = function (right) {
    var tmp0_subject = right;
    var tmp;
    if (tmp0_subject instanceof LDecimal) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_rem_0 = this._value_28;
        var tmp1_rem_0 = right._value_27;
        tmp$ret$0 = tmp0_rem_0.toDouble_0_k$() % tmp1_rem_0;
        break $l$block;
      }
      tmp = new LDecimal(tmp$ret$0);
    } else {
      if (tmp0_subject instanceof LInteger) {
        tmp = new LInteger(this._value_28.rem_wiekkq_k$(right._value_28));
      } else {
        {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  LInteger.prototype.unaryPlus_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unaryPlus_0 = this._value_28;
      tmp$ret$0 = tmp0_unaryPlus_0;
      break $l$block;
    }
    return new LInteger(tmp$ret$0);
  };
  LInteger.prototype.unaryMinus_0_k$ = function () {
    return new LInteger(this._value_28.unaryMinus_0_k$());
  };
  LInteger.prototype.truth_0_k$ = function () {
    return !this._value_28.equals(new Long(0, 0));
  };
  LInteger.prototype._get_linType__0_k$ = function () {
    return 'integer';
  };
  LInteger.prototype.getMember_6wfw3l_k$ = function (name) {
    return null;
  };
  LInteger.prototype.toString = function () {
    return this._value_28.toString();
  };
  LInteger.prototype.rangeTo_u3hid8_k$ = function (right) {
    return new LRange(this._value_28.rangeTo_wiekkq_k$(right._value_28));
  };
  LInteger.prototype.hashCode = function () {
    return this._value_28.hashCode();
  };
  LInteger.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LInteger))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LInteger ? other : THROW_CCE();
    if (!this._value_28.equals(tmp0_other_with_cast._value_28))
      return false;
    return true;
  };
  LInteger.$metadata$ = {
    simpleName: 'LInteger',
    kind: 'class',
    interfaces: []
  };
  function LNativeFunction_init_$Init$(name, block, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      name = null;
    LNativeFunction.call($this, name, block);
    return $this;
  }
  function LNativeFunction_init_$Create$(name, block, $mask0, $marker) {
    return LNativeFunction_init_$Init$(name, block, $mask0, $marker, Object.create(LNativeFunction.prototype));
  }
  function LNativeFunction(name, block) {
    LFunction.call(this);
    this._name_11 = name;
    this._block_0 = block;
  }
  LNativeFunction.prototype._get_name__0_k$ = function () {
    return this._name_11;
  };
  LNativeFunction.$metadata$ = {
    simpleName: 'LNativeFunction',
    kind: 'class',
    interfaces: []
  };
  function LNull() {
    LNull_instance = this;
    LAny.call(this);
  }
  LNull.prototype.truth_0_k$ = function () {
    return false;
  };
  LNull.prototype._get_linType__0_k$ = function () {
    return 'null';
  };
  LNull.prototype.getMember_6wfw3l_k$ = function (name) {
    return null;
  };
  LNull.prototype.toString = function () {
    return 'null';
  };
  LNull.$metadata$ = {
    simpleName: 'LNull',
    kind: 'object',
    interfaces: []
  };
  var LNull_instance;
  function LNull_getInstance() {
    if (LNull_instance == null)
      new LNull();
    return LNull_instance;
  }
  function LNumber() {
    LAny.call(this);
  }
  LNumber.$metadata$ = {
    simpleName: 'LNumber',
    kind: 'class',
    interfaces: []
  };
  function LObject_init_$Init$(value, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      $l$block: {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
        tmp$ret$0_0 = Unit_getInstance();
        break $l$block;
      }
      value = tmp$ret$0;
    }LObject.call($this, value);
    return $this;
  }
  function LObject_init_$Create$(value, $mask0, $marker) {
    return LObject_init_$Init$(value, $mask0, $marker, Object.create(LObject.prototype));
  }
  function LObject_init_$Init$_0(pairs, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    LObject.call($this, toMap_0(pairs, tmp$ret$0));
    return $this;
  }
  function LObject_init_$Create$_0(pairs) {
    return LObject_init_$Init$_0(pairs, Object.create(LObject.prototype));
  }
  function Companion_32() {
    Companion_instance_31 = this;
  }
  Companion_32.prototype.of_b37sri_k$ = function (pairs) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    return new LObject(toMap_0(pairs, tmp$ret$0));
  };
  Companion_32.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_32();
    return Companion_instance_31;
  }
  function LObject(value) {
    Companion_getInstance_31();
    LAny.call(this);
    this._value_29 = value;
  }
  LObject.prototype.truth_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNotEmpty_0 = this._value_29;
      tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  LObject.prototype._get_linType__0_k$ = function () {
    return 'object';
  };
  LObject.prototype.getMember_6wfw3l_k$ = function (name) {
    return this._value_29.get_2bw_k$(new LString(name));
  };
  LObject.prototype.toString = function () {
    return toString_1(this._value_29);
  };
  LObject.prototype.hashCode = function () {
    return hashCode(this._value_29);
  };
  LObject.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LObject))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LObject ? other : THROW_CCE();
    if (!equals_0(this._value_29, tmp0_other_with_cast._value_29))
      return false;
    return true;
  };
  LObject.$metadata$ = {
    simpleName: 'LObject',
    kind: 'class',
    interfaces: []
  };
  function LRange(value) {
    LAny.call(this);
    this._value_30 = value;
  }
  LRange.prototype.truth_0_k$ = function () {
    return true;
  };
  LRange.prototype._get_linType__0_k$ = function () {
    return 'range';
  };
  LRange.prototype.getMember_6wfw3l_k$ = function (name) {
    if (name === '__iterator') {
      return LinRuntime_getInstance()._iterator_0;
    }return null;
  };
  LRange.$metadata$ = {
    simpleName: 'LRange',
    kind: 'class',
    interfaces: []
  };
  function LString(value) {
    LAny.call(this);
    this._value_31 = value;
  }
  LString.prototype.truth_0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNotEmpty_0 = this._value_31;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty_0) > 0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  LString.prototype._get_linType__0_k$ = function () {
    return 'string';
  };
  LString.prototype.getMember_6wfw3l_k$ = function (name) {
    return null;
  };
  LString.prototype.toString = function () {
    return this._value_31;
  };
  LString.prototype.hashCode = function () {
    return getStringHashCode(this._value_31);
  };
  LString.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LString))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof LString ? other : THROW_CCE();
    if (!(this._value_31 === tmp0_other_with_cast._value_31))
      return false;
    return true;
  };
  LString.$metadata$ = {
    simpleName: 'LString',
    kind: 'class',
    interfaces: []
  };
  function LTrue() {
    LTrue_instance = this;
    LAny.call(this);
  }
  LTrue.prototype.truth_0_k$ = function () {
    return true;
  };
  LTrue.prototype._get_linType__0_k$ = function () {
    return 'boolean';
  };
  LTrue.prototype.getMember_6wfw3l_k$ = function (name) {
    return null;
  };
  LTrue.prototype.toString = function () {
    return 'true';
  };
  LTrue.$metadata$ = {
    simpleName: 'LTrue',
    kind: 'object',
    interfaces: []
  };
  var LTrue_instance;
  function LTrue_getInstance() {
    if (LTrue_instance == null)
      new LTrue();
    return LTrue_instance;
  }
  function Compilation(compiledSource, parseDuration, compileDuration) {
    this._compiledSource = compiledSource;
    this._parseDuration = parseDuration;
    this._compileDuration = compileDuration;
  }
  Compilation.prototype._get_parseDuration__0_k$ = function () {
    return this._parseDuration;
  };
  Compilation.prototype._get_compileDuration__0_k$ = function () {
    return this._compileDuration;
  };
  Compilation.prototype.sourceToBytes = function () {
    return this._compiledSource.toBytes_0_k$().toByteArray_0_k$();
  };
  Compilation.prototype.sourceToHex = function () {
    return this._compiledSource.toBytes_0_k$().hex_0_k$();
  };
  Compilation.prototype.sourceToBase64 = function () {
    return this._compiledSource.toBytes_0_k$().base64_0_k$();
  };
  Compilation.prototype.createVM = function () {
    return new VirtualMachine(this._compiledSource);
  };
  Compilation.$metadata$ = {
    simpleName: 'Compilation',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Compilation.prototype, 'parseDuration', {
    configurable: true,
    get: Compilation.prototype._get_parseDuration__0_k$
  });
  Object.defineProperty(Compilation.prototype, 'compileDuration', {
    configurable: true,
    get: Compilation.prototype._get_compileDuration__0_k$
  });
  function ExecutionResult(timedRun) {
    this._runDuration = Duration__toString_impl(timedRun._duration);
    this._isError = _Result___get_isFailure__impl_(timedRun._value._value_0);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_fold_0 = timedRun._value._value_0;
      {
      }
      var exception_1 = Result__exceptionOrNull_impl(tmp0_fold_0);
      var tmp_0;
      if (exception_1 == null) {
        var tmp_1 = _Result___get_value__impl_(tmp0_fold_0);
        tmp_0 = toString_1((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
      } else {
        var tmp$ret$0;
        $l$block: {
          var tmp_2;
          if (exception_1 instanceof LAnyException) {
            tmp_2 = '' + 'Thrown: ' + exception_1._value_23 + '\n' + stackTraceToString(exception_1);
          } else {
            {
              tmp_2 = stackTraceToString(exception_1);
            }
          }
          tmp$ret$0 = tmp_2;
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      }
      tmp$ret$1 = tmp_0;
      break $l$block_0;
    }
    tmp._result_0 = tmp$ret$1;
  }
  ExecutionResult.prototype._get_runDuration__0_k$ = function () {
    return this._runDuration;
  };
  ExecutionResult.prototype._get_isError__0_k$ = function () {
    return this._isError;
  };
  ExecutionResult.prototype._get_result__0_k$ = function () {
    return this._result_0;
  };
  ExecutionResult.$metadata$ = {
    simpleName: 'ExecutionResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ExecutionResult.prototype, 'runDuration', {
    configurable: true,
    get: ExecutionResult.prototype._get_runDuration__0_k$
  });
  Object.defineProperty(ExecutionResult.prototype, 'isError', {
    configurable: true,
    get: ExecutionResult.prototype._get_isError__0_k$
  });
  Object.defineProperty(ExecutionResult.prototype, 'result', {
    configurable: true,
    get: ExecutionResult.prototype._get_result__0_k$
  });
  function Lin_0() {
    Lin_instance_0 = this;
  }
  Lin_0.prototype.compile = function (source) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_measureTimedValue_0_1 = Monotonic_getInstance();
        {
        }
        var mark_2_2 = tmp0_measureTimedValue_0_1.markNow_0_k$();
        var tmp$ret$0;
        $l$block: {
          var tmp = Lin_getInstance()._parser_0;
          tmp$ret$0 = tmp.parse_97u0gy_k$(Source_init_$Create$(source, null, null, 6, null));
          break $l$block;
        }
        var result_3_3 = tmp$ret$0;
        tmp$ret$1 = new TimedValue(result_3_3, mark_2_2.elapsedNow_jukv7u_k$());
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var tmp0_container = tmp$ret$2;
    var node = tmp0_container.component1_0_k$();
    var parseDuration = tmp0_container.component2_jukv7u_k$();
    var tmp$ret$5;
    $l$block_4: {
      {
      }
      var tmp$ret$4;
      $l$block_3: {
        var tmp0_measureTimedValue_0_1_0 = Monotonic_getInstance();
        {
        }
        var mark_2_2_0 = tmp0_measureTimedValue_0_1_0.markNow_0_k$();
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = Companion_getInstance_29().compile_35k71k_k$(node);
          break $l$block_2;
        }
        var result_3_3_0 = tmp$ret$3;
        tmp$ret$4 = new TimedValue(result_3_3_0, mark_2_2_0.elapsedNow_jukv7u_k$());
        break $l$block_3;
      }
      tmp$ret$5 = tmp$ret$4;
      break $l$block_4;
    }
    var tmp1_container = tmp$ret$5;
    var compiledSource = tmp1_container.component1_0_k$();
    var compileDuration = tmp1_container.component2_jukv7u_k$();
    return new Compilation(compiledSource, Duration__toString_impl(parseDuration), Duration__toString_impl(compileDuration));
  };
  Lin_0.$metadata$ = {
    simpleName: 'Lin',
    kind: 'object',
    interfaces: []
  };
  var Lin_instance_0;
  function Lin_getInstance_0() {
    if (Lin_instance_0 == null)
      new Lin_0();
    return Lin_instance_0;
  }
  function LinDefaultRuntime() {
    LinDefaultRuntime_instance = this;
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0_1 = LinkedHashMap_init_$Create$();
          {
          }
          {
            tmp0_apply_0_1.put_1q9pf_k$('__ensureNotNull', LinRuntime_getInstance()._ensureNotNull);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_apply_0_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.build_0_k$();
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var map_0 = tmp$ret$2;
    this._scope_1 = new ImmutableMapScope(map_0, null);
  }
  LinDefaultRuntime.$metadata$ = {
    simpleName: 'LinDefaultRuntime',
    kind: 'object',
    interfaces: []
  };
  var LinDefaultRuntime_instance;
  function LinDefaultRuntime_getInstance() {
    if (LinDefaultRuntime_instance == null)
      new LinDefaultRuntime();
    return LinDefaultRuntime_instance;
  }
  function VirtualMachine(source) {
    this._source_5 = source;
    this._vm = new LinVirtualMachine(LinDefaultRuntime_getInstance()._scope_1, this._source_5);
  }
  VirtualMachine.prototype.run = function () {
    var tmp$ret$6;
    $l$block_5: {
      {
      }
      var tmp$ret$5;
      $l$block_4: {
        var tmp0_measureTimedValue_0_1 = Monotonic_getInstance();
        {
        }
        var mark_2_2 = tmp0_measureTimedValue_0_1.markNow_0_k$();
        var tmp$ret$4;
        $l$block_3: {
          var tmp$ret$3;
          $l$block_2: {
            var tmp0_runCatching_0_5 = this._vm;
            var tmp;
            try {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_success_0_1_6 = Companion_getInstance_3();
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = tmp0_runCatching_0_5.run_0_k$();
                  break $l$block;
                }
                var tmp1_success_0_2_7 = tmp$ret$0;
                tmp$ret$1 = _Result___init__impl_(tmp1_success_0_2_7);
                break $l$block_0;
              }
              tmp = tmp$ret$1;
            } catch ($p) {
              var tmp_0;
              if ($p instanceof Error) {
                var tmp$ret$2;
                $l$block_1: {
                  var tmp2_failure_0_4_9 = Companion_getInstance_3();
                  tmp$ret$2 = _Result___init__impl_(createFailure($p));
                  break $l$block_1;
                }
                tmp_0 = tmp$ret$2;
              } else {
                {
                  throw $p;
                }
              }
              tmp = tmp_0;
            }
            tmp$ret$3 = tmp;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        var result_3_3 = tmp$ret$4;
        tmp$ret$5 = new TimedValue(new Result(result_3_3), mark_2_2.elapsedNow_jukv7u_k$());
        break $l$block_4;
      }
      tmp$ret$6 = tmp$ret$5;
      break $l$block_5;
    }
    return new ExecutionResult(tmp$ret$6);
  };
  VirtualMachine.$metadata$ = {
    simpleName: 'VirtualMachine',
    kind: 'class',
    interfaces: []
  };
  InternalHashCodeMap.prototype.createJsMap_0_k$ = InternalMap.prototype.createJsMap_0_k$;
  GrammarBuilder.prototype.prefix$default_914gix_k$ = GrammarDSL.prototype.prefix$default_914gix_k$;
  GrammarBuilder.prototype.infix$default_dfvar_k$ = GrammarDSL.prototype.infix$default_dfvar_k$;
  LexerImpl.prototype.parseTo_jahqw7_k$ = Lexer.prototype.parseTo_jahqw7_k$;
  LexerImpl.prototype.parseToList_97u0gy_k$ = Lexer.prototype.parseToList_97u0gy_k$;
  MatcherImpl.prototype.invoke_b8gbam_k$ = LexerDSL.prototype.invoke_b8gbam_k$;
  MatcherImpl.prototype.invoke_rw362x_k$ = LexerDSL.prototype.invoke_rw362x_k$;
  ContextImpl_0.prototype.parseExpression$default_l3mjq9_k$ = ParserContext.prototype.parseExpression$default_l3mjq9_k$;
  ContextImpl_0.prototype.peek$default_l3mjq9_k$ = ParserContext.prototype.peek$default_l3mjq9_k$;
  ParserImpl.prototype.parse_lxcvpv_k$ = Parser.prototype.parse_lxcvpv_k$;
  InvalidNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  MultiExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  MultiNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  AssignNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  IdentifierExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  PropertyAccessExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  PropertyAssignNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  SubscriptAccessExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  SubscriptAssignNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  BreakExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  ContinueExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  DoWhileNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  ForNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  IfExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  IfNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  ReturnExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  ThrowExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  TryExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  WhileNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  DeclareFunctionExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  DeclareVariableNode.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  InvokeExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  InvokeLocalExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  InvokeMemberExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  BinaryOperation.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  EnsureNotNullExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  TypeofExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  UnaryOperation.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  ArrayExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  BooleanExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  DecimalExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  FunctionExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  IntegerExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  NullExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  ObjectExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  StringExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  ThisExpr.prototype.span_czcotl_k$ = Sectional.prototype.span_czcotl_k$;
  CompiledSource.prototype.toBytes_0_k$ = Serializable_0.prototype.toBytes_0_k$;
  _stableSortingIsSupported = null;
  output = output$init$();
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  lineSeparators = listOf(['\r\n', '\n', '\r']);
  BASE64 = Companion_getInstance_19().encodeUtf8_uk8unn_k$('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/')._data_1;
  BASE64_URL_SAFE = Companion_getInstance_19().encodeUtf8_uk8unn_k$('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_')._data_1;
  DEFAULT__new_UnsafeCursor = new UnsafeCursor();
  DEFAULT__ByteString_size = -1234567890;
  HEX_DIGIT_BYTES = asUtf8ToByteArray('0123456789abcdef');
  HEX_DIGIT_CHARS = HEX_DIGIT_CHARS$init$();
  SLASH = Companion_getInstance_19().encodeUtf8_uk8unn_k$('/');
  BACKSLASH = Companion_getInstance_19().encodeUtf8_uk8unn_k$('\\');
  ANY_SLASH = Companion_getInstance_19().encodeUtf8_uk8unn_k$('/\\');
  DOT = Companion_getInstance_19().encodeUtf8_uk8unn_k$('.');
  DOT_DOT = Companion_getInstance_19().encodeUtf8_uk8unn_k$('..');
  var $com = _.com || (_.com = {});
  var $com$github = $com.github || ($com.github = {});
  var $com$github$notjustanna = $com$github.notjustanna || ($com$github.notjustanna = {});
  var $com$github$notjustanna$lin = $com$github$notjustanna.lin || ($com$github$notjustanna.lin = {});
  var $com$github$notjustanna$lin$js = $com$github$notjustanna$lin.js || ($com$github$notjustanna$lin.js = {});
  $com$github$notjustanna$lin$js.Compilation = Compilation;
  $com$github$notjustanna$lin$js.ExecutionResult = ExecutionResult;
  Object.defineProperty($com$github$notjustanna$lin$js, 'Lin', {
    configurable: true,
    get: Lin_getInstance_0
  });
  $com$github$notjustanna$lin$js.VirtualMachine = VirtualMachine;
  return _;
}));

//# sourceMappingURL=lin.js.map