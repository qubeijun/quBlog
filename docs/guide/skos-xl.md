# 附录B.SKOS标签扩展（SKOS-XL）

本附录定义了简单知识组织系统的可选扩展，称为标签的SKOS扩展（SKOS-XL）。这个扩展为识别、描述和链接词汇实体提供了额外的支持。

定义了一类特殊的词汇实体，称为skosxl:Label。这个类的每个实例都有一个单独的RDF纯文本形式，但是如果两个实例共享同一个文本形式，则它们不一定是同一个实例。

定义了三个标签属性：skosxl:prefLabel、skosxl:altLabel和skosxl:hiddenLabel这些属性用于用skosxl:label的实例标记SKOS概念，或者类似于SKOS中定义的相同本地名称的属性（SKOS:prefLabel、SKOS:altLabel和SKOS:hiddenLabel）。

SKOS数据模型还定义了属性skosxl:labelRelation。此属性可用于断言skosxl:Label实例之间的直接（二进制）链接。它主要用作扩展点，以便针对更具体的链接类型进行优化。没有提供skosxl:labelRelation的内置改进，尽管给出了一些如何实现这一点的示例。

## B.1. SKOS-XL Namespace and Vocabulary(SKOS-XL命名空间与词汇)

SKOS-XL命名空间URI是：

- **http://www.w3.org/2008/05/skos-xl#**

这里，前缀SKOS XL:用作SKOS-XL命名空间URI的缩写。

SKOS-XL词汇表是下表左侧列中给出的一组uri。

Table 2. The SKOS-XL Vocabulary

|  URI                 | Defined by (section of this appendix)                  |
| -------------------- | ------------------------------------------------------ |
| skosxl:Label         | [The skosxl:Label Class](#b-2-the-skosxl-label-class)                        |
| skosxl:literalForm   | [The skosxl:Label Class](#b-2-the-skosxl-label-class)                        |
| skosxl:prefLabel     | [Preferred, Alternate and Hidden skosxl:Labels](#b-3-preferred-alternate-and-hidden-skosxl-labels-首选、备用和隐藏的skosxl-labels) |
| skosxl:altLabel      | [Preferred, Alternate and Hidden skosxl:Labels](#b-3-preferred-alternate-and-hidden-skosxl-labels-首选、备用和隐藏的skosxl-labels) |
| skosxl:hiddenLabel   | [Preferred, Alternate and Hidden skosxl:Labels](#b-3-preferred-alternate-and-hidden-skosxl-labels-首选、备用和隐藏的skosxl-labels) |
| skosxl:labelRelation | [Links Between skosxl:Labels](#B.4.)                   |

这里的“SKOS-XL词汇表”是指SKOS词汇表和SKOS-XL词汇表的结合。

此处“XL数据模型”仅指本附录中所述的类和属性定义“SKOS+XL数据模型”是指上文第3-10节中定义的数据模型与XL数据模型的结合。

## B.2. The skosxl:Label Class

### B.2.1. Preamble(序言)

skosxl:Label类是一个特殊的词汇实体类。

skosxl:Label类的实例是一个资源，可以用URI命名。

skosxl:Label类的一个实例只有一个文本形式。此文本形式是RDF纯文本（它是一个UNICODE字符字符串和一个可选的语言标记[RDF-CONCEPTS]）。属性skosxl:literalForm用于给出skosxl:Label的文本形式。

如果skosxl:Label类的两个实例具有相同的文本形式，则它们不一定是相同的资源。

### B.2.2. Class and Property Definitions(类和属性定义)

|     |                                                                            |
| --- | -------------------------------------------------------------------------- |
| S47	| skosxl:Label是owl:Class的一个实例。                                         |
| S48	| skosxl:Label与每个skos:Concept、skos:ConceptScheme和skos:Collection不相交。 |
| S49	| skosxl:literalForm是owl:DatatypeProperty的一个实例。                        |
| S50	| skosxl:literalForm的rdfs:domain是skosxl:Label类。                          |
| S51	| skosxl:literalForm的rdfs:range是RDF纯文本的类。                             |
| S52	| skosxl:Label是skosxl:literalForm基数正好为1的限制的子类。                    |

### B.2.3. Examples

下面的示例描述了一个skosxl:Label，其URI<http://example.com/ns/a>，英文文本形式为“love”。

| Example 75 (consistent)                                     |
| ----------------------------------------------------------- |
| < A > rdf:type skosxl:Label ; skosxl:literalForm "love"@en. |

下面的四个例子都与XL数据模型不一致，因为skosxl:Label是用两种不同的文字形式描述的。

| Example 76 (not consistent)                                                                |
| ------------------------------------------------------------------------------------------ |
| < B > rdf:type skosxl:Label ; skosxl:literalForm "love" ; skosxl:literalForm "adoration" . |

| Example 77 (not consistent)                                                                 |
| ------------------------------------------------------------------------------------------- |
| < B > rdf:type skosxl:Label ; skosxl:literalForm "love"@en ; skosxl:literalForm "love"@fr . |

| Example 78 (not consistent)                                                                       |
| ------------------------------------------------------------------------------------------------- |
| < B > rdf:type skosxl:Label ; skosxl:literalForm "love"@en-GB ; skosxl:literalForm "love"@en-US . |

| Example 79 (not consistent)                                                                          |
| ---------------------------------------------------------------------------------------------------- | 
| < B > rdf:type skosxl:Label ; skosxl:literalForm "東"@ja-Hani ; skosxl:literalForm "ひがし"@ja-Hira . |

### B.2.4. Notes

#### B.2.4.1. Identity and Entailment(同一性与蕴涵)

如上所述，skosxl:Label类的每个实例都只有一个文本形式。换句话说，有一个函数将skosxl:Label的类扩展映射到RDF纯文本集。此函数由skosxl:literalForm的属性扩展定义。请特别注意关于此函数的两个事实。

首先，函数不是内射的。换句话说，从skosxl:Label实例到RDF纯文本集（实际上是多对一）没有一对一的映射。这意味着skosxl:Label的两个实例具有相同的文本形式，它们不一定是同一个个体。因此，例如，XL数据模型不支持下面所示的蕴涵。

| Example 80 (non-entailment)                                                     |
| ------------------------------------------------------------------------------- |
| < A > skosxl:literalForm "love"@en . <br/> < B > skosxl:literalForm "love"@en . |
| does not entail                                                                 |
| < A > owl:sameAs < B > .                                                        |

第二，函数不是满射的。换句话说，对于给定的纯文本l，可能没有skosxl:Label与文本形式l的任何实例。

#### B.2.4.2. Membership of Concept Schemes(概念方案的隶属度)

可以使用skos:inScheme属性断言SKOS概念方案中skosxl:Label实例的成员身份。
| Example 81 (consistent)                                                                   |
| ----------------------------------------------------------------------------------------- |
| < A > rdf:type skosxl:Label ; skosxl:literalForm "love"@en ; skos:inScheme < MyScheme > . |

## B.3. Preferred, Alternate and Hidden skosxl:Labels(首选、备用和隐藏的skosxl:Labels)

### B.3.1. Preamble(序言)

skosxl:prefLabel、skosxl:altLabel和skosxl:hiddenLabel这三个属性分别用于给出资源的首选标签、可选标签和隐藏标签，其中这些标签是类skosxl:Label的实例。这些属性类似于SKOS词汇表中定义的相同本地名称的属性，并且在下面定义的这两组属性之间存在逻辑依赖关系。

### B.3.2. Class and Property Definitions(类和属性定义)

|||
|-|-|
|S53|skosxl:prefLabel、skosxl:altLabel和skosxl:hiddenLabel是owl:ObjectProperty的每个实例。|
|S54|skosxl:prefLabel、skosxl:altLabel和skosxl:hiddenLabel的rdfs:range是skosxl:Label类。|
|S55|属性链（skosxl:prefLabel，skosxl:literalForm）是skos:prefLabel的子属性。|
|S56|属性链（skosxl:altLabel，skosxl:literalForm）是skos:altLabel的子属性。|
|S57|属性链（skosxl:hiddenLabel，skosxl:literalForm）是skos:hiddenLabel的子属性。|
|S58|skosxl:prefLabel，skosxl:altLabel and skosxl:hiddenLabel是成对不相交的属性。|

### B.3.3. Examples

下面的示例演示了所有三个XL标签属性的使用，并且与SKOS+XL数据模型一致。
|Example 82 (consistent)|
|-|
|< Love ><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skosxl:prefLabel< A >;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skosxl:altLabel< B >;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skosxl:hiddenLabel< C >.<br/><br/>< A >rdf:type skosxl:Label;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skosxl:literalForm "love"@en .<br/><br/>< B >rdf:type skosxl:Label;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skosxl:literalForm "adoration"@en.<br/><br/>< C > rdf:type skosxl:Label;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skosxl:literalForm "luv"@en.|