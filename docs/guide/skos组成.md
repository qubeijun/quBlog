## SKOS组成

SKOS词表是由一系列RDF定义的类和属性组成，这些类和属性涵盖了各种传统知识组织系统结构中使用到的标签。在基本的SKOS中，“概念”用URIs来识别，带有一种或多种自然语言“标签”，以及各种类型的“注释”，非等级结构或相关网络结构中的概念彼此“语义相关”，并集成“概念体系”。在高级的SKOS中，概念资源可以在不同的概念体系之间映射，被归入不同集合；可以指定概念标签之间的关系；也可以扩展SKOS词汇以适应特定群体的需要或者同其它数据模型的词汇相结合。另外，SKOS还定义了一个可选扩展-------SKOS扩展标签(SKOS eXtension for Labels, SKOS-XL)，该扩展提供识别、描述和链接词汇条目的额外支持。

根据最新发布的《SKOS参考》及《SKOS初级读本》，SKOS中的词汇标签及其说明见表2-1。

表2-1 SKOS词汇及其说明
|类型    |SKOS词汇                |说明|
|--------|-----------------------|---------|
|概念     |skos:Concept          |概念|
|词语标签 |skos:prefLabel         |首选标签|
|        |skos:altLabel          |非首选标签|
|        |skos:hiddenLabel       |隐藏标签|
|标记符号 |skos:notation          |标记|
|文档注释 |skos:note              |注释|
|        |skos:scopeNote         |范围注释|
|        |skos:definition        |定义注释|
|        |skos:example           |实例|
|        |skos:historyNote       |历史注释|
|        |skos:editorialNote     |编辑注释|
|        |skos:changeNote        |变更注释|
|语义关系 |skos:semanticRelation  |语义关系|
|        |skos:broader            |直接上位概念关系|
|        |skos:narrower           |直接下位概念关系|
|        |skos:related            |相关概念关系|
|        |skos:broaderTransitive  |上位概念(直接和非直接)关系|
|        |skos:narrowerTransitive |下位概念(直接和非直接)关系|
|概念体系 |skos:ConceptScheme      |概念体系|
|        |skos:inScheme            |在概念体系中|
|        |skos:hasTopConcept       |最高概念是|
|        |skos:topConceptOf        |是...的最高概念|
|概念集合 |skos:Collection          |集合|
|        |skos:member              |成员|
|        |skos:OrderedCollection   |有序集合|
|        |skos:memberList          |成员列表|
|映射关系 |skos:mappingRelation     |映射关系|
|        |skos:exactMatch          |准确匹配|
|        |skos:closeMatch          |相似匹配|
|        |skos:broadMatch          |上位匹配|
|        |skos:narrowMatch         |下位匹配|
|        |skos:relatedMatch        |相关匹配|
|扩展标签 |skosxl:Label             |skosxl标签|
|        |skosxl:prefLabel         |首选skosxl标签|
|        |skosxl:altLabel          |非首选skosxl标签|
|        |skosxl:hiddenLabel       |隐藏skosxl标签|
|        |skosxl:LiteralForm       |文本形式|
|        |skosxl:labelRelation     |skosxl标签关系|

## 附录1：SKOS词汇及其与《中分表》对照说明

### 1.概念类

SKOS词汇：

    skos:Concept(概念)

含义说明

    skos:Concept(概念)
    
    SKOS使用skos:Concept类来声明特定资源是一个概念。先通过创建（或再利用）一个统一资源标识符（URI）来唯一标识概念；然后通过RDF声明，用这个URI标识的资源是一种类型的概念。

示例：

    主题词款目（“交响曲”）
    <http://id_cct.nlc.gov.cn/thesaurus/S038576>rdf:type skos:Concept.
    分类款目（“B哲学、宗教”）
    <http://id_cct.nlc.gov.cn/classification/C000158>rdf:type skos:Concept.

同词表对应情况：

- 对应整条主题词款目。
- 对应整条分类款目。

可将MARC记录中“001 记录控制号”转化成HTTP协议下的URI资源，作为概念的唯一标识。MARC记录包括的其他字段在后面SKOS词汇中分别说明。

### 2.概念体系